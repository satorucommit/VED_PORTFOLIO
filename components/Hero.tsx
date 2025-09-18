'use client';

import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-4xl md:text-6xl lg:text-7xl font-light text-slate-700 leading-tight"
          >
            AI/ML Enthusiast
            <br />
            <span className="text-gradient font-normal">& Tech Innovator</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto text-balance"
          >
            Passionate about Artificial Intelligence and Machine Learning, I am committed to driving 
            impactful innovation and creating meaningful solutions. As an AI Prompt Specialist, I excel 
            at designing precise prompts to unlock AI systems' full potential.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a href="https://github.com/satorucommit" target="_blank">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-slate-700 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              View My Work
            </motion.button>
            </a>
            
            <a href={"#contact"}>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-slate-300 text-slate-700 rounded-xl font-medium hover:bg-slate-50 transition-colors duration-300"
            >
              Get In Touch
            </motion.button>
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        whileHover={{ scale: 1.1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDownIcon className="w-6 h-6 text-slate-600" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;