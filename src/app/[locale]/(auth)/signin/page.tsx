import LoginForm from '@/components/auth/LoginForm';
import OAuthButtons from '@/components/auth/OAuthButtons';
import Divider from '@/components/common/Divider';
import { Link } from '@/i18n/navigation';
import * as motion from 'motion/react-client';
import AnimatedHeading from '@/components/common/AnimatedHeading';
import { useTranslations } from 'next-intl';

export const SignInPage = () => {
  return (
    <motion.div
      className="h-full flex flex-col items-center gap-5 justify-center px-container"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <AnimatedHeading />
      <div className="w-full max-w-sm flex flex-col gap-3">
        <LoginForm />
        <Divider label="or" />
        <OAuthButtons />
        <RegisterPrompt />
      </div>
    </motion.div>
  );
};

const RegisterPrompt: React.FC = () => {
  const t = useTranslations('Auth');

  return (
    <div className="py-6 text-center text-sm ">
      {t('SignInPage.RegisterPrompt')}{' '}
      <Link href="/register" className="font-bold text-green-500">
        {t('Common.register')}
      </Link>
    </div>
  );
};

export default SignInPage;
