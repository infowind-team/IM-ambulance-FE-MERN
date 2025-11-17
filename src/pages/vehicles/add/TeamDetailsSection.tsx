// components/vehicles/add/sections/TeamDetailsSection.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { User } from "lucide-react"; 
import { VehicleFormData } from ".";

type Props = {
  form: VehicleFormData;
  updateForm: (updates: Partial<VehicleFormData>) => void;
};

export default function TeamDetailsSection({ form, updateForm }: Props) {
  return (
    <Card className="overflow-hidden w-full">
      <CardHeader className="header-bg-soft pb-6">
        <CardTitle className="flex items-center gap-2">
          <User className="w-5 h-5" />
          Team Details
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label>Driver <span className="text-red-500">*</span></Label>
            <Select value={form.driver} onValueChange={(v) => updateForm({ driver: v })}>
              <SelectTrigger><SelectValue placeholder="Select Driver" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="Annette Black">Annette Black</SelectItem>
                <SelectItem value="Jennifer Liu">Jennifer Liu</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Medic</Label>
            <Select value={form.medic} onValueChange={(v) => updateForm({ medic: v })}>
              <SelectTrigger><SelectValue placeholder="Select Medic" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="Annette Black">Annette Black</SelectItem>
                <SelectItem value="Jennifer Liu">Jennifer Liu</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Escort</Label>
            <Select value={form.escort} onValueChange={(v) => updateForm({ escort: v })}>
              <SelectTrigger><SelectValue placeholder="-" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="none">-</SelectItem>
                <SelectItem value="Annette Black">Annette Black</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}