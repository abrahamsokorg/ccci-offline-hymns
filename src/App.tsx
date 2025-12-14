import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from '@/context/AppContext';
import { SplashScreen } from '@/components/SplashScreen';
import { HomeScreen } from '@/components/HomeScreen';
import Languages from '@/pages/Languages';
import HymnList from '@/pages/HymnList';
import HymnDetail from '@/pages/HymnDetail';
import Authors from '@/pages/Authors';
import AuthorDetail from '@/pages/AuthorDetail';
import Categories from '@/pages/Categories';
import CategoryDetail from '@/pages/CategoryDetail';
import Favorites from '@/pages/Favorites';
import Gospel from '@/pages/Gospel';
import Settings from '@/pages/Settings';
import About from '@/pages/About';
import Share from '@/pages/Share';
import NotFound from '@/pages/NotFound';

const queryClient = new QueryClient();

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            {/* Splash screen as overlay */}
            <AnimatePresence>
              {showSplash && (
                <SplashScreen key="splash" onComplete={() => setShowSplash(false)} />
              )}
            </AnimatePresence>
            
            {/* Main app routes - always mounted */}
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/languages" element={<Languages />} />
              <Route path="/hymns" element={<HymnList />} />
              <Route path="/hymn/:id" element={<HymnDetail />} />
              <Route path="/authors" element={<Authors />} />
              <Route path="/author/:id" element={<AuthorDetail />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/category/:id" element={<CategoryDetail />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/gospel" element={<Gospel />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/about" element={<About />} />
              <Route path="/share" element={<Share />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AppProvider>
    </QueryClientProvider>
  );
};

export default App;
