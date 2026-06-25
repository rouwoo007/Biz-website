'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface HeroSlideshowProps {
  images: string[];
  interval?: number;
}

export default function HeroSlideshow({ images, interval = 5000 }: HeroSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const hasMultiple = images.length > 1;

  // Track the user's motion preference (and react to changes).
  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mql.matches);
    const onChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  // Auto-advance only when there are multiple slides, the user hasn't paused,
  // and they have not requested reduced motion.
  useEffect(() => {
    if (!hasMultiple || isPaused || prefersReducedMotion) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [hasMultiple, isPaused, prefersReducedMotion, images.length, interval]);

  const goTo = (index: number) => {
    setCurrentIndex((index + images.length) % images.length);
  };
  const goPrev = () => goTo(currentIndex - 1);
  const goNext = () => goTo(currentIndex + 1);

  // Auto-advance is active only when motion is allowed and not paused.
  const isAutoPlaying = hasMultiple && !prefersReducedMotion && !isPaused;

  return (
    <div
      className="absolute inset-0"
      role="group"
      aria-roledescription="carousel"
      aria-label="Commercial fitout showcase"
    >
      {images.map((src, index) => (
        <div
          key={src}
          role="group"
          aria-roledescription="slide"
          aria-label={`Slide ${index + 1} of ${images.length}`}
          aria-hidden={index !== currentIndex}
          className="absolute inset-0"
        >
          <Image
            src={src}
            alt={`Commercial fitout showcase ${index + 1}`}
            fill
            priority={index === 0}
            className={`object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100 animate-kenburns' : 'opacity-0'
            }`}
            sizes="100vw"
          />
        </div>
      ))}

      {hasMultiple && (
        <>
          {/* Live region announces the current slide to assistive tech */}
          <div className="sr-only" aria-live="polite">
            Slide {currentIndex + 1} of {images.length}
          </div>

          {/* Prev / Next / Pause controls */}
          <div className="absolute bottom-5 right-5 z-10 flex items-center gap-2">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous slide"
              className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-black/40 text-white backdrop-blur-sm hover:bg-black/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {!prefersReducedMotion && (
              <button
                type="button"
                onClick={() => setIsPaused((prev) => !prev)}
                aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
                aria-pressed={isPaused}
                className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-black/40 text-white backdrop-blur-sm hover:bg-black/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
              >
                {isAutoPlaying ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6 5h4v14H6V5zm8 0h4v14h-4V5z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8 5v14l11-7L8 5z" />
                  </svg>
                )}
              </button>
            )}

            <button
              type="button"
              onClick={goNext}
              aria-label="Next slide"
              className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-black/40 text-white backdrop-blur-sm hover:bg-black/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
