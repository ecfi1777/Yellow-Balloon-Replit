import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { Link } from "wouter";
import firstHaircut1 from "@assets/stock_images/child_getting_first__d4068372.jpg";
import firstHaircut2 from "@assets/stock_images/child_getting_first__42abb267.jpg";
import glamourParty1 from "@assets/stock_images/little_girl_glamour__82803a0f.jpg";
import glamourParty2 from "@assets/stock_images/little_girl_glamour__3060d1ca.jpg";
import boyHaircut1 from "@assets/stock_images/boy_getting_haircut__b92accf7.jpg";
import boyHaircut2 from "@assets/stock_images/boy_getting_haircut__940de3e3.jpg";
import hairStyling1 from "@assets/stock_images/children_hair_braidi_4ff249c2.jpg";
import hairStyling2 from "@assets/stock_images/children_hair_braidi_dec31d64.jpg";

interface GalleryItem {
  image: string;
  alt: string;
}

export default function Gallery() {
  const galleryItems: GalleryItem[] = [
    {
      image: firstHaircut1,
      alt: "Child getting their first haircut with a big smile"
    },
    {
      image: boyHaircut1,
      alt: "Young boy getting a professional haircut"
    },
    {
      image: glamourParty1,
      alt: "Girl enjoying glamour party styling session"
    },
    {
      image: hairStyling1,
      alt: "Children getting special hair braiding and styling"
    },
    {
      image: firstHaircut2,
      alt: "Another happy child during their first haircut experience"
    },
    {
      image: boyHaircut2,
      alt: "Boy receiving professional haircut service"
    },
    {
      image: glamourParty2,
      alt: "Girl getting glamour party makeup and hair styling"
    },
    {
      image: hairStyling2,
      alt: "Creative hair braiding and styling for children"
    }
  ];


  return (
    <section id="gallery" className="py-16 lg:py-24 bg-gradient-to-b from-primary/20 to-secondary/25">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <div className="animate-bounce-slow text-sm text-foreground tracking-wider uppercase">
            Gallery
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
            Happy cuts, happy kids
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every visit to The Yellow Balloon creates happy memories and beautiful results
          </p>
        </div>

        {/* Gallery Grid - 2 Rows */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-12">
          {galleryItems.map((item, index) => (
            <Card key={index} className="overflow-hidden hover-elevate transition-all duration-300 group" data-testid={`card-gallery-${index}`}>
              <div className="relative">
                <div className="overflow-hidden">
                  <img
                    src={item.image}
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