import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { HymnCard } from '@/components/HymnCard';
import { SearchBar } from '@/components/SearchBar';
import { hymns, Language, searchHymns } from '@/data/hymns';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HYMNS_PER_PAGE = 20;

const languageTitles: Record<Language, string> = {
  English: 'Hymns',
  Yoruba: 'Ìwé Orin',
  French: 'Cantiques',
  Spanish: 'Himnos',
};

export default function HymnList() {
  const [searchParams] = useSearchParams();
  const language = (searchParams.get('lang') as Language) || 'English';
  const [searchQuery, setSearchQuery] = useState('');
  const [searchByIndex, setSearchByIndex] = useState(false);
  const [visibleCount, setVisibleCount] = useState(HYMNS_PER_PAGE);
  
  const title = languageTitles[language] || language;

  const filteredHymns = useMemo(() => {
    if (!searchQuery) return hymns;
    
    if (searchByIndex) {
      return hymns.filter(h => h.index.includes(searchQuery));
    }
    
    return searchHymns(searchQuery, language);
  }, [searchQuery, searchByIndex, language]);

  const visibleHymns = useMemo(() => {
    return filteredHymns.slice(0, visibleCount);
  }, [filteredHymns, visibleCount]);

  const handleSearch = (query: string, byIndex: boolean) => {
    setSearchQuery(query);
    setSearchByIndex(byIndex);
    setVisibleCount(HYMNS_PER_PAGE); // Reset pagination on new search
  };

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + HYMNS_PER_PAGE, filteredHymns.length));
  };

  return (
    <Layout title={title} showBack>
      <div className="p-4">
        {/* Language badge */}
        <motion.div
          className="mb-4 flex items-center justify-between"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-medium gradient-hymnal text-primary-foreground">
              {language}
            </span>
            <span className="text-muted-foreground text-sm">
              {filteredHymns.length} hymns
            </span>
          </div>
        </motion.div>

        {/* Search */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <SearchBar onSearch={handleSearch} placeholder="Search by title or lyrics..." />
        </motion.div>

        {/* Hymn list */}
        <div className="space-y-3">
          {visibleHymns.map((hymn, index) => (
            <HymnCard key={hymn.id} hymn={hymn} language={language} index={index} />
          ))}
          
          {filteredHymns.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-muted-foreground">No hymns found</p>
            </motion.div>
          )}

          {/* Load more button */}
          {visibleCount < filteredHymns.length && (
            <motion.div 
              className="pt-4 pb-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Button 
                onClick={loadMore} 
                variant="outline"
                className="w-full max-w-xs"
              >
                Load more ({filteredHymns.length - visibleCount} remaining)
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </Layout>
  );
}