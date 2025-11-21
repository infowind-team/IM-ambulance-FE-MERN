// components/vehicles/add/sections/ParfRebateSection.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FileText } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { VehicleFormValues, ParfRebateProp } from "./types";

export default function ParfRebateSection({isEditing}:ParfRebateProp) {
  const { register } = useFormContext<VehicleFormValues>();

  return (
    <Card className="overflow-hidden w-full">
      <CardHeader className="header-bg-soft pb-6">
        <CardTitle className="flex items-center gap-2">
          <FileText className="w-5 h-5" />
          PARF Rebate Details
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Label>PARF Eligibility (S$)</Label>
            <Input {...register("parfEligibility")} disabled={!isEditing}/>
          </div>
          <div className="space-y-2">
            <Label>PARF Eligibility Expiry Date</Label>
            <Input type="date" {...register("parfExpiryDate")}disabled={!isEditing}/>
          </div>
          <div className="space-y-2">
            <Label>Min PARF Benefit (S$)</Label>
            <Input {...register("minParfBenefit")} disabled={!isEditing}/>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}