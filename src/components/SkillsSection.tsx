import React, { useEffect, useRef, useState } from 'react';

const skills = [
  { name: 'React & Next.js', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Language' },
  { name: 'Node.js', level: 85, category: 'Backend' },
  { name: 'Python', level: 80, category: 'Language' },
  { name: 'UI/UX Design', level: 88, category: 'Design' },
  { name: 'GraphQL', level: 82, category: 'API' },
  { name: 'AWS & Cloud', level: 78, category: 'DevOps' },
  { name: 'Three.js', level: 75, category: 'Creative' },
];

const categories = ['All', 'Frontend', 'Backend', 'Design', 'Language', 'API', 'DevOps', 'Creative'];

export const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [animatedLevels, setAnimatedLevels] = useState<Record<string, number>>({});
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill bars
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedLevels(prev => ({ ...prev, [skill.name]: skill.level }));
            }, index * 100);
          });
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

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" ref={sectionRef} className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'fade-in-up' : ''}`}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 glitch gradient-text" data-text="Skills & Expertise">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and creative solutions 
            that enable me to bring ideas to life with precision and innovation.
          </p>
        </div>

        {/* Category filters */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'fade-in-up' : ''}`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground shadow-medium'
                  : 'bg-card text-foreground hover:bg-accent/20 border border-border'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className={`bg-card rounded-xl p-6 shadow-soft hover-lift transition-all duration-1000 ${
                isVisible ? 'fade-in-up' : ''
              }`}
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-lg text-foreground">{skill.name}</h3>
                <span className="text-sm text-accent font-medium">{skill.category}</span>
              </div>
              
              <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${animatedLevels[skill.name] || 0}%`,
                    transitionDelay: `${600 + index * 100}ms`
                  }}
                />
              </div>
              
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm text-muted-foreground">Proficiency</span>
                <span className="text-sm font-medium text-foreground">
                  {animatedLevels[skill.name] || 0}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};