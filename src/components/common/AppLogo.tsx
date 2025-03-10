import Link from 'next/link';
import LogoIcon from '../../../public/glowneyLogo.svg';

interface AppLogoProps {
  labelType?: 'symbol' | 'text' | 'full';
  className?: string;
}

export function AppLogo({ labelType = 'full', className }: AppLogoProps) {
  return (
    <Link href="/" className={`appLogo ${className}`}>
      {(labelType === 'symbol' || labelType === 'full') && <LogoIcon className="logoIcon" />}
      {(labelType === 'text' || labelType === 'full') && <span className="logoText">Glowney</span>}
    </Link>
  );
}
