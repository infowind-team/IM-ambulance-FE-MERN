// components/leave/EntitlementTab.tsx
"use client";

import { useState } from "react";
import { Search, Download, Info, PenLine } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import DownloadDialog from "../download-dialog/DownloadDialog";
import LeaveEntitlementDialog from "../hrm-dialogs/LeaveEntitlementDialog";
import AdjustLeaveDialog from "../hrm-dialogs/AdjustLeaveDialog";

interface EmployeeEntitlement {
  id: string;
  name: string;
  employeeId: string;
  schemes: string[];
  department?: string;
  employmentType?: string;
  entitlements?: LeaveEntitlement[];
  history?: LeaveHistory[];
}

interface LeaveEntitlement {
  type: string;
  scheme: string;
  total: string;
  broughtForward: string;
  used: string;
  remaining: string;
  remainingClass?: string;
}

interface LeaveHistory {
  date: string;
  type: string;
  used: string;
  remaining: string;
}

// Mock data
const entitlementData: EmployeeEntitlement[] = [
  {
    id: "1",
    name: "Annette Black",
    employeeId: "ADBFC008",
    schemes: ["Mid-Level Staff Standard Scheme", "Childcare Leave Scheme"],
    department: "Operations",
    employmentType: "full-time",
    entitlements: [
      {
        type: "Annual Leave",
        scheme: "Mid-Level Staff Standard Scheme",
        total: "14 days",
        broughtForward: "1 days",
        used: "10 days",
        remaining: "5 days",
        remainingClass: "text-orange-600",
      },
      {
        type: "Medical Leave",
        scheme: "Mid-Level Staff Standard Scheme",
        total: "14 days",
        broughtForward: "0 days",
        used: "0 days",
        remaining: "14 days",
      },
      {
        type: "Childcare Leave",
        scheme: "Childcare Leave Scheme",
        total: "6 days",
        broughtForward: "0 days",
        used: "5 days",
        remaining: "1 days",
        remainingClass: "text-red-600",
      },
    ],
    history: [
      { date: "15 Mar 2024", type: "Annual Leave", used: "3 days", remaining: "11 days" },
      { date: "08 Feb 2024", type: "Sick Leave", used: "1 day", remaining: "13 days" },
      { date: "22 Jan 2024", type: "Annual Leave", used: "2 days", remaining: "14 days" },
    ],
  },
  // ... other employees (same as before)
  {
    id: "2",
    name: "Jennifer Liu",
    employeeId: "JLIU002",
    schemes: ["Mid-Level Staff Standard Scheme", "Childcare Leave Scheme"],
    department: "HR",
    employmentType: "full-time",
  },
  {
    id: "3",
    name: "Marcus Chen",
    employeeId: "OPS001",
    schemes: ["Mid-Level Staff Standard Scheme", "Childcare Leave Scheme"],
    department: "Operations",
    employmentType: "full-time",
  },
  {
    id: "4",
    name: "Rebecca Taylor",
    employeeId: "HR001",
    schemes: ["Mid-Level Staff Standard Scheme", "Childcare Leave Scheme"],
    department: "HR",
    employmentType: "full-time",
  },
];

const departments = ["All Departments", "Operations", "HR", "Medical", "Admin"];

