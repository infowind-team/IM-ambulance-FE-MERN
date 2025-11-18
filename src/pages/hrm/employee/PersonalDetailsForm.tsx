// components/employee/PersonalDetailsForm.tsx
"use client";

import { useFieldArray, UseFormReturn } from "react-hook-form";
import { Plus, X } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

type FormData = {
  name: string;
  contact: string;
  email: string;
  dob?: string;
  maritalStatus?: string;
  maritalStatusDate?: string;
  postalCode?: string;
  block?: string;
  street?: string;
  family: Array<{
    name: string;
    relationship: string;
    contact?: string;
    isEmergency: boolean;
    dob?: string;
    age?: number;
  }>;
};

interface PersonalDetailsFormProps {
  form: UseFormReturn<FormData>;
}

export default function PersonalDetailsForm({ form }: PersonalDetailsFormProps) {
  const {
    register,
    control,
    setValue,
    watch,
    formState: { errors },
  } = form;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "family",
  });

  return (
    <div className="space-y-6">
      {/* Personal Details Card */}
      <Card className="overflow-hidden">
        <CardHeader className="header-bg-soft pb-6">
          <CardTitle>Personal Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>
                Staff Name <span className="text-red-500">*</span>
              </Label>
              <Input placeholder="Enter full name" {...register("name")} />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label>
                Contact <span className="text-red-500">*</span>
              </Label>
              <Input placeholder="+65 9000 0000" {...register("contact")} />
              {errors.contact && (
                <p className="text-sm text-red-500">{errors.contact.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>
                Email <span className="text-red-500">*</span>
              </Label>
              <Input type="email" placeholder="email@example.com" {...register("email")} />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label>Date of Birth</Label>
              <Input type="date" {...register("dob")} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Marital Status</Label>
              <Select
                value={watch("maritalStatus") || ""}
                onValueChange={(value) => setValue("maritalStatus", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="single">Single</SelectItem>
                  <SelectItem value="married">Married</SelectItem>
                  <SelectItem value="divorced">Divorced</SelectItem>
                  <SelectItem value="widowed">Widowed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Marital Status Date</Label>
              <Input type="date" {...register("maritalStatusDate")} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Address Card */}
      <Card className="overflow-hidden">
        <CardHeader className="header-bg-soft pb-6">
          <CardTitle>Address Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>Postal Code</Label>
              <Input placeholder="123456" {...register("postalCode")} />
            </div>
            <div className="space-y-2">
              <Label>Block/House No</Label>
              <Input placeholder="Block 123" {...register("block")} />
            </div>
            <div className="space-y-2">
              <Label>Street Name</Label>
              <Input placeholder="Main Street" {...register("street")} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Family Members Card */}
      <Card className="overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between header-bg-soft pb-6">
          <CardTitle>Family Members</CardTitle>
          <Button
            type="button"
            size="sm"
            className="bg-[#2160AD] hover:bg-[#1d5497]"
            onClick={() =>
              append({
                name: "",
                relationship: "Other",
                contact: "",
                isEmergency: false,
                dob: "",
                age: undefined,
              })
            }
          >
            <Plus className="w-4 h-4 mr-1" /> Add
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {fields.map((field, index) => (
            <div
              key={field.id}
              className="border rounded-lg p-4 space-y-4 bg-gray-50"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Name *</Label>
                  <Input
                    placeholder="Family member name"
                    {...register(`family.${index}.name`)}
                  />
                  {errors.family?.[index]?.name && (
                    <p className="text-sm text-red-500">
                      {errors.family[index]?.name?.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label>Relationship *</Label>
                  <Select
                    value={watch(`family.${index}.relationship`) || "Other"}
                    onValueChange={(v) => setValue(`family.${index}.relationship`, v)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Spouse">Spouse</SelectItem>
                      <SelectItem value="Child">Child</SelectItem>
                      <SelectItem value="Parent">Parent</SelectItem>
                      <SelectItem value="Sibling">Sibling</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Contact Number</Label>
                  <Input
                    placeholder="+65 9000 0000"
                    {...register(`family.${index}.contact`)}
                  />
                </div>
                <div className="flex items-center space-x-2 pt-6">
                  <Checkbox
                    id={`emergency-${index}`}
                    {...register(`family.${index}.isEmergency`)}
                  />
                  <Label htmlFor={`emergency-${index}`} className="text-sm cursor-pointer">
                    Set as emergency contact
                  </Label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Date of Birth</Label>
                  <Input type="date" {...register(`family.${index}.dob`)} />
                </div>
                <div className="space-y-2">
                  <Label>Age</Label>
                  <Input
                    type="number"
                    placeholder="Age"
                    {...register(`family.${index}.age`, { valueAsNumber: true })}
                  />
                </div>
              </div>

              {fields.length > 1 && (
                <div className="flex justify-end">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => remove(index)}
                    className="text-red-600 border-red-600 hover:bg-red-50"
                  >
                    <X className="h-4 w-4 mr-1" /> Remove
                  </Button>
                </div>
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}