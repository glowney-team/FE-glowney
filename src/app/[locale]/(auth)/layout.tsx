import { Header } from '@/components/layout/Header';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-7xl @container flex flex-col m-auto relative ">
      <Header />
      <main className="h-[calc(100dvh-60px)]   bg-neutral-50">{children}</main>
    </div>
  );
}
