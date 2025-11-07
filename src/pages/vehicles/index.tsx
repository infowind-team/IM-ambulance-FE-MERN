"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  Plus,
  Eye,
  SquarePen,
  Trash2,
  Truck,
  ChevronDown,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FunctionalHeader from "@/layout/FunctionalHeader";
import Link from "next/link";

interface Vehicle {
  id: string;
  vehicleId: string;
  plateNumber: string;
  name: string;
  model: string;
  mileage: string;
  driver: string;
  type: "EAS" | "MTS";
  nextService: string;
  coeExpiry: string;
  status: "Active" | "Inactive";
}

const VEHICLES_DATA: Vehicle[] = [
  {
    id: "1",
    vehicleId: "AMB001",
    plateNumber: "SBA1234A",
    name: "Ambulance Alpha",
    model: "Mercedes Sprinter (2020)",
    mileage: "45,000 km",
    driver: "Marcus Chen",
    type: "EAS",
    nextService: "12/1/2024",
    coeExpiry: "6/30/2027",
    status: "Active",
  },
  {
    id: "2",
    vehicleId: "AMB002",
    plateNumber: "SBA2345B",
    name: "Ambulance Beta",
    model: "Toyota Hiace (2019)",
    mileage: "52,000 km",
    driver: "Jennifer Liu",
    type: "EAS",
    nextService: "11/15/2024",
    coeExpiry: "8/20/2026",
    status: "Active",
  },
  {
    id: "3",
    vehicleId: "AMB003",
    plateNumber: "SBA5678E",
    name: "Ambulance Gamma",
    model: "Ford Transit (2023)",
    mileage: "12,500 km",
    driver: "Sarah Tan",
    type: "MTS",
    nextService: "1/5/2025",
    coeExpiry: "3/25/2030",
    status: "Active",
  },
  {
    id: "4",
    vehicleId: "EMG001",
    plateNumber: "SEM4567D",
    name: "Emergency Response Unit",
    model: "Mercedes Vito (2022)",
    mileage: "15,000 km",
    driver: "David Kim",
    type: "EAS",
    nextService: "12/20/2024",
    coeExpiry: "1/10/2029",
    status: "Active",
  },
  {
    id: "5",
    vehicleId: "TRA001",
    plateNumber: "STR3456C",
    name: "Transport One",
    model: "Nissan NV200 (2021)",
    mileage: "28,000 km",
    driver: "Ahmed Hassan",
    type: "MTS",
    nextService: "1/1/2025",
    coeExpiry: "2/15/2028",
    status: "Inactive",
  },
  {
    id: "6",
    vehicleId: "TRA002",
    plateNumber: "STR6789F",
    name: "Transport Two",
    model: "Toyota Alphard (2018)",
    mileage: "68,000 km",
    driver: "Michael Wong",
    type: "MTS",
    nextService: "12/10/2024",
    coeExpiry: "11/30/2025",
    status: "Inactive",
  },
];

