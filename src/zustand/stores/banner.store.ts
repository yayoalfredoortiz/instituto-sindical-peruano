import { StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware'; 
import { Banner } from '../interfaces/banner.interface';
import { BannerService } from '../services/banner.service';

interface BannerState {
  data: Banner[];
  item?: Banner | null;
  loading: boolean;
  error: boolean;
  count: number;
  page: number;
  perPage: number;
  loaded: boolean; // ✅
  getAll: (currentPage: number, pageSize: number) => void;
  getById: (id: number) => Promise<Banner | null>; 
  setPage: (page: number) => void;
  setPerPage: (perPage: number) => void;
}

const storeApi: StateCreator<BannerState> = (set, get) => ({
  loading: false,
  error: false,
  data: [],
  item: null,
  count: 0,
  page: 1,
  perPage: 10,
  loaded: false, // ✅

  setPage: (page: number) => set({ page }),
  setPerPage: (perPage: number) => set({ perPage }),

  async getAll(currentPage: number, pageSize: number) {
    const offset = (currentPage - 1) * pageSize;
    const { loaded } = get();
    if (loaded) return; // ✅ evitar recarga innecesaria

    set({ loading: true, error: false });
    try {
      const { count, data } = await BannerService.getAll(pageSize, offset);
      set({ loading: false, data, count, loaded: true }); // ✅
    } catch (error) {
      set({ error: true, loading: false, data: [] });
    }
  },

  async getById(id: number) {
    set({ loading: true, error: false });
    try {
      const item = await BannerService.getById(id);
      set({ loading: false, item });
      return item;
    } catch (error) {
      set({ error: true, loading: false, item: null });
      throw error;
    }
  }, 
});

export const useBannerStore = create<BannerState>()(devtools(storeApi));
