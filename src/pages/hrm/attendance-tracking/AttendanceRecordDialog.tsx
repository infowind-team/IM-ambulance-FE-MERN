'use client';

import { useState } from 'react';
import {
  X,
  User,
  Calendar,
  CircleAlert,
  Clock,
  Download,
  ChevronDown,
} from 'lucide-react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface AttendanceRecord {
  date: string;
  status: 'Present' | 'On Leave' | 'Sick Leave';
  clockIn: string | null;
  clockOut: string | null;
  workHours: string | null;
  late: string | null;
  overtime: string | null;
  location: string | null;
  lateFlag?: boolean;
  overtimeFlag?: boolean;
}

/* -------------------------------------------------- */
/*                     Sample Data                     */
/* -------------------------------------------------- */
const attendanceRecords: AttendanceRecord[] = [
  {
    date: '15/10/2023',
    status: 'Present',
    clockIn: '08:30 AM',
    clockOut: '05:30 PM',
    workHours: '9h 00m',
    late: null,
    overtime: null,
    location: 'HQ Office',
  },
  {
    date: '14/10/2023',
    status: 'Present',
    clockIn: '08:45 AM',
    clockOut: '06:15 PM',
    workHours: '9h 30m',
    late: '15 min',
    overtime: '45 min',
    location: 'Field Assignment',
    lateFlag: true,
    overtimeFlag: true,
  },
  {
    date: '13/10/2023',
    status: 'On Leave',
    clockIn: null,
    clockOut: null,
    workHours: null,
    late: null,
    overtime: null,
    location: null,
  },
  {
    date: '12/10/2023',
    status: 'Present',
    clockIn: '08:20 AM',
    clockOut: '05:20 PM',
    workHours: '9h 00m',
    late: null,
    overtime: null,
    location: 'HQ Office',
  },
  {
    date: '11/10/2023',
    status: 'Present',
    clockIn: '09:10 AM',
    clockOut: '06:10 PM',
    workHours: '9h 00m',
    late: '40 min',
    overtime: '1h 00m',
    location: 'Remote Site',
    lateFlag: true,
    overtimeFlag: true,
  },
  {
    date: '10/10/2023',
    status: 'Sick Leave',
    clockIn: null,
    clockOut: null,
    workHours: null,
    late: null,
    overtime: null,
    location: null,
  },
  {
    date: '09/10/2023',
    status: 'Present',
    clockIn: '08:35 AM',
    clockOut: '05:25 PM',
    workHours: '8h 50m',
    late: '5 min',
    overtime: null,
    location: 'HQ Office',
    lateFlag: true,
  },
  {
    date: '08/10/2023',
    status: 'Present',
    clockIn: '08:00 AM',
    clockOut: '06:30 PM',
    workHours: '10h 30m',
    late: null,
    overtime: '2h 30m',
    location: 'Field Assignment',
    overtimeFlag: true,
  },
];

/* -------------------------------------------------- */
/*                     Helpers                         */
/* -------------------------------------------------- */
const getStatusColor = (status: AttendanceRecord['status']) => {
  switch (status) {
    case 'Present':
      return { border: '#23cf65', text: '#23cf65', bg: '#23cf651a' };
    case 'On Leave':
    case 'Sick Leave':
      return { border: '#e71b1b', text: '#e71b1b', bg: '#e71b1b1a' };
    default:
      return { border: '#2160AD', text: '#2160AD', bg: '#2160AD1a' };
  }
};

