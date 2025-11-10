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
            <div className="space-y-6">
              {/* Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h3 className="text-base font-medium text-[#2160AD] text-base">
                    MOM-Compliant Leave Schemes
                  </h3>
                  <p className="text-base text-gray-600 mt-1">
                    Configure Singapore MOM-compliant leave entitlements with
                    custom company benefits and staff group configurations
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                  <Button className="bg-[#2160AD] hover:bg-[#2160AD]/90">
                    <Plus className="w-4 h-4 mr-2" />
                    New Scheme
                  </Button>
                </div>
              </div>

              {/* Search + Configure */}
              <div className="flex gap-4 justify-between">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search schemes..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button variant="outline">
                  <Settings className="w-4 h-4 mr-2" />
                  Configure Prorate
                </Button>
              </div>

              {/* Table */}
              <Card className="overflow-hidden">
                <Table>
                  <TableHeader className="header-bg-soft">
                    <TableRow className="border-b">
                      <TableHead className="p-4 font-semibold">
                        Scheme Details
                      </TableHead>
                      <TableHead className="p-4 font-semibold">
                        Leave Types
                      </TableHead>
                      <TableHead className="p-4 font-semibold">
                        Service Years
                      </TableHead>
                      <TableHead className="p-4 font-semibold">Eligible</TableHead>
                      <TableHead className="p-4 font-semibold">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredSchemes.map((scheme) => (
                      <TableRow
                        key={scheme.id}
                        className="border-b hover:header-bg-soft"
                      >
                        <TableCell className="p-4">
                          <div>
                            <div className="font-medium text-[#2160AD] text-base">
                              {scheme.name}
                            </div>
                            <div className="text-base text-gray-500 mt-1">
                              {scheme.description}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="p-4">
                          <div className="flex flex-wrap gap-1.5">
                            {scheme.leaveTypes.map((type) => (
                              <Badge
                                key={type}
                                variant="outline"
                                className="text-base border-[#2160AD]/30"
                              >
                                {type}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell className="p-4">
                          <Badge variant="secondary" className="text-xs">
                            {scheme.serviceYears}
                          </Badge>
                        </TableCell>
                        <TableCell className="p-4">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">
                              {scheme.eligibleCount}
                            </span>
                            <span className="text-base text-gray-500">
                              employees
                            </span>
                          </div>
                        </TableCell>
                        <TableCell className="p-4">
                          <div className="flex items-center gap-2">
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-8 w-8 p-0 hover:bg-[#2160AD]/10"
                              title="View scheme details"
                            >
                              <InfoIcon />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-8 w-8 p-0"
                              title="Edit scheme"
                            >
                              <PenLine className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
                              title="Delete scheme"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>

              {/* Optional: Empty State */}
              {filteredSchemes.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                  No leave schemes found.
                </div>
              )}
            </div>
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
