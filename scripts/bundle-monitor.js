#!/usr/bin/env node

/**
 * Bundle Size Monitor
 * Tracks bundle size changes and alerts when size increases significantly
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Bundle size thresholds (in KB)
const SIZE_LIMITS = {
  'main': 250,        // Main bundle
  'chunks': 150,      // Individual chunks
  'total': 500,       // Total bundle size
  'gzipped': 100      // Gzipped size
};

function getBundleStats() {
  console.log('📦 Analyzing current bundle sizes...');
  
  try {
    // Build the project first
    execSync('npm run build', { stdio: 'pipe' });
    
    const buildDir = path.join(process.cwd(), '.next/static/chunks');
    
    if (!fs.existsSync(buildDir)) {
      throw new Error('Build directory not found. Run npm run build first.');
    }
    
    const files = fs.readdirSync(buildDir);
    const jsFiles = files.filter(file => file.endsWith('.js'));
    
    const stats = {
      files: [],
      totalSize: 0,
      timestamp: new Date().toISOString()
    };
    
    jsFiles.forEach(file => {
      const filePath = path.join(buildDir, file);
      const stat = fs.statSync(filePath);
      const sizeKB = Math.round(stat.size / 1024);
      
      stats.files.push({
        name: file,
        size: sizeKB,
        path: filePath
      });
      
      stats.totalSize += sizeKB;
    });
    
    return stats;
  } catch (error) {
    console.error('❌ Failed to analyze bundle:', error.message);
    return null;
  }
}

function checkSizeLimits(stats) {
  console.log('🔍 Checking bundle size limits...');
  
  const warnings = [];
  const errors = [];
  
  // Check total bundle size
  if (stats.totalSize > SIZE_LIMITS.total) {
    errors.push(`Total bundle size (${stats.totalSize}KB) exceeds limit (${SIZE_LIMITS.total}KB)`);
  } else if (stats.totalSize > SIZE_LIMITS.total * 0.9) {
    warnings.push(`Total bundle size (${stats.totalSize}KB) is approaching limit (${SIZE_LIMITS.total}KB)`);
  }
  
  // Check individual files
  stats.files.forEach(file => {
    if (file.name.includes('main') && file.size > SIZE_LIMITS.main) {
      errors.push(`Main bundle (${file.name}) size (${file.size}KB) exceeds limit (${SIZE_LIMITS.main}KB)`);
    } else if (file.size > SIZE_LIMITS.chunks) {
      warnings.push(`Chunk (${file.name}) size (${file.size}KB) exceeds recommended limit (${SIZE_LIMITS.chunks}KB)`);
    }
  });
  
  return { warnings, errors };
}

function generateSizeReport(stats, checks) {
  console.log('📊 Generating bundle size report...');
  
  const report = {
    ...stats,
    checks,
    recommendations: [],
    status: checks.errors.length > 0 ? 'failed' : checks.warnings.length > 0 ? 'warning' : 'passed'
  };
  
  // Add recommendations based on file sizes
  const largeFiles = stats.files
    .filter(file => file.size > 50)
    .sort((a, b) => b.size - a.size);
  
  if (largeFiles.length > 0) {
    report.recommendations.push('Consider code splitting for large chunks');
    report.recommendations.push('Implement dynamic imports for heavy components');
    report.recommendations.push('Use tree shaking to remove unused code');
  }
  
  if (stats.totalSize > 300) {
    report.recommendations.push('Consider lazy loading non-critical components');
    report.recommendations.push('Optimize third-party dependencies');
  }
  
  // Save report
  if (!fs.existsSync('./reports')) {
    fs.mkdirSync('./reports');
  }
  
  fs.writeFileSync('./reports/bundle-size-report.json', JSON.stringify(report, null, 2));
  
  return report;
}

function displayResults(report) {
  console.log('\n📈 Bundle Size Analysis Results:');
  console.log('='.repeat(50));
  
  console.log(`📦 Total Bundle Size: ${report.totalSize}KB`);
  console.log(`📁 Number of Chunks: ${report.files.length}`);
  console.log(`🎯 Status: ${report.status.toUpperCase()}`);
  
  if (report.checks.errors.length > 0) {
    console.log('\n❌ ERRORS:');
    report.checks.errors.forEach(error => console.log(`   • ${error}`));
  }
  
  if (report.checks.warnings.length > 0) {
    console.log('\n⚠️  WARNINGS:');
    report.checks.warnings.forEach(warning => console.log(`   • ${warning}`));
  }
  
  console.log('\n📊 Largest Files:');
  report.files
    .sort((a, b) => b.size - a.size)
    .slice(0, 5)
    .forEach(file => {
      const status = file.size > 100 ? '🔴' : file.size > 50 ? '🟡' : '🟢';
      console.log(`   ${status} ${file.name}: ${file.size}KB`);
    });
  
  if (report.recommendations.length > 0) {
    console.log('\n💡 Recommendations:');
    report.recommendations.forEach(rec => console.log(`   • ${rec}`));
  }
  
  console.log(`\n📄 Detailed report saved to: ./reports/bundle-size-report.json`);
}

// Performance Budget Configuration
function createPerformanceBudget() {
  const budget = {
    budgets: [
      {
        path: "/**",
        timings: [
          {
            metric: "interactive",
            budget: 3000
          },
          {
            metric: "first-contentful-paint",
            budget: 1500
          }
        ],
        resourceSizes: [
          {
            resourceType: "script",
            budget: 500
          },
          {
            resourceType: "total",
            budget: 1000
          }
        ]
      }
    ]
  };
  
  fs.writeFileSync('./budget.json', JSON.stringify(budget, null, 2));
  console.log('💰 Performance budget created: ./budget.json');
}

// Main execution
function main() {
  console.log('🚀 Bundle Size Monitor for Vedant Badgujar\\'s Portfolio\n');
  
  const stats = getBundleStats();
  
  if (!stats) {
    process.exit(1);
  }
  
  const checks = checkSizeLimits(stats);
  const report = generateSizeReport(stats, checks);
  
  displayResults(report);
  createPerformanceBudget();
  
  // Exit with error code if there are size violations
  if (checks.errors.length > 0) {
    console.log('\n❌ Bundle size check failed!');
    process.exit(1);
  } else {
    console.log('\n✅ Bundle size check passed!');
    process.exit(0);
  }
}

if (require.main === module) {
  main();
}

module.exports = { getBundleStats, checkSizeLimits, generateSizeReport };