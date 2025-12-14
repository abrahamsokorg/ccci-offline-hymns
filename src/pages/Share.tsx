import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { Share2, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { toast } from 'sonner';

export default function Share() {
  const [copied, setCopied] = useState(false);
  const shareText = "Use the CCCI Hymnal app to access gospel hymns offline.";

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({ title: 'CCCI Hymnal', text: shareText });
    } else {
      handleCopy();
    }
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(shareText);
    setCopied(true);
    toast.success('Copied to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Layout title="Share" showBack>
      <div className="p-4">
        <motion.div className="text-center py-12" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full gradient-hymnal mb-6">
            <Share2 className="w-10 h-10 text-primary-foreground" />
          </div>
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">Share the App</h2>
          <p className="text-muted-foreground mb-8 max-w-xs mx-auto">Invite others to experience the joy of gospel hymns</p>
          
          <div className="bg-card rounded-xl border border-border p-4 mb-6 max-w-sm mx-auto">
            <p className="text-foreground font-serif italic">"{shareText}"</p>
          </div>

          <div className="flex flex-col gap-3 max-w-xs mx-auto">
            <Button onClick={handleShare} className="gradient-hymnal text-primary-foreground gap-2">
              <Share2 className="w-4 h-4" /> Share with Others
            </Button>
            <Button variant="outline" onClick={handleCopy} className="gap-2">
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied!' : 'Copy Message'}
            </Button>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
