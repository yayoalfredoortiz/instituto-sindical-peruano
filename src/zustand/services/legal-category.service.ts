import { kmFitnessApi } from "@/api/km-fitness.api";   
import { AxiosError } from "axios";
import { LegalCategory } from "../interfaces/legal-category.interface";

export interface CategoryResponse {
  data: LegalCategory[];
  count: number;
}

export class LegalCategoryService {
  static getAll = async (limit: number, offset: number): Promise<CategoryResponse> => {
    try {
      const { data } = await kmFitnessApi.get<CategoryResponse>('/legal-categories', {
        params: { limit, offset },
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error('No se pudo listar las categorías');
    }
  };

  static getById = async (id: number): Promise<LegalCategory> => {
    try {
      const { data } = await kmFitnessApi.get<LegalCategory>(`/legal-categories/${id}`);
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(`No se pudo obtener la categoría con id: ${id}`);
    }
  }; 
}