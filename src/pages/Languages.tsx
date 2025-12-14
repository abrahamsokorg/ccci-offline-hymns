import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { languages, Language } from '@/data/hymns';
import { Globe } from 'lucide-react';

const languageFlags: Record<Language, string> = {
  English: '🇬🇧',
  Yoruba: '🇳🇬',
  French: '🇫🇷',
  Spanish: '🇪🇸',
};

const languageDescriptions: Record<Language, string> = {
  English: 'Browse hymns in English',
  Yoruba: 'Wá orin ìyìn ní Yorùbá',
  French: 'Parcourir les hymnes en français',
  Spanish: 'Explorar himnos en español',
};

export default function Languages() {
  const navigate = useNavigate();

  return (
    <Layout title="Languages" showBack>
      <div className="p-4">
        <motion.div
          className="mb-6 text-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-hymnal mb-3">
            <Globe className="w-8 h-8 text-primary-foreground" />
          </div>
          <h2 className="font-serif text-xl font-semibold text-foreground mb-1">
            Choose a Language
          </h2>
          <p className="text-muted-foreground text-sm">
            All hymns available offline in multiple languages
          </p>
        </motion.div>

        <div className="space-y-3">
          {languages.map((lang, index) => (
            <motion.button
              key={lang}
              className="w-full p-4 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-hymnal transition-all text-left group"
              onClick={() => navigate(`/hymns?lang=${lang}`)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 4 }}
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl">{languageFlags[lang]}</span>
                <div className="flex-1">
                  <h3 className="font-serif font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                    {lang}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {languageDescriptions[lang]}
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </Layout>
  );
}
