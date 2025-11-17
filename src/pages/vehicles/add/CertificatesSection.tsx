// components/vehicles/add/sections/CertificatesSection.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Shield } from "lucide-react";
import { CertificateRecord } from "./types";
import CertificateTable from "./CertificateTable";

type Props = {
  records: CertificateRecord[];
  setRecords: React.Dispatch<React.SetStateAction<CertificateRecord[]>>;
};

export default function CertificatesSection({ records, setRecords }: Props) {
  const handleAdd = () => {
    const newId = Math.max(...records.map((r) => r.id), 0) + 1;
    setRecords((prev) => [
      ...prev,
      { id: newId, type: "", number: "", issued: "", expiry: "", remarks: "", isEditing: true },
    ]);
  };

  return (
    <Card className="overflow-hidden w-full">
      <CardHeader className="header-bg-soft pb-6">
        <CardTitle className="flex items-center gap-2">
          <Shield className="w-5 h-5" />
          Certificates & Licenses
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Certificate Records</h3>
            <Button type="button" variant="outline" size="sm" onClick={handleAdd}>
              <Plus className="w-4 h-4 mr-2" />
              Add Certificate
            </Button>
          </div>
          <CertificateTable records={records} setRecords={setRecords} />
        </div>
      </CardContent>
    </Card>
  );
}