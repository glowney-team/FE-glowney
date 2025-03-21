'use client';

import * as React from 'react';
import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react';

import { cn } from '@/lib/utils';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: 'horizontal' | 'vertical';
  setApi?: (api: CarouselApi) => void;
}

interface CarouselContextProps {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: CarouselApi | null;
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  current: number;
  total: number;
  loop: boolean;
}

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />');
  }
  return context;
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ orientation = 'horizontal', opts, setApi, plugins, className, children, ...props }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === 'horizontal' ? 'x' : 'y',
        loop: opts?.loop ?? true,
      },
      plugins
    );

    const [carouselState, setCarouselState] = React.useState({
      current: 1,
      total: 0,
      canScrollPrev: false,
      canScrollNext: false,
    });

    const loop = React.useMemo(() => opts?.loop ?? true, [opts?.loop]);

    const updateCarouselState = React.useCallback(() => {
      if (!api) return;

      setCarouselState({
        current: api.selectedScrollSnap() + 1,
        total: api.scrollSnapList().length,
        canScrollPrev: api.canScrollPrev(),
        canScrollNext: api.canScrollNext(),
      });
    }, [api]);

    React.useEffect(() => {
      if (!api) return;

      updateCarouselState();
      api.on('select', updateCarouselState);

      return () => {
        api.off('select', updateCarouselState);
      };
    }, [api, updateCarouselState]);

    React.useEffect(() => {
      if (api && setApi) {
        setApi(api);
      }
    }, [api, setApi]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api,
          scrollPrev: () => api?.scrollPrev(),
          scrollNext: () => api?.scrollNext(),
          canScrollPrev: carouselState.canScrollPrev,
          canScrollNext: carouselState.canScrollNext,
          current: carouselState.current,
          total: carouselState.total,
          loop,
        }}
      >
        <div
          ref={ref}
          className={cn('group relative flex', className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  }
);
Carousel.displayName = 'Carousel';

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { overflow?: string }
>(({ className, overflow = 'hidden', ...props }, ref) => {
  const { carouselRef } = useCarousel();
  return (
    <div ref={carouselRef} className={cn(`w-full`, `overflow-${overflow}`)}>
      <div ref={ref} className={cn('flex h-full', className)} {...props} />
    </div>
  );
});
CarouselContent.displayName = 'CarouselContent';

interface CarouselGradientMaskProps extends React.HTMLAttributes<HTMLDivElement> {
  leftGradient?: string;
  rightGradient?: string;
  width?: string;
}

const CarouselGradientMask = React.forwardRef<HTMLDivElement, CarouselGradientMaskProps>(
  (
    {
      className,
      leftGradient = 'from-neutral-50  to-transparent to-20%',
      rightGradient = 'from-neutral-50  to-transparent to-20%',
      width = 'w-[100px]',
      ...props
    },
    ref
  ) => {
    const { canScrollPrev, canScrollNext, loop } = useCarousel();

    return (
      <>
        {(canScrollPrev || loop) && (
          <div
            ref={ref}
            className={cn(
              'pointer-events-none absolute inset-y-0 left-0',
              width,
              `bg-gradient-to-r ${leftGradient}`,
              className
            )}
            {...props}
          />
        )}
        {(canScrollNext || loop) && (
          <div
            className={cn(
              'pointer-events-none absolute inset-y-0 right-0',
              width,
              `bg-gradient-to-l ${rightGradient}`,
              className
            )}
          />
        )}
      </>
    );
  }
);
CarouselGradientMask.displayName = 'CarouselGradientMask';

const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn('min-w-0 shrink-0 grow-0 basis-full', className)}
      {...props}
    />
  )
);
CarouselItem.displayName = 'CarouselItem';

interface CarouselNavigationButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  direction: 'prev' | 'next';
}

