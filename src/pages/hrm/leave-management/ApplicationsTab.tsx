// components/leave/ApplicationsTab.tsx
"use client";

import { Plus, CircleCheckBig, CircleX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Custom Info Icon (from your design)
const InfoIcon = () => (
  <div className="w-4 h-4">
    <svg
      viewBox="0 0 60 60"
      fill="none"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 44.375C31.0355 44.375 31.875 43.5355 31.875 42.5V27.5C31.875 26.4645 31.0355 25.625 30 25.625C28.9645 25.625 28.125 26.4645 28.125 27.5V42.5C28.125 43.5355 28.9645 44.375 30 44.375Z"
        fill="currentColor"
      />
      <path
        d="M30 17.5C31.3807 17.5 32.5 18.6193 32.5 20C32.5 21.3807 31.3807 22.5 30 22.5C28.6193 22.5 27.5 21.3807 27.5 20C27.5 18.6193 28.6193 17.5 30 17.5Z"
        fill="currentColor"
      />
      <path
        clipRule="evenodd"
        fillRule="evenodd"
        d="M3.125 30C3.125 15.1574 15.1574 3.125 30 3.125C44.8427 3.125 56.875 15.1574 56.875 30C56.875 44.8427 44.8427 56.875 30 56.875C15.1574 56.875 3.125 44.8427 3.125 30ZM30 6.875C17.2284 6.875 6.875 17.2284 6.875 30C6.875 42.7715 17.2284 53.125 30 53.125C42.7715 53.125 53.125 42.7715 53.125 30C53.125 17.2284 42.7715 6.875 30 6.875Z"
        fill="currentColor"
      />
    </svg>
  </div>
);

interface LeaveApplication {
  id: string;
  employee: string;
  department: string;
  leaveType: string;
  endDate: string;
  days: number;
  recommendation: string;
  status: "pending" | "approved" | "rejected";
}

const applications: LeaveApplication[] = [
  {
    id: "1",
    employee: "John Smith",
    department: "Emergency Services",
    leaveType: "Annual Leave",
    endDate: "2024-11-15",
    days: 5,
    recommendation: "Approve",
    status: "pending",
  },
  {
    id: "2",
    employee: "Sarah Johnson",
    department: "Operations",
    leaveType: "Childcare Leave",
    endDate: "2024-11-20",
    days: 2,
    recommendation: "Approve",
    status: "approved",
  },
];

export default function ApplicationsTab() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-base font-medium text-[#2160AD]">
          Leave Applications & Approvals
        </h3>
        <Button className="bg-[#2160AD] hover:bg-[#2160AD]/90 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Apply for Leave
        </Button>
      </div>

      {/* Table */}
      <Card className="overflow-hidden">
        <Table>
          <TableHeader className="header-bg-soft">
            <TableRow className="border-b">
              <TableHead className="p-4 font-semibold">
                Employee
              </TableHead>
              <TableHead className="p-4 font-semibold">
                Leave Type
              </TableHead>
              <TableHead className="p-4 font-semibold">
                End Date
              </TableHead>
              <TableHead className="p-4 font-semibold">
                Days
              </TableHead>
              <TableHead className="p-4 font-semibold">
                Recommendation
              </TableHead>
              <TableHead className="p-4 font-semibold">
                Status
              </TableHead>
              <TableHead className="p-4 font-semibold">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {applications.map((app) => (
              <TableRow key={app.id} className="border-b hover:header-bg-soft">
                <TableCell className="p-4">
                  <div>
                    <div className="font-medium">{app.employee}</div>
                    <div className="text-gray-600 text-sm">
                      {app.department}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="p-4">{app.leaveType}</TableCell>
                <TableCell className="p-4">{app.endDate}</TableCell>
                <TableCell className="p-4">{app.days}</TableCell>
                <TableCell className="p-4">{app.recommendation}</TableCell>
                <TableCell className="p-4">
                  <Badge
                    variant={app.status === "pending" ? "secondary" : "default"}
                    className={
                      app.status === "approved"
                        ? "bg-primary text-white"
                        : app.status === "pending"
                        ? ""
                        : "bg-destructive text-white"
                    }
                  >
                    {app.status}
                  </Badge>
                </TableCell>
                <TableCell className="p-4">
                  <div className="flex items-center gap-2">
                    {/* View Details */}
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-8 w-8 p-0 text-[#2160AD] hover:bg-[#2160AD]/10"
                      title="View details"
                    >
                      <InfoIcon />
                    </Button>

                    {/* Approve (only show if pending) */}
                    {app.status === "pending" && (
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 w-8 p-0 text-green-600 hover:bg-green-50"
                        title="Approve"
                      >
                        <CircleCheckBig className="h-4 w-4" />
                      </Button>
                    )}

                    {/* Reject (only show if pending) */}
                    {app.status === "pending" && (
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 w-8 p-0 text-red-600 hover:bg-red-50"
                        title="Reject"
                      >
                        <CircleX className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      {/* Empty State */}
      {applications.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No leave applications.
        </div>
      )}
    </div>
  );
}
