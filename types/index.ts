// Blog-related types
export interface BlogFrontmatter {
  title: string;
  description?: string;
  date?: string;
  tags?: string[];
  cover?: string;
  author?: string;
  published?: boolean;
}

export interface BlogPost {
  title: string;
  slug: string;
  description?: string;
  date?: string;
  tags?: string[];
  cover?: string;
  author?: string;
  content: string;
  readTime?: {
    text: string;
    minutes: number;
    time: number;
    words: number;
  };
}

export interface BlogListItem {
  slug: string;
  title: string;
  description?: string;
  date?: string;
  tags?: string[];
}

export interface GitHubFileResponse {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string | null;
  type: "dir" | "file";
  content?: string;
  encoding?: string;
  _links: {
    self: string;
    git: string;
    html: string;
  };
}

// Project-related types
export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string[];
  detailLink: string;
  liveLink: string | null;
}
