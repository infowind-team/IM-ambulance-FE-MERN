// components/vehicles/add/sections/StatusSection.tsx
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  status: string;
  updateForm: (updates: { status: string }) => void;
};

export default function StatusSection({ status, updateForm }: Props) {
  return (
    <div className="max-w-[300px]">
      <Label className="text-base font-medium mb-2 block">
        Status <span className="text-red-500">*</span>
      </Label>
      <Select value={status} onValueChange={(v) => updateForm({ status: v })}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Active">Active</SelectItem>
          <SelectItem value="Inactive">Inactive</SelectItem>
          <SelectItem value="Maintenance">Maintenance</SelectItem>
          <SelectItem value="Out of Service">Out of Service</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}