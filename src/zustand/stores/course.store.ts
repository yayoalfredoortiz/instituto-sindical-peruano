import { StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { toastError, toastSuccess } from '@/utils/toast';
import { Course } from '../interfaces/course.interface';
import { Router } from '@/types/router';
import { CourseFilters, CourseService } from '../services/course.service'; 

interface CourseState {
  data: Course[];
  reviewData: Course[];
  publishedData: Course[];
  item?: Course | null;
  loading: boolean;
  error: boolean;
  count: number;
  reviewCount: number;
  publishedCount: number;
  activeStatus: number;
  page: number;
  perPage: number;
  filters: CourseFilters;
  loaded: boolean; // ✅ bandera agregada

  getAll: (currentPage: number, pageSize: number, filters?: CourseFilters) => void;
  getById: (id: string) => Promise<Course | null>;
  create: (data: Partial<Course>, router: Router) => void;
  update: (id: number, data: Partial<Course>) => void;
  delete: (id: number) => Promise<void>;
  markAsDeleted: (id: string) => Promise<void>;

  setPage: (page: number) => void;
  setPerPage: (perPage: number) => void;
  setFilters: (filters: CourseFilters) => void;
}

const storeApi: StateCreator<CourseState> = (set, get) => ({
  loading: false,
  error: false,
  data: [],
  reviewData: [],
  publishedData: [],
  item: null,
  count: 0,
  publishedCount: 0,
  reviewCount: 0,
  activeStatus: 0,
  page: 1,
  perPage: 10,
  filters: {},
  loaded: false, // ✅ inicializar

  setPage: (page) => set({ page }),
  setPerPage: (perPage) => set({ perPage }),
  setFilters: (filters) => set({ filters }),

  async getAll(currentPage, pageSize, filters = {}) {
    const offset = (currentPage - 1) * pageSize;

    //if (get().loaded) return; // ✅ evita doble carga
    set({ loading: true, error: false });

    try {
      const { count, data } = await CourseService.getAll(pageSize, offset, filters);
      const status = filters.status;

      if (status === 2) {
        set({ reviewData: data, reviewCount: count, data, count, activeStatus: 2 });
      } else if (status === 3) {
        set({ publishedData: data, publishedCount: count, data, count, activeStatus: 3 });
      } else {
        set({ data, count });
      }

      set({ loading: false, loaded: true }); // ✅ marcar como cargado
    } catch (error) {
      set({ error: true, loading: false, data: [] });
      toastError('Error al obtener los cursos');
    }
  },

  async getById(id) {
    set({ loading: true, error: false });
    try {
      const item = await CourseService.getById(id);
      set({ loading: false, item });
      return item;
    } catch (error) {
      set({ error: true, loading: false, item: null });
      toastError('Error al obtener el curso');
      return null;
    }
  },

  async create(data, router) {
    set({ loading: true, error: false });
    try {
      await CourseService.create(data);
      set({ loading: false, loaded: false }); // ❗ reset por si se vuelve a cargar
      toastSuccess('Curso creado correctamente');
      router.back();
    } catch (error: any) {
      set({ loading: false, error: true });
      toastError(error?.message || 'Error al crear el curso');
    }
  },

  async update(id, data) {
    set({ loading: true, error: false });
    try {
      await CourseService.update(id, data);
      set({ loading: false, loaded: false });
      toastSuccess('Curso actualizado correctamente');
    } catch (error) {
      set({ loading: false, error: true });
      toastError('Error al actualizar el curso');
    }
  },

  async delete(id) {
    set({ loading: true, error: false });
    try {
      await CourseService.delete(id);
      set({ loading: false, loaded: false });
      toastSuccess('Curso eliminado correctamente');
      const { page, perPage, filters } = get();
      get().getAll(page, perPage, filters);
    } catch (error) {
      set({ loading: false, error: true });
      toastError('Error al eliminar el curso');
    }
  },

  async markAsDeleted(id) {
    set({ loading: true, error: false });
    try {
      await CourseService.markAsDeleted(id);
      set({ loading: false, loaded: false });
      toastSuccess('Curso marcado como eliminado');
      get().getAll(get().page, get().perPage, { status: 3 });
    } catch (error) {
      set({ loading: false, error: true });
      toastError('Error al eliminar el curso');
    }
  },
});

export const useCourseStore = create<CourseState>()(devtools(storeApi));
