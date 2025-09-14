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
              I don’t just write code — I craft smart, beautiful, and human-centered experiences. Some days I’m teaching machines how to think, other days I’m building web apps that scale with ease. Either way, I believe technology should feel effortless, intelligent, and a little magical.



              </p>
              <p>
              
I love working at the crossroads of AI/ML, design, and full-stack development — where data meets creativity and algorithms meet user delight. Curiosity keeps me learning, coffee keeps me coding, and “good enough” is never good enough.
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
                    <span className="text-foreground">Turning messy data into meaningful insights 🤖




</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-foreground">
                    Writing code my future self will actually thank me for 💻</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Designing products people don’t just use — they love ✨</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-foreground">Pushing boundaries and shipping ideas that matter 🚀</span>
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