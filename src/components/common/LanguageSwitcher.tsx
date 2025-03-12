'use client';

import { useRouter, usePathname } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import Select from '@/components/ui/Select';

const LanguageSwitcher: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  // 지원하는 언어 목록
  const languages = [
    { value: 'en', label: 'English' },
    { value: 'ko', label: '한국어' },
    { value: 'zh', label: '中文' },
    { value: 'ja', label: '日本語' },
  ];

  // 언어 변경 시 현재 페이지를 새 언어로 이동
  const changeLanguage = (newLocale: string) => {
    if (newLocale !== locale) {
      router.push(pathname, { locale: newLocale });
    }
  };

  return (
    <Select
      label="language"
      options={languages}
      value={locale}
      onChange={changeLanguage}
      className="ml-auto"
    />
  );
};

export default LanguageSwitcher;
