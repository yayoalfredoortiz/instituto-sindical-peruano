import { kmFitnessApi } from "@/api/km-fitness.api"; 
import { AxiosError } from "axios";
import { Category } from "../interfaces/category.interface";

export interface CategoryResponse {
  data: Category[];
  count: number;
}

export class CourseCategoryService {
  static getAll = async (limit: number, offset: number): Promise<CategoryResponse> => {
    try {
      const { data } = await kmFitnessApi.get<CategoryResponse>('/course-categories', {
        params: { limit, offset },
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error('No se pudo listar las categorías');
    }
  };

  static getById = async (id: number): Promise<Category> => {
    try {
      const { data } = await kmFitnessApi.get<Category>(`/course-categories/${id}`);
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(`No se pudo obtener la categoría con id: ${id}`);
    }
  }; 
}