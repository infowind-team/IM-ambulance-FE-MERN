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
import CaseDrawer from "../case-drawer/CaseDrawer";

  
/* ------------------------------------------------------------------ */
/* Types                                                              */
/* ------------------------------------------------------------------ */
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

interface ShiftGroup {
  time: string;
  count: number;
  cases: Case[];
}

/* ------------------------------------------------------------------ */
/* Mock Data                                                          */
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

const shiftGroups: Record<string, ShiftGroup> = {
  "Day Shift": {
    time: "08:00 - 20:00",
    count: 5,
    cases: mockCases.slice(0, 5),
  },
  "Night Shift": {
    time: "20:00 - 08:00",
    count: 2,
    cases: mockCases.slice(5),
  },
};

/* ------------------------------------------------------------------ */
/* Stats Cards – Array Driven                                         */
/* ------------------------------------------------------------------ */
const statsCards = [
  { value: 0, label: "Total Cases", bg: "bg-[#2160AD]", border: "border-[#2160AD]/20" },
  { value: 0, label: "Open Cases", bg: "bg-red-500", border: "border-red-500/20" },
  { value: 0, label: "1-Way Trip", bg: "bg-purple-500", border: "border-purple-500/20" },
  { value: 0, label: "2-Way Trip", bg: "bg-indigo-500", border: "border-indigo-500/20" },
  { value: 0, label: "Staff Available", bg: "bg-teal-500", border: "border-teal-500/20" },
  { value: 0, label: "Cases Fulfilled", bg: "bg-blue-500", border: "border-blue-500/20" },
  { value: 0, label: "Cancelled Cases", bg: "bg-pink-500", border: "border-pink-500/20" },
];

/* ------------------------------------------------------------------ */
/* Main Component                                                     */
/* ------------------------------------------------------------------ */
export default function ShiftHoursTab() {
  const [selectedDate] = useState(new Date(2025, 5, 1)); // June 1, 2025
  const [shiftFilter, setShiftFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedCase, setSelectedCase] = useState<Case | null>(null);

  // Compute stats dynamically
  const allCases = Object.values(shiftGroups).flatMap(g => g.cases);
  const stats = {
    total: allCases.length,
    open: allCases.filter(c => c.status === "Open").length,
    oneWay: allCases.filter(c => c.serviceType === "One-way").length,
    twoWay: allCases.filter(c => c.serviceType === "Two-way").length,
    threeWay: allCases.filter(c => c.serviceType === "Three-way").length,
    staffAvailable: 6,
    fulfilled: allCases.filter(c => c.status === "Completed").length,
    cancelled: 0,
  };

  // Update stats cards with real values
  const updatedStatsCards = statsCards.map((card, index) => {
    const values = Object.values(stats);
    return { ...card, value: values[index] ?? card.value };
  });

  const getStatusColor = (status: Case["status"]) => {
    switch (status) {
      case "Open": return "bg-blue-500";
      case "Pending for Dispatch": return "bg-amber-500";
      case "Completed": return "bg-emerald-500";
      default: return "bg-gray-400";
    }
  };

  const openCaseDrawer = (c: Case) => {
    setSelectedCase(c);
    setOpenDrawer(true);
  };

  return (
    <div className="space-y-6">
      {/* Stats Grid */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {updatedStatsCards.slice(0, 4).map((card, idx) => (
          <Card
            key={idx}
            className={`${card.bg} ${card.border} rounded-lg p-4 text-white border gap-1 hover:shadow-lg transition-all`}
          >
            <div className="text-2xl font-medium">{card.value}</div>
            <div className="opacity-90 text-base">{card.label}</div>
          </Card>
        ))}
      </div>
      

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {updatedStatsCards.slice(4).map((card, idx) => (
          <Card
            key={idx}
            className={`${card.bg} ${card.border} rounded-lg p-4 text-white border gap-1 hover:shadow-lg transition-all`}
          >
            <div className="text-2xl font-medium">{card.value}</div>
            <div className="opacity-90 text-base">{card.label}</div>
          </Card>
        ))}
      </div>
      
      {/* Warning Alert */}
      {stats.open > 0 && (
        <Alert className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-4">
          <TriangleAlert className="h-5 w-5 text-red-600" />
          <AlertDescription className="text-red-800 flex">
            <strong>Warning:</strong> There are {stats.open} open case
            {stats.open > 1 ? "s" : ""} that are not yet assigned.
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
            <SelectItem value="all">Shift Hours</SelectItem>
            <SelectItem value="day">Day Shift (08:00-20:00)</SelectItem>
            <SelectItem value="afternoon">Night Shift (20:00-08:00)</SelectItem>
          </SelectContent>
        </Select>

        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="All Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="Available">Available</SelectItem>
            <SelectItem value="Pending for Dispatch">Pending for Dispatch</SelectItem>
            <SelectItem value="Off Duty">Off Duty</SelectItem>
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

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {filteredGroupCases.map((c) => (
                  <Card
                    key={c.id}
                    onClick={() => openCaseDrawer(c)}
                    className="bg-white border-2 border-[#2160AD]/20 rounded-2xl p-5 shadow-md cursor-pointer hover:shadow-xl transition-all hover:border-[#2160AD]/50 hover-lift relative"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <span
                        className={`${getStatusColor(
                          c.status
                        )} text-white px-3 py-2 rounded-lg font-semibold tracking-wide`}
                      >
                        {c.status}
                      </span>
                    </div>

                    <div>
                      <div className="text-base font-bold text-[#2160AD] mb-3">
                        {c.caseNumber}
                      </div>
                      <div className="text-gray-700 space-y-2 text-base leading-relaxed">
                        <div className="font-semibold text-gray-900">
                          Patient: {c.patient}
                        </div>
                        <div className="flex items-start space-x-2">
                          <span className="text-[#2160AD] mt-1 text-lg">
                          📍
                          </span>
                          <span className="font-medium">Pick-up: {c.pickup}</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <span className="text-[#2160AD] mt-1 text-lg">
                          🏥
                          </span>
                          <span className="font-medium">1st Stop: {c.dropoff}</span>
                        </div>

                        <div className="grid grid-cols-1 gap-2 mt-3 pt-3 border-t border-gray-100 text-base">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Service Type:</span>
                            <span className="font-semibold text-gray-900">
                              {c.serviceType}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Start Time:</span>
                            <span className="font-semibold text-[#2160AD]">
                              {c.startTime}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Requirements:</span>
                            <span className="font-semibold text-gray-900">
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
