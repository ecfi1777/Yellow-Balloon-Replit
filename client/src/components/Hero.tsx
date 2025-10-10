import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { mainGalleryImages } from "@/data/galleries";

export default function Hero() {
  const galleryImages = mainGalleryImages;

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
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 via-accent/15 to-secondary/10">
                <div className="w-full relative flex items-center justify-center min-h-[300px] max-h-[500px]">
                  <img
                    src={galleryImages[currentImageIndex].src}
                    alt={galleryImages[currentImageIndex].alt}
                    className="w-auto h-auto max-w-full max-h-[500px] object-contain transition-all duration-1000 ease-in-out"
                    data-testid="img-hero"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
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