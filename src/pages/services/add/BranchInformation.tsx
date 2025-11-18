// src/components/contracts/sections/BranchInformation.tsx
"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Plus, Trash2 } from "lucide-react";
import { Control, UseFormRegister, FieldErrors, useFieldArray } from "react-hook-form";
import { ContractFormData } from "./contract";

type Props = {
  control: Control<ContractFormData>;
  register: UseFormRegister<ContractFormData>;
};

export default function BranchInformation({ control, register }: Props) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "branches",
  });

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2 text-[#2160AD]">
          <MapPin className="w-5 h-5" />
          Branch Information
        </CardTitle>
        <Button
          type="button"
          variant='outline'
          onClick={() =>
            append({
              name: "",
              postalCode: "",
              address: "",
              contactPerson: "",
              phone: "",
              email: "",
            })
          }
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Branch
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        {fields.map((field, index) => (
          <div key={field.id} className="p-4 border rounded-lg space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-[#2160AD]">Branch {index + 1}</h4>
              {fields.length > 1 && (
                <Button variant="ghost" size="icon" onClick={() => remove(index)}>
                  <Trash2 className="w-4 h-4 text-red-500" />
                </Button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Branch Name <span className="text-red-500">*</span></Label>
                <Input placeholder="Enter branch name" {...register(`branches.${index}.name`)} />
              </div>
              <div className="space-y-2">
                <Label>Postal Code <span className="text-red-500">*</span></Label>
                <Input placeholder="Enter postal code" {...register(`branches.${index}.postalCode`)} />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Address <span className="text-red-500">*</span></Label>
              <Textarea
                placeholder="Enter complete address"
                className="min-h-20"
                {...register(`branches.${index}.address`)}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>Contact Person</Label>
                <Input placeholder="Contact person name" {...register(`branches.${index}.contactPerson`)} />
              </div>
              <div className="space-y-2">
                <Label>Phone Number</Label>
                <Input placeholder="+65 6225 5554" {...register(`branches.${index}.phone`)} />
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <Input type="email" placeholder="contact@healthcare.com" {...register(`branches.${index}.email`)} />
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}