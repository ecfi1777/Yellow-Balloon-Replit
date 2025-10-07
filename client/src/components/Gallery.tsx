import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { mainGalleryImages } from "@/data/galleries";

export default function Gallery() {
  const galleryItems = mainGalleryImages.slice(0, 8);


  return (
    <section id="gallery" className="py-16 lg:py-24 bg-gradient-to-b from-primary/20 to-secondary/25">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <div className="animate-bounce-slow text-sm text-foreground tracking-wider uppercase">
            Gallery
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-accent">
            Happy cuts, happy kids
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every visit to The Yellow Balloon creates happy memories and beautiful results
          </p>
        </div>

        {/* Gallery Grid - 2 Rows */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-12">
          {galleryItems.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:scale-105 transition-all duration-300 group" data-testid={`card-gallery-${index}`}>
              <div className="relative">
                <div className="overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/gallery">
            <Button
              size="lg"
              className="gap-2"
              data-testid="button-view-more"
            >
              View More Photos
              <ChevronRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}