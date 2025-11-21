// components/vehicles/add/sections/ArfCoeSection.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TriangleAlert } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { VehicleFormValues ,ArfCoeProp } from "./types";
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";

export default function ArfCoeSection({isEditing}:ArfCoeProp) {
  const { control, register } = useFormContext<VehicleFormValues>();

  return (
    <Card className="overflow-hidden w-full">
      <CardHeader className="header-bg-soft pb-6">
        <CardTitle className="flex items-center gap-2">
          <TriangleAlert className="w-5 h-5" />
          Additional Registration Fee (ARF) & COE Information
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-2">
            <Label>Open Market Value (S$)</Label>
            <Input {...register("omv")} disabled={!isEditing}/>
          </div>
          <div className="space-y-2">
            <Label>Additional Registration Fee Rate (%)</Label>
            <Input {...register("arfRate")} disabled={!isEditing}/>
          </div>
          <div className="space-y-2">
            <Label>Actual ARF Paid (S$)</Label>
            <Input {...register("actualArfPaid")} disabled={!isEditing}/>
          </div>
          <div className="space-y-2">
            <Label>COE Expiry Date</Label>
            <Input type="date" {...register("coeExpiryDate")} disabled={!isEditing}/>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FormField
            control={control}
            name="opcCashRebate"
            render={({ field, fieldState }: { field: any; fieldState: any }) => (
              <FormItem>
                <FormLabel>OPC Cash Rebate Eligibility</FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange} disabled={!isEditing}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="No">No</SelectItem>
                      <SelectItem value="Yes">Yes</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />
          <div className="space-y-2">
            <Label>QP during COE Bidding Exercise</Label>
            <Input {...register("qpDuringCoe")} placeholder="-" disabled={!isEditing}/>
          </div>
          <div className="space-y-2">
            <Label>COE No.</Label>
            <Input {...register("coeNo")} placeholder="e.g., COE123456789" disabled={!isEditing}/>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}