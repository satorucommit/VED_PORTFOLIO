'use client';
import { useEffect, useState } from 'react';
import { useUltraPerformance } from '@/hooks/usePerformance';

/**
 * Ultra Performance Monitor - Real-time performance tracking
 * Optimized for minimal resource usage while providing critical insights
 */
const PerformanceMonitor = () => {
  const [metrics, setMetrics] = useState({ fps: 0, memory: 0, load: 0 });
  const { disableAnimations } = useUltraPerformance();
  
  useEffect(() => {
    // Only run in development or when explicitly enabled
    if (process.env.NODE_ENV !== 'development') return;
    
    console.log('🚀 ULTRA PERFORMANCE MODE ACTIVATED');
    console.log('📊 Performance monitoring enabled');
    
    let frameCount = 0;
    let lastTime = performance.now();
    let animationFrame: number;
    
    // Ultra-lightweight FPS monitor
    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime >= lastTime + 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        frameCount = 0;
        lastTime = currentTime;
        
        setMetrics(prev => ({ ...prev, fps }));
        
        // Log performance warnings
        if (fps < 30) {
          console.warn(`⚠️ Low FPS detected: ${fps} fps`);
        }
      }
      
      if (!disableAnimations) {
        animationFrame = requestAnimationFrame(measureFPS);
      }
    };
    
    // Start FPS monitoring
    if (!disableAnimations) {
      measureFPS();
    }
    
    // Ultra-efficient memory monitoring
    const checkMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const usedMB = Math.round(memory.usedJSHeapSize / 1024 / 1024);
        
        setMetrics(prev => ({ ...prev, memory: usedMB }));
        
        // Memory leak detection
        if (usedMB > 100) {
          console.warn(`⚠️ High memory usage: ${usedMB} MB`);
        }
      }
    };
    
    // Check memory every 10 seconds (reduced frequency)
    const memoryInterval = setInterval(checkMemory, 10000);
    
    // Monitor critical Core Web Vitals only
    if ('PerformanceObserver' in window) {
      // Monitor only critical layout shifts
      const clsObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          const cls = (entry as any).value;
          if (cls > 0.1) {
            console.error(`❌ Critical Layout Shift: ${cls.toFixed(3)}`);
          }
        });
      });
      
      // Monitor long tasks that hurt performance
      const longTaskObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.duration > 50) {
            console.error(`❌ Long Task blocking main thread: ${entry.duration.toFixed(2)}ms`);
          }
        });
      });
      
      try {
        clsObserver.observe({ entryTypes: ['layout-shift'] });
        longTaskObserver.observe({ entryTypes: ['longtask'] });
      } catch (e) {
        console.log('Performance observers not supported');
      }
      
      return () => {
        clearInterval(memoryInterval);
        if (animationFrame) cancelAnimationFrame(animationFrame);
        clsObserver.disconnect();
        longTaskObserver.disconnect();
      };
    }
    
    return () => {
      clearInterval(memoryInterval);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [disableAnimations]);
  
  // Visual performance monitor removed for clean UI
  return null;
};

export default PerformanceMonitor;