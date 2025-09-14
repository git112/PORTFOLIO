import React, { useEffect, useRef, useState } from 'react';

const experiences = [
  {
    id: 1,
    type: 'Experience',
    title: 'Full-Stack Developer Intern',
    company: 'Gururo (Onsite)',
    period: 'May 2025 – June 2025',
    description: 'Developed & deployed two end-to-end AI-powered SaaS tools (JobNest & Resume Refiner AI). Designed modules like AI Job Matching, Global Salary Comparison, Skill Gap Analysis, and Resume Builder using Gemini APIs + ML pipelines.',
    achievements: [
      'Implemented ATS scoring, resume optimization & semantic similarity models for recruiters',
      'Built full-stack systems using React (Vite), Flask, Node.js, MongoDB with secure auth & dashboards',
      'Deployed production-ready apps on tools.gururo.com with Vercel',
    ],
  },
  {
    id: 2,
    type: 'Experience',
    title: 'Hackathon & Competitive Experience',
    company: 'Various Competitions',
    period: '2023 – 2025',
    description: 'Active participation in national and international hackathons, competitive programming, and open source contributions. Consistently ranked among top performers.',
    achievements: [
      
      'Shortlisted Top 10% nationwide in Flipkart GRiD 7.0 – SDE Track',
      'Contributed in GSSOC 2025, OSCI 2025',
      'Active contributor in Hacktoberfest 2024, ranked in top 10 contributors at university',
      'Semi-Finalist – Odoo Hackathon 2025 | Selected in internal hackathon – Smart India Hackathon 2024',  
      'Got nominated in Innotech Competition 2.0',
      'Participated in many hackathons and competitive programming',
    ],
  },
  {
    id: 3,
    type: 'Education',
    title: 'B.Tech – Information Technology',
    company: 'Charotar University of Science and Technology (CHARUSAT), CSPIT',
    period: 'May 2023 – Present',
    description: 'Pursuing Bachelor of Technology in Information Technology with focus on AI/ML, data structures, and modern software development practices.',
    achievements: [
      'GPA: 9.5/10.0',
      'Coursework: Data Structures, Machine Learning, Databases, Cloud Computing',
      'Active in AI/ML research, hackathons, and developer communities',
    ],
  },
  {
    id: 4,
    type: 'Education',
    title: 'High School',
    company: 'Convent of Jesus and Mary, Vadodara',
    period: 'June 2008 – April 2023',
    description: 'Completed high school education with strong foundation in Computer Science and Mathematics, laying the groundwork for technical excellence.',
    achievements: [
      'HSC: 86% | SSC: 91%',
      'Excelled in Computer Science & Mathematics',
      'Strong foundation in logical thinking and problem-solving',
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