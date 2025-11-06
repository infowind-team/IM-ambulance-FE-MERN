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
import { Alert, AlertDescription } from "@/components/ui/alert";
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

const shiftOptions = ["OFF", "D1", "D2", "D3", "D4", "D5", "N", "AL"];

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
    name: "John Smith",
    role: "CREW DRIVER",
    shifts: generateDates().map((d, i) => ({
      date: d.date,
      day: d.day,
      shift: i % 7 === 0 ? "OFF" : "D1", // Mock data
    })),
  },
  {
    id: "2",
    name: "Sarah Lee",
    role: "CREW DRIVER",
    shifts: generateDates().map(() => ({ date: "", day: "", shift: "OFF" })),
  },
  {
    id: "3",
    name: "Warren Lee",
    role: "CREW DRIVER",
    shifts: generateDates().map(() => ({ date: "", day: "", shift: "OFF" })),
  },
  {
    id: "4",
    name: "Tina Li",
    role: "CREW DRIVER",
    shifts: generateDates().map(() => ({ date: "", day: "", shift: "OFF" })),
  },
  {
    id: "5",
    name: "Alex Wong",
    role: "CREW DRIVER",
    shifts: generateDates().map(() => ({ date: "", day: "", shift: "OFF" })),
  },
];

const dates = generateDates();

export default function OfficeHoursTab() {
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
      case "D1":
        return "bg-blue-500 text-white";
      case "D2":
        return "bg-blue-600 text-white";
      case "D3":
        return "bg-blue-700 text-white";
      case "D4":
        return "bg-blue-800 text-white";
      case "D5":
        return "bg-blue-900 text-white";
      case "N":
        return "bg-gray-900 text-white";
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
              className="h-8 rounded-md px-3 gap-2 bg-[#2160AD] text-white hover:bg-[#1a4d8a]"
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
      <div className="w-full overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full min-w-[1800px] border-collapse">
          <thead>
            <tr>
              <th
                className="border-b-2 border-[#2160AD] bg-[#2160AD]/5 p-2 text-left font-medium text-[#2160AD] sticky left-0 z-10"
                style={{ fontSize: "16px", minWidth: "120px" }}
              >
                Staff
              </th>
              {dates.map((d, idx) => (
                <th
                  key={idx}
                  className="border-b-2 border-[#2160AD] bg-[#2160AD]/5 p-2 text-center font-medium text-[#2160AD]"
                  style={{ fontSize: "12px", minWidth: "60px" }}
                >
                  <div>{d.day}</div>
                  <div>{d.date}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {staff.map((member) => (
              <tr
                key={member.id}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="p-3 border-r border-gray-200 bg-white sticky left-0 z-10">
                  <div>
                    <div
                      className="font-medium text-[#2160AD]"
                      style={{ fontSize: "16px" }}
                    >
                      {member.name}
                    </div>
                    <div className="text-gray-500 text-xs">{member.role}</div>
                  </div>
                </td>
                {member.shifts.map((shift, idx) => (
                  <td
                    key={idx}
                    className="p-1 text-center border-r border-gray-100"
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
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
