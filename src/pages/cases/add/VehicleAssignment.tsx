import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Car } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { CaseFormValues } from "./types";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

export default function VehicleAssignment() {
  const { control } = useFormContext<CaseFormValues>();

  return (
    <div className="space-y-6 mt-8 pt-8 border-t">
      <div className="flex items-center gap-2"><Car className="w-5 h-5 text-[#2160AD]" /><h4 className="font-semibold text-[#2160AD]">Vehicle Assignment</h4></div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
        <FormField
          control={control}
          name="vehicleType"
          render={({ field, fieldState }: { field: any; fieldState: any }) => (
            <FormItem>
              <FormLabel>Vehicle Type</FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger><SelectValue placeholder="Select Vehicle Type" /></SelectTrigger>
                  <SelectContent>
                    {["Ambulance", "ICU Ambulance", "Patient Transport", "Wheelchair Vehicle"].map(v => <SelectItem key={v} value={v}>{v}</SelectItem>)}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="vehicleNumber"
          render={({ field, fieldState }: { field: any; fieldState: any }) => (
            <FormItem>
              <FormLabel>Vehicle Number</FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger><SelectValue placeholder="Select Vehicle No." /></SelectTrigger>
                  <SelectContent>
                    {["AMB001", "AMB002", "AMB003", "ICU001", "PT001"].map(v => <SelectItem key={v} value={v}>{v}</SelectItem>)}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="grid sm:grid-cols-3 gap-6">
        <FormField
          control={control}
          name="mto"
          rules={{ required: "MTO is required" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>MTO <span className="text-red-500">*</span></FormLabel>
              <FormControl>
                <Input {...field} placeholder="Medical Transport Officer" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="emt"
          render={({ field }) => (
            <FormItem>
              <FormLabel>EMT / EN / PRM</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Emergency Medical Technician" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="escort"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Escort (Person)</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Escort name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
