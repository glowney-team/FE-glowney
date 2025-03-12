import { Header } from '@/components/layout/Header';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-7xl @container flex flex-col m-auto relative ">
      <Header />
      <main className="bg-neutral-100 text-neutral-100 min-h-[calc(100dvh-60px)]">{children}</main>
    </div>
  );
}
