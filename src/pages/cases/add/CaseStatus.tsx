import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const statuses = [
  "Open", "Pending for Dispatch", "Dispatched", "Pending for Payment",
  "Pending Escort Assignment", "Pending Details from Vendor",
  "Pending for Service Receipt", "Pending Confirmation", "Completed", "Cancelled"
];

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function CaseStatus({ value, onChange }: Props) {
  return (
    <div className="max-w-[300px]">
      <Label>Status <span className="text-red-500">*</span></Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger><SelectValue placeholder="Select status" /></SelectTrigger>
        <SelectContent>
          {statuses.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
        </SelectContent>
      </Select>
    </div>
  );
}