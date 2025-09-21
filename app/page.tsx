'use client';

import ErrorBoundary from '@/components/ErrorBoundary';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <ErrorBoundary>
      <main className="relative min-h-screen">
        {/* Navigation */}
        <Navigation />
        
        {/* Hero section */}
        <Hero />
        
        {/* About section */}
        <About />
        
        {/* Projects section */}
        <Projects />
        
        {/* Skills section */}
        <Skills />
        
        {/* Contact section */}
        <Contact />
        
        {/* Footer */}
        <Footer />
      </main>
    </ErrorBoundary>
  );
}