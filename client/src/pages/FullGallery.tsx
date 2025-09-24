import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Import all authentic salon gallery images
import firstHaircut1 from "@assets/generated_images/First_haircut_salon_photo_93504202.png";
import boyHaircut1 from "@assets/generated_images/Boy_haircut_salon_photo_f149f7c7.png";
import glamourParty1 from "@assets/generated_images/Glamour_party_styling_photo_1558caf6.png";
import hairStyling1 from "@assets/generated_images/Hair_braiding_salon_photo_81cddccf.png";
import firstHaircut2 from "@assets/generated_images/Toddler_first_haircut_photo_84ad34eb.png";
import boyHaircut2 from "@assets/generated_images/School_boy_haircut_photo_358e2981.png";
import glamourParty2 from "@assets/generated_images/Special_occasion_styling_photo_50692872.png";
import hairStyling2 from "@assets/generated_images/Group_glamour_party_photo_fc0c14de.png";

// Additional authentic salon photos
import happyHaircut1 from "@assets/generated_images/Happy_children_haircut_results_7e382cdb.png";
import happyHaircut2 from "@assets/generated_images/Before_after_haircut_transformation_71c71ae0.png";
import happyHaircut3 from "@assets/generated_images/Excited_kids_new_hairstyles_e26ee95e.png";
import happyHaircut4 from "@assets/generated_images/Professional_haircut_service_kids_5811798d.png";
import kidsStyling1 from "@assets/generated_images/Fun_styling_braiding_session_8ee3aae6.png";
import kidsStyling2 from "@assets/generated_images/Creative_ponytails_styling_kids_be3c5733.png";
import kidsStyling3 from "@assets/generated_images/Stylish_braids_hair_accessories_d6e2089c.png";
import kidsStyling4 from "@assets/generated_images/Special_occasion_hair_styling_5e630398.png";
import babyFirst1 from "@assets/generated_images/Toddler_first_haircut_milestone_e5fcc8a3.png";
import babyFirst2 from "@assets/generated_images/Baby_first_salon_experience_b6db0a21.png";
import babyFirst3 from "@assets/generated_images/Happy_toddler_first_haircut_0364c47d.png";
import babyFirst4 from "@assets/generated_images/Gentle_first_haircut_service_72d2845c.png";

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
    // Main gallery images from home page
    {
      image: firstHaircut1,
      alt: "Child getting their first haircut at The Yellow Balloon salon with professional stylist"
    },
    {
      image: boyHaircut1,
      alt: "Young boy watching cartoons while getting a professional haircut at The Yellow Balloon"
    },
    {
      image: glamourParty1,
      alt: "Girl enjoying glamour party makeover with updo styling and nail polish at salon"
    },
    {
      image: hairStyling1,
      alt: "Professional hair braiding and styling service at The Yellow Balloon kids salon"
    },
    {
      image: firstHaircut2,
      alt: "Toddler's milestone first haircut with gentle, patient stylist at The Yellow Balloon"
    },
    {
      image: boyHaircut2,
      alt: "School-age boy receiving professional haircut while playing with educational toys"
    },
    {
      image: glamourParty2,
      alt: "Special occasion hair styling with elaborate updo and accessories at salon"
    },
    {
      image: hairStyling2,
      alt: "Group glamour party with multiple children getting styling services together"
    },
    // Additional authentic salon photos
    {
      image: happyHaircut1,
      alt: "Happy children showing off their fresh haircuts with big smiles at The Yellow Balloon"
    },
    {
      image: happyHaircut2,
      alt: "Before and after transformation showing dramatic hair styling improvement at salon"
    },
    {
      image: happyHaircut3,
      alt: "Children excited about their new hairstyles and admiring results in salon mirrors"
    },
    {
      image: happyHaircut4,
      alt: "Professional haircut service with expert stylist and child-friendly atmosphere"
    },
    {
      image: kidsStyling1,
      alt: "Fun hair styling and braiding session with professional stylist at kids salon"
    },
    {
      image: kidsStyling2,
      alt: "Creative ponytails and styling with decorative accessories for young girls"
    },
    {
      image: kidsStyling3,
      alt: "Stylish braids and colorful hair accessories at The Yellow Balloon salon"
    },
    {
      image: kidsStyling4,
      alt: "Professional special occasion hair styling with formal updo and accessories"
    },
    {
      image: babyFirst1,
      alt: "Toddler's first haircut milestone moment with parents watching at salon"
    },
    {
      image: babyFirst2,
      alt: "Baby's first salon experience with gentle introduction and toys"
    },
    {
      image: babyFirst3,
      alt: "Happy toddler enjoying their first professional haircut experience"
    },
    {
      image: babyFirst4,
      alt: "Gentle first haircut service with patient, caring stylist for young children"
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
                <Card key={index} className="overflow-hidden hover:scale-105 transition-all duration-300 group" data-testid={`card-full-gallery-${index}`}>
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