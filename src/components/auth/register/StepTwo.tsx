import { useTranslations } from 'next-intl';

const StepTwo: React.FC = () => {
  const t = useTranslations('Common');

  return (
    <>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm font-semibold">
          {t('email')}
        </label>
        <input type="email" id="email" placeholder={t('email')} className="authInput" />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="text-sm font-semibold">
          {t('password')}
        </label>
        <input type="password" id="password" placeholder={t('password')} className="authInput" />
      </div>
      <span className="text-xs @lg:text-sm text-stone-500 ">{t('passwordRequirement')}</span>
      <div className="flex flex-col gap-1">
        <label htmlFor="password-confirm" className="text-sm font-semibold">
          {t('confirmPassword')}
        </label>
        <input
          type="password"
          id="password-confirm"
          placeholder={t('confirmPassword')}
          className="authInput"
        />
      </div>
    </>
  );
};
export default StepTwo;
