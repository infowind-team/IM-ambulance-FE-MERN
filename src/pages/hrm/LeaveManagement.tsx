// app/leave-management/page.tsx
"use client";

import { useState } from "react";
import {
  Search,
  Plus,
  Download,
  Settings,
  Award,
  FileText,
  Users,
  PenLine,
  Trash2,
} from "lucide-react";

import { Input } from "@/components/ui/input";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import FunctionalHeader from "@/layout/FunctionalHeader";
import EntitlementTab from "./leave-management/EntitlementTab";
import ApplicationsTab from "./leave-management/ApplicationsTab";
import MassAdjustmentTab from "./leave-management/MassAdjustmentTab";
import LeaveSchemesTab from "./leave-management/LeaveSchemesTab";

// Icons for action buttons
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

interface LeaveScheme {
  id: string;
  name: string;
  description: string;
  leaveTypes: string[];
  serviceYears: string;
  eligibleCount: number;
}

const leaveSchemes: LeaveScheme[] = [
  {
    id: "1",
    name: "Junior Staff Leave Scheme",
    description: "Reduced entitlements for probationary and new hire employees",
    leaveTypes: ["Annual Leave"],
    serviceYears: "0-1 years",
    eligibleCount: 15,
  },
  {
    id: "2",
    name: "Mid-Level Staff Standard Scheme",
    description: "Standard MOM-compliant entitlements for regular employees",
    leaveTypes: ["Annual Leave", "Medical Leave"],
    serviceYears: "2-7 years",
    eligibleCount: 32,
  },
  {
    id: "3",
    name: "Senior Staff Enhanced Scheme",
    description: "Enhanced company benefits for long-service employees",
    leaveTypes: ["Annual Leave", "Study Leave"],
    serviceYears: "8+ years",
    eligibleCount: 8,
  },
  {
    id: "4",
    name: "Childcare Leave Scheme",
    description:
      "Childcare leave for parents with young children (below 7 years old). Requires SG citizen child and completed 3 months service.",
    leaveTypes: ["Childcare Leave"],
    serviceYears: "0+ years",
    eligibleCount: 18,
  },
];

export default function LeaveManagement() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSchemes = leaveSchemes.filter(
    (scheme) =>
      scheme.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scheme.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="flex-1 overflow-hidden flex flex-col">
        <Tabs
          defaultValue="schemes"
          className="flex-1 flex flex-col overflow-hidden"
        >
          {/* Main Tabs */}
          <div className="px-6 py-2 bg-white">
            <TabsList className="grid w-full grid-cols-4 h-auto gap-3 bg-muted hr-tabs-list">
              <TabsTrigger value="schemes" className="hr-tab-trigger">
                <Settings className="w-3 h-3 mr-2" />
                Leave Schemes
              </TabsTrigger>
              <TabsTrigger value="entitlement" className="hr-tab-trigger">
                <Award className="w-3 h-3 mr-2" />
                Entitlement
              </TabsTrigger>
              <TabsTrigger value="applications" className="hr-tab-trigger">
                <FileText className="w-3 h-3 mr-2" />
                Applications & Approvals
              </TabsTrigger>
              <TabsTrigger value="mass-adjustments" className="hr-tab-trigger">
                <Users className="w-3 h-3 mr-2" />
                Mass Adjustments
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Leave Schemes Tab */}
          <TabsContent value="schemes" className="flex-1 overflow-auto p-6">
            <LeaveSchemesTab
              schemes={leaveSchemes}
              onEdit={(scheme) => console.log('Edit', scheme)}
              onDelete={(id) => console.log('Delete', id)}
              onView={(scheme) => console.log('View', scheme)}
              onNewScheme={() => console.log('New Scheme')}
              onConfigureProrate={() => console.log('Configure Prorate')}
            />
          </TabsContent>

          <TabsContent value="entitlement" className="flex-1 overflow-auto p-6">
            <EntitlementTab />
          </TabsContent>

          <TabsContent
            value="applications"
            className="flex-1 overflow-auto p-6"
          >
            <ApplicationsTab />
          </TabsContent>

          <TabsContent
            value="mass-adjustments"
            className="flex-1 overflow-auto p-6"
          >
            <MassAdjustmentTab />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
