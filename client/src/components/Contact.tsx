import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  details: string[];
  action?: () => void;
  actionText?: string;
}

export default function Contact() {
  // todo: remove mock functionality
  const contactInfo: ContactInfo[] = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["(301) 569-6756", "Call for appointments & questions"],
      action: () => {
        console.log("Phone number clicked");
        window.open("tel:3015696756", "_self");
      },
      actionText: "Call Now"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: ["255 Market Street West", "Gaithersburg, MD 20878"],
      action: () => {
        console.log("Address clicked");
        window.open("https://maps.google.com/?q=255+Market+Street+West,+Gaithersburg,+MD+20878", "_blank");
      },
      actionText: "Get Directions"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hours",
      details: ["Tue-Fri: 10am-6pm", "Sat-Sun: 10am-5pm", "Mon & Thu: Closed"]
    }
  ];

  return (
    <section id="contact" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <div className="animate-bounce-slow text-sm font-bold text-primary tracking-wider uppercase">
            Contact
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-secondary">
            Visit Us Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Book your appointment today and join thousands of happy families who trust The Yellow Balloon
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center hover-elevate transition-all duration-300" data-testid={`card-contact-${index}`}>
              <CardHeader className="space-y-4">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  {info.icon}
                </div>
                <CardTitle className="text-xl">{info.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
                {info.action && info.actionText && (
                  <Button
                    variant="outline"
                    onClick={info.action}
                    className="w-full"
                    data-testid={`button-${info.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {info.actionText}
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main CTA */}
        <div className="bg-gradient-to-r from-primary via-accent to-secondary rounded-2xl p-8 lg:p-12 text-center text-primary-foreground shadow-2xl border-4 border-white/20">
          <h3 className="text-2xl lg:text-4xl font-bold mb-4">
            Book Your Appointment Today!
          </h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join the thousands of families who have made The Yellow Balloon their trusted choice for kids' haircuts. 
            Call us now to schedule your visit!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="gap-2 text-lg px-8 py-6"
              onClick={() => {
                console.log("Main CTA call clicked");
                window.open("tel:3015696756", "_self");
              }}
              data-testid="button-cta-call"
            >
              <Phone className="w-5 h-5" />
              Call (301) 569-6756
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 text-lg px-8 py-6 bg-white/10 hover:bg-white/20 border-white/30 text-white"
              onClick={() => {
                console.log("Main CTA directions clicked");
                window.open("https://maps.google.com/?q=255+Market+Street+West,+Gaithersburg,+MD+20878", "_blank");
              }}
              data-testid="button-cta-directions"
            >
              <MapPin className="w-5 h-5" />
              Get Directions
            </Button>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Proudly serving families throughout:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Gaithersburg", "Darnestown", "Potomac", "Germantown", "Montgomery County"].map((area, index) => (
              <span key={index} className="px-3 py-1 bg-accent/20 rounded-full text-sm font-medium">
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}