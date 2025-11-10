// components/payroll/PayrollManagement.tsx
"use client";

import { useState } from "react";
import {
  Search,
  FileText,
  Settings,
  Plus,
  Eye,
  PenLine,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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

interface PayrollEntry {
  id: string;
  name: string;
  employeeId: string;
  role: string;
  company: string;
  basePay: number;
  incentives: number;
  allowances: number;
  deductions: number;
  cpf: number;
  netPay: number;
}

/* ------------------------------------------------------------------ */
/*  You can move this data to a separate file or fetch it from an API  */
/* ------------------------------------------------------------------ */
const payrollData: PayrollEntry[] = [
  {
    id: "1",
    name: "Annette Black",
    employeeId: "ADBFC008",
    role: "EMT, Medic",
    company: "IM Ambulance",
    basePay: 3000,
    incentives: 250,
    allowances: 200,
    deductions: 150,
    cpf: 650,
    netPay: 2650,
  },
  {
    id: "2",
    name: "Jennifer Liu",
    employeeId: "JLIU002",
    role: "Paramedic, Team Lead",
    company: "IM Ambulance",
    basePay: 5500,
    incentives: 500,
    allowances: 300,
    deductions: 200,
    cpf: 1200,
    netPay: 4900,
  },
  {
    id: "3",
    name: "Marcus Chen",
    employeeId: "OPS001",
    role: "Operations Manager, Dispatcher",
    company: "IM Ambulance",
    basePay: 4200,
    incentives: 150,
    allowances: 250,
    deductions: 100,
    cpf: 900,
    netPay: 3600,
  },
  {
    id: "4",
    name: "Rebecca Taylor",
    employeeId: "HR001",
    role: "HR Manager, Recruitment Specialist",
    company: "IM Ambulance",
    basePay: 6000,
    incentives: 400,
    allowances: 350,
    deductions: 250,
    cpf: 1300,
    netPay: 5200,
  },
];

const summaryCards = [
  { label: "Total Base Pay", value: 18700, icon: Settings, color: "blue" },
  { label: "Total Incentives", value: 1300, icon: Plus, color: "green" },
  { label: "Total Allowances", value: 1100, icon: Plus, color: "purple" },
  { label: "Total Deductions", value: 700, icon: "minus", color: "red" },
  { label: "Total CPF", value: 4050, icon: Settings, color: "orange" },
];

/* ------------------------------------------------------------------ */
/*  Reusable PayrollManagement component                               */
/* ------------------------------------------------------------------ */
export default function PayrollManagement() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("October 2025");

  const filteredData = payrollData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.employeeId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header: Month + Download */}
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
        <Button className="bg-[#2160AD] hover:bg-[#1d5497]">
          <FileText className="w-4 h-4 mr-2" />
          Download
        </Button>
      </div>

      {/* Search Bar */}
      <div className="flex justify-between">
        <div className="flex flex-wrap gap-4 items-center">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search employees..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-64"
            />
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-5 gap-6">
        {summaryCards.map((card, idx) => (
          <Card key={idx} className="border-gray-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">{card.label}</p>
                  <p className="font-medium text-gray-900 text-2xl">
                    {card.icon === "minus" ? (
                      <span className="text-red-600">-{card.value.toFixed(2)}</span>
                    ) : (
                      card.value.toFixed(2)
                    )}
                  </p>
                </div>
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    card.color === "blue"
                      ? "bg-blue-50"
                      : card.color === "green"
                      ? "bg-green-50"
                      : card.color === "purple"
                      ? "bg-purple-50"
                      : card.color === "red"
                      ? "bg-red-50"
                      : "bg-orange-50"
                  }`}
                >
                  {card.icon === "minus" ? (
                    <div className="w-5 h-5 text-red-600">-</div>
                  ) : card.icon === Settings ? (
                    <Settings
                      className={`w-5 h-5 ${
                        card.color === "blue" ? "text-[#2160AD]" : "text-orange-600"
                      }`}
                    />
                  ) : (
                    <Plus
                      className={`w-5 h-5 ${
                        card.color === "green"
                          ? "text-green-600"
                          : "text-purple-600"
                      }`}
                    />
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Payroll Table */}
      <Card className="overflow-hidden">
        <Table>
          <TableHeader className="header-bg-soft">
            <TableRow>
              <TableHead className="font-semibold p-4">Employee</TableHead>
              <TableHead className="font-semibold p-4">Company</TableHead>
              <TableHead className="font-semibold p-4">Base Pay</TableHead>
              <TableHead className="font-semibold p-4">Incentives</TableHead>
              <TableHead className="font-semibold p-4">Allowances</TableHead>
              <TableHead className="font-semibold p-4">Deductions</TableHead>
              <TableHead className="font-semibold p-4">CPF</TableHead>
              <TableHead className="font-semibold p-4">Net Pay</TableHead>
              <TableHead className="font-semibold p-4">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((entry) => (
              <TableRow
                key={entry.id}
                className="hover:header-bg-soft transition"
              >
                <TableCell className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#2160AD] rounded-full flex items-center justify-center text-white text-sm font-medium">
                          {entry.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div>
                          <div className="font-medium">{entry.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {entry.employeeId} • {entry.role}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="py-4">{entry.company}</TableCell>
                    <TableCell className="py-4 font-mono">
                      {entry.basePay.toFixed(2)}
                    </TableCell>
                    <TableCell className="py-4 font-mono">
                      {entry.incentives.toFixed(2)}
                    </TableCell>
                    <TableCell className="py-4 font-mono">
                      {entry.allowances.toFixed(2)}
                    </TableCell>
                    <TableCell className="py-4 font-mono">
                      {entry.deductions.toFixed(2)}
                    </TableCell>
                    <TableCell className="py-4 font-mono">
                      {entry.cpf.toFixed(2)}
                    </TableCell>
                    <TableCell className="py-4 font-mono">
                      {entry.netPay.toFixed(2)}
                    </TableCell>
                    <TableCell className="py-4">
                      <div className="flex gap-2">
                        <Button size="icon" variant="ghost" className="h-8 w-8">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="ghost" className="h-8 w-8">
                          <PenLine className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>

      {/* Pagination */}
      <div className="flex justify-between items-center text-sm text-muted-foreground">
        <span>Showing {filteredData.length} of {payrollData.length} payroll records</span>
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