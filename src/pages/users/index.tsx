// app/users/UserManagementTab.tsx
"use client";

import { useState , useEffect} from "react";
import {
  Users,
  Shield,
  UserCheck,
  Search,
  ChevronDown,
  Eye,
  SquarePen,
  Trash2,
  UserPlus,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import FunctionalHeader from "@/layout/FunctionalHeader";

interface User {
  id: string;
  name: string;
  email: string;
  staffId: string;
  role: "Admin" | "HR" | "Employee";
  avatar?: string;
}

const users: User[] = [
  {
    id: "1",
    name: "Javen Liu",
    email: "javen.liu@imambulance.com",
    staffId: "A0B1C028",
    role: "Admin",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
  },
  {
    id: "2",
    name: "Alice Johnson",
    email: "alice.johnson@imambulance.com",
    staffId: "A0B1C029",
    role: "HR",
  },
  {
    id: "3",
    name: "Bob Smith",
    email: "bob.smith@imambulance.com",
    staffId: "A0B1C030",
    role: "HR",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
  },
  {
    id: "4",
    name: "Carol Davis",
    email: "carol.davis@imambulance.com",
    staffId: "A0B1C031",
    role: "Employee",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
  },
  {
    id: "5",
    name: "David Wilson",
    email: "david.wilson@imambulance.com",
    staffId: "A0B1C032",
    role: "Employee",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
  },
];

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [permissionFilter, setPermissionFilter] = useState<string>("all");
  const [stats, setStats] = useState({ totalUsers: 0, activeUsers: 0, adminUsers: 0, hrUsers: 0, employeeUsers: 0 });
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(30);
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("all");


  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.staffId.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesPermission =
      permissionFilter === "all" || user.role === permissionFilter;

    return matchesSearch && matchesPermission;
  });

  // const stats = {
  //   total: users.length,
  //   admin: users.filter((u) => u.role === "Admin").length,
  //   hr: users.filter((u) => u.role === "HR").length,
  //   employee: users.filter((u) => u.role === "Employee").length,
  //   active: 4,
  // };

  const getRoleColor = (role: string) => {
    switch (role) {
      case "Admin":
        return "bg-red-100 text-red-800 border-red-200";
      case "HR":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Employee":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };
  const fetchUserStats = async() =>{
    try{
      const access_token =
        typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;
      
      const res = await fetch("api/users/stats",{
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: access_token ? `Bearer ${access_token}` : "",
        },
      })
      if (!res.ok) throw new Error("Failed to fetch current day stats");

      const data = await res.json();
      console.log(data);
      setStats({
        totalUsers: data?.data?.totalUsers || 0,
        activeUsers: data?.data?.activeUsers || 0,
        adminUsers: data?.data?.adminUsers || 0,
        hrUsers: data?.data?.hrUsers || 0 ,
        employeeUsers: data?.data?.employeeUsers || 0

      });

    }catch (error) {
      console.error(error);
    }

  }
  useEffect(() => {
      fetchUserStats();
    }, []);
  
  const fetchUsersList = async()=>{
    try{
      const access_token =
        typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;
      //const roleParam = role === "all" ? "all permission" : role;
      const res = await fetch( `/api/users/list/${page}/${limit}?search=${search}&role=${role}`, {
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
    }catch(error){
      console.error("Error fetching vehicles:", error);
    }
  }
   useEffect(() => {
    fetchUsersList();
  }, [page, limit, search, role]);


  return (
    <>
      <FunctionalHeader title="System" breadcrumb={[
          { label: "System" },
          { label: "Users" },
        ]} />
      <div className="flex-1 overflow-auto flex flex-col p-6 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-base font-medium">
                Total Users
              </CardTitle>
              <Users className="h-5 w-5 text-[#2160AD]" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-[#2160AD]">
                {stats.totalUsers}
              </div>
              <p className="text-sm text-muted-foreground">All system users</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-base font-medium">
                Admin Users
              </CardTitle>
              <Shield className="h-5 w-5 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-red-600">
                {stats.adminUsers}
              </div>
              <p className="text-sm text-muted-foreground">
                Full system access
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-base font-medium">HR Users</CardTitle>
              <UserCheck className="h-5 w-5 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">{stats.hrUsers}</div>
              <p className="text-sm text-muted-foreground">
                HR department access
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-base font-medium">Employees</CardTitle>
              <Users className="h-5 w-5 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">
                {stats.employeeUsers}
              </div>
              <p className="text-sm text-muted-foreground">
                Standard user access
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-base font-medium">
                Active Users
              </CardTitle>
              <UserCheck className="h-5 w-5 text-[#2160AD]" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-[#2160AD]">
                {stats.activeUsers}
              </div>
              <p className="text-sm text-muted-foreground">Currently active</p>
            </CardContent>
          </Card>
        </div>

        {/* Search + Filter + Add Button */}
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-4 flex-1">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search by name, staff ID, or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select
              value={role}
              onValueChange={setRole}
            >
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="All Permissions" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Permissions</SelectItem>
                <SelectItem value="Admin">Admin</SelectItem>
                <SelectItem value="HR">HR</SelectItem>
                <SelectItem value="Employee">Employee</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="bg-[#eea61f] hover:bg-[#d69419] text-white">
            <UserPlus className="w-5 h-5 mr-2" />
            Add User
          </Button>
        </div>

        {/* Users Table */}
        <Card className="overflow-hidden">
          <Table>
            <TableHeader className="header-bg-soft">
              <TableRow>
                <TableHead className="font-semibold p-4">User</TableHead>
                <TableHead className="font-semibold p-4">Staff ID</TableHead>
                <TableHead className="font-semibold p-4">Permission</TableHead>
                <TableHead className="font-semibold p-4 text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow
                  key={user.id}
                  className="hover:header-bg-soft transition"
                >
                  <TableCell className="py-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-11 w-11 border-2 border-[#2160AD]/20">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback className="bg-[#2160AD]/10 text-[#2160AD] font-semibold">
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold text-gray-900 text-base">
                          {user.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="py-4">
                    <span className="font-mono text-sm font-medium text-gray-700 bg-gray-100 px-3 py-1 rounded">
                      {user.staffId}
                    </span>
                  </TableCell>
                  <TableCell className="py-4">
                    <Badge className={getRoleColor(user.role)}>
                      {user.role}
                    </Badge>
                  </TableCell>
                  <TableCell className="py-4">
                    <div className="flex gap-1 justify-center">
                      <Button
                        size="icon"
                        variant="ghost"
                        title="View User"
                        className="hover:bg-blue-50 hover:text-[#2160AD]"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        title="Edit User"
                        className="hover:bg-blue-50 hover:text-[#2160AD]"
                      >
                        <SquarePen className="h-4 w-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        title="Delete User"
                        className="text-red-600 hover:bg-red-50 hover:text-red-700"
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

        <div className="text-sm text-muted-foreground">
          Showing {filteredUsers.length} of {users.length} users
        </div>
      </div>
    </>
  );
}
