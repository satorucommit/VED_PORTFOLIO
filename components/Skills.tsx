'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const skillCategories = [
    {
      title: 'AI & Machine Learning',
      skills: [
        { name: 'Python 🐍', level: 90 },
        { name: 'Machine Learning 🤖', level: 85 },
        { name: 'Deep Learning 🧠', level: 80 },
        { name: 'NLP', level: 85 },
      ],
    },
    {
      title: 'Programming & Tools',
      skills: [
        { name: 'Data Science', level: 85 },
        { name: 'Git & GitHub', level: 90 },
        { name: 'JavaScript', level: 80 },
        { name: 'HTML/CSS', level: 85 },
      ],
    },
    {
      title: 'AI Specialization',
      skills: [
        { name: 'Prompt Engineering', level: 95 },
        { name: 'Problem Solving', level: 90 },
        { name: 'AI System Design', level: 85 },
        { name: 'Research & Innovation', level: 88 },
      ],
    },
  ];

  return (
    <section id="skills" ref={ref} className="py-20 lg:py-32 bg-gradient-to-b from-slate-50/50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="text-3xl lg:text-5xl font-light text-slate-700 mb-6">
            Technical
            <span className="text-gradient font-normal"> Expertise</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            A comprehensive skill set spanning modern web development, design thinking,
            and user experience optimization.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2, ease: 'easeOut' }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-slate-700 mb-8">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600 font-medium">{skill.name}</span>
                      <span className="text-sm text-slate-500">{skill.level}%</span>
                    </div>
                    
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          duration: 1.2, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: 'easeOut' 
                        }}
                        className="h-full bg-gradient-to-r from-slate-400 to-slate-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional expertise areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
          className="mt-16 lg:mt-24"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Hackathon Participation',
              'Continuous Learning',
              'Innovation Mindset',
              'Collaborative Spirit',
            ].map((expertise, index) => (
              <motion.div
                key={expertise}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1, ease: 'easeOut' }}
                className="bg-gradient-to-br from-slate-50 to-slate-100/50 p-6 rounded-xl text-center hover:from-slate-100 hover:to-slate-150/50 transition-all duration-300"
              >
                <div className="text-slate-700 font-medium">{expertise}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;