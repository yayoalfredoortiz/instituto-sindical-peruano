import { ArticleCategory } from "./article-category.interface";
import { Image } from "./image.interface";
import { User } from "./user.interface";

export interface Article {
  id?: number;
  art_title: string;
  art_slug: string;
  duration_minutes?: number;
  body: string;
  published_at: string; // formato ISO o fecha tipo string    
  author?: User;
  category?: ArticleCategory;
  category_id?: number;
  image: Image | null;
}
