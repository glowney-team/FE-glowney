'use client';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import EventCard from '@/components/ui/EventCard';
import {
  Carousel,
  CarouselContent,
  CarouselGradientMask,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/Carousel';

const EVENTS = [
  {
    id: 1,
    link: '/events/1',
    image: '/images/event.jpg',
    eventName: '밝아지는 피부 - 백옥주사',
    hospitalName: '서울 피부과',
    rating: 4.7,
    originalPrice: 50000000000,
    discountedPrice: 32000,
  },
  {
    id: 2,
    link: '/events/2',
    image: '/images/event1.jpg',
    eventName: '사각턱 - 보톡스',
    hospitalName: '강남 성형외과',
    rating: 4.9,
    originalPrice: 400000,
    discountedPrice: 380000,
  },
  {
    id: 3,
    link: '/events/3',
    image: '/images/event2.jpg',
    eventName: 'V라인 - 안면윤곽',
    hospitalName: '압구정 클리닉',
    rating: 4.8,
    originalPrice: 600000,
    discountedPrice: 220000,
  },
  {
    id: 4,
    link: '/events/4',
    image: '/images/event3.jpg',
    eventName: '예쁜코 만들기 - 필러',
    hospitalName: '청담 피부과',
    rating: 4.6,
    originalPrice: 450000,
    discountedPrice: 215000,
  },
  {
    id: 5,
    link: '/events/4',
    image: '/images/event.jpg',
    eventName: '레이저 토닝',
    hospitalName: '청담 피부과',
    rating: 4.6,
    originalPrice: 450000,
    discountedPrice: 315000,
  },
  {
    id: 6,
    link: '/events/4',
    image: '/images/event.jpg',
    eventName: '레이저 토닝',
    hospitalName: '청담 피부과',
    rating: 4.6,
    originalPrice: 450000,
    discountedPrice: 315000,
  },
];

export default function HotDealsSection() {
  return (
    <Container>
      <SectionTitle
        title="Hot Deals Now"
        subtitle="Don't Miss Out on Ongoing Events"
        link="hotdeals"
      />

      <Carousel
        opts={{
          align: 'start',
          loop: false,
          dragFree: true,
        }}
      >
        <CarouselContent className="gap-3">
          {EVENTS.map((event) => (
            <CarouselItem
              key={event.id}
              className="relative max-w-[180px] basis-full @lg:max-w-[300px]"
            >
              <EventCard
                link={event.link}
                image={event.image}
                eventName={event.eventName}
                hospitalName={event.hospitalName}
                rating={event.rating}
                originalPrice={event.originalPrice}
                discountedPrice={event.discountedPrice}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
        <CarouselGradientMask />
      </Carousel>
    </Container>
  );
}
