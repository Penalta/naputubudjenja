import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutTeacher from "./pages/AboutTeacher";
import Reiki from "./pages/Reiki";
import Academy from "./pages/Academy";
import Courses from "./pages/Courses";
import Usui from "./pages/Usui";
import Kundalini from "./pages/Kundalini";
import UsuiCourses from "./pages/courses/UsuiCourses";
import KundaliniCourses from "./pages/courses/KundaliniCourses";
import ArchangelicCourses from "./pages/courses/ArchangelicCourses";
import EkoReiCourses from "./pages/courses/EkoReiCourses";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-teacher" element={<AboutTeacher />} />
          <Route path="/reiki" element={<Reiki />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/usui" element={<UsuiCourses />} />
          <Route path="/courses/kundalini" element={<KundaliniCourses />} />
          <Route path="/courses/archangelic" element={<ArchangelicCourses />} />
          <Route path="/courses/ekorei" element={<EkoReiCourses />} />
          <Route path="/academy/usui" element={<Usui />} />
          <Route path="/academy/kundalini" element={<Kundalini />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
