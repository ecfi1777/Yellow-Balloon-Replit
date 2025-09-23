import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Star } from "lucide-react";
import heroImage from "@assets/generated_images/Happy_child_salon_haircut_f1c818df.png";
import salonInterior from "@assets/generated_images/Modern_salon_interior_50f75e1e.png";
import beforeAfter from "@assets/generated_images/Before_after_hair_transformation_79ac8226.png";
import teamPhoto from "@assets/generated_images/Salon_team_photo_c49ae9ec.png";

interface GalleryItem {
  image: string;
  title: string;
  category: string;
  alt: string;
}

export default function Gallery() {
  // todo: remove mock functionality
  const galleryItems: GalleryItem[] = [
    {
      image: heroImage,
      title: "Happy First Haircut",
      category: "First Cuts",
      alt: "Child getting their first haircut with a big smile"
    },
    {
      image: beforeAfter,
      title: "Amazing Transformation",
      category: "Before & After",
      alt: "Before and after photos showing hair transformation"
    },
    {
      image: salonInterior,
      title: "Our Kid-Friendly Salon",
      category: "Our Space",
      alt: "Modern, colorful salon interior with TVs and toys"
    },
    {
      image: teamPhoto,
      title: "Our Expert Team",
      category: "Meet the Stylists",
      alt: "Professional team of experienced children's hair stylists"
    }
  ];

  // todo: remove mock functionality
  const testimonials = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "My daughter loves coming here! The stylists are so patient and gentle.",
      location: "Gaithersburg"
    },
    {
      name: "Michael R.",
      rating: 5,
      text: "First haircut was a huge success. Professional, clean, and kid-friendly!",
      location: "Potomac"
    },
    {
      name: "Jennifer L.",
      rating: 5,
      text: "20+ years of excellent service. We trust no one else with our kids' hair.",
      location: "Darnestown"
    }
  ];

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-gradient-to-b from-primary/20 to-secondary/25">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
            See the Smiles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every visit to The Yellow Balloon creates happy memories and beautiful results
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {galleryItems.map((item, index) => (
            <Card key={index} className="hover-elevate transition-all duration-300 group" data-testid={`card-gallery-${index}`}>
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                  {item.category}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground text-center leading-relaxed">{item.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">What Families Say</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-testimonial-${index}`}>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{testimonial.name}</span>
                    <span className="text-sm text-muted-foreground">{testimonial.location}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="gap-2"
            onClick={() => {
              console.log("View more photos clicked");
              // In a real app, this would open a full gallery
            }}
            data-testid="button-view-more"
          >
            View More Photos
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}