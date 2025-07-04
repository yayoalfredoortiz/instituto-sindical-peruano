import { kmFitnessApi } from '@/api/km-fitness.api';
import { OrganisationSetting } from '../interfaces/organisation-setting.interface';

export class OrganisationSettingService {
  static get = async (): Promise<OrganisationSetting> => {
    try {
      const { data } = await kmFitnessApi.get<OrganisationSetting>('/organisation-settings');
      return data;
    } catch (error) {
      console.error(error);
      throw new Error('No se pudo obtener la configuración de la organización');
    }
  }; 
}
