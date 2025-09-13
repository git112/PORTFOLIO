import React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-2">Portfolio</h3>
            <p className="text-primary-foreground/80">
              Crafting exceptional digital experiences with passion and precision.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-center">
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 flex items-center justify-center transition-colors duration-300"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 flex items-center justify-center transition-colors duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 flex items-center justify-center transition-colors duration-300"
                aria-label="Twitter Profile"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-primary-foreground/80 flex items-center justify-center md:justify-end gap-1">
              © {currentYear} Made with{' '}
              <Heart className="w-4 h-4 text-accent fill-current" />
              by Portfolio
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/60 text-sm">
            This portfolio showcases modern web development practices and creative design solutions.
          </p>
        </div>
      </div>
    </footer>
  );
};