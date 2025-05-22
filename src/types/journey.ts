import { DivideIcon as LucideIcon } from 'lucide-react';

export interface Challenge {
  id: number;
  title: string;
  description: string;
  connection: string;
  activity: string;
  reflection: string;
}

export interface Principle {
  id: number;
  title: string;
  description: string;
  quote: string;
  teaching: string;
  spiritualQuote: string;
  challenges: Challenge[];
  iconName: string;
  color: string;
}

export interface Journey {
  id: string;
  slug: string;
  title: string;
  description: string;
  principles: Principle[];
  author: {
    name: string;
    avatar?: string;
    bio: string;
  };
  publishedAt: string;
  category: string;
  tags: string[];
}