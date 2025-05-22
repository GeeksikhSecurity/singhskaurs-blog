import React, { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: 'fade-in' | 'slide-up' | 'slide-in' | 'zoom-in';
  delay?: number;
  threshold?: number;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = 'fade-in',
  delay = 0,
  threshold = 0.1,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const animationClasses = {
    'fade-in': 'opacity-0 transition-opacity duration-1000',
    'slide-up': 'opacity-0 translate-y-10 transition-all duration-700',
    'slide-in': 'opacity-0 -translate-x-10 transition-all duration-700',
    'zoom-in': 'opacity-0 scale-95 transition-all duration-700',
  };

  const visibleClasses = {
    'fade-in': 'opacity-100',
    'slide-up': 'opacity-100 translate-y-0',
    'slide-in': 'opacity-100 translate-x-0',
    'zoom-in': 'opacity-100 scale-100',
  };

  return (
    <div
      ref={sectionRef}
      className={`${className} ${animationClasses[animation]} ${isVisible ? visibleClasses[animation] : ''}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;