import { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Home, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-primary/20 via-accent/15 to-secondary/20">
          <div className="text-center px-4 max-w-2xl mx-auto">
            {/* Yellow Balloon Logo */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center shadow-2xl">
                  <img 
                    src="/assets/yellow_balloon.png" 
                    alt="Yellow Balloon Logo" 
                    className="w-24 h-24 object-contain"
                  />
                </div>
                {/* String for balloon */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-muted-foreground/40"></div>
              </div>
            </div>

            {/* Error Message */}
            <h1 className="text-5xl lg:text-6xl font-black mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
                Whoops!
              </span>
            </h1>
            <p className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Something unexpected happened
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
              Don't worry! Our team has been notified. Try refreshing the page or head back home.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="gap-2" 
                onClick={this.handleReload}
                data-testid="button-reload"
              >
                <RefreshCw className="w-5 h-5" />
                Refresh Page
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="gap-2"
                onClick={this.handleGoHome}
                data-testid="button-error-go-home"
              >
                <Home className="w-5 h-5" />
                Go Back Home
              </Button>
            </div>

            {/* Error Details (only in development) */}
            {import.meta.env.DEV && this.state.error && (
              <details className="mt-8 text-left">
                <summary className="cursor-pointer text-sm text-muted-foreground hover:text-foreground mb-2">
                  Error Details (Development Only)
                </summary>
                <pre className="bg-muted p-4 rounded-lg text-xs overflow-auto max-h-48">
                  <code>{this.state.error.toString()}</code>
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
