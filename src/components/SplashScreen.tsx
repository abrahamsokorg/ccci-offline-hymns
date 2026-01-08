import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Music, Cross } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  // Trigger onComplete after 2.5 seconds - use ref to ensure stable callback
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, []); // Empty deps - only run once on mount

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center gradient-hymnal"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gold/10"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-32 right-16 w-48 h-48 rounded-full bg-gold/5"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      {/* Main content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {/* Logo/Icon */}
        <motion.div
          className="mb-8 relative"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, duration: 0.8, type: 'spring' }}
        >
          <div className="w-28 h-28 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center border-2 border-gold/30">
            <div className="relative">
              <Cross className="w-12 h-12 text-gold absolute -top-1 left-1/2 -translate-x-1/2" strokeWidth={1.5} />
              <Music className="w-10 h-10 text-primary-foreground mt-6" strokeWidth={1.5} />
            </div>
          </div>
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-gold/40"
            animate={{ scale: [1, 1.3, 1.3], opacity: [0.5, 0, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Church Name */}
        <motion.h1
          className="text-primary-foreground font-serif text-3xl md:text-4xl font-bold mb-3 tracking-wide"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          CCCI Hymnal
        </motion.h1>

        <motion.div
          className="w-24 h-0.5 bg-gold/60 mb-4"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        />

        <motion.p
          className="text-primary-foreground/80 font-sans text-sm md:text-base max-w-xs leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          Comforter Christian Center International
        </motion.p>

        {/* Loading indicator */}
        <motion.div
          className="mt-12 flex space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-gold"
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom text */}
      <motion.p
        className="absolute bottom-8 text-primary-foreground/50 text-xs font-sans"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        Singing God's praises together
      </motion.p>
    </motion.div>
  );
}
