import { StateCreator, create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { AuthService } from '../services/auth.service'; 
import { AuthStatus } from '../interfaces/auth-status.interface';
import { User } from '../interfaces/user.interface';
import { customLocalStorage } from '@/storage/local.storage';

export interface AuthState {

  status: AuthStatus;
  token?: string;
  user?: User;
  loading?: boolean;
  isVerified?: boolean;
  loginUser: (email: string, password: string, rememberMe?: boolean) => Promise<void>;
  // forgetPassword: (email: string) => Promise<void>;
  // resetPassword: (token: string, newPassword: string) => Promise<void>;
  checkAuthStatus: () => Promise<void>;
  logoutUser: () => void;
}


const storeApi: StateCreator<AuthState> = (set) => ({

  status: 'pending',
  token: undefined,
  user: undefined,
  loading: false,
  isVerified: false,

  loginUser: async (email: string, password: string, rememberMe: boolean = false) => {
    set({ loading: true });
    try {
      const { token, ...user } = await AuthService.login(email, password, rememberMe);
      set({ status: 'authorized', token, user, loading: false, isVerified: true });

    } catch (error) {
      set({ status: 'unauthorized', token: undefined, user: undefined, loading: false, isVerified: false });
      throw 'Unauthorized';
    }

  },

  checkAuthStatus: async () => {

    try {
      const { token, ...user } = await AuthService.checkStatus();
      console.log(token, '-', user);
      set({ status: 'authorized', token, user, isVerified: true });

    } catch (error) {
      console.log(error);
      set({ status: 'unauthorized', token: undefined, user: undefined, isVerified: true });
    }
  },

  logoutUser: () => {
    set({ status: 'unauthorized', token: undefined, user: undefined, isVerified: false });
  },

  // forgetPassword: async (email: string) => {
  //   set({ loading: true });

  //   try {
  //     await AuthService.forgetPassword(email);
  //     set({ loading: false });

  //   } catch (error) {
  //     set({ loading: false });
  //     throw error;
  //   }

  // },
  // resetPassword: async (token: string, newPassword: string) => {
  //   set({ loading: true });
  //   try {
  //     await AuthService.resetPassword(token, newPassword);
  //     set({ loading: false });

  //   } catch (error) {
  //     set({ loading: false });
  //     throw error;
  //   } 
  // },
});


export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      storeApi,
      {
        name: 'auth-storage',
        storage: customLocalStorage,
        // partialize: (state) => ({
        //   status: state.status,
        //   token: state.token,
        //   user: state.user,
        //   loading: state.loading,
        // }),
      }
    )
  )
);