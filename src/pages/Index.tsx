import React from 'react';
import { Navigation } from '@/components/Navigation';
import { ParticleSystem } from '@/components/ParticleSystem';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { QuoteSection } from '@/components/QuoteSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      {/* Navigation */}
      <Navigation />
      
      {/* Particle System Background */}
      <ParticleSystem />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="home">
          <HeroSection />
        </section>
        
        {/* About Section */}
        <AboutSection />
        
        {/* Skills Section */}
        <SkillsSection />
        
        {/* Projects Section */}
        <ProjectsSection />
        
        {/* Quote Section */}
        <QuoteSection />
        
        {/* Experience Section */}
        <ExperienceSection />
        
        {/* Contact Section */}
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
