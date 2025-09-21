'use client';

import { motion } from 'framer-motion';
import { HeartIcon, CodeBracketIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <footer className="bg-slate-800 dark:bg-slate-900 text-slate-300 dark:text-slate-400 relative overflow-hidden">
      {/* Morphing background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {isMounted && [...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-slate-600 rounded-full"
            style={{
              left: `${(i * 21 + 11) % 100}%`,
              top: `${(i * 43 + 17) % 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 6 + (i % 3),
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.2,
            }}
          />
        ))}
        
        {/* Morphing geometric shapes */}
        <motion.div
          className="absolute top-10 right-10 w-20 h-20 opacity-5"
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
        >
          <motion.svg
            viewBox="0 0 100 100"
            className="w-full h-full text-slate-500"
          >
            <motion.circle
              cx="50"
              cy="50"
              r="25"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              animate={{
                r: [20, 30, 20],
                strokeDasharray: ["0 100", "50 50", "0 100"]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          </motion.svg>
        </motion.div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.h3 
                className="text-2xl font-medium text-white dark:text-slate-100 mb-4"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ duration: 4, repeat: Infinity }}
                style={{
                  background: 'linear-gradient(90deg, #ffffff, #6366f1, #8b5cf6, #ffffff)',
                  backgroundSize: '200% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Vedant Badgujar
              </motion.h3>
              <p className="text-slate-400 dark:text-slate-500 leading-relaxed mb-6 max-w-md">
                AI/ML Enthusiast and Tech Innovator crafting intelligent solutions
                that drive meaningful impact through artificial intelligence.
              </p>
              <div className="flex space-x-4">
                {[
                  { name: 'GitHub', url: 'https://github.com/satorucommit', icon: 'G' },
                  { name: 'LinkedIn', url: 'https://linkedin.com/in/vedant-badgujar-a546bb298', icon: 'L' },
                ].map((platform, index) => (
                  <motion.a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ 
                      scale: 1.2, 
                      y: -3,
                      rotateY: 10,
                      transition: { duration: 0.2 }
                    }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative w-10 h-10 bg-slate-700 dark:bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-600 dark:hover:bg-slate-700 transition-colors duration-300 group overflow-hidden"
                  >
                    {/* Morphing background gradient */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                      animate={{
                        background: [
                          'linear-gradient(45deg, #6366f1, #8b5cf6)',
                          'linear-gradient(135deg, #8b5cf6, #ec4899)',
                          'linear-gradient(45deg, #6366f1, #8b5cf6)'
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    
                    {/* Morphing icon */}
                    <motion.span 
                      className="text-sm font-medium relative z-10"
                      animate={{
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                    >
                      {platform.icon}
                    </motion.span>
                    
                    {/* Pulse ring */}
                    <motion.div
                      className="absolute inset-0 rounded-lg border-2 border-indigo-400 opacity-0"
                      animate={{
                        scale: [1, 1.3],
                        opacity: [0, 0.6, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white dark:text-slate-100 font-medium mb-4 flex items-center space-x-2">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                >
                  <CodeBracketIcon className="w-5 h-5 text-indigo-400" />
                </motion.div>
                <span>Navigation</span>
              </h4>
              <nav className="space-y-3">
                {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-slate-400 dark:text-slate-500 hover:text-white dark:hover:text-slate-200 transition-colors duration-300 relative"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.span
                      whileHover={{
                        backgroundPosition: ['0% 50%', '100% 50%'],
                        transition: { duration: 1 }
                      }}
                      style={{
                        background: 'linear-gradient(90deg, #9ca3af, #6366f1, #9ca3af)',
                        backgroundSize: '200% 100%',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {item}
                    </motion.span>
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white dark:text-slate-100 font-medium mb-4 flex items-center space-x-2">
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                >
                  <SparklesIcon className="w-5 h-5 text-purple-400" />
                </motion.div>
                <span>Services</span>
              </h4>
              <ul className="space-y-3 text-slate-400 dark:text-slate-500">
                {['AI and ML', 'Data Analysis', 'Prompt Engineering', 'Frontend Development', 'UI/UX Design'].map((service, index) => (
                  <motion.li
                    key={service}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5, color: '#e2e8f0' }}
                    className="transition-colors duration-300 cursor-default"
                  >
                    <motion.span
                      className="flex items-center space-x-2"
                    >
                      <motion.div
                        className="w-1 h-1 bg-indigo-400 rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2
                        }}
                      />
                      <span>{service}</span>
                    </motion.span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-slate-700 dark:border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-slate-400 dark:text-slate-500 text-sm flex items-center space-x-2">
            <span>© {isMounted ? new Date().getFullYear() : '2024'} Vedant Badgujar. All rights reserved.</span>
          </p>
          <motion.div 
            className="text-slate-400 dark:text-slate-500 text-sm mt-4 md:mt-0 flex items-center space-x-2"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            <span>Designed and built with</span>
            <motion.span
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="inline-block"
            >
              <HeartIcon className="w-4 h-4 text-red-400" />
            </motion.span>
            <span>using Next.js</span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;