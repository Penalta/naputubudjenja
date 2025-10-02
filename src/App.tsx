import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import ReikiPage from "./pages/ReikiPage";
import UsuiReikiPage from "./pages/UsuiReikiPage";
import KundaliniReikiPage from "./pages/KundaliniReikiPage";
import EcoReiPage from "./pages/EcoReiPage";
import AngelicReikiPage from "./pages/AngelicReikiPage";
import SelfDevelopmentPage from "./pages/SelfDevelopmentPage";
import LifeJourneyPage from "./pages/LifeJourneyPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/reiki" element={<ReikiPage />} />
            <Route path="/reiki/usui" element={<UsuiReikiPage />} />
            <Route path="/reiki/kundalini" element={<KundaliniReikiPage />} />
            <Route path="/reiki/eco-rei" element={<EcoReiPage />} />
            <Route path="/reiki/angelic" element={<AngelicReikiPage />} />
            <Route path="/self-development" element={<SelfDevelopmentPage />} />
            <Route path="/life-journey" element={<LifeJourneyPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
