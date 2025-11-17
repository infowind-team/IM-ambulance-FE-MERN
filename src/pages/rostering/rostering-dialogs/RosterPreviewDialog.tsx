// app/roster/RosterPreviewDialog.tsx
'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { FileDown, Printer, X } from 'lucide-react';
import { format, eachDayOfInterval } from 'date-fns';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

type TeamKey = 'shift' | 'office' | 'ops';

const TEAM_LABELS: Record<TeamKey, string> = {
  shift: 'Ground Crew (Shift)',
  office: 'Ground Crew (Office Hours)',
  ops: 'Operations',
};

const mockData = {
  shift: [
    { name: 'Annette Black', empId: 'EMP001', role: 'EMT', shifts: ['Morning', 'Evening', 'Night', 'Off', 'Morning', 'Evening', 'Night'] },
    { name: 'Jennifer Liu', empId: 'EMP008', role: 'Medic', shifts: ['Night', 'Off', 'Morning', 'Evening', 'Night', 'Off', 'Morning'] },
    { name: 'Michael Torres', empId: 'EMP009', role: 'MTO', shifts: ['Evening', 'Night', 'Off', 'Morning', 'Evening', 'Night', 'Off'] },
    { name: 'Ahmed Hassan', empId: 'EMP005', role: 'EMT', shifts: ['Off', 'Morning', 'Evening', 'Night', 'Off', 'Morning', 'Evening'] },
  ],
  office: [
    { name: 'Sarah Johnson', empId: 'EMP012', role: 'Admin', shifts: Array(30).fill('Present').map((_, i) => (i + 1) % 6 === 0 ? 'Off' : 'Present') },
    { name: 'Rahul Sharma', empId: 'EMP015', role: 'HR', shifts: Array(30).fill('Present').map((_, i) => (i + 1) % 6 === 0 ? 'Off' : 'Present') },
  ],
  ops: [
    { name: 'Priya Singh', empId: 'OPS001', role: 'Dispatcher', shifts: Array(30).fill('On Duty').map((_, i) => i % 7 === 6 ? 'Off' : 'On Duty') },
  ],
};

const shiftColors: Record<string, string> = {
  Morning: 'bg-blue-100 text-blue-800',
  Evening: 'bg-orange-100 text-orange-800',
  Night: 'bg-purple-100 text-purple-800',
  Off: 'bg-gray-100 text-gray-600',
  Present: 'bg-green-100 text-green-800',
  'On Duty': 'bg-indigo-100 text-indigo-800',
};

interface RosterPreviewDialogProps {
  isOpen: boolean;
  onClose: () => void;
  previewData: { team: TeamKey; startDate: Date; endDate: Date } | null;
}

export default function RosterPreviewDialog({ isOpen, onClose, previewData }: RosterPreviewDialogProps) {
  if (!previewData) return null;

  const { team, startDate, endDate } = previewData;
  const isWeekly = team === 'shift';
  const days = eachDayOfInterval({ start: startDate, end: endDate });
  const data = mockData[team];

  const generatedAt = new Date().toLocaleString('en-IN', {
    dateStyle: 'long',
    timeStyle: 'short',
  });

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      
      <DialogContent className="max-w-7xl max-h-[85vh] gap-0 p-0 overflow-hidden flex flex-col">
        {/* Custom Header */}
        <DialogHeader className='flex justify-between p-6 border-b bg-white shrink-0'>
          <DialogTitle className='text-md text-left font-semibold text-gray-900'>Print Preview - {TEAM_LABELS[team]}</DialogTitle>
        </DialogHeader>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-auto bg-white p-6">
          <div className="p-0">
            {/* Title Section */}
            <div className="text-center mb-10 border-b pb-8">
              <h1 className="text-2xl font-bold text-[#2160AD] mb-2">IM Ambulance</h1>
              <h2 className="text-xl font-semibold text-gray-800">
                {TEAM_LABELS[team]} - Roster Schedule
              </h2>
              <p className="text-gray-600 mt-2">
                {format(startDate, 'MMMM dd, yyyy')} – {format(endDate, 'MMMM dd, yyyy')}
              </p>
            </div>

            {/* Table */}
            <div className="overflow-x-auto print:mx-0">
              <Table className="border-collapse">
                <TableHeader>
                  <TableRow className="bg-[#2160AD] hover:bg-[#2160AD]">
                    <TableHead className="text-white border border-gray-300 p-4 text-left font-semibold">
                      Staff Member
                    </TableHead>
                    <TableHead className="text-white border border-gray-300 p-4 text-left font-semibold">
                      Role
                    </TableHead>
                    {days.map((day, i) => (
                      <TableHead
                        key={i}
                        className="text-white border border-gray-300 p-3 text-center min-w-[100px]"
                      >
                        <div className="flex flex-col leading-tight">
                          <span className="text-xs font-medium">{format(day, 'EEE')}</span>
                          <span className="text-lg font-bold">{format(day, 'dd')}</span>
                        </div>
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.map((staff, idx) => (
                    <TableRow key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <TableCell className="border border-gray-300 p-4 font-medium">
                        <div className="font-semibold text-gray-900">{staff.name}</div>
                        <div className="text-sm text-gray-600">{staff.empId}</div>
                      </TableCell>
                      <TableCell className="border border-gray-300 p-4">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                          {staff.role}
                        </span>
                      </TableCell>
                      {staff.shifts.slice(0, days.length).map((shift: string, i: number) => (
                        <TableCell key={i} className="border border-gray-300 p-3 text-center">
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                              shiftColors[shift] || 'bg-gray-100 text-gray-600'
                            }`}
                          >
                            {shift}
                          </span>
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Legend (Only for Shift Crew) */}
            {isWeekly && (
              <div className="mt-10 print:mt-8">
                <h4 className="font-bold text-gray-800 mb-3 text-sm">Legend:</h4>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">Morning</span>
                    <span className="text-gray-600">08:00 – 16:00</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium">Evening</span>
                    <span className="text-gray-600">16:00 – 00:00</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">Night</span>
                    <span className="text-gray-600">00:00 – 08:00</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">Off</span>
                    <span className="text-gray-600">Rest Day</span>
                  </div>
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="mt-12 pt-6 border-t text-center text-sm text-gray-500 print:mt-8">
              <p>Generated on {generatedAt}</p>
              <p className="mt-2 font-medium">IM Ambulance – Confidential Document</p>
            </div>
          </div>
        </div>

        {/* Action Footer */}
        <div className="flex gap-3 p-6 border-t bg-gray-50 shrink-0 print:hidden">
          <Button variant="outline" className="flex-1" onClick={() => window.print()}>
            <Printer className="w-4 h-4 mr-2" />
            Print
          </Button>
          <Button className="flex-1 bg-[#2160AD] hover:bg-[#1d5497] text-white">
            <FileDown className="w-4 h-4 mr-2" />
            Export to PDF
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}