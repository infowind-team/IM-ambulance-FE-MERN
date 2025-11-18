import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Calendar, Phone } from "lucide-react";
import { DatePicker } from "@/components/ui/date-picker";
import { TimePicker } from "@/components/ui/TimePicker";
import { format } from "date-fns";
import { useFormContext } from "react-hook-form";
import { CaseFormValues } from "./types";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

export default function BookingInfo() {
  const { control } = useFormContext<CaseFormValues>();

  return (
    <Card className="overflow-hidden w-full">
      <CardHeader className="header-bg-soft pb-6">
        <CardTitle className="flex items-center gap-2"><Phone className="w-5 h-5" /> Booking & Requestor Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <FormField
          control={control}
          name="intakeMode"
          rules={{ required: "Mode of intake is required" }}
          render={({ field, fieldState }: { field: any; fieldState: any }) => (
            <FormItem>
              <FormLabel>Mode of Intake <span className="text-red-500">*</span></FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger
                      className={`${fieldState.error ? "border-red-300 focus-visible:border-red-300" : ""}`}
                    ><SelectValue placeholder="Select intake mode" /></SelectTrigger>
                  <SelectContent>
                    {["Phone Call", "Whatsapp", "Email", "Walk-in"].map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid sm:grid-cols-2 gap-4">
          <FormField
            control={control}
            name="bookingDate"
            rules={{ required: "Booking date is required" }}
            render={({ field, fieldState }: { field: any; fieldState: any }) => (
              <FormItem>
                <FormLabel>Booking Date <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={`w-full justify-start h-10 ${fieldState.error ? "border-red-300 focus-visible:border-red-300" : ""}`}
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        {field.value ? format(field.value, "dd MMM yyyy") : "Select booking date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0 w-auto">
                      <DatePicker
                        mode="single"
                        selected={field.value ?? undefined}
                        onSelect={(date) => field.onChange(date ?? null)}
                      />
                    </PopoverContent>
                  </Popover>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="bookingTime"
            rules={{ required: "Booking time is required" }}
            render={({ field, fieldState }: { field: any; fieldState: any }) => (
              <FormItem>
                <FormLabel>Booking Time <span className="text-red-500">*</span></FormLabel>
                <TimePicker
                  label=""
                  value={field.value}
                  onChange={field.onChange}
                  required
                  error={fieldState.error?.message}
                />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="border-t pt-6 space-y-4">
          <FormField
            control={control}
            name="requestorName"
            rules={{ required: "Requestor name is required" }}
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormLabel>Requestor Name <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter requestor name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid sm:grid-cols-2 gap-4">
            <FormField
              control={control}
              name="requestorContact"
              rules={{ required: "Requestor contact is required" }}
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel>Requestor Contact <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter contact number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="transportMode"
              rules={{ required: "Mode of transport is required" }}
              render={({ field, fieldState }: { field: any; fieldState: any }) => (
                <FormItem>
                  <FormLabel>Mode of Transport</FormLabel>
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger><SelectValue placeholder="Select transport mode" /></SelectTrigger>
                      <SelectContent>
                        {["Wheelchair", "Stretcher", "Walking", "Crutches", "Carry Chair", "Ambulatory"].map(t => (
                          <SelectItem key={t} value={t}>{t}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}