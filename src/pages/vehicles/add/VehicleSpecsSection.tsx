// components/vehicles/add/sections/VehicleSpecsSection.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Settings } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { VehicleFormValues } from "./types";
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";

export default function VehicleSpecsSection() {
  const { control, register } = useFormContext<VehicleFormValues>();

  return (
    <Card className="overflow-hidden w-full">
      <CardHeader className="header-bg-soft pb-6">
        <CardTitle className="flex items-center gap-2">
          <Settings className="w-5 h-5" />
          Vehicle Specifications
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-2">
            <Label>Engine No.</Label>
            <Input {...register("engineNo")} placeholder="e.g., 1KDB045665" />
          </div>
          <FormField
            control={control}
            name="engineType"
            render={({ field, fieldState }: { field: any; fieldState: any }) => (
              <FormItem>
                <FormLabel>Engine Type</FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Diesel">Diesel</SelectItem>
                      <SelectItem value="Petrol">Petrol</SelectItem>
                      <SelectItem value="Electric">Electric</SelectItem>
                      <SelectItem value="Hybrid">Hybrid</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />
          <div className="space-y-2">
            <Label>Maximum Unladen Weight (kg)</Label>
            <Input {...register("maxUnladenWeight")} />
          </div>
          <div className="space-y-2">
            <Label>Maximum Laden Weight (kg)</Label>
            <Input {...register("maxLadenWeight")} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-2">
            <Label>Engine Capacity (cc)</Label>
            <Input {...register("engineCapacity")} />
          </div>
          <div className="space-y-2">
            <Label>Maximum Power Output (kW)</Label>
            <Input {...register("maxPowerOutput")} />
          </div>
          <FormField
            control={control}
            name="primaryColor"
            render={({ field, fieldState }: { field: any; fieldState: any }) => (
              <FormItem>
                <FormLabel>Primary Color</FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="White">White</SelectItem>
                      <SelectItem value="Yellow">Yellow</SelectItem>
                      <SelectItem value="Blue">Blue</SelectItem>
                      <SelectItem value="Red">Red</SelectItem>
                      <SelectItem value="Green">Green</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="secondaryColor"
            render={({ field, fieldState }: { field: any; fieldState: any }) => (
              <FormItem>
                <FormLabel>Secondary Color</FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Red">Red</SelectItem>
                      <SelectItem value="Blue">Blue</SelectItem>
                      <SelectItem value="Green">Green</SelectItem>
                      <SelectItem value="Orange">Orange</SelectItem>
                      <SelectItem value="Black">Black</SelectItem>
                      <SelectItem value="None">None</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-2">
            <Label>Passenger Capacity</Label>
            <Input {...register("passengerCapacity")} />
          </div>
          <FormField
            control={control}
            name="wheelchairAccessible"
            render={({ field, fieldState }: { field: any; fieldState: any }) => (
              <FormItem>
                <FormLabel>Wheelchair Accessible</FormLabel>
                <FormControl>
                  <RadioGroup value={field.value} onValueChange={field.onChange} className="flex gap-4">
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="Yes" id="wa-yes" />
                      <Label htmlFor="wa-yes" className="m-0">Yes</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="No" id="wa-no" />
                      <Label htmlFor="wa-no" className="m-0">No</Label>
                    </div>
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="lifter"
            render={({ field, fieldState }: { field: any; fieldState: any }) => (
              <FormItem>
                <FormLabel>Lifter</FormLabel>
                <FormControl>
                  <RadioGroup value={field.value} onValueChange={field.onChange} className="flex gap-4">
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="Yes" id="lifter-yes" />
                      <Label htmlFor="lifter-yes" className="m-0">Yes</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="No" id="lifter-no" />
                      <Label htmlFor="lifter-no" className="m-0">No</Label>
                    </div>
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="stretcherCompatible"
            render={({ field, fieldState }: { field: any; fieldState: any }) => (
              <FormItem>
                <FormLabel>Stretcher Compatible</FormLabel>
                <FormControl>
                  <RadioGroup value={field.value} onValueChange={field.onChange} className="flex gap-4">
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="Yes" id="stretcher-yes" />
                      <Label htmlFor="stretcher-yes" className="m-0">Yes</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="No" id="stretcher-no" />
                      <Label htmlFor="stretcher-no" className="m-0">No</Label>
                    </div>
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />
        </div>
      </CardContent>
    </Card>
  );
}