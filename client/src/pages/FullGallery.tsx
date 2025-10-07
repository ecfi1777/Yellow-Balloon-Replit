import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { mainGalleryImages, glamourPartyImages, firstHaircutImages } from "@/data/galleries";

export default function FullGallery() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allGalleryItems = [
    ...mainGalleryImages,
    ...glamourPartyImages,
    ...firstHaircutImages
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/25">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-6">
              <Link href="/">
                <Button variant="outline" className="gap-2 mb-6" data-testid="button-back-home">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Home
                </Button>
              </Link>
              
              <div className="animate-bounce-slow text-sm text-foreground tracking-wider uppercase">
                Full Gallery
              </div>
              <h1 className="text-3xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                See All Our Happy Moments
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Browse through our complete collection of happy kids, beautiful transformations, and memorable moments at The Yellow Balloon
              </p>
            </div>
          </div>
        </section>

        {/* Full Gallery Grid */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
              {allGalleryItems.map((item, index) => (
                <Card key={index} className="overflow-hidden hover:scale-105 transition-all duration-300 group" data-testid={`card-full-gallery-${index}`}>
                  <div className="relative">
                    <div className="overflow-hidden">
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-primary/20 to-accent/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Ready to Create Your Own Happy Moment?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Book your appointment today and let us create a beautiful, memorable experience for your child
            </p>
            <Button
              size="lg"
              className="gap-2 text-lg px-8 py-3"
              onClick={() => {
                console.log("Book appointment clicked from full gallery");
                window.open("tel:3015696756", "_self");
              }}
              data-testid="button-book-appointment"
            >
              Book Appointment
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}