import React, { useEffect, useRef, useState } from 'react';

const experiences = [
  {
    id: 1,
    type: 'Experience',
    title: 'Senior Full-Stack Developer',
    company: 'TechCorp Solutions',
    period: '2022 - Present',
    description: 'Leading development of enterprise-scale web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting scalable solutions.',
    achievements: [
      'Increased application performance by 40%',
      'Led team of 5 developers',
      'Implemented CI/CD pipelines',
    ],
  },
  {
    id: 2,
    type: 'Experience',
    title: 'Frontend Developer',
    company: 'Creative Digital Agency',
    period: '2020 - 2022',
    description: 'Developed responsive web applications and interactive experiences for high-profile clients. Specialized in React, TypeScript, and modern CSS frameworks.',
    achievements: [
      'Delivered 20+ client projects',
      'Improved mobile performance by 60%',
      'Established design system standards',
    ],
  },
  {
    id: 3,
    type: 'Education',
    title: 'Master of Computer Science',
    company: 'University of Technology',
    period: '2018 - 2020',
    description: 'Specialized in Software Engineering and Human-Computer Interaction. Graduated with honors, focusing on modern web technologies and user experience design.',
    achievements: [
      'Graduated Magna Cum Laude',
      'Published research on web accessibility',
      'Led student developer community',
    ],
  },
  {
    id: 4,
    type: 'Experience',
    title: 'Junior Web Developer',
    company: 'StartupHub Inc.',
    period: '2018 - 2020',
    description: 'First professional role developing web applications using JavaScript, React, and various backend technologies. Gained experience in agile development practices.',
    achievements: [
      'Built 5 production applications',
      'Learned full-stack development',
      'Collaborated with cross-functional teams',
    ],
  },
];

export const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<Record<number, boolean>>({});
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate items with stagger
          experiences.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems(prev => ({ ...prev, [index]: true }));
            }, index * 200);
          });
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
    <section id="experience" ref={sectionRef} className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'fade-in-up' : ''}`}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 glitch gradient-text" data-text="Experience & Education">
            Experience & Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey of continuous learning, growth, and professional development 
            in the ever-evolving world of technology and design.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent"></div>

          <div className="space-y-16">
            {experiences.map((item, index) => (
              <div
                key={item.id}
                className={`relative flex flex-col md:flex-row items-start md:items-center transition-all duration-1000 ${
                  visibleItems[index] ? 'fade-in-up' : ''
                } ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-medium z-10"></div>

                {/* Content card */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'}`}>
                  <div className="bg-card rounded-xl p-6 md:p-8 shadow-soft hover-lift">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                        item.type === 'Experience' 
                          ? 'bg-primary/10 text-primary' 
                          : 'bg-accent/10 text-accent'
                      }`}>
                        {item.type}
                      </span>
                      <span className="text-sm text-muted-foreground font-medium">
                        {item.period}
                      </span>
                    </div>

                    <h3 className="font-display text-xl md:text-2xl font-semibold text-primary mb-2">
                      {item.title}
                    </h3>
                    
                    <h4 className="text-lg font-medium text-secondary mb-4">
                      {item.company}
                    </h4>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {item.description}
                    </p>

                    <div className="space-y-2">
                      <h5 className="font-semibold text-foreground mb-3">Key Achievements:</h5>
                      {item.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                          <span className="text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};