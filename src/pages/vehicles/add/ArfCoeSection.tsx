// components/vehicles/add/sections/ArfCoeSection.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TriangleAlert } from "lucide-react";
import { VehicleFormData } from ".";

type Props = {
  form: VehicleFormData;
  updateForm: (updates: Partial<VehicleFormData>) => void;
};

export default function ArfCoeSection({ form, updateForm }: Props) {
  return (
    <Card className="overflow-hidden w-full">
      <CardHeader className="header-bg-soft pb-6">
        <CardTitle className="flex items-center gap-2">
          <TriangleAlert className="w-5 h-5" />
          Additional Registration Fee (ARF) & COE Information
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-2">
            <Label>Open Market Value (S$)</Label>
            <Input
              value={form.omv}
              onChange={(e) => updateForm({ omv: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label>Additional Registration Fee Rate (%)</Label>
            <Input
              value={form.arfRate}
              onChange={(e) => updateForm({ arfRate: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label>Actual ARF Paid (S$)</Label>
            <Input
              value={form.actualArfPaid}
              onChange={(e) => updateForm({ actualArfPaid: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label>COE Expiry Date</Label>
            <Input
              type="date"
              value={form.coeExpiryDate}
              onChange={(e) => updateForm({ coeExpiryDate: e.target.value })}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Label>OPC Cash Rebate Eligibility</Label>
            <Select value={form.opcCashRebate} onValueChange={(v) => updateForm({ opcCashRebate: v })}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="No">No</SelectItem>
                <SelectItem value="Yes">Yes</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>QP during COE Bidding Exercise</Label>
            <Input
              value={form.qpDuringCoe}
              onChange={(e) => updateForm({ qpDuringCoe: e.target.value })}
              placeholder="-"
            />
          </div>
          <div className="space-y-2">
            <Label>COE No.</Label>
            <Input
              value={form.coeNo}
              onChange={(e) => updateForm({ coeNo: e.target.value })}
              placeholder="e.g., COE123456789"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}