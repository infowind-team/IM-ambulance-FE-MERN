import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CaseFormValues } from "./types";
import { useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

export default function NextOfKin() {
  const { control } = useFormContext<CaseFormValues>();

  return (
    <div className="space-y-4">
      <h4 className="font-medium text-[#2160AD]">Next of Kin Details</h4>
      <div className="grid sm:grid-cols-2 gap-4">
        <FormField
          control={control}
          name="nokName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>NOK Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter NOK name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="nokContact"
          render={({ field }) => (
            <FormItem>
              <FormLabel>NOK Contact</FormLabel>
              <FormControl>
                <Input {...field} placeholder="+65 9123 4567" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <FormField
          control={control}
          name="nokRelationship"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Relationship</FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger><SelectValue placeholder="Select relationship" /></SelectTrigger>
                  <SelectContent>
                    {["Parent", "Spouse", "Child", "Sibling", "Friend", "Other"].map(r => <SelectItem key={r} value={r}>{r}</SelectItem>)}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="nokAccompanying"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Accompanying NOK</FormLabel>
              <FormControl>
                <Input type="number" {...field} placeholder="0" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}