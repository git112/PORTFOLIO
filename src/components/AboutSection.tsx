import React, { useEffect, useRef, useState } from 'react';

export const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'fade-in-left' : ''}`}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-8 glitch gradient-text" data-text="About Me">
              About Me
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              
              <p>
              I don’t just write code — I engineer experiences. Some days I’m training a machine to understand the world, other days I’m building web apps that scale without breaking a sweat. Either way, I believe technology should be smart, elegant, and fun to use.


              </p>
              <p>
              I thrive at the sweet spot where data meets design and algorithms meet user experience. My projects blend AI/ML, full-stack development, and creative problem-solving, because the best solutions aren’t just functional — they’re delightful.


              </p>
              <p>
                When I'm not coding, you'll find me exploring new design trends, 
                contributing to open-source projects, or sharing knowledge with the 
                developer community. I believe in continuous learning and staying ahead 
                of the curve in this ever-evolving field. And yes, my code runs on coffee, curiosity, and a refusal to settle for “good enough.”
              </p>
            </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'fade-in-right' : ''}`}>
            <div className="relative">
              <div className="bg-gradient-card rounded-2xl p-8 shadow-soft hover-lift">
                <h3 className="font-display text-2xl font-semibold text-primary mb-6">
                  What Drives Me
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-foreground">Creating meaningful user experiences</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-foreground">Writing clean, maintainable code</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Pushing creative boundaries</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-foreground">Delivering exceptional results</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent/30 rounded-full blur-sm"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary/20 rounded-lg blur-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};