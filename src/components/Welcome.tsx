import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import heroImage from '@/assets/hero-ice-cream.png';
import iceCreamFloat1 from '@/assets/ice-cream-float-1.png';
import iceCreamFloat2 from '@/assets/ice-cream-float-2.png';

const Welcome = () => {
  const floatingRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Add staggered animation delays to floating elements
    floatingRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.style.animationDelay = `${index * 1.5}s`;
      }
    });
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="welcome"
      className="section-strawberry relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <p
                className="text-lg font-medium text-muted-foreground animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Welcome to my sweet world! 🍦
              </p>
              <h1
                className="text-6xl lg:text-7xl font-bold text-foreground leading-tight animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                Adinda
                <span className="block bg-gradient-vanilla bg-clip-text text-transparent drip-effect">
                  Salsabila's
                </span>
                <span className="block text-primary">Portfolio</span>
              </h1>
              <p
                className="text-xl text-muted-foreground max-w-lg animate-fade-in-up"
                style={{ animationDelay: "0.6s" }}
              >
                Crafting delightful digital experiences with a sprinkle of
                creativity and a whole lot of passion!
              </p>
            </div>

            <div
              className="flex flex-col sm:flex-row gah-4 animate-fade-in-up"
              style={{ animationDelay: "0.8s" }}
            >
              <Button
                onClick={scrollToProjects}
                className="btn-vanilla text-lg px-8 py-4"
              >
                View My Work
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="text-lg px-8 py-4 border-2 border-foreground/20 hover:border-primary hover:bg-primary/10"
              >
                Get In Touch
              </Button>
            </div>

            <div
              className="flex items-center space-x-6 animate-fade-in-up"
              style={{ animationDelay: "1s" }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">20+</div>
                <div className="text-sm text-muted-foreground">
                  Sweet Projects
                </div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">
                  Sweet Satisfaction
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative rounded-3xl overflow-hidden shadow-float">
              <img
                src={heroImage}
                alt="Ice cream themed hero image"
                className="w-max-80 h-max-90 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Ice Cream Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          ref={(el) => (floatingRefs.current[0] = el)}
          className="absolute top-20 left-10 w-24 h-24 float-animation opacity-60"
        >
          <img
            src={iceCreamFloat1}
            alt="Floating ice cream"
            className="w-full h-full object-contain"
          />
        </div>
        <div
          ref={(el) => (floatingRefs.current[1] = el)}
          className="absolute top-40 right-20 w-20 h-20 float-animation opacity-50"
        >
          <img
            src={iceCreamFloat2}
            alt="Floating ice cream"
            className="w-full h-full object-contain"
          />
        </div>
        <div
          ref={(el) => (floatingRefs.current[2] = el)}
          className="absolute bottom-32 left-20 w-16 h-16 float-animation opacity-40"
        >
          <div className="w-full h-full bg-ice-cream-vanilla rounded-full animate-bounce-gentle"></div>
        </div>
        <div
          ref={(el) => (floatingRefs.current[3] = el)}
          className="absolute bottom-20 right-10 w-12 h-12 float-animation opacity-30"
        >
          <div className="w-full h-full bg-ice-cream-lavender rounded-full animate-bounce-gentle"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <div className="flex flex-col items-center space-y-2 text-muted-foreground">
          <span className="text-sm font-medium">Scroll to explore</span>
          <ArrowDown className="h-5 w-5" />
        </div>
      </div>

      {/* Ice Cream Melt Effect */}
      <div className="melt-overlay"></div>
      <div className="melt-drops">
        <div className="melt-drop"></div>
        <div className="melt-drop"></div>
        <div className="melt-drop"></div>
        <div className="melt-drop"></div>
      </div>

      {/* Floating Melt Elements */}
      <div
        className="floating-melt"
        style={{ top: "15%", left: "10%", animationDelay: "0s" }}
      ></div>
      <div
        className="floating-melt"
        style={{ top: "25%", right: "15%", animationDelay: "2s" }}
      ></div>
      <div
        className="floating-melt"
        style={{ bottom: "30%", left: "20%", animationDelay: "4s" }}
      ></div>
    </section>
  );
};

export default Welcome;