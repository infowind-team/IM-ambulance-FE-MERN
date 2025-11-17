import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { User } from "lucide-react";

type Props = {
  patientName: string; setPatientName: (v: string) => void;
  patientNric: string; setPatientNric: (v: string) => void;
  patientAge: string; setPatientAge: (v: string) => void;
  patientWeight: string; setPatientWeight: (v: string) => void;
  gender: string; setGender: (v: string) => void;
  patientContact: string; setPatientContact: (v: string) => void;
  patientCondition: string; setPatientCondition: (v: string) => void;
};

export default function PatientInfo({
  patientName, setPatientName, patientNric, setPatientNric,
  patientAge, setPatientAge, patientWeight, setPatientWeight,
  gender, setGender, patientContact, setPatientContact,
  patientCondition, setPatientCondition
}: Props) {
  return (
    <div className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div><Label>Patient Name <span className="text-red-500">*</span></Label><Input value={patientName} onChange={e => setPatientName(e.target.value)} placeholder="Enter patient name" /></div>
        <div><Label>NRIC <span className="text-red-500">*</span></Label><Input value={patientNric} onChange={e => setPatientNric(e.target.value)} placeholder="S****567Z" /></div>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <div><Label>Age</Label><Input type="number" value={patientAge} onChange={e => setPatientAge(e.target.value)} placeholder="65" /></div>
        <div><Label>Weight (KG)</Label><Input type="number" value={patientWeight} onChange={e => setPatientWeight(e.target.value)} placeholder="70" /></div>
        <div><Label>Gender</Label>
          <Select value={gender} onValueChange={setGender}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent><SelectItem value="Male">Male</SelectItem><SelectItem value="Female">Female</SelectItem></SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label>Patient Contact</Label>
        <Input value={patientContact} onChange={e => setPatientContact(e.target.value)} placeholder="+65 XXXX XXXX" />
      </div>
      <div>
        <Label>Patient's Condition | Chief Complaint</Label>
        <Textarea value={patientCondition} onChange={e => setPatientCondition(e.target.value)} placeholder="Describe patient's condition or chief complaint..." />
      </div>
    </div>
  );
}