import { Role } from "./role.interface";

export interface User {

    id?: string;
    email?: string;
    name?: string;
    password?: string;
    status?: string;
    is_active?: boolean;
    roles?: Role[];
    lastLogin?: string;
    imageUrl?: string;
  }