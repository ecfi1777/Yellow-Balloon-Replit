import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Phone, Users, Camera, Star, MapPin, Clock } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import glamourPartyImage from "@assets/generated_images/Glamour_party_celebration_5e0f28c4.png";

export default function GlamourParties() {
  const features = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Complete Styling",
      description: "Up-dos, fancy styles, nail polish, and glitter included"
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Photos & Memories",
      description: "Photos and balloon for each child to commemorate the day"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Group Fun",
      description: "Fun group atmosphere perfect for parties and celebrations"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Confidence Building",
      description: "Every child feels like a star with our special attention"
    }
  ];


  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/25 py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-50" />
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary/30 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/30 rounded-full blur-3xl" />
          <div className="relative z-10">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="animate-bounce-slow text-sm text-foreground tracking-wider uppercase text-center lg:text-left">
                    Glamour Parties
                  </div>
                  <div className="space-y-4">
                    <h1 className="text-4xl lg:text-6xl font-black leading-tight">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
                        Confidence-Boosting Styling Parties
                      </span>
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Confidence-boosting styling experiences perfect for achievements and special celebrations. Every child feels like a star with our glamour party experience!
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      className="gap-2 text-lg px-4 py-3"
                      onClick={() => {
                        window.open("tel:3015696756", "_self");
                      }}
                      data-testid="button-call-now"
                    >
                      <Phone className="w-5 h-5" />
                      Call (301) 569-6756
                    </Button>
                    <Link href="/#contact">
                      <Button
                        variant="outline"
                        size="lg"
                        className="gap-2 text-lg px-4 py-3"
                        data-testid="button-contact"
                      >
                        Contact Us
                      </Button>
                    </Link>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 pt-6">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">255 Market Street West, Gaithersburg, MD</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">Tue-Fri: 10am-6pm | Sat-Sun: 10am-5pm</span>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-gradient-to-r from-primary via-accent to-secondary p-1 bg-gradient-to-r from-primary via-accent to-secondary">
                    <div className="rounded-2xl overflow-hidden bg-white">
                      <div className="w-full h-[400px] relative">
                        <img
                          src={glamourPartyImage}
                          alt="Children enjoying a glamour party with styling and celebrations"
                          className="w-full h-full object-cover"
                          data-testid="img-hero"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">What's Included</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="text-center hover-elevate transition-all duration-300" data-testid={`card-feature-${index}`}>
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing & Details */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-accent/10 to-primary/15">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Party Details & Pricing</h2>
              
              <Card className="hover-elevate mb-8" data-testid="card-pricing">
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                    <Sparkles className="w-6 h-6 text-primary" />
                    Glamour Party Package
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-4xl font-bold text-primary mb-4">$35 <span className="text-lg font-normal text-muted-foreground">per child</span></div>
                  <Badge variant="secondary" className="mb-6">Minimum 4 children required</Badge>
                  
                  <div className="text-left max-w-md mx-auto">
                    <h4 className="font-semibold mb-3 text-center">Includes:</h4>
                    <div className="space-y-2 text-sm">
                      <p>• Styling and up-dos</p>
                      <p>• Nail polish application</p>
                      <p>• Glitter hair spray</p>
                      <p>• Photos of each child</p>
                      <p>• Balloon and lollipop</p>
                      <p>• Fun group atmosphere</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="text-center">
                <p className="text-muted-foreground text-sm mb-4">
                  Advance booking recommended. Party duration typically 1.5-2 hours depending on group size.
                </p>
                <Badge variant="secondary" className="text-sm">
                  We provide all styling tools and accessories
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">How It Works</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto">1</div>
                  <h3 className="font-semibold">Book Your Party</h3>
                  <p className="text-muted-foreground text-sm">Call us to schedule your glamour party. Minimum 4 children required.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto">2</div>
                  <h3 className="font-semibold">Styling Session</h3>
                  <p className="text-muted-foreground text-sm">Our stylists create beautiful up-dos and apply nail polish and glitter.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto">3</div>
                  <h3 className="font-semibold">Photos & Celebration</h3>
                  <p className="text-muted-foreground text-sm">Take photos and celebrate with balloons and lollipops for everyone!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-secondary/10 to-accent/15">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Book Your Glamour Party?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Call us today to schedule an unforgettable glamour party experience that will make every child feel special!
            </p>
            <Button size="lg" data-testid="button-schedule">
              <Phone className="w-4 h-4 mr-2" />
              Call (301) 569-6756
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}