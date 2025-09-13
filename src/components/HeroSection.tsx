import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32">{/* Added top padding for navbar space */}
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-20" />
      
      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-8">{/* Added margin-top for better spacing */}
        <div className={`transition-all duration-1000 ${isVisible ? 'fade-in-up' : ''}`}>
          <h1 
            className="font-display text-6xl md:text-8xl lg:text-9xl font-bold mb-6 glitch gradient-text"
            data-text="Portfolio"
          >
            Naseta 
          </h1>
        </div>
        
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'fade-in-up' : ''}`}>
          <h2 className="font-body text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 font-light">
          Building Smarter, Scalable Technology
          </h2>
        </div>
        
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'fade-in-up' : ''}`}>
          <p className="font-body text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          From AI models to full-stack applications, I craft solutions that combine innovation, performance, and user-centric design.
          </p>
        </div>
        
        <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'fade-in-up' : ''}`}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-light text-primary-foreground px-8 py-4 text-lg font-medium hover-lift"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-medium hover-lift"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>
        </div>
        
        <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'fade-in-up' : ''}`}>
          <div className="flex justify-center gap-6 mb-16">
            <a 
              href="https://github.com/git112" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover-glow transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6 text-foreground" />
            </a>
            <a 
              href="https://linkedin.com/in/naseta-d" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover-glow transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6 text-foreground" />
            </a>
            <a 
              href="mailto:naseta121@gmail.com"
              className="p-3 rounded-full bg-card border border-border hover-glow transition-all duration-300"
              aria-label="Send Email"
            >
              <Mail className="w-6 h-6 text-foreground" />
            </a>
          </div>
        </div>
        
        <div className={`transition-all duration-1000 delay-1100 ${isVisible ? 'fade-in-up' : ''}`}>
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce p-2 rounded-full hover:bg-accent/20 transition-colors duration-300"
            aria-label="Scroll to About section"
          >
            <ArrowDown className="w-8 h-8 text-accent" />
          </button>
        </div>
      </div>
      
      {/* Floating geometric shapes - all circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-accent/20 rounded-full float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-3/4 right-1/4 w-12 h-12 bg-secondary/20 rounded-full float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-primary/20 rounded-full float" style={{ animationDelay: '4s' }} />
      </div>
    </section>
  );
};