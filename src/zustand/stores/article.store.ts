import { StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { Article } from '../interfaces/article.interface';
import { ArticleService } from '../services/article.service';

interface ArticleState {
  data: Article[];
  item?: Article | null;
  loading: boolean;
  error: boolean;
  count: number;
  page: number;
  perPage: number;
  loaded: boolean;
  filters?: {
    categoryId?: number;
    search?: string;
  };
  getAll: (
    currentPage: number,
    pageSize: number,
    filters?: {
      categoryId?: number;
      search?: string;
    }
  ) => void;
  getById: (id: string) => Promise<Article | null>;
  setPage: (page: number) => void;
  setPerPage: (perPage: number) => void;
  setFilters: (filters: ArticleState['filters']) => void;
}

const storeApi: StateCreator<ArticleState> = (set, get) => ({
  loading: false,
  error: false,
  data: [],
  item: null,
  count: 0,
  page: 1,
  perPage: 10,
  loaded: false,
  filters: {},

  setPage: (page: number) => set({ page }),
  setPerPage: (perPage: number) => set({ perPage }),
  setFilters: (filters) => set({ filters, loaded: false }), // permite refrescar los datos

  async getAll(currentPage, pageSize, filters = get().filters) {
    const offset = (currentPage - 1) * pageSize;

    set({ loading: true, error: false });

    try {
      const { count, data } = await ArticleService.getAll(pageSize, offset, filters);
      set({ data, count, loaded: true, loading: false });
    } catch (error) {
      set({ error: true, loading: false, data: [] });
    }
  },

  async getById(id: string) {
    set({ loading: true, error: false });
    try {
      const item = await ArticleService.getById(id);
      set({ loading: false, item });
      return item;
    } catch (error) {
      set({ error: true, loading: false, item: null });
      throw error;
    }
  },
});

export const useArticleStore = create<ArticleState>()(devtools(storeApi));
