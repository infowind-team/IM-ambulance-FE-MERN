interface LinkProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export function Link({ children, onClick, variant = 'primary' }: LinkProps) {
  const colorClass = variant === 'primary' 
    ? "text-[#2160ad] font-['Lato:Medium',sans-serif]" 
    : "text-[#6a7282] font-['Lato:Regular',sans-serif]";

  return (
    <button
      onClick={onClick}
      className={`leading-[24px] not-italic text-[16px] ${colorClass} cursor-pointer hover:underline`}
    >
      {children}
    </button>
  );
}
