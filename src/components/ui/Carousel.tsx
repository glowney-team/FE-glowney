'use client';

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

interface Slide {
  image: string;
  title: string;
  text: string;
}

interface CarouselProps {
  slides: Slide[];
  options?: Parameters<typeof useEmblaCarousel>[0];
  autoplay?: boolean;
  autoplayInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({
  slides,
  options,
  autoplay = true,
  autoplayInterval = 5000,
}) => {
  const [carouselRef, embla] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoplay);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla]);

  const scrollNext = useCallback(() => {
    if (embla && embla.canScrollNext() && isPlaying) {
      embla.scrollNext();
    }
  }, [embla, isPlaying]);

  useEffect(() => {
    if (!embla) return;

    embla.on('select', onSelect);
    embla.on('pointerDown', () => setIsPlaying(false));
    embla.on('pointerUp', () => setIsPlaying(autoplay));

    onSelect();
  }, [embla, onSelect, autoplay]);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(scrollNext, autoplayInterval);
    return () => clearInterval(interval);
  }, [autoplay, autoplayInterval, scrollNext]);

  return (
    <div className="relative mx-auto w-full overflow-hidden rounded-xl" ref={carouselRef}>
      <div className="flex">
        {slides.map((slide, index) => (
          <div key={index} className="relative aspect-[16/7] flex-[0_0_100%]">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="h-full w-full rounded-xl object-cover"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-black/60 to-transparent"></div>
            <div className="absolute top-1/2 left-6 -translate-y-1/2 text-white">
              <h3 className="text-xl font-semibold">{slide.title}</h3>
              <p className="text-base text-neutral-50/50">{slide.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute right-6 bottom-4 w-fit rounded-full bg-neutral-900/40 px-2 text-sm text-neutral-300">
        {selectedIndex + 1} / {slides.length}
      </div>
    </div>
  );
};

export default Carousel;
