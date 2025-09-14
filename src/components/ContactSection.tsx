import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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
    <section id="contact" ref={sectionRef} className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'fade-in-up' : ''}`}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 glitch gradient-text" data-text="Let's Connect">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate? Let's discuss your next project.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Contact info */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'fade-in-up' : ''}`}>
            <div className="space-y-6">

              {/* Contact methods */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-soft hover-lift">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <a href="mailto:naseta121@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      naseta121@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-soft hover-lift">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <a href="tel:+91 8780986398" className="text-muted-foreground hover:text-primary transition-colors">
                      +91 8780986398
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-soft hover-lift">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Location</h4>
                    <span className="text-muted-foreground">Gujarat, India</span>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/git112"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-card rounded-lg border border-border hover-glow flex items-center justify-center transition-all duration-300"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-6 h-6 text-foreground" />
                  </a>
                  <a
                    href="https://linkedin.com/in/naseta-d"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-card rounded-lg border border-border hover-glow flex items-center justify-center transition-all duration-300"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-6 h-6 text-foreground" />
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};