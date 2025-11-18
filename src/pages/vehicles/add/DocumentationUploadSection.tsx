import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Upload } from "lucide-react";

export default function DocumentationUploadSection() {
  return (
    <Card className="overflow-hidden w-full">
      <CardHeader className="flex flex-col space-y-1.5 px-6 pt-6 header-bg-soft pb-6">
        <CardTitle className="flex items-center gap-2">
          <Upload className="w-5 h-5" />
          Documentation (Optional)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <label htmlFor="document-upload" className="block">
          <input id="document-upload" type="file" multiple className="hidden" accept=".pdf,.doc,.jpg,.png" />
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors space-y-2">
            <div className="flex flex-col items-center gap-4">
              <Upload className="w-8 h-8 mx-auto text-gray-400" />
              <div>
                <p className="text-base text-gray-600">Click to upload files or drag and drop</p>
                <p className="text-sm text-gray-500 mt-1">Registration documents, insurance, etc. (PDF, DOC, JPG up to 10MB)</p>
              </div>
            </div>
          </div>
        </label>
      </CardContent>
    </Card>
  );
}