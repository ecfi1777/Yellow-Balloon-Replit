import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-secondary/40 to-accent/30 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center relative overflow-visible">
              <div className="w-4 h-4 bg-primary rounded-full border-2 border-foreground/80"></div>
              <svg className="absolute top-5 left-1/2 transform -translate-x-1/2" width="12" height="10" viewBox="0 0 12 10">
                <path 
                  d="M6 0 C6 1.5, 4.5 3, 3 4.5 C1.5 6, 4.5 7.5, 6 9" 
                  stroke="currentColor" 
                  strokeWidth="1.2" 
                  fill="none"
                  className="text-foreground/60"
                />
              </svg>
            </div>
            <span className="font-bold text-xl text-foreground">The Yellow Balloon</span>
          </div>
          
          <div className="space-y-2 text-muted-foreground">
            <p className="font-medium">255 Market Street West, Gaithersburg, MD 20878</p>
            <p>(301) 569-6756</p>
            <p>Tue-Fri: 10am-6pm | Sat-Sun: 10am-5pm | Mon & Thu: Closed</p>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>for families in Montgomery County</span>
          </div>

          <div className="border-t pt-6">
            <p className="text-sm text-muted-foreground">
              © 2025 The Yellow Balloon. All rights reserved. | Proudly serving families for over 20 years.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}