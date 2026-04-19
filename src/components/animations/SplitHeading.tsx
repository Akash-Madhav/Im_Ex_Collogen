'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap-config';
import SplitType from 'split-type';

interface SplitHeadingProps {
  text: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  delay?: number;
  animateOnScroll?: boolean;
}

/**
 * SplitHeading - Animated text reveal using SplitType and GSAP.
 */
export const SplitHeading: React.FC<SplitHeadingProps> = ({
  text,
  tag: Tag = 'h2',
  className = '',
  delay = 0,
  animateOnScroll = true,
}) => {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!headingRef.current) return;

    const split = new SplitType(headingRef.current, {
      types: Tag === 'h1' ? 'chars' : 'words',
      tagName: 'span'
    });

    const ctx = gsap.context(() => {
      const animation = gsap.from(Tag === 'h1' ? split.chars : split.words, {
        yPercent: 100,
        opacity: 0,
        stagger: Tag === 'h1' ? 0.05 : 0.08,
        duration: 0.8,
        ease: 'power4.out',
        delay: delay,
        scrollTrigger: animateOnScroll ? {
          trigger: headingRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
        } : undefined
      });
    }, headingRef);

    return () => {
      ctx.revert();
      split.revert();
    };
  }, [text, Tag, delay, animateOnScroll]);

  return (
    <div className="overflow-hidden py-1">
      <Tag ref={headingRef} className={className}>
        {text}
      </Tag>
    </div>
  );
};
