import Container from '@/components/ui/Container';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Common');

  return (
    <div className="flex min-h-full flex-col items-center justify-center">
      <Container>
        <Link href={`/signin`} className="button filled primary sm w-fit rounded-lg">
          {t('signin')}
        </Link>
        <div className="h-[3000px] w-full bg-neutral-50">text</div>
      </Container>
    </div>
  );
}
