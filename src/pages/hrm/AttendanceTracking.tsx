// app/payroll-management/AttendanceTracking.tsx
"use client";

import { useState } from "react";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Info,
  SquarePen,
  TriangleAlert,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { cn } from "@/components/ui/utils";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface AttendanceEntry {
  id: string;
  name: string;
  avatar: string; // placeholder image (same for demo)
  status: "Active" | "On Leave" | "Probation" | "Inactive" | "Suspended";
  clockIn: string | null;
  clockOut: string | null;
  late: string | null;
  overtime: string | null;
  lateFlag?: boolean; // for the red exclamation badge
}

const attendanceData: AttendanceEntry[] = [
  {
    id: "1",
    name: "Annette Black",
    avatar: "placeholder",
    status: "On Leave",
    clockIn: null,
    clockOut: null,
    late: null,
    overtime: null,
  },
  {
    id: "2",
    name: "Javen",
    avatar: "placeholder",
    status: "Active",
    clockIn: "08:45 AM",
    clockOut: "06:00 PM",
    late: null,
    overtime: null,
  },
  {
    id: "3",
    name: "Theresa Webb",
    avatar: "placeholder",
    status: "Probation",
    clockIn: null,
    clockOut: null,
    late: null,
    overtime: null,
  },
  {
    id: "4",
    name: "Kathryn Murphy",
    avatar: "placeholder",
    status: "Active",
    clockIn: "09:00 AM",
    clockOut: "05:58 PM",
    late: null,
    overtime: null,
  },
  {
    id: "5",
    name: "Courtney Henry",
    avatar: "placeholder",
    status: "Active",
    clockIn: "06:00 PM",
    clockOut: "04:00 AM",
    late: null,
    overtime: null,
  },
  {
    id: "6",
    name: "Javen",
    avatar: "placeholder",
    status: "Active",
    clockIn: "10:24 AM",
    clockOut: "08:20 PM",
    late: "1 hr 24 min",
    overtime: "2 hr 20 min",
    lateFlag: true,
  },
  {
    id: "7",
    name: "Javen",
    avatar: "placeholder",
    status: "Inactive",
    clockIn: "09:02 AM",
    clockOut: "06:02 PM",
    late: "2 min",
    overtime: "2 hr",
    lateFlag: true,
  },
  {
    id: "8",
    name: "Jane Cooper",
    avatar: "placeholder",
    status: "Active",
    clockIn: "08:53 AM",
    clockOut: "05:55 PM",
    late: null,
    overtime: null,
  },
  {
    id: "9",
    name: "Javen",
    avatar: "placeholder",
    status: "Suspended",
    clockIn: "06:12 PM",
    clockOut: "03:30 AM",
    late: "12 min",
    overtime: "30 min",
    lateFlag: true,
  },
];

const placeholderImg =
  "https://images.unsplash.com/photo-1740252117027-4275d3f84385?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwZXJzb24lMjBhdmF0YXIlMjBwbGFjZWhvbGRlcnxlbnwxfHx8fDE3NTk4MDU4MTF8MA&ixlib=rb-4.1.0&q=80&w=400";

