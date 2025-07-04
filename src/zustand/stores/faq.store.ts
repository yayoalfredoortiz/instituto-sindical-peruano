import { StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { FaqService } from '../services/faq.service';
import { Faq } from '../interfaces/faq.interface';

interface FaqState {
  data: Faq[];
  item?: Faq | null;
  loading: boolean;
  error: boolean;
  count: number;
  page: number;
  perPage: number;
  loaded: boolean; // ✅ nuevo campo
  getAll: (currentPage: number, pageSize: number) => void;
  getById: (id: number) => Promise<Faq | null>;
  setPage: (page: number) => void;
  setPerPage: (perPage: number) => void;
}

const storeApi: StateCreator<FaqState> = (set, get) => ({
  loading: false,
  error: false,
  data: [],
  item: null,
  count: 0,
  page: 1,
  perPage: 10,
  loaded: false, // ✅ inicializado

  setPage: (page: number) => set({ page }),
  setPerPage: (perPage: number) => set({ perPage }),

  async getAll(currentPage: number, pageSize: number) {
    const offset = (currentPage - 1) * pageSize;

    if (get().loaded) return; // ✅ evita recarga innecesaria

    set({ loading: true, error: false });
    try {
      const { count, data } = await FaqService.getAll(pageSize, offset);
      set({ loading: false, data, count, loaded: true }); // ✅ marcar como cargado
    } catch (error) {
      set({ error: true, loading: false, data: [], loaded: false });
    }
  },

  async getById(id: number) {
    set({ loading: true, error: false });
    try {
      const item = await FaqService.getById(id);
      set({ loading: false, item });
      return item;
    } catch (error) {
      set({ error: true, loading: false, item: null });
      throw error;
    }
  },
});

export const useFaqStore = create<FaqState>()(devtools(storeApi));
