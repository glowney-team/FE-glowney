import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Common');

  return (
    <main className="flex">
      <Link
        href={`/signin`}
        className="w-fit h-fit bg-stone-950 text-stone-50 px-4 py-2 rounded-full"
      >
        {t('login')}
      </Link>
    </main>
  );
}
