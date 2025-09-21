'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamic import with loading fallback
const Skills = dynamic(() => import('./Skills'), {
  loading: () => (
    <section className="py-20 lg:py-32 min-h-screen bg-gradient-to-b from-slate-50/50 to-white dark:from-slate-900/50 dark:to-slate-800 relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 lg:mb-24">
          <div className="h-12 bg-slate-200 dark:bg-slate-700 rounded-lg animate-pulse mb-6"></div>
          <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded animate-pulse max-w-2xl mx-auto"></div>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-96 bg-slate-200 dark:bg-slate-700 rounded-2xl animate-pulse"></div>
          ))}
        </div>
      </div>
    </section>
  ),
  ssr: false, // Disable SSR for this component to improve initial load
});

const DynamicSkills = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Skills />
    </Suspense>
  );
};

export default DynamicSkills;