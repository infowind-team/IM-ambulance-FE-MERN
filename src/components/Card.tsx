interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div 
      className={`bg-white box-border content-stretch flex flex-col gap-[31.996px] pb-0 pt-[31.996px] px-[31.996px] rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] w-full max-w-[383.986px] ${className}`}
      data-name="Container"
    >
      {children}
    </div>
  );
}
