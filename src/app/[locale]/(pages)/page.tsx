import HomeCarousel from '@/components/common/HomeCarousel';
import Container from '@/components/ui/Container';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Common');

  return (
    <Container>
      <HomeCarousel />
      <Link href={`/signin`} className="button filled primary sm w-fit rounded-lg">
        {t('signin')}
      </Link>
    </Container>
  );
}
