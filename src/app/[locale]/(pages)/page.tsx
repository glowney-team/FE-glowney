import Container from '@/components/ui/Container';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Common');

  return (
    <Container>
      <Link href={`/signin`} className="button filled primary sm w-fit rounded-lg">
        {t('signin')}
      </Link>
      <div className="h-[3000px] w-full bg-neutral-50">text</div>
    </Container>
  );
}
