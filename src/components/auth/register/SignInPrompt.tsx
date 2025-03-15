import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

// ✅ 로그인 유도 메시지
const SignInPrompt: React.FC = () => {
  const t = useTranslations('Common');
  return (
    <div className="p-6 text-center text-sm">
      {t('signInPromptMessage')}{' '}
      <Link href="/signin" className="font-bold text-green-500">
        {t('signin')}
      </Link>
    </div>
  );
};
export default SignInPrompt;
