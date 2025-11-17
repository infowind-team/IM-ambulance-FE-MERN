// components/vehicles/add/sections/EmissionsSection.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Settings } from "lucide-react";
import { VehicleFormData } from ".";

type Props = {
  form: VehicleFormData;
  updateForm: (updates: Partial<VehicleFormData>) => void;
};

export default function EmissionsSection({ form, updateForm }: Props) {
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
            <Input
              value={form.co2Emission}
              onChange={(e) => updateForm({ co2Emission: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label>CO Emission (g/km)</Label>
            <Input
              value={form.coEmission}
              onChange={(e) => updateForm({ coEmission: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label>HC Emission (g/km)</Label>
            <Input
              value={form.hcEmission}
              onChange={(e) => updateForm({ hcEmission: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label>NOx Emission (g/km)</Label>
            <Input
              value={form.noxEmission}
              onChange={(e) => updateForm({ noxEmission: e.target.value })}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="space-y-2">
            <Label>PM Emission (g/km)</Label>
            <Input
              value={form.pmEmission}
              onChange={(e) => updateForm({ pmEmission: e.target.value })}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}