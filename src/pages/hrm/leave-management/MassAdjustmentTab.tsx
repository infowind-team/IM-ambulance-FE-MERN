// components/leave/MassAdjustmentTab.tsx
"use client";

import { useState } from "react";
import { ChevronDown, Calendar, Plus, Minus } from "lucide-react";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Staff {
  id: string;
  staffId: string;
  name: string;
  division: string;
  department: string;
  joined: string;
}

interface AuditEntry {
  id: string;
  leaveType: string;
  reason: string;
  date: string;
  adjustment: number;
  by: string;
}

const staffData: Staff[] = [
  { id: "1", staffId: "ADBFC008", name: "Annette Black", division: "IM Ambulance", department: "Operations", joined: "2023-03-15" },
  { id: "2", staffId: "JLIU002", name: "Jennifer Liu", division: "IM Ambulance", department: "Ground Crew (Shift)", joined: "2018-01-10" },
  { id: "3", staffId: "OPS001", name: "Marcus Chen", division: "IM Ambulance", department: "Operations", joined: "2020-05-20" },
  { id: "4", staffId: "HR001", name: "Rebecca Taylor", division: "IM Ambulance", department: "Ground Crew (Office Hours)", joined: "2019-08-01" },
];

const auditData: AuditEntry[] = [
  { id: "MA001", leaveType: "Annual Leave", reason: "Year-end policy update", date: "2024-01-15", adjustment: 2, by: "Admin User" },
  { id: "MA002", leaveType: "Medical Leave", reason: "Department restructure", date: "2024-01-10", adjustment: 1, by: "HR Manager" },
  { id: "MA003", leaveType: "Compassionate Leave", reason: "System correction", date: "2024-01-05", adjustment: -1, by: "System Admin" },
];

const companies = ["IM Ambulance", "MedCorp", "HealthPlus"];
const departments = ["Operations", "Ground Crew (Shift)", "Ground Crew (Office Hours)", "HR", "Medical"];
const leaveTypes = ["Annual Leave", "Medical Leave", "Childcare Leave", "Compassionate Leave"];
const roles = ["MTO", "EMT", "Medic", "Operations"];

