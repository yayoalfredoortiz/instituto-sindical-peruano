import { Category } from "./category.interface";
import { Image } from "./image.interface";
import { Level } from "./level.interface";
import { User } from "./user.interface";

export interface Course {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  status: string;
  slug: string;
  user_id: number;
  level_id: number;
  category_id: number;
  created_at: string;
  updated_at: string;
  students_count: number;
  reviews_count: number;
  lessons_count: number;
  teacher: User; 
  goals: Goal[];
  requirements: Requirement[];
  level: Level;
  category: Category;
  image: Image;
  sections: Section[];
  reviews: Review[];
}

export interface Review {
  id: number;
  comment: string;
  rating: number;
  user: User;
  reviewable_id: number;
  reviewable_type: string;
  created_at: string;
  updated_at: string;
}

export interface Section {
  id: number;
  name: string;
  course_id: number;
  created_at: string;
  updated_at: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: number;
  name: string;
  url: string;
  iframe: string;
  platform_id: number;
  section_id: number;
  created_at: string;
  updated_at: string;
  laravel_through_key: number;
}

export interface Goal {
  id: number;
  name: string;
  course_id: number;
  created_at: string;
  updated_at: string;
}

export interface Requirement {
  id: number;
  name: string;
  course_id: number;
  created_at: string;
  updated_at: string;
}
