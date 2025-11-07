// app/profile/ProfileTab.tsx
"use client";

import { useState } from "react";
import {
  User,
  Clock,
  Mail,
  Phone,
  MapPin,
  Key,
  Camera,
  SquarePen,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import FunctionalHeader from "@/layout/FunctionalHeader";

interface ProfileData {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  emergency: string;
  address: string;
  employeeId: string;
  status: string;
  department: string;
  role: string;
  joinDate: string;
  avatar?: string;
}

export default function MyProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<ProfileData>({
    firstName: "Annette",
    lastName: "Black",
    email: "annette.black@imambulance.com",
    mobile: "+65 9123 4567",
    emergency: "+65 9234 5678",
    address: "123 Orchard Road, Singapore 238874",
    employeeId: "ADBFC008",
    status: "active",
    department: "Operations",
    role: "EMT, Medic",
    joinDate: "15 March 2023",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
  });

  const [editData, setEditData] = useState<ProfileData>({ ...profile });

  const handleEdit = () => {
    setEditData({ ...profile });
    setIsEditing(true);
  };

  const handleSave = () => {
    setProfile({ ...editData });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData({ ...profile });
    setIsEditing(false);
  };

  const handleInputChange = (key: keyof ProfileData, value: string) => {
    setEditData((prev) => ({ ...prev, [key]: value }));
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditData((prev) => ({ ...prev, avatar: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <FunctionalHeader title="My Profile" />
      <div className="flex-1 overflow-auto flex flex-col p-6 space-y-6">
        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-base font-medium">
                Profile Status
              </CardTitle>
              <User className="h-5 w-5 text-[#2160AD]" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-[#2160AD]">Active</div>
              <p className="text-sm text-muted-foreground">
                Account is verified
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-base font-medium">
                Last Login
              </CardTitle>
              <Clock className="h-5 w-5 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">Today</div>
              <p className="text-sm text-muted-foreground">10:30 AM SGT</p>
            </CardContent>
          </Card>
        </div>

        {/* Profile Card */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Avatar className="h-20 w-20">
                    <AvatarImage
                      src={isEditing ? editData.avatar : profile.avatar}
                      alt="Profile"
                    />
                    <AvatarFallback className="text-2xl bg-[#2160AD]/10 text-[#2160AD]">
                      {profile.firstName[0]}
                      {profile.lastName[0]}
                    </AvatarFallback>
                  </Avatar>
                  {isEditing && (
                    <label className="absolute -bottom-2 -right-2 cursor-pointer">
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleAvatarChange}
                      />
                      <div className="bg-[#2160AD] hover:bg-[#1d5497] text-white rounded-full p-2 shadow-md">
                        <Camera className="h-4 w-4" />
                      </div>
                    </label>
                  )}
                </div>
                <div>
                  <h2 className="text-2xl font-medium text-[#2160AD]">
                    {isEditing ? (
                      <div className="flex gap-2">
                        <Input
                          value={editData.firstName}
                          onChange={(e) =>
                            handleInputChange("firstName", e.target.value)
                          }
                          className="h-9"
                        />
                        <Input
                          value={editData.lastName}
                          onChange={(e) =>
                            handleInputChange("lastName", e.target.value)
                          }
                          className="h-9"
                        />
                      </div>
                    ) : (
                      `${profile.firstName} ${profile.lastName}`
                    )}
                  </h2>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge className="bg-blue-50 text-blue-700 border-blue-200">
                      {isEditing ? (
                        <Input
                          value={editData.role}
                          onChange={(e) =>
                            handleInputChange("role", e.target.value)
                          }
                          className="h-7 text-xs"
                        />
                      ) : (
                        profile.role
                      )}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      Staff ID: {profile.employeeId}
                    </span>
                  </div>
                </div>
              </div>

              {/* Edit / Save / Cancel */}
              <div className="flex gap-2">
                {isEditing ? (
                  <>
                    <Button
                      onClick={handleSave}
                      className="bg-[#2160AD] hover:bg-[#1d5497]"
                    >
                      <SquarePen className="w-4 h-4 mr-2" />
                      Save
                    </Button>
                    <Button variant="outline" onClick={handleCancel}>
                      Cancel
                    </Button>
                  </>
                ) : (
                  <Button
                    onClick={handleEdit}
                    className="bg-[#2160AD] hover:bg-[#1d5497]"
                  >
                    <SquarePen className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Personal Information */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <User className="h-5 w-5 text-[#2160AD]" />
              Personal Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>First Name</Label>
                {isEditing ? (
                  <Input
                    value={editData.firstName}
                    onChange={(e) =>
                      handleInputChange("firstName", e.target.value)
                    }
                    className="mt-1"
                  />
                ) : (
                  <div className="p-3 header-bg-soft rounded-lg mt-1">
                    <p className="text-base">{profile.firstName}</p>
                  </div>
                )}
              </div>
              <div className="space-y-2">
                <Label>Last Name</Label>
                {isEditing ? (
                  <Input
                    value={editData.lastName}
                    onChange={(e) =>
                      handleInputChange("lastName", e.target.value)
                    }
                    className="mt-1"
                  />
                ) : (
                  <div className="p-3 header-bg-soft rounded-lg mt-1">
                    <p className="text-base">{profile.lastName}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> Email Address
              </Label>
              {isEditing ? (
                <Input
                  type="email"
                  value={editData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="mt-1"
                />
              ) : (
                <div className="p-3 header-bg-soft rounded-lg mt-1">
                  <p className="text-base">{profile.email}</p>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Phone className="h-4 w-4" /> Mobile Number
                </Label>
                {isEditing ? (
                  <Input
                    value={editData.mobile}
                    onChange={(e) =>
                      handleInputChange("mobile", e.target.value)
                    }
                    className="mt-1"
                  />
                ) : (
                  <div className="p-3 header-bg-soft rounded-lg mt-1">
                    <p className="text-base">{profile.mobile}</p>
                  </div>
                )}
              </div>
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-red-600" /> Emergency Contact
                </Label>
                {isEditing ? (
                  <Input
                    value={editData.emergency}
                    onChange={(e) =>
                      handleInputChange("emergency", e.target.value)
                    }
                    className="mt-1"
                  />
                ) : (
                  <div className="p-3 header-bg-soft rounded-lg mt-1">
                    <p className="text-base">{profile.emergency}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Address
              </Label>
              {isEditing ? (
                <Input
                  value={editData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  className="mt-1"
                />
              ) : (
                <div className="p-3 header-bg-soft rounded-lg mt-1">
                  <p className="text-base">{profile.address}</p>
                </div>
              )}
            </div>

            {/* Employment Info */}
            <div className="border-t border-gray-200 pt-6 mt-6">
              <h4 className="font-medium text-[#2160AD] mb-4">
                Employment Information
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-gray-600">Employee ID</Label>
                  <div className="p-3 header-bg-soft rounded-lg mt-1">
                    <p className="text-base font-mono">{profile.employeeId}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-gray-600">Employment Status</Label>
                  <div className="p-3 header-bg-soft rounded-lg mt-1">
                    <p className="text-base capitalize">{profile.status}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-gray-600">Department</Label>
                  <div className="p-3 header-bg-soft rounded-lg mt-1">
                    <p className="text-base">{profile.department}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-gray-600">Role</Label>
                  <div className="p-3 header-bg-soft rounded-lg mt-1">
                    <p className="text-base">{profile.role}</p>
                  </div>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <Label className="text-gray-600">Join Date</Label>
                  <div className="p-3 header-bg-soft rounded-lg mt-1">
                    <p className="text-base">{profile.joinDate}</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Password Card */}
        <Card className="header-bg-soft">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Key className="h-5 w-5 text-[#2160AD]" />
                <div>
                  <h4 className="font-medium">Password Security</h4>
                  <p className="text-sm text-muted-foreground">
                    Last changed 30 days ago
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                className="text-[#2160AD] border-[#2160AD] hover:bg-[#2160AD] hover:text-white"
              >
                Change Password
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
