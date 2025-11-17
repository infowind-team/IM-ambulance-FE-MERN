// components/vehicles/add/sections/MaintenanceRecordsSection.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Wrench } from "lucide-react";
import MaintenanceTable from "./MaintenanceTable";
import { MaintenanceRecord } from ".";

type Props = {
  records: MaintenanceRecord[];
  setRecords: React.Dispatch<React.SetStateAction<MaintenanceRecord[]>>;
};

export default function MaintenanceRecordsSection({ records, setRecords }: Props) {
  const handleAdd = () => {
    const newId = Math.max(...records.map((r) => r.id), 0) + 1;
    setRecords((prev) => [
      ...prev,
      { id: newId, lastService: "", nextDue: "", odometer: "", files: 0, fileNames: [], isEditing: true },
    ]);
  };

  return (
    <Card className="overflow-hidden w-full">
      <CardHeader className="header-bg-soft pb-6">
        <CardTitle className="flex items-center gap-2">
          <Wrench className="w-5 h-5" />
          Maintenance & Compliance Records
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Maintenance History</h3>
            <Button type="button" variant="outline" size="sm" onClick={handleAdd}>
              <Plus className="w-4 h-4 mr-2" />
              Add Record
            </Button>
          </div>
          <MaintenanceTable records={records} setRecords={setRecords} />
        </div>
      </CardContent>
    </Card>
  );
}