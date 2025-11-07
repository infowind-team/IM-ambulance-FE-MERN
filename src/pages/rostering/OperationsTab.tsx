"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
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
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card } from "@/components/ui/card";
import { TriangleAlert, Save, X } from "lucide-react";
import { TabsContent } from "@/components/ui/tabs";

interface Shift {
  date: string;
  day: string;
  shift: string;
}

interface StaffMember {
  id: string;
  name: string;
  role: string;
  shifts: Shift[];
}

const shiftOptions = ["OFF", "D", "N", "AL"];

// Generate dates from 01/11 to 30/11 (November)
const generateDates = () => {
  const dates = [];
  const days = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
  for (let i = 1; i <= 30; i++) {
    const date = i.toString().padStart(2, "0") + "/11";
    const dayIndex = (i % 7) + 1; // Approximate day of week
    const day = days[(dayIndex + 4) % 7]; // Align with sample (01/11 = Sat)
    dates.push({ date, day });
  }
  return dates;
};

const initialStaff: StaffMember[] = [
  {
    id: "1",
    name: "Michael Chen",
    role: "OPERATIONS STAFF",
    shifts: generateDates().map(() => ({ date: "", day: "", shift: "OFF" })),
  },
  {
    id: "2",
    name: "Lisa Wang",
    role: "OPERATIONS STAFF",
    shifts: generateDates().map(() => ({ date: "", day: "", shift: "OFF" })),
  },
  {
    id: "3",
    name: "David Kumar",
    role: "OPERATIONS STAFF",
    shifts: generateDates().map(() => ({ date: "", day: "", shift: "OFF" })),
  },
  {
    id: "4",
    name: "Rachel Tan",
    role: "OPERATIONS STAFF",
    shifts: generateDates().map(() => ({ date: "", day: "", shift: "OFF" })),
  },
  {
    id: "5",
    name: "James Wilson",
    role: "OPERATIONS STAFF",
    shifts: generateDates().map(() => ({ date: "", day: "", shift: "OFF" })),
  },
];

const dates = generateDates();

export default function OperationsTab() {
  const [isEditing, setIsEditing] = useState(false);
  const [staff, setStaff] = useState<StaffMember[]>(initialStaff);
  const [originalStaff] = useState<StaffMember[]>(
    JSON.parse(JSON.stringify(initialStaff))
  );

  const handleAutoAssign = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would normally save to backend
    console.log("Saved shifts:", staff);
  };

  const handleCancel = () => {
    setStaff(JSON.parse(JSON.stringify(originalStaff)));
    setIsEditing(false);
  };

  const handleShiftChange = (
    staffId: string,
    dateIndex: number,
    newShift: string
  ) => {
    setStaff((prev) =>
      prev.map((s) =>
        s.id === staffId
          ? {
              ...s,
              shifts: s.shifts.map((shift, idx) =>
                idx === dateIndex ? { ...shift, shift: newShift } : shift
              ),
            }
          : s
      )
    );
  };

  const getShiftColor = (shift: string) => {
    switch (shift) {
      case "OFF":
        return "bg-gray-400 text-white";
      case "D":
        return "bg-amber-500 text-white";
      case "N":
        return "bg-indigo-700 text-white";
      case "AL":
        return "bg-gray-300 text-gray-700";
      default:
        return "bg-gray-200 text-gray-600";
    }
  };

  return (
    <div className="space-y-4">
      {/* Warning Alert */}
      <Alert className="bg-red-50 border-l-4 border-red-400 rounded-r-lg">
        <TriangleAlert className="h-4 w-4 text-red-400" />
        <AlertDescription className="text-sm text-red-700">
          <span className="font-semibold">Warning:</span>{" "}
          <span className="font-normal">
            There are 150 unassigned shifts this month
          </span>
        </AlertDescription>
      </Alert>

      {/* Action Buttons */}
      <div className="flex gap-3 justify-between items-center">
        <Button
          onClick={handleAutoAssign}
          className="h-8 rounded-md px-3 gap-2 border-[#2160AD]/20 text-[#2160AD] hover:bg-[#2160AD]/10"
          variant="outline"
          style={{ fontSize: "16px" }}
        >
          Auto-Assign
        </Button>
        {isEditing && (
          <div className="flex gap-2">
            <Button
              onClick={handleSave}
              className="h-8 rounded-md px-3 gap-2 bg-green-600 text-white hover:bg-green-700"
              style={{ fontSize: "16px" }}
            >
              <Save className="w-4 h-4" />
              Save
            </Button>
            <Button
              onClick={handleCancel}
              variant="outline"
              className="h-8 rounded-md px-3 gap-2 border-red-300 text-red-600 hover:bg-red-50"
              style={{ fontSize: "16px" }}
            >
              <X className="w-4 h-4" />
              Cancel
            </Button>
          </div>
        )}
      </div>

      {/* Scrollable Table */}
      <Card className="rounded-xl border shadow-sm p-6 overflow-x-auto">
        <Table className="w-full min-w-[1800px] border-collapse">
          <TableHeader className="header-bg-soft">
            <TableRow>
              <TableHead
                className="text-gray-700 font-semibold px-4 py-3 text-left sticky left-0 z-10"
                style={{ fontSize: "16px", minWidth: "120px" }}
              >
                Staff
              </TableHead>
              {dates.map((d, idx) => (
                <TableHead
                  key={idx}
                  className="text-gray-700 font-semibold px-4 py-3 text-center"
                  style={{ fontSize: "12px", minWidth: "60px" }}
                >
                  <div>{d.day}</div>
                  <div>{d.date}</div>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {staff.map((member) => (
              <TableRow
                key={member.id}
                className="hover:header-bg-soft transition"
              >
                <TableCell className="py-4 border-r border-gray-200 bg-white sticky left-0 z-10">
                  <div>
                    <div
                      className="font-medium text-[#2160AD]"
                      style={{ fontSize: "16px" }}
                    >
                      {member.name}
                    </div>
                    <div className="text-gray-500 text-xs">{member.role}</div>
                  </div>
                </TableCell>
                {member.shifts.map((shift, idx) => (
                  <TableCell
                    key={idx}
                    className="py-4 text-center border-r border-gray-100"
                  >
                    {isEditing ? (
                      <Select
                        value={shift.shift}
                        onValueChange={(val) =>
                          handleShiftChange(member.id, idx, val)
                        }
                      >
                        <SelectTrigger className="h-7 w-full text-xs">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {shiftOptions.map((opt) => (
                            <SelectItem key={opt} value={opt}>
                              {opt}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    ) : (
                      <span
                        className={`inline-block px-2 py-1 rounded text-xs font-medium ${getShiftColor(
                          shift.shift
                        )}`}
                        style={{ fontSize: "10px" }}
                      >
                        {shift.shift}
                      </span>
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
