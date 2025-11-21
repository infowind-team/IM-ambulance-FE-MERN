// components/vehicles/add/sections/VehicleRegistrationSection.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Truck } from "lucide-react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useFormContext } from "react-hook-form";
import { VehicleFormValues, VehicleRegistrationProp } from "./types";

export default function VehicleRegistrationSection({ isEditing }: VehicleRegistrationProp) {
  const { control } = useFormContext<VehicleFormValues>();

  return (
    <Card className="overflow-hidden w-full">
      <CardHeader className="header-bg-soft pb-6">
        <CardTitle className="flex items-center gap-2">
          <Truck className="w-5 h-5" />
          Vehicle Registration Details
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <FormField
            control={control}
            name="vehicleNumber"
            rules={{ required: "Vehicle number is required" }}
            render={({ field, fieldState }: { field: any; fieldState: any }) => (
              <FormItem>
                <FormLabel>Vehicle Number <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <Input {...field} placeholder="e.g., SAZ1234A" disabled={!isEditing}/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="chassisNumber"
            rules={{ required: "Chassis number is required" }}
            render={({ field, fieldState }: { field: any; fieldState: any }) => (
              <FormItem>
                <FormLabel>Chassis No. <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <Input {...field} placeholder="e.g., JTFST22P200040240" disabled={!isEditing}/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="scheme"
            rules={{ required: "Vehicle scheme is required" }}
            render={({ field, fieldState }: { field: any; fieldState: any }) => (
              <FormItem>
                <FormLabel>Vehicle Scheme <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange} disabled={!isEditing}>
                    <SelectTrigger><SelectValue placeholder="Select scheme" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Ambulance">Ambulance</SelectItem>
                      <SelectItem value="Emergency Response">Emergency Response</SelectItem>
                      <SelectItem value="Patient Transport">Patient Transport</SelectItem>
                      <SelectItem value="Medical Support">Medical Support</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="type"
            rules={{ required: "Vehicle type is required" }}
            render={({ field, fieldState }: { field: any; fieldState: any }) => (
              <FormItem>
                <FormLabel>Vehicle Type <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange} disabled={!isEditing}>
                    <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Basic Life Support">Basic Life Support</SelectItem>
                      <SelectItem value="Advanced Life Support">Advanced Life Support</SelectItem>
                      <SelectItem value="ICU Ambulance">ICU Ambulance</SelectItem>
                      <SelectItem value="Pediatric Ambulance">Pediatric Ambulance</SelectItem>
                      <SelectItem value="Maternity Ambulance">Maternity Ambulance</SelectItem>
                      <SelectItem value="Psychiatric Transport">Psychiatric Transport</SelectItem>
                      <SelectItem value="Bariatric Ambulance">Bariatric Ambulance</SelectItem>
                      <SelectItem value="Trauma Response">Trauma Response</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <FormField
            control={control}
            name="makeModel"
            rules={{ required: "Make and model are required" }}
            render={({ field, fieldState }: { field: any; fieldState: any }) => (
              <FormItem>
                <FormLabel>Make &amp; Model <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <Input {...field} placeholder="e.g., Mercedes-Benz Sprinter" disabled={!isEditing}/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="year"
            render={({ field, fieldState }: { field: any; fieldState: any }) => (
              <FormItem>
                <FormLabel>Year</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="e.g., 2023" disabled={!isEditing}/>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="propellant"
            render={({ field, fieldState }: { field: any; fieldState: any }) => (
              <FormItem>
                <FormLabel>Current Propellant</FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange} disabled={!isEditing}>
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
        </div>
      </CardContent>
    </Card>
  );
}