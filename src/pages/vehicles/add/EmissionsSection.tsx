// components/vehicles/add/sections/EmissionsSection.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Settings } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { VehicleFormValues, EmissionProp } from "./types";

export default function EmissionsSection({isEditing}:EmissionProp) {
  const { register } = useFormContext<VehicleFormValues>();

  return (
    <Card className="overflow-hidden w-full">
      <CardHeader className="header-bg-soft pb-6">
        <CardTitle className="flex items-center gap-2">
          <Settings className="w-5 h-5" />
          Vehicle Emissions Details
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-2">
            <Label>CO2 Emission (g/km)</Label>
            <Input {...register("co2Emission")} disabled={!isEditing}/>
          </div>
          <div className="space-y-2">
            <Label>CO Emission (g/km)</Label>
            <Input {...register("coEmission")} disabled={!isEditing}/>
          </div>
          <div className="space-y-2">
            <Label>HC Emission (g/km)</Label>
            <Input {...register("hcEmission")} disabled={!isEditing}/>
          </div>
          <div className="space-y-2">
            <Label>NOx Emission (g/km)</Label>
            <Input {...register("noxEmission")} disabled={!isEditing}/>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="space-y-2">
            <Label>PM Emission (g/km)</Label>
            <Input {...register("pmEmission")} disabled={!isEditing}/>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}