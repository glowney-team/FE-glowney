import { useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useRef, useState, MouseEvent } from 'react';

// 테스트용 아이콘 import
import FireIcon from '@/icons/category/fire.svg';
import EyeIcon from '@/icons/category/eye.svg';
import NoseIcon from '@/icons/category/nose.svg';
import SkinIcon from '@/icons/category/skin.svg';
import BreastIcon from '@/icons/category/breast.svg';
import BodyIcon from '@/icons/category/body.svg';
import MouthIcon from '@/icons/category/mouth.svg';
import { Link, usePathname } from '@/i18n/navigation';

const treatmentCategories = [
  { name: '전체', slug: '', icon: FireIcon },
  { name: '눈', slug: 'eyes', icon: EyeIcon },
  { name: '코', slug: 'nose', icon: NoseIcon },
  { name: '얼굴형', slug: 'face-contour', icon: FireIcon },
  { name: '피부', slug: 'skin', icon: SkinIcon },
  { name: '가슴', slug: 'breast', icon: BreastIcon },
  { name: '체형', slug: 'body-shape', icon: BodyIcon },
  { name: '입', slug: 'lips', icon: MouthIcon },
  { name: '머리', slug: 'hair', icon: FireIcon },
];

export const Category = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const selected = searchParams.get('category') || '';

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);

  const handleMouseDown = (e: MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
    setDragDistance(0);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX;
    const moveDistance = x - startX;
    const scrollSpeed = 1.5; // 드래그 감도 조절
    setDragDistance(Math.abs(moveDistance));

    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - moveDistance * scrollSpeed;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <nav className="sticky top-15 z-30 w-full border-b border-neutral-200 bg-neutral-50">
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
        className={cn(
          'mx-auto flex max-w-screen-xl cursor-grab gap-1 overflow-x-auto px-4 py-2 select-none [&::-webkit-scrollbar]:hidden',
          isDragging && 'cursor-grabbing'
        )}
      >
        {treatmentCategories.map((category) => {
          const isSelected = category.slug === selected;
          const Icon = category.icon;

          return (
            <Link
              key={category.slug}
              href={category.slug ? `?category=${category.slug}` : pathname}
              draggable={false}
              className={cn(
                'flex min-w-16 flex-col items-center gap-1 rounded-lg px-2 py-2 transition-colors select-none',
                isSelected
                  ? 'bg-neutral-100 font-bold text-neutral-950'
                  : 'text-neutral-950/30 hover:bg-neutral-100'
              )}
              onClick={(e) => {
                if (dragDistance > 3) {
                  e.preventDefault();
                }
              }}
            >
              <Icon className="pointer-events-none size-6" />
              <span className="pointer-events-none text-xs">{category.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
