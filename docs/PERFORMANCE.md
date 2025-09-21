# 🚀 Performance Scripts Documentation
## Vedant Badgujar's Portfolio Performance Suite

### Quick Start
```bash
# Run comprehensive performance analysis
npm run perf-all

# Check mobile performance
npm run lighthouse-mobile

# Check desktop performance
npm run lighthouse-desktop

# Monitor bundle size
npm run bundle-check

# Analyze bundle composition
npm run analyze
```

## 📋 Available Scripts

### Core Performance Scripts

| Script | Description | Output |
|--------|-------------|--------|
| `npm run perf-all` | Complete performance analysis | Multiple reports |
| `npm run lighthouse-mobile` | Mobile performance audit | `reports/mobile-report.html` |
| `npm run lighthouse-desktop` | Desktop performance audit | `reports/desktop-report.html` |
| `npm run bundle-check` | Bundle size monitoring | `reports/optimization-status.json` |
| `npm run analyze` | Bundle composition analysis | Opens in browser |
| `npm run size-limit` | Quick size check | Terminal output |

### Development Scripts

| Script | Description | Use Case |
|--------|-------------|----------|
| `npm run type-check` | TypeScript validation | Before deployment |
| `npm run lint` | Code quality check | Development |
| `npm run build` | Production build | Deployment prep |

## 🎯 Performance Targets

### Mobile Performance (< 768px)
- **Performance Score**: > 90
- **First Contentful Paint**: < 1.8s
- **Time to Interactive**: < 3.8s
- **Cumulative Layout Shift**: < 0.1
- **Bundle Size**: < 250KB (main)

### Desktop Performance (≥ 1024px)
- **Performance Score**: > 95
- **First Contentful Paint**: < 1.2s
- **Time to Interactive**: < 2.5s
- **Cumulative Layout Shift**: < 0.05
- **Bundle Size**: < 350KB (main)

### Tablet Performance (768px - 1023px)
- **Performance Score**: > 92
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.0s
- **Bundle Size**: < 300KB (main)

## 🔧 Device-Specific Optimizations

### Mobile Optimizations Applied
```javascript
// Reduced particle count
particleCount: 8 // vs 20 on desktop

// Faster animations
animationDuration: 0.6s // vs 1s on desktop

// Image optimization
quality: 60-70% // vs 80% on desktop
width: Math.min(window.innerWidth * devicePixelRatio, 600)

// Features disabled for performance
parallaxEffects: false
complexAnimations: false // on low-power devices
```

### Tablet Optimizations Applied
```javascript
// Balanced performance
particleCount: 12
animationDuration: 0.8s
quality: 75%
complexAnimations: true // if not low-power device
```

### Desktop Optimizations Applied
```javascript
// Full feature set
particleCount: 20
animationDuration: 1s
quality: 80%
parallaxEffects: true
complexAnimations: true
```

## 📊 Performance Monitoring

### Real-time Monitoring (Development)
```javascript
// Core Web Vitals tracked:
- Largest Contentful Paint (LCP)
- First Input Delay (FID)
- Cumulative Layout Shift (CLS)
- First Contentful Paint (FCP)
- Time to First Byte (TTFB)

// Memory monitoring
- JavaScript heap usage
- Memory leaks detection
- Long task detection
```

### Automated Checks
```bash
# Run before deployment
npm run type-check
npm run lint
npm run perf-all

# CI/CD Integration
# Add to your pipeline:
npm run build
npm run lighthouse-mobile
npm run bundle-check
```

## 🏃‍♂️ Running Performance Tests

### 1. Start Development Server
```bash
npm run dev
# Server runs on http://localhost:3001
```

### 2. Run Mobile Performance Test
```bash
npm run lighthouse-mobile
# Generates: reports/mobile-report.html
```

### 3. Run Desktop Performance Test
```bash
npm run lighthouse-desktop
# Generates: reports/desktop-report.html
```

### 4. Check Bundle Size
```bash
npm run bundle-check
# Generates: reports/optimization-status.json
```

### 5. Analyze Bundle Composition
```bash
npm run analyze
# Opens bundle analyzer in browser
```

## 📈 Interpreting Results

### Lighthouse Scores
- **90-100**: Excellent
- **80-89**: Good
- **70-79**: Needs improvement
- **0-69**: Poor

### Core Web Vitals
- **LCP**: < 2.5s (Good), 2.5-4s (Needs work), > 4s (Poor)
- **FID**: < 100ms (Good), 100-300ms (Needs work), > 300ms (Poor)
- **CLS**: < 0.1 (Good), 0.1-0.25 (Needs work), > 0.25 (Poor)

### Bundle Size Guidelines
- **Main bundle**: < 250KB
- **Total bundle**: < 500KB
- **Individual chunks**: < 150KB
- **Third-party code**: < 100KB

## 🛠️ Optimization Tips

### If Performance Score < 90
1. Check bundle size with `npm run analyze`
2. Implement code splitting
3. Lazy load non-critical components
4. Optimize images (WebP/AVIF)
5. Reduce JavaScript execution time

### If Bundle Size Too Large
1. Use dynamic imports
2. Tree shake unused code
3. Optimize dependencies
4. Split vendor chunks
5. Remove unused CSS

### If CLS > 0.1
1. Set image dimensions
2. Reserve space for ads
3. Use CSS aspect-ratio
4. Avoid inserting content above existing content

## 🔄 Continuous Monitoring

### Pre-deployment Checklist
- [ ] Performance score > 90 (mobile)
- [ ] Performance score > 95 (desktop)
- [ ] Bundle size within limits
- [ ] No TypeScript errors
- [ ] No linting errors
- [ ] CLS < 0.1
- [ ] LCP < 2.5s

### Monthly Performance Review
1. Run full performance audit
2. Compare with previous results
3. Update performance budget if needed
4. Optimize based on new findings
5. Update documentation

## 📞 Troubleshooting

### Common Issues

**\"Lighthouse not found\"**
```bash
npm install -g lighthouse
```

**\"Reports directory not found\"**
```bash
mkdir reports
```

**\"Build failed\"**
```bash
npm run type-check
npm run lint
```

**\"Performance score suddenly dropped\"**
1. Check for new dependencies
2. Verify image optimizations
3. Check for memory leaks
4. Review recent code changes

---

**Last Updated**: January 2024  
**Maintainer**: Vedant Badgujar  
**Portfolio**: [AI/ML Enthusiast & Tech Innovator]