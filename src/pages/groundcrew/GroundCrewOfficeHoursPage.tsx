import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../imports/Sidebar';
import { Calendar, ChevronLeft, ChevronRight, Download, AlertTriangle } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '../components/ui/popover';
import { Calendar as CalendarComponent } from '../components/ui/calendar';

// Staff data
const staffMembers = [
  { name: 'John Smith', designation: 'CREW DRIVER' },
  { name: 'Sarah Lee', designation: 'CREW DRIVER' },
  { name: 'Warren Lee', designation: 'CREW DRIVER' },
  { name: 'Tina Li', designation: 'CREW DRIVER' },
  { name: 'Alex Wong', designation: 'CREW DRIVER' },
];

// Generate date columns for the month (31 days)
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

export function GroundCrewOfficeHoursPage() {
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState(new Date(2025, 5, 1)); // June 1, 2025
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [shifts, setShifts] = useState(generateInitialShifts());
  const dateColumns = generateDateColumns();

  const handleExport = () => {
    console.log('Export clicked');
  };

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
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <div className="w-[269px] h-screen flex-shrink-0">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Page Header */}
        <div className="bg-[rgba(33,96,173,0.05)] border-r-4 border-[rgba(33,96,173,0.2)] px-[24px] py-[16px]">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-1 mb-2">
            <button
              onClick={() => navigate('/calendar')}
              className="font-['Lato:Regular',sans-serif] text-[14px] text-[#4a5565] hover:text-[#2160ad]"
            >
              Operations
            </button>
            <ChevronRight className="w-3 h-3 text-[#717182]" />
            <span className="font-['Lato:Medium',sans-serif] text-[14px] text-[#2160ad]">Rostering</span>
          </div>

          {/* Page Title */}
          <h1 className="font-['Lato:Medium',sans-serif] text-[26px] text-[#2160ad]">Rostering</h1>
        </div>

        {/* Date Navigation Row */}
        <div className="border-b border-gray-200 px-[24px] py-[12px]">
          <div className="flex items-center justify-between">
            {/* Date Picker */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePreviousMonth}
                className="w-[32px] h-[32px] flex items-center justify-center rounded-[8px] hover:bg-gray-100"
              >
                <ChevronLeft className="w-4 h-4 text-[#2160ad]" />
              </button>

              <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                <PopoverTrigger asChild>
                  <button className="h-[36px] flex items-center gap-2 px-3 rounded-[8px] hover:bg-gray-50">
                    <Calendar className="w-4 h-4 text-[#2160ad]" />
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
                className="w-[32px] h-[32px] flex items-center justify-center rounded-[8px] hover:bg-gray-100"
              >
                <ChevronRight className="w-4 h-4 text-[#2160ad]" />
              </button>
            </div>

            {/* Export Button */}
            <button
              onClick={handleExport}
              className="bg-white border border-[rgba(33,96,173,0.2)] h-[32px] px-4 rounded-[8px] flex items-center gap-2 hover:bg-gray-50"
            >
              <Download className="w-4 h-4 text-[#2160ad]" />
              <span className="font-['Lato:Medium',sans-serif] text-[16px] text-[#2160ad]">Export</span>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 px-[24px]">
          <div className="flex gap-8 h-[50px] items-start">
            <button
              onClick={() => navigate('/rostering')}
              className="h-full px-1 border-b-2 border-transparent"
            >
              <span className="font-['Lato:Regular',sans-serif] text-[16px] text-[#6a7282]">
                Ground Crew (Shift)
              </span>
            </button>
            <button className="h-full px-1 border-b-2 border-[#2160ad]">
              <span className="font-['Lato:Regular',sans-serif] text-[16px] text-[#2160ad]">
                Ground Crew (Office Hours)
              </span>
            </button>
            <button 
              onClick={() => navigate('/rostering/operations')}
              className="h-full px-1 border-b-2 border-transparent hover:text-[#2160ad] transition-colors"
            >
              <span className="font-['Lato:Regular',sans-serif] text-[16px] text-[#6a7282]">
                Operations
              </span>
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto px-[24px] pt-[24px]">
          <div className="space-y-6">
            {/* Warning Banner */}
            <div className="bg-red-50 border-l-4 border-[#ff6467] rounded-br-[10px] rounded-tr-[10px] px-5 py-4">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-4 h-4 text-[#ff6467] flex-shrink-0" />
                <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#c10007]">
                  <span className="font-['Lato:SemiBold',sans-serif]">Warning:</span> There are 155 unassigned shifts this month
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between">
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
                className="bg-white border border-[rgba(33,96,173,0.2)] h-[32px] px-[13px] rounded-[8px] hover:bg-gray-50"
              >
                <span className="font-['Lato:Medium',sans-serif] text-[16px] text-[#2160ad]">Auto-Assign</span>
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

            {/* Roster Table */}
            <div className="relative">
              {/* Table Container with Horizontal Scroll */}
              <div className="overflow-x-auto">
                <div className="inline-block min-w-full align-middle">
                  <div className="relative">
                    {/* Table */}
                    <table className="min-w-full border-collapse">
                      {/* Table Header */}
                      <thead>
                        <tr>
                          {/* Sticky Staff Column Header */}
                          <th className="sticky left-0 z-20 bg-[rgba(33,96,173,0.05)] border-b-2 border-[#2160ad] px-2 py-[14px] text-left w-[169px]">
                            <span className="font-['Lato:Medium',sans-serif] text-[16px] text-[#2160ad]">Staff</span>
                          </th>
                          
                          {/* Date Column Headers */}
                          {dateColumns.map((col, index) => (
                            <th
                              key={index}
                              className="bg-[rgba(33,96,173,0.05)] border-b-2 border-[#2160ad] px-2 py-2 text-center min-w-[85px]"
                            >
                              <div className="flex flex-col items-center gap-1">
                                <span className="font-['Lato:Medium',sans-serif] text-[12px] text-[#2160ad]">{col.day}</span>
                                <span className="font-['Lato:Medium',sans-serif] text-[12px] text-[#2160ad]">{col.date}</span>
                              </div>
                            </th>
                          ))}
                        </tr>
                      </thead>

                      {/* Table Body */}
                      <tbody>
                        {staffMembers.map((staff, staffIndex) => (
                          <tr key={staffIndex} className="border-b border-gray-200">
                            {/* Sticky Staff Name Column */}
                            <td className="sticky left-0 z-10 bg-white border-r border-gray-200 px-3 py-3">
                              <div className="flex flex-col">
                                <span className="font-['Lato:Medium',sans-serif] text-[16px] text-[#2160ad]">
                                  {staff.name}
                                </span>
                                <span className="font-['Lato:Regular',sans-serif] text-[12px] text-[#6a7282]">
                                  {staff.designation}
                                </span>
                              </div>
                            </td>

                            {/* Date Cells with OFF pills or dropdowns */}
                            {dateColumns.map((_, colIndex) => {
                              const cellKey = `${staffIndex}-${colIndex + 1}`;
                              const cellValue = shifts[cellKey] || 'OF';
                              
                              return (
                                <td
                                  key={colIndex}
                                  className="border-r border-gray-100 px-2 py-3 text-center"
                                >
                                  <div className="flex items-center justify-center">
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
                                      <span className={`${getShiftPillStyle(cellValue).bg} ${getShiftPillStyle(cellValue).text} font-['Lato:Medium',sans-serif] text-[10px] px-2 py-1 rounded-[4px]`}>
                                        {cellValue}
                                      </span>
                                    )}
                                  </div>
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </table>
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
