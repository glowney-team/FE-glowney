import { AppLogo } from '../common/AppLogo';
import LanguageSwitcher from '../common/LanguageSwitcher';

export function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-[60px] max-w-7xl flex-col justify-center bg-neutral-50 px-container">
      <div className="flex">
        <AppLogo labelType="symbol" />
        <LanguageSwitcher />
      </div>
    </header>
  );
}
