import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Phone, CheckCircle, Lock, MapPin, Clock } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GalleryCarousel } from "@/components/GalleryCarousel";
import { ImageGrid } from "@/components/ImageGrid";
import { ViewMoreButton } from "@/components/ViewMoreButton";
import { liceTreatmentImages } from "@/data/galleries";

export default function LiceTreatment() {
  const features = [
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Private & Confidential",
      description: "Separate area for complete privacy and discretion"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "School-Accepted Results",
      description: "Official documentation accepted by local schools"
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Kid-Friendly Approach", 
      description: "Gentle, compassionate treatment designed for children"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Expert Support",
      description: "Professional guidance and prevention education"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-secondary/30 via-accent/20 to-primary/25 py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-accent/20 opacity-50" />
          <div className="absolute top-10 left-10 w-32 h-32 bg-secondary/30 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/30 rounded-full blur-3xl" />
          <div className="relative z-10">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="animate-bounce-slow text-sm text-foreground tracking-wider uppercase text-center lg:text-left">
                    Lice Services
                  </div>
                  <div className="space-y-4">
                    <h1 className="text-4xl lg:text-6xl font-black leading-tight">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-accent to-primary">
                        Lice Treatment & Screening
                      </span>
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Private, confidential lice screening and treatment in a separate area. We understand this can be stressful - we're here to help with compassion and expertise.
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
                      <MapPin className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="text-sm">255 Market Street West, Gaithersburg, MD</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Clock className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="text-sm">Tue-Fri: 10am-6pm | Sat-Sun: 10am-5pm</span>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <GalleryCarousel images={liceTreatmentImages} className="rounded-3xl overflow-hidden shadow-2xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Why Choose Us for Lice Treatment</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="text-center hover-elevate transition-all duration-300" data-testid={`card-feature-${index}`}>
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-4">
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

        {/* Pricing & Process */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-accent/10 to-secondary/15">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Services & Pricing</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="hover-elevate" data-testid="card-screening">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-secondary" />
                      Lice Screening
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-secondary mb-2">$25</div>
                    <p className="text-muted-foreground mb-4">Thorough professional screening with official documentation</p>
                    <div className="space-y-2 text-sm">
                      <p>• Results accepted by local schools</p>
                      <p>• Private, confidential service</p>
                      <p>• Official documentation provided</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover-elevate" data-testid="card-treatment">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-secondary" />
                      Lice Treatment
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-secondary mb-2">$85/hour</div>
                    <p className="text-muted-foreground mb-4">Comprehensive removal process with follow-up care</p>
                    <div className="space-y-2 text-sm">
                      <p>• Thorough manual removal</p>
                      <p>• Two-session treatment process</p>
                      <p>• Prevention education included</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-center mt-12">
                <Badge variant="secondary" className="text-sm mb-4">
                  All services include balloon and lollipop
                </Badge>
                <p className="text-muted-foreground text-sm">
                  We understand this can be a stressful situation. Our experienced team provides compassionate, discreet care to help your family through this common childhood experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Schedule?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Call us today for confidential lice screening or treatment. We're here to help with care and understanding.
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
        <section className="py-16 lg:py-24 bg-gradient-to-b from-accent/10 to-secondary/15">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Lice Treatment Gallery</h2>
            <ImageGrid images={liceTreatmentImages} maxItems={8} />
            <ViewMoreButton to="/gallery/lice-treatment" label="View More" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}