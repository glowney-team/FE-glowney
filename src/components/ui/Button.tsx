type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  style?: 'filled' | 'bezeled' | 'border' | 'borderless' | 'custom';
  color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'base' | 'md';
  disabled?: boolean;
  width?: 'full' | 'fit';
  className?: string;
  radius?: 'none' | 'xl' | 'full';
  onClick?: () => void;
  children?: React.ReactNode;
};

const RADIUS_CLASSES = {
  none: 'rounded-none',
  xl: 'rounded-xl',
  full: 'rounded-full',
};

export const Button: React.FC<ButtonProps> = ({
  type = 'button',
  style = 'filled',
  color = 'neutral',
  size = 'base',
  width = 'fit',
  radius = 'xl',
  disabled = false,
  className = '',
  onClick,
  children,
}) => {
  const baseStyle = `button ${style} ${size} ${RADIUS_CLASSES[radius]} w-${width} ${color} ${' '} ${className}`;

  return (
    <button type={type} className={`${baseStyle}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
