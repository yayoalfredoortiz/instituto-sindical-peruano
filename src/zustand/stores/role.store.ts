import { StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware'; 
import { Role } from '../interfaces/role.interface';
import { RoleService } from '../services/role.service';
import { toastError } from '@/utils/toast';

export interface RoleState {
  data: Role[];
  item?: Role | null;
  loading: boolean;
  error: boolean;
  count: number;
  page: number;
  perPage: number;

  getAll: (limit: number, offset: number) => void;
  getById: (id: number) => Promise<Role | null>; 
  setPage: (page: number) => void;
  setPerPage: (perPage: number) => void;
}

const storeApi: StateCreator<RoleState> = (set, get) => ({
  data: [],
  item: null,
  loading: false,
  error: false,
  count: 0,
  page: 1,
  perPage: 10,

  setPage: (page: number) => set({ page }),
  setPerPage: (perPage: number) => set({ perPage }),

  async getAll(currentPage: number, pageSize: number) {
    const offset = (currentPage - 1) * pageSize;
    set({ loading: true, error: false });
    try {
      const { data, count } = await RoleService.getAll(pageSize, offset);
      set({ loading: false, data, count });
    } catch (error) {
      set({ loading: false, error: true, data: [] });
      toastError('Error al obtener los roles');
    }
  },

  async getById(id: number) {
    set({ loading: true, error: false });
    try {
      const item = await RoleService.getById(id);
      set({ loading: false, item });
      return item;
    } catch (error) {
      set({ loading: false, error: true, item: null });
      toastError('Error al obtener el rol');
      return null;
    }
  }, 
});

export const useRoleStore = create<RoleState>()(devtools(storeApi));
