import React from 'react';
import Image from 'next/image';
import logoMainImage from '@/assets/images/logoMain.png';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Left – Logo (desktop) */}
      <div className="hidden md:flex lg:w-1/2 items-center justify-center p-8 bg-white">
        <div className='w-full max-w-sm'>
          <Image
            src={logoMainImage}
            alt="IM Ambulance Services"
            width={500}
            height={300}
            className="w-full max-w-md object-contain"
            priority
          />
        </div>
      </div>

      {/* Right – Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 bg-gradient-to-br from-[#2160AD] to-[#1a4d8f] relative overflow-hidden">
      
        {/* Decorative blur circles */}
        <div className="absolute top-8 left-8 w-24 h-24 bg-gray-400 rounded-full blur-xl opacity-30 pointer-events-none" />
        <div className="absolute bottom-12 right-12 w-32 h-32 bg-gray-500 rounded-full blur-2xl opacity-20 pointer-events-none" />

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
        {/* <div className="relative z-10 w-full"> */}
          {children}
        {/* </div> */}
      </div>
    </div>
  );
}