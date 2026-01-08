
export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  link: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Tool {
  id: string;
  name: string;
  category: string;
  icon: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  link: string;
}
