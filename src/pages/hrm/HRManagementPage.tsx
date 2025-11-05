import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Plus, Eye, Edit3, Trash2, Users, ChevronLeft, ChevronRight, Calendar, Info, Save, AlertCircle, Download, Check, X } from 'lucide-react';
import FunctionalSidebar from '../components/FunctionalSidebar';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../components/ui/dialog';

interface Employee {
  id: string;
  name: string;
  initials: string;
  staffId: string;
  email: string;
  department: string;
  positions: string[];
  status: 'Active' | 'Inactive';
}

interface AttendanceRecord {
  id: string;
  employeeId: string;
  employeeName: string;
  date: string;
  status: 'Present' | 'On Leave' | 'Sick Leave' | 'Active' | 'Probation' | 'Inactive' | 'Suspended';
  clockIn: string;
  clockOut: string;
  late: string;
  overtime: string;
  workHours: string;
  location: string;
  hasLateWarning?: boolean;
  hasOvertimeInfo?: boolean;
}

interface LeaveApplication {
  id: string;
  employeeName: string;
  department: string;
  leaveType: string;
  endDate: string;
  days: number;
  recommendation: string;
  status: 'pending' | 'approved' | 'rejected';
}

const mockEmployees: Employee[] = [
  {
    id: '1',
    name: 'Annette Black',
    initials: 'AB',
    staffId: 'ADBFC008',
    email: 'annette.black@imambulance.com',
    department: 'Operations',
    positions: ['EMT', 'Medic'],
    status: 'Active',
  },
  {
    id: '2',
    name: 'Jennifer Liu',
    initials: 'JL',
    staffId: 'JLIU002',
    email: 'jennifer.liu@imambulance.com',
    department: 'Ground Crew (Shift)',
    positions: ['Paramedic', 'Team Lead'],
    status: 'Active',
  },
  {
    id: '3',
    name: 'Marcus Chen',
    initials: 'MC',
    staffId: 'OPS001',
    email: 'marcus.chen@imambulance.com',
    department: 'Operations',
    positions: ['Operations Manager', 'Dispatcher'],
    status: 'Active',
  },
  {
    id: '4',
    name: 'Rebecca Taylor',
    initials: 'RT',
    staffId: 'HR001',
    email: 'rebecca.taylor@imambulance.com',
    department: 'Ground Crew (Office Hours)',
    positions: ['HR Manager', 'Recruitment Specialist'],
    status: 'Active',
  },
];

const mockAttendanceData: AttendanceRecord[] = [
  { id: '1', employeeId: '1', employeeName: 'Annette Black', date: '10/10/2025', status: 'On Leave', clockIn: '-', clockOut: '-', late: '-', overtime: '-', workHours: '-', location: '-' },
  { id: '2', employeeId: '2', employeeName: 'Javen', date: '10/10/2025', status: 'Active', clockIn: '08:45 AM', clockOut: '06:00 PM', late: '-', overtime: '-', workHours: '9h 15m', location: 'HQ Office' },
  { id: '3', employeeId: '3', employeeName: 'Theresa Webb', date: '10/10/2025', status: 'Probation', clockIn: '-', clockOut: '-', late: '-', overtime: '-', workHours: '-', location: '-' },
  { id: '4', employeeId: '4', employeeName: 'Kathryn Murphy', date: '10/10/2025', status: 'Active', clockIn: '09:00 AM', clockOut: '05:58 PM', late: '-', overtime: '-', workHours: '8h 58m', location: 'Field Site' },
  { id: '5', employeeId: '4', employeeName: 'Courtney Henry', date: '10/10/2025', status: 'Active', clockIn: '06:00 PM', clockOut: '04:00 AM', late: '-', overtime: '-', workHours: '10h 00m', location: 'Night Shift' },
  { id: '6', employeeId: '2', employeeName: 'Javen', date: '10/10/2025', status: 'Active', clockIn: '10:24 AM', clockOut: '08:20 PM', late: '1 hr 24 min', overtime: '2 hr 20 min', workHours: '9h 56m', location: 'Remote', hasLateWarning: true, hasOvertimeInfo: true },
  { id: '7', employeeId: '2', employeeName: 'Javen', date: '10/10/2025', status: 'Inactive', clockIn: '09:02 AM', clockOut: '06:02 PM', late: '2 min', overtime: '2 hr', workHours: '9h 00m', location: 'HQ Office', hasLateWarning: true, hasOvertimeInfo: true },
  { id: '8', employeeId: '3', employeeName: 'Jane Cooper', date: '10/10/2025', status: 'Active', clockIn: '08:53 AM', clockOut: '05:55 PM', late: '-', overtime: '-', workHours: '9h 02m', location: 'Field Site' },
  { id: '9', employeeId: '2', employeeName: 'Javen', date: '10/10/2025', status: 'Suspended', clockIn: '06:12 PM', clockOut: '03:30 AM', late: '12 min', overtime: '30 min', workHours: '9h 18m', location: 'Night Shift', hasLateWarning: true, hasOvertimeInfo: true },
];

