import { Header } from '@/components/layout/Header';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="@container relative m-auto flex max-w-7xl flex-col">
      <Header />
      <main className="h-[calc(100dvh-60px)] bg-neutral-50">{children}</main>
    </div>
  );
}
