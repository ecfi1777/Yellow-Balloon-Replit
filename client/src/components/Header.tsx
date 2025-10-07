import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "About", href: "/#about" },
    { name: "Gallery", href: "/#gallery" },
    { name: "Reviews", href: "/#reviews" },
    { name: "Contact", href: "/#contact" },
  ];

  const serviceItems = [
    { name: "Haircuts", href: "/#services" },
    { name: "Glamour Parties", href: "/glamour-parties" },
    { name: "Lice Screening & Treatment", href: "/lice-treatment" },
  ];

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a 
          href="/" 
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          data-testid="logo-home-link"
        >
          <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
            <img 
              src="/assets/yellow_balloon.png" 
              alt="Yellow Balloon Logo" 
              className="w-full h-full object-contain scale-110"
            />
          </div>
          <div className="font-bold text-xl text-foreground">The Yellow Balloon</div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a
            href={navItems[0].href}
            className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            data-testid="nav-about"
          >
            {navItems[0].name}
          </a>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors font-medium" data-testid="nav-services">
              Services
              <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {serviceItems.map((service) => (
                <DropdownMenuItem key={service.name} asChild>
                  <a
                    href={service.href}
                    className="w-full cursor-pointer"
                    data-testid={`nav-service-${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {service.name}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <a
            href="/#pricing"
            className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            data-testid="nav-pricing"
          >
            Pricing
          </a>

          {navItems.slice(1).map((item) => (
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
            <a
              href="/#about"
              className="block text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
              data-testid="nav-mobile-about"
            >
              About
            </a>
            
            <div className="space-y-2">
              <div className="text-muted-foreground font-medium py-2">Services</div>
              <div className="pl-4 space-y-2">
                {serviceItems.map((service) => (
                  <a
                    key={service.name}
                    href={service.href}
                    className="block text-muted-foreground hover:text-foreground transition-colors py-1"
                    onClick={() => setIsMenuOpen(false)}
                    data-testid={`nav-mobile-service-${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {service.name}
                  </a>
                ))}
              </div>
            </div>

            <a
              href="/#pricing"
              className="block text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
              data-testid="nav-mobile-pricing"
            >
              Pricing
            </a>

            {navItems.slice(1).map((item) => (
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