import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { MapPin, Home } from "lucide-react";
import { TimePicker } from "@/components/ui/TimePicker";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { FieldArrayWithId, useFormContext } from "react-hook-form";
import { CaseFormValues } from "./types";

type Props = {
  trips: FieldArrayWithId<CaseFormValues, "tripDetails", "id">[];
};

export default function TripDetails({ trips }: Props) {
  const { control, register } = useFormContext<CaseFormValues>();

  return (
    <>
      {trips.map((trip, idx) => (
        <div key={trip.id} className="border rounded-lg p-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 rounded-full bg-[#2160AD] text-white flex items-center justify-center font-bold text-sm">{idx + 1}</div>
            <h3 className="txt-base">Trip {idx + 1}</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Pickup */}
            <div className="space-y-4">
              <FormField
                control={control}
                name={`tripDetails.${idx}.pickUpLocation`}
                rules={{ required: "Trip 1 pickup location is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pickup Location <span className="text-red-500">*</span></FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input {...field} placeholder="Search pickup location..." className="pr-10" />
                      </FormControl>
                      <Button size="icon" variant="ghost" type="button" className="absolute right-1 top-1/2 -translate-y-1/2">
                        <MapPin className="w-4 h-4 text-[#2160AD]" />
                      </Button>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="bg-white rounded-lg border p-4 space-y-4">
                <div className="flex items-center gap-2"><Home className="w-4 h-4 text-[#2160AD]" /><Label className="m-0">Address Details</Label></div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <Label className="text-sm text-gray-700">Block Number</Label>
                    <Input {...register(`tripDetails.${idx}.pickupBlock`)} placeholder="e.g., 123" />
                  </div>
                  <div>
                    <Label className="text-sm text-gray-700">Unit Number</Label>
                    <Input {...register(`tripDetails.${idx}.pickupUnit`)} placeholder="e.g., #12-34" />
                  </div>
                </div>
                <hr className="mt-6 mb-4" />
                <div className="grid sm:grid-cols-3 gap-3">
                  <div>
                    <Label className="text-sm text-gray-700">Ward Details</Label>
                    <Input {...register(`tripDetails.${idx}.pickupWard`)} placeholder="e.g., Ward A" />
                  </div>
                  <div>
                    <Label className="text-sm text-gray-700">Room Number</Label>
                    <Input {...register(`tripDetails.${idx}.pickupRoom`)} placeholder="e.g., 101" />
                  </div>
                  <div>
                    <Label className="text-sm text-gray-700">Bed Number</Label>
                    <Input {...register(`tripDetails.${idx}.pickupBed`)} placeholder="e.g., A1" />
                  </div>
                </div>
              </div>
            </div>

            {/* Dropoff */}
            <div className="space-y-4">
              <FormField
                control={control}
                name={`tripDetails.${idx}.dropOffLocation`}
                rules={{ required: "Trip 1 dropoff location is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Dropoff Location <span className="text-red-500">*</span></FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input {...field} placeholder="Search dropoff location..." className="pr-10" />
                      </FormControl>
                      <Button size="icon" variant="ghost" type="button" className="absolute right-1 top-1/2 -translate-y-1/2">
                        <MapPin className="w-4 h-4 text-[#2160AD]" />
                      </Button>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="bg-white rounded-lg border p-4 space-y-4">
                <div className="flex items-center gap-2"><Home className="w-4 h-4 text-[#2160AD]" /><Label className="m-0">Address Details</Label></div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <Label className="text-sm text-gray-700">Block Number</Label>
                    <Input {...register(`tripDetails.${idx}.dropoffBlock`)} placeholder="e.g., 123" />
                  </div>
                  <div>
                    <Label className="text-sm text-gray-700">Unit Number</Label>
                    <Input {...register(`tripDetails.${idx}.dropoffUnit`)} placeholder="e.g., #12-34" />
                  </div>
                </div>
                <hr className="mt-6 mb-4" />
                <div className="grid sm:grid-cols-3 gap-3">
                  <div>
                    <Label className="text-sm text-gray-700">Ward Details</Label>
                    <Input {...register(`tripDetails.${idx}.dropoffWard`)} placeholder="e.g., Ward A" />
                  </div>
                  <div>
                    <Label className="text-sm text-gray-700">Room Number</Label>
                    <Input {...register(`tripDetails.${idx}.dropoffRoom`)} placeholder="e.g., 101" />
                  </div>
                  <div>
                    <Label className="text-sm text-gray-700">Bed Number</Label>
                    <Input {...register(`tripDetails.${idx}.dropoffBed`)} placeholder="e.g., A1" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <FormField
            control={control}
            name={`tripDetails.${idx}.pickUpTime`}
            render={({ field, fieldState }) => (
              <FormItem className="mt-4 max-w-md">
                <FormLabel>Pick up - Scheduled Time</FormLabel>
                <TimePicker
                  label=""
                  value={field.value}
                  onChange={field.onChange}
                  error={fieldState.error?.message}
                />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      ))}
    </>
  );
}
