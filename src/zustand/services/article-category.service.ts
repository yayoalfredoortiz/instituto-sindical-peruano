import { kmFitnessApi } from "@/api/km-fitness.api";  
import { AxiosError } from "axios";
import { ArticleCategory } from "../interfaces/article-category.interface";

export interface CategoryResponse {
  data: ArticleCategory[];
  count: number;
}

export class ArticleCategoryService {
  static getAll = async (limit: number, offset: number): Promise<CategoryResponse> => {
    try {
      const { data } = await kmFitnessApi.get<CategoryResponse>('/article-categories', {
        params: { limit, offset },
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error('No se pudo listar las categorías');
    }
  };

  static getById = async (id: number): Promise<ArticleCategory> => {
    try {
      const { data } = await kmFitnessApi.get<ArticleCategory>(`/article-categories/${id}`);
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(`No se pudo obtener la categoría con id: ${id}`);
    }
  }; 
}