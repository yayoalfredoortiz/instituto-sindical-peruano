import { kmFitnessApi } from '@/api/km-fitness.api';
import { Article } from '../interfaces/article.interface';

export interface ArticleResponse {
  count: number;
  limit: number;
  offset: number;
  data: Article[];
}

export class ArticleService {
  static getAll = async (
    limit: number,
    offset: number,
    filters?: { categoryId?: number; search?: string }
  ): Promise<ArticleResponse> => {
    try {
      const params: any = { limit, offset };

      if (filters?.categoryId) params.categoryId = filters.categoryId;
      if (filters?.search) params.search = filters.search;

      const { data } = await kmFitnessApi.get<ArticleResponse>('/articles', { params });
      return data;
    } catch (error) {
      console.error(error);
      throw new Error('No se pudo listar los artículos');
    }
  };

  static getById = async (id: string): Promise<Article> => {
    try {
      const { data } = await kmFitnessApi.get<Article>(`/articles/${id}`);
      return data;
    } catch (error) {
      console.error(error);
      throw new Error(`No se pudo obtener el artículo con id: ${id}`);
    }
  };
}
