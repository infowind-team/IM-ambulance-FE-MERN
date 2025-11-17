// components/vehicles/add/sections/RegistrationDetailsSection.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FileText } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { VehicleFormValues } from "./types";
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";

export default function RegistrationDetailsSection() {
  const { control } = useFormContext<VehicleFormValues>();

  return (
    <Card className="overflow-hidden w-full">
      <CardHeader className="header-bg-soft pb-6">
        <CardTitle className="flex items-center gap-2">
          <FileText className="w-5 h-5" />
          Registration Details
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <FormField
            control={control}
            name="previousVehicleNo"
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormLabel>Previous Vehicle No.</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="-" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="effectiveOwnershipDate"
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormLabel>Effective Date of Ownership</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="originalRegistrationDate"
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormLabel>Original Registration Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={control}
            name="noOfTransfers"
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormLabel>No. of Transfers</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="iuLabelNo"
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormLabel>IU Label No.</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="e.g., 40057623" />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
      </CardContent>
    </Card>
  );
}