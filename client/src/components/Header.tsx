import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <span className="text-2xl">🎈</span>
          </div>
          <div className="font-bold text-xl text-foreground">The Yellow Balloon</div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              data-testid={`nav-${item.name.toLowerCase()}`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Call Button */}
        <div className="hidden md:block">
          <Button
            className="gap-2"
            onClick={() => {
              console.log("Call button clicked");
              window.open("tel:3015696756", "_self");
            }}
            data-testid="button-call"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          data-testid="button-menu-toggle"
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container mx-auto px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
                data-testid={`nav-mobile-${item.name.toLowerCase()}`}
              >
                {item.name}
              </a>
            ))}
            <Button
              className="w-full gap-2 mt-4"
              onClick={() => {
                console.log("Mobile call button clicked");
                window.open("tel:3015696756", "_self");
                setIsMenuOpen(false);
              }}
              data-testid="button-call-mobile"
            >
              <Phone className="w-4 h-4" />
              Call (301) 569-6756
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}