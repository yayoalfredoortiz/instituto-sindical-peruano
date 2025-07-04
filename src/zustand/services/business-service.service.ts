import { kmFitnessApi } from '@/api/km-fitness.api'; 
import { BusinessService } from '../interfaces/business-service.interface';

export interface BusinessServiceResponse {
  count: number;
  limit: number;
  offset: number;
  data: BusinessService[];
}

export class BusinessServiceService {
  static getAll = async (limit: number, offset: number): Promise<BusinessServiceResponse> => {
    try {
      const { data } = await kmFitnessApi.get<BusinessServiceResponse>('/business-services', {
        params: { limit, offset },
      });
      return data;
    } catch (error) {
      console.error(error);
      throw new Error('No se pudo listar los servicios empresariales');
    }
  };

  static getById = async (id: number): Promise<BusinessService> => {
    try {
      const { data } = await kmFitnessApi.get<BusinessService>(`/business-services/${id}`);
      return data;
    } catch (error) {
      console.error(error);
      throw new Error(`No se pudo obtener el servicio con id: ${id}`);
    }
  }; 
}
