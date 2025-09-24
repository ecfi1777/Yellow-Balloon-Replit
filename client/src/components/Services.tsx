import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scissors, Sparkles, ShieldCheck, Baby, Paintbrush, Users } from "lucide-react";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function Services() {
  const services: Service[] = [
    {
      icon: <Scissors className="w-8 h-8 text-primary" />,
      title: "Kids Haircuts",
      description: "Professional cuts for ages 1-17. Fun, fast, and gentle with experienced stylists."
    },
    {
      icon: <Baby className="w-8 h-8 text-accent" />,
      title: "Baby's First Haircut",
      description: "Special milestone service includes certificate and keepsake lock of hair."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-secondary" />,
      title: "Lice Treatment",
      description: "Private, confidential screening and treatment. Results accepted by schools."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: "Glamour Parties",
      description: "Confidence-boosting styling parties perfect for achievements and special celebrations."
    },
    {
      icon: <Paintbrush className="w-8 h-8 text-accent" />,
      title: "Specialty Styles",
      description: "Braids, up-dos, nail polish, and glitter for special occasions."
    },
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      title: "Adult Cuts",
      description: "For parents accompanying children - convenient family service."
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-gradient-to-b from-secondary/30 to-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <div className="animate-bounce-slow text-sm text-foreground tracking-wider uppercase">
            What we do
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-secondary via-accent to-primary">
            Complete Hair Services for Kids
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From first haircuts to fancy up-dos, we make every visit fun and memorable
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover-elevate transition-all duration-300 text-center" data-testid={`card-service-${index}`}>
              <CardHeader className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  {service.icon}
                </div>
                <div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}