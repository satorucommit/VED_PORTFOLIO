'use client';

import { useState, useEffect } from 'react';

const ParticleBackground = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Prevent hydration mismatch
  if (!isMounted) {
    return <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" />;
  }

  // Ultra-minimal static particles for maximum performance
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-20">
      {/* Static decorative dots */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-slate-200 rounded-full" />
      <div className="absolute top-40 right-20 w-2 h-2 bg-slate-200 rounded-full" />
      <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-slate-200 rounded-full" />
      <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-slate-200 rounded-full" />
      <div className="absolute top-1/2 left-10 w-1 h-1 bg-slate-200 rounded-full" />
      <div className="absolute top-1/3 right-10 w-1 h-1 bg-slate-200 rounded-full" />
    </div>
  );
};

export default ParticleBackground;