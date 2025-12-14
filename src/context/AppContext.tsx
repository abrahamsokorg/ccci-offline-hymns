import React, { createContext, useContext, ReactNode } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Language } from '@/data/hymns';

interface FavoriteHymn {
  hymnId: number;
  language: Language;
  addedAt: string;
}

interface Settings {
  defaultLanguage: Language;
  fontSize: 'small' | 'medium' | 'large';
  theme: 'light' | 'dark';
}

interface AppContextType {
  favorites: FavoriteHymn[];
  addFavorite: (hymnId: number, language: Language) => void;
  removeFavorite: (hymnId: number) => void;
  isFavorite: (hymnId: number) => boolean;
  settings: Settings;
  updateSettings: (newSettings: Partial<Settings>) => void;
}

const defaultSettings: Settings = {
  defaultLanguage: 'English',
  fontSize: 'medium',
  theme: 'light',
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useLocalStorage<FavoriteHymn[]>('ccci-favorites', []);
  const [settings, setSettings] = useLocalStorage<Settings>('ccci-settings', defaultSettings);

  const addFavorite = (hymnId: number, language: Language) => {
    setFavorites(prev => {
      if (prev.some(f => f.hymnId === hymnId)) return prev;
      return [...prev, { hymnId, language, addedAt: new Date().toISOString() }];
    });
  };

  const removeFavorite = (hymnId: number) => {
    setFavorites(prev => prev.filter(f => f.hymnId !== hymnId));
  };

  const isFavorite = (hymnId: number) => {
    return favorites.some(f => f.hymnId === hymnId);
  };

  const updateSettings = (newSettings: Partial<Settings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  // Apply theme
  React.useEffect(() => {
    if (settings.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [settings.theme]);

  return (
    <AppContext.Provider value={{
      favorites,
      addFavorite,
      removeFavorite,
      isFavorite,
      settings,
      updateSettings,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
