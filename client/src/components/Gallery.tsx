import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { Link } from "wouter";
import firstHaircut1 from "@assets/generated_images/First_haircut_salon_photo_93504202.png";
import boyHaircut1 from "@assets/generated_images/Boy_haircut_salon_photo_f149f7c7.png";
import glamourParty1 from "@assets/generated_images/Glamour_party_styling_photo_1558caf6.png";
import hairStyling1 from "@assets/generated_images/Hair_braiding_salon_photo_81cddccf.png";
import firstHaircut2 from "@assets/generated_images/Toddler_first_haircut_photo_84ad34eb.png";
import boyHaircut2 from "@assets/generated_images/School_boy_haircut_photo_358e2981.png";
import glamourParty2 from "@assets/generated_images/Special_occasion_styling_photo_50692872.png";
import hairStyling2 from "@assets/generated_images/Group_glamour_party_photo_fc0c14de.png";

interface GalleryItem {
  image: string;
  alt: string;
}

export default function Gallery() {
  const galleryItems: GalleryItem[] = [
    {
      image: firstHaircut1,
      alt: "Child getting their first haircut at The Yellow Balloon salon with professional stylist"
    },
    {
      image: boyHaircut1,
      alt: "Young boy watching cartoons while getting a professional haircut at The Yellow Balloon"
    },
    {
      image: glamourParty1,
      alt: "Girl enjoying glamour party makeover with updo styling and nail polish at salon"
    },
    {
      image: hairStyling1,
      alt: "Professional hair braiding and styling service at The Yellow Balloon kids salon"
    },
    {
      image: firstHaircut2,
      alt: "Toddler's milestone first haircut with gentle, patient stylist at The Yellow Balloon"
    },
    {
      image: boyHaircut2,
      alt: "School-age boy receiving professional haircut while playing with educational toys"
    },
    {
      image: glamourParty2,
      alt: "Special occasion hair styling with elaborate updo and accessories at salon"
    },
    {
      image: hairStyling2,
      alt: "Group glamour party with multiple children getting styling services together"
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
            <Card key={index} className="overflow-hidden hover:scale-105 transition-all duration-300 group" data-testid={`card-gallery-${index}`}>
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