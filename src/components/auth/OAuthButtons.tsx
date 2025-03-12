import Button from '@/components/ui/Button';
import GoogleIcon from '../../../public/googleLogo.svg';
import AppleIcon from '../../../public/appleLogo.svg';
import { useTranslations } from 'next-intl';

export const OAuthButtons: React.FC = () => {
  const t = useTranslations('Common');

  return (
    <>
      <Button
        style="custom"
        size="md"
        width="full"
        className="bg-stone-950 text-base font-semibold text-stone-50"
      >
        <AppleIcon className="size-5" />
        {t('appleSignIn')}{' '}
      </Button>
      <Button
        style="custom"
        size="md"
        width="full"
        className="border border-stone-950 bg-white text-base font-semibold text-stone-950"
      >
        <GoogleIcon className="size-5" />
        {t('googleSignIn')}{' '}
      </Button>
    </>
  );
};

export default OAuthButtons;
