import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Calendar, Download, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import svgPaths from "../imports/svg-zt0450461j";
import imgFrame1171275132 from "figma:asset/366d22b376904052a04d70c3c539386a40689990.png";
import CaseDetailsPanel from '../components/CaseDetailsPanel';

interface CaseData {
  id: string;
  status: 'open' | 'pending' | 'assigned' | 'completed';
  patientName: string;
  pickup: string;
  firstStop: string;
  serviceType: string;
  startTime: string;
  requirements: string;
}

const mockCases: CaseData[] = [
  {
    id: '#2026031006',
    status: 'open',
    patientName: 'Francis Wilson',
    pickup: '175 Made Street, Central',
    firstStop: 'Central Hospital',
    serviceType: 'One-way',
    startTime: '08:30',
    requirements: 'A&E, Oxygen Support'
  },
  {
    id: '#2026031005',
    status: 'pending',
    patientName: 'Michael Chan',
    pickup: '435 Oak Avenue',
    firstStop: "St. Mary's Hospital",
    serviceType: 'Two-way',
    startTime: '10:15',
    requirements: 'Wheelchair Access'
  },
  {
    id: '#2026031007',
    status: 'assigned',
    patientName: 'Francis Wilson',
    pickup: '782 Pine Street',
    firstStop: 'General Hospital',
    serviceType: 'Three-way',
    startTime: '11:00',
    requirements: 'Cardiac Monitor'
  },
  {
    id: '#2026031008',
    status: 'completed',
    patientName: 'Robert Davis',
    pickup: '221 Elm Drive',
    firstStop: 'City Medical Center',
    serviceType: 'One-way',
    startTime: '08:45',
    requirements: 'Standard Transport'
  },
  {
    id: '#2026031009',
    status: 'completed',
    patientName: 'Robert Davis',
    pickup: '221 Elm Drive',
    firstStop: 'City Medical Center',
    serviceType: 'One-way',
    startTime: '08:45',
    requirements: 'Standard Transport'
  },
  {
    id: '#2026031019',
    status: 'open',
    patientName: 'Sarah Johnson',
    pickup: '123 Main Street, Central',
    firstStop: 'Central Hospital',
    serviceType: 'One-way',
    startTime: '12:30',
    requirements: 'A&E, Oxygen Support'
  },
  {
    id: '#2026031018',
    status: 'pending',
    patientName: 'Michael Chan',
    pickup: '456 Oak Avenue',
    firstStop: "St. Mary's Hospital",
    serviceType: 'Two-way',
    startTime: '13:15',
    requirements: 'Wheelchair Access'
  }
];

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="bg-white h-screen relative w-[268px] flex-shrink-0" data-name="Sidebar">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      
      {/* Logo */}
      <div className="absolute h-[63.063px] left-[10px] top-[10px] w-[93px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFrame1171275132} />
      </div>

      {/* Main Navigation Container */}
      <div className="absolute box-border content-stretch flex flex-col h-[675px] items-start left-0 overflow-clip pb-0 pt-[20px] px-[8px] top-[83.06px] w-[268px]">
        
        {/* Operations Section */}
        <div className="h-[261px] relative shrink-0 w-full mb-[24px]">
          {/* Section Header */}
          <div className="absolute bg-[rgba(33,96,173,0.05)] box-border content-stretch flex gap-[12px] h-[45px] items-center left-0 pl-[12px] pr-0 py-0 rounded-[8px] top-0 w-[252px]">
            <p className="font-['Lato:Medium',sans-serif] leading-[21px] text-[14px] text-[#2160ad] tracking-[0.35px] uppercase">Operations</p>
            <div className="bg-[rgba(33,96,173,0.2)] h-px w-[60px]" />
          </div>

          {/* Nav Items */}
          <div className="absolute h-[200px] left-0 top-[61px] w-[252px]">
            {/* Calendar */}
            <button 
              onClick={() => navigate('/calendar')}
              className="absolute box-border content-stretch flex gap-[12px] h-[44px] items-center left-[16px] overflow-clip pl-[16px] pr-0 py-0 rounded-[8px] top-0 w-[228px] hover:header-bg-soft transition-colors cursor-pointer"
            >
              <svg className="w-[26px] h-[26px]" fill="none" viewBox="0 0 26 26">
                <path d="M8.66602 2.16699V6.50033" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
                <path d="M17.334 2.16699V6.50033" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
                <path d={svgPaths.p36bd5500} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
                <path d="M3.25 10.833H22.75" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
              </svg>
              <span className="font-['Lato:Medium',sans-serif] leading-[24px] text-[16px] text-black">Calendar</span>
            </button>

            {/* Cases */}
            <button 
              onClick={() => navigate('/cases')}
              className="absolute box-border content-stretch flex gap-[12px] h-[44px] items-center left-[16px] overflow-clip pl-[16px] pr-0 py-0 rounded-[8px] top-[52px] w-[228px] hover:header-bg-soft transition-colors cursor-pointer"
            >
              <svg className="w-[26px] h-[26px]" fill="none" viewBox="0 0 26 26">
                <path d={svgPaths.p38251100} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
                <path d={svgPaths.p11ac7d00} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
              </svg>
              <span className="font-['Lato:Medium',sans-serif] leading-[24px] text-[16px] text-black">Cases</span>
            </button>

            {/* Rostering - Active */}
            <div className="absolute h-[44px] left-0 top-[104px] w-[252px]">
              <div className="absolute bg-[#2160ad] box-border content-stretch flex gap-[12px] h-[44px] items-center left-[24px] overflow-clip pl-[16px] pr-0 py-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-0 w-[220px]">
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

            {/* Vehicles */}
            <button 
              onClick={() => navigate('/vehicles')}
              className="absolute box-border content-stretch flex gap-[12px] h-[44px] items-center left-[16px] overflow-clip pl-[16px] pr-0 py-0 rounded-[8px] top-[156px] w-[228px] hover:header-bg-soft transition-colors cursor-pointer"
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
        <div className="h-[209px] relative shrink-0 w-full mb-[24px]">
          {/* Section Header */}
          <div className="absolute bg-[rgba(33,96,173,0.05)] box-border content-stretch flex gap-[12px] h-[45px] items-center left-0 pl-[12px] pr-0 py-0 rounded-[8px] top-0 w-[252px]">
            <p className="font-['Lato:Medium',sans-serif] leading-[21px] text-[14px] text-[#2160ad] tracking-[0.35px] uppercase">Management</p>
            <div className="bg-[rgba(33,96,173,0.2)] h-px w-[60px]" />
          </div>

          {/* Nav Items */}
          <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[148px] items-start left-0 pl-[24px] pr-[8px] py-0 top-[61px] w-[252px]">
            <button 
              onClick={() => navigate('/services')}
              className="h-[44px] rounded-[8px] w-full hover:header-bg-soft transition-colors"
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
              className="h-[44px] rounded-[8px] w-full hover:header-bg-soft transition-colors"
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
              className="h-[44px] rounded-[8px] w-full hover:header-bg-soft transition-colors"
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
        <div className="h-[157px] relative shrink-0 w-full">
          {/* Section Header */}
          <div className="absolute bg-[rgba(33,96,173,0.05)] box-border content-stretch flex gap-[12px] h-[45px] items-center left-0 pl-[12px] pr-0 py-0 rounded-[8px] top-0 w-[252px]">
            <p className="font-['Lato:Medium',sans-serif] leading-[21px] text-[14px] text-[#2160ad] tracking-[0.35px] uppercase">System</p>
            <div className="bg-[rgba(33,96,173,0.2)] h-px w-[60px]" />
          </div>

          {/* Nav Items */}
          <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[96px] items-start left-0 pl-[24px] pr-[8px] py-0 top-[61px] w-[252px]">
            <button 
              onClick={() => navigate('/settings')}
              className="h-[44px] rounded-[8px] w-full hover:header-bg-soft transition-colors"
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
              className="h-[44px] rounded-[8px] w-full hover:header-bg-soft transition-colors"
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

      {/* Profile Section */}
      <div className="absolute box-border content-stretch flex flex-col h-[172px] items-start left-[16px] pb-0 pt-[17px] px-0 top-[1181px] w-[236px]">
        <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(33,96,173,0.1)] border-solid inset-0 pointer-events-none" />
        
        <div className="content-stretch flex flex-col gap-[8px] h-[135px] items-start w-full">
          <div className="h-[66px] rounded-[10px] w-full">
            <div className="box-border content-stretch flex gap-[12px] h-[66px] items-center px-[12px] py-0">
              <div className="bg-[#2160ad] relative rounded-[3.35544e+07px] size-[37px]">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center size-[37px]">
                  <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p216faf00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p30640b40} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </svg>
                </div>
              </div>
              <div className="basis-0 grow min-h-px min-w-px">
                <div className="content-stretch flex flex-col items-start h-[42px]">
                  <p className="font-['Lato:Medium',sans-serif] leading-[24px] text-[16px] text-black">My Profile</p>
                  <p className="font-['Lato:Medium',sans-serif] leading-[18px] text-[12px] text-[rgba(33,96,173,0.7)]">Account Settings</p>
                </div>
              </div>
            </div>
          </div>

          <button 
            onClick={() => navigate('/')}
            className="h-[61px] rounded-[10px] w-full hover:header-bg-soft transition-colors"
          >
            <div className="box-border content-stretch flex gap-[12px] h-[61px] items-center px-[12px] py-0">
              <div className="bg-[#ffe2e2] relative rounded-[3.35544e+07px] size-[37px]">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center size-[37px]">
                  <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p35d58900} stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d="M17.5 10H7.5" stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p38966ca0} stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </svg>
                </div>
              </div>
              <span className="font-['Lato:Medium',sans-serif] leading-[24px] text-[16px] text-[#e7000b]">Sign Out</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

