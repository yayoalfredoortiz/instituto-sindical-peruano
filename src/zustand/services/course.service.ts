import { kmFitnessApi } from '@/api/km-fitness.api';
import { AxiosError } from 'axios';
import { Course } from '../interfaces/course.interface';
import qs from 'qs';

export interface CourseListResponse {
  count: number;
  limit: number;
  offset: number;
  data: Course[];
}

export interface CourseFilters {
  status?: number;
  search?: string;
  levelId?: string;
  isPaid?: string;
  categoryId?: string[];
}

export class CourseService {

  static getAll = async (
    limit: number,
    offset: number,
    filters: CourseFilters = {}
  ): Promise<CourseListResponse> => {

    try {
      const { data } = await kmFitnessApi.get<CourseListResponse>('/courses', {
        params: {
          limit,
          offset,
          status: 3,
          ...filters,
        },
        paramsSerializer: params => qs.stringify(params, { arrayFormat: 'comma' }), 
      });

      return data;
    } catch (error) {
      console.error(error);
      throw new Error('No se pudo listar los cursos');
    }
  };

  static getById = async (id: string): Promise<Course> => {
    try {
      const { data } = await kmFitnessApi.get<Course>(`/courses/${id}`);
      return data;
    } catch (error) {
      console.error(error);
      throw new Error(`No se pudo obtener el curso con id: ${id}`);
    }
  };

  static create = async (course: Partial<Course>): Promise<Course> => {
    try {
      const { data } = await kmFitnessApi.post<Course>('/courses', course);
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data?.message || 'Error al crear el curso');
      }
      throw new Error('No se pudo crear el curso');
    }
  };

  static update = async (id: number, course: Partial<Course>): Promise<Course> => {
    try {
      const { data } = await kmFitnessApi.put<Course>(`/courses/${id}`, course);
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data?.message || 'Error al actualizar el curso');
      }
      throw new Error('No se pudo actualizar el curso');
    }
  };

  static delete = async (id: number): Promise<void> => {
    try {
      await kmFitnessApi.delete(`/courses/${id}`);
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data?.message || 'Error al eliminar el curso');
      }
      throw new Error('No se pudo eliminar el curso');
    }
  };

  static markAsDeleted = async (id: string): Promise<{ message: string; course: Course }> => {
    try {
      const { data } = await kmFitnessApi.post<{ message: string; course: Course }>(
        `/courses/${id}/deleted`
      );
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data?.message || 'Error al eliminar el curso');
      }
      throw new Error('No se pudo eliminar el curso');
    }
  };
}
