'use client';

import { useState } from 'react';
import { Shield, Syringe, IdCard, Folder, Plus, Download, SquarePen, Trash2, FileText } from 'lucide-react';
import { format } from 'date-fns';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

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
  onAdd: (doc: Omit<Document, 'id' | 'uploadedAt'>) => void;
  onDelete: (id: string) => void;
}

const documentSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  filename: z.string().min(1, 'Filename is required'),
  description: z.string().optional(),
  expiresAt: z.string().optional(),
});

type DocumentFormData = z.infer<typeof documentSchema>;

function DocumentSection({ title, icon, documents, onAdd, onDelete }: SectionProps) {
  const [open, setOpen] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<DocumentFormData>({
    resolver: zodResolver(documentSchema),
  });

  const onSubmit = (data: DocumentFormData) => {
    onAdd({
      title: data.title,
      filename: data.filename,
      description: data.description || '',
      expiresAt: data.expiresAt,
    });
    reset();
    setOpen(false);
  };

  return (
    <Card className='overflow-hidden'>
      <CardHeader className='header-bg-soft pb-6'>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {icon}
            <h4 className="text-base font-medium">{title}</h4>
          </div>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button size="sm" variant='outline' className="h-8 gap-2">
                <Plus className="w-4 h-4" />
                Add {title.includes('Certificate') ? 'Certificate' : title.includes('Vaccination') ? 'Vaccination' : 'Document'}
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add {title}</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="space-y-2">
                  <Label>Title</Label>
                  <Input {...register('title')} placeholder="e.g., Driving License" />
                  {errors.title && <p className="text-sm text-red-500">{errors.title.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label>Filename</Label>
                  <Input {...register('filename')} placeholder="driving_license.pdf" />
                  {errors.filename && <p className="text-sm text-red-500">{errors.filename.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label>Description (Optional)</Label>
                  <Textarea {...register('description')} placeholder="Class 3 License" />
                </div>

                <div className="space-y-2">
                  <Label>Expiry Date (Optional)</Label>
                  <Input type="date" {...register('expiresAt')} />
                </div>

                <div className="flex justify-end gap-2">
                  <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">Add</Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
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
                        <div>Uploaded: {format(new Date(doc.uploadedAt), 'dd/MM/yyyy')}</div>
                        {doc.expiresAt && (
                          <div className="mt-1">
                            Expires: <span className="font-medium">{format(new Date(doc.expiresAt), 'dd/MM/yyyy')}</span>
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
                  <Button size="icon" variant="ghost" className="h-8 w-8">
                    <SquarePen className="w-4 h-4 text-gray-500" />
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
  );
}

export default function DocumentsSection() {
  const [certifications, setCertifications] = useState<Document[]>([
    {
      id: '1',
      title: 'Driving License',
      filename: 'driving_license_class3.pdf',
      description: 'Class 3 License',
      uploadedAt: '2024-01-15',
      expiresAt: '2030-01-14',
    },
    {
      id: '2',
      title: 'BCLS',
      filename: 'bcls_certificate_2024.pdf',
      description: 'Renewed certification',
      uploadedAt: '2024-03-10',
      expiresAt: '2026-03-09',
    },
  ]);

  const [vaccinations, setVaccinations] = useState<Document[]>([
    {
      id: '3',
      title: 'COVID-19',
      filename: 'covid_vaccine_booster.pdf',
      description: 'Booster dose',
      uploadedAt: '2024-01-10',
      expiresAt: '2025-01-09',
    },
    {
      id: '4',
      title: 'Influenza',
      filename: 'flu_vaccine_2024.pdf',
      description: 'Annual vaccination',
      uploadedAt: '2024-10-15',
    },
  ]);

  const [idDocuments, setIdDocuments] = useState<Document[]>([
    {
      id: '5',
      title: 'NRIC',
      filename: 'nric_copy.pdf',
      description: 'NRIC photocopy - both sides',
      uploadedAt: '2024-01-15',
    },
  ]);

  const [employmentDocs, setEmploymentDocs] = useState<Document[]>([
    {
      id: '7',
      title: 'Employment Contract',
      filename: 'employment_contract_signed.pdf',
      description: 'Signed on 15 Jan 2024',
      uploadedAt: '2024-01-15',
    },
  ]);

  const addDocument = (
    section: 'cert' | 'vac' | 'id' | 'emp',
    data: Omit<Document, 'id' | 'uploadedAt'>
  ) => {
    const newDoc: Document = {
      ...data,
      id: Date.now().toString(),
      uploadedAt: new Date().toISOString(),
    };

    switch (section) {
      case 'cert':
        setCertifications((prev) => [...prev, newDoc]);
        break;
      case 'vac':
        setVaccinations((prev) => [...prev, newDoc]);
        break;
      case 'id':
        setIdDocuments((prev) => [...prev, newDoc]);
        break;
      case 'emp':
        setEmploymentDocs((prev) => [...prev, newDoc]);
        break;
    }
  };

  const deleteDocument = (
    section: 'cert' | 'vac' | 'id' | 'emp',
    id: string
  ) => {
    switch (section) {
      case 'cert':
        setCertifications((prev) => prev.filter((d) => d.id !== id));
        break;
      case 'vac':
        setVaccinations((prev) => prev.filter((d) => d.id !== id));
        break;
      case 'id':
        setIdDocuments((prev) => prev.filter((d) => d.id !== id));
        break;
      case 'emp':
        setEmploymentDocs((prev) => prev.filter((d) => d.id !== id));
        break;
    }
  };

  return (
    <div className="space-y-6">
      <DocumentSection
        title="Certifications & Licenses"
        icon={<Shield className="w-5 h-5" />}
        documents={certifications}
        onAdd={(data) => addDocument('cert', data)}
        onDelete={(id) => deleteDocument('cert', id)}
      />

      <DocumentSection
        title="Vaccination Records"
        icon={<Syringe className="w-5 h-5" />}
        documents={vaccinations}
        onAdd={(data) => addDocument('vac', data)}
        onDelete={(id) => deleteDocument('vac', id)}
      />

      <DocumentSection
        title="Identification Documents"
        icon={<IdCard className="w-5 h-5" />}
        documents={idDocuments}
        onAdd={(data) => addDocument('id', data)}
        onDelete={(id) => deleteDocument('id', id)}
      />

      <DocumentSection
        title="Employment-Related Documents"
        icon={<Folder className="w-5 h-5" />}
        documents={employmentDocs}
        onAdd={(data) => addDocument('emp', data)}
        onDelete={(id) => deleteDocument('emp', id)}
      />
    </div>
  );
}