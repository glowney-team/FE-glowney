import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Common');

  return (
    <main className="flex">
      <Link href={`/signin`} className="button filled primary sm rounded-lg">
        {t('signin')}
      </Link>
    </main>
  );
}
