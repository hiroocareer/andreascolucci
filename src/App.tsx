import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { Language } from "@/i18n/translations";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const SUPPORTED_LANGS: Language[] = ["en", "it", "es"];

const LanguageWrapper = ({ children }: { children: React.ReactNode }) => {
  const { lang } = useParams<{ lang: string }>();
  const language = SUPPORTED_LANGS.includes(lang as Language) ? (lang as Language) : "en";

  return (
    <LanguageProvider initialLanguage={language} key={language}>
      <ScrollToTop />
      <Navigation />
      {children}
      <Footer />
    </LanguageProvider>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Default redirect to /en */}
          <Route path="/" element={<Navigate to="/en" replace />} />
          
          {/* Language-prefixed routes */}
          <Route path="/:lang" element={<LanguageWrapper><Index /></LanguageWrapper>} />
          <Route path="/:lang/work" element={<LanguageWrapper><Work /></LanguageWrapper>} />
          <Route path="/:lang/about" element={<LanguageWrapper><About /></LanguageWrapper>} />
          <Route path="/:lang/contact" element={<LanguageWrapper><Contact /></LanguageWrapper>} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
