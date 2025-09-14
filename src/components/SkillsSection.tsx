import React, { useEffect, useRef, useState } from 'react';

const skills = [
  // Frontend
  { name: 'React & Next.js', level: 95, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'Frontend' },
  { name: 'Redux / Zustand', level: 85, category: 'Frontend' },
  
  // Backend
  { name: 'Node.js & Express', level: 88, category: 'Backend' },
  { name: 'Django / Flask', level: 82, category: 'Backend' },
  { name: 'PostgreSQL / MongoDB', level: 85, category: 'Backend' },
  
  // Languages
  { name: 'TypeScript', level: 90, category: 'Languages' },
  { name: 'Python', level: 92, category: 'Languages' },
  { name: 'JavaScript (ES6+)', level: 95, category: 'Languages' },
  { name: 'C++', level: 75, category: 'Languages' },
  
  // AI/ML
  { name: 'TensorFlow', level: 85, category: 'AI/ML' },
  { name: 'PyTorch', level: 83, category: 'AI/ML' },
  { name: 'Scikit-learn', level: 87, category: 'AI/ML' },
  { name: 'Hugging Face Transformers', level: 82, category: 'AI/ML' },
  { name: 'NLP / LLMs (BERT, GPT, RAG)', level: 85, category: 'AI/ML' },
  { name: 'Computer Vision (OpenCV, YOLO)', level: 80, category: 'AI/ML' },
  { name: 'Data Science (Pandas, NumPy, Matplotlib)', level: 90, category: 'AI/ML' },
  
  // APIs
  { name: 'RESTful APIs', level: 88, category: 'APIs' },
  { name: 'GraphQL', level: 82, category: 'APIs' },
  { name: 'FastAPI', level: 80, category: 'APIs' },
  
  // DevOps
  { name: 'AWS & Cloud Services', level: 80, category: 'DevOps' },
  { name: 'Docker & Kubernetes', level: 78, category: 'DevOps' },
  { name: 'GitHub Actions / CI-CD', level: 76, category: 'DevOps' },
  
  // Creative
  { name: 'UI/UX Design (Figma, Adobe XD)', level: 88, category: 'Creative' },
  { name: 'Three.js & 3D Experiences', level: 75, category: 'Creative' },
  { name: 'D3.js (Data Viz)', level: 72, category: 'Creative' },
];

const categories = ['All', 'Frontend', 'Backend', 'Languages', 'AI/ML', 'APIs', 'DevOps', 'Creative'];

export const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [animatedLevels, setAnimatedLevels] = useState<Record<string, number>>(() => {
    // Initialize with actual skill levels
    const initialLevels: Record<string, number> = {};
    skills.forEach(skill => {
      initialLevels[skill.name] = skill.level;
    });
    return initialLevels;
  });
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
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                  style={{
                    width: `${animatedLevels[skill.name] || 0}%`
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