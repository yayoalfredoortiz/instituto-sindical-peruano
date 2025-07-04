import { StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware'; 
import { Level } from '../interfaces/level.interface';
import { CourseLevelService } from '../services/course-level.service';

interface LevelState {
  data: Level[];
  item?: Level | null;
  loading: boolean;
  error: boolean;
  count: number;
  page: number;
  perPage: number;
  loaded: boolean; // ✅ agregado
  getAll: (currentPage: number, pageSize: number) => void;
  getById: (id: number) => Promise<Level | null>; 
  setPage: (page: number) => void;
  setPerPage: (perPage: number) => void;
}

const storeApi: StateCreator<LevelState> = (set, get) => ({
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

  async getAll(currentPage: number, pageSize: number) {
    const offset = (currentPage - 1) * pageSize;
    const { loaded } = get();
    if (loaded) return; // ✅ evitar recarga si ya se hizo

    set({ loading: true, error: false });
    try {
      const { count, data } = await CourseLevelService.getAll(pageSize, offset);
      set({ loading: false, data, count, loaded: true }); // ✅ marcar como cargado
    } catch (error) {
      set({ error: true, loading: false, data: [] });
    }
  },

  async getById(id: number) {
    set({ loading: true, error: false });
    try {
      const item = await CourseLevelService.getById(id);
      set({ loading: false, item });
      return item;
    } catch (error) {
      set({ error: true, loading: false, item: null });
      throw error;
    }
  }, 
});

export const useCourseLevelStore = create<LevelState>()(devtools(storeApi));
