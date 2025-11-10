// app/service-management/page.tsx   (or wherever you keep it)
"use client";

import { useState } from "react";
import { Search, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import FunctionalHeader from "@/layout/FunctionalHeader";
import PublicRatesConfig from "./PublicRatesConfig";
import Link from "next/link";

interface Contract {
  id: string;
  facility: string;
  contractId: string;
  period: string;
  branches: string;
  tripServices: number;
  supportServices: number;
  addOnServices: number;
  additionalCharges: number;
  status: "Active" | "Archived";
}

/* ---------- Mock Data ---------- */

// Active contracts (unchanged)
const activeContracts: Contract[] = [
  {
    id: "1",
    facility: "Singapore General Hospital",
    contractId: "SGH-2025-001",
    period: "01/01/2025 - 31/12/2025",
    branches: "SGH - Outram, SGH - Block 6 Specialist Centre",
    tripServices: 3,
    supportServices: 4,
    addOnServices: 4,
    additionalCharges: 2,
    status: "Active",
  },
  {
    id: "2",
    facility: "Mount Elizabeth Hospital",
    contractId: "MEH-2025-002",
    period: "01/02/2025 - 31/01/2026",
    branches: "MEH Main Branch",
    tripServices: 2,
    supportServices: 2,
    addOnServices: 2,
    additionalCharges: 2,
    status: "Active",
  },
  {
    id: "3",
    facility: "Tan Tock Seng Hospital",
    contractId: "TTSH-2025-004",
    period: "01/03/2025 - 28/02/2026",
    branches: "TTSH Main Branch",
    tripServices: 3,
    supportServices: 2,
    addOnServices: 2,
    additionalCharges: 2,
    status: "Active",
  },
];

// Archived contracts (converted from the HTML you supplied)
const archivedContracts: Contract[] = [
  {
    id: "4",
    facility: "National University Hospital",
    contractId: "NUH-2023-003",
    period: "01/01/2023 - 31/12/2023",
    branches: "NUH Main Branch",
    tripServices: 0,
    supportServices: 0,
    addOnServices: 0,
    additionalCharges: 0,
    status: "Archived",
  },
  {
    id: "5",
    facility: "KK Women's and Children's Hospital",
    contractId: "KKH-2025-005",
    period: "15/01/2025 - 10/02/2025",
    branches: "KKH Main Branch",
    tripServices: 2,
    supportServices: 0,
    addOnServices: 0,
    additionalCharges: 0,
    status: "Archived",
  },
  {
    id: "6",
    facility: "Changi General Hospital",
    contractId: "CGH-2025-006",
    period: "01/01/2025 - 25/01/2025",
    branches: "CGH Main Branch",
    tripServices: 2,
    supportServices: 0,
    addOnServices: 0,
    additionalCharges: 0,
    status: "Archived",
  },
];

export default function ServiceManagementPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<
    "active" | "public-rates" | "archived"
  >("active");

  // Choose the right source array depending on the tab
  const sourceContracts =
    activeTab === "active" ? activeContracts : archivedContracts;

  const filteredContracts = sourceContracts.filter(
    (c) =>
      c.status.toLowerCase() === activeTab.toLowerCase() &&
      (c.facility.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.contractId.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const ContractCard = ({ contract }: { contract: Contract }) => (
    <Card className="border-[#2160AD]/20 bg-white shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer hover-lift overflow-hidden">
      <CardHeader className="border-b border-[#2160AD]/10 pb-4 header-bg-soft">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h4 className="text-base font-semibold mb-1">
              {contract.facility}
            </h4>
            <p className="text-sm text-gray-600">
              Contract ID: {contract.contractId}
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Period: {contract.period}
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Branches: {contract.branches}
            </p>
          </div>

          {/* Badge colour changes per status */}
          <Badge
            className={`
              ${
                contract.status === "Active"
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-red-500 hover:bg-red-600"
              } text-white border-transparent
            `}
          >
            {contract.status}
          </Badge>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-base text-gray-600">Trip Services:</span>
            <span className="text-base font-medium text-gray-900">
              {contract.tripServices}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-base text-gray-600">Support Services:</span>
            <span className="text-base font-medium text-gray-900">
              {contract.supportServices}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-base text-gray-600">Add-on Services:</span>
            <span className="text-base font-medium text-gray-900">
              {contract.addOnServices}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-base text-gray-600">Additional Charges:</span>
            <span className="text-base font-medium text-gray-900">
              {contract.additionalCharges}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <>
      <FunctionalHeader
        title="Service Management"
        breadcrumb={[{ label: "Management" }, { label: "Services" }]}
      />
      <div className="flex-1 overflow-hidden flex flex-col">
        <Tabs
          value={activeTab}
          onValueChange={(v) => setActiveTab(v as any)}
          className="flex-1 flex flex-col overflow-hidden"
        >
          {/* Tabs Header */}
          <div className="px-6 py-6 bg-white border-b">
            <TabsList className="grid w-full grid-cols-3 h-auto gap-3 bg-muted hr-tabs-list">
              <TabsTrigger value="active" className="hr-tab-trigger">
                Active Contracts
              </TabsTrigger>
              <TabsTrigger value="public-rates" className="hr-tab-trigger">
                Public Rates
              </TabsTrigger>
              <TabsTrigger value="archived" className="hr-tab-trigger">
                Archived Contracts
              </TabsTrigger>
            </TabsList>
          </div>

          {/* ---------- ACTIVE ---------- */}
          <TabsContent value="active" className="flex-1 overflow-auto m-0">
            <div className="p-6 space-y-6">
              <div className="flex justify-between items-center">
                <div className="relative w-[400px]">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search by facility name or contract ID..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 border-[rgba(0,0,0,0.1)] focus-visible:ring-[#2160AD]/50"
                  />
                </div>
                <Link
                  href="/services/add"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#2160AD] hover:bg-[#1d5497] text-white rounded-md text-sm font-medium transition-all hover-lift"
                >
                  <Plus className="w-4 h-4" />
                  Add New Contract
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredContracts.length > 0 ? (
                  filteredContracts.map((c) => (
                    <ContractCard key={c.id} contract={c} />
                  ))
                ) : (
                  <p className="col-span-full text-center text-gray-500 py-8">
                    No contracts found.
                  </p>
                )}
              </div>
            </div>
          </TabsContent>

          {/* ---------- PUBLIC RATES ---------- */}
          <TabsContent
            value="public-rates"
            className="flex-1 overflow-auto m-0"
          >
            <PublicRatesConfig />
          </TabsContent>

          {/* ---------- ARCHIVED ---------- */}
          <TabsContent value="archived" className="flex-1 overflow-auto m-0">
            <div className="p-6 space-y-6">
              <div className="flex justify-between items-center">
                <div className="relative w-[400px]">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search by facility name or contract ID..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 border-[rgba(0,0,0,0.1)] focus-visible:ring-[#2160AD]/50"
                  />
                </div>
                {/* No "Add" button for archived – you usually can't add new archived contracts */}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredContracts.length > 0 ? (
                  filteredContracts.map((c) => (
                    <ContractCard key={c.id} contract={c} />
                  ))
                ) : (
                  <p className="col-span-full text-center text-gray-500 py-8">
                    No archived contracts found.
                  </p>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
