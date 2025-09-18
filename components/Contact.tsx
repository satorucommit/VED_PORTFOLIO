'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
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
    <section id="contact" ref={ref} className="py-20 lg:py-32 bg-gradient-to-b from-white to-slate-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="text-3xl lg:text-5xl font-light text-slate-700 mb-6">
            Let's Create
            <span className="text-gradient font-normal"> Something Amazing</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Ready to bring your vision to life? I'd love to hear about your project
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
              <h3 className="text-2xl font-semibold text-slate-700">Get In Touch</h3>
              <p className="text-slate-500 leading-relaxed">
                Whether you have a specific project in mind or just want to explore possibilities,
                I'm here to help. Let's discuss how we can transform your ideas into exceptional
                digital experiences.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1, ease: 'easeOut' }}
                  className="flex items-center space-x-4 group"
                >
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center group-hover:bg-slate-200 transition-colors duration-300">
                    <info.icon className="w-5 h-5 text-slate-600" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 mb-1">{info.label}</div>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-slate-700 hover:text-slate-600 transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-slate-700">{info.value}</div>
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
              <p className="text-slate-500 text-sm mb-4">Follow me on social media</p>
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
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1, ease: 'easeOut' }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-slate-200 transition-colors duration-300"
                  >
                    <platform.Icon className="w-8 h-8 text-slate-600" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-all duration-300"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-slate-700 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;