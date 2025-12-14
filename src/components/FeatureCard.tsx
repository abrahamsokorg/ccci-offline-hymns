import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  path: string;
  delay?: number;
}

export function FeatureCard({ icon: Icon, title, description, path, delay = 0 }: FeatureCardProps) {
  const navigate = useNavigate();

  return (
    <motion.button
      className="flex flex-col items-center p-4 md:p-6 rounded-xl bg-card border border-border hover:border-primary/30 shadow-hymnal transition-all duration-300 group text-left w-full"
      onClick={() => navigate(path)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full gradient-hymnal flex items-center justify-center mb-3 group-hover:shadow-lg transition-shadow">
        <Icon className="w-7 h-7 md:w-8 md:h-8 text-primary-foreground" strokeWidth={1.5} />
      </div>
      <h3 className="font-serif font-semibold text-foreground text-sm md:text-base mb-1 text-center">
        {title}
      </h3>
      <p className="text-muted-foreground text-xs text-center line-clamp-2">
        {description}
      </p>
    </motion.button>
  );
}
