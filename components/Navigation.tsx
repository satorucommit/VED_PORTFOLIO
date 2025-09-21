'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.95)']
  );
  const backdropBlur = useTransform(scrollY, [0, 100], ['blur(0px)', 'blur(10px)']);
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.9]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-colors duration-300"
      style={{ backdropFilter: backdropBlur }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ scale: logoScale }}
          className="text-xl font-medium text-slate-700 cursor-pointer relative"
          onClick={() => scrollToSection('home')}
        >
          <span className="relative z-10 font-bold text-xl text-slate-700">
            Vedant Badgujar
          </span>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden md:flex space-x-8"
        >
          {navItems.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  activeSection === item.id
                    ? 'text-slate-700'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
                suppressHydrationWarning
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:hidden"
        >
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative p-2 text-slate-600 hover:text-slate-800 transition-colors duration-300"
            suppressHydrationWarning
          >
            <div className="transition-transform duration-300">
              {isMobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </div>
          </button>
        </motion.div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className={`absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-slate-200 md:hidden ${
            isMobileMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                initial={{ opacity: 0, x: -20 }}
                animate={isMobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className={`block w-full text-left px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  activeSection === item.id
                    ? 'text-slate-700 bg-slate-100 rounded-lg'
                    : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50 rounded-lg'
                }`}
                suppressHydrationWarning
              >
                <span className="flex items-center space-x-2">
                  <motion.div
                    className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                    animate={activeSection === item.id ? {
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.5, 1]
                    } : {}}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                  <span>{item.label}</span>
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;