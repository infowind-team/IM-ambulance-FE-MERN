// components/vehicles/add/sections/RegistrationDetailsSection.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FileText } from "lucide-react";
import { VehicleFormData } from ".";

type Props = {
  form: VehicleFormData;
  updateForm: (updates: Partial<VehicleFormData>) => void;
};

export default function RegistrationDetailsSection({ form, updateForm }: Props) {
  return (
    <Card className="overflow-hidden w-full">
      <CardHeader className="header-bg-soft pb-6">
        <CardTitle className="flex items-center gap-2">
          <FileText className="w-5 h-5" />
          Registration Details
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label>Previous Vehicle No.</Label>
            <Input
              value={form.previousVehicleNo}
              onChange={(e) => updateForm({ previousVehicleNo: e.target.value })}
              placeholder="-"
            />
          </div>
          <div className="space-y-2">
            <Label>Effective Date of Ownership</Label>
            <Input
              type="date"
              value={form.effectiveOwnershipDate}
              onChange={(e) => updateForm({ effectiveOwnershipDate: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label>Original Registration Date</Label>
            <Input
              type="date"
              value={form.originalRegistrationDate}
              onChange={(e) => updateForm({ originalRegistrationDate: e.target.value })}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>No. of Transfers</Label>
            <Input
              value={form.noOfTransfers}
              onChange={(e) => updateForm({ noOfTransfers: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label>IU Label No.</Label>
            <Input
              value={form.iuLabelNo}
              onChange={(e) => updateForm({ iuLabelNo: e.target.value })}
              placeholder="e.g., 40057623"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}