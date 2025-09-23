import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scissors, Sparkles, ShieldCheck } from "lucide-react";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  priceRange: string;
}

export default function Services() {
  // todo: remove mock functionality
  const services: Service[] = [
    {
      icon: <Scissors className="w-8 h-8 text-primary" />,
      title: "Kids Haircuts",
      description: "From baby's first cut to tween styles",
      features: ["Age-appropriate styling", "TVs at every station", "Gentle, patient approach", "Balloon & lollipop included"],
      priceRange: "$30-$55"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-accent-foreground" />,
      title: "Lice Screening & Treatment",
      description: "Private, confidential care",
      features: ["Private location", "School-accepted screenings", "Two-session treatment", "Prevention education"],
      priceRange: "Call for pricing"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: "Glamour Parties",
      description: "Fun styling & polish for special occasions",
      features: ["Up-dos & fancy styles", "Nail polish", "Fun group atmosphere", "Perfect for parties"],
      priceRange: "$50+"
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-gradient-to-b from-secondary/30 to-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-secondary via-accent to-primary">
            Special Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From first haircuts to fancy up-dos, we make every visit fun and memorable
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-service-${index}`}>
              <CardHeader className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  {service.icon}
                </div>
                <div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary font-bold">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-primary text-lg">{service.priceRange}</span>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => {
                        console.log(`Learn more about ${service.title} clicked`);
                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      data-testid={`button-learn-more-${index}`}
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            onClick={() => {
              console.log("View full pricing clicked");
              // In a real app, this would navigate to a pricing page
            }}
            data-testid="button-view-pricing"
          >
            View Full Pricing
          </Button>
        </div>
      </div>
    </section>
  );
}