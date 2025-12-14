import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { authors, getHymnsByAuthor } from '@/data/hymns';
import { User, BookOpen } from 'lucide-react';

export default function Authors() {
  const navigate = useNavigate();

  return (
    <Layout title="Authors" showBack>
      <div className="p-4">
        <motion.div
          className="mb-6 text-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-hymnal mb-3">
            <User className="w-8 h-8 text-primary-foreground" />
          </div>
          <h2 className="font-serif text-xl font-semibold text-foreground mb-1">
            Hymn Authors
          </h2>
          <p className="text-muted-foreground text-sm">
            Explore the lives of those who wrote these hymns
          </p>
        </motion.div>

        <div className="space-y-3">
          {authors.map((author, index) => {
            const hymnCount = getHymnsByAuthor(author.id).length;
            
            return (
              <motion.button
                key={author.id}
                className="w-full p-4 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-hymnal transition-all text-left group"
                onClick={() => navigate(`/author/${author.id}`)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 4 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <User className="w-7 h-7 text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                      {author.name}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-2">
                      {author.shortBio}
                    </p>
                    <div className="flex items-center gap-1 text-gold text-xs font-medium">
                      <BookOpen className="w-3 h-3" />
                      {hymnCount} hymn{hymnCount !== 1 ? 's' : ''}
                    </div>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
