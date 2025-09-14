import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Placementor AI – Student Placement Companion',
    description: 'An AI-driven platform built for the IT Department to provide placement support and personalized career guidance. Features smart chatbot for placement queries, alumni interview experiences, skill-gap recommendations, and visual placement dashboards with year-wise stats.',
    tech: ['React.js', 'Node.js', 'Python (NLP/ML)', 'PostgreSQL', 'Tailwind CSS'],
    image: '/1.png',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'AI-Powered Career Guidance Platform',
    description: 'A web platform that recommends career paths and skills using personalized AI suggestions. Includes Resume Builder, Job Matching, Skill Gap Detection, and Career Visualization modules.',
    tech: ['React.js', 'Node.js', 'Gemini API', 'Tailwind CSS', 'MongoDB'],
    image: '/2.png',
    liveUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: 3,
    title: 'Resume Refiner AI – ATS Optimizer',
    description: 'An AI-based resume analysis tool that evaluates resumes against job descriptions and suggests improvements. Features ATS scoring, JD matching, skill suggestions, and AI-powered improvement feedback.',
    tech: ['React.js', 'Flask', 'Groq API', 'MongoDB'],
    image: '/3.png',
    liveUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: 4,
    title: 'DocuGenie – Intelligent Document Assistant',
    description: 'An AI-powered assistant that classifies, analyzes, and explains complex documents in simple language. Features clause classification, risk analysis with explainable AI, semantic search, and instant summaries with improvement suggestions.',
    tech: ['Python', 'NLP (Transformers, BERT/GPT)', 'React.js', 'Flask'],
    image: '/4.png',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 5,
    title: 'EcoPulse – Carbon Footprint Tracker',
    description: 'A mobile app that monitors carbon emissions and recommends eco-friendly lifestyle changes. Features visual dashboards to track and reduce footprint trends.',
    tech: ['Flutter', 'Dart', 'Firebase'],
    image: '/5.jpg',
    liveUrl: 'https://github.com',
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

        <div className="space-y-8">
          {/* Top Row - 2 Projects */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.filter(project => project.id === 1 || project.id === 2).map((project, index) => (
              <div
                key={project.id}
                className={`group relative bg-card rounded-2xl overflow-hidden shadow-soft hover-lift transition-all duration-1000 flex flex-col ${
                  isVisible ? 'fade-in-up' : ''
                }`}
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
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display text-2xl md:text-3xl font-semibold text-primary">
                    {project.title}
                  </h3>
                </div>

                <p className="text-muted-foreground text-lg leading-relaxed mb-6 flex-grow">
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

                <div className="flex gap-4 mt-auto">
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

          {/* Bottom Row - 3 Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(project => project.id === 3 || project.id === 4 || project.id === 5).map((project, index) => (
              <div
                key={project.id}
                className={`group relative bg-card rounded-2xl overflow-hidden shadow-soft hover-lift transition-all duration-1000 flex flex-col ${
                  isVisible ? 'fade-in-up' : ''
                }`}
                style={{ animationDelay: `${700 + index * 200}ms` }}
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
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-primary">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground text-base leading-relaxed mb-6 flex-grow">
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

                  <div className="flex gap-4 mt-auto">
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
      </div>
    </section>
  );
};