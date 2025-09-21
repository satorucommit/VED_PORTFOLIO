'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect, useMemo } from 'react';
import { SparklesIcon, TrophyIcon, LightBulbIcon } from '@heroicons/react/24/outline';

const Skills = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Memoize skill categories to prevent recreating on every render
  const skillCategories = useMemo(() => [
    {
      title: 'AI & Machine Learning',
      icon: SparklesIcon,
      description: 'Advanced AI/ML expertise with cutting-edge technologies',
      skills: [
        { name: 'Python 🐍', level: 90, endorsements: 45 },
        { name: 'Machine Learning 🤖', level: 85, endorsements: 38 },
        { name: 'Deep Learning 🧠', level: 80, endorsements: 32 },
        { name: 'NLP', level: 85, endorsements: 28 },
      ],
    },
    {
      title: 'Programming & Tools',
      icon: TrophyIcon,
      description: 'Full-stack development and modern tooling mastery',
      skills: [
        { name: 'Data Science', level: 85, endorsements: 42 },
        { name: 'Git & GitHub', level: 90, endorsements: 55 },
        { name: 'JavaScript', level: 80, endorsements: 35 },
        { name: 'HTML/CSS', level: 85, endorsements: 40 },
      ],
    },
    {
      title: 'AI Specialization',
      icon: LightBulbIcon,
      description: 'Specialized AI system design and prompt engineering',
      skills: [
        { name: 'Prompt Engineering', level: 95, endorsements: 62 },
        { name: 'Problem Solving', level: 90, endorsements: 58 },
        { name: 'AI System Design', level: 85, endorsements: 34 },
        { name: 'Research & Innovation', level: 88, endorsements: 41 },
      ],
    },
  ], []);

  // Always render the content without hydration check
  return (
    <section 
      id="skills" 
      ref={ref} 
      className="py-20 lg:py-32 min-h-screen bg-gradient-to-b from-slate-50/50 to-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-3xl lg:text-5xl font-light text-slate-700 mb-6">
            Technical <span className="text-gradient font-normal">Expertise</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            A comprehensive skill set spanning modern web development, AI innovation,
            and cutting-edge technology solutions.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            
            return (
              <div
                key={category.title}
                className="relative h-96"
              >
                <div className="relative w-full h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100">
                  <div className="flex items-center justify-between mb-6">
                    <IconComponent className="w-8 h-8 text-indigo-500" />
                    <div className="w-6 h-6 border-2 border-dashed border-indigo-300 rounded-full" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-700 mb-4">
                    {category.title}
                  </h3>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-600 font-medium text-sm">{skill.name}</span>
                          <span className="text-xs text-slate-500">
                            {skill.level}%
                          </span>
                        </div>
                        
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Expertise Cards */}
        <div className="mt-16 lg:mt-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Continuous Learning', icon: '📚', count: '365 days' },
              { name: 'Innovation Mindset', icon: '💡', count: '∞' },
              { name: 'Collaborative Spirit', icon: '🤝', count: '100%' },
            ].map((expertise, index) => (
              <div
                key={expertise.name}
                className="bg-gradient-to-br from-slate-50 to-slate-100/50 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 border border-slate-200"
              >
                <div className="text-3xl mb-3">
                  {expertise.icon}
                </div>
                <div className="text-slate-700 font-medium text-sm mb-2">{expertise.name}</div>
                <div className="text-indigo-600 font-bold text-lg">
                  {expertise.count}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;