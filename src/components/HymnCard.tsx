import { motion } from 'framer-motion';
import { Heart, Music } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Hymn, Language, getHymnTitle } from '@/data/hymns';
import { useApp } from '@/context/AppContext';

interface HymnCardProps {
  hymn: Hymn;
  language: Language;
  index: number;
}

export function HymnCard({ hymn, language, index }: HymnCardProps) {
  const navigate = useNavigate();
  const { isFavorite } = useApp();
  const title = getHymnTitle(hymn, language);
  const favorite = isFavorite(hymn.id);

  return (
    <motion.button
      className="w-full text-left p-4 bg-card border border-border rounded-lg hover:border-primary/30 hover:shadow-hymnal transition-all duration-200 group"
      onClick={() => navigate(`/hymn/${hymn.id}?lang=${language}`)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      whileHover={{ x: 4 }}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-lg gradient-hymnal flex items-center justify-center">
          <span className="text-primary-foreground font-serif font-bold text-sm">
            {hymn.index}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-serif font-semibold text-foreground text-base leading-tight group-hover:text-primary transition-colors">
              {title}
            </h3>
            {favorite && (
              <Heart className="w-4 h-4 text-primary fill-primary flex-shrink-0 mt-1" />
            )}
          </div>
          <p className="text-muted-foreground text-sm mt-1 flex items-center gap-2">
            <Music className="w-3 h-3" />
            {hymn.meter} • {hymn.author}
          </p>
        </div>
      </div>
    </motion.button>
  );
}
