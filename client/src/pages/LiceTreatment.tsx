import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Phone, CheckCircle, Lock } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
        <section className="py-20 lg:py-32 bg-gradient-to-b from-secondary/20 to-accent/15">
          <div className="container mx-auto px-4 text-center">
            <div className="animate-bounce-slow text-sm text-foreground tracking-wider uppercase mb-4">
              Lice Services
            </div>
            <h1 className="text-4xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-secondary via-accent to-primary mb-6">
              Lice Treatment & Screening
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Private, confidential lice screening and treatment in a separate area. We understand this can be stressful - we're here to help with compassion and expertise.
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