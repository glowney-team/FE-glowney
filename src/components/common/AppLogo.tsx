import Link from 'next/link';
import LogoIcon from '../../../public/glowneyLogo.svg';

interface AppLogoProps {
  labelType?: 'symbol' | 'text' | 'full';
  className?: string;
}

export function AppLogo({ labelType = 'full', className }: AppLogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      {(labelType === 'symbol' || labelType === 'full') && <LogoIcon className="w-8 h-8" />}
      {(labelType === 'text' || labelType === 'full') && (
        <span className="text-lg font-bold text-gray-900">Glowney</span>
      )}
    </Link>
  );
}
