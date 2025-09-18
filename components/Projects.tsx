'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const projects = [
    {
      id: 1,
      title: 'Programming Language Recommender',
      description: '🤖 ML-based recommendation system suggesting the right programming language based on user preferences and project requirements.',
      tags: ['Python', 'Scikit-learn', 'NLP', 'Machine Learning'],
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 2,
      title: 'AI Spiritual App',
      description: '🙏 An AI-powered application exploring spirituality, combining artificial intelligence with mindfulness and spiritual guidance.',
      tags: ['Python', 'AI APIs', 'Natural Language Processing', 'Spirituality'],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 3,
      title: 'Vedtype - Typing Game',
      description: '⌨️ Interactive typing game built for practice and fun, helping users improve their typing speed and accuracy.',
      tags: ['JavaScript', 'HTML', 'CSS', 'Game Development'],
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 4,
      title: 'YouTube Video Downloader',
      description: '🎥 Efficient tool to download YouTube videos easily with a clean interface and multiple format options.',
      tags: ['Python', 'pytube', 'GUI', 'Video Processing'],
      image: 'https://images.pexels.com/photos/1983032/pexels-photo-1983032.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section id="projects" ref={ref} className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="text-3xl lg:text-5xl font-light text-slate-700 mb-6">
            Selected
            <span className="text-gradient font-normal"> Projects</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            A curated collection of my recent work, showcasing expertise in modern web development
            and user experience design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2, ease: 'easeOut' }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center"
                  >
                    <ArrowUpRightIcon className="w-5 h-5 text-slate-700" />
                  </motion.div>
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-semibold text-slate-700 mb-3 group-hover:text-slate-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border border-slate-300 text-slate-700 rounded-xl font-medium hover:bg-slate-50 transition-all duration-300"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;