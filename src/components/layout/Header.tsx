import { AppLogo } from '../common/AppLogo';

export function Header() {
  return (
    <header className="flex items-center h-[60px] px-container ">
      <AppLogo labelType="symbol" />
    </header>
  );
}
