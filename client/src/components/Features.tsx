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
      icon: <Gamepad2 className="w-6 h-6" />,
      title: "Kid-friendly salon",
      description: "Toys, coloring books & fun rides in the waiting area"
    },
    {
      icon: <Tv className="w-6 h-6" />,
      title: "TVs at every station",
      description: "Keep kids entertained during their haircut"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Gentle stylists",
      description: "Patient, experienced stylists who love working with kids"
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Balloon & lollipop",
      description: "Every child leaves with a special treat"
    }
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <Badge variant="outline" className="text-sm px-4 py-2">
            Over 20 Years of Experience
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-secondary">
            Why Families Love Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We've been making haircuts happy, easy, and full of smiles for families across Montgomery County
          </p>
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