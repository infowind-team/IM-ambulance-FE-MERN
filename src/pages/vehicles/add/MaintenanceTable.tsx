// components/vehicles/add/tables/MaintenanceTable.tsx
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Upload, Folder, SquarePen, Trash2, Check, X } from "lucide-react";
import { MaintenanceRecord } from ".";
 
type Props = {
  records: MaintenanceRecord[];
  setRecords: React.Dispatch<React.SetStateAction<MaintenanceRecord[]>>;
};

const toIso = (d: string) => d ? `${d.split("/")[2]}-${d.split("/")[1].padStart(2,"0")}-${d.split("/")[0].padStart(2,"0")}` : "";
const toDisplay = (d: string) => d ? `${d.split("-")[2]}/${d.split("-")[1]}/${d.split("-")[0]}` : "";

export default function MaintenanceTable({ records, setRecords }: Props) {
  const fileRef = useRef<HTMLInputElement>(null);

  const update = (id: number, field: keyof MaintenanceRecord, value: any) => {
    setRecords(prev => prev.map(r => r.id === id ? { ...r, [field]: value } : r));
  };

  const upload = (id: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const names = Array.from(files).map(f => f.name);
    update(id, "files", files.length);
    update(id, "fileNames", names);
  };

  const save = (id: number) => setRecords(prev => prev.map(r => r.id === id ? { ...r, isEditing: false } : r));
  const cancel = (id: number) => {
    const r = records.find(x => x.id === id);
    if (r && r.files === 0 && !r.lastService && !r.nextDue && !r.odometer) {
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
            <TableHead className="text-white">Last Service Date</TableHead>
            <TableHead className="text-white">Next Service Due</TableHead>
            <TableHead className="text-white">Current Odometer (km)</TableHead>
            <TableHead className="text-white">Documents</TableHead>
            <TableHead className="text-white">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {records.map(r => (
            <TableRow key={r.id} className="hover:bg-gray-50">
              {r.isEditing ? (
                <>
                  <TableCell><Input type="date" value={toIso(r.lastService)} onChange={e => update(r.id, "lastService", toDisplay(e.target.value))} className="h-9" /></TableCell>
                  <TableCell><Input type="date" value={toIso(r.nextDue)} onChange={e => update(r.id, "nextDue", toDisplay(e.target.value))} className="h-9" /></TableCell>
                  <TableCell><Input value={r.odometer} onChange={e => update(r.id, "odometer", e.target.value)} className="h-9" placeholder="45,230" /></TableCell>
                  <TableCell>
                    <Button size="sm" variant="outline" onClick={() => fileRef.current?.click()} className="h-8"><Upload className="w-4 h-4 mr-1" /> Upload</Button>
                    <input ref={fileRef} type="file" multiple hidden onChange={e => upload(r.id, e)} />
                    {r.files > 0 && <div className="mt-1 text-xs text-blue-600">{r.files} file{r.files > 1 ? "s" : ""}</div>}
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
                  <TableCell>{r.lastService || "-"}</TableCell>
                  <TableCell>{r.nextDue || "-"}</TableCell>
                  <TableCell>{r.odometer}</TableCell>
                  <TableCell>
                    {r.files > 0 ? (
                      <div className="flex items-center gap-2">
                        <Folder className="w-4 h-4 text-blue-600" />
                        <span className="text-xs text-blue-600">{r.files} file{r.files > 1 ? "s" : ""}</span>
                      </div>
                    ) : <span className="text-xs text-gray-400">No files</span>}
                  </TableCell>
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