import { StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware'; 
import { BusinessService } from '../interfaces/business-service.interface';
import { BusinessServiceService } from '../services/business-service.service';

interface BusinessServiceState {
  data: BusinessService[];
  item?: BusinessService | null;
  loading: boolean;
  error: boolean;
  count: number;
  page: number;
  perPage: number;
  loaded: boolean; // ✅ nuevo
  getAll: (currentPage: number, pageSize: number) => void;
  getById: (id: number) => Promise<BusinessService | null>;
  setPage: (page: number) => void;
  setPerPage: (perPage: number) => void;
}

const storeApi: StateCreator<BusinessServiceState> = (set, get) => ({
  loading: false,
  error: false,
  data: [],
  item: null,
  count: 0,
  page: 1,
  perPage: 10,
  loaded: false, // ✅ nuevo

  setPage: (page: number) => set({ page }),
  setPerPage: (perPage: number) => set({ perPage }),

  async getAll(currentPage: number, pageSize: number) {
    const offset = (currentPage - 1) * pageSize;
    const { loaded } = get();
    if (loaded) return; // ✅ evitar recarga si ya está cargado

    set({ loading: true, error: false });
    try {
      const { count, data } = await BusinessServiceService.getAll(pageSize, offset);
      set({ loading: false, data, count, loaded: true }); // ✅ marcar como cargado
    } catch (error) {
      set({ error: true, loading: false, data: [] });
    }
  },

  async getById(id: number) {
    set({ loading: true, error: false });
    try {
      const item = await BusinessServiceService.getById(id);
      set({ loading: false, item });
      return item;
    } catch (error) {
      set({ error: true, loading: false, item: null });
      throw error;
    }
  },
});

export const useBusinessServiceStore = create<BusinessServiceState>()(
  devtools(storeApi)
);
