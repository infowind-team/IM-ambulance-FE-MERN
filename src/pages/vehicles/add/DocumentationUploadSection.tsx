// components/vehicles/add/sections/DocumentationUploadSection.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload } from "lucide-react";

export default function DocumentationUploadSection() {
  return (
    <Card className="overflow-hidden w-full">
      <CardHeader className="header-bg-soft pb-6">
        <CardTitle className="flex items-center gap-2">
          <Upload className="w-5 h-5" />
          Documentation (Optional)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors cursor-pointer">
          <Upload className="w-8 h-8 mx-auto text-gray-400" />
          <p className="text-gray-600 mt-2">Click to upload files or drag and drop</p>
          <p className="text-sm text-gray-500 mt-1">
            Registration documents, insurance, etc. (PDF, DOC, JPG up to 10MB)
          </p>
        </div>
      </CardContent>
    </Card>
  );
}