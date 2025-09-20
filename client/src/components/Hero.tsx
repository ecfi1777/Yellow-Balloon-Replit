import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";
import heroImage from "@assets/generated_images/Happy_child_salon_haircut_f1c818df.png";

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Where every haircut ends with a{" "}
                <span className="text-primary">smile</span>, a{" "}
                <span className="text-accent-foreground">balloon</span>, and a{" "}
                <span className="text-primary">lollipop!</span>
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
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Happy child getting a haircut at The Yellow Balloon"
                className="w-full h-auto object-cover"
                data-testid="img-hero"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <span className="text-3xl">🎈</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}