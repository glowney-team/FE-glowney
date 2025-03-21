'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardImage } from '../ui/Card';
import Link from 'next/link';
import Rating from '@/components/ui/Rating';
import WishlistButton from '@/components/ui/WishlistButton';

interface EventCardProps {
  image: string;
  eventName: string;
  hospitalName: string;
  rating: number;
  originalPrice: number;
  discountedPrice: number;
  link: string;
}

const EventCard: React.FC<EventCardProps> = ({
  image,
  eventName,
  hospitalName,
  rating,
  originalPrice,
  discountedPrice,
  link,
}) => {
  const discountPercentage = Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);

  return (
    <Card className="relative rounded-2xl border-none shadow-none">
      <Link href={link}>
        {/* 이미지 */}
        <CardImage
          src={image}
          alt="Event image"
          aspectRatio="square"
          className="overflow-hidden rounded-xl"
        />
        {/* 내용 */}
        <CardContent className="flex flex-col gap-1 px-1 py-4">
          <CardDescription className="flex flex-col">
            <div className="flex items-center justify-between gap-1 text-xs text-neutral-900/50">
              {/* 평점 */}
              <span>{hospitalName}</span>
              <Rating rating={rating} />
            </div>
            <div className="mt-2 text-sm font-semibold">{eventName}</div>
            {/* 가격 정보 */}
            <div className="flex items-center gap-1 text-base font-semibold">
              <div>
                <p className="text-neutral-900">₩{discountedPrice.toLocaleString()}</p>
              </div>
              <span className="text-primary-600">{discountPercentage}%</span>
            </div>
          </CardDescription>
        </CardContent>
      </Link>
      <WishlistButton className="absolute top-1 right-1 p-2" />
    </Card>
  );
};

export default EventCard;
