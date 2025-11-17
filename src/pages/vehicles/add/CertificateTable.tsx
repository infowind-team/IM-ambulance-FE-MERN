// components/vehicles/add/tables/CertificateTable.tsx
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Upload, FileText, SquarePen, Trash2, Check, X } from "lucide-react";
import { CertificateRecord } from ".";

type Props = {
  records: CertificateRecord[];
  setRecords: React.Dispatch<React.SetStateAction<CertificateRecord[]>>;
};

const toIso = (d: string) => d ? `${d.split("/")[2]}-${d.split("/")[1].padStart(2,"0")}-${d.split("/")[0].padStart(2,"0")}` : "";
const toDisplay = (d: string) => d ? `${d.split("-")[2]}/${d.split("-")[1]}/${d.split("-")[0]}` : "";

export default function CertificateTable({ records, setRecords }: Props) {
  const fileRef = useRef<HTMLInputElement>(null);

  const update = (id: number, field: keyof CertificateRecord, value: any) => {
    setRecords(prev => prev.map(r => r.id === id ? {
      ...r,
      [field]: value,
      ...(field === "fileObj" ? { file: (value as File).name } : {})
    } : r));
  };

  const save = (id: number) => setRecords(prev => prev.map(r => r.id === id ? { ...r, isEditing: false } : r));
  const cancel = (id: number) => {
    const r = records.find(x => x.id === id);
    if (r && !r.type && !r.number && !r.issued && !r.expiry && !r.remarks && !r.file) {
      setRecords(prev => prev.filter(x => x.id !== id));
    } else {
      setRecords(prev => prev.map(x => x.id === id ? { ...x, isEditing: false } : x));
    }
  };
  const edit = (id: number) => update(id, "isEditing", true);
  const del = (id: number) => setRecords(prev => prev.filter(x => x.id !== id));

  return (
    <div className="border rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-[#2160AD] hover:bg-[#2160AD]">
            <TableHead className="text-white">Type</TableHead>
            <TableHead className="text-white">Number</TableHead>
            <TableHead className="text-white">Issued</TableHead>
            <TableHead className="text-white">Expiry</TableHead>
            <TableHead className="text-white">Document</TableHead>
            <TableHead className="text-white">Remarks</TableHead>
            <TableHead className="text-white">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {records.map(r => (
            <TableRow key={r.id} className="hover:bg-gray-50">
              {r.isEditing ? (
                <>
                  <TableCell>
                    <Select value={r.type} onValueChange={v => update(r.id, "type", v)}>
                      <SelectTrigger className="h-9"><SelectValue placeholder="Select type" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Vehicle Inspection Certificate (LTA)">Vehicle Inspection Certificate (LTA)</SelectItem>
                        <SelectItem value="Vehicle Insurance">Vehicle Insurance</SelectItem>
                        <SelectItem value="Road Tax">Road Tax</SelectItem>
                        <SelectItem value="COE">COE</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell><Input value={r.number} onChange={e => update(r.id, "number", e.target.value)} className="h-9" placeholder="LTA-2024-001234" /></TableCell>
                  <TableCell><Input type="date" value={toIso(r.issued)} onChange={e => update(r.id, "issued", toDisplay(e.target.value))} className="h-9" /></TableCell>
                  <TableCell><Input type="date" value={toIso(r.expiry)} onChange={e => update(r.id, "expiry", toDisplay(e.target.value))} className="h-9" /></TableCell>
                  <TableCell>
                    <label>
                      <Input ref={fileRef} type="file" accept=".pdf,.jpg,.jpeg,.png" className="hidden" onChange={e => {
                        const f = e.target.files?.[0];
                        if (f) update(r.id, "fileObj", f);
                      }} />
                      <Button size="sm" variant="outline" className="h-8" onClick={() => fileRef.current?.click()}>
                        <Upload className="w-4 h-4 mr-1" /> Upload
                      </Button>
                    </label>
                    {r.file && <div className="mt-1 text-xs text-blue-600 truncate max-w-[100px]">{r.file}</div>}
                  </TableCell>
                  <TableCell>
                    <Textarea value={r.remarks} onChange={e => update(r.id, "remarks", e.target.value)} className="min-h-[40px] resize-none" rows={1} placeholder="Optional notes" />
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button size="icon" variant="ghost" onClick={() => save(r.id)} className="h-8 w-8"><Check className="w-4 h-4 text-green-600" /></Button>
                      <Button size="icon" variant="ghost" onClick={() => cancel(r.id)} className="h-8 w-8"><X className="w-4 h-4 text-red-600" /></Button>
                    </div>
                  </TableCell>
                </>
              ) : (
                <>
                  <TableCell>{r.type}</TableCell>
                  <TableCell>{r.number}</TableCell>
                  <TableCell>{r.issued || "-"}</TableCell>
                  <TableCell>{r.expiry || "-"}</TableCell>
                  <TableCell>
                    {r.file ? (
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-blue-600" />
                        <span className="text-xs text-blue-600 truncate max-w-[120px]">{r.file}</span>
                      </div>
                    ) : <span className="text-xs text-gray-400">-</span>}
                  </TableCell>
                  <TableCell className="text-sm">{r.remarks || "-"}</TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button size="icon" variant="ghost" onClick={() => edit(r.id)}><SquarePen className="w-4 h-4 text-gray-500" /></Button>
                      <Button size="icon" variant="ghost" onClick={() => del(r.id)}><Trash2 className="w-4 h-4 text-red-600" /></Button>
                    </div>
                  </TableCell>
                </>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}