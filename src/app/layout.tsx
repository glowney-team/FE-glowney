import type { Metadata } from 'next';
import localFont from 'next/font/local';

import '../styles/globals.css';
import '@/styles/components.css';

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: 'Home',
  description: '성형',
  icons: {
    icon: '/glowney.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={pretendard.variable}>
      <body className="antialiased ">{children}</body>
    </html>
  );
}
