import React from "react";
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
      className={`w-full bg-[#2160AD] hover:bg-[#2160AD]/90 disabled:bg-[#2160AD]/90 text-white py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg text-center pointer-events-auto cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}
