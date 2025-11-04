interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'link';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({ children, variant = 'primary', onClick, className = '', type = 'button' }: ButtonProps) {
  if (variant === 'link') {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`font-['Lato:Regular',sans-serif] leading-[22.857px] not-italic text-[#6a7282] text-[16px] ${className}`}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-[#2160ad] h-[47.984px] rounded-[10px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] font-['Lato:Regular',sans-serif] leading-[24px] not-italic text-[16px] text-center text-white w-full ${className}`}
    >
      {children}
    </button>
  );
}
