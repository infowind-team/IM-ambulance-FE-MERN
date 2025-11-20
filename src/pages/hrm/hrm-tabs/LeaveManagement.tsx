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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import LeaveSchemesTab from "../leave-management-tabs/LeaveSchemesTab";
import EntitlementTab from "../leave-management-tabs/EntitlementTab";
import ApplicationsTab from "../leave-management-tabs/ApplicationsTab";
import MassAdjustmentTab from "../leave-management-tabs/MassAdjustmentTab";

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

          <TabsContent value="applications" className="flex-1 overflow-auto p-6">
            <ApplicationsTab />
          </TabsContent>

          <TabsContent value="mass-adjustments" className="flex-1 overflow-auto p-6">
            <MassAdjustmentTab />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
