"use client";

import { useState } from "react";
import { Shield, Syringe, IdCard, Folder, Plus, Download, SquarePen, Trash2, FileText } from "lucide-react";
import { format } from "date-fns";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import AddDocumentDialog from "../hrm-dialogs/AddDocumentDialog";

interface Document {
  id: string;
  title: string;
  filename: string;
  description: string;
  uploadedAt: string;
  expiresAt?: string;
}

interface SectionProps {
  title: string;
  icon: React.ReactNode;
  documents: Document[];
  type: "license" | "vaccination" | "id" | "employment";
  onAdd: (doc: Omit<Document, "id" | "uploadedAt">) => void;
  onEdit: (id: string, doc: Omit<Document, "id" | "uploadedAt">) => void;
  onDelete: (id: string) => void;
}

function DocumentSection({ title, icon, documents, type, onAdd, onEdit, onDelete }: SectionProps) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingDoc, setEditingDoc] = useState<Document | null>(null);

  const handleEdit = (doc: Document) => {
    setEditingDoc(doc);
    setDialogOpen(true);
  };

  const handleSuccess = (data: Omit<Document, "id" | "uploadedAt">) => {
    if (editingDoc) {
      onEdit(editingDoc.id, data);
    } else {
      onAdd(data);
    }
    setEditingDoc(null);
    setDialogOpen(false);
  };

  return (
    <>
      <Card className="overflow-hidden">
        <CardHeader className="header-bg-soft pb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {icon}
              <h4 className="text-base font-medium">{title}</h4>
            </div>

            {/* Add Button */}
            <Button
              size="sm"
              variant="outline"
              className="gap-2"
              onClick={() => {
                setEditingDoc(null);
                setDialogOpen(true);
              }}
            >
              <Plus className="w-4 h-4" />
              Add {type === 'license' ? 'Certificate' : type === 'id' ? 'ID Document' : type === 'vaccination' ? 'Vaccination' : 'Document'}
            </Button>
          </div>
        </CardHeader>

        <CardContent>
          <div className="space-y-3">
            {documents.length === 0 ? (
              <p className="text-center text-gray-500 py-8">No documents added yet.</p>
            ) : (
              documents.map((doc) => (
                <div
                  key={doc.id}
                  className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div className="p-2 bg-[#2160AD]/10 rounded-lg">
                      <FileText className="w-5 h-5 text-[#2160AD]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{doc.title}</h4>
                          <p className="text-sm text-gray-500 mt-1">{doc.filename}</p>
                          {doc.description && (
                            <p className="text-sm text-gray-600 mt-1 italic">{doc.description}</p>
                          )}
                        </div>
                        <div className="text-right text-sm text-gray-500 shrink-0">
                          <div>Uploaded: {format(new Date(doc.uploadedAt), "dd/MM/yyyy")}</div>
                          {doc.expiresAt && (
                            <div className="mt-1">
                              Expires: <span className="font-medium">{format(new Date(doc.expiresAt), "dd/MM/yyyy")}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 ml-4">
                    <Button size="icon" variant="ghost" className="h-8 w-8">
                      <Download className="w-4 h-4 text-gray-500" />
                    </Button>

                    {/* Edit Button */}
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8"
                      onClick={() => handleEdit(doc)}
                    >
                      <SquarePen className="w-4 h-4 text-[#2160AD]" />
                    </Button>

                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 text-red-600 hover:text-red-700"
                      onClick={() => onDelete(doc.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>

      {/* Single Reusable Dialog - Handles Both Add & Edit */}
      <AddDocumentDialog
        open={dialogOpen}
        onOpenChange={(open) => {
          setDialogOpen(open);
          if (!open) setEditingDoc(null);
        }}
        type={type}
        document={editingDoc || undefined}
        onSuccess={handleSuccess}
      />
    </>
  );
}

export default function DocumentsSection() {
  const [certifications, setCertifications] = useState<Document[]>([
    { id: "1", title: "Driving License", filename: "driving_license_class3.pdf", description: "Class 3 License", uploadedAt: "2024-01-15", expiresAt: "2030-01-14" },
    { id: "2", title: "BCLS", filename: "bcls_certificate_2024.pdf", description: "Renewed certification", uploadedAt: "2024-03-10", expiresAt: "2026-03-09" },
  ]);

  const [vaccinations, setVaccinations] = useState<Document[]>([
    { id: "3", title: "COVID-19", filename: "covid_vaccine_booster.pdf", description: "Booster dose", uploadedAt: "2024-01-10", expiresAt: "2025-01-09" },
    { id: "4", title: "Influenza", filename: "flu_vaccine_2024.pdf", description: "Annual vaccination", uploadedAt: "2024-10-15" },
  ]);

  const [idDocuments, setIdDocuments] = useState<Document[]>([
    { id: "5", title: "NRIC", filename: "nric_copy.pdf", description: "NRIC photocopy - both sides", uploadedAt: "2024-01-15" },
  ]);

  const [employmentDocs, setEmploymentDocs] = useState<Document[]>([
    { id: "7", title: "Employment Contract", filename: "employment_contract_signed.pdf", description: "Signed on 15 Jan 2024", uploadedAt: "2024-01-15" },
  ]);

  const addDocument = (section: string, data: Omit<Document, "id" | "uploadedAt">) => {
    const newDoc = { ...data, id: Date.now().toString(), uploadedAt: new Date().toISOString() };
    updateSection(section, (prev) => [...prev, newDoc]);
  };

  const editDocument = (section: string, id: string, data: Omit<Document, "id" | "uploadedAt">) => {
    updateSection(section, (prev) =>
      prev.map((doc) => (doc.id === id ? { ...doc, ...data, uploadedAt: new Date().toISOString() } : doc))
    );
  };

  const deleteDocument = (section: string, id: string) => {
    updateSection(section, (prev) => prev.filter((d) => d.id !== id));
  };

  const updateSection = (section: string, updater: (prev: Document[]) => Document[]) => {
    if (section === "certifications") setCertifications(updater);
    if (section === "vaccinations") setVaccinations(updater);
    if (section === "idDocuments") setIdDocuments(updater);
    if (section === "employmentDocs") setEmploymentDocs(updater);
  };

  return (
    <div className="space-y-6">
      <DocumentSection
        title="Certifications & Licenses"
        icon={<Shield className="w-5 h-5" />}
        documents={certifications}
        type="license"
        onAdd={(data) => addDocument("certifications", data)}
        onEdit={(id, data) => editDocument("certifications", id, data)}
        onDelete={(id) => deleteDocument("certifications", id)}
      />

      <DocumentSection
        title="Vaccination Records"
        icon={<Syringe className="w-5 h-5" />}
        documents={vaccinations}
        type="vaccination"
        onAdd={(data) => addDocument("vaccinations", data)}
        onEdit={(id, data) => editDocument("vaccinations", id, data)}
        onDelete={(id) => deleteDocument("vaccinations", id)}
      />

      <DocumentSection
        title="Identification Documents"
        icon={<IdCard className="w-5 h-5" />}
        documents={idDocuments}
        type="id"
        onAdd={(data) => addDocument("idDocuments", data)}
        onEdit={(id, data) => editDocument("idDocuments", id, data)}
        onDelete={(id) => deleteDocument("idDocuments", id)}
      />

      <DocumentSection
        title="Employment-Related Documents"
        icon={<Folder className="w-5 h-5" />}
        documents={employmentDocs}
        type="employment"
        onAdd={(data) => addDocument("employmentDocs", data)}
        onEdit={(id, data) => editDocument("employmentDocs", id, data)}
        onDelete={(id) => deleteDocument("employmentDocs", id)}
      />
    </div>
  );
}