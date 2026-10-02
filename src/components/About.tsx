import { useEffect, useRef } from 'react';
import { Heart, Code, Palette, Coffee } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import iceCreamFloat1 from '@/assets/ice-cream-float-1.png';

const skills = [
  { name: "FUllstack Web Development", icon: Code, color: "bg-ice-cream-strawberry" },
  { name: "Fullstack Android Development", icon: Palette, color: "bg-ice-cream-vanilla" },
  { name: "Internet of Things", icon: Heart, color: "bg-ice-cream-mint" },
  { name: "Machine Learning", icon: Coffee, color: "bg-ice-cream-lavender" }
];

const About = () => {
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const progressBar = entry.target.querySelector('.skill-progress') as HTMLElement;
          if (progressBar) {
            const targetWidth = progressBar.getAttribute('data-width');
            progressBar.style.width = targetWidth || '0%';
          }
        }
      });
    }, { threshold: 0.5 });

    skillRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-mint">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h2 className="text-5xl font-bold text-foreground">
                About <span className="bg-gradient-strawberry bg-clip-text text-transparent">Me</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Hi there! I'm a passionate developer who believes that code should be as delightful as 
                a perfectly crafted ice cream sundae. With a sweet tooth for clean code and beautiful 
                design, I create digital experiences that bring joy to users.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new ice cream flavors, sketching pastel 
                designs, or learning the latest web technologies. I believe that the best projects come 
                from a combination of technical excellence and creative passion.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-soft hover:shadow-dreamy transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">3+</div>
                  <div className="text-sm text-muted-foreground">Years of Sweet Code</div>
                </CardContent>
              </Card>
              <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-soft hover:shadow-dreamy transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Delightful Projects</div>
                </CardContent>
              </Card>
              <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-soft hover:shadow-dreamy transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">∞</div>
                  <div className="text-sm text-muted-foreground">Cups of Coffee</div>
                </CardContent>
              </Card>
              <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-soft hover:shadow-dreamy transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Passion & Love</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Content - Skills */}
          <div className="space-y-8 animate-slide-in-right">
            <div className="relative">
              <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
                Sweet Skills & Flavors
              </h3>
              
              <div className="space-y-6">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div 
                      key={skill.name}
                      ref={el => skillRefs.current[index] = el}
                      className="group"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-full ${skill.color}`}>
                            <Icon className="h-5 w-5 text-white" />
                          </div>
                          <span className="font-medium text-foreground">{skill.name}</span>
                        </div>
                      </div>
                      <div className="w-full bg-white/40 rounded-full h-3 overflow-hidden">
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Decorative Ice Cream */}
              <div className="absolute -top-16 -right-8 w-32 h-32 opacity-30 float-animation">
                <img src={iceCreamFloat1} alt="Decorative ice cream" className="w-full h-full object-contain" />
              </div>
            </div>

            <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-soft p-6">
              <h4 className="text-xl font-bold text-foreground mb-4">My Sweet Philosophy</h4>
              <blockquote className="text-muted-foreground italic text-center">
                "Code is like ice cream - it should be crafted with care, served with love, 
                and enjoyed by everyone who tastes it. 🍦"
              </blockquote>
            </Card>
          </div>
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
      <div className="floating-melt" style={{ top: '30%', left: '5%', animationDelay: '2s' }}></div>
      <div className="floating-melt" style={{ bottom: '20%', right: '20%', animationDelay: '4s' }}></div>
    </section>
  );
};

export default About;