# Animation System Setup Guide

This guide will help you set up beautiful scroll-based animations for your Whats Poppin website using Framer Motion.

## 🚀 Installation

First, install Framer Motion:

```bash
npm install framer-motion
# or
yarn add framer-motion
# or
bun add framer-motion
```

## 📁 File Structure

The animation system consists of these files:

```
src/
├── components/
│   └── animations/
│       ├── ScrollAnimation.tsx      # Reusable scroll-triggered animations
│       ├── ParallaxSection.tsx      # Parallax scrolling effects
│       ├── StaggeredAnimation.tsx   # Staggered children animations
│       └── index.ts                 # Export all animation components
├── hooks/
│   └── useReducedMotion.ts          # Accessibility hook for reduced motion
└── lib/
    └── animation-config.ts          # Centralized animation configuration
```

## 🎯 Usage Examples

### 1. Basic Scroll Animation

```tsx
import { ScrollAnimation } from '@/components/animations';

<ScrollAnimation animation="fadeIn" delay={0.2}>
  <h1>This will fade in on scroll</h1>
</ScrollAnimation>
```

### 2. Staggered Animations

```tsx
import { StaggeredAnimation } from '@/components/animations';

<StaggeredAnimation animation="slideUp" staggerDelay={0.1}>
  {[<div>Item 1</div>, <div>Item 2</div>, <div>Item 3</div>]}
</StaggeredAnimation>
```

### 3. Parallax Effects

```tsx
import { ParallaxSection } from '@/components/animations';

<ParallaxSection speed={0.5}>
  <div>This will move slower than scroll</div>
</ParallaxSection>
```

### 4. Direct Framer Motion Usage

```tsx
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const MyComponent = () => {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: prefersReducedMotion ? 0.3 : 0.6 
      }}
      viewport={{ once: true, threshold: 0.1 }}
    >
      Content here
    </motion.div>
  );
};
```

## 🎨 Available Animation Types

### ScrollAnimation Props
- `animation`: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleUp' | 'parallax'
- `delay`: number (seconds)
- `duration`: number (seconds)
- `threshold`: number (0-1, viewport threshold)
- `className`: string
- `style`: CSSProperties

### StaggeredAnimation Props
- `children`: ReactNode[]
- `staggerDelay`: number (seconds between each child)
- `animation`: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleUp'
- `className`: string

### ParallaxSection Props
- `children`: ReactNode
- `speed`: number (parallax speed multiplier)
- `className`: string
- `style`: CSSProperties

## ♿ Accessibility Features

The animation system automatically respects user's `prefers-reduced-motion` setting:

- **Reduced Motion**: Animations are simplified to basic opacity changes
- **Normal Motion**: Full animations with smooth transitions
- **Automatic Detection**: Uses the `useReducedMotion` hook

## 🎭 Animation Variants

### Fade Animations
- `fadeIn`: Simple opacity transition
- `fadeInUp`: Fade in from bottom
- `fadeInDown`: Fade in from top
- `fadeInLeft`: Fade in from left
- `fadeInRight`: Fade in from right

### Slide Animations
- `slideUp`: Slide up from bottom
- `slideDown`: Slide down from top
- `slideLeft`: Slide in from left
- `slideRight`: Slide in from right

### Scale Animations
- `scaleIn`: Scale up from 0.8 to 1.0
- `scaleUp`: Scale up with fade

## 🔧 Customization

### Animation Configuration

Edit `src/lib/animation-config.ts` to customize:

- Easing functions
- Duration presets
- Animation variants
- Hover effects
- Page transitions

### Custom Animation Variants

```tsx
const customVariants = {
  hidden: { opacity: 0, rotate: -180 },
  visible: { 
    opacity: 1, 
    rotate: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

<motion.div
  variants={customVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  Custom animated content
</motion.div>
```

## 📱 Mobile Optimization

The animation system is optimized for mobile devices:

- Reduced animation complexity on smaller screens
- Touch-friendly hover states
- Performance-optimized transitions
- Responsive animation timing

## 🎯 Best Practices

1. **Use `once: true`** for scroll animations to prevent re-triggering
2. **Set appropriate thresholds** (0.1-0.3) for scroll detection
3. **Respect reduced motion** preferences for accessibility
4. **Keep animations subtle** - less is often more
5. **Test on mobile** devices for performance
6. **Use `AnimatePresence`** for mounting/unmounting animations

## 🚀 Performance Tips

1. **Use `transform` and `opacity`** for best performance
2. **Avoid animating layout properties** like width/height
3. **Use `will-change`** sparingly and only when needed
4. **Batch animations** using stagger effects
5. **Lazy load** heavy animations

## 🔍 Debugging

Enable Framer Motion dev tools:

```tsx
import { LazyMotion, domAnimation } from 'framer-motion';

<LazyMotion features={domAnimation}>
  <App />
</LazyMotion>
```

## 📚 Additional Resources

- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Animation Best Practices](https://www.framer.com/motion/best-practices/)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html)

---

Your website now has beautiful, performant, and accessible animations! 🎉 