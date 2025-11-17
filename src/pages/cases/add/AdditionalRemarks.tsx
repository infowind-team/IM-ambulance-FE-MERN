// @/components/cases/add/AdditionalRemarks.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { FileText } from "lucide-react";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function AdditionalRemarks({ value, onChange }: Props) {
  return (
    <Card>
      <CardHeader className="header-bg-soft pb-6">
        <CardTitle className="flex items-center gap-2">
          <FileText className="w-5 h-5" />
          Additional Remarks
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Textarea
          placeholder="Enter any special instructions, medical notes, or additional information..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={5}
          className="resize-none"
        />
      </CardContent>
    </Card>
  );
}