import React from 'react';
import Image from 'next/image';
import logoMainImage from '@/assets/images/logoMain.png';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Left – Logo (desktop) */}
      <div className="hidden md:flex md:w-1/2 items-center justify-center p-8 bg-white">
        <Image
          src={logoMainImage}
          alt="IM Ambulance Services"
          width={500}
          height={300}
          className="w-full max-w-md object-contain"
          priority
        />
      </div>

      {/* Right – Auth Form */}
      <div className="flex-1 flex flex-col justify-center p-6 md:p-12 bg-gradient-to-b from-[#2160ad] to-[#1a4d8f] relative overflow-hidden">
        {/* Decorative blur circles */}
        <div className="absolute top-8 left-8 w-24 h-24 bg-[#99a1af] opacity-30 rounded-full blur-xl" />
        <div className="absolute bottom-8 right-8 w-32 h-32 bg-[#6a7282] opacity-20 rounded-full blur-2xl" />

        {/* Mobile logo */}
        <div className="md:hidden flex justify-center mb-8">
          <Image
            src={logoMainImage}
            alt="IM Ambulance Services"
            width={200}
            height={100}
            className="h-32 w-auto object-contain"
            priority
          />
        </div>

        {/* Form container */}
        <div className="relative z-10 w-full max-w-md mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
}