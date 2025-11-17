// components/employees/LeaveEntitlementDialog.tsx
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { User, FileText, Clock, Download, X } from "lucide-react";

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

interface Employee {
  name: string;
  id: string;
  department: string;
  employmentType: string;
  schemes: string[];
}

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  employee: Employee;
  entitlements: LeaveEntitlement[];
  history: LeaveHistory[];
  totalEntitlement: string;
  totalRemaining: string;
}

export default function LeaveEntitlementDialog({
  open,
  onOpenChange,
  employee,
  entitlements,
  history,
  totalEntitlement,
  totalRemaining,
}: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl! max-h-[85vh] overflow-y-auto p-0">
        {/* Header */}
        <DialogHeader className="flex flex-col gap-2 text-center sm:text-left border-b border-[#2160AD]/20 pb-4 p-6">
          <DialogTitle className="text-lg font-semibold text-[#2160AD] flex items-center gap-2">
            <User className="w-5 h-5" />
            Employee Leave Entitlement Details
          </DialogTitle>
          <p className="text-sm text-muted-foreground">
            Complete leave information for {employee.name}
          </p>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto">
            <div className="p-6 space-y-5">
            {/* Employee Info */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="px-6 py-4 bg-[#2160AD]/5 border-b border-gray-100">
                <h4 className="flex items-center gap-2 text-gray-900">
                    <User className="w-4 h-4 text-[#2160AD]" />
                    Employee Information
                </h4>
                </div>
                <div className="p-6">
                <div className="grid grid-cols-3 gap-6">
                    <div>
                    <p className="text-sm text-gray-500 mb-1.5">Employee Name</p>
                    <p className="text-gray-900">{employee.name}</p>
                    </div>
                    <div>
                    <p className="text-sm text-gray-500 mb-1.5">Employee ID</p>
                    <p className="text-gray-900">{employee.id}</p>
                    </div>
                    <div>
                    <p className="text-sm text-gray-500 mb-1.5">Department</p>
                    <p className="text-gray-900">{employee.department}</p>
                    </div>
                    <div>
                    <p className="text-sm text-gray-500 mb-1.5">Employment Type</p>
                    <p className="text-gray-900">{employee.employmentType}</p>
                    </div>
                    <div className="col-span-2">
                    <p className="text-sm text-gray-500 mb-2">Leave Schemes</p>
                    <div className="flex flex-wrap gap-2">
                        {employee.schemes.map((scheme) => (
                        <Badge
                            key={scheme}
                            className="bg-[#2160AD]/8 text-[#2160AD] border-[#2160AD]/20 hover:bg-[#2160AD]/12"
                        >
                            {scheme}
                        </Badge>
                        ))}
                    </div>
                    </div>
                </div>
                </div>
            </div>

            {/* Leave Entitlements */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="px-6 py-4 bg-[#2160AD]/5 border-b border-gray-100">
                <h4 className="flex items-center gap-2 text-gray-900">
                    <FileText className="w-4 h-4 text-[#2160AD]" />
                    Leave Entitlements
                </h4>
                </div>
                <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                    <TableRow className="bg-gray-50/50 border-b border-gray-200">
                        <TableHead className="text-gray-700">Leave Type</TableHead>
                        <TableHead className="text-gray-700">Scheme</TableHead>
                        <TableHead className="text-center text-gray-700">Total Entitlement</TableHead>
                        <TableHead className="text-center text-gray-700">B/F Leave</TableHead>
                        <TableHead className="text-center text-gray-700">Used</TableHead>
                        <TableHead className="text-center text-gray-700">Remaining</TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    {entitlements.map((item, i) => (
                        <TableRow key={i} className="border-b border-gray-100 hover:bg-gray-50/50">
                        <TableCell className="py-3">
                            <span className="font-medium text-gray-900">{item.type}</span>
                        </TableCell>
                        <TableCell className="py-3">
                            <Badge className="bg-[#2160AD]/8 text-[#2160AD] border-[#2160AD]/20">
                            {item.scheme}
                            </Badge>
                        </TableCell>
                        <TableCell className="text-center text-gray-900 py-3">
                            <div className="font-medium">{item.total}</div>
                        </TableCell>
                        <TableCell className="text-center py-3">
                            <div className={item.broughtForward === "0 days" ? "text-gray-400" : "font-medium text-blue-600"}>
                            {item.broughtForward === "0 days" ? "0 days" : `+${item.broughtForward}`}
                            </div>
                        </TableCell>
                        <TableCell className="text-center text-gray-600 py-3">
                            <div className="font-medium">{item.used}</div>
                        </TableCell>
                        <TableCell className={`text-center py-3 font-semibold ${item.remainingClass || "text-gray-900"}`}>
                            {item.remaining}
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </div>
                <div className="bg-gray-50/50 px-6 py-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                    <span className="text-gray-600">Total Leave Entitlements</span>
                    <div className="flex gap-8">
                    <div>
                        <span className="text-gray-500 text-sm">Total Entitlement: </span>
                        <span className="font-semibold text-gray-900">{totalEntitlement}</span>
                    </div>
                    <div>
                        <span className="text-gray-500 text-sm">Total Remaining: </span>
                        <span className="font-semibold text-[#2160AD]">{totalRemaining}</span>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            {/* Leave History */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="px-6 py-4 bg-[#2160AD]/5 border-b border-gray-100">
                <h4 className="flex items-center gap-2 text-gray-900">
                    <Clock className="w-4 h-4 text-[#2160AD]" />
                    Leave History
                </h4>
                </div>
                <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                    <TableRow className="bg-gray-50/50 border-b border-gray-200">
                        <TableHead className="text-gray-700">Date</TableHead>
                        <TableHead className="text-gray-700">Leave Type</TableHead>
                        <TableHead className="text-center text-gray-700">Used</TableHead>
                        <TableHead className="text-center text-gray-700">Remaining</TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    {history.map((item, i) => (
                        <TableRow key={i} className="border-b border-gray-100 hover:bg-gray-50/50">
                        <TableCell className="text-gray-900">{item.date}</TableCell>
                        <TableCell>
                            <Badge className="bg-[#2160AD]/8 text-[#2160AD] border-[#2160AD]/20">
                            {item.type}
                            </Badge>
                        </TableCell>
                        <TableCell className="text-center text-gray-600">{item.used}</TableCell>
                        <TableCell className="text-center text-gray-600">{item.remaining}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </div>
            </div>
            </div>
        </div>

        {/* Footer */}
        <DialogFooter className="flex flex-col-reverse sm:flex-row sm:justify-end gap-2 border-t border-[#2160AD]/20 pt-4 p-6">
          <Button className="bg-[#2160AD] hover:bg-[#1a4d8a] gap-2">
            <Download className="w-4 h-4" />
            Download
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}