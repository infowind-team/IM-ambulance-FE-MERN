// components/vehicles/add/sections/OwnerDetailsSection.tsx
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
import { FileText } from "lucide-react";
import { VehicleFormData } from ".";

type Props = {
  form: VehicleFormData;
  updateForm: (updates: Partial<VehicleFormData>) => void;
};

export default function OwnerDetailsSection({ form, updateForm }: Props) {
  return (
    <Card className="overflow-hidden w-full">
      <CardHeader className="header-bg-soft pb-6">
        <CardTitle className="flex items-center gap-2">
          <FileText className="w-5 h-5" />
          Owner's Details
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Owner's Name <span className="text-red-500">*</span></Label>
            <Input
              required
              value={form.ownerName}
              onChange={(e) => updateForm({ ownerName: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label>NRIC/Passport/Company Cert No. <span className="text-red-500">*</span></Label>
            <Input
              required
              value={form.ownerId}
              onChange={(e) => updateForm({ ownerId: e.target.value })}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-2">
            <Label>Registered Address</Label>
            <Input
              value={form.registeredAddress}
              onChange={(e) => updateForm({ registeredAddress: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label>Mailing Address</Label>
            <Input
              value={form.mailingAddress}
              onChange={(e) => updateForm({ mailingAddress: e.target.value })}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Owner's ID Type</Label>
            <Select value={form.ownerIdType} onValueChange={(v) => updateForm({ ownerIdType: v })}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="Company Registration">Company Registration</SelectItem>
                <SelectItem value="NRIC">NRIC</SelectItem>
                <SelectItem value="Passport">Passport</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Registration Date</Label>
            <Input
              type="date"
              value={form.registrationDate}
              onChange={(e) => updateForm({ registrationDate: e.target.value })}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}