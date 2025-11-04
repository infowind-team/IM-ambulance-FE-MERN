import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import FunctionalSidebar from './FunctionalSidebar';

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="bg-white content-stretch flex items-start relative size-full min-h-screen" data-name="IM Ambulance - Web Application">
      <FunctionalSidebar />
      <div className="h-screen relative shrink-0 w-0" data-name="Section">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-screen w-0" />
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        {children}
      </div>
    </div>
  );
}

