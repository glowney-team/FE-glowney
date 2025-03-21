import { AppLogo } from '@/components/common/AppLogo';
import { Link } from '@/i18n/navigation';

export const Footer = () => {
  return (
    <footer className="mt-20 flex w-full justify-center bg-neutral-200">
      <div className="max-container flex w-full flex-col gap-4 px-container py-8">
        <AppLogo className="text-col" />
        <div className="flex flex-col gap-2 text-sm text-neutral-500">
          <nav className="flex gap-6">
            <Link href="/" className="transition hover:text-primary-600">
              이용약관
              <div className=""></div>
            </Link>
            <Link href="/" className="transition hover:text-primary-600">
              개인정보처리방침
            </Link>
          </nav>
          <p>© {new Date().getFullYear()} Glowney. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
