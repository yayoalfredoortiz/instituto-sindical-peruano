import { User } from "./user.interface";

export interface Review {
  id: number;
  comment: string;
  rating: number;
  user: User;
  reviewable_id: number;
  reviewable_type: string; 
}
