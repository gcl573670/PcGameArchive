// src/types/post.ts

export interface SystemRequirements {
  os?: string;
  processor?: string;
  memory?: string;
  graphics?: string;
  storage?: string;
}

export interface Frontmatter {
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
  game_name: string;
  developer: string;
  publisher: string;
  release_date: string;
  download_url: string;
  download_size: string;
  trailer_video_id?: string;
  steam_appid?: number;
  metacritic?: number | null;
  genres: string[];
  tags: string[];
  platforms: string[];
  screenshots?: string[];
  system_requirements?: {
    minimum: SystemRequirements;
    recommended: SystemRequirements;
  };
}

export interface Post {
  slug: string;
  content: string;
  frontmatter: Frontmatter;
  language?: string;
  category?: string;
}