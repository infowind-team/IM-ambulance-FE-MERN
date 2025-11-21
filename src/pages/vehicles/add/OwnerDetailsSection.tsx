// components/vehicles/add/sections/OwnerDetailsSection.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FileText } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { VehicleFormValues, OwnerDetailProp } from "./types";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

export default function OwnerDetailsSection({isEditing}: OwnerDetailProp) {
  const { control } = useFormContext<VehicleFormValues>();

  return (
    <Card className="overflow-hidden w-full">
      <CardHeader className="header-bg-soft pb-6">
        <CardTitle className="flex items-center gap-2">
          <FileText className="w-5 h-5" />
          Owner&apos;s Details
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={control}
            name="ownerName"
            rules={{ required: "Owner's Name is required" }}
            render={({ field }: { field: any; }) => (
              <FormItem>
                <FormLabel>Owner&apos;s Name <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter owner's name"  disabled={!isEditing}/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="ownerId"
            rules={{ required: "NRIC/Passport/Company Cert No. is required" }}
            render={({ field }: { field: any; }) => (
              <FormItem>
                <FormLabel>NRIC/Passport/Company Cert No. <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter nric/passport/company cert no." disabled={!isEditing} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 gap-4">
          <FormField
            control={control}
            name="registeredAddress"
            render={({ field }: { field: any; }) => (
              <FormItem>
                <FormLabel>Registered Address</FormLabel>
                <FormControl>
                  <Input {...field} disabled={!isEditing}/>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="mailingAddress"
            render={({ field }: { field: any; }) => (
              <FormItem>
                <FormLabel>Mailing Address</FormLabel>
                <FormControl>
                  <Input {...field} disabled={!isEditing}/>
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={control}
            name="ownerIdType"
            render={({ field }: { field: any; }) => (
              <FormItem>
                <FormLabel>Owner&apos;s ID Type</FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange} disabled={!isEditing}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Company Registration">Company Registration</SelectItem>
                      <SelectItem value="NRIC">NRIC</SelectItem>
                      <SelectItem value="Passport">Passport</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="registrationDate"
            render={({ field }: { field: any; }) => (
              <FormItem>
                <FormLabel>Registration Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} disabled={!isEditing}/>
                </FormControl>
              </FormItem>
            )}
          />
        </div>
      </CardContent>
    </Card>
  );
}