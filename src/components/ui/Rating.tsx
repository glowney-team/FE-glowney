import { StarIcon } from '@heroicons/react/24/solid';
import { cn } from '@/lib/utils';

interface RatingProps {
  rating: number;
  className?: string;
}

export default function Rating({ rating, className }: RatingProps) {
  return (
    <div className={cn('flex items-center gap-1 text-neutral-900', className)}>
      <StarIcon className="size-3" />
      <span className="font-medium">{rating.toFixed(1)}</span>
    </div>
  );
}
