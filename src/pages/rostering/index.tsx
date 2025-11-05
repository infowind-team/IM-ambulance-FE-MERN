"use client";

import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  FileDown,
  TriangleAlert,
  Info,
  ChevronDown,
} from "lucide-react";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import FunctionalHeader from "@/layout/FunctionalHeader";

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
    time: "08:00-11:00",
    count: 4,
    cases: mockCases.slice(0, 5),
  },
  "Afternoon Shift": {
    time: "11:00-14:00",
    count: 2,
    cases: mockCases.slice(5),
  },
};

export default function RosteringPage() {
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 5, 1)); // June 1, 2025
  const [selectedTab, setSelectedTab] = useState("shift");
  const [shiftFilter, setShiftFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const getStatusColor = (status: Case["status"]) => {
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

  const filteredCases = mockCases.filter((c) => {
    if (statusFilter !== "all" && c.status !== statusFilter) return false;
    return true;
  });

  const stats = {
    total: 3,
    open: 1,
    oneWay: 2,
    twoWay: 1,
    staffAvailable: 0,
    fulfilled: 0,
    cancelled: 0,
  };

  return (
    <>
    <FunctionalHeader title="Rostering" />
    
    <div className="flex-1 w-full overflow-auto">
      {/* Toolbar */}
      <div className="border-b border-gray-200 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-[#2160AD] hover:bg-[#2160AD]/10"
                onClick={() =>
                  setSelectedDate(
                    new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate() - 1)
                  )
                }
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              <Button
                variant="outline"
                className="h-9 px-4 py-2 font-medium text-[#2160AD] min-w-[200px] justify-center hover:bg-[#2160AD]/10 gap-2"
              >
                <Calendar className="w-4 h-4" />
                {format(selectedDate, "EEEE, MMMM d, yyyy")}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-[#2160AD] hover:bg-[#2160AD]/10"
                onClick={() =>
                  setSelectedDate(
                    new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate() + 1)
                  )
                }
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <Button
            variant="outline"
            className="h-8 rounded-md px-3 gap-2 border-[#2160AD]/20 text-[#2160AD] hover:bg-[#2160AD]/10"
          >
            <FileDown className="w-4 h-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 px-6">
        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList className="bg-transparent flex space-x-8 p-0">
            <TabsTrigger
              value="shift"
              className="py-3 px-1"
            >
              Ground Crew (Shift)
            </TabsTrigger>
            <TabsTrigger
              value="office"
              className="py-3 px-1"
            >
              Ground Crew (Office Hours)
            </TabsTrigger>
            <TabsTrigger
              value="ops"
              className="py-3 px-1"
            >
              Operations
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 overflow-auto">
        <div className="space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="bg-[#2160AD] rounded-lg p-4 text-white border border-[#2160AD]/20 hover:shadow-lg transition-all gap-1">
              <div className="text-2xl font-medium">{stats.total}</div>
              <div className="opacity-90 text-base">Total Cases</div>
            </Card>
            <Card className="bg-red-500 rounded-lg p-4 text-white border border-red-500/20 hover:shadow-lg transition-all gap-1">
              <div className="text-2xl font-medium">{stats.open}</div>
              <div className="opacity-90 text-base">Open Cases</div>
            </Card>
            <Card className="bg-purple-500 rounded-lg p-4 text-white border border-purple-500/20 hover:shadow-lg transition-all gap-1">
              <div className="text-2xl font-medium">{stats.oneWay}</div>
              <div className="opacity-90 text-base">1-Way Trip</div>
            </Card>
            <Card className="bg-indigo-500 rounded-lg p-4 text-white border border-indigo-500/20 hover:shadow-lg transition-all gap-1">
              <div className="text-2xl font-medium">{stats.twoWay}</div>
              <div className="opacity-90 text-base">2-Way Trip</div>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-teal-500 rounded-lg p-4 text-white border border-teal-500/20 hover:shadow-lg transition-all gap-1">
              <div className="text-2xl font-medium">{stats.staffAvailable}</div>
              <div className="opacity-90 text-base">Staff Available</div>
            </Card>
            <Card className="bg-blue-500 rounded-lg p-4 text-white border border-blue-500/20 hover:shadow-lg transition-all gap-1">
              <div className="text-2xl font-medium">{stats.fulfilled}</div>
              <div className="opacity-90 text-base">Cases Fulfilled</div>
            </Card>
            <Card className="bg-pink-500 rounded-lg p-4 text-white border border-pink-500/20 hover:shadow-lg transition-all gap-1">
              <div className="text-2xl font-medium">{stats.cancelled}</div>
              <div className="opacity-90 text-base">Cancelled Cases</div>
            </Card>
          </div>

          {/* Warning Alert */}
          <Alert className="bg-red-50 border-l-4 border-red-400 rounded-r-lg">
            <TriangleAlert className="h-4 w-4 text-red-400" />
            <AlertDescription className="text-sm text-red-700">
              <span className="font-semibold">Warning:</span>{" "}
              <span className="font-normal">There are 1 open cases not assigned</span>
            </AlertDescription>
          </Alert>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 flex-1">
            <Select value={shiftFilter} onValueChange={setShiftFilter}>
              <SelectTrigger className="w-[180px] text-base-optimized">
                <SelectValue placeholder="Shift Hours" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Shifts</SelectItem>
                <SelectItem value="day">Day Shift</SelectItem>
                <SelectItem value="afternoon">Afternoon Shift</SelectItem>
              </SelectContent>
            </Select>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[140px] text-base-optimized">
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

          {/* Day View */}
          <div>
            <h3 className="text-[#2160AD] mb-4 font-medium">
              Day View - {format(selectedDate, "MMMM d, yyyy")}
            </h3>

            {Object.entries(shiftGroups).map(([shiftName, group]) => (
              <div key={shiftName} className="mb-8">
                <h4 className="text-[#2160AD] mb-2 font-medium text-base">{shiftName}</h4>
                <div className="text-gray-600 mb-4 text-base">
                  {group.time} • {group.count} cases
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                  {group.cases.map((c) => (
                    <Card
                      key={c.id}
                      className="bg-white border-2 border-[#2160AD]/20 rounded-2xl p-5 shadow-md cursor-pointer hover:shadow-xl transition-all hover:border-[#2160AD]/50 hover-lift relative gap-0"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <Badge className={`${getStatusColor(c.status)} text-white px-3 py-2 rounded-lg font-semibold text-base`}>
                          {c.status}
                        </Badge>
                      </div>

                      <div>
                        <div className="text-xl font-bold text-[#2160AD] mb-3 text-base-optimized">
                          {c.caseNumber}
                        </div>
                        <div className="text-gray-700 space-y-2.5 leading-relaxed text-base-optimized">
                          <div className="font-semibold text-gray-900">Patient: {c.patient}</div>
                          <div className="flex items-start space-x-2">
                            <span className="text-[#2160AD] mt-1 text-lg">📍</span>
                            <span className="font-medium">Pick-up: {c.pickup}</span>
                          </div>
                          <div className="flex items-start space-x-2">
                            <span className="text-[#2160AD] mt-1 text-lg">🏥</span>
                            <span className="font-medium">1st Stop: {c.dropoff}</span>
                          </div>

                          <div className="grid grid-cols-1 gap-2 mt-3 pt-3 border-t border-gray-100">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Service Type:</span>
                              <span className="font-semibold text-gray-900">{c.serviceType}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Start Time:</span>
                              <span className="font-semibold text-[#2160AD]">{c.startTime}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Requirements:</span>
                              <span className="font-semibold text-gray-900">{c.requirements}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    </>
  );
}