import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import {
  Carousel,
  CarouselContent,
  CarouselIndicator,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/Carousel';
import Image from 'next/image';

export default function MainCarousel() {
  const slidesData = [
    { image: '/images/banner1.png', title: '첫 번째 슬라이드', text: '설명 텍스트 1' },
    { image: '/images/banner2.png', title: '두 번째 슬라이드', text: '설명 텍스트 2' },
    { image: '/images/banner3.png', title: '세 번째 슬라이드', text: '설명 텍스트 3' },
    { image: '/images/banner2.png', title: '두 번째 슬라이드', text: '설명 텍스트 2' },
    { image: '/images/banner3.png', title: '세 번째 슬라이드', text: '설명 텍스트 3' },
    { image: '/images/banner1.png', title: '첫 번째 슬라이드', text: '설명 텍스트 1' },
    { image: '/images/banner2.png', title: '두 번째 슬라이드', text: '설명 텍스트 2' },
    { image: '/images/banner3.png', title: '세 번째 슬라이드', text: '설명 텍스트 3' },
    { image: '/images/banner2.png', title: '두 번째 슬라이드', text: '설명 텍스트 2' },
    { image: '/images/banner3.png', title: '세 번째 슬라이드', text: '설명 텍스트 3' },
    { image: '/images/banner1.png', title: '첫 번째 슬라이드', text: '설명 텍스트 1' },
    { image: '/images/banner2.png', title: '두 번째 슬라이드', text: '설명 텍스트 2' },
  ];
  const plugin = React.useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));
  return (
    <Carousel
      className="aspect-[3/1] h-full w-full overflow-hidden rounded-2xl"
      plugins={[plugin.current]}
      onPointerDown={() => plugin.current.stop()}
      onPointerUp={() => plugin.current.play()}
      opts={{ loop: true }}
    >
      <CarouselContent>
        {slidesData.map((slide, index) => (
          <CarouselItem key={index} className="relative">
            <Image
              src={slide.image}
              alt={slide.title}
              width={500}
              height={300}
              priority
              unoptimized={false}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
            <div className="absolute top-1/2 left-8 -translate-y-1/2 text-white">
              <h3 className="text-xl font-semibold">{slide.title}</h3>
              <p className="text-base text-neutral-50/50">{slide.text}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      <CarouselIndicator totalSlides={slidesData.length} />
    </Carousel>
  );
}
