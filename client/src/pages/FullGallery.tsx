import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Import existing gallery images
import firstHaircut1 from "@assets/stock_images/child_getting_first__d4068372.jpg";
import firstHaircut2 from "@assets/stock_images/child_getting_first__42abb267.jpg";
import glamourParty1 from "@assets/stock_images/little_girl_glamour__82803a0f.jpg";
import glamourParty2 from "@assets/stock_images/little_girl_glamour__3060d1ca.jpg";
import boyHaircut1 from "@assets/stock_images/boy_getting_haircut__b92accf7.jpg";
import boyHaircut2 from "@assets/stock_images/boy_getting_haircut__940de3e3.jpg";
import hairStyling1 from "@assets/stock_images/children_hair_braidi_4ff249c2.jpg";
import hairStyling2 from "@assets/stock_images/children_hair_braidi_dec31d64.jpg";

// Import new gallery images
import happyHaircut1 from "@assets/stock_images/children_happy_hairc_93fb1c45.jpg";
import happyHaircut2 from "@assets/stock_images/children_happy_hairc_585f1b59.jpg";
import happyHaircut3 from "@assets/stock_images/children_happy_hairc_15e33584.jpg";
import happyHaircut4 from "@assets/stock_images/children_happy_hairc_4a6cb1a5.jpg";
import kidsStyling1 from "@assets/stock_images/kids_hair_styling_br_5bfc0dc2.jpg";
import kidsStyling2 from "@assets/stock_images/kids_hair_styling_br_1571ee4e.jpg";
import kidsStyling3 from "@assets/stock_images/kids_hair_styling_br_ff7ebbd6.jpg";
import kidsStyling4 from "@assets/stock_images/kids_hair_styling_br_ee67fd2e.jpg";
import babyFirst1 from "@assets/stock_images/toddler_baby_first_h_81f53ad7.jpg";
import babyFirst2 from "@assets/stock_images/toddler_baby_first_h_3dec3334.jpg";
import babyFirst3 from "@assets/stock_images/toddler_baby_first_h_de795191.jpg";
import babyFirst4 from "@assets/stock_images/toddler_baby_first_h_bb0e2284.jpg";

interface GalleryItem {
  image: string;
  alt: string;
}

export default function FullGallery() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allGalleryItems: GalleryItem[] = [
    // Existing images from main gallery
    {
      image: firstHaircut1,
      alt: "Child getting their first haircut with a big smile"
    },
    {
      image: boyHaircut1,
      alt: "Young boy getting a professional haircut"
    },
    {
      image: glamourParty1,
      alt: "Girl enjoying glamour party styling session"
    },
    {
      image: hairStyling1,
      alt: "Children getting special hair braiding and styling"
    },
    {
      image: firstHaircut2,
      alt: "Another happy child during their first haircut experience"
    },
    {
      image: boyHaircut2,
      alt: "Boy receiving professional haircut service"
    },
    {
      image: glamourParty2,
      alt: "Girl getting glamour party makeup and hair styling"
    },
    {
      image: hairStyling2,
      alt: "Creative hair braiding and styling for children"
    },
    // Additional photos for full gallery
    {
      image: happyHaircut1,
      alt: "Happy children enjoying their haircut experience"
    },
    {
      image: happyHaircut2,
      alt: "Salon transformation showing before and after results"
    },
    {
      image: happyHaircut3,
      alt: "Children excited about their new hairstyles"
    },
    {
      image: happyHaircut4,
      alt: "Professional haircut service for young clients"
    },
    {
      image: kidsStyling1,
      alt: "Fun hair styling and braiding session"
    },
    {
      image: kidsStyling2,
      alt: "Creative ponytails and styling for kids"
    },
    {
      image: kidsStyling3,
      alt: "Stylish braids and hair accessories"
    },
    {
      image: kidsStyling4,
      alt: "Professional hair styling for special occasions"
    },
    {
      image: babyFirst1,
      alt: "Toddler's first haircut milestone moment"
    },
    {
      image: babyFirst2,
      alt: "Baby enjoying their first salon experience"
    },
    {
      image: babyFirst3,
      alt: "Happy toddler getting first professional haircut"
    },
    {
      image: babyFirst4,
      alt: "Gentle first haircut service for young children"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/25">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-6">
              <Link href="/">
                <Button variant="outline" className="gap-2 mb-6" data-testid="button-back-home">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Home
                </Button>
              </Link>
              
              <div className="animate-bounce-slow text-sm text-foreground tracking-wider uppercase">
                Full Gallery
              </div>
              <h1 className="text-3xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                See All Our Happy Moments
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Browse through our complete collection of happy kids, beautiful transformations, and memorable moments at The Yellow Balloon
              </p>
            </div>
          </div>
        </section>

        {/* Full Gallery Grid */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
              {allGalleryItems.map((item, index) => (
                <Card key={index} className="overflow-hidden hover-elevate transition-all duration-300 group" data-testid={`card-full-gallery-${index}`}>
                  <div className="relative">
                    <div className="overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-primary/20 to-accent/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Ready to Create Your Own Happy Moment?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Book your appointment today and let us create a beautiful, memorable experience for your child
            </p>
            <Button
              size="lg"
              className="gap-2 text-lg px-8 py-3"
              onClick={() => {
                console.log("Book appointment clicked from full gallery");
                window.open("tel:3015696756", "_self");
              }}
              data-testid="button-book-appointment"
            >
              Book Appointment
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}