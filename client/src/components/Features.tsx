import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tv, Gamepad2, Heart, Gift } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function Features() {
  // todo: remove mock functionality
  const features: Feature[] = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Gentle Stylists",
      description: "Experienced with wiggly clients, first-cut jitters, and children of all ages."
    },
    {
      icon: <Gamepad2 className="w-6 h-6" />,
      title: "Fun Waiting Area", 
      description: "Toys, coloring books, and rides to keep kids entertained while waiting."
    },
    {
      icon: <Tv className="w-6 h-6" />,
      title: "TVs at Every Station",
      description: "Cartoons and shows to keep children distracted and comfortable during cuts."
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Special Rewards",
      description: "Every child leaves with a balloon and lollipop - it's our signature touch!"
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <div className="animate-bounce-slow text-sm text-foreground tracking-wider uppercase">
            About
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-secondary">
            Made for kids. Loved by parents.
          </h2>
          <div className="text-lg text-muted-foreground max-w-4xl mx-auto text-center">
            <p>For over 20 years, we've been Montgomery County's trusted kids hair salon,</p>
            <p>serving families in Gaithersburg, Darnestown, Potomac, Germantown, and surrounding areas.</p>
            <p>We specialize in creating positive experiences that build confidence and make every child feel special.</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover-elevate transition-all duration-300" data-testid={`card-feature-${index}`}>
              <CardContent className="pt-6 space-y-4">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/25 via-accent/20 to-secondary/25 rounded-2xl p-8 text-center shadow-xl border-2 border-primary/30">
          <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-4">The Yellow Balloon Experience</h3>
          <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
            For more than 20 years, The Yellow Balloon has been the place where kids get more than a haircut — 
            they get an experience. Families from Gaithersburg, Darnestown, Potomac, Germantown and beyond trust us 
            to keep haircuts happy, easy, and full of smiles.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="text-sm">First Haircuts</Badge>
            <Badge variant="secondary" className="text-sm">Special Occasions</Badge>
            <Badge variant="secondary" className="text-sm">Family-Friendly</Badge>
          </div>
        </div>
      </div>
    </section>
  );
}