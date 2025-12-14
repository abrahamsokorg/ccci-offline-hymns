import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { HymnCard } from '@/components/HymnCard';
import { hymns } from '@/data/hymns';
import { useApp } from '@/context/AppContext';
import { Heart } from 'lucide-react';

export default function Favorites() {
  const { favorites } = useApp();

  const favoriteHymns = favorites
    .map(fav => ({
      hymn: hymns.find(h => h.id === fav.hymnId)!,
      language: fav.language,
    }))
    .filter(item => item.hymn);

  return (
    <Layout title="Favourites" showBack>
      <div className="p-4">
        <motion.div
          className="mb-6 text-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-hymnal mb-3">
            <Heart className="w-8 h-8 text-primary-foreground" />
          </div>
          <h2 className="font-serif text-xl font-semibold text-foreground mb-1">
            Your Favourites
          </h2>
          <p className="text-muted-foreground text-sm">
            {favoriteHymns.length} saved hymn{favoriteHymns.length !== 1 ? 's' : ''}
          </p>
        </motion.div>

        {favoriteHymns.length > 0 ? (
          <div className="space-y-3">
            {favoriteHymns.map((item, index) => (
              <HymnCard 
                key={item.hymn.id} 
                hymn={item.hymn} 
                language={item.language} 
                index={index} 
              />
            ))}
          </div>
        ) : (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Heart className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
            <p className="text-muted-foreground mb-2">No favourites yet</p>
            <p className="text-muted-foreground text-sm">
              Tap the heart icon on any hymn to save it here
            </p>
          </motion.div>
        )}
      </div>
    </Layout>
  );
}
