import { kmFitnessApi } from '@/api/km-fitness.api';
import { AxiosError } from 'axios';import { Banner } from '../interfaces/banner.interface';
 ;

export interface BannerResponse {
    count: number;
    limit: number;
    offset: number;
    data: Banner[];
}
export class BannerService {
    static getAll = async (limit: number, offset: number): Promise<BannerResponse> => {
        try {
            const { data } = await kmFitnessApi.get<BannerResponse>('/banners', {
                params: { limit, offset },
            });
            return data;
        } catch (error) {
            console.error(error);
            throw new Error('No se pudo listar los banners');
        }
    };

    static getById = async (id: number): Promise<Banner> => {
        try {
            const { data } = await kmFitnessApi.get<Banner>(`/banners/${id}`);
            return data;
        } catch (error) {
            console.error(error);
            throw new Error(`No se pudo obtener el banner con id: ${id}`);
        }
    }; 
}
