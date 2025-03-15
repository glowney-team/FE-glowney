import Button from '@/components/ui/Button';
import { useTranslations } from 'next-intl';

const LoginForm: React.FC = () => {
  const t = useTranslations('Common');

  return (
    <form className="flex flex-col gap-3">
      <div>
        <input type="email" id="email" placeholder={t('email')} className="authInput" />
      </div>
      <div>
        <input type="password" id="password" placeholder={t('password')} className="authInput" />
      </div>
      <span className="text-xs text-stone-500 @lg:text-sm">{t('passwordRequirement')}</span>
      <Button type="submit" color="primary" size="md" width="full" className="font-semibold">
        {t('signin')}
      </Button>
    </form>
  );
};

export default LoginForm;
