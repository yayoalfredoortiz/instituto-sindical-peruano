import { kmFitnessApi } from '@/api/km-fitness.api';
import { AxiosError, isAxiosError } from 'axios';
import { Role } from '../interfaces/role.interface';

export interface LoginResponse {
  id: string;
  email: string;
  name: string;
  roles: Role[];
  token: string;
}


export class AuthService {


  static login = async (email: string, password: string, rememberMe: boolean = false): Promise<LoginResponse> => {

    try {
      const { data } = await kmFitnessApi.post<LoginResponse>('/auth/dashboard/login', { email, password, rememberMe, });
      //console.log(data);

      return data;

    } catch (error) {
      if (error instanceof AxiosError) {
        //console.log(error.response?.data);
        throw new Error(error.response?.data);
      }

      console.log(error);
      throw new Error('Unable to login')
    }
  }

  // static forgetPassword = async (
  //   email: string
  // ): Promise<{ success: boolean }> => {
  //   try {
  //     await kmFitnessApi.post('/auth/dashboard/forget-password', 
  //       { email },
  //       {
  //         headers:{
  //           'X-Frontend-Host': window.location.origin+"/authentication"
  //         }
  //       }

  //     );
  //     return {
  //       success: true,
  //     };
  //   } catch (error) {
  //     let errorMessage = 'Error inesperado';

  //     if (isAxiosError(error)) {
  //       errorMessage = error.response?.data?.message || error.message;
  //     } else if (error instanceof Error) {
  //       errorMessage = error.message;
  //     }

  //     console.error('Error:', errorMessage);

  //     throw new Error(errorMessage);
  //   }
  // };

  // static resetPassword = async (
  //   token: string,
  //   newPassword: string
  // ): Promise<{ message: string }> => {
  //   try {
  //     await kmFitnessApi.post(
  //       '/auth/dashboard/reset-password',
  //       { newPassword },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );

  //     return { 
  //       message: 'La contraseña ha sido actualizada correctamente.',
  //     };
  //   } catch (error) {
  //     let errorMessage = 'Error inesperado';

  //     if (isAxiosError(error)) {
  //       errorMessage = error.response?.data?.message || error.message;
  //     } else if (error instanceof Error) {
  //       errorMessage = error.message;
  //     }

  //     console.error('Error:', errorMessage);

  //     throw new Error(errorMessage);
  //   }
  // };

  static checkStatus = async (): Promise<LoginResponse> => {

    try {
      const { data } = await kmFitnessApi.get<LoginResponse>('/auth/check-status');

      return data;

    } catch (error) {
      // console.log(error);
      throw new Error('unauthorized');
    }
  }


}