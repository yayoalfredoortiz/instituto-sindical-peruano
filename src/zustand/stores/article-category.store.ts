import { StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware'; 
import { ArticleCategory } from '../interfaces/article-category.interface';
import { ArticleCategoryService } from '../services/article-category.service';
import { Option } from '@/types/option';

interface ArticleCategoryState {
  data: ArticleCategory[];
  dataSelect: Option[];
  item?: ArticleCategory | null;
  loading: boolean;
  error: boolean;
  count: number;
  page: number;
  perPage: number;
  loaded: boolean; // ✅
  getAll: (currentPage: number, pageSize: number, search?: string) => void;
  getById: (id: number) => Promise<ArticleCategory | null>; 
  setPage: (page: number) => void;
  setPerPage: (perPage: number) => void;
}

const storeApi: StateCreator<ArticleCategoryState> = (set, get) => ({
  loading: false,
  error: false,
  data: [],
  item: null,
  dataSelect: [],
  count: 0,
  page: 1,
  perPage: 10,
  loaded: false, // ✅

  setPage: (page: number) => set({ page }),
  setPerPage: (perPage: number) => set({ perPage }),

  async getAll(currentPage: number, pageSize: number, search?: string) {
    const offset = (currentPage - 1) * pageSize;
    const state = get();
    if (state.loaded) return; // ✅ Evita recargar

    set({ loading: true, error: false });
    try {
      const { count, data } = await ArticleCategoryService.getAll(pageSize, offset);
      console.log(data);
      const dataSelect = data.map((item) => ({
        value: item.id,
        label: item.ac_name,
      }));
      set({ loading: false, data, count, dataSelect, loaded: true }); // ✅ Marca como cargado
    } catch (error) {
      set({ error: true, loading: false, data: [], dataSelect: [] });
    }
  },

  async getById(id: number) {
    set({ loading: true, error: false });
    try {
      const item = await ArticleCategoryService.getById(id);
      set({ loading: false, item });
      return item;
    } catch (error) {
      set({ error: true, loading: false, item: null });
      throw error;
    }
  },
});

export const useArticleCategoryStore = create<ArticleCategoryState>()(devtools(storeApi));
