'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { EyeIcon } from '@heroicons/react/24/outline';

const VisitCounter = () => {
  const [visitCount, setVisitCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Check if we've already incremented the visit count in this session
    const sessionKey = 'portfolioVisitSession';
    const hasVisitedThisSession = sessionStorage.getItem(sessionKey);
    
    if (!hasVisitedThisSession) {
      const storedCount = localStorage.getItem('portfolioVisitCount');
      const currentCount = storedCount ? parseInt(storedCount) : 0;
      const newCount = currentCount + 1;
      
      setVisitCount(newCount);
      localStorage.setItem('portfolioVisitCount', newCount.toString());
      sessionStorage.setItem(sessionKey, 'true');
    } else {
      // Just load the existing count without incrementing
      const storedCount = localStorage.getItem('portfolioVisitCount');
      const currentCount = storedCount ? parseInt(storedCount) : 0;
      setVisitCount(currentCount);
    }
    
    // Show counter after a slight delay
    setTimeout(() => setIsVisible(true), 1000);
  }, []);

  const formatCount = (count: number) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!isMounted) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        scale: isVisible ? 1 : 0.8, 
        y: isVisible ? 0 : 20 
      }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed bottom-6 right-6 z-40"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group bg-white/90 backdrop-blur-lg border border-slate-200 rounded-full px-4 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <div className="flex items-center space-x-2">
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <EyeIcon className="w-5 h-5 text-slate-700" />
          </motion.div>
          <motion.span
            animate={{ opacity: 1, width: 'auto' }}
            className="text-sm font-medium text-slate-700 whitespace-nowrap"
          >
            {formatCount(visitCount)} views
          </motion.span>
        </div>
        
        {/* Pulsing ring effect */}
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 rounded-full border-2 border-indigo-500/50"
        />
      </motion.div>
    </motion.div>
  );
};

export default VisitCounter;