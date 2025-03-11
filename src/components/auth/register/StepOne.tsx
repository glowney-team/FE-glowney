import { useTranslations } from 'next-intl';

// ✅ 1단계: 이메일 & 비밀번호 입력
const StepOne: React.FC = () => {
  const t = useTranslations('Auth.RegisterPage.StepOne');
  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm font-semibold">{t('title')}</p>
      <div className="flex items-center gap-2">
        <input type="checkbox" id="terms" />
        <label htmlFor="terms" className="text-sm">
          {t('agreeTerms')}
        </label>
      </div>
    </div>
  );
};

export default StepOne;
