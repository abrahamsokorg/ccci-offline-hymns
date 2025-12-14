import { useParams, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { HymnCard } from '@/components/HymnCard';
import { categories, getHymnsByCategory, Language } from '@/data/hymns';
import { useApp } from '@/context/AppContext';

export default function CategoryDetail() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const { settings } = useApp();
  
  const language = (searchParams.get('lang') as Language) || settings.defaultLanguage;
  const category = categories.find(c => c.id === Number(id));
  const categoryHymns = category ? getHymnsByCategory(category.id) : [];

  if (!category) {
    return (
      <Layout title="Category Not Found" showBack>
        <div className="p-4 text-center py-12">
          <p className="text-muted-foreground">Category not found</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={category.name} showBack>
      <div className="p-4">
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
              {categoryHymns.length} hymns
            </span>
          </div>
        </motion.div>

        {categoryHymns.length > 0 ? (
          <div className="space-y-3">
            {categoryHymns.map((hymn, index) => (
              <HymnCard key={hymn.id} hymn={hymn} language={language} index={index} />
            ))}
          </div>
        ) : (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-muted-foreground">No hymns in this category yet</p>
          </motion.div>
        )}
      </div>
    </Layout>
  );
}
