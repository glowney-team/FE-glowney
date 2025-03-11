import { AppLogo } from '../common/AppLogo';
import LanguageSwitcher from '../common/LanguageSwitcher';

export function Header() {
  return (
    <header
      className="max-w-7xl flex flex-col sticky top-0 z-10
  justify-center h-[60px] px-container  bg-stone-50"
    >
      <div className="flex">
        <AppLogo labelType="symbol" />
        <LanguageSwitcher />
      </div>
    </header>
  );
}
