import { Trip } from "./types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { MapPin, Home } from "lucide-react";
import { TimePicker } from "@/components/ui/TimePicker";

type Props = {
  trips: Trip[];
  updateTrip: (id: string, field: keyof Trip, value: string) => void;
};

export default function TripDetails({ trips, updateTrip }: Props) {
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
              <div>
                <Label>Pickup Location <span className="text-red-500">*</span></Label>
                <div className="relative">
                  <Input value={trip.pickupLocation} onChange={e => updateTrip(trip.id, "pickupLocation", e.target.value)} placeholder="Search pickup location..." />
                  <Button size="icon" variant="ghost" className="absolute right-1 top-1/2 -translate-y-1/2"><MapPin className="w-4 h-4 text-[#2160AD]" /></Button>
                </div>
              </div>
              <div className="bg-white rounded-lg border p-4 space-y-4">
                <div className="flex items-center gap-2"><Home className="w-4 h-4 text-[#2160AD]" /><Label className="m-0">Address Details</Label></div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div><Label className="text-sm text-gray-700">Block Number</Label><Input value={trip.pickupBlock} onChange={e => updateTrip(trip.id, "pickupBlock", e.target.value)} placeholder="e.g., 123" /></div>
                  <div><Label className="text-sm text-gray-700">Unit Number</Label><Input value={trip.pickupUnit} onChange={e => updateTrip(trip.id, "pickupUnit", e.target.value)} placeholder="e.g., #12-34" /></div>
                </div>
                <hr className="mt-6 mb-4" />
                <div className="grid sm:grid-cols-3 gap-3">
                  <div><Label className="text-sm text-gray-700">Ward Details</Label><Input value={trip.pickupWard} onChange={e => updateTrip(trip.id, "pickupWard", e.target.value)} placeholder="e.g., Ward A" /></div>
                  <div><Label className="text-sm text-gray-700">Room Number</Label><Input value={trip.pickupRoom} onChange={e => updateTrip(trip.id, "pickupRoom", e.target.value)} placeholder="e.g., 101" /></div>
                  <div><Label className="text-sm text-gray-700">Bed Number</Label><Input value={trip.pickupBed} onChange={e => updateTrip(trip.id, "pickupBed", e.target.value)} placeholder="e.g., A1" /></div>
                </div>
              </div>
            </div>

            {/* Dropoff */}
            <div className="space-y-4">
              <div>
                <Label>Dropoff Location <span className="text-red-500">*</span></Label>
                <div className="relative">
                  <Input value={trip.dropoffLocation} onChange={e => updateTrip(trip.id, "dropoffLocation", e.target.value)} placeholder="Search dropoff location..." />
                  <Button size="icon" variant="ghost" className="absolute right-1 top-1/2 -translate-y-1/2"><MapPin className="w-4 h-4 text-[#2160AD]" /></Button>
                </div>
              </div>
              <div className="bg-white rounded-lg border p-4 space-y-4">
                <div className="flex items-center gap-2"><Home className="w-4 h-4 text-[#2160AD]" /><Label className="m-0">Address Details</Label></div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div><Label className="text-sm text-gray-700">Block Number</Label><Input value={trip.dropoffBlock} onChange={e => updateTrip(trip.id, "dropoffBlock", e.target.value)} placeholder="e.g., 123" /></div>
                  <div><Label className="text-sm text-gray-700">Unit Number</Label><Input value={trip.dropoffUnit} onChange={e => updateTrip(trip.id, "dropoffUnit", e.target.value)} placeholder="e.g., #12-34" /></div>
                </div>
                <hr className="mt-6 mb-4" />
                <div className="grid sm:grid-cols-3 gap-3">
                  <div><Label className="text-sm text-gray-700">Ward Details</Label><Input value={trip.dropoffWard} onChange={e => updateTrip(trip.id, "dropoffWard", e.target.value)} placeholder="e.g., Ward A" /></div>
                  <div><Label className="text-sm text-gray-700">Room Number</Label><Input value={trip.dropoffRoom} onChange={e => updateTrip(trip.id, "dropoffRoom", e.target.value)} placeholder="e.g., 101" /></div>
                  <div><Label className="text-sm text-gray-700">Bed Number</Label><Input value={trip.dropoffBed} onChange={e => updateTrip(trip.id, "dropoffBed", e.target.value)} placeholder="e.g., A1" /></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 max-w-md">
            <Label>Pick up - Scheduled Time</Label>
            <TimePicker value={trip.scheduledTime} onChange={e => updateTrip(trip.id, "scheduledTime", e.target.value)} label={""} />
          </div>
        </div>
      ))}
    </>
  );
}