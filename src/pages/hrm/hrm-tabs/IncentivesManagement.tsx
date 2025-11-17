"use client";

import { useState } from "react";
import {
  Search,
  Settings,
  Users,
  DollarSign,
  Clock,
  Calculator,
  FileText,
  Eye,
  ChevronDown,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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

interface IncentiveEntry {
  id: string;
  name: string;
  employeeId: string;
  annualSalary: number;
  hourlyRate: number;
  cases: number;
  caseIncentive: number;
  overtime: number;
  otherIncentives: number;
  netIncentive: number;
}

const incentiveData: IncentiveEntry[] = [
  {
    id: "1",
    name: "John Chen",
    employeeId: "EMP001",
    annualSalary: 57200,
    hourlyRate: 25.0,
    cases: 45,
    caseIncentive: 192.0,
    overtime: 387.5,
    otherIncentives: 94.0,
    netIncentive: 673.5,
  },
  {
    id: "2",
    name: "Sarah Lim",
    employeeId: "EMP002",
    annualSalary: 62400,
    hourlyRate: 27.27,
    cases: 38,
    caseIncentive: 144.0,
    overtime: 338.55,
    otherIncentives: 63.0,
    netIncentive: 545.55,
  },
  {
    id: "3",
    name: "Michael Wong",
    employeeId: "EMP003",
    annualSalary: 54080,
    hourlyRate: 23.64,
    cases: 52,
    caseIncentive: 235.0,
    overtime: 363.04,
    otherIncentives: 122.0,
    netIncentive: 720.04,
  },
  {
    id: "4",
    name: "Emily Tan",
    employeeId: "EMP004",
    annualSalary: 49920,
    hourlyRate: 21.82,
    cases: 35,
    caseIncentive: 159.0,
    overtime: 147.57,
    otherIncentives: 64.0,
    netIncentive: 370.57,
  },
  {
    id: "5",
    name: "David Kumar",
    employeeId: "EMP005",
    annualSalary: 68640,
    hourlyRate: 30.0,
    cases: 41,
    caseIncentive: 194.0,
    overtime: 600.0,
    otherIncentives: 92.0,
    netIncentive: 886.0,
  },
  {
    id: "6",
    name: "Rachel Ng",
    employeeId: "EMP006",
    annualSalary: 54912,
    hourlyRate: 24.0,
    cases: 42,
    caseIncentive: 210.0,
    overtime: 336.0,
    otherIncentives: 69.0,
    netIncentive: 615.0,
  },
  {
    id: "7",
    name: "Alex Lee",
    employeeId: "EMP007",
    annualSalary: 62920,
    hourlyRate: 27.5,
    cases: 36,
    caseIncentive: 185.0,
    overtime: 220.63,
    otherIncentives: 41.0,
    netIncentive: 446.63,
  },
  {
    id: "8",
    name: "Lisa Zhang",
    employeeId: "EMP008",
    annualSalary: 53768,
    hourlyRate: 23.5,
    cases: 33,
    caseIncentive: 174.0,
    overtime: 164.5,
    otherIncentives: 51.0,
    netIncentive: 389.5,
  },
];

const summaryCards = [
  { label: "Total Employees", value: 8, icon: Users, color: "blue" },
  {
    label: "Total Incentives",
    value: 4646.79,
    icon: DollarSign,
    color: "blue",
  },
  {
    label: "Total OT Hours",
    value: 68.0,
    unit: "h",
    icon: Clock,
    color: "blue",
  },
  { label: "Avg Per Employee", value: 580.85, icon: Calculator, color: "blue" },
  { label: "Total Cases", value: 322, icon: FileText, color: "blue" },
];

export default function IncentivesManagement() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("October 2025");

  const filteredData = incentiveData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.employeeId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-medium text-black">
            Employee Incentive Overview
          </h1>
          <p className="text-[#717182]">
            Monitor employee incentive tiers and performance metrics
          </p>
        </div>
        <Button variant="outline" className="gap-2">
          <Settings className="w-4 h-4" />
          Configuration
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {summaryCards.map((card, idx) => (
          <Card key={idx} className="border">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <card.icon className="w-5 h-5 text-[#2160AD]" />
                </div>
                <div>
                  <p className="text-sm text-[#717182]">{card.label}</p>
                  <p className="text-lg font-medium text-black">
                    {card.value}
                    {card.unit && (
                      <span className="text-sm font-normal text-[#717182] ml-1">
                        {card.unit}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Month + Download */}
      <div className="flex items-center justify-between">
        <div className="w-48">
          <Select value={selectedMonth} onValueChange={setSelectedMonth}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="October 2025">October 2025</SelectItem>
              <SelectItem value="September 2025">September 2025</SelectItem>
              <SelectItem value="August 2025">August 2025</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="bg-[#2160AD] hover:bg-[#1d5497] gap-2">
          <FileText className="w-4 h-4" />
          Download
        </Button>
      </div>

      {/* Incentives Table */}
      <Card className="overflow-hidden">
        <CardHeader className="bg-[#2160AD]/5 border-b border-[#2160AD]/20 px-6 pt-6 pb-4">
          <h4 className="text-[#2160AD] font-semibold ">
            Employee Incentive Details
          </h4>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="header-bg-soft">
                <TableRow>
                  <TableHead className="p-4 font-semibold">
                    Employee Details
                  </TableHead>
                  <TableHead className="p-4 font-semibold">
                    Cases
                  </TableHead>
                  <TableHead className="p-4 font-semibold">
                    Case Incentives
                  </TableHead>
                  <TableHead className="p-4 font-semibold">
                    Overtime
                  </TableHead>
                  <TableHead className="p-4 font-semibold">
                    Other Incentives
                  </TableHead>
                  <TableHead className="p-4 font-semibold">
                    Net Incentive
                  </TableHead>
                  <TableHead className="p-4 font-semibold">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.map((entry) => (
                  <TableRow
                    key={entry.id}
                    className="border-b border-gray-100 hover:bg-[#2160AD]/[0.02]"
                  >
                    <TableCell className="px-6 py-4">
                      <div className="space-y-1">
                        <div className="font-medium">{entry.name}</div>
                        <div className="text-sm text-[#717182]">
                          ID: {entry.employeeId}
                        </div>
                        <div className="text-sm text-[#717182] flex items-center gap-1">
                          <span className="text-xs">
                            ${entry.annualSalary.toFixed(2)}/yr
                          </span>
                          <span className="text-[#2160AD] text-xs">
                            (${entry.hourlyRate.toFixed(2)}/hr)
                          </span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-center px-4 py-4">
                      <div className="inline-flex items-center justify-center min-w-[40px] h-8 px-3 header-bg-soft rounded-md">
                        {entry.cases}
                      </div>
                    </TableCell>
                    <TableCell className="text-center px-4 py-4 font-mono">
                      ${entry.caseIncentive.toFixed(2)}
                    </TableCell>
                    <TableCell className="text-center px0 px-4 py-4 font-mono">
                      ${entry.overtime.toFixed(2)}
                    </TableCell>
                    <TableCell className="text-center px-4 py-4 font-mono">
                      ${entry.otherIncentives.toFixed(2)}
                    </TableCell>
                    <TableCell className="text-center px-4 py-4">
                      <div className="inline-flex items-center justify-center min-w-[100px] h-9 px-4 bg-[#2160AD]/5 rounded-md border border-[#2160AD]/10">
                        <span className="text-[#2160AD] font-medium">
                          ${entry.netIncentive.toFixed(2)}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-center px-4 py-4">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 gap-1.5 px-3 text-[#2160AD] hover:bg-[#2160AD]/10"
                      >
                        <Eye className="w-4 h-4" />
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Optional: Pagination (if needed later) */}
      <div className="flex justify-between items-center text-sm text-muted-foreground">
        <span>
          Showing {filteredData.length} of {incentiveData.length} records
        </span>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm">
            1
          </Button>
          <Button variant="outline" size="sm" disabled>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
