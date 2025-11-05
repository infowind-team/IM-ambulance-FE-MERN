import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Calendar, Download, AlertTriangle } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '../components/ui/popover';
import { Calendar as CalendarComponent } from '../components/ui/calendar';
import svgPaths from "../imports/svg-616jwgfwpe";
import imgFrame1171275132 from "figma:asset/366d22b376904052a04d70c3c539386a40689990.png";

// Operations staff data
const staffMembers = [
  { name: 'Michael Chen', designation: 'OPERATIONS STAFF' },
  { name: 'Lisa Wang', designation: 'OPERATIONS STAFF' },
  { name: 'David Kumar', designation: 'OPERATIONS STAFF' },
  { name: 'Rachel Tan', designation: 'OPERATIONS STAFF' },
  { name: 'James Wilson', designation: 'OPERATIONS STAFF' },
];

// Generate date columns for the month (31 days starting from October 1)
const generateDateColumns = () => {
  const days = ['Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue'];
  const dates = [];
  
  for (let i = 1; i <= 31; i++) {
    dates.push({
      day: days[(i - 1) % 7],
      date: `${String(i).padStart(2, '0')}/10`,
    });
  }
  
  return dates;
};

function FunctionalSidebar() {
  const navigate = useNavigate();

  return (
    <div className="bg-white h-screen sticky top-0 w-[269px] flex-shrink-0" data-name="Sidebar">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      
      {/* Logo */}
      <div className="absolute h-[63.063px] left-[10px] top-[10px] w-[93px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFrame1171275132} />
      </div>

      {/* Main Navigation Container */}
      <div className="absolute box-border content-stretch flex flex-col h-[1097.94px] items-start left-0 overflow-clip pb-0 pt-[20px] px-0 top-[83.06px] w-[268px]">
        <div className="h-[675px] w-full">
          <div className="box-border content-stretch flex flex-col gap-[24px] h-[675px] items-start px-[8px] py-0 w-full">
            
            {/* Operations Section */}
            <div className="h-[261px] w-full">
              {/* Section Header */}
              <div className="bg-[rgba(33,96,173,0.05)] box-border content-stretch flex gap-[12px] h-[45px] items-center ml-[8px] pl-[12px] pr-0 py-0 rounded-[8px] w-[236px]">
                <p className="font-['Lato:Medium',sans-serif] leading-[21px] text-[14px] text-[#2160ad] tracking-[0.35px] uppercase">Operations</p>
                <div className="bg-[rgba(33,96,173,0.2)] h-px w-[60px]" />
              </div>

              {/* Nav Items */}
              <div className="h-[200px] mt-[16px] w-[252px]">
                <button 
                  onClick={() => navigate('/calendar')}
                  className="box-border content-stretch flex gap-[12px] h-[44px] items-center ml-[24px] overflow-clip pl-[16px] pr-0 py-0 rounded-[8px] w-[220px] hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <svg className="w-[26px] h-[26px]" fill="none" viewBox="0 0 26 26">
                    <path d="M8.66602 2.16699V6.50033" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
                    <path d="M17.334 2.16699V6.50033" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
                    <path d={svgPaths.p36bd5500} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
                    <path d="M3.25 10.833H22.75" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
                  </svg>
                  <span className="font-['Lato:Medium',sans-serif] leading-[24px] text-[16px] text-black">Calendar</span>
                </button>

                <button 
                  onClick={() => navigate('/cases')}
                  className="box-border content-stretch flex gap-[12px] h-[44px] items-center ml-[24px] mt-[8px] overflow-clip pl-[16px] pr-0 py-0 rounded-[8px] w-[220px] hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <svg className="w-[26px] h-[26px]" fill="none" viewBox="0 0 26 26">
                    <path d={svgPaths.p38251100} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
                    <path d={svgPaths.p11ac7d00} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
                  </svg>
                  <span className="font-['Lato:Medium',sans-serif] leading-[24px] text-[16px] text-black">Cases</span>
                </button>

                <div className="relative h-[44px] mt-[8px] w-[252px]">
                  <div className="absolute bg-[#2160ad] box-border content-stretch flex gap-[12px] h-[44px] items-center left-[24px] overflow-clip pl-[16px] pr-0 py-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] w-[220px]">
                    <svg className="w-[26px] h-[26px]" fill="none" viewBox="0 0 26 26">
                      <path d={svgPaths.p3eb2c4c0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
                      <path d={svgPaths.p17735280} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
                      <path d={svgPaths.p2542b868} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
                      <path d={svgPaths.p1de27d40} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
                    </svg>
                    <span className="font-['Lato:Medium',sans-serif] leading-[24px] text-[16px] text-white">Rostering</span>
                  </div>
                  <div className="absolute bg-[#2160ad] h-[44px] left-0 rounded-[8px] top-0 w-[8px]" />
                </div>

                <button 
                  onClick={() => navigate('/vehicles')}
                  className="box-border content-stretch flex gap-[12px] h-[44px] items-center ml-[24px] mt-[8px] overflow-clip pl-[16px] pr-0 py-0 rounded-[8px] w-[220px] hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <svg className="w-[26px] h-[26px]" fill="none" viewBox="0 0 26 26">
                    <path d={svgPaths.p3a126700} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
                    <path d={svgPaths.pfeed800} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
                    <path d="M9.75 18.417H16.25" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
                    <path d={svgPaths.p35055280} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
                  </svg>
                  <span className="font-['Lato:Medium',sans-serif] leading-[24px] text-[16px] text-black">Vehicles</span>
                </button>
              </div>
            </div>

            {/* Management Section */}
            <div className="h-[209px] w-full">
              {/* Section Header */}
              <div className="bg-[rgba(33,96,173,0.05)] box-border content-stretch flex gap-[12px] h-[45px] items-center ml-[8px] pl-[12px] pr-0 py-0 rounded-[8px] w-[236px]">
                <p className="font-['Lato:Medium',sans-serif] leading-[21px] text-[14px] text-[#2160ad] tracking-[0.35px] uppercase">Management</p>
                <div className="bg-[rgba(33,96,173,0.2)] h-px w-[60px]" />
              </div>

              {/* Nav Items */}
              <div className="box-border content-stretch flex flex-col gap-[8px] h-[148px] items-start mt-[16px] pl-[24px] pr-[8px] py-0 w-[252px]">
                <button 
                  onClick={() => navigate('/services')}
                  className="h-[44px] rounded-[8px] w-full hover:bg-gray-50 transition-colors"
                >
                  <div className="box-border content-stretch flex gap-[12px] h-[44px] items-center pl-[16px] pr-0 py-0">
                    <svg className="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24">
                      <path d={svgPaths.p185ca980} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d={svgPaths.p3cccb600} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                    <span className="font-['Lato:Medium',sans-serif] leading-[24px] text-[16px] text-black">Services</span>
                  </div>
                </button>

                <button 
                  onClick={() => navigate('/hr')}
                  className="h-[44px] rounded-[8px] w-full hover:bg-gray-50 transition-colors"
                >
                  <div className="box-border content-stretch flex gap-[12px] h-[44px] items-center pl-[16px] pr-0 py-0">
                    <svg className="w-[26px] h-[26px]" fill="none" viewBox="0 0 26 26">
                      <path d={svgPaths.p12987d60} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
                      <path d={svgPaths.p3eb2c4c0} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
                      <path d={svgPaths.p1de27d40} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
                    </svg>
                    <span className="font-['Lato:Medium',sans-serif] leading-[24px] text-[16px] text-black">HR</span>
                  </div>
                </button>

                <button 
                  onClick={() => navigate('/analytics')}
                  className="h-[44px] rounded-[8px] w-full hover:bg-gray-50 transition-colors"
                >
                  <div className="box-border content-stretch flex gap-[12px] h-[44px] items-center pl-[16px] pr-0 py-0">
                    <svg className="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24">
                      <path d={svgPaths.p36c5af80} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M18 17V9" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M13 17V5" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M8 17V14" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                    <span className="font-['Lato:Medium',sans-serif] leading-[24px] text-[16px] text-black">Analytics & Reports</span>
                  </div>
                </button>
              </div>
            </div>

            {/* System Section */}
            <div className="h-[157px] w-full">
              {/* Section Header */}
              <div className="bg-[rgba(33,96,173,0.05)] box-border content-stretch flex gap-[12px] h-[45px] items-center ml-[8px] pl-[12px] pr-0 py-0 rounded-[8px] w-[236px]">
                <p className="font-['Lato:Medium',sans-serif] leading-[21px] text-[14px] text-[#2160ad] tracking-[0.35px] uppercase">System</p>
                <div className="bg-[rgba(33,96,173,0.2)] h-px w-[60px]" />
              </div>

              {/* Nav Items */}
              <div className="box-border content-stretch flex flex-col gap-[8px] h-[96px] items-start mt-[16px] pl-[24px] pr-[8px] py-0 w-[252px]">
                <button 
                  onClick={() => navigate('/settings')}
                  className="h-[44px] rounded-[8px] w-full hover:bg-gray-50 transition-colors"
                >
                  <div className="box-border content-stretch flex gap-[12px] h-[44px] items-center pl-[16px] pr-0 py-0">
                    <svg className="w-[26px] h-[26px]" fill="none" viewBox="0 0 26 26">
                      <path d={svgPaths.p3fd6d700} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
                      <path d={svgPaths.p183ed300} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
                    </svg>
                    <span className="font-['Lato:Medium',sans-serif] leading-[24px] text-[16px] text-black">Settings</span>
                  </div>
                </button>

                <button 
                  onClick={() => navigate('/users')}
                  className="h-[44px] rounded-[8px] w-full hover:bg-gray-50 transition-colors"
                >
                  <div className="box-border content-stretch flex gap-[12px] h-[44px] items-center pl-[16px] pr-0 py-0">
                    <svg className="w-[26px] h-[26px]" fill="none" viewBox="0 0 26 26">
                      <path d={svgPaths.p12987d60} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
                      <path d={svgPaths.p3eb2c4c0} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
                      <path d={svgPaths.p1de27d40} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
                    </svg>
                    <span className="font-['Lato:Medium',sans-serif] leading-[24px] text-[16px] text-black">Users</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="absolute box-border content-stretch flex flex-col h-[172px] items-start left-[16px] pb-0 pt-[17px] px-0 top-[1181px] w-[236px]">
        <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(33,96,173,0.1)] border-solid inset-0 pointer-events-none" />
        
        <div className="content-stretch flex flex-col gap-[8px] h-[135px] items-start w-full">
          <div className="h-[66px] rounded-[10px] w-full">
            <div className="box-border content-stretch flex gap-[12px] h-[66px] items-center px-[12px] py-0">
              <div className="bg-[#2160ad] rounded-[3.35544e+07px] size-[37px] flex items-center justify-center">
                <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p216faf00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d={svgPaths.p30640b40} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-['Lato:Medium',sans-serif] leading-[24px] text-[16px] text-black">My Profile</p>
                <p className="font-['Lato:Medium',sans-serif] leading-[18px] text-[12px] text-[rgba(33,96,173,0.7)]">Account Settings</p>
              </div>
            </div>
          </div>

          <button 
            onClick={() => navigate('/')}
            className="h-[61px] rounded-[10px] w-full hover:bg-gray-50 transition-colors"
          >
            <div className="box-border content-stretch flex gap-[12px] h-[61px] items-center px-[12px] py-0">
              <div className="bg-[#ffe2e2] rounded-[3.35544e+07px] size-[37px] flex items-center justify-center">
                <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p35d58900} stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d="M17.5 10H7.5" stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d={svgPaths.p38966ca0} stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </svg>
              </div>
              <span className="font-['Lato:Medium',sans-serif] leading-[24px] text-[16px] text-[#e7000b]">Sign Out</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

// Shift options
const shiftOptions = ['AL', 'D1', 'D2', 'D3', 'D4', 'D5', 'OF', 'N'];

// Generate initial shift assignments
const generateInitialShifts = () => {
  const shifts: { [key: string]: string } = {};
  staffMembers.forEach((staff, staffIndex) => {
    for (let i = 1; i <= 31; i++) {
      shifts[`${staffIndex}-${i}`] = 'OF';
    }
  });
  return shifts;
};

// Get pill style based on shift type
const getShiftPillStyle = (shift: string) => {
  const blueShifts = ['D1', 'D2', 'D3', 'D4', 'D5', 'N'];
  
  if (blueShifts.includes(shift)) {
    return {
      bg: 'bg-[#2160ad]',
      text: 'text-white'
    };
  } else if (shift === 'AL') {
    return {
      bg: 'bg-[#e5e7eb]',
      text: 'text-[#6a7282]'
    };
  } else {
    // OF or other
    return {
      bg: 'bg-[#99a1af]',
      text: 'text-white'
    };
  }
};

export default function OperationsPage() {
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState(new Date(2025, 5, 1)); // June 1, 2025
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [shifts, setShifts] = useState(generateInitialShifts());
  const dateColumns = generateDateColumns();

  const handlePreviousMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    setCurrentDate(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  const formatDate = (date: Date) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  };

  return (
    <div className="bg-white content-stretch flex items-start min-h-screen w-full">
      {/* Sidebar */}
      {/* <FunctionalSidebar /> */}

      {/* Main Content */}
      <div className="flex-1 bg-white overflow-x-hidden">
        {/* Page Header */}
        <div className="bg-[rgba(33,96,173,0.05)] h-[86px] border-r-4 border-[rgba(33,96,173,0.2)]">
          <div className="box-border content-stretch flex flex-col h-[86px] items-start pb-0 pl-[24px] pr-[24px] pt-[16px]">
            <div className="content-stretch flex flex-col gap-[8px] h-[54px] items-start justify-end w-full">
              {/* Breadcrumbs */}
              <div className="flex gap-[4px] h-[20px] items-center">
                <p className="font-['Lato:Regular',sans-serif] leading-[20px] text-[#4a5565] text-[14px]">Operations</p>
                <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 14 14">
                  <path d="M5.25 10.5L8.75 7L5.25 3.5" stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                </svg>
                <p className="font-['Lato:Medium',sans-serif] leading-[20px] text-[#2160ad] text-[14px]">Rostering</p>
              </div>
              {/* Heading */}
              <p className="font-['Lato:Medium',sans-serif] leading-[26px] text-[#2160ad] text-[26px]">Rostering</p>
            </div>
          </div>
        </div>

        {/* Date Row */}
        <div className="box-border border-b border-gray-200 content-stretch flex flex-col h-[61px] items-start pb-px pt-[12px] px-[24px]">
          <div className="content-stretch flex h-[36px] items-center justify-between w-full">
            <div className="flex gap-[8px] h-[36px] items-center">
              <button 
                onClick={handlePreviousMonth}
                className="rounded-[8px] size-[32px] flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <ChevronLeft className="w-[16px] h-[16px] text-[#2160ad]" />
              </button>
              
              <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                <PopoverTrigger asChild>
                  <button className="flex-1 h-[36px] rounded-[8px] flex items-center px-[12px] hover:bg-gray-50 transition-colors">
                    <Calendar className="w-[16px] h-[16px] text-[#2160ad] mr-[8px]" />
                    <span className="font-['Lato:Medium',sans-serif] text-[16px] text-[#2160ad]">
                      {formatDate(currentDate)}
                    </span>
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={currentDate}
                    onSelect={(date) => {
                      if (date) {
                        setCurrentDate(date);
                        setIsCalendarOpen(false);
                      }
                    }}
                  />
                </PopoverContent>
              </Popover>

              <button 
                onClick={handleNextMonth}
                className="rounded-[8px] size-[32px] flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <ChevronRight className="w-[16px] h-[16px] text-[#2160ad]" />
              </button>
            </div>

            <button className="bg-white h-[32px] border border-[rgba(33,96,173,0.2)] rounded-[8px] px-[13px] flex items-center gap-[8px] hover:bg-gray-50 transition-colors">
              <Download className="w-[16px] h-[16px] text-[#2160ad]" />
              <span className="font-['Lato:Medium',sans-serif] text-[16px] text-[#2160ad]">Export</span>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="box-border border-b border-gray-200 content-stretch flex flex-col h-[51px] items-start pb-px pt-0 px-[24px]">
          <div className="content-stretch flex gap-[32px] h-[50px] items-start w-full">
            <button 
              onClick={() => navigate('/rostering')}
              className="h-[50px] border-b-2 border-transparent hover:border-gray-300 transition-colors"
            >
              <p className="font-['Lato:Regular',sans-serif] leading-[24px] px-[4px] py-[12px] text-[#6a7282] text-[16px]">Ground Crew (Shift)</p>
            </button>

            <button 
              onClick={() => navigate('/rostering/office-hours')}
              className="h-[50px] border-b-2 border-transparent hover:border-gray-300 transition-colors"
            >
              <p className="font-['Lato:Regular',sans-serif] leading-[24px] px-[4px] py-[12px] text-[#6a7282] text-[16px]">Ground Crew (Office Hours)</p>
            </button>

            <div className="h-[50px] border-b-2 border-[#2160ad]">
              <p className="font-['Lato:Regular',sans-serif] leading-[24px] px-[4px] py-[12px] text-[#2160ad] text-[16px]">Operations</p>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="box-border content-stretch flex flex-col items-start overflow-clip pb-0 pt-[24px] px-[24px]">
          <div className="w-full">
            {/* Warning Banner */}
            <div className="bg-red-50 box-border content-stretch flex flex-col h-[52px] items-start pb-0 pl-[20px] pr-[16px] pt-[16px] rounded-br-[10px] rounded-tr-[10px] border-l-4 border-[#ff6467] mb-[16px]">
              <div className="content-stretch flex gap-[12px] h-[20px] items-center w-full">
                <AlertTriangle className="w-[16px] h-[16px] text-[#FF6467]" />
                <div className="flex gap-[4px]">
                  <span className="font-['Lato:SemiBold',sans-serif] leading-[20px] text-[#c10007] text-[14px]">Warning:</span>
                  <span className="font-['Lato:Regular',sans-serif] leading-[20px] text-[#c10007] text-[14px]">There are 155 unassigned shifts this month</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between mb-[16px]">
              <button 
                onClick={() => {
                  // Auto-assign random shifts
                  const newShifts: { [key: string]: string } = {};
                  staffMembers.forEach((staff, staffIndex) => {
                    for (let i = 1; i <= 31; i++) {
                      const randomShift = shiftOptions[Math.floor(Math.random() * shiftOptions.length)];
                      newShifts[`${staffIndex}-${i}`] = randomShift;
                    }
                  });
                  setShifts(newShifts);
                  setIsEditMode(true);
                }}
                className="bg-white box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[13px] py-px rounded-[8px] border border-[rgba(33,96,173,0.2)] hover:bg-gray-50 transition-colors"
              >
                <p className="font-['Lato:Medium',sans-serif] text-[#2160ad] text-[16px]">Auto-Assign</p>
              </button>
              
              {isEditMode && (
                <div className="flex gap-[12px]">
                  <button
                    onClick={() => {
                      setIsEditMode(false);
                      // Save logic here
                    }}
                    className="bg-[#2160ad] h-[32px] px-[16px] rounded-[8px] hover:bg-[#1a4d8a] transition-colors"
                  >
                    <span className="font-['Lato:Medium',sans-serif] text-[16px] text-white">Save</span>
                  </button>
                  <button
                    onClick={() => {
                      setIsEditMode(false);
                      setShifts(generateInitialShifts());
                    }}
                    className="bg-white h-[32px] px-[16px] rounded-[8px] border border-[rgba(33,96,173,0.2)] hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-['Lato:Medium',sans-serif] text-[16px] text-[#2160ad]">Cancel</span>
                  </button>
                </div>
              )}
            </div>

            {/* Table Container */}
            <div className="relative w-full overflow-hidden border border-gray-200 rounded-[8px]">
              <div className="flex">
                {/* Sticky Staff Column */}
                <div className="sticky left-0 z-10 bg-white shadow-[2px_0_4px_rgba(0,0,0,0.05)]">
                  {/* Header Cell */}
                  <div className="bg-[rgba(33,96,173,0.05)] h-[53px] w-[192.797px] border-b-2 border-[#2160ad] flex items-center px-[8px]">
                    <p className="font-['Lato:Medium',sans-serif] leading-[24px] text-[#2160ad] text-[16px]">Staff</p>
                  </div>

                  {/* Staff Rows */}
                  {staffMembers.map((staff, index) => (
                    <div 
                      key={index}
                      className="bg-white h-[65px] w-[192.797px] border-r border-gray-200 border-b border-gray-200 flex items-center px-[12px]"
                    >
                      <div className="flex flex-col">
                        <p className="font-['Lato:Medium',sans-serif] leading-[24px] text-[#2160ad] text-[16px]">{staff.name}</p>
                        <p className="font-['Lato:Regular',sans-serif] leading-[16px] text-[#6a7282] text-[12px]">{staff.designation}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Scrollable Date Columns */}
                <div className="overflow-x-auto flex-1">
                  <div className="inline-block min-w-full">
                    {/* Date Headers */}
                    <div className="flex">
                      {dateColumns.map((date, index) => (
                        <div 
                          key={index}
                          className="bg-[rgba(33,96,173,0.05)] h-[53px] w-[83.953px] border-b-2 border-[#2160ad] border-r border-gray-100 flex flex-col items-center justify-center flex-shrink-0"
                        >
                          <p className="font-['Lato:Medium',sans-serif] leading-[18px] text-[#2160ad] text-[12px]">{date.day}</p>
                          <p className="font-['Lato:Medium',sans-serif] leading-[18px] text-[#2160ad] text-[12px]">{date.date}</p>
                        </div>
                      ))}
                    </div>

                    {/* Staff Rows - Date Cells */}
                    {staffMembers.map((staff, staffIndex) => (
                      <div key={staffIndex} className="flex">
                        {dateColumns.map((date, dateIndex) => {
                          const cellKey = `${staffIndex}-${dateIndex + 1}`;
                          const cellValue = shifts[cellKey] || 'OF';
                          
                          return (
                            <div 
                              key={dateIndex}
                              className="h-[65px] w-[83.953px] border-r border-gray-100 border-b border-gray-200 flex items-center justify-center flex-shrink-0"
                            >
                              {isEditMode ? (
                                <select
                                  value={cellValue}
                                  onChange={(e) => setShifts({ ...shifts, [cellKey]: e.target.value })}
                                  className="h-[32px] w-[60px] px-[8px] py-[4px] rounded-[4px] border border-gray-300 font-['Lato:Medium',sans-serif] text-[12px] text-[#2160ad] bg-white cursor-pointer hover:border-[#2160ad] focus:outline-none focus:ring-2 focus:ring-[#2160ad] focus:border-transparent"
                                >
                                  {shiftOptions.map((option) => (
                                    <option key={option} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                </select>
                              ) : (
                                <div className={`${getShiftPillStyle(cellValue).bg} box-border flex h-[20px] items-center px-[8px] py-[4px] rounded-[4px]`}>
                                  <p className={`font-['Lato:Medium',sans-serif] leading-[13.333px] text-[10px] ${getShiftPillStyle(cellValue).text}`}>{cellValue}</p>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
