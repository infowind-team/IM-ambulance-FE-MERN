// app/roster/components/ShiftHoursTab.tsx
"use client";

import React, { useState } from "react";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  TriangleAlert,
  X,
  Info,
  Navigation,
  MapPin,
  Clock,
} from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerHeader,
} from "@/components/ui/drawer";

/* --------------------------------------------------------------- */
/* Confirmation Dialog for Unassigning staff                        */
/* --------------------------------------------------------------- */
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

interface UnassignStaff {
  name: string;
  role: "Driver" | "Medic" | "Escort";
}

/* --------------------------------------------------------------- */
/* Case Drawer – Dynamic with all HTML converted to React           */
/* --------------------------------------------------------------- */
interface Case {
  id: string;
  caseNumber: string;
  patient: string;
  pickup: string;
  dropoff: string;
  serviceType: "One-way" | "Two-way" | "Three-way";
  startTime: string;
  requirements: string;
  status: "Open" | "Pending for Dispatch" | "Completed";
}

function CaseDrawer({ caseItem }: { caseItem: Case }) {
  const getStatusBg = (status: Case["status"]) => {
    switch (status) {
      case "Open":
        return "bg-blue-500";
      case "Pending for Dispatch":
        return "bg-amber-500";
      case "Completed":
        return "bg-emerald-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="p-6 overflow-y-auto h-full pb-32">
      {/* Case Information */}
      <div className="bg-[#fcfcfc] border border-[rgba(0,0,0,0.05)] rounded-[8px] p-4 mb-7">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-base font-semibold text-gray-900">
            Case Information
          </h3>
          <button
            className="text-[#2160AD] hover:text-[#1d5497] transition-colors p-1"
            title="View case details"
          >
            <Info className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-2">
          <div className="text-sm font-bold text-black">
            Case No.: {caseItem.caseNumber}
          </div>
          <div className="flex gap-2 text-sm">
            <span className="text-gray-600">Trip Route:</span>
            <span className="text-black font-['Poppins:Regular','Noto_Sans_Symbols:Regular',sans-serif]">
              {caseItem.pickup} → {caseItem.dropoff}
            </span>
          </div>
          <div className="flex gap-2 text-sm">
            <span className="text-gray-600">Start Time:</span>
            <span className="text-black">{caseItem.startTime}</span>
          </div>
          <div className="flex gap-2 text-sm">
            <span className="text-gray-600">Service Type:</span>
            <span className="text-black">{caseItem.serviceType}</span>
          </div>
          <div className="flex gap-2 text-sm">
            <span className="text-gray-600">Estimated Duration:</span>
            <span className="text-black">45 minutes</span>
          </div>
          <div className="flex gap-2 text-sm">
            <span className="text-gray-600">Requirements:</span>
            <span className="text-black">{caseItem.requirements}</span>
          </div>
          <div className="flex gap-2 text-sm items-center">
            <span className="text-gray-600">Status:</span>
            <Badge
              className={`${getStatusBg(
                caseItem.status
              )} text-white px-3 py-1 rounded-full text-xs font-medium`}
            >
              {caseItem.status}
            </Badge>
          </div>
        </div>
      </div>

      {/* Vehicle Live Location */}
      <div className="mb-6">
        <Card className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-[#2160AD]/20 overflow-hidden">
          <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 pb-3 header-bg-soft">
            <div className="flex items-center justify-between">
              <h4 className="leading-none text-[#2160AD] flex items-center gap-2">
                <Navigation className="w-5 h-5" />
                <span>Vehicle Live Location</span>
              </h4>
            </div>
          </div>

          <div className="p-4">
            <div className="flex gap-4">
              <div className="w-1/2 relative bg-gray-100 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-blue-50 to-blue-100">
                  <svg className="absolute inset-0 w-full h-full opacity-20">
                    <defs>
                      <pattern
                        id="grid"
                        width="40"
                        height="40"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M 40 0 L 0 0 0 40"
                          fill="none"
                          stroke="#2160AD"
                          strokeWidth="0.5"
                        />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute top-1/3 left-0 right-0 h-2 bg-gray-300 opacity-40"></div>
                    <div className="absolute top-0 bottom-0 left-1/2 w-2 bg-gray-300 opacity-40"></div>

                    <div className="relative">
                      <div className="absolute -inset-4 bg-[#2160AD] opacity-20 rounded-full animate-ping"></div>
                      <div className="relative bg-[#2160AD] text-white rounded-full p-4 shadow-lg">
                        <Navigation className="w-6 h-6 transform rotate-45" />
                      </div>
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-md shadow-md whitespace-nowrap border border-[#2160AD]/20">
                        <p className="font-medium text-sm">SKR1234A</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-1/4 left-1/4 bg-red-500 w-3 h-3 rounded-full shadow-lg"></div>
                  <div className="absolute top-3/4 right-1/4 bg-green-500 w-3 h-3 rounded-full shadow-lg"></div>
                </div>

                <div className="absolute top-3 left-3 bg-white rounded-lg shadow-lg px-2 py-1.5 border border-[#2160AD]/20">
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 bg-[#2160AD] rounded flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500">Powered by</p>
                      <p className="font-semibold text-xs text-[#2160AD]">
                        Cartrack
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-1/2 flex flex-col justify-center gap-4">
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="p-2 bg-[#2160AD]/10 rounded-lg">
                    <Navigation className="w-5 h-5 text-[#2160AD]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-0.5">
                      Current Speed
                    </p>
                    <p className="font-semibold text-lg">49 km/h</p>
                    <p className="text-xs text-gray-400">Moving</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <MapPin className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-0.5">
                      Current Location
                    </p>
                    <p className="font-semibold">Jurong East, Singapore</p>
                    <p className="text-xs text-gray-400">1.3483, 103.6831</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="p-2 bg-orange-50 rounded-lg">
                    <Clock className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-0.5">Last Update</p>
                    <p className="font-semibold">5:07:03 PM</p>
                    <p className="text-xs text-gray-400">Real-time tracking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Cancel Case Button */}
      <div className="mb-6">
        <Button className="w-full bg-destructive hover:bg-destructive/90 text-white">
          Cancel Case
        </Button>
      </div>

      {/* Staff Available Section */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <h3 className="text-base font-semibold text-gray-900">
            Staff Available
          </h3>
          <Button
            variant="outline"
            className="flex items-center gap-2 rounded-[18.5px] px-4 py-2 text-sm font-semibold text-[#545454] hover:bg-gray-50 border-2 border-[#2160ad]"
          >
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 11 9">
              <path d="M9.9729 0.129025C9.92383 0.0846804 9.86644 0.0505131 9.80407 0.0285016C9.7417 0.00649003 9.67558 -0.00292871 9.60955 0.000791616C9.54351 0.00451195 9.47887 0.0212971 9.41937 0.0501748C9.35986 0.0790525 9.30668 0.119449 9.2629 0.169025L3.4529 6.66902L0.852899 3.87402C0.810221 3.82412 0.758132 3.78311 0.699604 3.75334C0.641076 3.72356 0.577257 3.70561 0.511791 3.7005C0.446325 3.6954 0.380493 3.70323 0.318057 3.72357C0.25562 3.74391 0.1978 3.77634 0.147899 3.81902C0.101035 3.86551 0.0638379 3.92081 0.0384536 3.98174C0.0130692 4.04267 0 4.10802 0 4.17402C0 4.24003 0.0130692 4.30538 0.0384536 4.36631C0.0638379 4.42724 0.101035 4.48254 0.147899 4.52902L3.4879 8.12902L10.0079 0.819024C10.092 0.721607 10.1353 0.595524 10.1287 0.467007C10.1222 0.338489 10.0664 0.217434 9.9729 0.129025Z" />
            </svg>
            Auto Assign
          </Button>
        </div>

        {/* Drivers */}
        <div className="mb-6">
          <h4 className="text-base font-medium text-gray-700 mb-2">Drivers</h4>
          <div className="space-y-2">
            <div className="bg-[#fcfcfc] border border-[rgba(0,0,0,0.05)] rounded-[12px] flex items-end justify-end">
              <div className="flex-1 p-3">
                <div className="text-base font-medium text-black mb-1">
                  John Smith (2.3km away)
                </div>
                <div className="text-sm text-gray-600 whitespace-pre-line">
                  Next case: 14:30
                </div>
              </div>
              <div className="p-1">
                <Button className="w-full px-4 py-2 rounded-[20px] text-sm font-medium bg-[#2160ad] text-white border-2 border-[#2160ad] hover:bg-[#1d5497]">
                  Assign
                </Button>
              </div>
            </div>

            <div className="bg-[#fcfcfc] border border-[rgba(0,0,0,0.05)] rounded-[12px] flex items-end justify-end">
              <div className="flex-1 p-3">
                <div className="text-base font-medium text-black mb-1">
                  Lisa Johnson (2.7km away)
                </div>
                <div className="text-sm text-gray-600 whitespace-pre-line">
                  1.8km from ongoing destination
                  {"\n"}Time started: 08:15
                </div>
              </div>
              <div className="p-1">
                <Button
                  variant="outline"
                  className="w-full px-4 py-2 rounded-[20px] text-sm font-medium border-2 border-[#2160ad]"
                >
                  Assigned
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Medics */}
        <div className="mb-6">
          <h4 className="text-base font-medium text-gray-700 mb-2">Medics</h4>
          <div className="space-y-2">
            <div className="bg-[#fcfcfc] border border-[rgba(0,0,0,0.05)] rounded-[12px] flex items-end justify-end">
              <div className="flex-1 p-3">
                <div className="text-base font-medium text-black mb-1">
                  Dr. Sarah Williams (4.2km away)
                </div>
                <div className="text-sm text-gray-600 whitespace-pre-line">
                  3.1km from ongoing destination
                  {"\n"}Next case: 12:00
                </div>
              </div>
              <div className="p-1">
                <Button className="w-full px-4 py-2 rounded-[20px] text-sm font-medium bg-[#2160ad] text-white border-2 border-[#2160ad] hover:bg-[#1d5497]">
                  Assign
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Escorts */}
        <div className="mb-6">
          <h4 className="text-base font-medium text-gray-700 mb-2">Escorts</h4>
          <div className="space-y-2">
            <div className="bg-[#fcfcfc] border border-[rgba(0,0,0,0.05)] rounded-[12px] flex items-end justify-end">
              <div className="flex-1 p-3">
                <div className="text-base font-medium text-black mb-1">
                  Mark Thompson (5.5km away)
                </div>
                <div className="text-sm text-gray-600 whitespace-pre-line">
                  Next case: 15:00
                </div>
              </div>
              <div className="p-1">
                <Button
                  variant="outline"
                  className="w-full px-4 py-2 rounded-[20px] text-sm font-medium border-2 border-[#2160ad]"
                >
                  Assigned
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Mock Data & Shift Groups                                           */
/* ------------------------------------------------------------------ */
const mockCases: Case[] = [
  {
    id: "1",
    caseNumber: "#2026031006",
    patient: "Francis Wilson",
    pickup: "175 Made Street, Central",
    dropoff: "Central Hospital",
    serviceType: "One-way",
    startTime: "08:30",
    requirements: "A&E, Oxygen Support",
    status: "Open",
  },
  {
    id: "2",
    caseNumber: "#2026031005",
    patient: "Michael Chan",
    pickup: "435 Oak Avenue",
    dropoff: "St. Mary's Hospital",
    serviceType: "Two-way",
    startTime: "10:15",
    requirements: "Wheelchair Access",
    status: "Pending for Dispatch",
  },
  {
    id: "3",
    caseNumber: "#2026031007",
    patient: "Francis Wilson",
    pickup: "782 Pine Street",
    dropoff: "General Hospital",
    serviceType: "Three-way",
    startTime: "11:00",
    requirements: "Cardiac Monitor",
    status: "Pending for Dispatch",
  },
  {
    id: "4",
    caseNumber: "#2026031008",
    patient: "Robert Davis",
    pickup: "221 Elm Drive",
    dropoff: "City Medical Center",
    serviceType: "One-way",
    startTime: "08:45",
    requirements: "Standard Transport",
    status: "Completed",
  },
  {
    id: "5",
    caseNumber: "#2026031009",
    patient: "Robert Davis",
    pickup: "221 Elm Drive",
    dropoff: "City Medical Center",
    serviceType: "One-way",
    startTime: "08:45",
    requirements: "Standard Transport",
    status: "Completed",
  },
  {
    id: "6",
    caseNumber: "#2026031019",
    patient: "Sarah Johnson",
    pickup: "123 Main Street, Central",
    dropoff: "Central Hospital",
    serviceType: "One-way",
    startTime: "12:30",
    requirements: "A&E, Oxygen Support",
    status: "Open",
  },
  {
    id: "7",
    caseNumber: "#2026031018",
    patient: "Michael Chan",
    pickup: "456 Oak Avenue",
    dropoff: "St. Mary's Hospital",
    serviceType: "Two-way",
    startTime: "13:15",
    requirements: "Wheelchair Access",
    status: "Pending for Dispatch",
  },
];

const shiftGroups = {
  "Day Shift": {
    time: "08:00 - 11:00",
    count: 4,
    cases: mockCases.slice(0, 5),
  },
  "Afternoon Shift": {
    time: "11:00 - 14:00",
    count: 2,
    cases: mockCases.slice(5),
  },
};

/* ------------------------------------------------------------------ */
/* Main Component                                                     */
/* ------------------------------------------------------------------ */
export default function ShiftHoursTab() {
  const [selectedDate] = useState(new Date(2025, 5, 1)); // June 1, 2025
  const [shiftFilter, setShiftFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedCase, setSelectedCase] = useState<Case | null>(null);

  // Unassign dialog state
  const [openUnassignDialog, setOpenUnassignDialog] = useState(false);
  const [staffToUnassign, setStaffToUnassign] = useState<UnassignStaff | null>(
    null
  );

  const getStatusColor = (status: Case["status"]) => {
    switch (status) {
      case "Open":
        return "bg-blue-500";
      case "Pending for Dispatch":
        return "bg-amber-500";
      case "Completed":
        return "bg-emerald-500";
      default:
        return "header-bg-soft0";
    }
  };

  const filteredCases = mockCases.filter((c) => {
    if (statusFilter !== "all" && c.status !== statusFilter) return false;
    return true;
  });

  const stats = {
    total: filteredCases.length,
    open: filteredCases.filter((c) => c.status === "Open").length,
    oneWay: filteredCases.filter((c) => c.serviceType === "One-way").length,
    twoWay: filteredCases.filter((c) => c.serviceType === "Two-way").length,
    staffAvailable: 6,
    fulfilled: filteredCases.filter((c) => c.status === "Completed").length,
    cancelled: 0,
  };

  const openCaseDrawer = (c: Case) => {
    setSelectedCase(c);
    setOpenDrawer(true);
  };

  const handleUnassignConfirm = () => {
    if (!staffToUnassign) return;
    console.log(`Unassigning ${staffToUnassign.role}: ${staffToUnassign.name}`);
    // TODO: Replace with real API call
    // await unassignStaff(staffToUnassign);
  };

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-[#2160AD] rounded-lg p-4 text-white border border-[#2160AD]/20 gap-1 hover:shadow-lg transition-all">
          <div className="text-2xl font-medium">{stats.total}</div>
          <div className="opacity-90 text-base">Total Cases</div>
        </Card>
        <Card className="bg-red-500 rounded-lg p-4 text-white border border-red-500/20 gap-1 hover:shadow-lg transition-all">
          <div className="text-2xl font-medium">{stats.open}</div>
          <div className="opacity-90 text-base">Open Cases</div>
        </Card>
        <Card className="bg-purple-500 rounded-lg p-4 text-white border border-purple-500/20 gap-1 hover:shadow-lg transition-all">
          <div className="text-2xl font-medium">{stats.oneWay}</div>
          <div className="opacity-90 text-base">1-Way Trip</div>
        </Card>
        <Card className="bg-indigo-500 rounded-lg p-4 text-white border border-indigo-500/20 gap-1 hover:shadow-lg transition-all">
          <div className="text-2xl font-medium">{stats.twoWay}</div>
          <div className="opacity-90 text-base">2-Way Trip</div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-teal-500 rounded-lg p-4 text-white border border-teal-500/20 gap-1 hover:shadow-lg transition-all">
          <div className="text-2xl font-medium">{stats.staffAvailable}</div>
          <div className="opacity-90 text-base">Staff Available</div>
        </Card>
        <Card className="bg-blue-500 rounded-lg p-4 text-white border border-blue-500/20 gap-1 hover:shadow-lg transition-all">
          <div className="text-2xl font-medium">{stats.fulfilled}</div>
          <div className="opacity-90 text-base">Cases Fulfilled</div>
        </Card>
        <Card className="bg-pink-500 rounded-lg p-4 text-white border border-pink-500/20 gap-1 hover:shadow-lg transition-all">
          <div className="text-2xl font-medium">{stats.cancelled}</div>
          <div className="opacity-90 text-base">Cancelled Cases</div>
        </Card>
      </div>

      {/* Warning Alert */}
      {stats.open > 0 && (
        <Alert className="bg-red-50 border-l-4 border-red-400 rounded-r-lg">
          <TriangleAlert className="h-4 w-4 text-red-400" />
          <AlertDescription className="text-sm text-red-700">
            <span className="font-semibold">Warning:</span>{" "}
            <span className="font-normal">
              There are {stats.open} open case{stats.open > 1 ? "s" : ""} not
              assigned
            </span>
          </AlertDescription>
        </Alert>
      )}

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Select value={shiftFilter} onValueChange={setShiftFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Shift Hours" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Shifts</SelectItem>
            <SelectItem value="day">Day Shift</SelectItem>
            <SelectItem value="afternoon">Afternoon Shift</SelectItem>
          </SelectContent>
        </Select>

        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="All Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="Open">Open</SelectItem>
            <SelectItem value="Pending for Dispatch">Pending</SelectItem>
            <SelectItem value="Completed">Completed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Shift Groups */}
      <div>
        <h3 className="text-[#2160AD] mb-4 font-medium">
          Day View - {format(selectedDate, "MMMM d, yyyy")}
        </h3>

        {Object.entries(shiftGroups).map(([shiftName, group]) => {
          const filteredGroupCases =
            shiftFilter === "all" ||
            shiftFilter === shiftName.toLowerCase().split(" ")[0]
              ? group.cases
              : [];

          if (filteredGroupCases.length === 0) return null;

          return (
            <div key={shiftName} className="mb-8">
              <h4 className="text-[#2160AD] mb-2 font-medium text-lg">
                {shiftName}
              </h4>
              <div className="text-gray-600 mb-4 text-base">
                {group.time} • {filteredGroupCases.length} case
                {filteredGroupCases.length > 1 ? "s" : ""}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredGroupCases.map((c) => (
                  <Card
                    key={c.id}
                    onClick={() => openCaseDrawer(c)}
                    className="bg-white border-2 border-[#2160AD]/20 rounded-2xl p-5 shadow-md cursor-pointer hover:shadow-xl transition-all hover:border-[#2160AD]/50 gap-0 hover-lift"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <Badge
                        className={`${getStatusColor(
                          c.status
                        )} text-white px-3 py-2 rounded-lg font-semibold text-base`}
                      >
                        {c.status}
                      </Badge>
                    </div>

                    <div>
                      <div className="text-base font-bold text-[#2160AD] mb-3">
                        {c.caseNumber}
                      </div>
                      <div className="text-gray-700 space-y-2 text-base leading-relaxed">
                        <div className="font-semibold text-gray-900">
                          Patient: {c.patient}
                        </div>
                        <div className="flex items-start space-x-1">
                          <span className="text-[#2160AD] mt-1 text-lg">
                            Location
                          </span>
                          <span className="font-medium">{c.pickup}</span>
                        </div>
                        <div className="flex items-start space-x-1">
                          <span className="text-[#2160AD] mt-1 text-lg">
                            Hospital
                          </span>
                          <span className="font-medium">{c.dropoff}</span>
                        </div>

                        <div className="grid grid-cols-1 gap-1 mt-3 pt-3 border-t border-gray-100 text-base">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Service:</span>
                            <span className="font-semibold">
                              {c.serviceType}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Time:</span>
                            <span className="font-semibold text-[#2160AD]">
                              {c.startTime}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Req:</span>
                            <span className="font-semibold">
                              {c.requirements}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Drawer */}
      <Drawer direction="right" open={openDrawer} onOpenChange={setOpenDrawer}>
        <DrawerContent className="fixed right-0 top-0 h-full max-w-[500px]! bg-white shadow-lg z-50 overflow-hidden">
          <DrawerHeader className="flex items-center justify-between p-6 border-b border-gray-200">
            <DrawerTitle className="text-xl font-bold text-gray-900">
              Case Details
            </DrawerTitle>
            <DrawerClose asChild>
              <Button variant="ghost" size="icon">
                <X className="h-5 w-5 text-gray-400" />
              </Button>
            </DrawerClose>
          </DrawerHeader>
          {selectedCase && <CaseDrawer caseItem={selectedCase} />}
        </DrawerContent>
      </Drawer>
    </div>
  );
}
