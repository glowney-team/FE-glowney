'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { AppLogo } from '@/components/common/AppLogo';
import { Link, usePathname } from '@/i18n/navigation';
import { useLocale } from 'next-intl';

const MainHeader: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 flex h-[60px] justify-center border-b border-neutral-200 bg-neutral-50 text-neutral-300">
      <div className="max-container flex w-full items-center justify-between px-container">
        {/* 로고 */}
        <AppLogo labelType="symbol" />

        {/* 네비게이션 메뉴 */}
        <nav className="flex gap-10 text-lg font-semibold">
          <NavItem label="추천" href="/" />
          <NavItem label="병원" href="/hospitals" />
          <NavItem label="케어" href="/care" />
        </nav>

        {/* 검색 아이콘 */}
        <button>
          <MagnifyingGlassIcon className="size-7 stroke-4 text-neutral-500" strokeWidth={4} />
        </button>
      </div>
    </header>
  );
};

interface NavItemProps {
  label: string;
  href: string;
}

const NavItem: React.FC<NavItemProps> = ({ label, href }) => {
  const pathname = usePathname();
  const locale = useLocale();
  const isActive = `/${locale}${pathname}` === `/${locale}${href}`;

  return (
    <Link
      href={href}
      className={`flex items-center transition ${
        isActive
          ? 'border-b-4 border-primary-500 font-bold text-neutral-900'
          : 'pb-1 hover:text-primary-600'
      }`}
    >
      {label}
    </Link>
  );
};

export default MainHeader;
