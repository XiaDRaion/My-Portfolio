import { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import heroImage from '@/assets/hero.png';
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
    <section id="welcome">
      <section
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Centered Content */}
        <div className="relative z-10 container mx-auto px-6 text-center space-y-8 animate-fade-in-up">
          <p className="text-lg font-medium text-foreground">
            Welcome to my sweet world! 🍦
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Adinda Salsabila's
            <span className="block text-primary">Portfolio</span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/90">
            Carpe diem.<br></br> Live, Laugh, Love! 🌻
          </p>
        </div>
      </section>

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
      {/* <div className="melt-overlay"></div>
      <div className="melt-drops">
        <div className="melt-drop"></div>
        <div className="melt-drop"></div>
        <div className="melt-drop"></div>
        <div className="melt-drop"></div>
      </div> */}

      {/* Floating Melt Elements */}
      {/* <div
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
      ></div> */}
    </section>
  );
};

export default Welcome;