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
import { VehicleFormData } from ".";

type Props = {
  form: VehicleFormData;
  updateForm: (updates: Partial<VehicleFormData>) => void;
};

export default function VehicleSpecsSection({ form, updateForm }: Props) {
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
            <Input
              value={form.engineNo}
              onChange={(e) => updateForm({ engineNo: e.target.value })}
              placeholder="e.g., 1KDB045665"
            />
          </div>
          <div className="space-y-2">
            <Label>Engine Type</Label>
            <Select value={form.engineType} onValueChange={(v) => updateForm({ engineType: v })}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="Diesel">Diesel</SelectItem>
                <SelectItem value="Petrol">Petrol</SelectItem>
                <SelectItem value="Electric">Electric</SelectItem>
                <SelectItem value="Hybrid">Hybrid</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Maximum Unladen Weight (kg)</Label>
            <Input
              value={form.maxUnladenWeight}
              onChange={(e) => updateForm({ maxUnladenWeight: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label>Maximum Laden Weight (kg)</Label>
            <Input
              value={form.maxLadenWeight}
              onChange={(e) => updateForm({ maxLadenWeight: e.target.value })}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-2">
            <Label>Engine Capacity (cc)</Label>
            <Input
              value={form.engineCapacity}
              onChange={(e) => updateForm({ engineCapacity: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label>Maximum Power Output (kW)</Label>
            <Input
              value={form.maxPowerOutput}
              onChange={(e) => updateForm({ maxPowerOutput: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label>Primary Color</Label>
            <Select value={form.primaryColor} onValueChange={(v) => updateForm({ primaryColor: v })}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="White">White</SelectItem>
                <SelectItem value="Yellow">Yellow</SelectItem>
                <SelectItem value="Blue">Blue</SelectItem>
                <SelectItem value="Red">Red</SelectItem>
                <SelectItem value="Green">Green</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Secondary Color</Label>
            <Select value={form.secondaryColor} onValueChange={(v) => updateForm({ secondaryColor: v })}>
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
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-2">
            <Label>Passenger Capacity</Label>
            <Input
              value={form.passengerCapacity}
              onChange={(e) => updateForm({ passengerCapacity: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label>Wheelchair Accessible</Label>
            <RadioGroup
              value={form.wheelchairAccessible}
              onValueChange={(v) => updateForm({ wheelchairAccessible: v })}
              className="flex gap-4"
            >
              <div className="flex items-center gap-2">
                <RadioGroupItem value="Yes" id="wa-yes" />
                <Label htmlFor="wa-yes" className="m-0">Yes</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="No" id="wa-no" />
                <Label htmlFor="wa-no" className="m-0">No</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="space-y-2">
            <Label>Lifter</Label>
            <RadioGroup
              value={form.lifter}
              onValueChange={(v) => updateForm({ lifter: v })}
              className="flex gap-4"
            >
              <div className="flex items-center gap-2">
                <RadioGroupItem value="Yes" id="lifter-yes" />
                <Label htmlFor="lifter-yes" className="m-0">Yes</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="No" id="lifter-no" />
                <Label htmlFor="lifter-no" className="m-0">No</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="space-y-2">
            <Label>Stretcher Compatible</Label>
            <RadioGroup
              value={form.stretcherCompatible}
              onValueChange={(v) => updateForm({ stretcherCompatible: v })}
              className="flex gap-4"
            >
              <div className="flex items-center gap-2">
                <RadioGroupItem value="Yes" id="stretcher-yes" />
                <Label htmlFor="stretcher-yes" className="m-0">Yes</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="No" id="stretcher-no" />
                <Label htmlFor="stretcher-no" className="m-0">No</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}