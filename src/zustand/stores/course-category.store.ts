import { StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware'; 
import { Category } from '../interfaces/category.interface';
import { CourseCategoryService } from '../services/course-category.service';

interface CategoryState {
  data: Category[];
  item?: Category | null;
  loading: boolean;
  error: boolean;
  count: number;
  page: number;
  perPage: number;
  loaded: boolean; // ✅ agregado
  getAll: (currentPage: number, pageSize: number, search?: string) => void;
  getById: (id: number) => Promise<Category | null>; 
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
  loaded: false, // ✅ agregado

  setPage: (page: number) => set({ page }),
  setPerPage: (perPage: number) => set({ perPage }),

  async getAll(currentPage: number, pageSize: number, search?: string) {
    const offset = (currentPage - 1) * pageSize;
    const { loaded } = get();
    if (loaded) return; // ✅ evita recarga innecesaria

    set({ loading: true, error: false });
    try {
      const { count, data } = await CourseCategoryService.getAll(pageSize, offset);
      set({ loading: false, data, count, loaded: true }); // ✅ marcar como cargado
    } catch (error) {
      set({ error: true, loading: false, data: [] });
    }
  },

  async getById(id: number) {
    set({ loading: true, error: false });
    try {
      const item = await CourseCategoryService.getById(id);
      set({ loading: false, item });
      return item;
    } catch (error) {
      set({ error: true, loading: false, item: null });
      throw error;
    }
  }, 
});

export const useCourseCategoryStore = create<CategoryState>()(devtools(storeApi));
