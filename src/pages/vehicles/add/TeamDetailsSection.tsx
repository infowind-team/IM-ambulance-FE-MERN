// components/vehicles/add/sections/TeamDetailsSection.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { User } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { VehicleFormValues, TeamDetailProp } from "./types";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

export default function TeamDetailsSection({ isEditing, users }: TeamDetailProp) {
  const { control } = useFormContext<VehicleFormValues>();

  return (
    <Card className="overflow-hidden w-full">
      <CardHeader className="header-bg-soft pb-6">
        <CardTitle className="flex items-center gap-2">
          <User className="w-5 h-5" />
          Team Details
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FormField
            control={control}
            name="driver"
            rules={{ required: "Driver is required" }}
            render={({ field, fieldState }: { field: any; fieldState: any }) => (
              <FormItem>
                <FormLabel>Driver <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                    disabled={!isEditing}
                  >
                    <SelectTrigger
                      className={`${fieldState.error ? "border-red-300 focus-visible:border-red-300" : ""}`}
                    >
                      <SelectValue placeholder="Select Driver" />
                    </SelectTrigger>
                    {/* <SelectContent>
                      <SelectItem value="Annette Black">Annette Black</SelectItem>
                      <SelectItem value="Jennifer Liu">Jennifer Liu</SelectItem>
                    </SelectContent> */}
                    <SelectContent>
                      {users.map((u) => (
                        <SelectItem key={u._id} value={u._id}>
                          {u.firstName} {u.lastName}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="medic"
            render={({ field, fieldState }: { field: any; fieldState: any }) => (
              <FormItem>
                <FormLabel>Medic</FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange} disabled={!isEditing}>
                    <SelectTrigger><SelectValue placeholder="Select Medic" /></SelectTrigger>
                    {/* <SelectContent>
                      <SelectItem value="Annette Black">Annette Black</SelectItem>
                      <SelectItem value="Jennifer Liu">Jennifer Liu</SelectItem>
                    </SelectContent> */}
                    <SelectContent>
                      {users.map((u) => (
                        <SelectItem key={u._id} value={u._id}>
                          {u.firstName} {u.lastName}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="escort"
            render={({ field, fieldState }: { field: any; fieldState: any }) => (
              <FormItem>
                <FormLabel>Escort</FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange} disabled={!isEditing}>
                    <SelectTrigger><SelectValue placeholder="-" /></SelectTrigger>
                    {/* <SelectContent>
                      <SelectItem value="none">-</SelectItem>
                      <SelectItem value="Annette Black">Annette Black</SelectItem>
                    </SelectContent> */}
                    <SelectContent>
                      {users.map((u) => (
                        <SelectItem key={u._id} value={u._id}>
                          {u.firstName} {u.lastName}
                        </SelectItem>
                      ))}
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