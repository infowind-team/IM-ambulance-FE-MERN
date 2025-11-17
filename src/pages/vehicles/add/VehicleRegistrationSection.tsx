// components/vehicles/add/sections/VehicleRegistrationSection.tsx
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
import { Truck } from "lucide-react";
import { VehicleFormData } from ".";

type Props = {
  form: VehicleFormData;
  updateForm: (updates: Partial<VehicleFormData>) => void;
};

export default function VehicleRegistrationSection({ form, updateForm }: Props) {
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
          <div className="space-y-2">
            <Label>Vehicle Number <span className="text-red-500">*</span></Label>
            <Input
              required
              value={form.vehicleNumber}
              onChange={(e) => updateForm({ vehicleNumber: e.target.value })}
              placeholder="e.g., SAZ1234A"
            />
          </div>
          <div className="space-y-2">
            <Label>Chassis No. <span className="text-red-500">*</span></Label>
            <Input
              required
              value={form.chassisNo}
              onChange={(e) => updateForm({ chassisNo: e.target.value })}
              placeholder="e.g., JTFST22P200040240"
            />
          </div>
          <div className="space-y-2">
            <Label>Vehicle Scheme <span className="text-red-500">*</span></Label>
            <Select value={form.vehicleScheme} onValueChange={(v) => updateForm({ vehicleScheme: v })}>
              <SelectTrigger><SelectValue placeholder="Select scheme" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="Ambulance">Ambulance</SelectItem>
                <SelectItem value="Emergency Response">Emergency Response</SelectItem>
                <SelectItem value="Patient Transport">Patient Transport</SelectItem>
                <SelectItem value="Medical Support">Medical Support</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Vehicle Type <span className="text-red-500">*</span></Label>
            <Select value={form.vehicleType} onValueChange={(v) => updateForm({ vehicleType: v })}>
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
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label>Make & Model <span className="text-red-500">*</span></Label>
            <Input
              required
              value={form.makeModel}
              onChange={(e) => updateForm({ makeModel: e.target.value })}
              placeholder="e.g., Mercedes-Benz Sprinter"
            />
          </div>
          <div className="space-y-2">
            <Label>Year</Label>
            <Input
              value={form.year}
              onChange={(e) => updateForm({ year: e.target.value })}
              placeholder="e.g., 2023"
            />
          </div>
          <div className="space-y-2">
            <Label>Current Propellant</Label>
            <Select value={form.currentPropellant} onValueChange={(v) => updateForm({ currentPropellant: v })}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="Diesel">Diesel</SelectItem>
                <SelectItem value="Petrol">Petrol</SelectItem>
                <SelectItem value="Electric">Electric</SelectItem>
                <SelectItem value="Hybrid">Hybrid</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}