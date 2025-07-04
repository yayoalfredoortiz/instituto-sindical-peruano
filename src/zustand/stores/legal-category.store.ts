import { StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { LegalCategory } from '../interfaces/legal-category.interface';
import { LegalCategoryService } from '../services/legal-category.service';

interface CategoryState {
  data: LegalCategory[];
  item?: LegalCategory | null;
  loading: boolean;
  error: boolean;
  count: number;
  page: number;
  perPage: number;
  loaded: boolean; // ✅ agregado
  getAll: (currentPage: number, pageSize: number, search?: string) => void;
  getById: (id: number) => Promise<LegalCategory | null>;
  setPage: (page: number) => void;
  setPerPage: (perPage: number) => void;
}

const storeApi: StateCreator<CategoryState> = (set, get) => ({
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

  async getAll(currentPage: number, pageSize: number, search?: string) {
    const offset = (currentPage - 1) * pageSize;

    if (get().loaded) return; // ✅ evitar recarga

    set({ loading: true, error: false });
    try {
      const { count, data } = await LegalCategoryService.getAll(pageSize, offset);
      set({ loading: false, data, count, loaded: true }); // ✅ marcar como cargado
    } catch (error) {
      set({ error: true, loading: false, data: [], loaded: false });
    }
  },

  async getById(id: number) {
    set({ loading: true, error: false });
    try {
      const item = await LegalCategoryService.getById(id);
      set({ loading: false, item });
      return item;
    } catch (error) {
      set({ error: true, loading: false, item: null });
      throw error;
    }
  },
});

export const useLegalCategoryStore = create<CategoryState>()(devtools(storeApi));
