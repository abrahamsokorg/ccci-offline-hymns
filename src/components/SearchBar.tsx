import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Hash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface SearchBarProps {
  onSearch: (query: string, byIndex: boolean) => void;
  placeholder?: string;
}

export function SearchBar({ onSearch, placeholder = "Search hymns..." }: SearchBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [searchByIndex, setSearchByIndex] = useState(false);

  const handleSearch = (value: string) => {
    setQuery(value);
    onSearch(value, searchByIndex);
  };

  const handleClose = () => {
    setIsOpen(false);
    setQuery('');
    onSearch('', false);
  };

  const toggleSearchMode = () => {
    setSearchByIndex(!searchByIndex);
    if (query) {
      onSearch(query, !searchByIndex);
    }
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div
            key="search-input"
            className="flex items-center gap-2"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 'auto' }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative flex-1">
              <Input
                type={searchByIndex ? "number" : "text"}
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder={searchByIndex ? "Enter hymn number..." : placeholder}
                className="pl-10 pr-4 bg-card border-border focus:border-primary"
                autoFocus
              />
              {searchByIndex ? (
                <Hash className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              ) : (
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              )}
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSearchMode}
              className={searchByIndex ? "text-primary" : "text-muted-foreground"}
            >
              <Hash className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleClose}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4" />
            </Button>
          </motion.div>
        ) : (
          <motion.div
            key="search-buttons"
            className="flex gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsOpen(true)}
              className="gap-2"
            >
              <Search className="w-4 h-4" />
              Search
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSearchByIndex(true);
                setIsOpen(true);
              }}
              className="gap-2"
            >
              <Hash className="w-4 h-4" />
              By Number
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
