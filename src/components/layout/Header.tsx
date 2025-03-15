import { AppLogo } from '../common/AppLogo';
import LanguageSwitcher from '../common/LanguageSwitcher';

export function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-[60px] w-full flex-col items-center justify-center bg-neutral-50">
      <div className="max-container flex px-container">
        <AppLogo labelType="symbol" />
        <LanguageSwitcher />
      </div>
    </header>
  );
}
