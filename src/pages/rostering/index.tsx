// app/roster/page.tsx
"use client";

import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  FileDown,
  TriangleAlert,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import FunctionalHeader from "@/layout/FunctionalHeader";
import ShiftHoursTab from "./ShiftHoursTab";
import OfficeHoursTab from "./OfficeHoursTab";
import OperationsTab from "./OperationsTab";

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

export default function RosteringPage() {
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 5, 1)); // June 1, 2025
  const [selectedTab, setSelectedTab] = useState("shift");

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
                      new Date(
                        selectedDate.getFullYear(),
                        selectedDate.getMonth(),
                        selectedDate.getDate() - 1
                      )
                    )
                  }
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>

                <button
                  type="button"
                  className="flex items-center gap-2 h-9 px-4 py-2 rounded-md text-[#2160AD] min-w-[180px] hover:bg-[#2160AD]/10 text-sm font-medium transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  {format(selectedDate, "EEEE, MMMM d, yyyy")}
                </button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-[#2160AD] hover:bg-[#2160AD]/10"
                  onClick={() =>
                    setSelectedDate(
                      new Date(
                        selectedDate.getFullYear(),
                        selectedDate.getMonth(),
                        selectedDate.getDate() + 1
                      )
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
        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <div className="border-b border-gray-200 px-6">
            <TabsList className="bg-transparent flex space-x-8 p-0">
              <TabsTrigger value="shift" className="py-3 px-1">
                Ground Crew (Shift)
              </TabsTrigger>
              <TabsTrigger value="office" className="py-3 px-1">
                Ground Crew (Office Hours)
              </TabsTrigger>
              <TabsTrigger value="ops" className="py-3 px-1">
                Operations
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="shift" className="flex-1 p-6 overflow-auto">
            <ShiftHoursTab /> {/* ← Renders the new component */}
          </TabsContent>

          <TabsContent value="office" className="flex-1 p-6 overflow-auto">
            <OfficeHoursTab />
          </TabsContent>

          <TabsContent value="ops" className="flex-1 p-6 overflow-auto">
            <OperationsTab />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}