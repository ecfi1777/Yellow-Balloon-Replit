import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Phone, Users, Camera, Star } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

  const occasions = [
    "Birthday Parties",
    "School Achievement Celebrations", 
    "Dance Recitals",
    "Special Milestones",
    "Friend Group Gatherings",
    "Holiday Celebrations"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-b from-primary/20 to-accent/15">
          <div className="container mx-auto px-4 text-center">
            <div className="animate-bounce-slow text-sm text-foreground tracking-wider uppercase mb-4">
              Glamour Parties
            </div>
            <h1 className="text-4xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary mb-6">
              Confidence-Boosting Styling Parties
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Confidence-boosting styling experiences perfect for achievements and special celebrations. Every child feels like a star with our glamour party experience!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" data-testid="button-call-now">
                <Phone className="w-4 h-4 mr-2" />
                Call (301) 569-6756
              </Button>
              <Link href="/#contact">
                <Button variant="outline" size="lg" data-testid="button-contact">
                  Contact Us
                </Button>
              </Link>
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
                  
                  <div className="grid md:grid-cols-2 gap-8 text-left">
                    <div>
                      <h4 className="font-semibold mb-3">Includes:</h4>
                      <div className="space-y-2 text-sm">
                        <p>• Styling and up-dos</p>
                        <p>• Nail polish application</p>
                        <p>• Glitter hair spray</p>
                        <p>• Photos of each child</p>
                        <p>• Balloon and lollipop</p>
                        <p>• Fun group atmosphere</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Perfect For:</h4>
                      <div className="grid grid-cols-1 gap-1">
                        {occasions.map((occasion, index) => (
                          <Badge key={index} variant="outline" className="text-xs justify-start">
                            {occasion}
                          </Badge>
                        ))}
                      </div>
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