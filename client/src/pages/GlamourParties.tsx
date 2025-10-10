import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Phone, Users, Camera, Star, MapPin, Clock, Wand2, Music, Flower } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ImageGrid } from "@/components/ImageGrid";
import { ViewMoreButton } from "@/components/ViewMoreButton";
import { glamourPartyImages } from "@/data/galleries";

export default function GlamourParties() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % glamourPartyImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [glamourPartyImages.length]);

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

  const glamourStyles = [
    {
      icon: <Wand2 className="w-6 h-6" />,
      title: "The Fairy Princess",
      items: [
        "Hair Updo or Fancy Hairstyle",
        "Polish fingernails",
        "Theme decorations: balloons, cups & plates",
        "Games",
        "Music"
      ]
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: "The Pop Star",
      items: [
        "Funky updo with temporary color",
        "Polish fingernails",
        "Theme decorations: balloons, cups & plates",
        "Games",
        "Music"
      ]
    },
    {
      icon: <Flower className="w-6 h-6" />,
      title: "Hawaiian Luau",
      items: [
        "Hair braid with beads",
        "Hawaiian flower clips",
        "Polish fingernails",
        "Theme decorations: balloons, cups & plates",
        "Limbo",
        "Games",
        "Music"
      ]
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
                    <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 via-accent/15 to-secondary/10">
                      <div className="w-full relative flex items-center justify-center min-h-[300px] max-h-[500px]">
                        <img
                          src={glamourPartyImages[currentImageIndex].src}
                          alt={glamourPartyImages[currentImageIndex].alt}
                          className="w-auto h-auto max-w-full max-h-[500px] object-contain transition-all duration-1000 ease-in-out"
                          data-testid="img-glamour-carousel"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                      </div>
                    </div>
                  </div>
                  {/* Image indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {glamourPartyImages.map((_, index) => (
                      <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentImageIndex 
                            ? 'bg-white shadow-lg scale-125' 
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                        data-testid={`indicator-${index}`}
                      />
                    ))}
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

        {/* Choose Your Glamour Style */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-secondary/10 to-accent/15">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Choose Your Glamour Style</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {glamourStyles.map((style, index) => (
                <Card key={index} className="text-center hover-elevate transition-all duration-300" data-testid={`card-style-${index}`}>
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                      {style.icon}
                    </div>
                    <CardTitle className="text-lg">{style.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-muted-foreground text-sm leading-relaxed space-y-2 text-left">
                      {style.items.map((item, itemIndex) => (
                        <li key={itemIndex}>• {item}</li>
                      ))}
                    </ul>
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
                    Glamour Party Packages
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-4xl font-bold text-primary mb-4">$720 <span className="text-lg font-normal text-muted-foreground">for up to 12 kids</span></div>
                  <div className="space-y-2 text-sm text-muted-foreground mb-6">
                    <p>• Each additional child: $55</p>
                    <p>• Party times: Saturday or Sunday nights, 5:30 pm – 7:00 pm</p>
                    <p>• Deposit: $150 non-refundable deposit required to reserve</p>
                  </div>
                  
                  <div className="max-w-md mx-auto">
                    <h4 className="font-semibold mb-3 text-center">Includes:</h4>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm max-w-sm mx-auto text-left">
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
                  <p className="text-muted-foreground text-sm">Call us to schedule your glamour party and reserve your date with a $150 deposit.</p>
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" data-testid="button-schedule">
                <Phone className="w-4 h-4 mr-2" />
                Call (301) 569-6756
              </Button>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Glamour Parties Gallery</h2>
            <ImageGrid images={glamourPartyImages} maxItems={8} />
            <ViewMoreButton to="/gallery/glamour-parties" label="View More" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