export default function EntitlementTab() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState("All Departments");
  const [downloadOpen, setDownloadOpen] = useState(false);
  const [infoEmployee, setInfoEmployee] = useState<EmployeeEntitlement | null>(null);
  const [adjustEmployee, setAdjustEmployee] = useState<EmployeeEntitlement | null>(null);

  const filteredData = entitlementData.filter((emp) => {
    const matchesSearch =
      emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.employeeId.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDept = selectedDept === "All Departments" || emp.department === selectedDept;
    return matchesSearch && matchesDept;
  });

  const handleDownload = (employeeId: string) => {
    console.log("Download triggered for:", employeeId);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-[#2160AD] font-semibold mb-1">Employee Leave Entitlement</h3>
          <p className="text-sm text-gray-600">
            View and manage leave balances and entitlements for all employees
          </p>
        </div>
        <Button onClick={() => setDownloadOpen(true)}>
          <Download className="w-4 h-4 mr-2" />
          Download
        </Button>
      </div>

      <DownloadDialog open={downloadOpen} onOpenChange={setDownloadOpen} onDownload={handleDownload} />

      {/* Filters */}
      <div className="flex gap-4 flex-wrap">
        <div className="relative flex-1 min-w-[250px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search by employee name or ID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={selectedDept} onValueChange={setSelectedDept}>
          <SelectTrigger className="w-[230px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {departments.map((dept) => (
              <SelectItem key={dept} value={dept}>{dept}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <Card className="overflow-hidden">
        <Table>
          <TableHeader className="header-bg-soft">
            <TableRow>
              <TableHead className="p-4">Employee Name / ID</TableHead>
              <TableHead className="p-4">Leave Schemes</TableHead>
              <TableHead className="p-4">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((emp) => (
              <TableRow key={emp.id} className="border-b hover:bg-muted/30">
                <TableCell className="p-4">
                  <div>
                    <p className="font-medium text-gray-900">{emp.name}</p>
                    <p className="text-sm text-gray-600">{emp.employeeId}</p>
                  </div>
                </TableCell>
                <TableCell className="p-4">
                  <div className="flex flex-wrap gap-1">
                    {emp.schemes.map((scheme) => (
                      <Badge
                        key={scheme}
                        className="text-xs bg-[#2160AD]/10 text-[#2160AD] border-[#2160AD]/30 hover:bg-[#2160AD]/20"
                      >
                        {scheme}
                      </Badge>
                    ))}
                  </div>
                </TableCell>
                <TableCell className="p-4">
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-8 px-3 text-[#2160AD] border-[#2160AD] hover:bg-[#2160AD]/10"
                      onClick={() => setInfoEmployee(emp)}
                    >
                      <Info className="w-3 h-3 mr-1" />
                      Info
                    </Button>
                    <Button
                      size="sm"
                      className="h-8 px-3 bg-[#2160AD] text-white hover:bg-[#1a4d8a]"
                      onClick={() => setAdjustEmployee(emp)}
                    >
                      <PenLine className="w-3 h-3 mr-1" />
                      Adjust
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      {filteredData.length === 0 && (
        <div className="text-center py-12 text-gray-500">No employees found.</div>
      )}

      {/* Info Dialog */}
      {infoEmployee && (
        <LeaveEntitlementDialog
          open={!!infoEmployee}
          onOpenChange={(open) => !open && setInfoEmployee(null)}
          employee={{
            name: infoEmployee.name,
            id: infoEmployee.employeeId,
            department: infoEmployee.department ?? "",
            employmentType: infoEmployee.employmentType ?? "",
            schemes: infoEmployee.schemes,
          }}
          entitlements={infoEmployee.entitlements ?? []}
          history={infoEmployee.history ?? []}
          totalEntitlement={
            infoEmployee.entitlements
              ? infoEmployee.entitlements.reduce((sum, e) => sum + parseInt(e.total || "0", 10), 0) + " days"
              : "0 days"
          }
          totalRemaining={
            infoEmployee.entitlements
              ? infoEmployee.entitlements.reduce((sum, e) => sum + parseInt(e.remaining || "0", 10), 0) + " days"
              : "0 days"
          }
        />
      )}

      {/* Adjust Dialog */}
      {adjustEmployee && (
        <AdjustLeaveDialog
          open={!!adjustEmployee}
          onOpenChange={(open) => !open && setAdjustEmployee(null)}
          employeeName={adjustEmployee.name}
          employeeId={adjustEmployee.employeeId}
          history={adjustEmployee.history?.map((h) => ({
            date: h.date,
            type: h.type,
            days: h.used.includes("-") ? h.used : `+${h.used.replace(" days", "")}`,
            reason: "Manual Adjustment", // placeholder
          })) ?? []}
        />
      )}
    </div>
  );
}