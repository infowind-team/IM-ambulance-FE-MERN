import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Calendar, Phone } from "lucide-react";
import { DatePicker } from "@/components/ui/date-picker";
import { TimePicker } from "@/components/ui/TimePicker";
import { format } from "date-fns";

type Props = {
  intake: string;
  onIntakeChange: (v: string) => void;
  bookingDate: Date | null;
  onBookingDateChange: (d: Date | null) => void;
  bookingTime: string;
  onBookingTimeChange: (t: string) => void;
  requestorName: string;
  onRequestorNameChange: (v: string) => void;
  requestorContact: string;
  onRequestorContactChange: (v: string) => void;
  transportMode: string;
  onTransportModeChange: (v: string) => void;
};

export default function BookingInfo({
  intake, onIntakeChange,
  bookingDate, onBookingDateChange,
  bookingTime, onBookingTimeChange,
  requestorName, onRequestorNameChange,
  requestorContact, onRequestorContactChange,
  transportMode, onTransportModeChange
}: Props) {
  return (
    <Card className="overflow-hidden w-full">
      <CardHeader className="header-bg-soft pb-6">
        <CardTitle className="flex items-center gap-2"><Phone className="w-5 h-5" /> Booking & Requestor Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label>Mode of Intake <span className="text-red-500">*</span></Label>
          <Select value={intake} onValueChange={onIntakeChange}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              {["Phone Call", "Whatsapp", "Email", "Walk-in"].map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <Label>Booking Date <span className="text-red-500">*</span></Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start h-10">
                  <Calendar className="w-4 h-4 mr-2" />
                  {bookingDate ? format(bookingDate, "dd MMM yyyy") : "Select booking date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-0 w-auto">
                <DatePicker
                  mode="single"
                  selected={bookingDate ?? undefined}
                  onSelect={onBookingDateChange}
                  required
                />
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <Label>Booking Time <span className="text-red-500">*</span></Label>
            <TimePicker value={bookingTime} onChange={e => onBookingTimeChange(e.target.value)} label={""} />
          </div>
        </div>

        <div className="border-t pt-6 space-y-4">
          <div>
            <Label>Requestor Name <span className="text-red-500">*</span></Label>
            <Input value={requestorName} onChange={e => onRequestorNameChange(e.target.value)} placeholder="Enter requestor name" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label>Requestor Contact <span className="text-red-500">*</span></Label>
              <Input value={requestorContact} onChange={e => onRequestorContactChange(e.target.value)} placeholder="Enter contact number" />
            </div>
            <div>
              <Label>Mode of Transport</Label>
              <Select value={transportMode} onValueChange={onTransportModeChange}>
                <SelectTrigger><SelectValue placeholder="Select transport mode" /></SelectTrigger>
                <SelectContent>
                  {["Wheelchair", "Stretcher", "Walking", "Crutches", "Carry Chair", "Ambulatory"].map(t => (
                    <SelectItem key={t} value={t}>{t}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}