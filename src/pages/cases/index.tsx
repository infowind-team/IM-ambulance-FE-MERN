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
import FunctionalHeader from "@/layout/FunctionalHeader";
import Link from "next/link";
import SelectDropdown from "@/components/theme-ui/SelectDropdown";

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

 const options = [
  'All Status',
  'Open',
  'Pending for Dispatch',
  'Dispatched',
  'Pending Confirmation',
  'Pending for Payment',
  'Completed',
  'Cancelled',
];

export default function CasesPage() {
  const [status, setStatus] = useState('All Status');
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
            <div className="bg-white rounded-xl border border-[#2160AD]/20 p-4 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Today's Cases</p>
                  <p className="text-2xl font-semibold text-[#2160AD]">1</p>
                </div>
                <Clock className="w-8 h-8 text-[#2160AD]/60" />
              </div>
            </div>

            <div className="bg-white rounded-xl border border-[#2160AD]/20 p-4 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Completed</p>
                  <p className="text-2xl font-semibold text-green-600">0</p>
                </div>
                <Briefcase className="w-8 h-8 text-green-600/60" />
              </div>
            </div>

            <div className="bg-white rounded-xl border border-[#2160AD]/20 p-4 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Dispatched</p>
                  <p className="text-2xl font-semibold text-orange-600">0</p>
                </div>
                <MapPin className="w-8 h-8 text-orange-600/60" />
              </div>
            </div>
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
                <SelectDropdown
                  value={status}
                  options={options}
                  onChange={setStatus}
                />
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
          <div className="bg-white rounded-xl border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-base">
                <thead className="border-b bg-gray-50 sticky top-0 z-10">
                  <tr>
                    <th className="text-left p-4 font-medium">Case ID</th>
                    <th className="text-left p-4 font-medium">
                      Patient Details
                    </th>
                    <th className="text-left p-4 font-medium">Vehicle</th>
                    <th className="text-left p-4 font-medium">
                      Booking Date | Time
                    </th>
                    <th className="text-left p-4 font-medium">
                      Pickup Location
                    </th>
                    <th className="text-left p-4 font-medium">Status</th>
                    <th className="text-left p-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCases.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b hover:bg-gray-50 transition-colors"
                    >
                      {/* Case ID */}
                      <td className="p-4">
                        <div className="font-mono font-medium text-[#2160AD]">
                          {item.caseId}
                        </div>
                      </td>

                      {/* Patient Details */}
                      <td className="p-4">
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
                      </td>

                      {/* Vehicle */}
                      <td className="p-4">
                        <div className="font-medium">{item.vehicle}</div>
                      </td>

                      {/* Date & Time */}
                      <td className="p-4">
                        <div className="font-medium">{item.date}</div>
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <Clock className="w-3 h-3" />
                          {item.time}
                        </div>
                      </td>

                      {/* Pickup Location */}
                      <td className="p-4">
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">
                            {item.location}
                          </span>
                        </div>
                      </td>

                      {/* Status Badge */}
                      <td className="p-4">
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
                      </td>

                      {/* Actions */}
                      <td className="p-4">
                        <div className="flex gap-2">
                          <button
                            className="p-2 rounded-md hover:bg-gray-100 hover-lift transition-colors"
                            title="View Case"
                          >
                            <Eye className="h-4 w-4 text-blue-600" />
                          </button>
                          <button
                            className="p-2 rounded-md hover:bg-gray-100 hover-lift transition-colors"
                            title="Edit Case"
                          >
                            <SquarePen className="h-4 w-4 text-gray-500" />
                          </button>
                          <button
                            className="p-2 rounded-md hover:bg-gray-100 hover-lift transition-colors text-red-600 hover:text-red-800"
                            title="Delete Case"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

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
          </div>

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
