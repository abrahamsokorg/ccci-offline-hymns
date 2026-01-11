import { useLocalStorage } from './useLocalStorage';
import { Language } from '@/data/hymns';
import { Hymn } from '@/data/hymn-types';

interface LyricsData {
  verses: string[];
  chorus?: string;
}

interface LyricsOverride {
  [hymnId: number]: {
    lyrics?: LyricsData;
    translations?: {
      [lang: string]: { title?: string; lyrics?: LyricsData };
    };
  };
}

export function useLyricsOverrides() {
  const [overrides] = useLocalStorage<LyricsOverride>('hymn-lyrics-overrides', {});

  const getLyrics = (hymn: Hymn, language: Language): LyricsData => {
    const override = overrides[hymn.id];
    
    if (language === 'English') {
      return override?.lyrics || hymn.lyrics;
    }
    
    const translationOverride = override?.translations?.[language];
    if (translationOverride?.lyrics) {
      return translationOverride.lyrics;
    }
    
    return hymn.translations?.[language]?.lyrics || hymn.lyrics;
  };

  const hasOverride = (hymnId: number): boolean => {
    return !!overrides[hymnId];
  };

  return { getLyrics, hasOverride, overrides };
}
