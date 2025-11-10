// app/cases/page.tsx
"use client";
import { useEffect } from "react";
import React, { useState, useMemo } from "react";
import {
  Clock,
  Briefcase,
  MapPin,
  Search,
  Plus,
  Phone,
  Eye,
  SquarePen,
  Trash2,
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

interface Case {
  id: string;
  caseId: string;
  patientName: string;
  patientInitials: string;
  phone: string;
  type: "One-way" | "Round-trip";
  vehicle: string;
  date: string;
  time: string;
  location: string;
  status: string;
}

interface BackendCase { _id: string; 
  intakeMode: string; 
  bookingDate: string; 
  requestorName: string; 
  requestorContact: string; 
  transportMode: string; 
  patientName: string; 
  nric: string; 
  age: number;
   weight: number; 
   gender: string; 
   patientContact: 
   string; 
   patientCondition: string; 
   status: string; 
   nokName: string; 
   nokContact: string; 
   nokRelation: string; 
   nokAccompany: number; 
   vehicleType: string; 
   vehicleNumber: string; 
   mtoName: string; 
   staffName: string; 
   escortName: string; 
   servicesRequired: string[]; 
   createdAt: string; 
   tripDetails: any[]; }

export default function CasesPage() {
  const router = useRouter();

  const [cases, setCases] = useState<Case[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [stats, setStats] = useState({ totalCases: 0, completedCases: 0, dispatchedCases: 0 });

  const fetchCases = async () => {
    try {
      setLoading(true);
      const access_token =
        typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;
      const res = await fetch(`/api/cases/get-cases?page=${page}&pageSize=${pageSize}&search=${encodeURIComponent(searchQuery)}&selectedStatus=${encodeURIComponent(selectedStatus)}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: access_token ? `Bearer ${access_token}` : "",
        },
      });
  

      if (!res.ok) {
        throw new Error("Failed to fetch cases");
      }

      const data = await res.json();
      console.log("API response:", data);

      const caseList = Array.isArray(data?.data?.list) ? data.data.list : [];
      const formattedCases = caseList.map((item: BackendCase) => ({
        id: item._id,
        caseId: item._id,
        patientName: item.patientName,
        patientInitials: item.patientName
          ? item.patientName
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()
          : "",
        phone: item.patientContact,
        vehicle: `${item.vehicleType} (${item.vehicleNumber})`,
        date: new Date(item.bookingDate).toLocaleDateString(),
        time: new Date(item.bookingDate).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        location: item.transportMode,
        status: item.status,
        type: item.transportMode || "N/A",
      }));

      setCases(formattedCases);

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCases();
  }, [page, pageSize, searchQuery, selectedStatus]);

  const fetchCurrentDayStats = async () => {
    try {
      const access_token =
        typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;

      const res = await fetch("/api/cases/current-day-stats", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: access_token ? `Bearer ${access_token}` : "",
        },
      });

      if (!res.ok) throw new Error("Failed to fetch current day stats");

      const data = await res.json();
      console.log(data)
      setStats({
        totalCases: data?.data?.totalCases || 0,
        completedCases: data?.data?.completedCases || 0,
        dispatchedCases: data?.data?.dispatchedCases || 0,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCurrentDayStats();
  }, []);

  
    const filteredCases = useMemo(() => {
    return cases.filter((item) => {
      const matchesSearch =
        searchQuery === "" ||
        item.caseId.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.phone.includes(searchQuery);

      const matchesStatus =
        selectedStatus === "All Status" || item.status === selectedStatus;

      return matchesSearch && matchesStatus;
    });
  }, [cases, searchQuery, selectedStatus]);

  const { sortedData: sortedCases, requestSort, getSortIcon } =
    useSortableTable(filteredCases, "date", "desc");

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this case?")) {
      setCases((prev) => prev.filter((c) => c.id !== id));
    }
  };

  return (
    <>
      <FunctionalHeader
        title="Case Management"
        breadcrumb={[
          { label: "Operations" },
          { label: "Cases" },
        ]}
      />

      <div className="flex-1 w-full overflow-auto">
        <div className="space-y-6 p-4 lg:p-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card>
              <CardContent className="flex items-center justify-between p-4 pb-6">
                <div>
                  <p className="text-sm text-gray-600">Today's Cases</p>
                  <p className="text-2xl font-semibold text-[#2160AD]">{stats.totalCases}</p>
                </div>
                <Clock className="w-8 h-8 text-[#2160AD]/60" />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center justify-between p-4 pb-6">
                <div>
                  <p className="text-sm text-gray-600">Completed</p>
                  <p className="text-2xl font-semibold text-green-600">{stats.completedCases}</p>
                </div>
                <Briefcase className="w-8 h-8 text-green-600/60" />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center justify-between p-4 pb-6">
                <div>
                  <p className="text-sm text-gray-600">Dispatched</p>
                  <p className="text-2xl font-semibold text-orange-600">{stats.dispatchedCases}</p>
                </div>
                <MapPin className="w-8 h-8 text-orange-600/60" />
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search cases..."
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
                    <SelectItem value="Pending for Dispatch">Pending for Dispatch</SelectItem>
                    <SelectItem value="Dispatched">Dispatched</SelectItem>
                    <SelectItem value="Completed">Completed</SelectItem>

                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button onClick={() => router.push("/cases/add")}>
              <Plus className="w-4 h-4" />
              New Case
            </Button>
          </div>

          <Card className="overflow-hidden">
            <Table>
              <TableHeader className="header-bg-soft">
                <TableRow>
                  <TableHead className="p-4">
                    <button
                      className="flex items-center font-semibold text-gray-700 hover:text-[#2160AD]"
                      onClick={() => requestSort("caseId")}
                    >
                      Case ID {getSortIcon("caseId")}
                    </button>
                  </TableHead>
                  <TableHead className="p-4">
                    <button
                      className="flex items-center font-semibold text-gray-700 hover:text-[#2160AD]"
                      onClick={() => requestSort("patientName")}
                    >
                      Patient Details {getSortIcon("patientName")}
                    </button>
                  </TableHead>
                  <TableHead className="p-4">
                    <button
                      className="flex items-center font-semibold text-gray-700 hover:text-[#2160AD]"
                      onClick={() => requestSort("vehicle")}
                    >
                      Vehicle {getSortIcon("vehicle")}
                    </button>
                  </TableHead>
                  <TableHead className="p-4">
                    <button
                      className="flex items-center font-semibold text-gray-700 hover:text-[#2160AD]"
                      onClick={() => requestSort("date")}
                    >
                      Booking Date | Time {getSortIcon("date")}
                    </button>
                  </TableHead>
                  <TableHead className="p-4">
                    <button
                      className="flex items-center font-semibold text-gray-700 hover:text-[#2160AD]"
                      onClick={() => requestSort("location")}
                    >
                      Pickup Location {getSortIcon("location")}
                    </button>
                  </TableHead>
                  <TableHead className="p-4">
                    <button
                      className="flex items-center font-semibold text-gray-700 hover:text-[#2160AD]"
                      onClick={() => requestSort("status")}
                    >
                      Status {getSortIcon("status")}
                    </button>
                  </TableHead>
                  <TableHead className="p-4">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedCases.map((item) => (
                  <TableRow key={item.id} className="hover:header-bg-soft transition">
                    <TableCell className="p-4">
                      <div className="font-mono font-medium text-[#2160AD]">{item.caseId}</div>
                    </TableCell>
                    <TableCell className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#2160AD] flex items-center justify-center text-white font-medium text-sm">
                          {item.patientInitials}
                        </div>
                        <div>
                          <div className="font-medium">{item.patientName}</div>
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <Phone className="w-3 h-3" />
                            {item.phone}
                          </div>
                          <div className="text-sm text-gray-600">{item.type}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="p-4">
                      <div className="font-medium">{item.vehicle}</div>
                    </TableCell>
                    <TableCell className="p-4">
                      <div className="font-medium">{item.date}</div>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Clock className="w-3 h-3" />
                        {item.time}
                      </div>
                    </TableCell>
                    <TableCell className="p-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{item.location}</span>
                      </div>
                    </TableCell>
                    <TableCell className="p-4">
                      <div
                        className={`inline-flex items-center justify-center px-3 py-0.5 rounded-full text-base font-medium ${item.status === "Pending for Dispatch"
                            ? "bg-[#EEA61F] text-white"
                            : item.status === "Dispatched"
                              ? "bg-[#E2CC3B] text-black"
                              : "bg-gray-200 text-gray-700"
                          }`}
                      >
                        {item.status}
                      </div>
                    </TableCell>
                    <TableCell className="p-4">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" title="View Case">
                          <Eye className="h-4 w-4 text-blue-600" />
                        </Button>
                        <Button variant="ghost" size="icon" title="Edit Case">
                          <SquarePen className="h-4 w-4 text-gray-500" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-red-600 hover:text-red-800"
                          title="Delete Case"
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

            {sortedCases.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-500">
                  <Briefcase className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <p className="text-base font-medium text-gray-700">No cases found</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Try adjusting your search or filter criteria
                  </p>
                </div>
              </div>
            )}
          </Card>

          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>Showing {sortedCases.length} of {cases.length} cases</span>
          </div>
        </div>
      </div>
    </>
  );
}