function CaseCard({ caseData, onClick }: { caseData: CaseData; onClick: () => void }) {
  const statusConfig = {
    open: { bg: 'bg-blue-500', label: 'Open' },
    pending: { bg: 'bg-amber-500', label: 'Pending for Dispatch' },
    assigned: { bg: 'bg-amber-500', label: 'Assigned' },
    completed: { bg: 'bg-emerald-500', label: 'Completed' }
  };

  const config = statusConfig[caseData.status];

  return (
    <Card 
      onClick={onClick}
      className="cursor-pointer hover:border-[rgba(33,96,173,0.4)] transition-colors"
    >
      <CardHeader>
        <div className={`${config.bg} h-[40px] rounded-[10px] px-[12px] flex items-center inline-block`}>
          <CardTitle className="font-['Lato:SemiBold',sans-serif] text-[16px] text-white tracking-[0.4px] m-0">
            {config.label}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-[12px]">
        <p className="font-['Lato:Bold',sans-serif] text-[16px] text-[#2160ad]">{caseData.id}</p>
        
        <div className="space-y-[10px]">
          <p className="font-['Lato:SemiBold',sans-serif] text-[16px] text-[#101828]">Patient: {caseData.patientName}</p>
          
          <div className="flex items-start gap-[8px]">
            <span className="text-[18px]">📍</span>
            <p className="font-['Lato:Medium',sans-serif] text-[16px] text-[#364153]">Pick-up: {caseData.pickup}</p>
          </div>

          <div className="flex items-start gap-[8px]">
            <span className="text-[18px]">🏥</span>
            <p className="font-['Lato:Medium',sans-serif] text-[16px] text-[#364153]">1st Stop: {caseData.firstStop}</p>
          </div>

          <div className="border-t border-gray-100 pt-[13px] space-y-[8px]">
            <div className="flex justify-between items-center">
              <span className="font-['Lato:Regular',sans-serif] text-[16px] text-[#4a5565]">Service Type:</span>
              <span className="font-['Lato:SemiBold',sans-serif] text-[16px] text-[#101828]">{caseData.serviceType}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-['Lato:Regular',sans-serif] text-[16px] text-[#4a5565]">Start Time:</span>
              <span className="font-['Lato:SemiBold',sans-serif] text-[16px] text-[#2160ad]">{caseData.startTime}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-['Lato:Regular',sans-serif] text-[16px] text-[#4a5565]">Requirements:</span>
              <span className="font-['Lato:SemiBold',sans-serif] text-[16px] text-[#101828]">{caseData.requirements}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function RosteringPage() {
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState(new Date('2025-06-01'));
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedCase, setSelectedCase] = useState<CaseData | null>(null);

  const handlePreviousDay = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 1);
    setCurrentDate(newDate);
  };

  const handleNextDay = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 1);
    setCurrentDate(newDate);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
  };

  const formatDayViewDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  const handleCaseClick = (caseData: CaseData) => {
    setSelectedCase(caseData);
  };

  const handleExport = () => {
    console.log('Exporting data...');
  };

  // Split cases into day and evening shifts
  const dayShiftCases = mockCases.slice(0, 5);
  const eveningShiftCases = mockCases.slice(5);

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-[rgba(33,96,173,0.05)] border-r-4 border-[rgba(33,96,173,0.2)] px-[24px] py-[16px]">
          <div className="flex items-center gap-[4px] mb-[8px]">
            <span className="font-['Lato:Regular',sans-serif] text-[14px] text-[#4a5565]">Operations</span>
            <ChevronRight className="w-[14px] h-[14px] text-[#717182]" />
            <span className="font-['Lato:Medium',sans-serif] text-[14px] text-[#2160ad]">Rostering</span>
          </div>
          <h1 className="font-['Lato:Medium',sans-serif] text-[26px] text-[#2160ad]">Rostering</h1>
        </div>

        {/* Date Navigation */}
        <div className="border-b border-gray-200 px-[24px] py-[12px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[8px]">
              <Button onClick={handlePreviousDay} variant="ghost" size="icon" className="size-[32px]">
                <ChevronLeft className="w-[16px] h-[16px] text-[#2160ad]" />
              </Button>
              
              <Button 
                onClick={() => setShowCalendar(!showCalendar)}
                variant="outline"
                className="h-[36px] px-[13px] gap-[8px]"
              >
                <Calendar className="w-[16px] h-[16px] text-[#2160ad]" />
                <span className="font-['Lato:Medium',sans-serif] text-[16px] text-[#2160ad]">{formatDate(currentDate)}</span>
              </Button>

              <Button onClick={handleNextDay} variant="ghost" size="icon" className="size-[32px]">
                <ChevronRight className="w-[16px] h-[16px] text-[#2160ad]" />
              </Button>
            </div>

            <Button 
              onClick={handleExport}
              variant="outline"
              className="h-[32px] px-[16px] border-[rgba(33,96,173,0.2)]"
            >
              <Download className="w-[16px] h-[16px] text-[#2160ad]" />
              <span className="font-['Lato:Medium',sans-serif] text-[16px] text-[#2160ad]">Export</span>
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 px-[24px]">
          <div className="flex gap-[32px] h-[50px]">
            <button
              className="px-[4px] font-['Lato:Regular',sans-serif] text-[16px] text-[#2160ad] border-b-2 border-[#2160ad]"
            >
              Ground Crew (Shift)
            </button>
            <button
              onClick={() => navigate('/rostering/office-hours')}
              className="px-[4px] font-['Lato:Regular',sans-serif] text-[16px] text-[#6a7282] border-b-2 border-transparent hover:text-[#2160ad] transition-colors"
            >
              Ground Crew (Office Hours)
            </button>
            <button
              onClick={() => navigate('/rostering/operations')}
              className="px-[4px] font-['Lato:Regular',sans-serif] text-[16px] text-[#6a7282] border-b-2 border-transparent hover:text-[#2160ad] transition-colors"
            >
              Operations
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto px-[24px] py-[24px]">
          <div className="space-y-[24px]">
            {/* KPI Cards */}
            <div className="grid grid-cols-5 gap-[16px]">
              <div className="bg-[#2160ad] border border-[rgba(33,96,173,0.2)] rounded-[10px] p-[17px]">
                <p className="font-['Lato:Medium',sans-serif] text-[24px] text-white mb-[8px]">47</p>
                <p className="font-['Lato:Regular',sans-serif] text-[16px] text-white opacity-90">Cases</p>
              </div>

              <div className="bg-[#fb2c36] border border-[rgba(251,44,54,0.2)] rounded-[10px] p-[17px]">
                <p className="font-['Lato:Medium',sans-serif] text-[24px] text-white mb-[8px]">12</p>
                <p className="font-['Lato:Regular',sans-serif] text-[16px] text-white opacity-90">Open Cases</p>
              </div>

              <div className="bg-[#00bba7] border border-[rgba(0,187,167,0.2)] rounded-[10px] p-[17px]">
                <p className="font-['Lato:Medium',sans-serif] text-[24px] text-white mb-[8px]">0</p>
                <p className="font-['Lato:Regular',sans-serif] text-[16px] text-white opacity-90">Staff Available</p>
              </div>

              <div className="bg-[#2b7fff] border border-[rgba(43,127,255,0.2)] rounded-[10px] p-[17px]">
                <p className="font-['Lato:Medium',sans-serif] text-[24px] text-white mb-[8px]">23</p>
                <p className="font-['Lato:Regular',sans-serif] text-[16px] text-white opacity-90">Cases Fulfilled</p>
              </div>

              <div className="bg-[#f6339a] border border-[rgba(246,51,154,0.2)] rounded-[10px] p-[17px]">
                <p className="font-['Lato:Medium',sans-serif] text-[24px] text-white mb-[8px]">2</p>
                <p className="font-['Lato:Regular',sans-serif] text-[16px] text-white opacity-90">Cancelled Cases</p>
              </div>
            </div>

            {/* Warning Bar */}
            <div className="bg-red-50 border-l-4 border-[#ff6467] rounded-r-[10px] p-[16px] flex items-center gap-[12px]">
              <AlertTriangle className="w-[16px] h-[16px] text-[#c10007]" />
              <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#c10007]">
                <span className="font-['Lato:SemiBold',sans-serif]">Warning:</span> There are 12 open cases not assigned
              </p>
            </div>

            {/* Filters */}
            <div className="flex gap-[16px]">
              <div className="bg-[#f3f3f5] h-[36px] w-[180px] rounded-[8px] px-[13px] flex items-center justify-between">
                <span className="font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950">Shift Hours</span>
                <ChevronRight className="w-[16px] h-[16px] text-[#717182] opacity-50 rotate-90" />
              </div>

              <div className="bg-[#f3f3f5] h-[36px] w-[140px] rounded-[8px] px-[13px] flex items-center justify-between">
                <span className="font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950">All Status</span>
                <ChevronRight className="w-[16px] h-[16px] text-[#717182] opacity-50 rotate-90" />
              </div>
            </div>

            {/* Day View Section */}
            <div className="space-y-[16px]">
              <h3 className="font-['Lato:Medium',sans-serif] text-[16px] text-[#2160ad]">Day View - {formatDayViewDate(currentDate)}</h3>

              {/* Day Shift */}
              <div className="space-y-[8px]">
                <h4 className="font-['Lato:Medium',sans-serif] text-[16px] text-[#2160ad]">Day Shift</h4>
                <p className="font-['Lato:Regular',sans-serif] text-[16px] text-[#4a5565]">08:00-11:00 • {dayShiftCases.length} cases</p>

                <div className="grid grid-cols-4 gap-[12px]">
                  {dayShiftCases.map((caseData) => (
                    <CaseCard
                      key={caseData.id}
                      caseData={caseData}
                      onClick={() => handleCaseClick(caseData)}
                    />
                  ))}
                </div>
              </div>

              {/* Evening Shift */}
              {eveningShiftCases.length > 0 && (
                <div className="space-y-[8px]">
                  <p className="font-['Lato:Regular',sans-serif] text-[16px] text-[#4a5565]">11:00-14:00 • {eveningShiftCases.length} cases</p>

                  <div className="grid grid-cols-4 gap-[12px]">
                    {eveningShiftCases.map((caseData) => (
                      <CaseCard
                        key={caseData.id}
                        caseData={caseData}
                        onClick={() => handleCaseClick(caseData)}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Case Details Panel */}
      {selectedCase && (
        <CaseDetailsPanel
          isOpen={!!selectedCase}
          onClose={() => setSelectedCase(null)}
          caseData={{
            caseNo: selectedCase.id,
            tripRoute: `${selectedCase.pickup} → ${selectedCase.firstStop}`,
            startTime: selectedCase.startTime,
            serviceType: selectedCase.serviceType,
            estimatedDuration: '45 minutes',
            requirements: selectedCase.requirements,
            status: selectedCase.status,
            patientName: selectedCase.patientName
          }}
        />
      )}
    </div>
  );
}
