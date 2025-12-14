import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { authors, getHymnsByAuthor } from '@/data/hymns';
import { User, BookOpen, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AuthorDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const author = authors.find(a => a.id === Number(id));
  const authorHymns = author ? getHymnsByAuthor(author.id) : [];

  if (!author) {
    return (
      <Layout title="Author Not Found" showBack>
        <div className="p-4 text-center py-12">
          <p className="text-muted-foreground">Author not found</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={author.name} showBack>
      <div className="p-4">
        {/* Author header */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="w-24 h-24 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center">
            <User className="w-12 h-12 text-muted-foreground" />
          </div>
          <h1 className="font-serif text-2xl font-bold text-foreground mb-1">
            {author.name}
          </h1>
          <p className="text-muted-foreground text-sm">
            {author.shortBio}
          </p>
        </motion.div>

        {/* Bible verse */}
        <motion.div
          className="bg-card rounded-xl border border-border p-4 mb-6 shadow-hymnal"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-start gap-3">
            <Quote className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
            <p className="text-muted-foreground text-sm italic font-serif leading-relaxed">
              {author.bibleVerse}
            </p>
          </div>
        </motion.div>

        {/* Biography */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="font-serif font-semibold text-lg text-foreground mb-3">
            Biography
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {author.bio}
          </p>
        </motion.div>

        {/* Hymns by this author */}
        {authorHymns.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="font-serif font-semibold text-lg text-foreground mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-gold" />
              Hymns by {author.name}
            </h2>
            <div className="space-y-2">
              {authorHymns.map(hymn => (
                <Button
                  key={hymn.id}
                  variant="outline"
                  className="w-full justify-start h-auto py-3 px-4"
                  onClick={() => navigate(`/hymn/${hymn.id}`)}
                >
                  <span className="font-serif font-medium text-gold mr-2">
                    {hymn.index}
                  </span>
                  <span className="truncate">{hymn.title}</span>
                </Button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </Layout>
  );
}
