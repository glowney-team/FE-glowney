'use client';

import {
  CalendarIcon,
  ChatBubbleBottomCenterTextIcon,
  HeartIcon,
  HomeIcon,
  UserIcon,
} from '@heroicons/react/24/solid';
import { Link, usePathname } from '@/i18n/navigation';
import { useLocale } from 'next-intl';

interface TabItemProps {
  path: string;
  icon: React.ElementType;
  label: string;
}

const TabItem: React.FC<TabItemProps> = ({ path, icon: Icon, label }) => {
  const pathname = usePathname();
  const locale = useLocale();
  const isActive = `/${locale}${pathname}` === `/${locale}${path}`;

  return (
    <Link href={`${path}`}>
      <li
        className={`flex h-[50px] w-[50px] flex-col items-center justify-center gap-1 font-semibold ${
          isActive ? 'font-bold text-neutral-900' : 'text-neutral-400'
        }`}
      >
        <Icon className="size-6" />
        <span className="text-xs">{label}</span>
      </li>
    </Link>
  );
};

const TabBar: React.FC = () => {
  return (
    <nav className="sticky bottom-0 left-0 w-full border-t border-neutral-200 bg-white shadow-lg @lg:hidden">
      <ul className="mx-auto flex justify-between px-container py-3">
        <TabItem path="/" icon={HomeIcon} label="Home" />
        <TabItem path="/bookings" icon={CalendarIcon} label="bookings" />
        <TabItem path="/favorites" icon={HeartIcon} label="favorites" />
        <TabItem path="/messages" icon={ChatBubbleBottomCenterTextIcon} label="messages" />
        <TabItem path="/profile" icon={UserIcon} label="profile" />
      </ul>
    </nav>
  );
};

export default TabBar;
