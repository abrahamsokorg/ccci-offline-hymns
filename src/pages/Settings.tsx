import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { useApp } from '@/context/AppContext';
import { Settings as SettingsIcon, Globe, Type, Moon, Sun } from 'lucide-react';
import { languages, Language } from '@/data/hymns';

export default function Settings() {
  const { settings, updateSettings } = useApp();

  return (
    <Layout title="Settings" showBack>
      <div className="p-4 space-y-6">
        <motion.div className="mb-6 text-center" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-hymnal mb-3">
            <SettingsIcon className="w-8 h-8 text-primary-foreground" />
          </div>
          <h2 className="font-serif text-xl font-semibold text-foreground">Settings</h2>
        </motion.div>

        {/* Default Language */}
        <motion.div className="bg-card rounded-xl border border-border p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
          <div className="flex items-center gap-3 mb-3">
            <Globe className="w-5 h-5 text-gold" />
            <h3 className="font-semibold text-foreground">Default Language</h3>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {languages.map(lang => (
              <button key={lang} onClick={() => updateSettings({ defaultLanguage: lang })}
                className={`p-3 rounded-lg text-sm font-medium transition-all ${settings.defaultLanguage === lang ? 'gradient-hymnal text-primary-foreground' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}>
                {lang}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Font Size */}
        <motion.div className="bg-card rounded-xl border border-border p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <div className="flex items-center gap-3 mb-3">
            <Type className="w-5 h-5 text-gold" />
            <h3 className="font-semibold text-foreground">Font Size</h3>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {(['small', 'medium', 'large'] as const).map(size => (
              <button key={size} onClick={() => updateSettings({ fontSize: size })}
                className={`p-3 rounded-lg text-sm font-medium capitalize transition-all ${settings.fontSize === size ? 'gradient-hymnal text-primary-foreground' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}>
                {size}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Theme */}
        <motion.div className="bg-card rounded-xl border border-border p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          <div className="flex items-center gap-3 mb-3">
            {settings.theme === 'dark' ? <Moon className="w-5 h-5 text-gold" /> : <Sun className="w-5 h-5 text-gold" />}
            <h3 className="font-semibold text-foreground">Theme</h3>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {(['light', 'dark'] as const).map(theme => (
              <button key={theme} onClick={() => updateSettings({ theme })}
                className={`p-3 rounded-lg text-sm font-medium capitalize transition-all flex items-center justify-center gap-2 ${settings.theme === theme ? 'gradient-hymnal text-primary-foreground' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}>
                {theme === 'light' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                {theme}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
