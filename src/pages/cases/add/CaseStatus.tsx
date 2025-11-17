import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useFormContext } from "react-hook-form";
import { CaseFormValues } from "./types";

const statuses = [
  "Open", "Pending for Dispatch", "Dispatched", "Pending for Payment",
  "Pending Escort Assignment", "Pending Details from Vendor",
  "Pending for Service Receipt", "Pending Confirmation", "Completed", "Cancelled"
];

export default function CaseStatus() {
  const { control } = useFormContext<CaseFormValues>();

  return (
    <FormField
      control={control}
      name="status"
      rules={{ required: "Status is required" }}
      render={({ field }: { field: any }) => (
        <FormItem className="max-w-[300px]">
          <FormLabel>Status <span className="text-red-500">*</span></FormLabel>
          <FormControl>
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger><SelectValue placeholder="Select status" /></SelectTrigger>
              <SelectContent>
                {statuses.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}