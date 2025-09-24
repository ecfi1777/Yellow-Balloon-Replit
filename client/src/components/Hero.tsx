import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";
import { useState, useEffect } from "react";
// Import all authentic salon gallery images
import firstHaircut1 from "@assets/generated_images/First_haircut_salon_photo_93504202.png";
import boyHaircut1 from "@assets/generated_images/Boy_haircut_salon_photo_f149f7c7.png";
import glamourParty1 from "@assets/generated_images/Glamour_party_styling_photo_1558caf6.png";
import hairStyling1 from "@assets/generated_images/Hair_braiding_salon_photo_81cddccf.png";
import firstHaircut2 from "@assets/generated_images/Toddler_first_haircut_photo_84ad34eb.png";
import boyHaircut2 from "@assets/generated_images/School_boy_haircut_photo_358e2981.png";
import glamourParty2 from "@assets/generated_images/Special_occasion_styling_photo_50692872.png";
import hairStyling2 from "@assets/generated_images/Group_glamour_party_photo_fc0c14de.png";
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

export default function Hero() {
  const galleryImages = [
    { src: firstHaircut1, alt: "Child getting their first haircut at The Yellow Balloon salon with professional stylist" },
    { src: boyHaircut1, alt: "Young boy watching cartoons while getting a professional haircut at The Yellow Balloon" },
    { src: glamourParty1, alt: "Girl enjoying glamour party makeover with updo styling and nail polish at salon" },
    { src: hairStyling1, alt: "Professional hair braiding and styling service at The Yellow Balloon kids salon" },
    { src: firstHaircut2, alt: "Toddler's milestone first haircut with gentle, patient stylist at The Yellow Balloon" },
    { src: boyHaircut2, alt: "School-age boy receiving professional haircut while playing with educational toys" },
    { src: glamourParty2, alt: "Special occasion hair styling with elaborate updo and accessories at salon" },
    { src: hairStyling2, alt: "Group glamour party with multiple children getting styling services together" },
    { src: happyHaircut1, alt: "Happy children showing off their fresh haircuts with big smiles at The Yellow Balloon" },
    { src: happyHaircut2, alt: "Before and after transformation showing dramatic hair styling improvement at salon" },
    { src: happyHaircut3, alt: "Children excited about their new hairstyles and admiring results in salon mirrors" },
    { src: happyHaircut4, alt: "Professional haircut service with expert stylist and child-friendly atmosphere" },
    { src: kidsStyling1, alt: "Fun hair styling and braiding session with professional stylist at kids salon" },
    { src: kidsStyling2, alt: "Creative ponytails and styling with decorative accessories for young girls" },
    { src: kidsStyling3, alt: "Stylish braids and colorful hair accessories at The Yellow Balloon salon" },
    { src: kidsStyling4, alt: "Professional special occasion hair styling with formal updo and accessories" },
    { src: babyFirst1, alt: "Toddler's first haircut milestone moment with parents watching at salon" },
    { src: babyFirst2, alt: "Baby's first salon experience with gentle introduction and toys" },
    { src: babyFirst3, alt: "Happy toddler enjoying their first professional haircut experience" },
    { src: babyFirst4, alt: "Gentle first haircut service with patient, caring stylist for young children" }
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