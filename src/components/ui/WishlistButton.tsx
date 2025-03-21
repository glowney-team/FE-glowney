import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface WishlistButtonProps {
  className?: string;
}

const WishlistButton: React.FC<WishlistButtonProps> = ({ className }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const toggleWishlist = () => {
    setIsWishlisted((prev) => !prev);
  };

  return (
    <button
      onClick={toggleWishlist}
      className={cn(
        'flex size-10 items-center justify-center rounded-full transition-all duration-200 hover:scale-110 @lg:size-12',

        className
      )}
      aria-label="Add to wishlist"
    >
      {isWishlisted ? (
        <Image
          src="/heart-filled.svg"
          alt="Wishlist"
          width={24}
          height={24}
          className="h-full w-full"
        />
      ) : (
        <Image src="/heart.svg" alt="Wishlist" width={24} height={24} className="h-full w-full" />
      )}
    </button>
  );
};

export default WishlistButton;
