import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  showBack?: boolean;
  showHome?: boolean;
}

export function Layout({ children, title, showBack = false, showHome = true }: LayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      {!isHome && (
        <motion.header
          className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border"
          initial={{ y: -60 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-between px-4 h-14">
            <div className="flex items-center gap-2">
              {showBack && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => navigate(-1)}
                  className="text-foreground hover:bg-secondary"
                >
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              )}
              {title && (
                <h1 className="font-serif text-lg font-semibold text-foreground truncate max-w-[200px] md:max-w-none">
                  {title}
                </h1>
              )}
            </div>
            {showHome && !isHome && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate('/')}
                className="text-foreground hover:bg-secondary"
              >
                <Home className="w-5 h-5" />
              </Button>
            )}
          </div>
        </motion.header>
      )}

      {/* Main content */}
      <motion.main
        className="flex-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.main>
    </div>
  );
}
