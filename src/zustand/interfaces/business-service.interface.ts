import { Image } from "./image.interface";

export interface BusinessService {
  title: any;
  id?: number;
  service_name: string;
  service_description: string;
  image: Image | null; 
  includes: BusinessServiceInclude[];
}

export interface BusinessServiceInclude {
  id: number;
  business_service_id: number;
  si_title: string;
  si_description: string; 
}