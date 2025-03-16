'use client';
import Carousel from '@/components/ui/Carousel';

const slidesData = [
  { image: '/images/banner1.png', title: '첫 번째 슬라이드', text: '설명 텍스트 1' },
  { image: '/images/banner2.png', title: '두 번째 슬라이드', text: '설명 텍스트 2' },
  { image: '/images/banner3.png', title: '세 번째 슬라이드', text: '설명 텍스트 3' },
];
const HomeCarousel = () => {
  return (
    <div className="mx-auto w-full">
      <Carousel slides={slidesData} options={{ loop: true }} />
    </div>
  );
};

export default HomeCarousel;