export default function HRManagementPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'profile' | 'attendance' | 'leave' | 'payroll' | 'incentives'>('leave');
  const [leaveSubTab, setLeaveSubTab] = useState<'schemes' | 'entitlement' | 'applications' | 'adjustments'>('applications');
  const [searchQuery, setSearchQuery] = useState('');
  const [employees] = useState<Employee[]>(mockEmployees);
  const [attendanceData] = useState<AttendanceRecord[]>(mockAttendanceData);
  const [selectedDate, setSelectedDate] = useState('Oct 10, 2025');
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedAttendance, setSelectedAttendance] = useState<AttendanceRecord | null>(null);

  const [leaveApplications, setLeaveApplications] = useState<LeaveApplication[]>([
    { id: '1', employeeName: 'John Smith', department: 'Emergency Services', leaveType: 'Annual Leave', endDate: '2024-11-15', days: 5, recommendation: 'Approve', status: 'pending' },
    { id: '2', employeeName: 'Sarah Johnson', department: 'Operations', leaveType: 'Childcare Leave', endDate: '2024-11-20', days: 2, recommendation: 'Approve', status: 'approved' },
  ]);

  const activeEmployees = employees.filter(e => e.status === 'Active').length;
  const inactiveEmployees = employees.filter(e => e.status === 'Inactive').length;

  const filteredEmployees = employees.filter(emp => 
    emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emp.staffId.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emp.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const latecomersCount = attendanceData.filter(record => record.hasLateWarning).length;

  const handleInfoClick = (record: AttendanceRecord) => {
    setSelectedAttendance(record);
    setShowInfoModal(true);
  };

  const handleEditClick = (record: AttendanceRecord) => {
    setSelectedAttendance(record);
    setShowEditModal(true);
  };

  const handleApprove = (id: string) => {
    setLeaveApplications(prev =>
      prev.map(app => app.id === id ? { ...app, status: 'approved' as const } : app)
    );
  };

  const handleReject = (id: string) => {
    setLeaveApplications(prev =>
      prev.map(app => app.id === id ? { ...app, status: 'rejected' as const } : app)
    );
  };

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'Active':
      case 'Present':
        return 'bg-green-50 border-[#b9f8cf] text-[#008236]';
      case 'On Leave':
      case 'Sick Leave':
        return 'bg-red-50 border-[#ffc9cc] text-[#e71b1b]';
      case 'Probation':
        return 'bg-amber-50 border-[#fee685] text-[#eea51f]';
      case 'Inactive':
      case 'Suspended':
        return 'bg-gray-100 border-gray-300 text-gray-600';
      default:
        return 'bg-gray-100 border-gray-300 text-gray-600';
    }
  };

  const getLeaveStatusClass = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-[#eceef2] border-[rgba(0,0,0,0)] text-[#030213]';
      case 'approved':
        return 'bg-[#030213] border-[rgba(0,0,0,0)] text-white';
      case 'rejected':
        return 'bg-red-50 border-red-200 text-red-700';
      default:
        return 'bg-gray-100 border-gray-300 text-gray-600';
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* <FunctionalSidebar /> */}
      
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <div className="bg-[rgba(33,96,173,0.05)] px-4 md:px-6 py-4 border-b border-[rgba(0,0,0,0.1)]">
          <div className="flex items-center gap-1 text-sm mb-2">
            <button 
              onClick={() => navigate('/')}
              className="font-['Lato:Regular',sans-serif] text-[14px] text-[#4a5565] hover:text-[#2160ad]"
            >
              Management
            </button>
            <span className="text-[#717182]">›</span>
            <span className="font-['Lato:Medium',sans-serif] text-[14px] text-[#2160ad]">HR</span>
          </div>
          <h1 className="font-['Lato:Medium',sans-serif] text-[22px] md:text-[26px] text-[#2160ad]">
            HR Management
          </h1>
        </div>

        {/* Tabs */}
        <div className="bg-white border-b border-[rgba(0,0,0,0.1)] px-4 md:px-6 pt-6 pb-px">
          <div className="bg-[rgba(33,96,173,0.05)] border border-[rgba(33,96,173,0.1)] rounded-lg p-1.5 inline-flex gap-1 overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveTab('profile')}
              className={`px-4 py-3 rounded-md font-['Lato:Medium',sans-serif] text-[14px] md:text-[16px] whitespace-nowrap transition-all ${
                activeTab === 'profile' 
                  ? 'bg-white text-[#2160ad] shadow-[0px_2px_8px_0px_rgba(33,96,173,0.15)] font-semibold' 
                  : 'text-[rgba(33,96,173,0.7)]'
              }`}
            >
              Employee Profile
            </button>
            <button
              onClick={() => setActiveTab('attendance')}
              className={`px-4 py-3 rounded-md font-['Lato:Medium',sans-serif] text-[14px] md:text-[16px] whitespace-nowrap transition-all ${
                activeTab === 'attendance' 
                  ? 'bg-white text-[#2160ad] shadow-[0px_2px_8px_0px_rgba(33,96,173,0.15)] font-semibold' 
                  : 'text-[rgba(33,96,173,0.7)]'
              }`}
            >
              Attendance Tracking
            </button>
            <button
              onClick={() => setActiveTab('leave')}
              className={`px-4 py-3 rounded-md font-['Lato:Medium',sans-serif] text-[14px] md:text-[16px] whitespace-nowrap transition-all ${
                activeTab === 'leave' 
                  ? 'bg-white text-[#2160ad] shadow-[0px_2px_8px_0px_rgba(33,96,173,0.15)] font-semibold' 
                  : 'text-[rgba(33,96,173,0.7)]'
              }`}
            >
              Leave Management
            </button>
            <button
              onClick={() => setActiveTab('payroll')}
              className={`px-4 py-3 rounded-md font-['Lato:Medium',sans-serif] text-[14px] md:text-[16px] whitespace-nowrap ${
                activeTab === 'payroll' ? 'bg-white text-[#2160ad] shadow-sm' : 'text-[rgba(33,96,173,0.7)]'
              }`}
            >
              Payroll Management
            </button>
            <button
              onClick={() => setActiveTab('incentives')}
              className={`px-4 py-3 rounded-md font-['Lato:Medium',sans-serif] text-[14px] md:text-[16px] whitespace-nowrap ${
                activeTab === 'incentives' ? 'bg-white text-[#2160ad] shadow-sm' : 'text-[rgba(33,96,173,0.7)]'
              }`}
            >
              Incentives Management
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto p-4 md:p-6">
          {activeTab === 'leave' && (
            <div className="space-y-6 max-w-full">
              {/* Leave Sub-tabs */}
              <div className="bg-[rgba(33,96,173,0.05)] border border-[rgba(33,96,173,0.1)] rounded-lg p-1.5 inline-flex gap-3 overflow-x-auto max-w-full">
                <button
                  onClick={() => setLeaveSubTab('schemes')}
                  className={`px-4 py-3 rounded-md font-['Lato:Medium',sans-serif] text-[14px] md:text-[16px] whitespace-nowrap transition-all flex items-center gap-2 ${
                    leaveSubTab === 'schemes' 
                      ? 'bg-white text-[#2160ad] shadow-[0px_2px_8px_0px_rgba(33,96,173,0.15)] font-semibold' 
                      : 'text-[rgba(33,96,173,0.7)]'
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  Leave Schemes
                </button>
                <button
                  onClick={() => setLeaveSubTab('entitlement')}
                  className={`px-4 py-3 rounded-md font-['Lato:Medium',sans-serif] text-[14px] md:text-[16px] whitespace-nowrap transition-all flex items-center gap-2 ${
                    leaveSubTab === 'entitlement' 
                      ? 'bg-white text-[#2160ad] shadow-[0px_2px_8px_0px_rgba(33,96,173,0.15)] font-semibold' 
                      : 'text-[rgba(33,96,173,0.7)]'
                  }`}
                >
                  <Users className="w-4 h-4" />
                  Entitlement
                </button>
                <button
                  onClick={() => setLeaveSubTab('applications')}
                  className={`px-4 py-3 rounded-md font-['Lato:Medium',sans-serif] text-[14px] md:text-[16px] whitespace-nowrap transition-all flex items-center gap-2 ${
                    leaveSubTab === 'applications' 
                      ? 'bg-white text-[#2160ad] shadow-[0px_2px_8px_0px_rgba(33,96,173,0.15)] font-semibold' 
                      : 'text-[rgba(33,96,173,0.7)]'
                  }`}
                >
                  <Edit3 className="w-4 h-4" />
                  Applications & Approvals
                </button>
                <button
                  onClick={() => setLeaveSubTab('adjustments')}
                  className={`px-4 py-3 rounded-md font-['Lato:Medium',sans-serif] text-[14px] md:text-[16px] whitespace-nowrap transition-all flex items-center gap-2 ${
                    leaveSubTab === 'adjustments' 
                      ? 'bg-white text-[#2160ad] shadow-[0px_2px_8px_0px_rgba(33,96,173,0.15)] font-semibold' 
                      : 'text-[rgba(33,96,173,0.7)]'
                  }`}
                >
                  <AlertCircle className="w-4 h-4" />
                  Mass Adjustments
                </button>
              </div>

              {/* Leave Schemes Tab */}
              {leaveSubTab === 'schemes' && (
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div>
                      <h2 className="font-['Lato:Medium',sans-serif] text-[16px] text-[#2160ad] mb-1">
                        MOM-Compliant Leave Schemes
                      </h2>
                      <p className="font-['Lato:Regular',sans-serif] text-[16px] text-[#4a5565]">
                        Configure Singapore MOM-compliant leave entitlements with custom company benefits and staff group configurations
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button className="h-[36px] px-4 bg-white border border-[rgba(0,0,0,0.1)] text-neutral-950 rounded-lg font-['Lato:Medium',sans-serif] text-[16px] hover:bg-gray-50 flex items-center gap-2">
                        <Download className="w-4 h-4" />
                        Export
                      </button>
                      <button className="h-[36px] px-4 bg-[#2160ad] text-white rounded-lg font-['Lato:Medium',sans-serif] text-[16px] hover:bg-[#1a4d8a] flex items-center gap-2">
                        <Plus className="w-4 h-4" />
                        New Scheme
                      </button>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="relative flex-1 max-w-md">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#99a1af]" />
                      <input
                        type="text"
                        placeholder="Search schemes..."
                        className="w-full h-[36px] pl-10 pr-3 bg-[#f3f3f5] border-0 rounded-lg font-['Lato:Regular',sans-serif] text-[16px] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                      />
                    </div>
                    <button className="h-[36px] px-4 bg-white border border-[rgba(0,0,0,0.1)] text-neutral-950 rounded-lg font-['Lato:Medium',sans-serif] text-[16px] hover:bg-gray-50 whitespace-nowrap">
                      Configure Prorate
                    </button>
                  </div>

                  {/* Table with horizontal scroll */}
                  <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full min-w-[1200px]">
                        <thead>
                          <tr className="bg-[rgba(33,96,173,0.05)] border-b border-[rgba(0,0,0,0.1)]">
                            <th className="px-4 py-4 text-left font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">Scheme Details</th>
                            <th className="px-4 py-4 text-left font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">Leave Types</th>
                            <th className="px-4 py-4 text-left font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">Service Years</th>
                            <th className="px-4 py-4 text-left font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">Eligible</th>
                            <th className="px-4 py-4 text-left font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-[rgba(0,0,0,0.1)] hover:bg-gray-50">
                            <td className="px-4 py-4">
                              <div>
                                <p className="font-['Lato:Medium',sans-serif] text-[16px] text-[#2160ad]">Junior Staff Leave Scheme</p>
                                <p className="font-['Lato:Regular',sans-serif] text-[16px] text-[#6a7282]">Reduced entitlements for probationary and new hire employees</p>
                              </div>
                            </td>
                            <td className="px-4 py-4">
                              <span className="px-2 py-1 bg-[rgba(33,96,173,0.1)] border border-[rgba(33,96,173,0.3)] text-[#2160ad] rounded-lg font-['Lato:Medium',sans-serif] text-[16px]">
                                Annual Leave
                              </span>
                            </td>
                            <td className="px-4 py-4">
                              <span className="px-2 py-1 bg-white border border-[rgba(0,0,0,0.1)] text-neutral-950 rounded-lg font-['Lato:Medium',sans-serif] text-[12px]">
                                0-1 years
                              </span>
                            </td>
                            <td className="px-4 py-4">
                              <div className="flex items-center gap-2">
                                <span className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">15</span>
                                <span className="font-['Lato:Regular',sans-serif] text-[16px] text-[#6a7282]">employees</span>
                              </div>
                            </td>
                            <td className="px-4 py-4">
                              <div className="flex items-center gap-2">
                                <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg">
                                  <Info className="w-4 h-4 text-[#1c274c]" />
                                </button>
                                <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg">
                                  <Edit3 className="w-4 h-4 text-[#4a5565]" />
                                </button>
                                <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg">
                                  <Trash2 className="w-4 h-4 text-[#e7000b]" />
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr className="border-b border-[rgba(0,0,0,0.1)] hover:bg-gray-50">
                            <td className="px-4 py-4">
                              <div>
                                <p className="font-['Lato:Medium',sans-serif] text-[16px] text-[#2160ad]">Mid-Level Staff Standard Scheme</p>
                                <p className="font-['Lato:Regular',sans-serif] text-[16px] text-[#6a7282]">Standard MOM-compliant entitlements for regular employees</p>
                              </div>
                            </td>
                            <td className="px-4 py-4">
                              <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-[rgba(33,96,173,0.1)] border border-[rgba(33,96,173,0.3)] text-[#2160ad] rounded-lg font-['Lato:Medium',sans-serif] text-[16px]">
                                  Annual Leave
                                </span>
                                <span className="px-2 py-1 bg-[rgba(33,96,173,0.1)] border border-[rgba(33,96,173,0.3)] text-[#2160ad] rounded-lg font-['Lato:Medium',sans-serif] text-[16px]">
                                  Medical Leave
                                </span>
                              </div>
                            </td>
                            <td className="px-4 py-4">
                              <span className="px-2 py-1 bg-white border border-[rgba(0,0,0,0.1)] text-neutral-950 rounded-lg font-['Lato:Medium',sans-serif] text-[12px]">
                                2-7 years
                              </span>
                            </td>
                            <td className="px-4 py-4">
                              <div className="flex items-center gap-2">
                                <span className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">32</span>
                                <span className="font-['Lato:Regular',sans-serif] text-[16px] text-[#6a7282]">employees</span>
                              </div>
                            </td>
                            <td className="px-4 py-4">
                              <div className="flex items-center gap-2">
                                <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg">
                                  <Info className="w-4 h-4 text-[#1c274c]" />
                                </button>
                                <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg">
                                  <Edit3 className="w-4 h-4 text-[#4a5565]" />
                                </button>
                                <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg">
                                  <Trash2 className="w-4 h-4 text-[#e7000b]" />
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr className="border-b border-[rgba(0,0,0,0.1)] hover:bg-gray-50">
                            <td className="px-4 py-4">
                              <div>
                                <p className="font-['Lato:Medium',sans-serif] text-[16px] text-[#2160ad]">Senior Staff Enhanced Scheme</p>
                                <p className="font-['Lato:Regular',sans-serif] text-[16px] text-[#6a7282]">Enhanced company benefits for long-service employees</p>
                              </div>
                            </td>
                            <td className="px-4 py-4">
                              <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-[rgba(33,96,173,0.1)] border border-[rgba(33,96,173,0.3)] text-[#2160ad] rounded-lg font-['Lato:Medium',sans-serif] text-[16px]">
                                  Annual Leave
                                </span>
                                <span className="px-2 py-1 bg-[rgba(33,96,173,0.1)] border border-[rgba(33,96,173,0.3)] text-[#2160ad] rounded-lg font-['Lato:Medium',sans-serif] text-[16px]">
                                  Study Leave
                                </span>
                              </div>
                            </td>
                            <td className="px-4 py-4">
                              <span className="px-2 py-1 bg-white border border-[rgba(0,0,0,0.1)] text-neutral-950 rounded-lg font-['Lato:Medium',sans-serif] text-[12px]">
                                8+ years
                              </span>
                            </td>
                            <td className="px-4 py-4">
                              <div className="flex items-center gap-2">
                                <span className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">8</span>
                                <span className="font-['Lato:Regular',sans-serif] text-[16px] text-[#6a7282]">employees</span>
                              </div>
                            </td>
                            <td className="px-4 py-4">
                              <div className="flex items-center gap-2">
                                <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg">
                                  <Info className="w-4 h-4 text-[#1c274c]" />
                                </button>
                                <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg">
                                  <Edit3 className="w-4 h-4 text-[#4a5565]" />
                                </button>
                                <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg">
                                  <Trash2 className="w-4 h-4 text-[#e7000b]" />
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="px-4 py-4">
                              <div>
                                <p className="font-['Lato:Medium',sans-serif] text-[16px] text-[#2160ad]">Childcare Leave Scheme</p>
                                <p className="font-['Lato:Regular',sans-serif] text-[16px] text-[#6a7282]">Childcare leave for parents with young children (below 7 years old). Requires SG citizen child and completed 3 months service.</p>
                              </div>
                            </td>
                            <td className="px-4 py-4">
                              <span className="px-2 py-1 bg-[rgba(33,96,173,0.1)] border border-[rgba(33,96,173,0.3)] text-[#2160ad] rounded-lg font-['Lato:Medium',sans-serif] text-[16px]">
                                Childcare Leave
                              </span>
                            </td>
                            <td className="px-4 py-4">
                              <span className="px-2 py-1 bg-white border border-[rgba(0,0,0,0.1)] text-neutral-950 rounded-lg font-['Lato:Medium',sans-serif] text-[12px]">
                                0+ years
                              </span>
                            </td>
                            <td className="px-4 py-4">
                              <div className="flex items-center gap-2">
                                <span className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">18</span>
                                <span className="font-['Lato:Regular',sans-serif] text-[16px] text-[#6a7282]">employees</span>
                              </div>
                            </td>
                            <td className="px-4 py-4">
                              <div className="flex items-center gap-2">
                                <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg">
                                  <Info className="w-4 h-4 text-[#1c274c]" />
                                </button>
                                <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg">
                                  <Edit3 className="w-4 h-4 text-[#4a5565]" />
                                </button>
                                <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg">
                                  <Trash2 className="w-4 h-4 text-[#e7000b]" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* Entitlement Tab */}
              {leaveSubTab === 'entitlement' && (
                <div className="space-y-6 max-w-full">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div>
                      <h2 className="font-['Lato:SemiBold',sans-serif] text-[16px] text-[#2160ad] mb-1">
                        Employee Leave Entitlement
                      </h2>
                      <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#4a5565]">
                        View and manage leave balances and entitlements for all employees
                      </p>
                    </div>
                    <button className="h-[32px] px-4 bg-[#2160ad] text-white rounded-lg font-['Lato:Medium',sans-serif] text-[16px] hover:bg-[#1a4d8a] flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div>

                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#99a1af]" />
                      <input
                        type="text"
                        placeholder="Search by employee name or ID..."
                        className="w-full h-[36px] pl-10 pr-3 bg-[#f3f3f5] border-0 rounded-lg font-['Lato:Regular',sans-serif] text-[16px] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                      />
                    </div>
                    <select className="h-[36px] px-3 bg-[#f3f3f5] border-0 rounded-lg font-['Lato:Regular',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#2160ad]">
                      <option>All Departments</option>
                    </select>
                  </div>

                  {/* Table - No horizontal scroll */}
                  <div className="bg-white border border-[rgba(33,96,173,0.2)] rounded-[10px] overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-[rgba(33,96,173,0.05)] border-b border-[rgba(0,0,0,0.1)]">
                            <th className="px-4 py-4 text-left font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">Employee Name / ID</th>
                            <th className="px-4 py-4 text-left font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">Leave Schemes</th>
                            <th className="px-4 py-4 text-left font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { name: 'Annette Black', id: 'ADBFC008', schemes: ['Mid-Level Staff Standard Scheme', 'Childcare Leave Scheme'] },
                            { name: 'Jennifer Liu', id: 'JLIU002', schemes: ['Mid-Level Staff Standard Scheme', 'Childcare Leave Scheme'] },
                            { name: 'Marcus Chen', id: 'OPS001', schemes: ['Mid-Level Staff Standard Scheme', 'Childcare Leave Scheme'] },
                            { name: 'Rebecca Taylor', id: 'HR001', schemes: ['Mid-Level Staff Standard Scheme', 'Childcare Leave Scheme'] },
                          ].map((emp, idx) => (
                            <tr key={idx} className="border-b border-[rgba(0,0,0,0.1)] hover:bg-gray-50">
                              <td className="px-4 py-4">
                                <div>
                                  <p className="font-['Lato:Medium',sans-serif] text-[14px] text-[#101828]">{emp.name}</p>
                                  <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#4a5565]">{emp.id}</p>
                                </div>
                              </td>
                              <td className="px-4 py-4">
                                <div className="flex flex-wrap gap-2">
                                  {emp.schemes.map((scheme, i) => (
                                    <span key={i} className="px-2 py-1 bg-[rgba(33,96,173,0.1)] border border-[rgba(33,96,173,0.3)] text-[#2160ad] rounded-lg font-['Lato:Medium',sans-serif] text-[12px]">
                                      {scheme}
                                    </span>
                                  ))}
                                </div>
                              </td>
                              <td className="px-4 py-4">
                                <div className="flex items-center gap-2">
                                  <button className="h-[32px] px-3 bg-white border border-[#2160ad] text-[#2160ad] rounded-lg font-['Lato:Medium',sans-serif] text-[16px] hover:bg-[#2160ad] hover:text-white transition-colors flex items-center gap-2">
                                    <Info className="w-4 h-4" />
                                    Info
                                  </button>
                                  <button className="h-[32px] px-3 bg-[#2160ad] text-white rounded-lg font-['Lato:Medium',sans-serif] text-[16px] hover:bg-[#1a4d8a] transition-colors flex items-center gap-2">
                                    <Edit3 className="w-4 h-4" />
                                    Adjust
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* Applications & Approvals Tab */}
              {leaveSubTab === 'applications' && (
                <div className="space-y-6 max-w-full">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <h2 className="font-['Lato:Medium',sans-serif] text-[16px] text-[#2160ad]">
                      Leave Applications & Approvals
                    </h2>
                    <button className="h-[32px] px-4 bg-[#2160ad] text-white rounded-lg font-['Lato:Medium',sans-serif] text-[16px] hover:bg-[#1a4d8a] flex items-center gap-2">
                      <Plus className="w-4 h-4" />
                      Apply for Leave
                    </button>
                  </div>

                  {/* Table - No horizontal scroll */}
                  <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] overflow-hidden">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-[rgba(33,96,173,0.05)] border-b border-[rgba(0,0,0,0.1)]">
                          <th className="px-4 py-4 text-left font-['Lato:SemiBold',sans-serif] text-[14px] text-[#2160ad]">Employee</th>
                          <th className="px-4 py-4 text-left font-['Lato:SemiBold',sans-serif] text-[14px] text-[#2160ad]">Leave Type</th>
                          <th className="px-4 py-4 text-left font-['Lato:SemiBold',sans-serif] text-[14px] text-[#2160ad]">End Date</th>
                          <th className="px-4 py-4 text-left font-['Lato:SemiBold',sans-serif] text-[14px] text-[#2160ad]">Days</th>
                          <th className="px-4 py-4 text-left font-['Lato:SemiBold',sans-serif] text-[14px] text-[#2160ad]">Recommendation</th>
                          <th className="px-4 py-4 text-left font-['Lato:SemiBold',sans-serif] text-[14px] text-[#2160ad]">Status</th>
                          <th className="px-4 py-4 text-left font-['Lato:SemiBold',sans-serif] text-[14px] text-[#2160ad]">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {leaveApplications.map((app) => (
                          <tr key={app.id} className="border-b border-[rgba(0,0,0,0.1)] hover:bg-gray-50">
                            <td className="px-4 py-4">
                              <div>
                                <p className="font-['Lato:Medium',sans-serif] text-[14px] text-neutral-950">{app.employeeName}</p>
                                <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#4a5565]">{app.department}</p>
                              </div>
                            </td>
                            <td className="px-4 py-4">
                              <p className="font-['Lato:Regular',sans-serif] text-[14px] text-neutral-950">{app.leaveType}</p>
                            </td>
                            <td className="px-4 py-4">
                              <p className="font-['Lato:Regular',sans-serif] text-[14px] text-neutral-950">{app.endDate}</p>
                            </td>
                            <td className="px-4 py-4">
                              <p className="font-['Lato:Regular',sans-serif] text-[14px] text-neutral-950">{app.days}</p>
                            </td>
                            <td className="px-4 py-4">
                              <p className="font-['Lato:Regular',sans-serif] text-[14px] text-neutral-950">{app.recommendation}</p>
                            </td>
                            <td className="px-4 py-4">
                              <span className={`px-2 py-1 rounded-lg font-['Lato:Medium',sans-serif] text-[12px] border ${getLeaveStatusClass(app.status)}`}>
                                {app.status}
                              </span>
                            </td>
                            <td className="px-4 py-4">
                              <div className="flex items-center gap-2">
                                <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors">
                                  <Info className="w-4 h-4 text-[#1c274c]" />
                                </button>
                                {app.status === 'pending' && (
                                  <>
                                    <button
                                      onClick={() => handleApprove(app.id)}
                                      className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors"
                                    >
                                      <Check className="w-4 h-4 text-[#00a63e]" />
                                    </button>
                                    <button
                                      onClick={() => handleReject(app.id)}
                                      className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors"
                                    >
                                      <X className="w-4 h-4 text-[#e7000b]" />
                                    </button>
                                  </>
                                )}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Mass Adjustments Tab */}
              {leaveSubTab === 'adjustments' && (
                <div className="space-y-5 max-w-full">
                  {/* Mass Leave Adjustment Card */}
                  <div className="bg-white border border-gray-100 rounded-[10px] overflow-hidden">
                    <div className="bg-[rgba(33,96,173,0.05)] border-b border-gray-100 px-5 py-4">
                      <h3 className="font-['Lato:Regular',sans-serif] text-[16px] text-[#101828]">Mass Leave Adjustment</h3>
                    </div>
                    <div className="p-5 space-y-6">
                      {/* Company and Department */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">Company</label>
                          <select className="w-full h-[40px] px-3 bg-[#f3f3f5] border-0 rounded-lg font-['Lato:Regular',sans-serif] text-[16px] text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]">
                            <option>Select company</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">Department</label>
                          <select className="w-full h-[40px] px-3 bg-[#f3f3f5] border-0 rounded-lg font-['Lato:Regular',sans-serif] text-[16px] text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]">
                            <option>Select department</option>
                          </select>
                        </div>
                      </div>

                      {/* Leave Type */}
                      <div className="space-y-2">
                        <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">Leave Type</label>
                        <select className="w-full h-[40px] px-3 bg-[#f3f3f5] border-0 rounded-lg font-['Lato:Regular',sans-serif] text-[16px] text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]">
                          <option>Select leave type</option>
                        </select>
                      </div>

                      {/* Adjustment Days and Leave Dates */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">
                            Adjustment (Days)
                            <span className="text-[#fb2c36] ml-0.5">*</span>
                          </label>
                          <div className="flex items-center gap-2">
                            <button className="h-[32px] w-[40px] bg-white border border-[#2160ad] text-[#2160ad] rounded-lg font-['Lato:Medium',sans-serif] text-[16px] hover:bg-gray-50 flex items-center justify-center">
                              -
                            </button>
                            <input
                              type="number"
                              defaultValue="0"
                              className="flex-1 h-[40px] px-3 bg-[#f3f3f5] border-0 rounded-lg font-['Lato:Regular',sans-serif] text-[16px] text-center text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                            />
                            <button className="h-[32px] w-[43px] bg-white border border-[#2160ad] text-[#2160ad] rounded-lg font-['Lato:Medium',sans-serif] text-[16px] hover:bg-gray-50 flex items-center justify-center">
                              +
                            </button>
                          </div>
                          <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#4a5565]">Use positive numbers to add leave, negative to deduct</p>
                        </div>
                        <div className="space-y-2">
                          <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">Leave Dates (Optional)</label>
                          <button className="w-full h-[40px] px-3 bg-white border border-[rgba(0,0,0,0.1)] rounded-lg flex items-center gap-2 hover:bg-gray-50">
                            <Calendar className="w-4 h-4 text-[#0a0a0a]" />
                            <span className="font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950">Select leave dates</span>
                          </button>
                        </div>
                      </div>

                      {/* Adjustment Date */}
                      <div className="space-y-2">
                        <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">Adjustment Date (Record Date)</label>
                        <input
                          type="date"
                          className="w-full h-[40px] px-3 bg-[#f3f3f5] border-0 rounded-lg font-['Lato:Regular',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                        />
                      </div>

                      {/* Reason */}
                      <div className="space-y-2">
                        <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">Reason for Mass Adjustment</label>
                        <input
                          type="text"
                          placeholder="Enter reason for adjustment"
                          className="w-full h-[40px] px-3 bg-[#f3f3f5] border-0 rounded-lg font-['Lato:Regular',sans-serif] text-[16px] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Filter by Roles Card */}
                  <div className="bg-white border border-gray-100 rounded-[10px] overflow-hidden">
                    <div className="bg-[rgba(33,96,173,0.05)] border-b border-gray-100 px-5 py-4">
                      <h3 className="font-['Lato:Regular',sans-serif] text-[16px] text-[#101828]">Filter by Roles (Optional)</h3>
                    </div>
                    <div className="p-5">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div className="flex items-center gap-2">
                          <input type="checkbox" className="w-4 h-4 rounded border-[rgba(0,0,0,0.1)] bg-[#f3f3f5]" />
                          <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">MTO</label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input type="checkbox" className="w-4 h-4 rounded border-[rgba(0,0,0,0.1)] bg-[#f3f3f5]" />
                          <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">EMT</label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input type="checkbox" className="w-4 h-4 rounded border-[rgba(0,0,0,0.1)] bg-[#f3f3f5]" />
                          <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">Medic</label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input type="checkbox" className="w-4 h-4 rounded border-[rgba(0,0,0,0.1)] bg-[#f3f3f5]" />
                          <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">Operations</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Staff Selection List Card */}
                  <div className="bg-white border border-gray-100 rounded-[10px] overflow-hidden">
                    <div className="bg-[rgba(33,96,173,0.05)] border-b border-gray-100 px-5 py-4">
                      <h3 className="font-['Lato:Regular',sans-serif] text-[16px] text-[#101828]">Staff Selection List</h3>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-gray-50 border-b border-gray-100">
                            <th className="px-2 py-3 text-left w-12">
                              <input type="checkbox" className="w-4 h-4 rounded border-[rgba(0,0,0,0.1)] bg-[#f3f3f5]" />
                            </th>
                            <th className="px-2 py-3 text-left font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">Staff ID</th>
                            <th className="px-2 py-3 text-left font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">Employee Name</th>
                            <th className="px-2 py-3 text-left font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">Division</th>
                            <th className="px-2 py-3 text-left font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">Department</th>
                            <th className="px-2 py-3 text-left font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">Date Joined</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { id: 'ADBFC008', name: 'Annette Black', division: 'IM Ambulance', department: 'Operations', dateJoined: '2023-03-15' },
                            { id: 'JLIU002', name: 'Jennifer Liu', division: 'IM Ambulance', department: 'Ground Crew (Shift)', dateJoined: '2018-01-10' },
                            { id: 'OPS001', name: 'Marcus Chen', division: 'IM Ambulance', department: 'Operations', dateJoined: '2020-05-20' },
                            { id: 'HR001', name: 'Rebecca Taylor', division: 'IM Ambulance', department: 'Ground Crew (Office Hours)', dateJoined: '2019-08-01' },
                          ].map((staff, idx) => (
                            <tr key={idx} className="border-b border-gray-50">
                              <td className="px-2 py-3">
                                <input type="checkbox" className="w-4 h-4 rounded border-[rgba(0,0,0,0.1)] bg-[#f3f3f5]" />
                              </td>
                              <td className="px-2 py-3">
                                <span className="font-['Inter:Regular',sans-serif] text-[16px] text-neutral-950">{staff.id}</span>
                              </td>
                              <td className="px-2 py-3">
                                <span className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">{staff.name}</span>
                              </td>
                              <td className="px-2 py-3">
                                <span className="font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950">{staff.division}</span>
                              </td>
                              <td className="px-2 py-3">
                                <span className="font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950">{staff.department}</span>
                              </td>
                              <td className="px-2 py-3">
                                <span className="font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950">{staff.dateJoined}</span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="px-5 py-4 flex items-center justify-between border-t border-gray-100">
                      <p className="font-['Lato:Regular',sans-serif] text-[16px] text-[#6a7282]">0 of 4 employees selected</p>
                      <div className="flex items-center gap-3">
                        <button className="h-[36px] px-4 bg-white border border-gray-200 text-neutral-950 rounded-lg font-['Lato:Medium',sans-serif] text-[16px] hover:bg-gray-50">
                          Preview Changes
                        </button>
                        <button className="h-[36px] px-4 bg-[#2160ad] text-white rounded-lg font-['Lato:Medium',sans-serif] text-[16px] hover:bg-[#1a4d8a]">
                          Apply Mass Adjustment
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Past Mass Adjustments - Audit Trail Card */}
                  <div className="bg-white border border-gray-100 rounded-[10px] overflow-hidden">
                    <div className="bg-[rgba(33,96,173,0.05)] border-b border-gray-100 px-5 py-4">
                      <h3 className="font-['Lato:Regular',sans-serif] text-[16px] text-[#101828]">Past Mass Adjustments - Audit Trail</h3>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-gray-50 border-b border-gray-100">
                            <th className="px-2 py-3 text-left font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">Adjustment ID</th>
                            <th className="px-2 py-3 text-left font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">Leave Type</th>
                            <th className="px-2 py-3 text-left font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">Reason</th>
                            <th className="px-2 py-3 text-left font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">Date Posted</th>
                            <th className="px-2 py-3 text-left font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">Adjustment</th>
                            <th className="px-2 py-3 text-left font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">Processed By</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { id: 'MA001', leaveType: 'Annual Leave', reason: 'Year-end policy update', datePosted: '2024-01-15', adjustment: '+2 days', adjustmentColor: 'text-[#00a63e]', processedBy: 'Admin User' },
                            { id: 'MA002', leaveType: 'Medical Leave', reason: 'Department restructure', datePosted: '2024-01-10', adjustment: '+1 day', adjustmentColor: 'text-[#00a63e]', processedBy: 'HR Manager' },
                            { id: 'MA003', leaveType: 'Compassionate Leave', reason: 'System correction', datePosted: '2024-01-05', adjustment: '-1 day', adjustmentColor: 'text-[#e7000b]', processedBy: 'System Admin' },
                          ].map((record, idx) => (
                            <tr key={idx} className="border-b border-gray-50 last:border-b-0">
                              <td className="px-2 py-3">
                                <span className="font-['Inter:Regular',sans-serif] text-[16px] text-neutral-950">{record.id}</span>
                              </td>
                              <td className="px-2 py-3">
                                <span className="font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950">{record.leaveType}</span>
                              </td>
                              <td className="px-2 py-3">
                                <span className="font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950">{record.reason}</span>
                              </td>
                              <td className="px-2 py-3">
                                <span className="font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950">{record.datePosted}</span>
                              </td>
                              <td className="px-2 py-3">
                                <span className={`font-['Lato:Medium',sans-serif] text-[14px] ${record.adjustmentColor}`}>{record.adjustment}</span>
                              </td>
                              <td className="px-2 py-3">
                                <span className="font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950">{record.processedBy}</span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'attendance' && (
            <div className="space-y-6">
              {/* Date Navigation and Search */}
              <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#717182]" />
                  <input
                    type="text"
                    placeholder="Search employees..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-[36px] pl-10 pr-3 bg-[#f3f3f5] border border-[rgba(0,0,0,0.1)] rounded-lg font-['Lato:Regular',sans-serif] text-[16px] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                  />
                </div>
                
                {/* Date Picker */}
                <div className="flex items-center gap-3">
                  <button className="h-[32px] w-[38px] flex items-center justify-center bg-white border border-[rgba(0,0,0,0.1)] rounded-lg hover:bg-gray-50">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <div className="h-[36px] px-3 bg-white border border-[rgba(0,0,0,0.1)] rounded-lg flex items-center gap-2 min-w-[140px]">
                    <Calendar className="w-4 h-4 text-[#0a0a0a]" />
                    <span className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">{selectedDate}</span>
                  </div>
                  <button className="h-[32px] w-[38px] flex items-center justify-center bg-white border border-[rgba(0,0,0,0.1)] rounded-lg hover:bg-gray-50">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Warning Banner */}
              {latecomersCount > 0 && (
                <div className="bg-red-50 border-l-4 border-[#ff6467] rounded-tr-[10px] rounded-br-[10px] p-5">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-[#ff6467] rounded-full flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="w-3 h-3 text-white" />
                    </div>
                    <p className="font-['Lato:Regular',sans-serif] text-[16px] text-[#c10007]">
                      <span className="font-bold">Warning:</span> There are <span className="font-bold">{latecomersCount}</span> latecomers today
                    </p>
                  </div>
                </div>
              )}

              {/* Table */}
              <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[800px]">
                    <thead>
                      <tr className="bg-[rgba(33,96,173,0.05)] border-b border-[rgba(0,0,0,0.1)]">
                        <th className="px-4 py-4 text-left font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">
                          Employee
                        </th>
                        <th className="px-4 py-4 text-left font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">
                          Status
                        </th>
                        <th className="px-4 py-4 text-left font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">
                          Clock In
                        </th>
                        <th className="px-4 py-4 text-left font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">
                          Clock Out
                        </th>
                        <th className="px-4 py-4 text-left font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">
                          Late
                        </th>
                        <th className="px-4 py-4 text-left font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">
                          Overtime
                        </th>
                        <th className="px-4 py-4 text-left font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {attendanceData.map((record) => (
                        <tr key={record.id} className="border-b border-[rgba(0,0,0,0.1)] hover:bg-gray-50">
                          <td className="px-4 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-[#2160ad] flex items-center justify-center">
                                <span className="font-['Lato:Medium',sans-serif] text-[14px] text-white">
                                  {record.employeeName.split(' ').map(n => n[0]).join('')}
                                </span>
                              </div>
                              <span className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">
                                {record.employeeName}
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-4">
                            <span className={`px-2 py-1 rounded-lg font-['Lato:Medium',sans-serif] text-[12px] border ${getStatusBadgeClass(record.status)}`}>
                              {record.status}
                            </span>
                          </td>
                          <td className="px-4 py-4">
                            <div className="flex items-center gap-2">
                              <span className="font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950">
                                {record.clockIn}
                              </span>
                              {record.hasLateWarning && (
                                <div className="w-5 h-5 bg-[#e71b1b] rounded-full flex items-center justify-center">
                                  <span className="text-white text-[10px] font-bold">!</span>
                                </div>
                              )}
                            </div>
                          </td>
                          <td className="px-4 py-4">
                            <span className="font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950">
                              {record.clockOut}
                            </span>
                          </td>
                          <td className="px-4 py-4">
                            <span className="font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950">
                              {record.late}
                            </span>
                          </td>
                          <td className="px-4 py-4">
                            <div className="flex items-center gap-2">
                              <span className="font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950">
                                {record.overtime}
                              </span>
                              {record.hasOvertimeInfo && (
                                <div className="w-4 h-4 bg-[#2160ad] rounded-full flex items-center justify-center">
                                  <span className="text-white text-[8px]">🕐</span>
                                </div>
                              )}
                            </div>
                          </td>
                          <td className="px-4 py-4">
                            <div className="flex items-center gap-2">
                              <button 
                                onClick={() => handleInfoClick(record)}
                                className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors"
                              >
                                <Info className="w-4 h-4 text-[#155dfc]" />
                              </button>
                              <button 
                                onClick={() => handleEditClick(record)}
                                className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors"
                              >
                                <Edit3 className="w-4 h-4 text-[#155dfc]" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">
                      Total Employees
                    </h3>
                    <Users className="w-5 h-5 text-[#2160ad]" />
                  </div>
                  <p className="font-['Lato:Bold',sans-serif] text-[30px] text-[#2160ad] mb-1">
                    {employees.length}
                  </p>
                  <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#717182]">
                    All staff members
                  </p>
                </div>

                <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">
                      Active Employees
                    </h3>
                    <Users className="w-5 h-5 text-[#00a63e]" />
                  </div>
                  <p className="font-['Lato:Bold',sans-serif] text-[30px] text-[#00a63e] mb-1">
                    {activeEmployees}
                  </p>
                  <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#717182]">
                    Currently working
                  </p>
                </div>

                <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">
                      Inactive Employees
                    </h3>
                    <Users className="w-5 h-5 text-[#e7000b]" />
                  </div>
                  <p className="font-['Lato:Bold',sans-serif] text-[30px] text-[#e7000b] mb-1">
                    {inactiveEmployees}
                  </p>
                  <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#717182]">
                    On leave or inactive
                  </p>
                </div>
              </div>

              {/* Search and Filters */}
              <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 flex-1">
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#717182]" />
                    <input
                      type="text"
                      placeholder="Search employees..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full h-[36px] pl-10 pr-3 bg-[#f3f3f5] border border-[rgba(0,0,0,0.1)] rounded-lg font-['Lato:Regular',sans-serif] text-[16px] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                    />
                  </div>
                  <select className="h-[36px] px-3 bg-[#f3f3f5] border border-[rgba(0,0,0,0.1)] rounded-lg font-['Lato:Regular',sans-serif] text-[16px]">
                    <option>All Departments</option>
                    <option>Operations</option>
                    <option>Ground Crew</option>
                  </select>
                  <select className="h-[36px] px-3 bg-[#f3f3f5] border border-[rgba(0,0,0,0.1)] rounded-lg font-['Lato:Regular',sans-serif] text-[16px]">
                    <option>All Status</option>
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </div>
                <button
                  onClick={() => navigate('/hr/add-employee')}
                  className="h-[36px] px-4 bg-[#2160ad] text-white rounded-lg font-['Lato:Medium',sans-serif] text-[16px] flex items-center justify-center gap-2 hover:bg-[#1a4d8a] transition-colors whitespace-nowrap"
                >
                  <Plus className="w-4 h-4" />
                  Add Employee
                </button>
              </div>

              {/* Table */}
              <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[800px]">
                    <thead>
                      <tr className="bg-[rgba(33,96,173,0.05)] border-b border-[rgba(0,0,0,0.1)]">
                        <th className="px-4 py-4 text-left font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">
                          Employee
                        </th>
                        <th className="px-4 py-4 text-left font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">
                          Staff ID
                        </th>
                        <th className="px-4 py-4 text-left font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">
                          Email
                        </th>
                        <th className="px-4 py-4 text-left font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">
                          Department
                        </th>
                        <th className="px-4 py-4 text-left font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">
                          Position
                        </th>
                        <th className="px-4 py-4 text-left font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">
                          Status
                        </th>
                        <th className="px-4 py-4 text-left font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredEmployees.map((employee) => (
                        <tr key={employee.id} className="border-b border-[rgba(0,0,0,0.1)] hover:bg-gray-50">
                          <td className="px-4 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-[#2160ad] flex items-center justify-center">
                                <span className="font-['Lato:Medium',sans-serif] text-[14px] text-white">
                                  {employee.initials}
                                </span>
                              </div>
                              <span className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">
                                {employee.name}
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-4">
                            <span className="font-['Inter:Regular',sans-serif] text-[14px] text-[#717182]">
                              {employee.staffId}
                            </span>
                          </td>
                          <td className="px-4 py-4">
                            <span className="font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950">
                              {employee.email}
                            </span>
                          </td>
                          <td className="px-4 py-4">
                            <span className="font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950">
                              {employee.department}
                            </span>
                          </td>
                          <td className="px-4 py-4">
                            <div className="flex flex-wrap gap-1">
                              {employee.positions.map((position, idx) => (
                                <span
                                  key={idx}
                                  className="bg-[rgba(33,96,173,0.1)] border border-[rgba(33,96,173,0.3)] text-[#2160ad] px-2 py-1 rounded-lg font-['Lato:Medium',sans-serif] text-[12px]"
                                >
                                  {position}
                                </span>
                              ))}
                            </div>
                          </td>
                          <td className="px-4 py-4">
                            <span
                              className={`px-2 py-1 rounded-lg font-['Lato:Medium',sans-serif] text-[12px] ${
                                employee.status === 'Active'
                                  ? 'bg-green-50 border border-[#b9f8cf] text-[#008236]'
                                  : 'bg-red-50 border border-red-200 text-red-700'
                              }`}
                            >
                              {employee.status}
                            </span>
                          </td>
                          <td className="px-4 py-4">
                            <div className="flex items-center gap-2">
                              <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors">
                                <Eye className="w-4 h-4 text-[#155dfc]" />
                              </button>
                              <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors">
                                <Edit3 className="w-4 h-4 text-[#2160ad]" />
                              </button>
                              <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors">
                                <Trash2 className="w-4 h-4 text-[#e7000b]" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="font-['Lato:Regular',sans-serif] text-[16px] text-[#717182]">
                Showing {filteredEmployees.length} of {employees.length} employees
              </p>
            </div>
          )}

          {activeTab === 'payroll' && (
            <div className="space-y-6">
              {/* Date and Download */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <select className="h-[36px] px-3 bg-[#f3f3f5] border-0 rounded-lg font-['Lato:Regular',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#2160ad]">
                    <option>October 2025</option>
                  </select>
                </div>
                <button className="h-[36px] px-4 bg-[#2160ad] text-white rounded-lg font-['Lato:Medium',sans-serif] text-[16px] hover:bg-[#1a4d8a] flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>

              {/* Search */}
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#99a1af]" />
                <input
                  type="text"
                  placeholder="Search employees..."
                  className="w-full h-[36px] pl-10 pr-3 bg-[#f3f3f5] border-0 rounded-lg font-['Lato:Regular',sans-serif] text-[16px] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                />
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="bg-white border border-gray-200 rounded-[14px] p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#6a7282] mb-2">Total Base Pay</p>
                      <p className="font-['Lato:Medium',sans-serif] text-[24px] text-[#101828]">18700.00</p>
                    </div>
                    <div className="w-10 h-10 bg-blue-50 rounded-[10px] flex items-center justify-center">
                      <Users className="w-5 h-5 text-[#2160ad]" />
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-[14px] p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#6a7282] mb-2">Total Incentives</p>
                      <p className="font-['Lato:Medium',sans-serif] text-[24px] text-[#101828]">1300.00</p>
                    </div>
                    <div className="w-10 h-10 bg-green-50 rounded-[10px] flex items-center justify-center">
                      <Plus className="w-5 h-5 text-[#00a63e]" />
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-[14px] p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#6a7282] mb-2">Total Allowances</p>
                      <p className="font-['Lato:Medium',sans-serif] text-[24px] text-[#101828]">1100.00</p>
                    </div>
                    <div className="w-10 h-10 bg-purple-50 rounded-[10px] flex items-center justify-center">
                      <Plus className="w-5 h-5 text-[#9810fa]" />
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-[14px] p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#6a7282] mb-2">Total Deductions</p>
                      <p className="font-['Lato:Medium',sans-serif] text-[24px] text-[#101828]">700.00</p>
                    </div>
                    <div className="w-10 h-10 bg-red-50 rounded-[10px] flex items-center justify-center">
                      <p className="text-[#e7000b] text-[16px]">-</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-[14px] p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#6a7282] mb-2">Total CPF</p>
                      <p className="font-['Lato:Medium',sans-serif] text-[24px] text-[#101828]">4050.00</p>
                    </div>
                    <div className="w-10 h-10 bg-orange-50 rounded-[10px] flex items-center justify-center">
                      <Users className="w-5 h-5 text-[#f54900]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Table with horizontal scroll */}
              <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[1400px]">
                    <thead>
                      <tr className="bg-[rgba(33,96,173,0.05)] border-b border-[rgba(0,0,0,0.1)]">
                        <th className="px-4 py-4 text-left font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">Employee</th>
                        <th className="px-4 py-4 text-left font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">Company</th>
                        <th className="px-4 py-4 text-left font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">Base Pay</th>
                        <th className="px-4 py-4 text-left font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">Incentives</th>
                        <th className="px-4 py-4 text-left font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">Allowances</th>
                        <th className="px-4 py-4 text-left font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">Deductions</th>
                        <th className="px-4 py-4 text-left font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">CPF</th>
                        <th className="px-4 py-4 text-left font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">Net Pay</th>
                        <th className="px-4 py-4 text-left font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: 'Annette Black', initials: 'AB', id: 'ADBFC008', positions: 'EMT, Medic', company: 'IM Ambulance', basePay: '3000.00', incentives: '250.00', allowances: '200.00', deductions: '150.00', cpf: '650.00', netPay: '2650.00' },
                        { name: 'Jennifer Liu', initials: 'JL', id: 'JLIU002', positions: 'Paramedic, Team Lead', company: 'IM Ambulance', basePay: '5500.00', incentives: '500.00', allowances: '300.00', deductions: '200.00', cpf: '1200.00', netPay: '4900.00' },
                        { name: 'Marcus Chen', initials: 'MC', id: 'OPS001', positions: 'Operations Manager, Dispatcher', company: 'IM Ambulance', basePay: '4200.00', incentives: '150.00', allowances: '250.00', deductions: '100.00', cpf: '900.00', netPay: '3600.00' },
                        { name: 'Rebecca Taylor', initials: 'RT', id: 'HR001', positions: 'HR Manager, Recruitment Specialist', company: 'IM Ambulance', basePay: '6000.00', incentives: '400.00', allowances: '350.00', deductions: '250.00', cpf: '1300.00', netPay: '5200.00' },
                      ].map((emp, idx) => (
                        <tr key={idx} className="border-b border-[rgba(0,0,0,0.1)] hover:bg-gray-50">
                          <td className="px-4 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-[#2160ad] flex items-center justify-center">
                                <span className="font-['Lato:Medium',sans-serif] text-[14px] text-white">{emp.initials}</span>
                              </div>
                              <div>
                                <p className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">{emp.name}</p>
                                <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#717182]">{emp.id} • {emp.positions}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4">
                            <span className="font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950">{emp.company}</span>
                          </td>
                          <td className="px-4 py-4">
                            <span className="font-['Inter:Regular',sans-serif] text-[16px] text-neutral-950">{emp.basePay}</span>
                          </td>
                          <td className="px-4 py-4">
                            <span className="font-['Inter:Regular',sans-serif] text-[16px] text-neutral-950">{emp.incentives}</span>
                          </td>
                          <td className="px-4 py-4">
                            <span className="font-['Inter:Regular',sans-serif] text-[16px] text-neutral-950">{emp.allowances}</span>
                          </td>
                          <td className="px-4 py-4">
                            <span className="font-['Inter:Regular',sans-serif] text-[16px] text-neutral-950">{emp.deductions}</span>
                          </td>
                          <td className="px-4 py-4">
                            <span className="font-['Inter:Regular',sans-serif] text-[16px] text-neutral-950">{emp.cpf}</span>
                          </td>
                          <td className="px-4 py-4">
                            <span className="font-['Inter:Regular',sans-serif] text-[16px] text-neutral-950">{emp.netPay}</span>
                          </td>
                          <td className="px-4 py-4">
                            <div className="flex items-center gap-2">
                              <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg">
                                <Eye className="w-4 h-4 text-[#0a0a0a]" />
                              </button>
                              <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg">
                                <Edit3 className="w-4 h-4 text-[#0a0a0a]" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="font-['Lato:Regular',sans-serif] text-[16px] text-[#717182]">
                Showing 4 of 4 payroll records
              </p>
            </div>
          )}

          {activeTab === 'incentives' && (
            <div className="space-y-6">
              {/* Header */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <h2 className="font-['Lato:Medium',sans-serif] text-[16px] text-black mb-1">Employee Incentive Overview</h2>
                  <p className="font-['Lato:Regular',sans-serif] text-[16px] text-[#717182]">Monitor employee incentive tiers and performance metrics</p>
                </div>
                <button className="h-[36px] px-4 bg-white border border-[rgba(0,0,0,0.1)] text-neutral-950 rounded-lg font-['Lato:Medium',sans-serif] text-[16px] hover:bg-gray-50 flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Configuration
                </button>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] p-5">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 bg-blue-100 rounded-[10px] flex items-center justify-center">
                      <Users className="w-5 h-5 text-[#2160ad]" />
                    </div>
                    <div>
                      <p className="font-['Lato:Regular',sans-serif] text-[16px] text-[#717182]">Total Employees</p>
                      <p className="font-['Lato:Medium',sans-serif] text-[16px] text-black">8</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] p-5">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 bg-blue-100 rounded-[10px] flex items-center justify-center">
                      <Download className="w-5 h-5 text-[#2160ad]" />
                    </div>
                    <div>
                      <p className="font-['Lato:Regular',sans-serif] text-[16px] text-[#717182]">Total Incentives</p>
                      <p className="font-['Lato:Medium',sans-serif] text-[16px] text-black">4646.79</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] p-5">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 bg-blue-100 rounded-[10px] flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-[#2160ad]" />
                    </div>
                    <div>
                      <p className="font-['Lato:Regular',sans-serif] text-[16px] text-[#717182]">Total OT Hours</p>
                      <p className="font-['Lato:Medium',sans-serif] text-[16px] text-black">68.0h</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] p-5">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 bg-blue-100 rounded-[10px] flex items-center justify-center">
                      <AlertCircle className="w-5 h-5 text-[#2160ad]" />
                    </div>
                    <div>
                      <p className="font-['Lato:Regular',sans-serif] text-[16px] text-[#717182]">Avg Per Employee</p>
                      <p className="font-['Lato:Medium',sans-serif] text-[16px] text-black">580.85</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] p-5">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 bg-blue-100 rounded-[10px] flex items-center justify-center">
                      <Info className="w-5 h-5 text-[#2160ad]" />
                    </div>
                    <div>
                      <p className="font-['Lato:Regular',sans-serif] text-[16px] text-[#717182]">Total Cases</p>
                      <p className="font-['Lato:Medium',sans-serif] text-[16px] text-black">322</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Table Card - NO horizontal scroll */}
              <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] overflow-hidden">
                <div className="bg-[rgba(33,96,173,0.05)] border-b border-gray-200 px-6 py-4">
                  <p className="font-['Lato:Regular',sans-serif] text-[16px] text-[#2160ad]">Employee Incentive Details</p>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-[rgba(33,96,173,0.05)] border-b border-[rgba(33,96,173,0.2)]">
                        <th className="px-6 py-3 text-left font-['Lato:Medium',sans-serif] text-[14px] text-[#2160ad]">Employee Details</th>
                        <th className="px-4 py-3 text-center font-['Lato:Medium',sans-serif] text-[14px] text-[#2160ad]">Cases</th>
                        <th className="px-4 py-3 text-center font-['Lato:Medium',sans-serif] text-[14px] text-[#2160ad]">Case Incentives</th>
                        <th className="px-4 py-3 text-center font-['Lato:Medium',sans-serif] text-[14px] text-[#2160ad]">Overtime</th>
                        <th className="px-4 py-3 text-center font-['Lato:Medium',sans-serif] text-[14px] text-[#2160ad]">Other Incentives</th>
                        <th className="px-4 py-3 text-center font-['Lato:Medium',sans-serif] text-[14px] text-[#2160ad]">Net Incentive</th>
                        <th className="px-4 py-3 text-center font-['Lato:Medium',sans-serif] text-[14px] text-[#2160ad]">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: 'John Chen', id: 'EMP001', salary: '$57200.00/yr', hourly: '($25.00/hr)', cases: '45', caseIncentive: '$192.00', overtime: '$387.50', otherIncentive: '$94.00', netIncentive: '$673.50' },
                        { name: 'Sarah Lim', id: 'EMP002', salary: '$62400.00/yr', hourly: '($27.27/hr)', cases: '38', caseIncentive: '$144.00', overtime: '$338.55', otherIncentive: '$63.00', netIncentive: '$545.55' },
                        { name: 'Michael Wong', id: 'EMP003', salary: '$54080.00/yr', hourly: '($23.64/hr)', cases: '52', caseIncentive: '$235.00', overtime: '$363.04', otherIncentive: '$122.00', netIncentive: '$720.04' },
                        { name: 'Emily Tan', id: 'EMP004', salary: '$49920.00/yr', hourly: '($21.82/hr)', cases: '35', caseIncentive: '$159.00', overtime: '$147.57', otherIncentive: '$64.00', netIncentive: '$370.57' },
                        { name: 'David Kumar', id: 'EMP005', salary: '$68640.00/yr', hourly: '($30.00/hr)', cases: '41', caseIncentive: '$194.00', overtime: '$600.00', otherIncentive: '$92.00', netIncentive: '$886.00' },
                        { name: 'Rachel Ng', id: 'EMP006', salary: '$54912.00/yr', hourly: '($24.00/hr)', cases: '42', caseIncentive: '$210.00', overtime: '$336.00', otherIncentive: '$69.00', netIncentive: '$615.00' },
                        { name: 'Alex Lee', id: 'EMP007', salary: '$62920.00/yr', hourly: '($27.50/hr)', cases: '36', caseIncentive: '$185.00', overtime: '$220.63', otherIncentive: '$41.00', netIncentive: '$446.63' },
                        { name: 'Lisa Zhang', id: 'EMP008', salary: '$53768.00/yr', hourly: '($23.50/hr)', cases: '33', caseIncentive: '$174.00', overtime: '$164.50', otherIncentive: '$51.00', netIncentive: '$389.50' },
                      ].map((emp, idx) => (
                        <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="px-6 py-4">
                            <div>
                              <p className="font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950">{emp.name}</p>
                              <p className="font-['Lato:Regular',sans-serif] text-[16px] text-[#717182]">{emp.id}</p>
                              <div className="flex items-center gap-1 mt-1">
                                <span className="font-['Lato:Regular',sans-serif] text-[12px] text-[#717182]">{emp.salary}</span>
                                <span className="font-['Lato:Regular',sans-serif] text-[12px] text-[#2160ad]">{emp.hourly}</span>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4">
                            <div className="flex justify-center">
                              <span className="bg-gray-50 px-3 py-1 rounded-lg font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950">{emp.cases}</span>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-center">
                            <span className="font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950">{emp.caseIncentive}</span>
                          </td>
                          <td className="px-4 py-4 text-center">
                            <span className="font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950">{emp.overtime}</span>
                          </td>
                          <td className="px-4 py-4 text-center">
                            <span className="font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950">{emp.otherIncentive}</span>
                          </td>
                          <td className="px-4 py-4">
                            <div className="flex justify-center">
                              <span className="bg-[rgba(33,96,173,0.05)] border border-[rgba(33,96,173,0.1)] px-4 py-2 rounded-lg font-['Lato:Regular',sans-serif] text-[16px] text-[#2160ad]">{emp.netIncentive}</span>
                            </div>
                          </td>
                          <td className="px-4 py-4">
                            <div className="flex justify-center">
                              <button className="h-[32px] px-4 text-[#2160ad] rounded-lg font-['Lato:Medium',sans-serif] text-[16px] hover:bg-gray-100 flex items-center gap-2">
                                <Eye className="w-4 h-4" />
                                View
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Info Modal */}
      <Dialog open={showInfoModal} onOpenChange={setShowInfoModal}>
        <DialogContent className="max-w-[95vw] md:max-w-5xl h-[90vh] p-0 flex flex-col overflow-hidden">
          <div className="bg-[rgba(33,96,173,0.05)] border-b border-[rgba(0,0,0,0.1)] px-6 py-4 flex-shrink-0">
            <DialogHeader>
              <DialogTitle className="font-['Lato:SemiBold',sans-serif] text-[20px] md:text-[24px] text-[#2160ad]">
                Attendance Records - {selectedAttendance?.employeeName}
              </DialogTitle>
              <DialogDescription className="font-['Lato:Regular',sans-serif] text-[14px] text-[#4a5565] mt-1">
                Staff ID: A0B1C028 • Department: Ground Crew - Shift
              </DialogDescription>
            </DialogHeader>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 md:p-6">
            {/* Employee Information */}
            <div className="bg-white border border-gray-200 rounded-[10px] overflow-hidden mb-4">
              <div className="bg-[rgba(33,96,173,0.05)] px-4 md:px-6 py-3 border-b border-[rgba(33,96,173,0.1)]">
                <h3 className="font-['Lato:Medium',sans-serif] text-[14px] md:text-[16px] text-[#2160ad]">
                  Employee Information
                </h3>
              </div>
              <div className="p-4 md:p-6 grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <p className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153] mb-1">Staff Name</p>
                  <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#101828]">{selectedAttendance?.employeeName}</p>
                </div>
                <div>
                  <p className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153] mb-1">Staff ID</p>
                  <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#101828]">A0B1C028</p>
                </div>
                <div>
                  <p className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153] mb-1">Department</p>
                  <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#101828]">Ground Crew - Shift</p>
                </div>
                <div>
                  <p className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153] mb-1">Company</p>
                  <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#101828]">I.M.Ambulance</p>
                </div>
                <div className="col-span-2 md:col-span-1">
                  <p className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153] mb-1">Role</p>
                  <div className="flex gap-2">
                    <span className="bg-[rgba(33,96,173,0.1)] border border-[#2160ad] text-[#2160ad] px-2 py-1 rounded-lg font-['Lato:Medium',sans-serif] text-[11px]">EMT</span>
                    <span className="bg-[rgba(33,96,173,0.1)] border border-[#2160ad] text-[#2160ad] px-2 py-1 rounded-lg font-['Lato:Medium',sans-serif] text-[11px]">Operations</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
              <div className="bg-white border border-[rgba(35,207,101,0.2)] rounded-[10px] p-3">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-8 h-8 bg-[rgba(35,207,101,0.1)] rounded-[8px] flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-[#23cf65]" />
                  </div>
                  <span className="font-['Lato:Regular',sans-serif] text-[12px] text-[#4a5565]">Present</span>
                </div>
                <p className="font-['Lato:SemiBold',sans-serif] text-[20px] text-[#101828]">6</p>
              </div>

              <div className="bg-white border border-[rgba(231,27,27,0.2)] rounded-[10px] p-3">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-8 h-8 bg-[rgba(231,27,27,0.1)] rounded-[8px] flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-[#e71b1b]" />
                  </div>
                  <span className="font-['Lato:Regular',sans-serif] text-[12px] text-[#4a5565]">Leave</span>
                </div>
                <p className="font-['Lato:SemiBold',sans-serif] text-[20px] text-[#101828]">2</p>
              </div>

              <div className="bg-white border border-[rgba(238,165,31,0.2)] rounded-[10px] p-3">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-8 h-8 bg-[rgba(238,165,31,0.1)] rounded-[8px] flex items-center justify-center">
                    <AlertCircle className="w-4 h-4 text-[#eea51f]" />
                  </div>
                  <span className="font-['Lato:Regular',sans-serif] text-[12px] text-[#4a5565]">Late</span>
                </div>
                <p className="font-['Lato:SemiBold',sans-serif] text-[20px] text-[#101828]">3</p>
              </div>

              <div className="bg-white border border-[rgba(33,96,173,0.2)] rounded-[10px] p-3">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-8 h-8 bg-[rgba(33,96,173,0.1)] rounded-[8px] flex items-center justify-center">
                    <AlertCircle className="w-4 h-4 text-[#2160ad]" />
                  </div>
                  <span className="font-['Lato:Regular',sans-serif] text-[12px] text-[#4a5565]">Overtime</span>
                </div>
                <p className="font-['Lato:SemiBold',sans-serif] text-[20px] text-[#101828]">3</p>
              </div>
            </div>

            {/* Attendance Records Title */}
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-['Lato:SemiBold',sans-serif] text-[14px] md:text-[16px] text-[#2160ad]">Attendance Records</h3>
              <p className="font-['Lato:Regular',sans-serif] text-[12px] md:text-[14px] text-[#4a5565]">8 records</p>
            </div>

            {/* Records Table */}
            <div className="border border-[rgba(0,0,0,0.1)] rounded-[10px] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="bg-[rgba(33,96,173,0.05)] border-b border-[rgba(33,96,173,0.2)]">
                      <th className="px-3 py-2 text-left font-['Lato:SemiBold',sans-serif] text-[12px] text-[#2160ad]">Date</th>
                      <th className="px-3 py-2 text-left font-['Lato:SemiBold',sans-serif] text-[12px] text-[#2160ad]">Status</th>
                      <th className="px-3 py-2 text-left font-['Lato:SemiBold',sans-serif] text-[12px] text-[#2160ad]">Clock In</th>
                      <th className="px-3 py-2 text-left font-['Lato:SemiBold',sans-serif] text-[12px] text-[#2160ad]">Clock Out</th>
                      <th className="px-3 py-2 text-left font-['Lato:SemiBold',sans-serif] text-[12px] text-[#2160ad]">Hours</th>
                      <th className="px-3 py-2 text-left font-['Lato:SemiBold',sans-serif] text-[12px] text-[#2160ad]">Late</th>
                      <th className="px-3 py-2 text-left font-['Lato:SemiBold',sans-serif] text-[12px] text-[#2160ad]">OT</th>
                      <th className="px-3 py-2 text-left font-['Lato:SemiBold',sans-serif] text-[12px] text-[#2160ad]">Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { date: '15/10/23', status: 'Present', clockIn: '08:30 AM', clockOut: '05:30 PM', workHours: '9h', late: '-', overtime: '-', location: 'HQ Office' },
                      { date: '14/10/23', status: 'Present', clockIn: '08:45 AM', clockOut: '06:15 PM', workHours: '9h 30m', late: '15m', overtime: '45m', location: 'Field', hasLate: true, hasOvertime: true },
                      { date: '13/10/23', status: 'On Leave', clockIn: '-', clockOut: '-', workHours: '-', late: '-', overtime: '-', location: '-' },
                      { date: '12/10/23', status: 'Present', clockIn: '08:20 AM', clockOut: '05:20 PM', workHours: '9h', late: '-', overtime: '-', location: 'HQ' },
                      { date: '11/10/23', status: 'Present', clockIn: '09:10 AM', clockOut: '06:10 PM', workHours: '9h', late: '40m', overtime: '1h', location: 'Remote', hasLate: true, hasOvertime: true },
                      { date: '10/10/23', status: 'Sick Leave', clockIn: '-', clockOut: '-', workHours: '-', late: '-', overtime: '-', location: '-' },
                      { date: '09/10/23', status: 'Present', clockIn: '08:35 AM', clockOut: '05:25 PM', workHours: '8h 50m', late: '5m', overtime: '-', location: 'HQ', hasLate: true },
                      { date: '08/10/23', status: 'Present', clockIn: '08:00 AM', clockOut: '06:30 PM', workHours: '10h 30m', late: '-', overtime: '2h 30m', location: 'Field', hasOvertime: true },
                    ].map((record, idx) => (
                      <tr key={idx} className="border-b border-[rgba(0,0,0,0.1)] last:border-b-0">
                        <td className="px-3 py-2">
                          <span className="font-['Lato:Medium',sans-serif] text-[13px] text-[#101828]">{record.date}</span>
                        </td>
                        <td className="px-3 py-2">
                          <span className={`px-2 py-0.5 rounded-lg font-['Lato:Medium',sans-serif] text-[11px] border ${getStatusBadgeClass(record.status)}`}>
                            {record.status}
                          </span>
                        </td>
                        <td className="px-3 py-2">
                          <div className="flex items-center gap-1">
                            <span className="font-['Lato:Regular',sans-serif] text-[13px] text-[#101828]">{record.clockIn}</span>
                            {record.hasLate && (
                              <div className="w-3.5 h-3.5 bg-[#fb2c36] rounded-full flex items-center justify-center">
                                <span className="text-white text-[8px] font-bold">!</span>
                              </div>
                            )}
                          </div>
                        </td>
                        <td className="px-3 py-2">
                          <span className="font-['Lato:Regular',sans-serif] text-[13px] text-[#101828]">{record.clockOut}</span>
                        </td>
                        <td className="px-3 py-2">
                          <div className="flex items-center gap-1">
                            <span className="font-['Lato:Regular',sans-serif] text-[13px] text-[#101828]">{record.workHours}</span>
                            {record.hasOvertime && (
                              <div className="w-3.5 h-3.5 bg-[#2160ad] rounded-full flex items-center justify-center">
                                <span className="text-white text-[7px]">🕐</span>
                              </div>
                            )}
                          </div>
                        </td>
                        <td className="px-3 py-2">
                          <span className="font-['Lato:Regular',sans-serif] text-[13px] text-[#101828]">{record.late}</span>
                        </td>
                        <td className="px-3 py-2">
                          <span className="font-['Lato:Regular',sans-serif] text-[13px] text-[#101828]">{record.overtime}</span>
                        </td>
                        <td className="px-3 py-2">
                          <span className="font-['Lato:Regular',sans-serif] text-[13px] text-[#101828]">{record.location}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Edit Modal */}
      {showEditModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-[10px] shadow-lg w-full max-w-[510px] max-h-[95vh] flex flex-col relative">
            {/* Close Button - Top Right */}
            <button
              onClick={() => setShowEditModal(false)}
              className="absolute top-4 right-4 w-4 h-4 opacity-70 hover:opacity-100 z-10"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                <path d="M12 4L4 12" stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                <path d="M4 4L12 12" stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
            </button>

            {/* Header */}
            <div className="bg-[rgba(33,96,173,0.05)] px-6 py-6 border-b border-[rgba(0,0,0,0.1)] flex-shrink-0">
              <h2 className="font-['Lato:SemiBold',sans-serif] text-[16px] text-neutral-950">
                Edit Attendance - {selectedAttendance?.employeeName}
              </h2>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <div className="space-y-6">
                {/* Employee Information */}
                <div className="bg-gray-50 rounded-[10px] p-4 space-y-4">
                  <h3 className="font-['Lato:SemiBold',sans-serif] text-[16px] text-[#2160ad]">Employee Information</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950 mb-2 block">Staff Name</label>
                      <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[10px] px-3 py-2.5">
                        <p className="font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950">{selectedAttendance?.employeeName}</p>
                      </div>
                    </div>
                    <div>
                      <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950 mb-2 block">Staff ID</label>
                      <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[10px] px-3 py-2.5">
                        <p className="font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950">1</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Attendance Details */}
                <div className="space-y-4">
                  <h3 className="font-['Lato:SemiBold',sans-serif] text-[16px] text-[#2160ad]">Attendance Details</h3>
                  
                  <div>
                    <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950 mb-2 flex items-center gap-1">
                      Date
                      <span className="text-[#fb2c36]">*</span>
                    </label>
                    <input
                      type="date"
                      defaultValue="2025-10-10"
                      className="w-full h-[36px] px-3 bg-[#f3f3f5] rounded-lg font-['Lato:Regular',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#2160ad] border-0"
                    />
                  </div>

                  <div>
                    <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950 mb-2 block">Status</label>
                    <select className="w-full h-[36px] px-3 bg-[#f3f3f5] rounded-lg font-['Lato:Regular',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#2160ad] border-0">
                      <option>On Leave</option>
                      <option>Present</option>
                      <option>Sick Leave</option>
                      <option>Active</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950 mb-2 flex items-center gap-1">
                        Clock In
                        <span className="text-[#fb2c36]">*</span>
                      </label>
                      <input
                        type="time"
                        className="w-full h-[36px] px-3 bg-[#f3f3f5] rounded-lg font-['Lato:Regular',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#2160ad] border-0"
                      />
                    </div>
                    <div>
                      <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950 mb-2 flex items-center gap-1">
                        Clock Out
                        <span className="text-[#fb2c36]">*</span>
                      </label>
                      <input
                        type="time"
                        className="w-full h-[36px] px-3 bg-[#f3f3f5] rounded-lg font-['Lato:Regular',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#2160ad] border-0"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950 mb-2 block">Notes (Optional)</label>
                    <input
                      type="text"
                      placeholder="Add any additional notes..."
                      className="w-full h-[36px] px-3 bg-[#f3f3f5] rounded-lg font-['Lato:Regular',sans-serif] text-[16px] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad] border-0"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="px-6 py-4 border-t border-[rgba(0,0,0,0.1)] flex items-center justify-end gap-3 flex-shrink-0">
              <button className="h-[36px] px-4 bg-white border border-[rgba(0,0,0,0.1)] text-neutral-950 rounded-lg font-['Lato:Medium',sans-serif] text-[16px] hover:bg-gray-50 transition-colors">
                Reset
              </button>
              <button 
                onClick={() => setShowEditModal(false)}
                className="h-[36px] px-4 bg-white border border-[rgba(0,0,0,0.1)] text-neutral-950 rounded-lg font-['Lato:Medium',sans-serif] text-[16px] hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button className="h-[36px] px-4 bg-[#2160ad] text-white rounded-lg font-['Lato:Medium',sans-serif] text-[16px] flex items-center gap-2 hover:bg-[#1a4d8a] transition-colors">
                <Save className="w-4 h-4" />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}