import { StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware'; 
import { User } from '../interfaces/user.interface';
import { Router } from 'next/router';
import { UserService } from '../services/user.service';
import { toastError, toastSuccess } from '@/utils/toast';

export interface UserState {

    data: User[];
    item?: User | null;
    loading: boolean;
    error: boolean;
    count: number;
    page: number;
    perPage: number;
    getAll: (limit: number, offset: number, search?: string) => void;
    getById: (id: number) => Promise<User | null>;
    createUser: (user: User, router: Router) => void;
    updateUser: (id: string, User: User) => void;
    //deleteUser: (id: number) => Promise<void>;
    setPage: (page: number) => void;
    setPerPage: (perPage: number) => void;
}


const storeApi: StateCreator<UserState> = (set, get) => ({

    loading: false,
    error: false,
    data: [],
    item: null,
    count: 0,
    page: 1,
    perPage: 10,

    setPage: (page: number) => set({ page: page }),
    setPerPage: (perPage: number) => set({ perPage }),

    async getAll(currentPage: number, pageSize: number, search?: string) {

        const offset = (currentPage - 1) * pageSize;

        set({ loading: true, error: false, count: 0 });
        try {
            const { count, data } = await UserService.getAll(pageSize, offset, search);
            // console.log(data); 
            set({ loading: false, data: data, count: count });
        } catch (error) {
            set({ error: true, loading: false, data: [] });
        }
    },

    async getById(id: number) {
        set({ loading: true, error: false });
        try {
            const item = await UserService.getById(id);
            set({ loading: false, item });
            return item; // 👈 esto lo necesitas para usar `await`
        } catch (error) {
            set({ error: true, loading: false, item: null }); // asegúrate de usar `null`, no `undefined`
            throw error;
        }
    },

    async createUser(User: User, router: Router) {
        set({ loading: true, error: false });
        try {
            await UserService.createUser(User);
            // console.log(data); 
            set({ loading: false });
            router.back();
            toastSuccess("Creado exitosamente");
        } catch (error: any) {
            set({ loading: false, error: true });

            const message =
                error?.response?.data?.message ??
                error?.message ??
                "Hubo problemas al crear";
            console.log(message);
            toastError(message);
        }
    },
    async updateUser(id: string, User: User) {
        set({ loading: true, error: false });
        try {
            await UserService.updateUser(id, User);
            // console.log(data); 
            set({ loading: false });
            toastSuccess("Actualizado exitosamente");
            // get().getAll(get().page,get().perPage);
        } catch (error) {
            set({ loading: false, error: true });
            toastError("Hubo problemas al actualizar");
        }
    },

    // async deleteUser(id: number) {
    //     set({ loading: true, error: false });
    //     try {
    //         await UserService.deleteUser(id);
    //         // console.log(data); 
    //         set({ loading: false });
    //         toastSuccess("Eliminados exitosamente");
    //         get().getAll(get().page, get().perPage);
    //     } catch (error) {
    //         set({ loading: false, error: true });
    //         toastError("Hubo problemas al eliminar");
    //         throw error;
    //     }
    // },

});


export const useUserStore = create<UserState>()(
    devtools(
        storeApi,
    )
);