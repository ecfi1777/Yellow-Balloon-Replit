import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  rating: number;
  text: string;
  location: string;
}

export default function Reviews() {
  // todo: remove mock functionality
  const testimonials: Testimonial[] = [
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
    <section id="reviews" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <div className="animate-bounce-slow text-sm text-foreground tracking-wider uppercase">
            Reviews
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
            What Families Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by families throughout the community for over 20 years
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:scale-105 transition-all duration-300" data-testid={`card-testimonial-${index}`}>
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
    </section>
  );
}