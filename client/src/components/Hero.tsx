import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import heroImage from "@assets/generated_images/Happy_child_salon_haircut_f1c818df.png";
import salonInterior from "@assets/generated_images/Modern_salon_interior_50f75e1e.png";
import beforeAfter from "@assets/generated_images/Before_after_hair_transformation_79ac8226.png";
import teamPhoto from "@assets/generated_images/Salon_team_photo_c49ae9ec.png";

export default function Hero() {
  // todo: remove mock functionality - Only using same aspect ratio images
  const galleryImages = [
    { src: heroImage, alt: "Happy child getting a haircut at The Yellow Balloon" },
    { src: salonInterior, alt: "Modern, colorful salon interior with TVs and toys" }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000); // Change image every 4 seconds

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
                className="gap-2 text-lg px-8 py-6"
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
                className="gap-2 text-lg px-8 py-6"
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