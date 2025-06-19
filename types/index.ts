export interface BlogPost {
  title: string;
  slug: string;
  coverImage: string;
  date: string;
  readTime: number;
  categories: string[];
  excerpt: string;
  content: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string[];
  detailLink: string;
  liveLink: string | null;
}