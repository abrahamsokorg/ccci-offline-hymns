import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { BookOpen, Heart, Cross } from 'lucide-react';

export default function Gospel() {
  return (
    <Layout title="The Gospel" showBack>
      <div className="p-4">
        <motion.div
          className="mb-6 text-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-hymnal mb-3">
            <BookOpen className="w-8 h-8 text-primary-foreground" />
          </div>
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-1">
            The Gospel
          </h2>
          <p className="text-muted-foreground text-sm">
            The Good News of Salvation
          </p>
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {/* Section 1 */}
          <div className="bg-card rounded-xl border border-border p-5 shadow-hymnal">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">1</span>
              </div>
              <h3 className="font-serif font-semibold text-lg text-foreground">
                God Loves You
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-3">
              God created you and loves you with an everlasting love. He desires a personal relationship with you.
            </p>
            <blockquote className="border-l-2 border-gold pl-4 italic text-muted-foreground font-serif">
              "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life."
              <span className="block text-xs mt-1 text-gold not-italic">— John 3:16</span>
            </blockquote>
          </div>

          {/* Section 2 */}
          <div className="bg-card rounded-xl border border-border p-5 shadow-hymnal">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">2</span>
              </div>
              <h3 className="font-serif font-semibold text-lg text-foreground">
                We Are Separated from God
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Sin has separated us from God. We cannot reach God through our own efforts, good works, or religion.
            </p>
            <blockquote className="border-l-2 border-gold pl-4 italic text-muted-foreground font-serif">
              "For all have sinned, and come short of the glory of God."
              <span className="block text-xs mt-1 text-gold not-italic">— Romans 3:23</span>
            </blockquote>
          </div>

          {/* Section 3 */}
          <div className="bg-card rounded-xl border border-border p-5 shadow-hymnal">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Cross className="w-4 h-4 text-primary-foreground" />
              </div>
              <h3 className="font-serif font-semibold text-lg text-foreground">
                Jesus Is the Only Way
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Jesus Christ died on the cross and rose again to pay the penalty for our sins and bridge the gap between God and us.
            </p>
            <blockquote className="border-l-2 border-gold pl-4 italic text-muted-foreground font-serif">
              "Jesus saith unto him, I am the way, the truth, and the life: no man cometh unto the Father, but by me."
              <span className="block text-xs mt-1 text-gold not-italic">— John 14:6</span>
            </blockquote>
          </div>

          {/* Section 4 */}
          <div className="bg-card rounded-xl border border-border p-5 shadow-hymnal">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Heart className="w-4 h-4 text-primary-foreground" />
              </div>
              <h3 className="font-serif font-semibold text-lg text-foreground">
                Receive Christ Today
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-3">
              You must personally receive Jesus Christ as your Savior and Lord. Then you can experience God's love and plan for your life.
            </p>
            <blockquote className="border-l-2 border-gold pl-4 italic text-muted-foreground font-serif">
              "But as many as received him, to them gave he power to become the sons of God, even to them that believe on his name."
              <span className="block text-xs mt-1 text-gold not-italic">— John 1:12</span>
            </blockquote>
          </div>

          {/* Prayer */}
          <div className="bg-primary/5 rounded-xl border border-primary/20 p-5">
            <h3 className="font-serif font-semibold text-lg text-foreground mb-3 text-center">
              Prayer of Salvation
            </h3>
            <p className="text-foreground leading-relaxed font-serif italic text-center">
              "Dear Lord Jesus, I acknowledge that I am a sinner. I believe that You died for my sins and rose from the dead. I now turn from my sins and invite You to come into my heart and life. I receive You as my personal Savior and Lord. Thank You for saving me. In Jesus' name, Amen."
            </p>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
