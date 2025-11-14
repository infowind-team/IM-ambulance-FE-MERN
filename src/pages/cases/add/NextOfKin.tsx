import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type Props = {
  nokName: string; setNokName: (v: string) => void;
  nokContact: string; setNokContact: (v: string) => void;
  nokRelationship: string; setNokRelationship: (v: string) => void;
  nokAccompanying: string; setNokAccompanying: (v: string) => void;
};

export default function NextOfKin({ nokName, setNokName, nokContact, setNokContact, nokRelationship, setNokRelationship, nokAccompanying, setNokAccompanying }: Props) {
  return (
    <div className="space-y-4">
      <h4 className="font-medium text-[#2160AD]">Next of Kin Details</h4>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label>NOK Name</Label>
          <Input value={nokName} onChange={e => setNokName(e.target.value)} placeholder="Enter NOK name" />
        </div>
        <div>
          <Label>NOK Contact</Label>
          <Input value={nokContact} onChange={e => setNokContact(e.target.value)} placeholder="+65 9123 4567" />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label>Relationship</Label>
          <Select value={nokRelationship} onValueChange={setNokRelationship}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              {["Parent", "Spouse", "Child", "Sibling", "Friend", "Other"].map(r => <SelectItem key={r} value={r}>{r}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Accompanying NOK</Label>
          <Input type="number" value={nokAccompanying} onChange={e => setNokAccompanying(e.target.value)} placeholder="0" />
        </div>
      </div>
    </div>
  );
}