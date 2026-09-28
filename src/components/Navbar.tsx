import { useState, useEffect } from 'react';
import { Github, Instagram, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("welcome")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </button>

            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </button>

            <button
              onClick={() => scrollToSection("projects")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Software
            </button>

            <button
              onClick={() => scrollToSection("projects")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Hardware
            </button>

            <button
              onClick={() => scrollToSection("games")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Games
            </button>
          </div>

          <div className="flex items-center space-x-4">

            <Button
            variant='ghost'
            className='rounded-full hover:bg-primary/10'
            asChild>
              <a href='https://instagram.com/chacasta_staria' target='blank'>
              <Instagram className='text-primary'/>
              </a>
            </Button>




            <Button
              variant="ghost"
              size="icon"
              className='rounded-full hover:bg-primary/10'
              asChild>
                <a href='https://github.com/xiadraion' target='blank'>
                <Github className='h-10 w-10 text-primary'/>
                </a>
              </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full hover:bg-primary/10"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-primary" />
              ) : (
                <Moon className="h-5 w-5 text-primary" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;