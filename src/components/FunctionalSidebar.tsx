import { useRouter } from 'next/router';
import Image from 'next/image';
import { Calendar, FileText, Users, Truck, Briefcase, BarChart3, Settings, UserCog } from 'lucide-react';
import logoImg from '@/assets/366d22b376904052a04d70c3c539386a40689990.png';

export default function FunctionalSidebar() {
  const router = useRouter();

  const isActive = (path: string) => {
    return router.pathname === path;
  };

  const isVehiclesActive = router.pathname === '/vehicles';

  return (
    <div className="bg-white h-screen sticky top-0 w-[269px] flex-shrink-0 overflow-y-auto" data-name="Sidebar">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      
      {/* Logo */}
      <div className="absolute h-[63.063px] left-[10px] top-[10px] w-[93px]">
        <Image alt="" src={logoImg} width={93} height={63} className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none" />
      </div>

      {/* Main Navigation Container */}
      <div className="absolute box-border content-stretch flex flex-col h-[1097.94px] items-start left-0 overflow-clip pb-0 pt-[20px] px-0 top-[83.06px] w-[268px]">
        <div className="h-[675px] w-full">
          <div className="box-border content-stretch flex flex-col gap-[24px] h-[675px] items-start px-[8px] py-0 w-full">
            
            {/* Operations Section */}
            <div className="w-full">
              <div className="relative w-full">
                <div className="bg-[rgba(33,96,173,0.05)] box-border content-stretch flex gap-[12px] h-[45px] items-center pl-[12px] pr-0 py-0 rounded-[8px] w-full mb-[16px]">
                  <p className="font-['Lato:Medium',sans-serif] leading-[21px] text-[#2160ad] text-[14px] tracking-[0.35px] uppercase">Operations</p>
                  <div className="bg-[rgba(33,96,173,0.2)] h-px w-[60px]" />
                </div>

                <div className="flex flex-col gap-[8px] pl-[16px]">
                  <button
                    onClick={() => router.push('/calendar')}
                    className={`box-border content-stretch flex gap-[12px] h-[44px] items-center pl-[16px] pr-0 py-0 rounded-[8px] w-full text-left transition-colors ${
                      isActive('/calendar') ? 'bg-[rgba(33,96,173,0.1)]' : 'hover:bg-[rgba(33,96,173,0.05)]'
                    }`}
                  >
                    <Calendar className="w-[26px] h-[26px]" stroke="black" />
                    <p className="font-['Lato:Medium',sans-serif] leading-[24px] text-[16px] text-black">Calendar</p>
                  </button>

                  <button
                    onClick={() => router.push('/cases')}
                    className={`box-border content-stretch flex gap-[12px] h-[44px] items-center pl-[16px] pr-0 py-0 rounded-[8px] w-full text-left transition-colors ${
                      isActive('/cases') ? 'bg-[rgba(33,96,173,0.1)]' : 'hover:bg-[rgba(33,96,173,0.05)]'
                    }`}
                  >
                    <FileText className="w-[26px] h-[26px]" stroke="black" />
                    <p className="font-['Lato:Medium',sans-serif] leading-[24px] text-[16px] text-black">Cases</p>
                  </button>

                  <button
                    onClick={() => router.push('/roster')}
                    className={`box-border content-stretch flex gap-[12px] h-[44px] items-center pl-[16px] pr-0 py-0 rounded-[8px] w-full text-left transition-colors ${
                      router.pathname.startsWith('/roster') ? 'bg-[rgba(33,96,173,0.1)]' : 'hover:bg-[rgba(33,96,173,0.05)]'
                    }`}
                  >
                    <Users className="w-[26px] h-[26px]" stroke="black" />
                    <p className="font-['Lato:Medium',sans-serif] leading-[24px] text-[16px] text-black">Rostering</p>
                  </button>

                  <div className="relative">
                    <button
                      onClick={() => router.push('/vehicles')}
                      className={`box-border content-stretch flex gap-[12px] h-[44px] items-center pl-[16px] pr-0 py-0 rounded-[8px] w-full text-left transition-colors ${
                        isVehiclesActive ? 'bg-[#2160ad] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]' : 'hover:bg-[rgba(33,96,173,0.05)]'
                      }`}
                    >
                      <Truck className={`w-[26px] h-[26px] ${isVehiclesActive ? 'stroke-white' : 'stroke-black'}`} />
                      <p className={`font-['Lato:Medium',sans-serif] leading-[24px] text-[16px] ${isVehiclesActive ? 'text-white' : 'text-black'}`}>Vehicles</p>
                    </button>
                    {isVehiclesActive && (
                      <div className="absolute bg-[#2160ad] h-[44px] left-[-8px] rounded-[8px] top-0 w-[8px]" />
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Management Section */}
            <div className="w-full">
              <div className="relative w-full">
                <div className="bg-[rgba(33,96,173,0.05)] box-border content-stretch flex gap-[12px] h-[45px] items-center pl-[12px] pr-0 py-0 rounded-[8px] w-full mb-[16px]">
                  <p className="font-['Lato:Medium',sans-serif] leading-[21px] text-[#2160ad] text-[14px] tracking-[0.35px] uppercase">Management</p>
                  <div className="bg-[rgba(33,96,173,0.2)] h-px w-[60px]" />
                </div>

                <div className="flex flex-col gap-[8px] pl-[16px]">
                  <button
                    onClick={() => router.push('/services')}
                    className="box-border content-stretch flex gap-[12px] h-[44px] items-center pl-[16px] pr-0 py-0 rounded-[8px] w-full text-left hover:bg-[rgba(33,96,173,0.05)] transition-colors"
                  >
                    <Briefcase className="w-[24px] h-[24px]" stroke="black" />
                    <p className="font-['Lato:Medium',sans-serif] leading-[24px] text-[16px] text-black">Services</p>
                  </button>

                  <button
                    onClick={() => router.push('/hrm')}
                    className="box-border content-stretch flex gap-[12px] h-[44px] items-center pl-[16px] pr-0 py-0 rounded-[8px] w-full text-left hover:bg-[rgba(33,96,173,0.05)] transition-colors"
                  >
                    <Users className="w-[26px] h-[26px]" stroke="black" />
                    <p className="font-['Lato:Medium',sans-serif] leading-[24px] text-[16px] text-black">HR</p>
                  </button>

                  <button
                    onClick={() => router.push('/analytics')}
                    className="box-border content-stretch flex gap-[12px] h-[44px] items-center pl-[16px] pr-0 py-0 rounded-[8px] w-full text-left hover:bg-[rgba(33,96,173,0.05)] transition-colors"
                  >
                    <BarChart3 className="w-[24px] h-[24px]" stroke="black" />
                    <p className="font-['Lato:Medium',sans-serif] leading-[24px] text-[16px] text-black">Analytics & Reports</p>
                  </button>
                </div>
              </div>
            </div>

            {/* System Section */}
            <div className="w-full">
              <div className="relative w-full">
                <div className="bg-[rgba(33,96,173,0.05)] box-border content-stretch flex gap-[12px] h-[45px] items-center pl-[12px] pr-0 py-0 rounded-[8px] w-full mb-[16px]">
                  <p className="font-['Lato:Medium',sans-serif] leading-[21px] text-[#2160ad] text-[14px] tracking-[0.35px] uppercase">System</p>
                  <div className="bg-[rgba(33,96,173,0.2)] h-px w-[60px]" />
                </div>

                <div className="flex flex-col gap-[8px] pl-[16px]">
                  <button
                    onClick={() => router.push('/settings')}
                    className="box-border content-stretch flex gap-[12px] h-[44px] items-center pl-[16px] pr-0 py-0 rounded-[8px] w-full text-left hover:bg-[rgba(33,96,173,0.05)] transition-colors"
                  >
                    <Settings className="w-[26px] h-[26px]" stroke="black" />
                    <p className="font-['Lato:Medium',sans-serif] leading-[24px] text-[16px] text-black">Settings</p>
                  </button>

                  <button
                    onClick={() => router.push('/users')}
                    className="box-border content-stretch flex gap-[12px] h-[44px] items-center pl-[16px] pr-0 py-0 rounded-[8px] w-full text-left hover:bg-[rgba(33,96,173,0.05)] transition-colors"
                  >
                    <UserCog className="w-[26px] h-[26px]" stroke="black" />
                    <p className="font-['Lato:Medium',sans-serif] leading-[24px] text-[16px] text-black">Users</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Profile/Logout Section */}
      <div className="absolute box-border content-stretch flex flex-col h-[172px] items-start left-[16px] pb-0 pt-[17px] px-0 top-[1181px] w-[236px]">
        <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(33,96,173,0.1)] border-solid inset-0 pointer-events-none" />
        
        <div className="content-stretch flex flex-col gap-[8px] h-[135px] items-start w-full">
          <div className="h-[66px] rounded-[10px] w-full">
            <div className="flex flex-row items-center size-full">
              <div className="box-border content-stretch flex gap-[12px] h-[66px] items-center px-[12px] py-0 w-full">
                <div className="bg-[#2160ad] rounded-[3.35544e+07px] size-[37px] flex items-center justify-center">
                  <UserCog className="w-[20px] h-[20px] stroke-white" />
                </div>
                <div className="flex-1 flex flex-col">
                  <p className="font-['Lato:Medium',sans-serif] leading-[24px] text-[16px] text-black">My Profile</p>
                  <p className="font-['Lato:Medium',sans-serif] leading-[18px] text-[12px] text-[rgba(33,96,173,0.7)]">Account Settings</p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => router.push('/login')}
            className="h-[61px] rounded-[10px] w-full hover:bg-[rgba(231,0,11,0.05)] transition-colors"
          >
            <div className="flex flex-row items-center size-full">
              <div className="box-border content-stretch flex gap-[12px] h-[61px] items-center px-[12px] py-0 w-full">
                <div className="bg-[#ffe2e2] rounded-[3.35544e+07px] size-[37px] flex items-center justify-center">
                  <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 20 20">
                    <path d="M13.334 14.1668L17.5007 10.0002L13.334 5.8335" stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d="M17.5 10H7.5" stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d="M7.5 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H7.5" stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </svg>
                </div>
                <p className="font-['Lato:Medium',sans-serif] leading-[24px] text-[#e7000b] text-[16px]">Sign Out</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
