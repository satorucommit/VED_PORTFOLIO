import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

// Ultra-optimized font loading with preload and font-display swap
const inter = Inter({ 
  subsets: ['latin'], 
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: 'Vedant Badgujar - Portfolio',
  description: 'AI/ML Enthusiast | Tech Innovator | AI Prompt Specialist - Ultra Performance Mode',
  other: {
    'autocomplete': 'off',
    'data-no-extensions': 'true',
    'data-fdprocessedid': 'false',
    'format-detection': 'telephone=no',
    'msapplication-tap-highlight': 'no',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'theme-color': '#1e293b',
  },
};

// Separate viewport export for Next.js 15.5.3 compatibility
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      className="scroll-smooth critical-gpu" 
      suppressHydrationWarning
    >
      <head>
        {/* Critical resource hints for Lighthouse performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        
        {/* Critical meta tags for performance */}
        <meta name="robots" content="index,follow" />
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        
        {/* Anti-extension meta tags */}
        <meta name="disable-auto-fill" content="true" />
        <meta name="auto-complete" content="off" />
        <meta name="fdprocessedid" content="disabled" />
        <meta name="form-detection" content="off" />
        
        {/* Performance monitoring script */}
        {process.env.NODE_ENV === 'development' && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.performance.mark('layout-start');
                console.log('🚀 Ultra Performance Mode - Lighthouse Optimized');
              `,
            }}
          />
        )}
      </head>
      <body 
        className={`${inter.className} antialiased critical-gpu ultra-scroll text-optimized`} 
        suppressHydrationWarning
      >
        <div className="development">
          {children}
        </div>
        
        {/* Performance measurement */}
        {process.env.NODE_ENV === 'development' && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.addEventListener('load', () => {
                  window.performance.mark('layout-end');
                  window.performance.measure('layout-duration', 'layout-start', 'layout-end');
                  console.log('⚡ Layout performance measured');
                });
              `,
            }}
          />
        )}
      </body>
    </html>
  );
}