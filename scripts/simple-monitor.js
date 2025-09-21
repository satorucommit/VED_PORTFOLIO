#!/usr/bin/env node

/**
 * ULTRA PERFORMANCE Bundle Monitor
 * For Vedant Badgujar's Portfolio - Maximum Performance Mode
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function ultraPerformanceCheck() {
  console.log('🚀 ULTRA PERFORMANCE MODE - Bundle Optimization Check');
  console.log('⚡ Target: < 150KB main bundle, < 300KB total');
  
  try {
    // Ultra-fast build with maximum optimization
    console.log('📦 Building with ultra optimizations...');
    const buildResult = execSync('npm run build', { 
      encoding: 'utf8', 
      stdio: 'pipe',
      timeout: 60000 // 1 minute timeout
    });
    
    console.log('✅ Build completed successfully');
    
    // Quick bundle size analysis
    const nextDir = path.join(process.cwd(), '.next');
    if (fs.existsSync(nextDir)) {
      const staticDir = path.join(nextDir, 'static');
      if (fs.existsSync(staticDir)) {
        console.log('📊 Analyzing bundle sizes...');
        
        // Get chunk sizes
        const chunksDir = path.join(staticDir, 'chunks');
        if (fs.existsSync(chunksDir)) {
          const chunks = fs.readdirSync(chunksDir);
          let totalSize = 0;
          let mainSize = 0;
          
          chunks.forEach(chunk => {
            const chunkPath = path.join(chunksDir, chunk);
            const stats = fs.statSync(chunkPath);
            const sizeKB = (stats.size / 1024).toFixed(2);
            
            totalSize += stats.size;
            
            if (chunk.includes('main') || chunk.includes('pages/_app')) {
              mainSize += stats.size;
            }
            
            console.log(`  📄 ${chunk}: ${sizeKB} KB`);
          });
          
          const totalKB = (totalSize / 1024).toFixed(2);
          const mainKB = (mainSize / 1024).toFixed(2);
          
          console.log(`\n📈 PERFORMANCE SUMMARY:`);
          console.log(`   Main bundle: ${mainKB} KB ${mainKB < 150 ? '✅' : '❌'}`);
          console.log(`   Total size: ${totalKB} KB ${totalKB < 300 ? '✅' : '❌'}`);
          
          // Performance grade
          const grade = mainKB < 100 ? 'A+' : mainKB < 150 ? 'A' : mainKB < 200 ? 'B' : 'C';
          console.log(`   Performance Grade: ${grade}`);
        }
      }
    }
    
  } catch (error) {
    console.log('❌ Build failed:', error.message.split('\n')[0]);
    
    // Provide optimization suggestions
    console.log('\n💡 OPTIMIZATION SUGGESTIONS:');
    console.log('   • Check for unused dependencies');
    console.log('   • Implement code splitting');
    console.log('   • Optimize images and assets');
    console.log('   • Remove console.logs in production');
  }
}

function generateOptimizationReport() {
  const report = {
    timestamp: new Date().toISOString(),
    mode: 'ULTRA_PERFORMANCE',
    optimizations: {
      mobile: [
        'Ultra-minimal particles (3 max)',
        'Ultra-fast animations (0.3s)',
        'Aggressive lazy loading',
        'Ultra-low image quality (30%)',
        'Disabled all expensive effects',
        'Auto scroll behavior for performance'
      ],
      tablet: [
        'Reduced particle count (5-6)',
        'Balanced performance mode',
        'Medium image compression (35%)',
        'Selective effect disabling'
      ],
      desktop: [
        'Minimal particle count (8 max)',
        'Performance-first animations',
        'Optimized image quality (45%)',
        'Complex animations only when needed'
      ]
    },
    targets: {
      mobile: {
        bundle: '< 150KB',
        lcp: '< 1.5s',
        fcp: '< 1.0s',
        cls: '< 0.1'
      },
      desktop: {
        bundle: '< 200KB', 
        lcp: '< 1.0s',
        fcp: '< 0.8s',
        cls: '< 0.05'
      }
    }
  };
  
  if (!fs.existsSync('./reports')) {
    fs.mkdirSync('./reports');
  }
  
  fs.writeFileSync('./reports/ultra-performance-status.json', JSON.stringify(report, null, 2));
  console.log('📄 Ultra Performance Report saved to ./reports/ultra-performance-status.json');
}

// Main execution
console.log('🚀 ULTRA PERFORMANCE MONITOR Starting...');
ultraPerformanceCheck();
generateOptimizationReport();
console.log('✅ Ultra Performance check complete!');
console.log('\n🎯 NEXT STEPS:');
console.log('   • Run: npm run lighthouse-mobile');
console.log('   • Run: npm run lighthouse-desktop');
console.log('   • Monitor: npm run dev (check console for FPS/Memory)');
console.log('\n⚡ ULTRA PERFORMANCE MODE ACTIVE ⚡');