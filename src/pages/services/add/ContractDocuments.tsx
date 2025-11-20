// src/components/contracts/sections/ContractDocuments.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Building2 } from "lucide-react";

export default function ContractDocuments() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-[#2160AD]">
          <Building2 className="w-5 h-5" /> Contract Documents
        </CardTitle>
      </CardHeader>
      <CardContent>
        <label htmlFor="document-upload" className="block">
          <input id="document-upload" type="file" multiple className="hidden" accept=".pdf,.doc,.docx,.xls,.xlsx,.txt" />
          <div className="relative border-2 border-dashed rounded-lg p-8 text-center transition-colors border-gray-300 hover:border-[#2160AD] cursor-pointer space-y-2">
            <Building2 className="w-8 h-8 mx-auto text-gray-400" />
            <div className="text-base font-medium text-gray-700">Drag and drop files here</div>
            <div className="text-sm text-gray-500">or click to browse files</div>
            <div className="text-xs text-gray-400">Supports PDF, DOC, DOCX, XLS, XLSX, TXT files</div>
          </div>
        </label>
        <p className="text-sm text-gray-500 mt-4">Upload contract documents, terms of service, or other relevant files</p>
      </CardContent>
    </Card>
  );
}