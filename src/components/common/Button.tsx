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

export const Button: React.FC<ButtonProps> = ({
  type = 'button',
  style = 'filled',
  color = 'neutral',
  size = 'base',
  width = 'fit',
  disabled = false,
  className = '',
  radius = 'xl',
  onClick,
  children,
}) => {
  const baseStyle = `button ${style} ${size} rounded-${radius} w-${width} ${color} ${' '} ${className}`;

  return (
    <button type={type} className={`${baseStyle}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
