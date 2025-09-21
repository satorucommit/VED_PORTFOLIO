'use client';

import { useEffect, useState } from 'react';

interface TypingAnimationProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

const TypingAnimation = ({ text, className = '', speed = 50, delay = 0 }: TypingAnimationProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, currentIndex === 0 ? delay : speed);

      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, text, speed, delay]);

  return (
    <span className={className}>
      {displayedText}
      {!isComplete && <span className="inline-block ml-1">|</span>}
    </span>
  );
};

export default TypingAnimation;