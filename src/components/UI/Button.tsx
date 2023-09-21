import Link from 'next/link';

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'outline' | 'fill' | 'nofill' | 'disable' | 'error' | 'text' | 'outlineDenger';
}

const Button: React.FC<ButtonProps> = ({ className, onClick, children, size = 'medium', variant = 'primary' }) => {
  const sizeClasses = {
    small: 'pt-1 pb-2 px-2 text-xs font-',
    medium: 'py-2 px-4 text-sm',
    large: 'py-3 px-6 text-lg',
  };

  // Mapping kelas warna
  const variantClasses = {
    primary: 'bg-emerald-400 text-slate-900 hover:bg-emerald-500 hover:text-white',
    secondary: 'bg-gray-500 hover:bg-gray-600',
    outline: 'border border-purple-500 text-purple-500 hover:bg-purple-100',
    outlineDenger: 'border border-rose-500 text-rose-500 hover:bg-rose-100',
    fill: 'bg-purple-500 hover:bg-purple-600 text-white',
    disable: 'bg-slate-100 text-slate-400',
    nofill: 'text-slate-900',
    error: 'bg-pink-600 text-stalte-900',
    text: 'text-emerald-400 md:hover:text-emerald-500',
  };

  return (
    <button className={`rounded-lg font-semibold ${sizeClasses[size]} ${variantClasses[variant]} ${className}  `} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
