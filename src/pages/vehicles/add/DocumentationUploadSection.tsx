import { useMemo, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { AlertCircle, CheckCircle2, FileText, Trash2, Upload } from "lucide-react";
import { cn } from "@/components/ui/utils";

const ACCEPTED_EXTENSIONS = ["pdf", "doc", "docx", "jpg", "jpeg", "png"];
const ACCEPT_ATTR = ACCEPTED_EXTENSIONS.map((ext) => `.${ext}`).join(",");
const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024; // 10MB
const MAX_FILES = 10;

type UploadItem = {
  id: string;
  file: File;
  progress: number;
};

const formatBytes = (bytes: number): string => {
  if (bytes === 0) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(i === 0 ? 0 : 1)} ${units[i]}`;
};

const getFileDescriptor = (file: File): string => {
  const ext = file.name.split(".").pop()?.toUpperCase();
  if (file.type.startsWith("image/")) return "IMAGE";
  if (file.type === "application/pdf") return "PDF";
  if (file.type.includes("word")) return "DOC";
  return ext || "FILE";
};

const createId = (): string =>
  typeof crypto !== "undefined" && crypto.randomUUID
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

const isSupportedFile = (file: File): boolean => {
  const ext = file.name.split(".").pop()?.toLowerCase();
  return !!ext && ACCEPTED_EXTENSIONS.includes(ext);
};

export default function DocumentationUploadSection() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<UploadItem[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [inputKey, setInputKey] = useState(0); // Forces input reset

  const totalSize = useMemo(
    () => files.reduce((sum, item) => sum + item.file.size, 0),
    [files]
  );

  const handleAddFiles = (fileList: FileList | null) => {
    if (!fileList || fileList.length === 0) return;

    setError(null);
    let message: string | null = null;
    const newFiles: UploadItem[] = [];

    const currentSignatures = new Set(
      files.map((f) => `${f.file.name}-${f.file.size}-${f.file.lastModified}`)
    );

    let remainingSlots = MAX_FILES - files.length;

    for (const file of fileList) {
      if (remainingSlots <= 0) {
        message = `Maximum ${MAX_FILES} files allowed.`;
        break;
      }

      if (file.size > MAX_FILE_SIZE_BYTES) {
        message = `"${file.name}" exceeds 10MB limit.`;
        continue;
      }

      if (!isSupportedFile(file)) {
        message = `"${file.name}" has an unsupported format.`;
        continue;
      }

      const signature = `${file.name}-${file.size}-${file.lastModified}`;
      if (currentSignatures.has(signature)) {
        continue; // Skip exact duplicates
      }

      newFiles.push({
        id: createId(),
        file,
        progress: 100,
      });
      currentSignatures.add(signature);
      remainingSlots--;
    }

    if (newFiles.length > 0) {
      setFiles((prev) => [...prev, ...newFiles]);
    }

    if (message) setError(message);

    // This is the magic fix: force re-mount input so onChange always fires
    setInputKey((k) => k + 1);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    handleAddFiles(e.dataTransfer.files);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setIsDragging(false);
    }
  };

  const removeFile = (id: string) => {
    setFiles((prev) => prev.filter((item) => item.id !== id));
  };

  const clearAll = () => {
    setFiles([]);
    setError(null);
  };

  return (
    <Card className="overflow-hidden w-full">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 pb-6">
        <CardTitle className="flex items-center gap-2 text-xl">
          <Upload className="w-5 h-5" />
          Documentation (Optional)
        </CardTitle>
      </CardHeader>

      <CardContent className="pt-6">
        <div className="space-y-6">
          {/* Upload Zone */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => fileInputRef.current?.click()}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                fileInputRef.current?.click();
              }
            }}
            onDragOver={handleDragOver}
            onDragEnter={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={cn(
              "border-2 border-dashed rounded-xl p-10 text-center transition-all cursor-pointer",
              "border-gray-300 hover:border-gray-400",
              isDragging && "border-blue-500 bg-blue-50"
            )}
          >
            <input
              key={inputKey}
              ref={fileInputRef}
              type="file"
              multiple
              accept={ACCEPT_ATTR}
              className="hidden"
              onChange={(e) => handleAddFiles(e.target.files)}
            />

            <Upload className={cn("w-12 h-12 mx-auto", isDragging ? "text-blue-600" : "text-gray-400")} />
            <p className={cn("mt-3 font-medium", isDragging ? "text-blue-600" : "text-gray-700")}>
              {isDragging ? "Drop your files here" : "Click to upload or drag and drop"}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              PDF, DOC, DOCX, JPG, PNG up to 10MB each
            </p>
          </div>

          {/* Footer Info */}
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>Max {MAX_FILES} files • 10MB per file</span>
            <span>
              {files.length} / {MAX_FILES} files selected
            </span>
          </div>

          {/* Error Message */}
          {error && (
            <div className="flex items-center gap-2 rounded-lg border border-orange-200 bg-orange-50 px-4 py-3 text-sm text-orange-800">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Uploaded Files List */}
          {files.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-gray-700">Uploaded Documents</h4>
                <div className="text-sm text-gray-600">
                  {files.length} file{files.length > 1 ? "s" : ""} • {formatBytes(totalSize)}
                </div>
              </div>

              <div className="space-y-3">
                {files.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
                  >
                    <div className="flex-shrink-0 rounded-full bg-blue-100 p-3">
                      <FileText className="w-5 h-5 text-blue-600" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {item.file.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {getFileDescriptor(item.file)} • {formatBytes(item.file.size)}
                      </p>
                      <Progress value={100} className="mt-2 h-1.5" />
                    </div>

                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                      Ready
                    </Badge>

                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => removeFile(item.id)}
                      className="hover:bg-red-50"
                    >
                      <Trash2 className="w-4 h-4 text-gray-500 hover:text-red-600" />
                    </Button>
                  </div>
                ))}
              </div>

              {/* <Button variant="outline" size="sm" onClick={clearAll} className="w-full">
                Clear All Files
              </Button> */}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}