"use client";

import React, { useState, useMemo } from "react";
import {
  Clock,
  Briefcase,
  MapPin,
  Search,
  ChevronDown,
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
import Link from "next/link";

// === MAIN PAGE ===
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

export default function CasesPage() {
  const [status, setStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All Status");

  // Filter logic
  const filteredCases = useMemo(() => {
    return CASES_DATA.filter((item) => {
      const matchesSearch =
        searchQuery === "" ||
        item.caseId.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.phone.includes(searchQuery);

      const matchesStatus =
        selectedStatus === "All Status" || item.status === selectedStatus;

      return matchesSearch && matchesStatus;
    });
  }, [searchQuery, selectedStatus]);

  return (
    <>
      <FunctionalHeader title="Case Management" />

      <div className="flex-1 w-full overflow-auto">
        <div className="space-y-6 p-4 lg:p-6 w-full">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card>
              <CardContent className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Today's Cases</p>
                  <p className="text-2xl font-semibold text-[#2160AD]">1</p>
                </div>
                <Clock className="w-8 h-8 text-[#2160AD]/60" />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Completed</p>
                  <p className="text-2xl font-semibold text-green-600">0</p>
                </div>
                <Briefcase className="w-8 h-8 text-green-600/60" />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Dispatched</p>
                  <p className="text-2xl font-semibold text-orange-600">0</p>
                </div>
                <MapPin className="w-8 h-8 text-orange-600/60" />
              </CardContent>
            </Card>
          </div>

          {/* Search + Filters + New Case */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search cases..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2160AD]/50 focus:border-[#2160AD] text-sm"
                />
              </div>

              {/* Status Filter */}
              <div className="md:w-[200px]"> 
                 <Select value={status} onValueChange={setStatus}>
                  <SelectTrigger className="w-[140px] text-base-optimized">
                    <SelectValue placeholder="All Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='all'>All Status</SelectItem>
                    <SelectItem value='Open'>Open</SelectItem>
                    <SelectItem value='Pending for Dispatch'>Pending for Dispatch</SelectItem>
                    <SelectItem value='Dispatched'>Dispatched</SelectItem>
                    <SelectItem value='Pending Confirmation'>Pending Confirmation</SelectItem>
                    <SelectItem value='Pending for Payment'>Pending for Payment</SelectItem>
                    <SelectItem value='Completed'>Completed</SelectItem>
                    <SelectItem value='Cancelled'>Cancelled</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* New Case Button */}
            <Link
              href={"/cases/add"}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#2160AD] hover:bg-[#1d5497] text-white rounded-md text-sm font-medium transition-all hover-lift"
            >
              <Plus className="w-4 h-4" />
              New Case
            </Link>
          </div>

          {/* Table Card */}
          <Card className="rounded-xl border shadow-sm p-6">
            <Table>
              <TableHeader className="bg-gray-50">
                <TableRow>
                  <TableHead className="text-gray-700 font-semibold px-4 py-3">Case ID</TableHead>
                  <TableHead className="text-gray-700 font-semibold px-4 py-3">
                    Patient Details
                  </TableHead>
                  <TableHead className="text-gray-700 font-semibold px-4 py-3">Vehicle</TableHead>
                  <TableHead className="text-gray-700 font-semibold px-4 py-3">
                    Booking Date | Time
                  </TableHead>
                  <TableHead className="text-gray-700 font-semibold px-4 py-3">
                    Pickup Location
                  </TableHead>
                  <TableHead className="text-gray-700 font-semibold px-4 py-3">Status</TableHead>
                  <TableHead className="text-gray-700 font-semibold px-4 py-3">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCases.map((item) => (
                  <TableRow
                    key={item.id}
                    className="hover:bg-gray-50 transition"
                  >
                    {/* Case ID */}
                    <TableCell className="py-4">
                        <div className="font-mono font-medium text-[#2160AD]">
                          {item.caseId}
                        </div>
                      </TableCell>

                      {/* Patient Details */}
                      <TableCell className="py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-[#2160AD] flex items-center justify-center text-white font-medium text-sm">
                            {item.patientInitials}
                          </div>
                          <div>
                            <div className="font-medium">
                              {item.patientName}
                            </div>
                            <div className="flex items-center gap-1 text-sm text-gray-600">
                              <Phone className="w-3 h-3" />
                              {item.phone}
                            </div>
                            <div className="text-sm text-gray-600">
                              {item.type}
                            </div>
                          </div>
                        </div>
                      </TableCell>

                      {/* Vehicle */}
                      <TableCell className="py-4">
                        <div className="font-medium">{item.vehicle}</div>
                      </TableCell>

                      {/* Date & Time */}
                      <TableCell className="py-4">
                        <div className="font-medium">{item.date}</div>
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <Clock className="w-3 h-3" />
                          {item.time}
                        </div>
                      </TableCell>

                      {/* Pickup Location */}
                      <TableCell className="py-4">
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">
                            {item.location}
                          </span>
                        </div>
                      </TableCell>

                      {/* Status Badge */}
                      <TableCell className="py-4">
                        <div
                          className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-sm font-medium ${
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

                      {/* Actions */}
                      <TableCell className="py-4">
                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="hover-lift"
                            title="View Case"
                          >
                            <Eye className="h-4 w-4 text-blue-600" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="hover-lift"
                            title="Edit Case"
                          >
                            <SquarePen className="h-4 w-4 text-gray-500" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="hover-lift text-red-600 hover:text-red-800"
                            title="Delete Case"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {filteredCases.length <= 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-500">
                    <Briefcase className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <p className="text-base font-medium text-gray-700">
                      No cases found
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Try adjusting your search or filter criteria
                    </p>
                  </div>
                </div>
              )}
          </Card>

          {/* Footer */}
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>
              Showing {filteredCases.length} of {CASES_DATA.length} cases
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
