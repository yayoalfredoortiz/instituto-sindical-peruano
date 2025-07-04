import { kmFitnessApi } from '@/api/km-fitness.api';
import { AxiosError } from 'axios'; 
import { Review } from '../interfaces/review.interface';

export interface ReviewResponse {
  count: number;
  limit: number;
  offset: number;
  data: Review[];
}

export class ReviewService {
  static getAll = async (
    limit: number,
    offset: number,
    reviewable_type?: string,
    reviewable_id?: number
  ): Promise<ReviewResponse> => {
    try {
      const params: any = { limit, offset };
      if (reviewable_type && reviewable_id) {
        params.reviewable_type = reviewable_type;
        params.reviewable_id = reviewable_id;
      }

      const { data } = await kmFitnessApi.get<ReviewResponse>('/reviews', { params });
      return data;
    } catch (error) {
      console.error(error);
      throw new Error('No se pudo listar las reseñas');
    }
  };

  static getById = async (id: number): Promise<Review> => {
    try {
      const { data } = await kmFitnessApi.get<Review>(`/reviews/${id}`);
      return data;
    } catch (error) {
      console.error(error);
      throw new Error(`No se pudo obtener la reseña con id: ${id}`);
    }
  };

  static create = async (review: Omit<Review, 'id' | 'user'>): Promise<Review> => {
    try {
      const { data } = await kmFitnessApi.post<Review>('/reviews', review);
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data?.message || 'Error al crear la reseña');
      }
      throw new Error('No se pudo crear la reseña');
    }
  };

  static update = async (id: number, review: Partial<Review>): Promise<Review> => {
    try {
      const { data } = await kmFitnessApi.put<Review>(`/reviews/${id}`, review);
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data?.message || 'Error al actualizar la reseña');
      }
      throw new Error('No se pudo actualizar la reseña');
    }
  }; 
}
