import Link from 'next/link';
import LogoIcon from '../../../public/glowneyLogo.svg';

interface AppLogoProps {
  labelType?: 'symbol' | 'text' | 'full';
  className?: string;
}

export function AppLogo({ labelType = 'full', className }: AppLogoProps) {
  return (
    <Link href="/" className={`AppLogo ${className}`}>
      {(labelType === 'symbol' || labelType === 'full') && <LogoIcon className="LogoIcon" />}
      {(labelType === 'text' || labelType === 'full') && <span className="LogoText">Glowney</span>}
    </Link>
  );
}
