// app/vehicles/page.tsx
"use client";
import { useEffect } from "react";

import React, { useState, useMemo } from "react";
import {
  Search,
  Plus,
  Eye,
  SquarePen,
  Trash2,
  Truck,
  Clock,
  CheckCircle,
  XCircle,
} from "lucide-react";
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
import FunctionalHeader from "@/layout/FunctionalHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useSortableTable } from "@/hooks/useSortableTable";

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
  status: "Active" | "Inactive"| string;
}

const VEHICLES_DATA: Vehicle[] = [];

export default function VehiclesPage() {
  const router = useRouter();
  const [vehicles, setVehicles] = useState<Vehicle[]>(VEHICLES_DATA);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All Status");


  const filteredVehicles = useMemo(() => {
    if (!Array.isArray(vehicles)) return [];

    return vehicles.filter((item) => {
      const matchesSearch =
        !searchQuery ||
        item.vehicleId?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.plateNumber?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.driver?.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus =
        selectedStatus === "All Status" || item.status === selectedStatus;

      return matchesSearch && matchesStatus;
    });
  }, [vehicles, searchQuery, selectedStatus]);


  // Sort
  const { sortedData: sortedVehicles, requestSort, getSortIcon } =
    useSortableTable(filteredVehicles);

  // Stats
  const stats = useMemo(() => {
    const active = sortedVehicles.filter((v) => v.status === "Active").length;
    const inactive = sortedVehicles.filter((v) => v.status === "Inactive").length;
    const eas = sortedVehicles.filter((v) => v.type === "EAS").length;
    const mts = sortedVehicles.filter((v) => v.type === "MTS").length;
    return { active, inactive, eas, mts, total: sortedVehicles.length };
  }, [sortedVehicles]);

  // Delete
  const handleDelete = async(id: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this vehicle?");
    if (!confirmDelete) return; 

    try{
      const access_token = localStorage.getItem("accessToken");
      const response = await fetch(`/api/vehicles/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || "Failed to delete vehicle");
      }
      setVehicles((prev) => prev.filter((v) => v.id !== id));
      alert("Vehicle deleted successfully!");
    }catch(error:any){
       console.error("Error deleting vehicle:", error);
    alert("Failed to delete vehicle. Please try again.");
    }
    
  };

  const handleView = async(id:string) =>{
   router.push(`/vehicles/add?id=${id}`);
    
  }
  
  const editVehicle = async(id:string)=>{
    router.push(`/vehicles/add?id=${id}`)
  }


  const fetchVehicles = async () => {
    try {
      setLoading(true);
      const access_token =
        typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;

      const params = new URLSearchParams();
      if (searchQuery) params.append("search", searchQuery);
      if (selectedStatus !== "All Status") params.append("status", selectedStatus);
      params.append("sortBy", "1");
      params.append("sortOrder", "1");

      // const res = await fetch(
      //   `/api/vehicles/get-all?page=${page}&limit=30&${params.toString()}`,
      //   {
      //     method: "GET",
      //     headers: {
      //       "Content-Type": "application/json",
      //       Authorization: access_token ? `Bearer ${access_token}` : "",
      //     },
      //   }
      // );
      const res = await fetch(
        `/api/vehicles/get-all?page=${page}&limit=30&${params.toString()}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: access_token ? `Bearer ${access_token}` : "",
          },
        }
      );


      if (!res.ok) throw new Error("Failed to fetch vehicles");

      const data = await res.json();
      console.log("Vehicle API Response:", data);
      const fetchedVehicles = data?.data?.data?.list || [];

  
    const mappedVehicles: Vehicle[] = fetchedVehicles.map((item: any) => ({
      id: item._id,
      vehicleId: item._id, 
      plateNumber: item.vehicleNumber,
      name: `${item.make || ""} ${item.model || ""}`.trim(),
      model: item.model,
      mileage: "-", 
      driver: item.driverId || "-", 
      type: item.type === "Ambulance" ? "EAS" : "MTS", 
      nextService: "-", 
      coeExpiry: "-", 
      status: item.status,
    }));

    
    setVehicles(mappedVehicles);
   
    } catch (error) {
      console.error("Error fetching vehicles:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVehicles();
  }, [page, limit, searchQuery, selectedStatus]);

  return (
    <>
      <FunctionalHeader
        title="Vehicle Management"
        breadcrumb={[
          { label: "Operations" },
          { label: "Vehicles" },
        ]}
      />

      <div className="flex-1 w-full overflow-auto">
        <div className="space-y-6 p-4 lg:p-6 w-full">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="flex items-center justify-between p-4 pb-6">
                <div>
                  <p className="text-sm text-gray-600">Total Vehicles</p>
                  <p className="text-2xl font-semibold text-[#2160AD]">{stats.total}</p>
                </div>
                <Truck className="w-8 h-8 text-[#2160AD]/60" />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center justify-between p-4 pb-6">
                <div>
                  <p className="text-sm text-gray-600">Active</p>
                  <p className="text-2xl font-semibold text-green-600">{stats.active}</p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-600/60" />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center justify-between p-4 pb-6">
                <div>
                  <p className="text-sm text-gray-600">Inactive</p>
                  <p className="text-2xl font-semibold text-red-600">{stats.inactive}</p>
                </div>
                <XCircle className="w-8 h-8 text-red-600/60" />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center justify-between p-4 pb-6">
                <div>
                  <p className="text-sm text-gray-600">Due for Service</p>
                  <p className="text-2xl font-semibold text-orange-600">0</p>
                </div>
                <Clock className="w-8 h-8 text-orange-600/60" />
              </CardContent>
            </Card>
          </div>

          {/* Search + Filters + Add */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search vehicles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="md:w-[200px]">
                <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                  <SelectTrigger className="w-full text-base-optimized">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All Status">All Status</SelectItem>
                    <SelectItem value="Active">Active</SelectItem>
                    <SelectItem value="Inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button onClick={() => router.push("/vehicles/add")}>
              <Plus className="w-4 h-4" />
              Add Vehicle
            </Button>
          </div>

          {/* Table */}
          <Card className="overflow-hidden">
            <Table>
              <TableHeader className="header-bg-soft">
                <TableRow >
                  <TableHead className="p-4">
                    <button
                      className="flex items-center font-semibold text-gray-700 hover:text-[#2160AD]"
                      onClick={() => requestSort("vehicleId")}
                    >
                      Vehicle Number
                      {getSortIcon("vehicleId")}
                    </button>
                  </TableHead>
                  <TableHead className="p-4">
                    <button
                      className="flex items-center font-semibold text-gray-700 hover:text-[#2160AD]"
                      onClick={() => requestSort("name")}
                    >
                      Vehicle Name
                      {getSortIcon("name")}
                    </button>
                  </TableHead>
                  <TableHead className="p-4">
                    <button
                      className="flex items-center font-semibold text-gray-700 hover:text-[#2160AD]"
                      onClick={() => requestSort("driver")}
                    >
                      Assigned Driver / MTO
                      {getSortIcon("driver")}
                    </button>
                  </TableHead>
                  <TableHead className="p-4">
                    <button
                      className="flex items-center font-semibold text-gray-700 hover:text-[#2160AD]"
                      onClick={() => requestSort("type")}
                    >
                      Type
                      {getSortIcon("type")}
                    </button>
                  </TableHead>
                  <TableHead className="p-4">
                    <button
                      className="flex items-center font-semibold text-gray-700 hover:text-[#2160AD]"
                      onClick={() => requestSort("nextService")}
                    >
                      Next Servicing Due Date
                      {getSortIcon("nextService")}
                    </button>
                  </TableHead>
                  <TableHead className="p-4">
                    <button
                      className="flex items-center font-semibold text-gray-700 hover:text-[#2160AD]"
                      onClick={() => requestSort("coeExpiry")}
                    >
                      COE Expiry
                      {getSortIcon("coeExpiry")}
                    </button>
                  </TableHead>
                  <TableHead className="p-4">
                    <button
                      className="flex items-center font-semibold text-gray-700 hover:text-[#2160AD]"
                      onClick={() => requestSort("status")}
                    >
                      Status
                      {getSortIcon("status")}
                    </button>
                  </TableHead>
                  <TableHead className="p-4">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedVehicles.map((item) => (
                  <TableRow key={item.id || item.vehicleId || item.plateNumber} className="hover:header-bg-soft transition">
                    <TableCell className="p-4">
                      <div className="font-mono font-medium text-[#2160AD]">{item.vehicleId}</div>
                      <div className="text-xs text-gray-500 mt-1">{item.plateNumber}</div>
                    </TableCell>
                    <TableCell className="p-4">
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
                    </TableCell>
                    <TableCell className="p-4">
                      <div className="font-medium">{item.driver}</div>
                    </TableCell>
                    <TableCell className="p-4">
                      <span
                        className={`inline-flex items-center justify-center px-2 py-0.5 rounded-md text-xs font-medium border ${
                          item.type === "EAS"
                            ? "bg-blue-50 text-blue-700 border-blue-200"
                            : "bg-green-50 text-green-700 border-green-200"
                        }`}
                      >
                        {item.type}
                      </span>
                    </TableCell>
                    <TableCell className="p-4">
                      <div className="text-gray-900">{item.nextService}</div>
                    </TableCell>
                    <TableCell className="p-4">
                      <div className="text-gray-900">{item.coeExpiry}</div>
                    </TableCell>
                    <TableCell className="p-4">
                      <span
                        className={`inline-flex items-center justify-center px-2 py-0.5 rounded-md text-xs font-medium border ${
                          item.status === "Active"
                            ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                            : "bg-red-50 text-red-700 border-red-200"
                        }`}
                      >
                        {item.status}
                      </span>
                    </TableCell>
                    <TableCell className="p-4">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" title="View Details" onClick={() => handleView(item.id)}>
                          <Eye className="h-4 w-4 text-blue-600" />
                        </Button>
                        <Button variant="ghost" size="icon" title="Edit Details" onClick={() => editVehicle(item.id)}>
                          <SquarePen className="h-4 w-4 text-gray-500" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-red-600 hover:text-red-800"
                          title="Delete Vehicle"
                          onClick={() => handleDelete(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            {sortedVehicles.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-500">
                  <Truck className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <p className="text-base font-medium text-gray-700">No vehicles found</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Try adjusting your search or filter criteria
                  </p>
                </div>
              </div>
            )}
          </Card>

          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>Showing {sortedVehicles.length} of {vehicles.length} vehicles</span>
          </div>
        </div>
      </div>
    </>
  );
}