import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern, scalable e-commerce solution built with React, Node.js, and GraphQL. Features real-time inventory management, AI-powered recommendations, and seamless payment integration.',
    tech: ['React', 'Node.js', 'GraphQL', 'PostgreSQL', 'Stripe'],
    image: '/placeholder.svg',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 2,
    title: 'Creative Portfolio CMS',
    description: 'A headless CMS designed specifically for creative professionals. Built with Next.js and Sanity, featuring drag-and-drop portfolio building and advanced SEO optimization.',
    tech: ['Next.js', 'Sanity', 'TypeScript', 'Tailwind CSS'],
    image: '/placeholder.svg',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 3,
    title: 'Real-time Analytics Dashboard',
    description: 'A comprehensive analytics platform with real-time data visualization, custom reporting, and interactive charts. Built for enterprise-level data processing.',
    tech: ['Vue.js', 'D3.js', 'WebSockets', 'MongoDB', 'AWS'],
    image: '/placeholder.svg',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: 4,
    title: 'AI-Powered Design Tool',
    description: 'An innovative design application that uses machine learning to assist with layout generation, color palette suggestions, and automated design optimization.',
    tech: ['React', 'TensorFlow.js', 'Canvas API', 'Python', 'FastAPI'],
    image: '/placeholder.svg',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
];

export const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
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
    <section id="projects" ref={sectionRef} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'fade-in-up' : ''}`}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 glitch gradient-text" data-text="Featured Projects">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my latest work, demonstrating expertise in modern web development, 
            creative problem-solving, and innovative design solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-card rounded-2xl overflow-hidden shadow-soft hover-lift transition-all duration-1000 ${
                isVisible ? 'fade-in-up' : ''
              } ${project.featured ? 'lg:col-span-2' : ''}`}
              style={{ animationDelay: `${300 + index * 200}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project image */}
              <div className="relative h-64 md:h-80 overflow-hidden bg-gradient-card">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="flex gap-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-background/90 hover:bg-background text-foreground border-background"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-background/90 hover:bg-background text-foreground border-background"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Source
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project content */}
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display text-2xl md:text-3xl font-semibold text-primary">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-medium rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button
                    className="bg-primary hover:bg-primary-light text-primary-foreground"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </a>
                  </Button>
                </div>
              </div>

              {/* Hover glow effect */}
              {hoveredProject === project.id && (
                <div className="absolute inset-0 bg-gradient-glow opacity-30 pointer-events-none" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};