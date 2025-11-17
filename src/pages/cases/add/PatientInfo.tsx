import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CaseFormValues } from "./types";
import { useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

export default function PatientInfo() {
  const { control } = useFormContext<CaseFormValues>();

  return (
    <div className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <FormField
          control={control}
          name="patientName"
          rules={{ required: "Patient name is required" }}
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>Patient Name <span className="text-red-500">*</span></FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter patient name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="patientNric"
          rules={{ required: "Patient NRIC is required" }}
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>NRIC <span className="text-red-500">*</span></FormLabel>
              <FormControl>
                <Input {...field} placeholder="S****567Z" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <FormField
          control={control}
          name="patientAge"
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>Age</FormLabel>
              <FormControl>
                <Input type="number" {...field} placeholder="65" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="patientWeight"
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>Weight (KG)</FormLabel>
              <FormControl>
                <Input type="number" {...field} placeholder="70" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="gender"
          render={({ field, fieldState }: { field: any; fieldState: any }) => (
            <FormItem>
              <FormLabel>Gender</FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger><SelectValue placeholder="Select gender" /></SelectTrigger>
                  <SelectContent><SelectItem value="Male">Male</SelectItem><SelectItem value="Female">Female</SelectItem></SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={control}
        name="patientContact"
        render={({ field }: { field: any }) => (
          <FormItem>
            <FormLabel>Patient Contact</FormLabel>
            <FormControl>
              <Input {...field} placeholder="+65 XXXX XXXX" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="patientCondition"
        render={({ field }: { field: any }) => (
          <FormItem>
            <FormLabel>Patient&apos;s Condition | Chief Complaint</FormLabel>
            <FormControl>
              <Textarea {...field} placeholder="Describe patient's condition or chief complaint..." />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}