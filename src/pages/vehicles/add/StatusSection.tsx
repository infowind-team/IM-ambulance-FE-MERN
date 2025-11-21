// components/vehicles/add/sections/StatusSection.tsx
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFormContext } from "react-hook-form";
import { VehicleFormValues, StatusProps } from "./types";

export default function StatusSection({ isEditing }: StatusProps) {
  const { control } = useFormContext<VehicleFormValues>();

  return (
    <FormField
      control={control}
      name="status"
      rules={{ required: "Status is required" }}
      render={({ field, fieldState }: { field: any; fieldState: any }) => (
        <FormItem className="max-w-[300px]">
          <FormLabel className="text-base font-medium">
            Status <span className="text-red-500">*</span>
          </FormLabel>
          <FormControl>
            <Select value={field.value} onValueChange={field.onChange} disabled={!isEditing} >
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
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}