'use client';

import { Category } from '@/components/clinics/category';

export default function ClinicsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Category />
      {children}
    </>
  );
}
