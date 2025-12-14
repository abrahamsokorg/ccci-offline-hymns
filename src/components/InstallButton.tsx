import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export function InstallButton({ variant = 'default' }: { variant?: 'default' | 'compact' }) {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
      return;
    }

    // Check for iOS
    const ios = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(ios);

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = async () => {
    if (isIOS) {
      toast.info('Tap the Share button, then "Add to Home Screen"', {
        duration: 5000,
      });
      return;
    }

    if (!deferredPrompt) {
      toast.info('Open this app in your browser to install');
      return;
    }

    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setIsInstalled(true);
      toast.success('App installed successfully!');
    }
    
    setDeferredPrompt(null);
  };

  if (isInstalled) {
    return (
      <motion.div
        className="flex items-center gap-2 text-green-600 dark:text-green-400 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Check className="w-4 h-4" />
        <span>App installed</span>
      </motion.div>
    );
  }

  if (variant === 'compact') {
    return (
      <Button
        onClick={handleInstall}
        variant="outline"
        size="sm"
        className="gap-2"
      >
        <Download className="w-4 h-4" />
        Install
      </Button>
    );
  }

  return (
    <motion.button
      onClick={handleInstall}
      className="w-full p-4 rounded-xl gradient-hymnal text-primary-foreground flex items-center justify-center gap-3 font-medium shadow-hymnal"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Download className="w-5 h-5" />
      <span>Install App</span>
    </motion.button>
  );
}
