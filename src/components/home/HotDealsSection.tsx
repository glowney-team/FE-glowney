'use client';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import EventCard from '@/components/ui/EventCard';

export default function HotDealsSection() {
  return (
    <>
      <Container>
        <SectionTitle title="Hot Deals Now" subtitle="Don't Miss Out on Ongoing Events" />
        <EventCard
          image="/images/event.jpg"
          eventName="밝아지는 피부-백옥주사"
          hospitalName="서울 피부과"
          rating={4.7}
          originalPrice={500000}
          discountedPrice={350000}
        />
      </Container>
    </>
  );
}
