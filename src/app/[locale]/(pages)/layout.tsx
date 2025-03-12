import { Header } from '@/components/layout/Header';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="@container relative m-auto flex max-w-7xl flex-col">
      <Header />
      <main className="min-h-[calc(100dvh-60px)] bg-neutral-100 text-neutral-100">{children}</main>
    </div>
  );
}
