import { Footer } from '@/components/layout/Footer';
import TabBar from '@/components/layout/TabBar';
import MainHeader from '@/components/layout/MainHeader';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="@container relative m-auto flex min-h-dvh flex-col">
      <MainHeader />
      <main className="flex flex-grow flex-col items-center bg-neutral-50 text-neutral-900">
        {children}
      </main>
      <Footer />
      <TabBar />
    </div>
  );
}
