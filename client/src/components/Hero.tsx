import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";
import { useState, useEffect } from "react";
// Import all gallery images
import firstHaircut1 from "@assets/stock_images/child_getting_first__d4068372.jpg";
import firstHaircut2 from "@assets/stock_images/child_getting_first__42abb267.jpg";
import glamourParty1 from "@assets/stock_images/little_girl_glamour__82803a0f.jpg";
import glamourParty2 from "@assets/stock_images/little_girl_glamour__3060d1ca.jpg";
import boyHaircut1 from "@assets/stock_images/boy_getting_haircut__b92accf7.jpg";
import boyHaircut2 from "@assets/stock_images/boy_getting_haircut__940de3e3.jpg";
import hairStyling1 from "@assets/stock_images/children_hair_braidi_4ff249c2.jpg";
import hairStyling2 from "@assets/stock_images/children_hair_braidi_dec31d64.jpg";
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

export default function Hero() {
  const galleryImages = [
    { src: firstHaircut1, alt: "Child getting their first haircut with a big smile" },
    { src: boyHaircut1, alt: "Young boy getting a professional haircut" },
    { src: glamourParty1, alt: "Girl enjoying glamour party styling session" },
    { src: hairStyling1, alt: "Children getting special hair braiding and styling" },
    { src: firstHaircut2, alt: "Another happy child during their first haircut experience" },
    { src: boyHaircut2, alt: "Boy receiving professional haircut service" },
    { src: glamourParty2, alt: "Girl getting glamour party makeup and hair styling" },
    { src: hairStyling2, alt: "Creative hair braiding and styling for children" },
    { src: happyHaircut1, alt: "Happy children enjoying their haircut experience" },
    { src: happyHaircut2, alt: "Salon transformation showing before and after results" },
    { src: happyHaircut3, alt: "Children excited about their new hairstyles" },
    { src: happyHaircut4, alt: "Professional haircut service for young clients" },
    { src: kidsStyling1, alt: "Fun hair styling and braiding session" },
    { src: kidsStyling2, alt: "Creative ponytails and styling for kids" },
    { src: kidsStyling3, alt: "Stylish braids and hair accessories" },
    { src: kidsStyling4, alt: "Professional hair styling for special occasions" },
    { src: babyFirst1, alt: "Toddler's first haircut milestone moment" },
    { src: babyFirst2, alt: "Baby enjoying their first salon experience" },
    { src: babyFirst3, alt: "Happy toddler getting first professional haircut" },
    { src: babyFirst4, alt: "Gentle first haircut service for young children" }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [galleryImages.length]);

  return (
    <section id="home" className="bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/25 py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-50" />
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/30 rounded-full blur-3xl" />
      <div className="relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="animate-bounce-slow text-sm text-foreground tracking-wider uppercase text-center lg:text-left">
              Kids Hair Salon
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-black text-foreground leading-tight">
                Where every haircut ends with a smile, a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">balloon</span>, and a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">lollipop</span>!
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Serving Gaithersburg, Darnestown, Potomac, Germantown & surrounding Montgomery County for over 20 years.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="gap-2 text-lg px-4 py-3"
                onClick={() => {
                  console.log("Book appointment clicked");
                  window.open("tel:3015696756", "_self");
                }}
                data-testid="button-book-appointment"
              >
                <Phone className="w-5 h-5" />
                Book Appointment
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 text-lg px-4 py-3"
                onClick={() => {
                  console.log("View gallery clicked");
                  document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
                }}
                data-testid="button-view-gallery"
              >
                View Gallery
              </Button>
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
                    src={galleryImages[currentImageIndex].src}
                    alt={galleryImages[currentImageIndex].alt}
                    className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
                    data-testid="img-hero"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </div>
            {/* Image indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {galleryImages.map((_, index) => (
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
  );
}