
export interface Post {
  id: number;
  title: string;
  category: 'Erfahrungsbericht' | 'Ratschlag' | 'Psychologie' | 'Recht(e)';
  excerpt: string;
  author: string;
  date: string;
  imageUrl: string;
  content: string[]; // Array of paragraphs
}