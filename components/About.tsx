'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const stats = [
    { number: '15+', label: 'GitHub Projects' },
    { number: '3+', label: 'Years Learning' },
    { number: '100%', label: 'Passion Driven' },
    { number: '24/7', label: 'Always Learning' },
  ];

  return (
    <section id="about" ref={ref} className="py-20 lg:py-32 bg-gradient-to-b from-white to-slate-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                className="text-3xl lg:text-5xl font-light text-slate-700"
              >
                Driving AI
                <span className="text-gradient font-normal"> Innovation</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                className="text-lg text-slate-500 leading-relaxed"
              >
                With expertise as an AI Prompt Specialist, I excel at designing precise and creative 
                prompts to enhance AI systems, unlocking their full potential for smarter and more 
                efficient outcomes. I focus on mastering programming and problem-solving, bridging 
                the gap between theory and real-world application.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
                className="text-lg text-slate-500 leading-relaxed"
              >
                By participating in courses, workshops, and hackathons, I stay updated with the latest 
                advancements in the fast-changing tech landscape. Challenges inspire me to think beyond 
                boundaries and develop transformative ideas.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
              className="grid grid-cols-2 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1, ease: 'easeOut' }}
                  className="text-center"
                >
                  <div className="text-2xl lg:text-3xl font-medium text-slate-700 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="relative"
          >
            <img className="relative inset-0 z-[10] rounded-2xl hover:shadow-2xl transition-all duration-600" src={"./VED.jpg"} alt='hero' />
            
              
              {/* Decorative elements */}
              <div className="absolute top-1/4 right-1/4 w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm">
              </div>
              <div className="absolute bottom-1/3 left-1/4 w-16 h-16 rounded-lg bg-white/20 backdrop-blur-sm transform rotate-12"></div>
            

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: -5 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: -5 } : {}}
              transition={{ duration: 0.8, delay: 1, ease: 'easeOut' }}
              className="absolute -bottom-10 -left-20 bg-white p-6 rounded-xl shadow-xl z-20"
            >
              <div className="text-sm text-slate-500 mb-2">Currently working on</div>
              <div className="text-lg font-medium text-slate-700">AI/ML Projects</div>
              <div className="flex items-center mt-3 space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <div className="text-sm text-slate-500">In Progress</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;