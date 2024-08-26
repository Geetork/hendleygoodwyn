'use client';

import {
  Footer,
  Header,
  Hero,
  Services,
  Team,
  Testimonials,
} from '@/components';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('id');
          if (sectionId) {
            history.replaceState(null, '', `/#${sectionId}`);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.6,
    });

    const sectionElements = document.querySelectorAll('section');
    sectionElements.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Hero />
      <Services fullList={false} />
      <Team />
      <Testimonials />
    </>
  );
}
