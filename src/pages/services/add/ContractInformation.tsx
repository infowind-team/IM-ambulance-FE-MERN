// src/components/contracts/sections/ContractInformation.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Building2, ChevronDown } from "lucide-react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { ContractFormData } from "./contract";

type Props = {
  register: UseFormRegister<ContractFormData>;
  errors: FieldErrors<ContractFormData>;
};

export default function ContractInformation({ register, errors }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-[#2160AD]">
          <Building2 className="w-5 h-5" /> Contract Information
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Healthcare Facility Name <span className="text-red-500">*</span></Label>
            <div className="relative">
              <Input placeholder="Search or enter healthcare facility name" {...register("healthcareFacilityName")} />
              <Button variant="ghost" size="icon" className="absolute right-0 top-0 h-full">
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
            {errors.healthcareFacilityName && <p className="text-sm text-red-500">{errors.healthcareFacilityName.message}</p>}
          </div>
          <div className="space-y-2">
            <Label>Contract ID <span className="text-red-500">*</span></Label>
            <Input placeholder="Enter contract ID" {...register("contractId")} />
          </div>
          <div className="space-y-2">
            <Label>Contract Start Date <span className="text-red-500">*</span></Label>
            <Input type="date" {...register("contractStartDate")} />
          </div>
          <div className="space-y-2">
            <Label>Contract End Date <span className="text-red-500">*</span></Label>
            <Input type="date" {...register("contractEndDate")} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}