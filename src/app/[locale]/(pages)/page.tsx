'use client';
import MainCarousel from '@/components/home/MainCarousel';
import HotDealsSection from '@/components/home/HotDealsSection';
import Container from '@/components/ui/Container';

export default function Home() {
  return (
    <>
      <div className="flex w-full items-center justify-center py-container">
        <Container>
          <MainCarousel />
        </Container>
      </div>
      <div className="mt-2 flex w-full flex-col items-center justify-center gap-2">
        <HotDealsSection />
      </div>
    </>
  );
}
