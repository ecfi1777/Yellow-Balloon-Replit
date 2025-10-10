import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Link } from "wouter";
import { SEO } from "@/components/SEO";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-primary/20 via-accent/15 to-secondary/20">
      <SEO 
        title="Page Not Found | The Yellow Balloon Kids Hair Salon"
        description="The page you're looking for doesn't exist. Return to The Yellow Balloon homepage to explore our kids' haircut services in Gaithersburg, MD."
      />
      <div className="text-center px-4 max-w-2xl mx-auto">
        {/* Yellow Balloon Logo/Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center shadow-2xl animate-bounce-slow">
              <img 
                src="/assets/yellow_balloon.png" 
                alt="Yellow Balloon Logo" 
                className="w-24 h-24 object-contain"
              />
            </div>
            {/* String for balloon */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-muted-foreground/40"></div>
          </div>
        </div>

        {/* Friendly Error Message */}
        <h1 className="text-5xl lg:text-6xl font-black mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
            Oops!
          </span>
        </h1>
        <p className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
          This page flew away with a balloon!
        </p>
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          We couldn't find what you're looking for. Let's get you back to where the fun is!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/">
            <Button size="lg" className="gap-2" data-testid="button-go-home">
              <Home className="w-5 h-5" />
              Go Back Home
            </Button>
          </Link>
          <Link href="/#contact">
            <Button size="lg" variant="outline" data-testid="button-contact-us">
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground mb-4">Quick Links:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/glamour-parties">
              <a className="text-primary hover:underline" data-testid="link-glamour-parties">
                Glamour Parties
              </a>
            </Link>
            <Link href="/lice-treatment">
              <a className="text-primary hover:underline" data-testid="link-lice-treatment">
                Lice Treatment
              </a>
            </Link>
            <Link href="/gallery">
              <a className="text-primary hover:underline" data-testid="link-gallery">
                Photo Gallery
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
