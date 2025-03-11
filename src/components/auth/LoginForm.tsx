import Button from '@/components/ui/Button';
import { useTranslations } from 'next-intl';

const LoginForm: React.FC = () => {
  const t = useTranslations('Auth');

  return (
    <form className="flex flex-col gap-3">
      <div>
        <input type="email" id="email" placeholder={t('Common.email')} className="authInput" />
      </div>
      <div>
        <input
          type="password"
          id="password"
          placeholder={t('Common.password')}
          className="authInput"
        />
      </div>
      <span className="text-xs @lg:text-sm text-stone-500">{t('Common.passwordRequirement')}</span>
      <Button type="submit" color="primary" size="md" width="full" className="font-semibold">
        {t('Common.signin')}
      </Button>
    </form>
  );
};

export default LoginForm;
