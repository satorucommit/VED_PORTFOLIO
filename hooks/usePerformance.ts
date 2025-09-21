'use client';

import { useState, useEffect } from 'react';

/**
 * Custom hook to handle component mount state for hydration safety
 * Reduces repeated code across components
 */
export const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useEffect : () => {};

export const useMounted = () => {
  const [isMounted, setIsMounted] = useState(false);

  useIsomorphicLayoutEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted;
};

/**
 * Enhanced responsive hook with performance optimizations for different devices
 */
export const useResponsive = () => {
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
    height: typeof window !== 'undefined' ? window.innerHeight : 768,
    isMobile: false,
    isTablet: false,
    isDesktop: true, // Default to desktop for SSR
    isLowPowerDevice: false,
    prefersReducedMotion: false,
    devicePixelRatio: typeof window !== 'undefined' ? window.devicePixelRatio : 1,
  });

  useEffect(() => {
    // Only run on client-side
    if (typeof window === 'undefined') return;
    
    const updateScreenSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Detect low-power devices for performance optimization
      const deviceMemory = (navigator as any).deviceMemory;
      const isLowPowerDevice = (
        navigator.hardwareConcurrency <= 2 || 
        (deviceMemory && deviceMemory <= 2) ||
        /Android.*(SM-|GT-|SCH-|SGH-|SPH-|LG-|HTC|SonyEricsson|BlackBerry)/i.test(navigator.userAgent)
      );
      
      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      setScreenSize({
        width,
        height,
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024,
        isLowPowerDevice,
        prefersReducedMotion,
        devicePixelRatio: window.devicePixelRatio,
      });
    };

    updateScreenSize();
    
    // Use passive listeners for better performance
    window.addEventListener('resize', updateScreenSize, { passive: true });
    
    // Listen for reduced motion changes with proper check
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', updateScreenSize);
    }
    
    return () => {
      window.removeEventListener('resize', updateScreenSize);
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', updateScreenSize);
      }
    };
  }, []);

  return screenSize;
};

/**
 * Custom hook for device-specific performance settings
 */
export const useDeviceOptimization = () => {
  const responsive = useResponsive();
  const [optimizations, setOptimizations] = useState({
    particleCount: 20,
    animationDuration: 1,
    enableComplexAnimations: true,
    imageQuality: 'high',
    enableParallax: true,
    debounceDelay: 100,
  });

  useEffect(() => {
    // MAXIMUM PERFORMANCE MODE - Aggressive optimizations
    const newOptimizations = {
      // Ultra-low particle count for maximum performance
      particleCount: responsive.isMobile ? 3 : responsive.isLowPowerDevice ? 5 : responsive.isTablet ? 6 : 8,
      
      // Ultra-fast animations to reduce CPU load
      animationDuration: responsive.isMobile ? 0.3 : responsive.prefersReducedMotion ? 0.05 : 0.5,
      
      // Disable complex animations on all mobile/tablet devices
      enableComplexAnimations: !responsive.isMobile && !responsive.isTablet && !responsive.isLowPowerDevice && !responsive.prefersReducedMotion,
      
      // Maximum compression for all devices
      imageQuality: responsive.isMobile ? 'low' : responsive.isTablet ? 'medium' : 'high' as 'high' | 'medium' | 'low',
      
      // Disable parallax on mobile and tablet
      enableParallax: responsive.isDesktop && !responsive.isLowPowerDevice && !responsive.prefersReducedMotion,
      
      // Higher debounce everywhere to reduce event frequency
      debounceDelay: responsive.isMobile ? 300 : responsive.isTablet ? 250 : 150,
    };
    
    setOptimizations(newOptimizations);
  }, [responsive]);

  return { ...responsive, ...optimizations };
};

/**
 * Custom hook for performance monitoring
 */
export const usePerformance = () => {
  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV === 'development') {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'measure') {
            console.log(`Performance: ${entry.name} took ${entry.duration}ms`);
          }
        });
      });
      
      observer.observe({ entryTypes: ['measure'] });
      
      return () => observer.disconnect();
    }
  }, []);
};

/**
 * Custom hook for intelligent image loading based on device - MAXIMUM PERFORMANCE MODE
 */
export const useImageOptimization = (src: string) => {
  const { isMobile, devicePixelRatio, isLowPowerDevice, isTablet } = useResponsive();
  const [optimizedSrc, setOptimizedSrc] = useState(src);
  
  useEffect(() => {
    if (src.includes('pexels.com') || src.includes('unsplash.com')) {
      // Ultra-aggressive compression for maximum performance
      let quality = 40; // Default ultra-low quality
      let width = 400;  // Default ultra-low resolution
      
      if (isMobile) {
        width = Math.min(window.innerWidth * Math.min(devicePixelRatio, 1.5), 300); // Cap DPR
        quality = 30; // Ultra-low quality on mobile
      } else if (isTablet) {
        width = Math.min(window.innerWidth * Math.min(devicePixelRatio, 2), 500);
        quality = 35; // Very low quality on tablet
      } else {
        width = Math.min(window.innerWidth * Math.min(devicePixelRatio, 2), 800);
        quality = isLowPowerDevice ? 35 : 45;
      }
      
      // Optimize external image URLs with maximum compression
      const optimized = src.includes('pexels.com') 
        ? `${src}&w=${width}&q=${quality}&auto=compress&cs=tinysrgb&fm=webp`
        : src;
      
      setOptimizedSrc(optimized);
    }
  }, [src, isMobile, devicePixelRatio, isLowPowerDevice, isTablet]);
  
  return optimizedSrc;
};

/**
 * Ultra performance hook - Reduces all heavy operations
 */
export const useUltraPerformance = () => {
  const responsive = useResponsive();
  
  return {
    // Disable all animations on low-power devices
    disableAnimations: responsive.isLowPowerDevice || responsive.prefersReducedMotion,
    
    // Use minimal particle count
    useMinimalParticles: responsive.isMobile || responsive.isLowPowerDevice,
    
    // Disable expensive CSS effects
    disableBlur: responsive.isMobile || responsive.isLowPowerDevice,
    
    // Use lower frame rate for animations
    reducedFrameRate: responsive.isMobile || responsive.isLowPowerDevice,
    
    // Disable intersection observer on mobile
    disableIntersectionObserver: responsive.isMobile,
  };
};