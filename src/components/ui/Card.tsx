import * as React from 'react';
import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'overflow-hidden rounded-2xl border border-neutral-900/10 bg-neutral-50',
        className
      )}
      {...props}
    />
  )
);
Card.displayName = 'Card';

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
  )
);
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('text-base leading-none font-semibold tracking-tight', className)}
      {...props}
    />
  )
);
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn('', className)} {...props} />
);
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn('p-2', className)} {...props} />
);
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center p-6 pt-0', className)} {...props} />
  )
);
CardFooter.displayName = 'CardFooter';

interface CardImageProps extends Omit<ImageProps, 'alt'> {
  alt: string;
  aspectRatio?: 'square' | '16:9' | '4:3' | '3:2' | 'auto';
  overlay?: boolean;
  className?: string;
}

const CardImage = React.forwardRef<HTMLDivElement, CardImageProps>(
  ({ className, src, alt, aspectRatio = '16:9', overlay = false, ...props }, ref) => {
    const aspectRatioClass = {
      square: 'aspect-square',
      '16:9': 'aspect-video',
      '4:3': 'aspect-4/3',
      '3:2': 'aspect-3/2',
      auto: 'aspect-auto',
    }[aspectRatio];

    return (
      <div ref={ref} className={cn('relative', aspectRatioClass, className)}>
        <Image
          src={src}
          alt={alt}
          fill
          className={cn('object-cover', overlay && 'brightness-75')}
          {...props}
        />
      </div>
    );
  }
);
CardImage.displayName = 'CardImage';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, CardImage };
