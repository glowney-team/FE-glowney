'use client';

import React from 'react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';

interface EventCardProps {
  image: string;
  eventName: string;
  hospitalName: string;
  rating: number;
  originalPrice: number;
  discountedPrice: number;
}

const EventCard: React.FC<EventCardProps> = ({
  image,
  eventName,
  hospitalName,
  rating,
  originalPrice,
  discountedPrice,
}) => {
  const discountPercentage = Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);

  return (
    <div className="relative w-full max-w-[200px] overflow-hidden rounded-2xl border border-neutral-300 @lg:max-w-[300px]">
      {/* 이미지 */}
      <div className="relative h-[200px] w-full @lg:h-[300px]">
        <Image src={image} alt={eventName} layout="fill" objectFit="cover" />
      </div>
      {/* 내용 */}
      <div className="w-full bg-neutral-50/50 px-3 py-3 backdrop-blur-2xl">
        <h3 className="text-base font-semibold text-neutral-900 @lg:text-xl">{eventName}</h3>
        <div className="flex gap-2">
          {/* 평점 */}
          <div className="flex items-center gap-1 text-yellow-500">
            <StarIcon fill="currentColor" className="size-4" />
            <span className="text-sm font-medium @lg:text-base">{rating.toFixed(1)}</span>
          </div>
          {/* 병원명 */}
          <p className="text-sm font-light text-neutral-500 @lg:text-base">{hospitalName}</p>
        </div>
        {/* 가격 정보 */}
        <div className="mt-1 flex items-center gap-1">
          <div>
            <p className="text-base font-bold text-neutral-900 @lg:text-xl">
              ₩{discountedPrice.toLocaleString()}
            </p>
          </div>
          <span className="text-bas font-bold text-primary-600 @lg:text-lg">
            {discountPercentage}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
