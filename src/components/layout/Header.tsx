import { AppLogo } from '../common/AppLogo';

export function Header() {
  return (
    <header
      className="container flex flex-col sticky top-0 z-10
  justify-center h-[60px] px-container  bg-stone-50"
    >
      <div className="flex">
        <AppLogo labelType="symbol" />
      </div>
    </header>
  );
}
