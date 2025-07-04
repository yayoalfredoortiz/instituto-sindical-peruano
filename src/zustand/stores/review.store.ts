import { StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { toastError, toastSuccess } from '@/utils/toast';
import { Review } from '../interfaces/review.interface';
import { ReviewService } from '../services/review.service';

interface ReviewState {
  data: Review[];
  item?: Review | null;
  loading: boolean;
  error: boolean;
  loaded: boolean; // ✅ nuevo flag
  count: number;
  page: number;
  perPage: number;
  getAll: (page: number, limit: number, type?: string, id?: number) => void;
  getById: (id: number) => Promise<Review | null>;
  create: (data: Omit<Review, 'id' | 'user'>) => void;
  update: (id: number, data: Partial<Review>) => void;
  setPage: (page: number) => void;
  setPerPage: (perPage: number) => void;
}

const storeApi: StateCreator<ReviewState> = (set, get) => ({
  loading: false,
  error: false,
  loaded: false, // ✅ inicialización
  data: [],
  item: null,
  count: 0,
  page: 1,
  perPage: 10,

  setPage: (page: number) => set({ page }),
  setPerPage: (perPage: number) => set({ perPage }),

  async getAll(page: number, limit: number, type?: string, id?: number) {
    if (get().loaded) return; // ✅ evita recarga si ya se cargó
    const offset = (page - 1) * limit;
    set({ loading: true, error: false });
    try {
      const { count, data } = await ReviewService.getAll(limit, offset, type, id);
      set({ loading: false, data, count, loaded: true }); // ✅ marcar como cargado
    } catch (error) {
      set({ error: true, loading: false, data: [], loaded: false });
    }
  },

  async getById(id: number) {
    set({ loading: true, error: false });
    try {
      const item = await ReviewService.getById(id);
      set({ loading: false, item });
      return item;
    } catch (error) {
      set({ error: true, loading: false, item: null });
      throw error;
    }
  },

  async create(data) {
    set({ loading: true, error: false });
    try {
      await ReviewService.create(data);
      set({ loading: false, loaded: false }); // ✅ permite recarga futura
      toastSuccess('Reseña creada correctamente');
    } catch (error: any) {
      set({ loading: false, error: true });
      toastError(error.message || 'Error al crear la reseña');
    }
  },

  async update(id, data) {
    set({ loading: true, error: false });
    try {
      await ReviewService.update(id, data);
      set({ loading: false, loaded: false }); // ✅ permite recarga futura
      toastSuccess('Reseña actualizada correctamente');
    } catch (error) {
      set({ loading: false, error: true });
      toastError('Error al actualizar la reseña');
    }
  },
});

export const useReviewStore = create<ReviewState>()(devtools(storeApi));
