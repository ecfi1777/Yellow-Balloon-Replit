import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import { ImageGrid } from "@/components/ImageGrid";
import { ViewMoreButton } from "@/components/ViewMoreButton";
import { mainGalleryImages } from "@/data/galleries";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { Loading } from "@/components/Loading";
import Plausible from 'plausible-tracker';

// Initialize Plausible Analytics once at module scope (privacy-friendly, no cookies)
const { enableAutoPageviews } = Plausible({
  domain: 'theyellowballoonmaryland.com'
});

// Enable automatic pageview tracking for all routes
enableAutoPageviews();

// Lazy load heavy pages
const NotFound = lazy(() => import("@/pages/not-found"));
const LiceTreatment = lazy(() => import("@/pages/LiceTreatment"));
const GlamourParties = lazy(() => import("@/pages/GlamourParties"));
const MainGalleryPage = lazy(() => import("@/pages/Gallery/MainGalleryPage"));
const GlamourPartiesGalleryPage = lazy(() => import("@/pages/Gallery/GlamourPartiesGalleryPage"));
const LiceTreatmentGalleryPage = lazy(() => import("@/pages/Gallery/LiceTreatmentGalleryPage"));

function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Services />
        <Pricing />
        <section id="gallery" className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Our Work</h2>
            <ImageGrid images={mainGalleryImages} maxItems={8} />
            <ViewMoreButton to="/gallery" label="View More" />
          </div>
        </section>
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/lice-treatment" component={LiceTreatment} />
        <Route path="/glamour-parties" component={GlamourParties} />
        <Route path="/gallery/glamour-parties" component={GlamourPartiesGalleryPage} />
        <Route path="/gallery/lice-treatment" component={LiceTreatmentGalleryPage} />
        <Route path="/gallery" component={MainGalleryPage} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}
