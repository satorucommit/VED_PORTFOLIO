'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { DocumentArrowDownIcon, SparklesIcon, RocketLaunchIcon, LightBulbIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const stats = [
    { number: '10+', label: 'GitHub Projects', icon: CodeBracketIcon, color: 'from-blue-400 to-cyan-500' },
    { number: '3+', label: 'Years Learning', icon: LightBulbIcon, color: 'from-yellow-400 to-orange-500' },
    { number: '100%', label: 'Passion Driven', icon: RocketLaunchIcon, color: 'from-pink-400 to-red-500' },
    { number: '24/7', label: 'Always Learning', icon: SparklesIcon, color: 'from-purple-400 to-indigo-500' },
  ];



  return (
    <section id="about" ref={ref} className="py-20 lg:py-32 bg-gradient-to-b from-white via-indigo-50/30 to-purple-50/30 dark:from-slate-900 dark:via-slate-800/50 dark:to-indigo-900/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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
                className="text-3xl lg:text-5xl font-light text-slate-800 dark:text-slate-100"
              >
                <span className="italic font-light">Driving AI</span>
                <span className="text-gradient italic font-light"> Innovation</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
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
                className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
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
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.8 + index * 0.1, 
                      ease: 'easeOut'
                    }}
                    className="relative bg-white/50 backdrop-blur-sm p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 border border-white/20 group overflow-hidden"
                  >
                    <div className="relative z-10 mb-3 flex justify-center">
                      <IconComponent className="w-8 h-8 text-indigo-600" />
                    </div>
                    
                    <div className="relative z-10">
                      <div className="text-2xl lg:text-3xl font-medium text-slate-800 dark:text-slate-100 mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0, ease: 'easeOut' }}
              className="flex justify-center mt-8"
            >
              <a 
                href="/resume.pdf" 
                download="Vedant_Badgujar_Resume.pdf"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-secondary text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 glow-effect"
              >
                <DocumentArrowDownIcon className="w-5 h-5" />
                <span>Download Resume</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative max-w-lg">
              <Image 
                className="relative z-[10] rounded-2xl hover:shadow-2xl transition-all duration-600 w-full h-auto" 
                src="/VED.jpg" 
                alt="Vedant Badgujar - AI/ML Enthusiast" 
                width={420}
                height={480}
                priority
              />
              
              
              {/* Decorative elements */}
              <div className="absolute top-1/4 right-1/4 w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm">
              </div>
              <div className="absolute bottom-1/3 left-1/4 w-16 h-16 rounded-lg bg-white/20 backdrop-blur-sm transform rotate-12"></div>
            </div>
            

            {/* Simple floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
              className="absolute -bottom-8 -left-16 bg-white p-6 rounded-xl shadow-xl z-20 overflow-hidden group"
            >
              <div className="relative z-10">
                <div className="flex items-center space-x-2 mb-2">
                  <RocketLaunchIcon className="w-5 h-5 text-indigo-600" />
                  <div className="text-sm text-slate-600">Currently working on</div>
                </div>
                
                <div className="text-lg font-medium text-slate-800 mb-3">
                  AI/ML Projects
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <div className="text-sm text-slate-600">In Progress</div>
                  <div className="text-xs text-indigo-600">→</div>
                </div>
              </div>
              
              {/* Simple corner decoration */}
              <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                <div className="w-6 h-6 bg-gradient-to-r from-yellow-300 to-orange-400 transform rotate-45 translate-x-3 -translate-y-3" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;