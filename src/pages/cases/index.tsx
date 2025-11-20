// app/cases/page.tsx
"use client";

import React, { useState, useMemo } from "react";
import {
  Clock,
  Briefcase,
  MapPin,
  Search,
  Plus,
  Phone,
  Eye,
  SquarePen,
  Trash2,
} from "lucide-react";
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
import FunctionalHeader from "@/layout/FunctionalHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useSortableTable } from "@/hooks/useSortableTable";

interface Case {
  id: string;
  caseId: string;
  patientName: string;
  patientInitials: string;
  phone: string;
  type: "One-way" | "Round-trip";
  vehicle: string;
  date: string;
  time: string;
  location: string;
  status: string;
}

const CASES_DATA: Case[] = [
  {
    id: "1",
    caseId: "C20251105001",
    patientName: "Sample Patient",
    patientInitials: "SP",
    phone: "+65 9000 0000",
    type: "One-way",
    vehicle: "Unassigned",
    date: "05/11/2025",
    time: "09:00",
    location: "Sample Location",
    status: "Pending for Dispatch",
  },
  {
    id: "2",
    caseId: "#2026031009",
    patientName: "Emily Lim",
    patientInitials: "EL",
    phone: "+65 9456 7890",
    type: "One-way",
    vehicle: "AMB003",
    date: "02/06/2025",
    time: "09:00",
    location: "Blk 789 Bedok North Ave 2",
    status: "Pending for Dispatch",
  },
  {
    id: "3",
    caseId: "#2026031006",
    patientName: "Francis Wilson",
    patientInitials: "FW",
    phone: "+65 9123 4567",
    type: "One-way",
    vehicle: "AMB001",
    date: "01/06/2025",
    time: "08:30",
    location: "175 Made Street, Central",
    status: "Dispatched",
  },
  {
    id: "4",
    caseId: "#2026031007",
    patientName: "Sarah Tan",
    patientInitials: "ST",
    phone: "+65 9234 5678",
    type: "Round-trip",
    vehicle: "AMB002",
    date: "01/06/2025",
    time: "10:15",
    location: "Blk 456 Ang Mo Kio Ave 3",
    status: "Pending for Dispatch",
  },
  {
    id: "5",
    caseId: "#2026031008",
    patientName: "Robert Chen",
    patientInitials: "RC",
    phone: "+65 9345 6789",
    type: "One-way",
    vehicle: "ICU001",
    date: "01/06/2025",
    time: "13:00",
    location: "Mount Elizabeth Hospital",
    status: "Dispatched",
  },
];

const statusOptions = [
  { label: "All Status", value: "all" },
  { label: "Open", value: "Open" },
  { label: "Pending for Dispatch", value: "Pending for Dispatch" },
  { label: "Dispatched", value: "Dispatched" },
  { label: "Pending for Payment", value: "Pending for Payment" },
  { label: "Pending Escort Assignment", value: "Pending Escort Assignment" },
  { label: "Pending Details from Vendor", value: "Pending Details from Vendor" },
  { label: "Pending for Service Receipt", value: "Pending for Service Receipt" },
  { label: "Pending Confirmation", value: "Pending Confirmation" },
  { label: "Completed", value: "Completed" },
  { label: "Cancelled", value: "Cancelled" },
];

const stats = [
  {
    label: "Today's Cases",
    value: 1,
    color: "#2160AD",
    icon: Clock,
  },
  {
    label: "Completed",
    value: 0,
    color: "#16A34A", // Tailwind green-600
    icon: Briefcase,
  },
  {
    label: "Dispatched",
    value: 0,
    color: "#EA580C", // Tailwind orange-600
    icon: MapPin,
  },
];

