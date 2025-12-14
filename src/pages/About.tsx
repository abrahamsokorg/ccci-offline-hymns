import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { Info, MapPin, Phone, Mail, Cross, Music } from 'lucide-react';

export default function About() {
  return (
    <Layout title="About Us" showBack>
      <div className="p-4">
        <motion.div className="text-center mb-6" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
          <div className="w-20 h-20 rounded-full gradient-hymnal mx-auto mb-4 flex items-center justify-center">
            <div className="relative">
              <Cross className="w-8 h-8 text-gold absolute -top-1 left-1/2 -translate-x-1/2" strokeWidth={1.5} />
              <Music className="w-7 h-7 text-primary-foreground mt-4" strokeWidth={1.5} />
            </div>
          </div>
          <h1 className="font-serif text-2xl font-bold text-foreground mb-1">CCCI Hymnal</h1>
          <p className="text-muted-foreground">Comforter Christian Center International</p>
        </motion.div>

        <motion.div className="space-y-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <div className="bg-card rounded-xl border border-border p-5 shadow-hymnal">
            <h3 className="font-serif font-semibold text-lg text-foreground mb-3">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">To spread the gospel of Jesus Christ through worship, teaching, and community, reaching souls for the Kingdom of God across all nations.</p>
          </div>

          <div className="bg-card rounded-xl border border-border p-5 shadow-hymnal">
            <h3 className="font-serif font-semibold text-lg text-foreground mb-3">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">To be a beacon of hope and spiritual transformation, nurturing believers to become disciples who make disciples.</p>
          </div>

          <div className="bg-card rounded-xl border border-border p-5 shadow-hymnal">
            <h3 className="font-serif font-semibold text-lg text-foreground mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3"><MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" /><p className="text-muted-foreground text-sm">Comforter Christian Center International</p></div>
              <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-gold" /><p className="text-muted-foreground text-sm">Contact the church office</p></div>
              <div className="flex items-center gap-3"><Mail className="w-5 h-5 text-gold" /><p className="text-muted-foreground text-sm">info@ccci.org</p></div>
            </div>
          </div>
        </motion.div>

        <motion.p className="text-center text-muted-foreground text-xs mt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          CCCI Hymnal v1.0 • Works 100% Offline
        </motion.p>
      </div>
    </Layout>
  );
}
