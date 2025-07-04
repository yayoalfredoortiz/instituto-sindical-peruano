import { Role } from '../interfaces/role.interface';
import { kmFitnessApi } from '@/api/km-fitness.api';

export interface RoleResponse {
  data: Role[];
  count: number;
}

export class RoleService {
  static getAll = async (limit: number, offset: number): Promise<RoleResponse> => {
    try {
      const { data } = await kmFitnessApi.get<RoleResponse>('/auth/roles', {
        params: { limit, offset },
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error('No se pudo listar los roles');
    }
  };

  static getById = async (id: number): Promise<Role> => {
    try {
      const { data } = await kmFitnessApi.get<Role>(`/auth/roles/${id}`);
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(`No se pudo obtener el rol con id: ${id}`);
    }
  }; 
}
