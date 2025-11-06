import React from "react";
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div 
      className={`bg-white rounded-2xl shadow-2xl p-8 w-full max-w-sm relative z-50 pointer-events-auto ${className}`}
      data-name="Container"
    >
      {children}
    </div>
  );
}
