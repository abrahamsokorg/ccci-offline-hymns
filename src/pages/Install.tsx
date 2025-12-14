import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, Smartphone, Check, Share, MoreVertical } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const Install = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
    }

    // Detect iOS
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(isIOSDevice);

    // Listen for install prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      setIsInstalled(true);
    }
    setDeferredPrompt(null);
  };

  if (isInstalled) {
    return (
      <Layout title="Install App" showBack>
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6"
          >
            <Check className="w-10 h-10 text-green-600 dark:text-green-400" />
          </motion.div>
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-2">
            Already Installed!
          </h2>
          <p className="text-muted-foreground">
            CCCI Hymnal is installed on your device. You can access it from your home screen.
          </p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title="Install App" showBack>
      <div className="px-4 py-6 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="w-24 h-24 mx-auto mb-4 rounded-2xl overflow-hidden shadow-hymnal">
            <img src="/pwa-192x192.png" alt="CCCI Hymnal" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-2xl font-serif font-semibold text-foreground mb-2">
            Install CCCI Hymnal
          </h1>
          <p className="text-muted-foreground">
            Install the app for quick access and full offline functionality
          </p>
        </motion.div>

        <div className="space-y-4">
          {/* Benefits */}
          <Card className="border-border/50">
            <CardContent className="p-4 space-y-3">
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-primary" />
                Why Install?
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Works 100% offline - no internet needed</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Quick access from your home screen</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Faster loading and better performance</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Full-screen experience like a native app</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Install Button (Android/Desktop) */}
          {deferredPrompt && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <Button
                onClick={handleInstall}
                className="w-full h-14 text-lg gradient-hymnal"
                size="lg"
              >
                <Download className="w-5 h-5 mr-2" />
                Install Now
              </Button>
            </motion.div>
          )}

          {/* iOS Instructions */}
          {isIOS && !deferredPrompt && (
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-4 space-y-3">
                <h3 className="font-semibold text-foreground">
                  Install on iPhone/iPad
                </h3>
                <ol className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-semibold flex-shrink-0">
                      1
                    </span>
                    <span className="flex items-center gap-1">
                      Tap the <Share className="w-4 h-4 inline" /> Share button in Safari
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-semibold flex-shrink-0">
                      2
                    </span>
                    <span>Scroll down and tap "Add to Home Screen"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-semibold flex-shrink-0">
                      3
                    </span>
                    <span>Tap "Add" to confirm</span>
                  </li>
                </ol>
              </CardContent>
            </Card>
          )}

          {/* Generic Instructions (when no prompt available) */}
          {!isIOS && !deferredPrompt && (
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-4 space-y-3">
                <h3 className="font-semibold text-foreground">
                  How to Install
                </h3>
                <ol className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-semibold flex-shrink-0">
                      1
                    </span>
                    <span className="flex items-center gap-1">
                      Tap the <MoreVertical className="w-4 h-4 inline" /> menu in your browser
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-semibold flex-shrink-0">
                      2
                    </span>
                    <span>Select "Install app" or "Add to Home Screen"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-semibold flex-shrink-0">
                      3
                    </span>
                    <span>Confirm to add CCCI Hymnal to your device</span>
                  </li>
                </ol>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Install;