/* -------------------------------------------------- */
/*                     Component                       */
/* -------------------------------------------------- */
export default function AttendanceRecordDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('All Status');

  /* ---------- Filtering ---------- */
  const filteredRecords = attendanceRecords.filter((record) => {
    const matchesSearch =
      record.date.includes(searchQuery) ||
      (record.location?.toLowerCase().includes(searchQuery.toLowerCase()) ??
        false);
    const matchesStatus =
      filterStatus === 'All Status' || record.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  /* ---------- Stats ---------- */
  const stats = {
    present: attendanceRecords.filter((r) => r.status === 'Present').length,
    leave: attendanceRecords.filter(
      (r) => r.status === 'On Leave' || r.status === 'Sick Leave'
    ).length,
    late: attendanceRecords.filter((r) => r.lateFlag).length,
    overtime: attendanceRecords.filter((r) => r.overtimeFlag).length,
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {/* Overlay */}
      <DialogContent
        className="fixed top-1/2 left-1/2 z-50 w-full max-w-[1400px]! -translate-x-1/2 -translate-y-1/2 max-h-[90vh] overflow-hidden rounded-lg bg-white shadow-lg flex flex-col data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 p-0"
        style={{ pointerEvents: 'auto' }}
      >
        {/* Header */}
        <DialogHeader className="sticky top-0 z-20 bg-white rounded-t-lg border-b">
          <div className="flex flex-col gap-2 p-6 header-bg-soft">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <DialogTitle className="text-lg font-semibold text-base-optimized">
                  Attendance Records - Annette Black
                </DialogTitle>
                <DialogDescription className="text-sm text-gray-600">
                  Staff ID: A0B1C028 • Department: Ground Crew - Shift
                </DialogDescription>
              </div>
            </div>
          </div>
        </DialogHeader>

        {/* Body (scrollable) */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6 bg-white border-b">
            {/* ---- Employee Info ---- */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#2160AD]/10 rounded-lg">
                    <User className="w-5 h-5 text-[#2160AD]" />
                  </div>
                  <h3 className="text-[#2160AD] text-base-optimized font-semibold">
                    Employee Information
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { label: 'Staff Name', value: 'Annette Black' },
                  { label: 'Staff ID', value: 'A0B1C028' },
                  { label: 'Department', value: 'Ground Crew - Shift' },
                  { label: 'Company', value: 'I.M.Ambulance Services Pte Ltd' },
                  {
                    label: 'Role',
                    value: (
                      <div className="flex flex-wrap gap-2">
                        <Badge className="border-[#2160AD] text-[#2160AD] bg-[#2160AD]/10">
                          EMT
                        </Badge>
                        <Badge className="border-[#2160AD] text-[#2160AD] bg-[#2160AD]/10">
                          Operations
                        </Badge>
                      </div>
                    ),
                  },
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <label className="text-base-optimized font-medium text-gray-700">
                      {item.label}
                    </label>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 min-h-[44px] flex items-center">
                      <span className="text-base-optimized text-gray-900">
                        {item.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ---- Stats Cards (20% border, 10% bg) ---- */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 mb-6">
              {[
                {
                  icon: Calendar,
                  value: stats.present,
                  label: 'Present Days',
                  color: '#23cf65',
                },
                {
                  icon: Calendar,
                  value: stats.leave,
                  label: 'Leave Days',
                  color: '#e71b1b',
                },
                {
                  icon: CircleAlert,
                  value: stats.late,
                  label: 'Late Days',
                  color: '#eea51f',
                },
                {
                  icon: Clock,
                  value: stats.overtime,
                  label: 'Overtime Days',
                  color: '#2160AD',
                },
              ].map((stat, i) => (
                <Card
                  key={i}
                  className="border"
                  style={{
                    borderColor: `${stat.color}33`, // 20% opacity
                  }}
                >
                  <div className="p-4">
                    <div className="flex items-center space-x-3">
                      <div
                        className="p-2 rounded-lg"
                        style={{ backgroundColor: `${stat.color}1a` }} // 10% opacity
                      >
                        <stat.icon
                          className="w-5 h-5"
                          style={{ color: stat.color }}
                        />
                      </div>
                      <div>
                        <p className="text-base-optimized font-semibold text-gray-900">
                          {stat.value}
                        </p>
                        <p className="text-sm text-gray-600">{stat.label}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* ---- Search + Filter + Export ---- */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex-1 min-w-[280px]">
                <Input
                  placeholder="Search by date, status, or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="form-input-height"
                />
              </div>

              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-[180px] form-input-height text-base-optimized">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All Status">All Status</SelectItem>
                  <SelectItem value="Present">Present</SelectItem>
                  <SelectItem value="On Leave">On Leave</SelectItem>
                  <SelectItem value="Sick Leave">Sick Leave</SelectItem>
                </SelectContent>
              </Select>

              <Button className="bg-[#2160AD] text-white hover:bg-[#2160AD]/90 gap-2 form-input-height">
                <Download className="w-4 h-4" />
                Export
              </Button>
            </div>
          </div>

          {/* ---- Records ---- */}
          <div className="p-6">
            <div className="bg-white border border-gray-200 rounded-lg">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[#2160AD] text-base-optimized font-semibold">
                    Attendance Records
                  </h3>
                  <div className="text-base-optimized text-gray-600">
                    {filteredRecords.length} records found
                  </div>
                </div>

                {/* Desktop Table */}
                <Card className="hidden lg:block overflow-x-auto">
                  <Table>
                    <TableHeader className="header-bg-soft border-b-2 border-[#2160AD]/20">
                      <TableRow>
                        {[
                          'Date',
                          'Status',
                          'Clock In',
                          'Clock Out',
                          'Work Hours',
                          'Late',
                          'Overtime',
                          'Location',
                        ].map((head) => (
                          <TableHead
                            key={head}
                            className="p-4 font-semibold text-[#2160AD] min-w-[100px]"
                          >
                            {head}
                          </TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>

                    <TableBody>
                      {filteredRecords.map((record, i) => (
                        <TableRow
                          key={i}
                          className="border-b hover:bg-gray-50 transition"
                        >
                          <TableCell className="p-4">
                            <span className="text-base-optimized font-medium text-gray-900">
                              {record.date}
                            </span>
                          </TableCell>

                          <TableCell className="p-4">
                            <Badge
                              className={`${getStatusColor(record.status).border} ${
                                getStatusColor(record.status).text
                              } ${getStatusColor(record.status).bg} font-medium`}
                            >
                              {record.status}
                            </Badge>
                          </TableCell>

                          <TableCell className="p-4">
                            <div className="flex items-center gap-2">
                              <span className="text-base-optimized text-gray-900">
                                {record.clockIn || '-'}
                              </span>
                              {record.lateFlag && (
                                <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                                  <CircleAlert className="w-3 h-3 text-white" />
                                </div>
                              )}
                            </div>
                          </TableCell>

                          <TableCell className="p-4 text-gray-900">
                            {record.clockOut || '-'}
                          </TableCell>

                          <TableCell className="p-4">
                            <div className="flex items-center gap-2">
                              <span className="text-base-optimized text-gray-900">
                                {record.workHours || '-'}
                              </span>
                              {record.overtimeFlag && (
                                <div className="w-4 h-4 bg-[#2160AD] rounded-full flex items-center justify-center">
                                  <Clock className="w-3 h-3 text-white" />
                                </div>
                              )}
                            </div>
                          </TableCell>

                          <TableCell className="p-4 text-gray-900">
                            {record.late || '-'}
                          </TableCell>

                          <TableCell className="p-4 text-gray-900">
                            {record.overtime || '-'}
                          </TableCell>

                          <TableCell className="p-4 text-gray-900">
                            {record.location || '-'}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Card>

                {/* Mobile Cards */}
                <div className="lg:hidden space-y-4">
                  {filteredRecords.map((record, i) => (
                    <Card key={i} className="hover:bg-gray-50 transition">
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-3">
                          <div className="space-y-1">
                            <p className="text-base-optimized font-semibold text-gray-900">
                              {record.date}
                            </p>
                            <p className="text-sm text-gray-600">
                              {record.location || '-'}
                            </p>
                          </div>
                          <Badge
                            className={`${getStatusColor(record.status).border} ${
                              getStatusColor(record.status).text
                            } ${getStatusColor(record.status).bg} font-medium`}
                          >
                            {record.status}
                          </Badge>
                        </div>

                        <div className="grid grid-cols-2 gap-3 text-sm">
                          <div>
                            <span className="text-gray-600">Clock In:</span>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-base-optimized text-gray-900">
                                {record.clockIn || '-'}
                              </span>
                              {record.lateFlag && (
                                <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                                  <CircleAlert className="w-3 h-3 text-white" />
                                </div>
                              )}
                            </div>
                          </div>

                          <div>
                            <span className="text-gray-600">Clock Out:</span>
                            <p className="text-base-optimized text-gray-900 mt-1">
                              {record.clockOut || '-'}
                            </p>
                          </div>

                          <div>
                            <span className="text-gray-600">Work Hours:</span>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-base-optimized text-gray-900">
                                {record.workHours || '-'}
                              </span>
                              {record.overtimeFlag && (
                                <div className="w-4 h-4 bg-[#2160AD] rounded-full flex items-center justify-center">
                                  <Clock className="w-3 h-3 text-white" />
                                </div>
                              )}
                            </div>
                          </div>

                          <div>
                            <span className="text-gray-600">Late:</span>
                            <p className="text-base-optimized text-gray-900 mt-1">
                              {record.late || '-'}
                            </p>
                          </div>

                          <div className="col-span-2">
                            <span className="text-gray-600">Overtime:</span>
                            <p className="text-base-optimized text-gray-900 mt-1">
                              {record.overtime || '-'}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}