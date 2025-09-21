'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { EnvelopeIcon, MapPinIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isMounted, setIsMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      label: 'Email',
      value: 'vedantb3705@gmail.com',
      href: null,
    },
    {
      icon: MapPinIcon,
      label: 'Location',
      value: 'Mumbai, Maharashtra',
      href: null,
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-20 lg:py-32 bg-gradient-to-b from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800/50 relative overflow-hidden">
      {/* Simple background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-20 left-10 w-1 h-1 bg-indigo-300 rounded-full" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-indigo-300 rounded-full" />
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-indigo-300 rounded-full" />
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-indigo-300 rounded-full" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="text-3xl lg:text-5xl font-light text-slate-700 dark:text-slate-200 mb-6">
            Let&apos;s Create
            <span className="text-gradient font-normal"> Something Amazing</span>
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Ready to bring your vision to life? I&apos;d love to hear about your project
            and explore how we can work together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-slate-700 dark:text-slate-200">Get In Touch</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                Whether you have a specific project in mind or just want to explore possibilities,
                I&apos;m here to help. Let&apos;s discuss how we can transform your ideas into exceptional
                digital experiences.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1, ease: 'easeOut' }}
                  className="flex items-center space-x-4 group"
                >
                  <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-xl flex items-center justify-center group-hover:bg-slate-200 dark:group-hover:bg-slate-600 transition-colors duration-300">
                    <info.icon className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">{info.label}</div>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-slate-700 dark:text-slate-200 hover:text-slate-600 dark:hover:text-slate-300 transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-slate-700 dark:text-slate-200">{info.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
              className="pt-8 border-t border-slate-200"
            >
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Follow me on social media</p>
              <div className="flex space-x-4">
                {[
                  { Icon: Github, url: 'https://github.com/satorucommit' },
                  { Icon: Linkedin, url: 'https://linkedin.com/in/vedant-badgujar-a546bb298' },
                ].map((platform, index) => (
                  <motion.a
                    key={index}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1, ease: 'easeOut' }}
                    className="relative w-10 h-10 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors duration-300 group overflow-hidden"
                  >
                    <platform.Icon className="w-8 h-8 text-slate-600 dark:text-slate-300" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            suppressHydrationWarning
          >
            <form 
              onSubmit={handleSubmit} 
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg space-y-6 relative overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 rounded-lg focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                    suppressHydrationWarning
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 rounded-lg focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                    suppressHydrationWarning
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 rounded-lg focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-all duration-300"
                  placeholder="Project inquiry"
                  suppressHydrationWarning
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 rounded-lg focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                  suppressHydrationWarning
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-slate-700 dark:bg-slate-600 text-white rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-slate-500 transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                suppressHydrationWarning
              >
                <PaperAirplaneIcon className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;