export default function MassAdjustmentTab() {
  const [selectedStaff, setSelectedStaff] = useState<string[]>([]);
  const [company, setCompany] = useState("");
  const [department, setDepartment] = useState("");
  const [leaveType, setLeaveType] = useState("");
  const [adjustment, setAdjustment] = useState(0);
  const [reason, setReason] = useState("");
  const [dates, setDates] = useState<Date[] | undefined>(undefined);
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);

  const toggleStaff = (id: string) => {
    setSelectedStaff(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const toggleAllStaff = () => {
    if (selectedStaff.length === staffData.length) {
      setSelectedStaff([]);
    } else {
      setSelectedStaff(staffData.map(s => s.id));
    }
  };

  const filteredStaff = staffData.filter(s => {
    const matchesCompany = !company || s.division === company;
    const matchesDept = !department || s.department === department;
    const matchesRole = selectedRoles.length === 0 || selectedRoles.some(r => s.department.includes(r));
    return matchesCompany && matchesDept && matchesRole;
  });

  return (
    <div className="space-y-5">
      {/* Mass Leave Adjustment */}
      <Card className="border-gray-100">
        <CardHeader className="px-5 py-4 bg-[#2160AD]/5 border-b border-gray-100">
          <h4 className="text-base font-medium text-gray-900">Mass Leave Adjustment</h4>
        </CardHeader>
        <CardContent className="p-5 space-y-6">
          {/* Company & Department */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Company</Label>
              <Select value={company} onValueChange={setCompany}>
                <SelectTrigger>
                  <SelectValue placeholder="Select company" />
                </SelectTrigger>
                <SelectContent>
                  {companies.map(c => (
                    <SelectItem key={c} value={c}>{c}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Department</Label>
              <Select value={department} onValueChange={setDepartment}>
                <SelectTrigger>
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  {departments.map(d => (
                    <SelectItem key={d} value={d}>{d}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Leave Type */}
          <div className="space-y-2">
            <Label>Leave Type</Label>
            <Select value={leaveType} onValueChange={setLeaveType}>
              <SelectTrigger>
                <SelectValue placeholder="Select leave type" />
              </SelectTrigger>
              <SelectContent>
                {leaveTypes.map(t => (
                  <SelectItem key={t} value={t}>{t}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Adjustment & Dates */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Adjustment (Days) <span className="text-red-500">*</span></Label>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-8 w-10 p-0 border-[#2160AD] text-[#2160AD] hover:bg-[#2160AD]/10"
                    onClick={() => setAdjustment(a => a - 1)}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Input
                    type="number"
                    value={adjustment}
                    onChange={e => setAdjustment(parseInt(e.target.value) || 0)}
                    className="text-center"
                    placeholder="0"
                  />
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-8 w-10 p-0 border-[#2160AD] text-[#2160AD] hover:bg-[#2160AD]/10"
                    onClick={() => setAdjustment(a => a + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm text-gray-600">
                  Use positive numbers to add leave, negative to deduct
                </p>
              </div>

              <div className="space-y-2">
                <Label>Leave Dates (Optional)</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal h-9"
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      {dates && dates.length > 0
                        ? `${dates.length} date${dates.length > 1 ? 's' : ''} selected`
                        : "Select leave dates"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <CalendarComponent
                      mode="multiple"
                      selected={dates}
                      onSelect={setDates}
                      className="rounded-md border"
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>

          {/* Reason */}
          <div className="space-y-2">
            <Label>Reason for Mass Adjustment</Label>
            <Input
              placeholder="Enter reason for adjustment"
              value={reason}
              onChange={e => setReason(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Filter by Roles */}
      <Card className="border-gray-100">
        <CardHeader className="px-5 py-4 bg-[#2160AD]/5 border-b border-gray-100">
          <h4 className="text-base font-medium text-gray-900">Filter by Roles (Optional)</h4>
        </CardHeader>
        <CardContent className="p-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {roles.map(role => (
              <div key={role} className="flex items-center space-x-2">
                <Checkbox
                  id={`role_${role}`}
                  checked={selectedRoles.includes(role)}
                  onCheckedChange={(checked: any) => {
                    setSelectedRoles(prev =>
                      checked ? [...prev, role] : prev.filter(r => r !== role)
                    );
                  }}
                />
                <Label htmlFor={`role_${role}`} className="text-sm font-medium cursor-pointer">
                  {role}
                </Label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Staff Selection List */}
      <Card className="border-gray-100">
        <CardHeader className="px-5 py-4 bg-[#2160AD]/5 border-b border-gray-100">
          <h4 className="text-base font-medium text-gray-900">Staff Selection List</h4>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50 border-b border-gray-100">
                  <TableHead className="w-12 p-2">
                    <Checkbox
                      checked={selectedStaff.length === filteredStaff.length && filteredStaff.length > 0}
                      onCheckedChange={toggleAllStaff}
                    />
                  </TableHead>
                  <TableHead className="p-2">Staff ID</TableHead>
                  <TableHead className="p-2">Employee Name</TableHead>
                  <TableHead className="p-2">Division</TableHead>
                  <TableHead className="p-2">Department</TableHead>
                  <TableHead className="p-2">Date Joined</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredStaff.map(staff => (
                  <TableRow key={staff.id} className="hover:bg-gray-50/50 border-b border-gray-50">
                    <TableCell className="p-2">
                      <Checkbox
                        checked={selectedStaff.includes(staff.id)}
                        onCheckedChange={() => toggleStaff(staff.id)}
                      />
                    </TableCell>
                    <TableCell className="p-2 font-mono">{staff.staffId}</TableCell>
                    <TableCell className="p-2 font-medium">{staff.name}</TableCell>
                    <TableCell className="p-2">{staff.division}</TableCell>
                    <TableCell className="p-2">{staff.department}</TableCell>
                    <TableCell className="p-2">{staff.joined}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="flex justify-between items-center mt-6 px-5 pb-5">
            <div className="text-sm text-gray-500">
              {selectedStaff.length} of {filteredStaff.length} employees selected
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="border-gray-200 hover:bg-gray-50">
                Preview Changes
              </Button>
              <Button className="bg-[#2160AD] hover:bg-[#1a4d8a] text-white">
                Apply Mass Adjustment
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Audit Trail */}
      <Card className="border-gray-100">
        <CardHeader className="px-5 py-4 bg-[#2160AD]/5 border-b border-gray-100">
          <h4 className="text-base font-medium text-gray-900">Past Mass Adjustments - Audit Trail</h4>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50 border-b border-gray-100">
                  <TableHead className="p-2">Adjustment ID</TableHead>
                  <TableHead className="p-2">Leave Type</TableHead>
                  <TableHead className="p-2">Reason</TableHead>
                  <TableHead className="p-2">Date Posted</TableHead>
                  <TableHead className="p-2">Adjustment</TableHead>
                  <TableHead className="p-2">Processed By</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {auditData.map(entry => (
                  <TableRow key={entry.id} className="hover:bg-gray-50/50 border-b border-gray-50">
                    <TableCell className="p-2 font-mono">{entry.id}</TableCell>
                    <TableCell className="p-2">{entry.leaveType}</TableCell>
                    <TableCell className="p-2">{entry.reason}</TableCell>
                    <TableCell className="p-2">{entry.date}</TableCell>
                    <TableCell className={`p-2 font-medium ${entry.adjustment > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {entry.adjustment > 0 ? '+' : ''}{entry.adjustment} day{entry.adjustment !== 1 && entry.adjustment !== -1 ? 's' : ''}
                    </TableCell>
                    <TableCell className="p-2">{entry.by}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}