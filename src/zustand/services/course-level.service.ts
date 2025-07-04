import { kmFitnessApi } from "@/api/km-fitness.api";  
import { Level } from "../interfaces/level.interface";

export interface LevelResponse {
  data: Level[];
  count: number;
}

export class CourseLevelService {
  static getAll = async (limit: number, offset: number): Promise<LevelResponse> => {
    try {
      const { data } = await kmFitnessApi.get<LevelResponse>('/course-levels', {
        params: { limit, offset },
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error('No se pudo listar los niveles');
    }
  };

  static getById = async (id: number): Promise<Level> => {
    try {
      const { data } = await kmFitnessApi.get<Level>(`/course-levels/${id}`);
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(`No se pudo obtener el nivel con id: ${id}`);
    }
  }; 
}
