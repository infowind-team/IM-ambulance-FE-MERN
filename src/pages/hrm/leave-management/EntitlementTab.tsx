// components/leave/EntitlementTab.tsx
"use client";

import { useState } from "react";
import { Search, Download, Info, PenLine } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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

interface EmployeeEntitlement {
  id: string;
  name: string;
  employeeId: string;
  schemes: string[];
}

const entitlementData: EmployeeEntitlement[] = [
  {
    id: "1",
    name: "Annette Black",
    employeeId: "ADBFC008",
    schemes: ["Mid-Level Staff Standard Scheme", "Childcare Leave Scheme"],
  },
  {
    id: "2",
    name: "Jennifer Liu",
    employeeId: "JLIU002",
    schemes: ["Mid-Level Staff Standard Scheme", "Childcare Leave Scheme"],
  },
  {
    id: "3",
    name: "Marcus Chen",
    employeeId: "OPS001",
    schemes: ["Mid-Level Staff Standard Scheme", "Childcare Leave Scheme"],
  },
  {
    id: "4",
    name: "Rebecca Taylor",
    employeeId: "HR001",
    schemes: ["Mid-Level Staff Standard Scheme", "Childcare Leave Scheme"],
  },
];

const departments = ["All Departments", "Operations", "HR", "Medical", "Admin"];

export default function EntitlementTab() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState("All Departments");

  const filteredData = entitlementData.filter((emp) => {
    const matchesSearch =
      emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.employeeId.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDept = selectedDept === "All Departments" || true; // Extend with real dept later
    return matchesSearch && matchesDept;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-[#2160AD] font-semibold mb-1">
            Employee Leave Entitlement
          </h3>
          <p className="text-sm text-gray-600">
            View and manage leave balances and entitlements for all employees
          </p>
        </div>
        <Button className="bg-[#2160AD] hover:bg-[#1a4d8a] border-[#2160AD] text-white">
          <Download className="w-4 h-4 mr-2" />
          Download
        </Button>
      </div>

      {/* Filters */}
      <div className="flex gap-4 flex-wrap">
        <div className="relative flex-1 min-w-[250px]">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
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
              <SelectItem key={dept} value={dept}>
                {dept}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <Card className="border-[#2160AD]/20">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-b">
                  <TableHead className="p-4 text-left font-medium">
                    Employee Name / ID
                  </TableHead>
                  <TableHead className="p-4 text-left font-medium">
                    Leave Schemes
                  </TableHead>
                  <TableHead className="p-4 text-left font-medium">
                    Actions
                  </TableHead>
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
                        >
                          <Info className="w-3 h-3 mr-1" />
                          Info
                        </Button>
                        <Button
                          size="sm"
                          className="h-8 px-3 bg-[#2160AD] text-white hover:bg-[#1a4d8a]"
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
          </div>
        </CardContent>
      </Card>

      {/* Empty State */}
      {filteredData.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No employees found.
        </div>
      )}
    </div>
  );
}