export default function AttendanceTracking() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState(
    new Date().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
  );

  const filteredData = attendanceData.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Count late-comers for the warning banner
  const lateCount = filteredData.filter((e) => e.lateFlag).length;

  return (
    <div className="p-6 space-y-6">
      {/* Header – Search + Date + Nav */}
      <div className="flex items-center justify-between gap-4">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Search employees..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Date navigation */}
        <div className="flex items-center gap-3">
          <Button size="icon" variant="outline">
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="min-w-[140px] gap-2">
                <Calendar className="w-4 h-4" />
                {selectedDate}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="center">
              {/* You can plug in a real date picker here */}
              <div className="p-3 text-sm">
                (Date picker placeholder – click to change)
              </div>
            </PopoverContent>
          </Popover>

          <Button size="icon" variant="outline">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Warning banner – only when there are late-comers */}
      {lateCount > 0 && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-br-lg rounded-tr-lg">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-4 h-4 bg-red-400 rounded-sm flex items-center justify-center">
                <TriangleAlert className="w-3 h-3 text-white" />
              </div>
            </div>
            <div className="ml-3">
              <p className="text-red-700">
                <span className="font-bold">Warning:</span>{" "}
                <span className="font-normal">There are </span>
                <span className="font-bold">{lateCount}</span>{" "}
                <span className="font-normal">latecomers today</span>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Table */}
      <Card className="overflow-hidden">
        <Table>
          <TableHeader className="header-bg-soft">
            <TableRow>
              <TableHead className="font-semibold p-4">Employee</TableHead>
              <TableHead className="font-semibold p-4">Status</TableHead>
              <TableHead className="font-semibold p-4">Clock In</TableHead>
              <TableHead className="font-semibold p-4">Clock Out</TableHead>
              <TableHead className="font-semibold p-4">Late</TableHead>
              <TableHead className="font-semibold p-4">Overtime</TableHead>
              <TableHead className="font-semibold p-4">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((entry) => (
              <TableRow
                key={entry.id}
                className="hover:header-bg-soft transition"
              >
                {/* Employee */}
                <TableCell className="py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={placeholderImg}
                      alt={entry.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <span className="font-medium">{entry.name}</span>
                  </div>
                </TableCell>

                {/* Status badge */}
                <TableCell className="py-4">
                  <Badge
                    className={cn(
                      "border bg-transparent",
                      entry.status === "Active" &&
                        "border-[#23cf65] text-[#212143]",
                      entry.status === "On Leave" &&
                        "border-[#e71b1b] text-[#212143]",
                      entry.status === "Probation" &&
                        "border-[#eea51f] text-[#212143]",
                      entry.status === "Inactive" &&
                        "border-[silver] text-[#212143]",
                      entry.status === "Suspended" &&
                        "border-[silver] text-[#212143]"
                    )}
                  >
                    {entry.status}
                  </Badge>
                </TableCell>

                {/* Clock In */}
                <TableCell className="py-4">
                  <div className="flex items-center justify-between">
                    <span>{entry.clockIn ?? "-"}</span>
                    {entry.lateFlag && entry.clockIn && (
                      <div className="w-[21px] h-[21px] bg-[#E71B1B] rounded-full flex items-center justify-center ml-2">
                        <span className="text-white text-xs">!</span>
                      </div>
                    )}
                  </div>
                </TableCell>

                {/* Clock Out */}
                <TableCell className="py-4">
                  {entry.clockOut ?? "-"}
                </TableCell>

                {/* Late */}
                <TableCell className="py-4">{entry.late ?? "-"}</TableCell>

                {/* Overtime */}
                <TableCell className="py-4">
                  {entry.overtime ?? "-"}
                </TableCell>

                {/* Actions */}
                <TableCell className="py-4">
                      <div className="flex gap-2">
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-8 w-8"
                          title="View History"
                        >
                          <Info className="h-4 w-4 text-blue-600" />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-8 w-8"
                          title="Edit Attendance"
                        >
                          <SquarePen className="h-4 w-4 text-blue-600" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>

      {/* Pagination (static for demo) */}
      <div className="flex justify-end items-center gap-5 py-4">
        <Button size="icon" variant="outline">
          <ChevronLeft className="w-4 h-4 text-[#616161]" />
        </Button>
        <Button className="bg-[#2160ad] text-white w-[33px] h-[39px]">1</Button>
        <Button variant="outline" className="text-[#616161]">
          2
        </Button>
        <Button variant="outline" className="text-[#616161]">
          3
        </Button>
        <Button size="icon" variant="outline">
          <ChevronRight className="w-4 h-4 text-[#616161]" />
        </Button>
      </div>
    </div>
  );
}
