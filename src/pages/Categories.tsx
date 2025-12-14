import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { categories, getHymnsByCategory, Language, languages } from '@/data/hymns';
import { FolderOpen, ChevronRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useApp } from '@/context/AppContext';

export default function Categories() {
  const navigate = useNavigate();
  const { settings } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [showLanguageDialog, setShowLanguageDialog] = useState(false);

  const handleCategoryClick = (categoryId: number) => {
    setSelectedCategory(categoryId);
    setShowLanguageDialog(true);
  };

  const handleLanguageSelect = (language: Language) => {
    setShowLanguageDialog(false);
    if (selectedCategory) {
      navigate(`/category/${selectedCategory}?lang=${language}`);
    }
  };

  return (
    <Layout title="Categories" showBack>
      <div className="p-4">
        <motion.div
          className="mb-6 text-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-hymnal mb-3">
            <FolderOpen className="w-8 h-8 text-primary-foreground" />
          </div>
          <h2 className="font-serif text-xl font-semibold text-foreground mb-1">
            Hymn Categories
          </h2>
          <p className="text-muted-foreground text-sm">
            Find hymns by theme and occasion
          </p>
        </motion.div>

        <div className="grid gap-2">
          {categories.map((category, index) => {
            const count = getHymnsByCategory(category.id).length;
            
            return (
              <motion.button
                key={category.id}
                className="w-full p-4 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-hymnal transition-all text-left group flex items-center justify-between"
                onClick={() => handleCategoryClick(category.id)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ x: 4 }}
              >
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif font-medium text-foreground group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  {count > 0 && (
                    <span className="text-muted-foreground text-xs">
                      {count} hymn{count !== 1 ? 's' : ''}
                    </span>
                  )}
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Language selection dialog */}
      <Dialog open={showLanguageDialog} onOpenChange={setShowLanguageDialog}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle className="font-serif">Select Language</DialogTitle>
          </DialogHeader>
          <div className="grid gap-2 mt-4">
            {languages.map(lang => (
              <Button
                key={lang}
                variant={lang === settings.defaultLanguage ? "default" : "outline"}
                className={lang === settings.defaultLanguage ? "gradient-hymnal" : ""}
                onClick={() => handleLanguageSelect(lang)}
              >
                {lang}
              </Button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
