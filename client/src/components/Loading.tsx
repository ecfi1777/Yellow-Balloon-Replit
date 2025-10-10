export function Loading() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-primary/20 via-accent/15 to-secondary/20">
      <div className="text-center">
        {/* Animated Yellow Balloon */}
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-2xl animate-bounce">
              <img 
                src="/assets/yellow_balloon.png" 
                alt="Loading" 
                className="w-20 h-20 object-contain"
              />
            </div>
            {/* String for balloon */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-muted-foreground/40"></div>
          </div>
        </div>

        {/* Loading Text */}
        <p className="text-lg font-medium text-muted-foreground animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="relative">
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg animate-bounce">
          <img 
            src="/assets/yellow_balloon.png" 
            alt="Loading" 
            className="w-12 h-12 object-contain"
          />
        </div>
        {/* String for balloon */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-muted-foreground/40"></div>
      </div>
    </div>
  );
}