export default function VehiclesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All Status");

  // Filter logic
  const filteredVehicles = useMemo(() => {
    return VEHICLES_DATA.filter((item) => {
      const matchesSearch =
        searchQuery === "" ||
        item.vehicleId.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.plateNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.driver.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus =
        selectedStatus === "All Status" || item.status === selectedStatus;

      return matchesSearch && matchesStatus;
    });
  }, [searchQuery, selectedStatus]);

  // Stats calculation
  const stats = useMemo(() => {
    const active = filteredVehicles.filter((v) => v.status === "Active").length;
    const inactive = filteredVehicles.filter((v) => v.status === "Inactive").length;
    const eas = filteredVehicles.filter((v) => v.type === "EAS").length;
    const mts = filteredVehicles.filter((v) => v.type === "MTS").length;

    return { active, inactive, eas, mts, total: filteredVehicles.length };
  }, [filteredVehicles]);

  return (
    <>
      <FunctionalHeader title="Vehicle Management" />

      <div className="flex-1 w-full overflow-auto">
        <div className="space-y-6 p-4 lg:p-6 w-full">
          {/* Search + Filters + Add Vehicle */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search vehicles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2160AD]/50 focus:border-[#2160AD] text-sm"
                />
              </div>

              {/* Status Filter */}
              <div className="md:w-[200px]">
                <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                  <SelectTrigger className="w-[140px] text-base-optimized">
                    <SelectValue placeholder="All Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All Status">All Status</SelectItem>
                    <SelectItem value="Active">Active</SelectItem>
                    <SelectItem value="Inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Add Vehicle Button */}
            <Link
              href="/vehicles/add"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#2160AD] hover:bg-[#1d5497] text-white rounded-md text-sm font-medium transition-all hover-lift"
            >
              <Plus className="w-4 h-4" />
              Add Vehicle
            </Link>
          </div>

          {/* Table Card */}
          <div className="bg-white rounded-xl border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-base">
                <thead className="border-b header-bg-soft sticky top-0 z-10">
                  <tr>
                    <th className="text-left p-4 font-medium">Vehicle Number</th>
                    <th className="text-left p-4 font-medium">Vehicle Name</th>
                    <th className="text-left p-4 font-medium">Assigned Driver / MTO</th>
                    <th className="text-left p-4 font-medium">Type</th>
                    <th className="text-left p-4 font-medium">Next Servicing Due Date</th>
                    <th className="text-left p-4 font-medium">COE Expiry</th>
                    <th className="text-left p-4 font-medium">Status</th>
                    <th className="text-left p-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredVehicles.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b hover:header-bg-soft transition-colors"
                    >
                      {/* Vehicle Number */}
                      <td className="p-4">
                        <div className="font-mono font-medium text-[#2160AD]">
                          {item.vehicleId}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {item.plateNumber}
                        </div>
                      </td>

                      {/* Vehicle Name */}
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-[#2160AD] flex items-center justify-center text-white">
                            <Truck className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="font-medium">{item.name}</div>
                            <div className="text-sm text-gray-600">{item.model}</div>
                            <div className="text-xs text-gray-500">Mileage: {item.mileage}</div>
                          </div>
                        </div>
                      </td>

                      {/* Driver */}
                      <td className="p-4">
                        <div className="font-medium">{item.driver}</div>
                      </td>

                      {/* Type Badge */}
                      <td className="p-4">
                        <span
                          className={`inline-flex items-center justify-center px-2 py-0.5 rounded-md text-xs font-medium border ${
                            item.type === "EAS"
                              ? "bg-blue-50 text-blue-700 border-blue-200"
                              : "bg-green-50 text-green-700 border-green-200"
                          }`}
                        >
                          {item.type}
                        </span>
                      </td>

                      {/* Next Service */}
                      <td className="p-4">
                        <div className="text-gray-900">{item.nextService}</div>
                      </td>

                      {/* COE Expiry */}
                      <td className="p-4">
                        <div className="text-gray-900">{item.coeExpiry}</div>
                      </td>

                      {/* Status Badge */}
                      <td className="p-4">
                        <span
                          className={`inline-flex items-center justify-center px-2 py-0.5 rounded-md text-xs font-medium border ${
                            item.status === "Active"
                              ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                              : "bg-red-50 text-red-700 border-red-200"
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="p-4">
                        <div className="flex gap-2">
                          <button
                            className="p-2 rounded-md hover:bg-gray-100 hover-lift transition-colors"
                            title="View Details"
                          >
                            <Eye className="h-4 w-4 text-blue-600" />
                          </button>
                          <button
                            className="p-2 rounded-md hover:bg-gray-100 hover-lift transition-colors"
                            title="Edit Details"
                          >
                            <SquarePen className="h-4 w-4 text-gray-500" />
                          </button>
                          <button
                            className="p-2 rounded-md hover:bg-gray-100 hover-lift transition-colors text-red-600 hover:text-red-800"
                            title="Delete"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredVehicles.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-500">
                  <Truck className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <p className="text-base font-medium text-gray-700">
                    No vehicles found
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Try adjusting your search or filter criteria
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Footer Stats */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm text-gray-600 gap-4">
            <span>
              Showing {stats.total} of {VEHICLES_DATA.length} vehicles
            </span>
            <div className="flex flex-wrap items-center gap-4 text-base-optimized">
              <span className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#18c07a] rounded"></div>
                Active: {stats.active}
              </span>
              <span className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#c01818] rounded"></div>
                Inactive: {stats.inactive}
              </span>
              <span className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-100 rounded border border-blue-200"></div>
                EAS: {stats.eas}
              </span>
              <span className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-100 rounded border border-green-200"></div>
                MTS: {stats.mts}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}