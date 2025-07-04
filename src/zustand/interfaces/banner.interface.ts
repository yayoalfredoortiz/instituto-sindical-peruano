import { Image } from "./image.interface";

export interface Banner {
  id: number;
  title: string | null;
  description: string | null;
  pre_text_highlight: string | null;
  text_highlight: string | null;
  post_text_highlight: string | null;
  has_search: boolean;
  text_search_action: string | null;
  enable_action: boolean | null;
  text_action: string | null;
  url_action: string | null;
  type: number;
  image: Image | null;
}
