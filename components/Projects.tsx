'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ArrowUpRightIcon, StarIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Programming Language Recommender',
      description: '🤖 ML-based recommendation system suggesting the right programming language based on user preferences and project requirements.',
      tags: ['Python', 'Scikit-learn', 'NLP', 'Machine Learning'],
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/satorucommit/Programming-Lang-Recommendor',
    },
    {
      id: 2,
      title: 'AI Spiritual App',
      description: '🙏 An AI-powered application exploring spirituality, combining artificial intelligence with mindfulness and spiritual guidance.',
      tags: ['Python', 'AI APIs', 'Natural Language Processing', 'Spirituality'],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/satorucommit/AI-SPIRITUAL-APP',
    },
    {
      id: 3,
      title: 'Vedtype - Typing Game',
      description: '⌨️ Interactive typing game built for practice and fun, helping users improve their typing speed and accuracy.',
      tags: ['JavaScript', 'HTML', 'CSS', 'Game Development'],
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/satorucommit/Vedtype',
    },
    {
      id: 4,
      title: 'YouTube Video Downloader',
      description: '🎥 Efficient tool to download YouTube videos easily with a clean interface and multiple format options.',
      tags: ['Python', 'pytube', 'GUI', 'Video Processing'],
      image: 'https://images.pexels.com/photos/1983032/pexels-photo-1983032.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/satorucommit/Youtube-video-Downloader',
    },
  ];

  // Simple Project Card component
  const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
    if (!isMounted) {
      return (
        <div className="group cursor-pointer">
          <div className="relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700">
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-700" />
            <div className="p-6">
              <div className="h-6 bg-slate-200 dark:bg-slate-600 rounded mb-3" />
              <div className="space-y-2 mb-4">
                <div className="h-4 bg-slate-200 dark:bg-slate-600 rounded" />
                <div className="h-4 bg-slate-200 dark:bg-slate-600 rounded w-3/4" />
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-6 w-16 bg-slate-200 dark:bg-slate-600 rounded-full" />
                ))}
              </div>
              <div className="h-5 w-24 bg-slate-200 dark:bg-slate-600 rounded" />
            </div>
          </div>
        </div>
      );
    }

    return (
      <motion.div
        key={project.id}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
        className="group cursor-pointer"
      >
        <div className="relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
          {/* Image */}
          <div className="relative aspect-[16/10] overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading={index > 1 ? 'lazy' : 'eager'}
            />
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
              {project.description}
            </p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {/* CTA Button */}
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors duration-300 font-medium"
            >
              <span>View on GitHub</span>
              <ArrowUpRightIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </motion.div>
    );
  };

  // ... existing code ...

  return (
    <section id="projects" ref={ref} className="py-20 lg:py-32 bg-gradient-to-b from-slate-50/50 to-white relative overflow-hidden">
      {/* Simple background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-20 left-10 w-1 h-1 bg-indigo-200 rounded-full" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-indigo-200 rounded-full" />
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-indigo-200 rounded-full" />
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-indigo-200 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="text-3xl lg:text-5xl font-light text-slate-700 mb-6">
            Selected
            <span className="text-gradient font-normal ml-3">Projects</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            A curated collection of innovative projects showcasing cutting-edge technology
            and creative problem-solving approaches.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
          className="text-center mt-16"
        >
          <button
            className="px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-xl font-medium hover:border-indigo-400 hover:text-indigo-600 transition-all duration-300"
            suppressHydrationWarning
          >
            <span className="flex items-center space-x-2">
              <CodeBracketIcon className="w-5 h-5" />
              <span>View All Projects</span>
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;