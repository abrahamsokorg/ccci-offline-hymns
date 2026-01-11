import { useState, useMemo } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  Copy, 
  ChevronLeft, 
  ChevronRight, 
  Globe, 
  Check,
  BookOpen,
  Music,
  Quote
} from 'lucide-react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { AudioPlayer } from '@/components/AudioPlayer';
import { hymns, Language, languages, getHymnTitle, getHymnAudio } from '@/data/hymns';
import { useApp } from '@/context/AppContext';
import { useLyricsOverrides } from '@/hooks/useLyricsOverrides';
import { toast } from 'sonner';

export default function HymnDetail() {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { isFavorite, addFavorite, removeFavorite, settings } = useApp();
  const { getLyrics } = useLyricsOverrides();
  
  const language = (searchParams.get('lang') as Language) || settings.defaultLanguage;
  const [showLanguages, setShowLanguages] = useState(false);
  const [copied, setCopied] = useState(false);

  const hymnIndex = hymns.findIndex(h => h.id === Number(id));
  const hymn = hymns[hymnIndex];

  const title = useMemo(() => hymn ? getHymnTitle(hymn, language) : '', [hymn, language]);
  const lyrics = useMemo(() => hymn ? getLyrics(hymn, language) : null, [hymn, language, getLyrics]);
  const audioUrl = useMemo(() => hymn ? getHymnAudio(hymn.id) : undefined, [hymn]);

  if (!hymn) {
    return (
      <Layout title="Hymn Not Found" showBack>
        <div className="p-4 text-center py-12">
          <p className="text-muted-foreground">Hymn not found</p>
        </div>
      </Layout>
    );
  }

  const favorite = isFavorite(hymn.id);

  const handlePrevious = () => {
    if (hymnIndex > 0) {
      navigate(`/hymn/${hymns[hymnIndex - 1].id}?lang=${language}`);
    }
  };

  const handleNext = () => {
    if (hymnIndex < hymns.length - 1) {
      navigate(`/hymn/${hymns[hymnIndex + 1].id}?lang=${language}`);
    }
  };

  const handleCopy = async () => {
    const text = `${title}\n\n${lyrics?.verses.join('\n\n')}${lyrics?.chorus ? `\n\nChorus:\n${lyrics.chorus}` : ''}`;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success('Hymn copied to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleToggleFavorite = () => {
    if (favorite) {
      removeFavorite(hymn.id);
      toast.info('Removed from favorites');
    } else {
      addFavorite(hymn.id, language);
      toast.success('Added to favorites');
    }
  };

  const handleLanguageChange = (newLang: Language) => {
    setSearchParams({ lang: newLang });
    setShowLanguages(false);
  };

  const fontSizeClass = {
    small: 'text-base',
    medium: 'text-lg',
    large: 'text-xl',
  }[settings.fontSize];

  return (
    <Layout showBack showHome>
      <div className="pb-24">
        {/* Hero banner */}
        <motion.div
          className="gradient-hymnal px-4 py-6 relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-gold/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10">
            <motion.div
              className="inline-block px-3 py-1 rounded-full bg-primary-foreground/10 text-primary-foreground text-xs font-medium mb-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              GOSPEL HYMN: {hymn.index}
            </motion.div>
            
            <motion.h1
              className="text-primary-foreground font-serif text-xl md:text-2xl font-bold mb-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {title}
            </motion.h1>
            
            <motion.div
              className="flex flex-wrap gap-2 text-primary-foreground/80 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="flex items-center gap-1">
                <Music className="w-3 h-3" /> {hymn.meter}
              </span>
              <span>•</span>
              <span>{hymn.author}</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Bible verse */}
        <motion.div
          className="mx-4 -mt-2 mb-4 bg-card rounded-lg border border-border p-4 shadow-hymnal"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-start gap-3">
            <Quote className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
            <p className="text-muted-foreground text-sm italic font-serif leading-relaxed">
              {hymn.bibleVerse}
            </p>
          </div>
        </motion.div>

        {/* Audio Player */}
        <div className="mx-4 mb-4">
          <AudioPlayer audioUrl={audioUrl} hymnTitle={title} />
        </div>

        {/* Language badge */}
        <div className="px-4 mb-4">
          <button
            onClick={() => setShowLanguages(!showLanguages)}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium hover:bg-secondary/80 transition-colors"
          >
            <Globe className="w-4 h-4" />
            {language}
          </button>
          
          <AnimatePresence>
            {showLanguages && (
              <motion.div
                className="mt-2 flex flex-wrap gap-2"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                {languages.map(lang => (
                  <button
                    key={lang}
                    onClick={() => handleLanguageChange(lang)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                      lang === language 
                        ? 'gradient-hymnal text-primary-foreground' 
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Lyrics */}
        <motion.div
          className="px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className={`hymn-text space-y-6 ${fontSizeClass}`}>
            {lyrics?.verses.map((verse, index) => (
              <motion.div
                key={index}
                className="space-y-1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <span className="text-gold font-sans text-xs font-medium">
                  Verse {index + 1}
                </span>
                <p className="hymn-verse whitespace-pre-line leading-relaxed">
                  {verse}
                </p>
              </motion.div>
            ))}
            
            {lyrics?.chorus && (
              <motion.div
                className="space-y-1 pl-4 border-l-2 border-gold"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <span className="text-gold font-sans text-xs font-medium">
                  Chorus
                </span>
                <p className="hymn-chorus whitespace-pre-line leading-relaxed">
                  {lyrics.chorus}
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Navigation and actions */}
        <motion.div
          className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border p-4"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center justify-between max-w-lg mx-auto">
            {/* Navigation */}
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrevious}
                disabled={hymnIndex === 0}
                className="disabled:opacity-30"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                disabled={hymnIndex === hymns.length - 1}
                className="disabled:opacity-30"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setShowLanguages(!showLanguages)}
                className="text-muted-foreground"
              >
                <Globe className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleCopy}
                className="text-muted-foreground"
              >
                {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
              </Button>
              <Button
                variant={favorite ? "default" : "outline"}
                size="icon"
                onClick={handleToggleFavorite}
                className={favorite ? "gradient-hymnal" : "text-muted-foreground"}
              >
                <Heart className={`w-5 h-5 ${favorite ? 'fill-current' : ''}`} />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
