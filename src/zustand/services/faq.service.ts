import { kmFitnessApi } from '@/api/km-fitness.api'; 
import { Faq } from '../interfaces/faq.interface';

export interface FaqResponse {
  count: number;
  limit: number;
  offset: number;
  data: Faq[];
}

export class FaqService {
  static getAll = async (limit: number, offset: number): Promise<FaqResponse> => {
    try {
      const { data } = await kmFitnessApi.get<FaqResponse>('/faqs', {
        params: { limit, offset },
      });
      return data;
    } catch (error) {
      console.error(error);
      throw new Error('No se pudo listar las preguntas frecuentes');
    }
  };

  static getById = async (id: number): Promise<Faq> => {
    try {
      const { data } = await kmFitnessApi.get<Faq>(`/faqs/${id}`);
      return data;
    } catch (error) {
      console.error(error);
      throw new Error(`No se pudo obtener la pregunta frecuente con id: ${id}`);
    }
  }; 
}
