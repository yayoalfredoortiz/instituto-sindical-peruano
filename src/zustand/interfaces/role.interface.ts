import { Permission } from "./permission.interface";

export interface Role { 
  id?: number;
  name?: string;
  permissions?: Permission[];
}