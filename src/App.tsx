import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/layout/Layout";
import Index from "./pages/Index.tsx";
import Fabricantes from "./pages/Fabricantes.tsx";
import Tokens from "./pages/Tokens.tsx";
import Garantia from "./pages/Garantia.tsx";
import Downloads from "./pages/Downloads.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Index /></Layout>} />
          <Route path="/fabricantes" element={<Layout><Fabricantes /></Layout>} />
          <Route path="/tokens-e-certificados" element={<Layout><Tokens /></Layout>} />
          <Route path="/garantia" element={<Layout><Garantia /></Layout>} />
          <Route path="/downloads" element={<Layout><Downloads /></Layout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
