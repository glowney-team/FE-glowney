import { Header } from '@/components/layout/Header';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="@container relative m-auto flex min-h-dvh flex-col">
      <Header />
      <main className="flex flex-grow bg-neutral-50">{children}</main>
    </div>
  );
}
