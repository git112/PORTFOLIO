import React, { useEffect, useRef, useState } from 'react';

export const QuoteSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
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
    <section ref={sectionRef} className="py-24 px-6 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-background/95" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'fade-in-up' : ''}`}>
          <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-primary leading-relaxed mb-8">
            "The best way to predict the future is to{' '}
            <span className="gradient-text">create it</span> with passion, 
            precision, and endless curiosity."
          </blockquote>
          
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          
          <p className="text-xl text-muted-foreground font-light">
            My philosophy on innovation and development
          </p>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-accent/30 rounded-full blur-sm"></div>
        <div className="absolute bottom-1/4 right-10 w-6 h-6 bg-primary/20 rounded-full blur-sm"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-secondary/40 rounded-full blur-sm"></div>
        <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-accent/25 rounded-full blur-sm"></div>
      </div>
    </section>
  );
};