import '@/styles/components.css';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';

export const metadata: Metadata = {
  title: 'Home',
  description: '성형',
  icons: {
    icon: '/glowney.ico',
  },
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container @container">
      <Header />
      {children}
    </div>
  );
}
