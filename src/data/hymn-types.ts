// Shared types for hymn data

export interface Hymn {
  id: number;
  index: string;
  title: string;
  meter: string;
  author: string;
  authorId: number;
  bibleVerse: string;
  categoryIds: number[];
  audioFile?: string;
  lyrics: {
    verses: string[];
    chorus?: string;
  };
  translations: {
    [key: string]: {
      title: string;
      lyrics: {
        verses: string[];
        chorus?: string;
      };
    };
  };
}

export interface Author {
  id: number;
  name: string;
  bio: string;
  shortBio: string;
  bibleVerse: string;
  imageUrl?: string;
}

export interface Category {
  id: number;
  name: string;
  description: string;
}

export type Language = 'English' | 'Yoruba' | 'French' | 'Spanish';
