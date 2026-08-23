import { lazy, Suspense } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/context/ThemeContext";
import ScrollToTop from "@/components/ScrollToTop";

import Index from "./pages/Index";

const Team = lazy(() => import("./pages/Team"));
const Gallery = lazy(() => import("./pages/Gallery"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Yearbook = lazy(() => import("./pages/Yearbook"));
const NotFound = lazy(() => import("./pages/NotFound"));

const faviconUrl = "/logo.png";

const setFavicon = () => {
  const existingLink =
    document.querySelector<HTMLLinkElement>(
      "link[rel*='icon']"
    );

  const favicon =
    existingLink ?? document.createElement("link");

  favicon.rel = "shortcut icon";
  favicon.href = faviconUrl;

  if (!existingLink) {
    document.head.appendChild(favicon);
  }
};

setFavicon();

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="flex min-h-screen items-center justify-center bg-[#030507] text-[#F5F7FA]">
    <div className="flex flex-col items-center gap-5">
      <div className="relative h-12 w-12">
        <span className="absolute inset-0 rounded-full border border-[#147BFF]/30" />

        <span className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-[#35C8FF]" />
      </div>

      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#A4AFBC]">
        Loading
      </span>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <ScrollToTop />

          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/team" element={<Team />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/yearbook" element={<Yearbook />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;