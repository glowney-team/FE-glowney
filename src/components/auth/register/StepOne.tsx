import { useTranslations } from 'next-intl';

const StepOne: React.FC = () => {
  const t = useTranslations('RegisterPage');
  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm font-semibold">{t('agreeTermsLabel')}</p>
      <div className="flex items-center gap-2">
        <input type="checkbox" id="terms" />
        <label htmlFor="terms" className="text-sm">
          {t('agreeTermsTitle')}
        </label>
      </div>
    </div>
  );
};

export default StepOne;