const CarouselNavigationButton = React.forwardRef<HTMLButtonElement, CarouselNavigationButtonProps>(
  ({ className, direction, ...props }, ref) => {
    const { scrollPrev, scrollNext, canScrollPrev, canScrollNext, loop } = useCarousel();

    const isNext = direction === 'next';
    const canScroll = isNext ? canScrollNext : canScrollPrev;
    const scroll = isNext ? scrollNext : scrollPrev;

    if (!canScroll && !loop) return null;

    return (
      <button
        ref={ref}
        className={cn(
          'absolute flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-neutral-950/50 opacity-0 shadow-md backdrop-blur-xs transition-opacity duration-200 group-hover:opacity-100',
          isNext ? 'right-0' : 'left-0',
          'top-1/2 -translate-y-1/2',
          !canScroll && 'hidden',
          className
        )}
        onClick={scroll}
        {...props}
      >
        {isNext ? (
          <ChevronRightIcon className="size-5 text-gray-300" />
        ) : (
          <ChevronLeftIcon className="size-5 text-gray-300" />
        )}
        <span className="sr-only">{isNext ? 'Next' : 'Previous'} slide</span>
      </button>
    );
  }
);
CarouselNavigationButton.displayName = 'CarouselNavigationButton';

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => <CarouselNavigationButton ref={ref} direction="prev" {...props} />);
CarouselPrevious.displayName = 'CarouselPrevious';

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => <CarouselNavigationButton ref={ref} direction="next" {...props} />);
CarouselNext.displayName = 'CarouselNext';

interface CarouselIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  totalSlides: number;
}

const CarouselIndicator = React.forwardRef<HTMLDivElement, CarouselIndicatorProps>(
  ({ className, totalSlides, ...props }, ref) => {
    const { current } = useCarousel();
    return (
      <div
        ref={ref}
        className={cn(
          'absolute right-3 bottom-3 rounded-full bg-black/50 px-2 py-1 text-xs text-neutral-50/50 backdrop-blur-xs',
          className
        )}
        {...props}
      >
        {current} / {totalSlides}
      </div>
    );
  }
);
CarouselIndicator.displayName = 'CarouselIndicator';

interface CarouselPaginationDotsProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const CarouselPaginationDots = React.forwardRef<HTMLDivElement, CarouselPaginationDotsProps>(
  ({ className, ...props }, ref) => {
    const { api, current, total } = useCarousel();

    const visibleDots = React.useMemo(() => Array.from({ length: total }, (_, i) => i), [total]);

    const getDotStyle = React.useCallback(
      (index: number) => {
        const currentIndex = current - 1;
        const visibleRange = getVisibleRange(currentIndex, total);

        const isFirstVisible = index === visibleRange.start;
        const isLastVisible = index === visibleRange.end;
        const isCurrent = current === index + 1;

        const hasMorePrev = visibleRange.start > 0;
        const hasMoreNext = visibleRange.end < total - 1;

        if (isCurrent) return 'scale-100';
        if (isFirstVisible && hasMorePrev) return 'scale-50';
        if (isLastVisible && hasMoreNext) return 'scale-50';
        return 'scale-75';
      },
      [current, total]
    );

    const translateX = React.useMemo(() => {
      if (total <= 5) return 0;

      const dotWidth = 16;
      const currentIndex = current - 1;

      if (currentIndex <= 1) return 0;
      if (currentIndex >= total - 2) return -(total - 5) * dotWidth;
      return -(currentIndex - 2) * dotWidth;
    }, [current, total]);

    return (
      <div ref={ref} className="absolute bottom-2 left-1/2 mt-4 -translate-x-1/2" {...props}>
        <div className="w-[80px] overflow-hidden">
          <div
            className="flex space-x-2 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(${translateX}px)` }}
          >
            {visibleDots.map((index) => (
              <button
                key={index}
                className={cn(
                  'h-2 w-2 shrink-0 rounded-full transition-all duration-500 ease-in-out',
                  getDotStyle(index),
                  current === index + 1 ? 'bg-neutral-50' : 'bg-neutral-50/50',
                  className
                )}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
);
CarouselPaginationDots.displayName = 'CarouselPaginationDots';

// 유틸리티 함수
function getVisibleRange(currentIndex: number, total: number) {
  if (currentIndex <= 1) {
    return { start: 0, end: Math.min(4, total - 1) };
  }
  if (currentIndex >= total - 2) {
    return { start: total - 5, end: total - 1 };
  }
  return { start: currentIndex - 2, end: currentIndex + 2 };
}

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselIndicator,
  CarouselPaginationDots,
  CarouselGradientMask,
};
