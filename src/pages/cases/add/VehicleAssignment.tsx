import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Car } from "lucide-react";

type Props = {
  vehicleType: string; setVehicleType: (v: string) => void;
  vehicleNumber: string; setVehicleNumber: (v: string) => void;
  mto: string; setMto: (v: string) => void;
  emt: string; setEmt: (v: string) => void;
  escort: string; setEscort: (v: string) => void;
};

export default function VehicleAssignment({ vehicleType, setVehicleType, vehicleNumber, setVehicleNumber, mto, setMto, emt, setEmt, escort, setEscort }: Props) {
  return (
    <div className="space-y-6 mt-8 pt-8 border-t">
      <div className="flex items-center gap-2"><Car className="w-5 h-5 text-[#2160AD]" /><h4 className="font-semibold text-[#2160AD]">Vehicle Assignment</h4></div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
        <div><Label>Vehicle Type</Label>
          <Select value={vehicleType} onValueChange={setVehicleType}>
            <SelectTrigger><SelectValue placeholder="Select Vehicle Type" /></SelectTrigger>
            <SelectContent>
              {["Ambulance", "ICU Ambulance", "Patient Transport", "Wheelchair Vehicle"].map(v => <SelectItem key={v} value={v}>{v}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        <div><Label>Vehicle Number</Label>
          <Select value={vehicleNumber} onValueChange={setVehicleNumber}>
            <SelectTrigger><SelectValue placeholder="Select Vehicle No." /></SelectTrigger>
            <SelectContent>
              {["AMB001", "AMB002", "AMB003", "ICU001", "PT001"].map(v => <SelectItem key={v} value={v}>{v}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid sm:grid-cols-3 gap-6">
        <div><Label>MTO <span className="text-red-500">*</span></Label><Input value={mto} onChange={e => setMto(e.target.value)} placeholder="Medical Transport Officer" /></div>
        <div><Label>EMT / EN / PRM</Label><Input value={emt} onChange={e => setEmt(e.target.value)} placeholder="Emergency Medical Technician" /></div>
        <div><Label>Escort (Person)</Label><Input value={escort} onChange={e => setEscort(e.target.value)} placeholder="Escort name" /></div>
      </div>
    </div>
  );
}