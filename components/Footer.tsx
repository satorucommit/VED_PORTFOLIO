'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-medium text-white mb-4">Vedant Badgujar</h3>
              <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
                AI/ML Enthusiast and Tech Innovator crafting intelligent solutions
                that drive meaningful impact through artificial intelligence.
              </p>
              <div className="flex space-x-4">
                {[
                  { name: 'GitHub', url: 'https://github.com/satorucommit' },
                  { name: 'LinkedIn', url: 'https://linkedin.com/in/vedant-badgujar-a546bb298' },
                ].map((platform, index) => (
                  <motion.a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-600 transition-colors duration-300"
                  >
                    <span className="text-sm font-medium">{platform.name.charAt(0)}</span>
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
              <h4 className="text-white font-medium mb-4">Navigation</h4>
              <nav className="space-y-3">
                {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
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
              <h4 className="text-white font-medium mb-4">Services</h4>
              <ul className="space-y-3 text-slate-400">
                <li>AI and ML</li>
                <li>Data Analysis</li>
                <li>Prompt Engineering</li>
                <li>Frontend Development</li>
                <li>UI/UX Design</li>
              </ul>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Vedant Badgujar. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm mt-4 md:mt-0">
            Designed and built with ❤️ using Next.js
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;