// app/employees/page.tsx
"use client";

import { useState,useEffect } from "react";
import {
  Users,
  UserCheck,
  UserX,
  Search,
  ChevronDown,
  Eye,
  SquarePen,
  Trash2,
  Plus,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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

import AddEmployee from "./employee/AddEmployee";

interface Employee {
  id: string;
  name: string;
  staffId: string;
  email: string;
  department: string;
  positions: string[];
  status: "Active" | "Inactive";
}

const employees: Employee[] = [
  {
    id: "1",
    name: "Annette Black",
    staffId: "ADBFC008",
    email: "annette.black@imambulance.com",
    department: "Operations",
    positions: ["EMT", "Medic"],
    status: "Active",
  },
  {
    id: "2",
    name: "Jennifer Liu",
    staffId: "JLIU002",
    email: "jennifer.liu@imambulance.com",
    department: "Ground Crew (Shift)",
    positions: ["Paramedic", "Team Lead"],
    status: "Active",
  },
  {
    id: "3",
    name: "Marcus Chen",
    staffId: "OPS001",
    email: "marcus.chen@imambulance.com",
    department: "Operations",
    positions: ["Operations Manager", "Dispatcher"],
    status: "Active",
  },
  {
    id: "4",
    name: "Rebecca Taylor",
    staffId: "HR001",
    email: "rebecca.taylor@imambulance.com",
    department: "Ground Crew (Office Hours)",
    positions: ["HR Manager", "Recruitment Specialist"],
    status: "Active",
  },
];

export default function EmployeeProfile() {
  const [showAddEmployee, setShowAddEmployee] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("All Departments");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [stats, setStats] = useState({ totalEmployees: 0, activeEmployees: 0, inactiveEmployees: 0 });
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  
  const departments = Array.from(new Set(employees.map((e) => e.department)));

  // employee stats
  const fetchCurrentDayStats = async () => {
      try {
        const access_token =
          typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;
  
        const res = await fetch("/api/hrm/stats", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: access_token ? `Bearer ${access_token}` : "",
          },
        });
  
        if (!res.ok) throw new Error("Failed to fetch employee stats");
  
        const data = await res.json();
        console.log(data)
        setStats({
          totalEmployees: data?.data?.totalEmployees || 0,
          activeEmployees: data?.data?.activeEmployees || 0,
          inactiveEmployees: data?.data?.inactiveEmployees || 0,
        });
      } catch (error) {
        console.error(error);
      }
    };
  
  useEffect(() => {
    fetchCurrentDayStats();
  }, []);

  const fetchEmployeeList = async () => {
    try {
      const access_token =
        typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;

      const params = new URLSearchParams();
      params.append("search", searchQuery || "");
      params.append("status", statusFilter === "All Status" ? "" : statusFilter);
      params.append(
        "department",
        departmentFilter === "All Departments" ? "" : departmentFilter
      );

      const res = await fetch(
        `/api/hrm/employee-list/${page}/${pageSize}?${params.toString()}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: access_token ? `Bearer ${access_token}` : "",
          },
        }
      );

      if (!res.ok) throw new Error("Failed to fetch employees");

      const data = await res.json();
      console.log("EMPLOYEE LIST", data);
      const formatted = (data.data?.data?.list || []).map((emp: any) => ({
        id: emp._id,
        name: emp.fullName || emp.userName || "",
        staffId: emp.staffId || "",
        email: emp.email || "",
        department: emp.department || "Not Assigned",
        positions: emp.positions || [],
        status: emp.userStatus === "active" ? "Active" : "Inactive",
      }));

      setEmployees(formatted);
    } catch (error) {
      console.error("Employee Fetch Error:", error);
    }
  };

  useEffect(() => {
    fetchEmployeeList();
  }, [page, pageSize, searchQuery, statusFilter, departmentFilter]);


  // If Add Employee is open
  if (showAddEmployee) {
    return <AddEmployee onBack={() => setShowAddEmployee(false)} />;
  }

  // Main Employee List View
  return (
    <div className="space-y-6 p-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-medium">
              Total Employees
            </CardTitle>
            <Users className="h-5 w-5 text-[#2160AD]" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-[#2160AD]">
              {stats.totalEmployees}
            </div>
            <p className="text-sm text-muted-foreground">All staff members</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-medium">
              Active Employees
            </CardTitle>
            <UserCheck className="h-5 w-5 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">
              {stats.activeEmployees}
            </div>
            <p className="text-sm text-muted-foreground">Currently working</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-medium">
              Inactive Employees
            </CardTitle>
            <UserX className="h-5 w-5 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-600">
              {stats.inactiveEmployees}
            </div>
            <p className="text-sm text-muted-foreground">
              On leave or inactive
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Search + Filters + Add */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search employees..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All Departments">All Departments</SelectItem>
              {departments.map((dept) => (
                <SelectItem key={dept} value={dept}>
                  {dept}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[140px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All Status">All Status</SelectItem>
              <SelectItem value="Active">Active</SelectItem>
              <SelectItem value="Inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          className="bg-[#2160AD] hover:bg-[#1d5497]"
          onClick={() => setShowAddEmployee(true)}
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Employee
        </Button>
      </div>

      {/* Employee Table */}
      <Card className="overflow-hidden">
        <Table>
          <TableHeader className="header-bg-soft">
            <TableRow className="border-b">
              <TableHead className="font-semibold p-4">Employee</TableHead>
              <TableHead className="font-semibold p-4">Staff ID</TableHead>
              <TableHead className="font-semibold p-4">Email</TableHead>
              <TableHead className="font-semibold p-4">Department</TableHead>
              <TableHead className="font-semibold p-4">Position</TableHead>
              <TableHead className="font-semibold p-4">Status</TableHead>
              <TableHead className="font-semibold p-4">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {employees.map((emp) => (
              <TableRow key={emp.id} className="border-b hover:bg-muted/30">
                <TableCell className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#2160AD] flex items-center justify-center text-white font-medium text-sm">
                      {emp.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div className="font-medium">{emp.name}</div>
                  </div>
                </TableCell>
                <TableCell className="p-4 font-mono text-muted-foreground">
                  {emp.staffId}
                </TableCell>
                <TableCell className="p-4">{emp.email}</TableCell>
                <TableCell className="p-4">{emp.department}</TableCell>
                <TableCell className="p-4">
                  <div className="flex flex-wrap gap-1">
                    {emp.positions.map((pos) => (
                      <Badge
                        key={pos}
                        className="bg-[#2160AD]/10 text-[#2160AD] border-[#2160AD]/30"
                      >
                        {pos}
                      </Badge>
                    ))}
                  </div>
                </TableCell>
                <TableCell className="p-4">
                  <Badge
                    className={
                      emp.status === "Active"
                        ? "bg-green-50 text-green-700 border-green-200"
                        : "bg-red-50 text-red-700 border-red-200"
                    }
                  >
                    {emp.status}
                  </Badge>
                </TableCell>
                <TableCell className="p-4">
                  <div className="flex gap-2">
                    <Button size="icon" variant="ghost" className="h-8 w-8">
                      <Eye className="h-4 w-4 text-blue-600" />
                    </Button>
                    <Button size="icon" variant="ghost" className="h-8 w-8">
                      <SquarePen className="h-4 w-4 text-[#2160AD]" />
                    </Button>
                    <Button size="icon" variant="ghost" className="h-8 w-8">
                      <Trash2 className="h-4 w-4 text-red-600" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      {/* Pagination */}
      <div className="flex justify-between items-center text-sm text-muted-foreground">
        <span>
          Showing {employees.length} of {employees.length} employees
        </span>
      </div>
    </div>
  );
}
