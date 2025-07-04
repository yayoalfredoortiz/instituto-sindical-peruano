import { StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { WhyChooseUs } from '../interfaces/why-choose-us.interface';
import { WhyChooseUsService } from '../services/why-choose-us.service';

interface WhyChooseUsState {
  data: WhyChooseUs[];
  item?: WhyChooseUs | null;
  loading: boolean;
  error: boolean;
  loaded: boolean; // ✅ Nuevo flag
  count: number;
  page: number;
  perPage: number;
  getAll: (currentPage: number, pageSize: number) => void;
  getById: (id: number) => Promise<WhyChooseUs | null>;
  setPage: (page: number) => void;
  setPerPage: (perPage: number) => void;
}

const storeApi: StateCreator<WhyChooseUsState> = (set, get) => ({
  loading: false,
  error: false,
  loaded: false, // ✅ Inicialización
  data: [],
  item: null,
  count: 0,
  page: 1,
  perPage: 10,

  setPage: (page: number) => set({ page }),
  setPerPage: (perPage: number) => set({ perPage }),

  async getAll(currentPage: number, pageSize: number) {
    if (get().loaded) return; // ✅ Evita recarga si ya está cargado
    const offset = (currentPage - 1) * pageSize;
    set({ loading: true, error: false });
    try {
      const { count, data } = await WhyChooseUsService.getAll(pageSize, offset);
      set({ loading: false, data, count, loaded: true }); // ✅ Marcar como cargado
    } catch (error) {
      set({ error: true, loading: false, data: [], loaded: false });
    }
  },

  async getById(id: number) {
    set({ loading: true, error: false });
    try {
      const item = await WhyChooseUsService.getById(id);
      set({ loading: false, item });
      return item;
    } catch (error) {
      set({ error: true, loading: false, item: null });
      throw error;
    }
  },
});

export const useWhyChooseUsStore = create<WhyChooseUsState>()(devtools(storeApi));
