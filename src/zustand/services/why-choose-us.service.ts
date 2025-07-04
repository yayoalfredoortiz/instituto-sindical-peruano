import { kmFitnessApi } from "@/api/km-fitness.api";   
import { WhyChooseUs } from "../interfaces/why-choose-us.interface";

export interface WhyChooseUsResponse {
  data: WhyChooseUs[];
  count: number;
}
export class WhyChooseUsService {
  static getAll = async (limit: number, offset: number): Promise<WhyChooseUsResponse> => {
    try {
      const { data } = await kmFitnessApi.get<WhyChooseUsResponse>('/why-choose-us', {
        params: { limit, offset },
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error('No se pudo listar los elementos de "Por qué elegirnos"');
    }
  };

  static getById = async (id: number): Promise<WhyChooseUs> => {
    try {
      const { data } = await kmFitnessApi.get<WhyChooseUs>(`/why-choose-us/${id}`);
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(`No se pudo obtener el ítem con id: ${id}`);
    }
  }; 
}