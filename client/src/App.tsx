import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import LiceTreatment from "@/pages/LiceTreatment";
import GlamourParties from "@/pages/GlamourParties";
import FullGallery from "@/pages/FullGallery";
import MainGalleryPage from "@/pages/Gallery/MainGalleryPage";
import GlamourPartiesGalleryPage from "@/pages/Gallery/GlamourPartiesGalleryPage";
import LiceTreatmentGalleryPage from "@/pages/Gallery/LiceTreatmentGalleryPage";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Services />
        <Pricing />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/lice-treatment" component={LiceTreatment} />
      <Route path="/glamour-parties" component={GlamourParties} />
      <Route path="/gallery/glamour-parties" component={GlamourPartiesGalleryPage} />
      <Route path="/gallery/lice-treatment" component={LiceTreatmentGalleryPage} />
      <Route path="/gallery" component={MainGalleryPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}