export default function CasesPage() {
  const router = useRouter();

  const [cases, setCases] = useState<Case[]>(CASES_DATA);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");

  const filteredCases = useMemo(() => {
    return cases.filter((item) => {
      const matchesSearch =
        searchQuery === "" ||
        item.caseId.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.phone.includes(searchQuery);

      const matchesStatus =
        selectedStatus === "all" || item.status === selectedStatus;

      return matchesSearch && matchesStatus;
    });
  }, [cases, searchQuery, selectedStatus]);

  const { sortedData: sortedCases, requestSort, getSortIcon } =
    useSortableTable(filteredCases, "date", "desc");

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this case?")) {
      setCases((prev) => prev.filter((c) => c.id !== id));
    }
  };

  return (
    <>
      <FunctionalHeader
        title="Case Management"
        breadcrumb={[
          { label: "Operations" },
          { label: "Cases" },
        ]}
      />

      <div className="flex-1 w-full overflow-auto">
        <div className="space-y-6 p-4 lg:p-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {stats.map(({ label, value, color, icon: Icon }) => (
              <Card key={label}>
                <CardContent className="flex items-center justify-between p-4 pb-6">
                  <div>
                    <p className="text-sm text-gray-600">{label}</p>
                    <p
                      className="text-2xl font-semibold"
                      style={{ color: color }}
                    >
                      {value}
                    </p>
                  </div>
                  <Icon className="w-8 h-8" style={{ color: `${color}99` }} /> 
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search cases..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="md:w-[200px]">
                <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="All Status" />
                  </SelectTrigger>
                  <SelectContent>
                    {statusOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button onClick={() => router.push("/cases/add")}>
              <Plus className="w-4 h-4" />
              New Case
            </Button>
          </div>

          <Card className="overflow-hidden w-full">
            <Table>
              <TableHeader className="header-bg-soft">
                <TableRow>
                  <TableHead className="p-4">
                    <button
                      className="flex items-center hover:text-gray-900 cursor-pointer"
                      onClick={() => requestSort("caseId")}
                    >
                      Case ID {getSortIcon("caseId")}
                    </button>
                  </TableHead>
                  <TableHead className="p-4">
                    <button
                      className="flex items-center hover:text-gray-900 cursor-pointer"
                      onClick={() => requestSort("patientName")}
                    >
                      Patient Details {getSortIcon("patientName")}
                    </button>
                  </TableHead>
                  <TableHead className="p-4">
                    <button
                      className="flex items-center hover:text-gray-900 cursor-pointer"
                      // onClick={() => requestSort("vehicle")}
                    >
                      Vehicle
                    </button>
                  </TableHead>
                  <TableHead className="p-4">
                    <button
                      className="flex items-center hover:text-gray-900 cursor-pointer"
                      // onClick={() => requestSort("date")}
                    >
                      Booking Date | Time
                    </button>
                  </TableHead>
                  <TableHead className="p-4">
                    <button
                      className="flex items-center hover:text-gray-900 cursor-pointer"
                      onClick={() => requestSort("location")}
                    >
                      Pickup Location {getSortIcon("location")}
                    </button>
                  </TableHead>
                  <TableHead className="p-4">
                    <button
                      className="flex items-center hover:text-gray-900 cursor-pointer"
                      onClick={() => requestSort("status")}
                    >
                      Status {getSortIcon("status")}
                    </button>
                  </TableHead>
                  <TableHead className="p-4">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedCases.map((item) => (
                  <TableRow key={item.id} className="hover:header-bg-soft transition">
                    <TableCell className="p-4">
                      <div className="font-mono font-medium text-[#2160AD]">{item.caseId}</div>
                    </TableCell>
                    <TableCell className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#2160AD] flex items-center justify-center text-white font-medium text-sm">
                          {item.patientInitials}
                        </div>
                        <div>
                          <div className="font-medium">{item.patientName}</div>
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <Phone className="w-3 h-3" />
                            {item.phone}
                          </div>
                          <div className="text-sm text-gray-600">{item.type}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="p-4">
                      <div className="font-medium">{item.vehicle}</div>
                    </TableCell>
                    <TableCell className="p-4">
                      <div className="font-medium">{item.date}</div>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Clock className="w-3 h-3" />
                        {item.time}
                      </div>
                    </TableCell>
                    <TableCell className="p-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-500 mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{item.location}</span>
                      </div>
                    </TableCell>
                    <TableCell className="p-4">
                      <div
                        className={`inline-flex items-center justify-center px-3 py-0.5 rounded-full text-base font-medium ${
                          item.status === "Pending for Dispatch"
                            ? "bg-[#EEA61F] text-white"
                            : item.status === "Dispatched"
                            ? "bg-[#E2CC3B] text-black"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {item.status}
                      </div>
                    </TableCell>
                    <TableCell className="p-4">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" title="View Case">
                          <Eye className="h-4 w-4 text-blue-600" />
                        </Button>
                        <Button variant="ghost" size="icon" title="Edit Case">
                          <SquarePen className="h-4 w-4 text-gray-500" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-red-600 hover:text-red-800"
                          title="Delete Case"
                          onClick={() => handleDelete(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            {sortedCases.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-500">
                  <Briefcase className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <p className="text-base font-medium text-gray-700">No cases found</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Try adjusting your search or filter criteria
                  </p>
                </div>
              </div>
            )}
          </Card>

          <div className="flex justify-between items-center text-base text-gray-600">
            <span>Showing {sortedCases.length} of {cases.length} cases</span>
          </div>
        </div>
      </div>
    </>
  );
}