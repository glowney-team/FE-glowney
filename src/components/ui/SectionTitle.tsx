'use client';

import React from 'react';
import clsx from 'clsx';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  onSeeAllClick?: () => void;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  onSeeAllClick,
  className,
}) => {
  return (
    <div className={clsx('flex w-full items-center justify-between', className)}>
      {/* 왼쪽 타이틀 */}
      <div>
        <h2 className="text-md font-bold text-neutral-900">{title}</h2>
        {subtitle && <p className="text-xs text-neutral-500">{subtitle}</p>}
      </div>

      {/* 오른쪽 See All 버튼 */}
      {onSeeAllClick && (
        <button
          onClick={onSeeAllClick}
          className="flex items-center gap-1 text-xs font-medium text-neutral-600 transition hover:text-neutral-900"
        >
          See All <ChevronRightIcon className="size-4" />
        </button>
      )}
    </div>
  );
};

export default SectionTitle;
