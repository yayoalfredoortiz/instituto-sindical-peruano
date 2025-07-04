import { AxiosError } from 'axios'; 
import { User } from '../interfaces/user.interface';
import { kmFitnessApi } from '@/api/km-fitness.api';

export interface UserResponse {
  data: User[];
  count: number;
}

export class UserService {

  static getAll = async (limit: number, offset: number, search?: string): Promise<UserResponse> => {

    try {
      const params: any = {
        limit,
        offset
      };

      if (search && search.trim()) {
        params.search = search;
      }

      const { data } = await kmFitnessApi.get<UserResponse>('/users', {
        params
      });
      console.log(data)
      return data;

    } catch (error) {
      console.log(error);
      throw new Error('no se pudo listar Usuarios');
    }
  }

  static getById = async (id: number): Promise<User> => {

    try {
      const { data } = await kmFitnessApi.get<User>('/users/' + id);
      console.log(data)
      return data;

    } catch (error) {
      console.log(error);
      throw new Error('no se pudo listar Usuarios id:' + id);
    }
  }


  static createUser = async (user: User): Promise<User> => {

    try {
      const { data } = await kmFitnessApi.post<User>('/users', user);
      //console.log(data);

      return data;

    } catch (error) {
      if (error instanceof AxiosError) {
        //console.log(error.response?.data);
        throw error;
      }

      console.log(error);
      throw new Error('No se pudo agregar')
    }
  }

  static updateUser = async (id: string, user: User): Promise<User> => {

    try {
      const { data } = await kmFitnessApi.put<User>('/users/' + id, user);
      //console.log(data);

      return data;

    } catch (error) {
      if (error instanceof AxiosError) {
        //console.log(error.response?.data);
        throw new Error(error.response?.data);
      }

      console.log(error);
      throw new Error('No se pudo actualizar')
    }
  } 

  // static deleteUser = async (id: number): Promise<void> => {

  //   try {
  //     await kmFitnessApi.delete<void>('/users/'+id);
  //     return;

  //   } catch (error) {
  //     if (error instanceof AxiosError) {
  //       //console.log(error.response?.data);
  //       throw new Error(error.response?.data);
  //     }

  //     console.log(error);
  //     throw new Error('No se pudo eliminar')
  //   }
  // }

}