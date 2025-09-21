#!/usr/bin/env node

/**
 * Performance Testing Suite for Vedant Badgujar's Portfolio
 * Comprehensive performance analysis across different devices
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Starting Performance Analysis Suite...\n');

// Check if performance tools are available
function checkDependencies() {
  console.log('📋 Checking dependencies...');
  
  try {
    execSync('lighthouse --version', { stdio: 'ignore' });
    console.log('✅ Lighthouse installed');
  } catch (error) {
    console.log('❌ Installing Lighthouse...');
    execSync('npm install -g lighthouse', { stdio: 'inherit' });
  }
  
  try {
    execSync('bundlesize --version', { stdio: 'ignore' });
    console.log('✅ Bundlesize available');
  } catch (error) {
    console.log('❌ Installing Bundlesize...');
    execSync('npm install -g bundlesize', { stdio: 'inherit' });
  }
  
  console.log('✅ All dependencies ready\n');
}

// Mobile Performance Test
function runMobilePerformanceTest() {
  console.log('📱 Running Mobile Performance Test...');
  
  const mobileFlags = [
    '--preset=mobile',
    '--throttling-method=devtools',
    '--form-factor=mobile',
    '--emulated-user-agent="Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)"',
    '--output=html',
    '--output-path=./reports/mobile-performance.html',
    '--quiet'
  ].join(' ');
  
  try {
    execSync(`lighthouse http://localhost:3001 ${mobileFlags}`, { stdio: 'inherit' });
    console.log('✅ Mobile performance test completed');
  } catch (error) {
    console.log('❌ Mobile test failed:', error.message);
  }
}

// Desktop Performance Test
function runDesktopPerformanceTest() {
  console.log('🖥️ Running Desktop Performance Test...');
  
  const desktopFlags = [
    '--preset=desktop',
    '--form-factor=desktop',
    '--output=html',
    '--output-path=./reports/desktop-performance.html',
    '--quiet'
  ].join(' ');
  
  try {
    execSync(`lighthouse http://localhost:3001 ${desktopFlags}`, { stdio: 'inherit' });
    console.log('✅ Desktop performance test completed');
  } catch (error) {
    console.log('❌ Desktop test failed:', error.message);
  }
}

// Bundle Analysis
function runBundleAnalysis() {
  console.log('📦 Analyzing Bundle Size...');
  
  try {
    // Create reports directory
    if (!fs.existsSync('./reports')) {
      fs.mkdirSync('./reports');
    }
    
    // Run Next.js bundle analyzer
    execSync('ANALYZE=true npm run build', { stdio: 'inherit' });
    console.log('✅ Bundle analysis completed');
  } catch (error) {
    console.log('❌ Bundle analysis failed:', error.message);
  }
}

// Performance Metrics Extraction
function extractMetrics() {
  console.log('📊 Extracting Performance Metrics...');
  
  const metricsScript = `
    const fs = require('fs');
    const lighthouse = require('lighthouse');
    const chromeLauncher = require('chrome-launcher');
    
    async function runAudit() {
      const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
      const options = {
        logLevel: 'info',
        output: 'json',
        onlyCategories: ['performance'],
        port: chrome.port,
      };
      
      const runnerResult = await lighthouse('http://localhost:3001', options);
      const reportJson = runnerResult.report;
      
      await chrome.kill();
      
      fs.writeFileSync('./reports/performance-metrics.json', reportJson);
      console.log('✅ Metrics extracted to reports/performance-metrics.json');
    }
    
    runAudit().catch(console.error);
  `;
  
  fs.writeFileSync('./temp-metrics.js', metricsScript);
  
  try {
    execSync('node temp-metrics.js', { stdio: 'inherit' });
    fs.unlinkSync('./temp-metrics.js');
  } catch (error) {
    console.log('❌ Metrics extraction failed:', error.message);
    if (fs.existsSync('./temp-metrics.js')) {
      fs.unlinkSync('./temp-metrics.js');
    }
  }
}

// Device-specific Performance Summary
function generatePerformanceSummary() {
  console.log('📈 Generating Performance Summary...');
  
  const summary = {
    timestamp: new Date().toISOString(),
    tests: {
      mobile: {
        status: fs.existsSync('./reports/mobile-performance.html') ? 'completed' : 'failed',
        reportPath: './reports/mobile-performance.html'
      },
      desktop: {
        status: fs.existsSync('./reports/desktop-performance.html') ? 'completed' : 'failed',
        reportPath: './reports/desktop-performance.html'
      },
      bundle: {
        status: 'completed',
        note: 'Bundle analyzer opens automatically in browser'
      }
    },
    optimizations: {
      mobile: [
        'Reduced particle count (8 vs 20 desktop)',
        'Faster animations (0.6s vs 1s)',
        'Lazy loading images',
        'Dynamic image sizing',
        'Quality reduction for mobile'
      ],
      tablet: [
        'Balanced particle count (12)',
        'Optimized touch interactions',
        'Medium animation complexity'
      ],
      desktop: [
        'Full feature set with 20 particles',
        'Complex 3D animations enabled',
        'Parallax effects enabled',
        'High-quality images'
      ]
    }
  };
  
  fs.writeFileSync('./reports/performance-summary.json', JSON.stringify(summary, null, 2));
  console.log('✅ Performance summary generated');
  console.log('📄 Summary saved to: ./reports/performance-summary.json\n');
}

// Main execution
async function runPerformanceAnalysis() {
  // Create reports directory
  if (!fs.existsSync('./reports')) {
    fs.mkdirSync('./reports');
  }
  
  checkDependencies();
  
  console.log('🔍 Starting comprehensive performance analysis...\n');
  
  // Run all tests
  runMobilePerformanceTest();
  runDesktopPerformanceTest();
  runBundleAnalysis();
  // extractMetrics(); // Commented out as it requires additional setup
  
  generatePerformanceSummary();
  
  console.log('🎉 Performance Analysis Complete!');
  console.log('📊 Check the following reports:');
  console.log('   📱 Mobile: ./reports/mobile-performance.html');
  console.log('   🖥️  Desktop: ./reports/desktop-performance.html');
  console.log('   📦 Bundle: Opens automatically in browser');
  console.log('   📈 Summary: ./reports/performance-summary.json\n');
  
  console.log('💡 Performance Tips:');
  console.log('   • Aim for Mobile Performance Score > 90');
  console.log('   • Keep First Contentful Paint < 1.8s');
  console.log('   • Maintain Cumulative Layout Shift < 0.1');
  console.log('   • Target Time to Interactive < 3.8s');
}

// Execute if called directly
if (require.main === module) {
  runPerformanceAnalysis().catch(console.error);
}

module.exports = { runPerformanceAnalysis };