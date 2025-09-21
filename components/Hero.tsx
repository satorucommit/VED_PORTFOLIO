'use client';

import { motion } from 'framer-motion';
import { ChevronDownIcon, DocumentArrowDownIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isMounted) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-slate-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-slate-800 leading-tight">
            <span className="block">AI/ML Enthusiast</span>
            <span className="block text-gradient font-normal">
              & Tech Innovator
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mt-6">
            Passionate about Artificial Intelligence and Machine Learning
          </p>
        </div>
      </section>
    );
  }

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-indigo-50"
    >
      {/* Simple background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-20 left-10 w-2 h-2 bg-indigo-400 rounded-full" />
        <div className="absolute top-40 right-20 w-2 h-2 bg-indigo-400 rounded-full" />
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-indigo-400 rounded-full" />
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-indigo-400 rounded-full" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8"
        >
          {/* Simple Hero Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-light text-slate-800 leading-tight"
          >
            <span className="block">AI/ML Enthusiast</span>
            <span className="block text-gradient font-normal">
              & Tech Innovator
            </span>
          </motion.h1>

          {/* Simple Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto"
          >
            Passionate about Artificial Intelligence and Machine Learning, driving 
            impactful innovation as an AI Prompt Specialist.
          </motion.p>

          {/* Simple CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a 
              href="/resume.pdf" 
              download="Vedant_Badgujar_Resume.pdf"
              className="group relative inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <DocumentArrowDownIcon className="w-5 h-5" />
              <span>Download Resume</span>
            </a>
            
            <button
              onClick={scrollToAbout}
              className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-indigo-500 text-indigo-600 rounded-xl font-medium hover:bg-indigo-50 transition-all duration-300"
            >
              <span>View My Work</span>
              <ChevronDownIcon className="w-5 h-5" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Simple scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="text-slate-400 text-sm">
          Scroll to explore
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;