/* App principal — Roteamento e layout com navegação e efeito de mouse */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseTrail from "@/components/MouseTrail";

import Index from "./pages/Index";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      {/* Efeito interativo de linhas ao redor do mouse */}
      <MouseTrail />
      <BrowserRouter>
        {/* Navegação fixa no topo */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/contato" element={<Contact />} />
          {/* Rota 404 para páginas não encontradas */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* Rodapé presente em todas as páginas */}
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
