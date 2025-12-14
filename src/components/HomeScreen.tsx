import { motion } from 'framer-motion';
import { 
  Globe, 
  Users, 
  FolderOpen, 
  Heart, 
  BookOpen, 
  Share2, 
  Settings, 
  Info,
  Music,
  Cross,
  Download
} from 'lucide-react';
import { FeatureCard } from '@/components/FeatureCard';
import { InstallButton } from '@/components/InstallButton';

const features = [
  {
    icon: Globe,
    title: "Languages",
    description: "Browse hymns in multiple languages",
    path: "/languages",
  },
  {
    icon: Users,
    title: "Authors",
    description: "Explore hymn writers and their stories",
    path: "/authors",
  },
  {
    icon: FolderOpen,
    title: "Categories",
    description: "Find hymns by theme and occasion",
    path: "/categories",
  },
  {
    icon: Heart,
    title: "Favourites",
    description: "Your saved hymns collection",
    path: "/favorites",
  },
  {
    icon: BookOpen,
    title: "The Gospel",
    description: "The message of salvation",
    path: "/gospel",
  },
  {
    icon: Share2,
    title: "Share",
    description: "Share the app with others",
    path: "/share",
  },
  {
    icon: Settings,
    title: "Settings",
    description: "Customize your experience",
    path: "/settings",
  },
  {
    icon: Info,
    title: "About Us",
    description: "Learn about CCCI",
    path: "/about",
  },
];

export function HomeScreen() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <motion.div
        className="gradient-hymnal px-6 pt-12 pb-10 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative z-10 text-center">
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-foreground/10 backdrop-blur-sm mb-4 border border-gold/30"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.6, type: 'spring' }}
          >
            <div className="relative">
              <Cross className="w-8 h-8 text-gold absolute -top-1 left-1/2 -translate-x-1/2" strokeWidth={1.5} />
              <Music className="w-7 h-7 text-primary-foreground mt-4" strokeWidth={1.5} />
            </div>
          </motion.div>
          
          <motion.h1
            className="text-primary-foreground font-serif text-2xl md:text-3xl font-bold mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            CCCI Hymnal
          </motion.h1>
          
          <motion.div
            className="w-16 h-0.5 bg-gold/60 mx-auto mb-3"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          />
          
          <motion.p
            className="text-primary-foreground/80 text-sm max-w-xs mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Comforter Christian Center International
          </motion.p>
        </div>
      </motion.div>

      {/* Feature Grid */}
      <div className="px-4 py-6 -mt-4">
        <motion.div
          className="bg-card rounded-2xl shadow-hymnal border border-border p-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.path}
                {...feature}
                delay={0.5 + index * 0.08}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Install Button */}
      <motion.div
        className="px-4 pb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <InstallButton />
      </motion.div>

      {/* Footer */}
      <motion.div
        className="text-center py-6 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <p className="text-muted-foreground text-xs">
          Works completely offline • No internet required
        </p>
      </motion.div>
    </div>
  );
}
