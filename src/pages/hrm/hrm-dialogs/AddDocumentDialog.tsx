"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Upload, FileText } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

type DocumentType = "license" | "vaccination" | "id" | "employment";

interface Document {
    id?: string;
    title: string;
    filename: string;
    description: string;
    expiresAt?: string;
    // raw fields for parsing
    raw?: any;
}

interface Props {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    type: DocumentType;
    document?: Document | null; // null = add, object = edit
    onSuccess: (data: {
        title: string;
        filename: string;
        description: string;
        expiresAt?: string;
    }) => void;
}

const licenseTypes = ["Driving License", "BCLS", "ACLS", "PDVL", "TDVL", "Vocational License"];
const vaccineTypes = ["COVID-19", "Influenza", "Hepatitis B", "MMR", "Tdap"];
const idDocTypes = ["NRIC", "Passport", "Work Permit", "FIN Card"];
const employmentDocTypes = ["Employment Contract", "Offer Letter", "Payslip", "Appraisal Form", "Warning Letter"];

const dialogTitles = {
    license: "Certification/License",
    vaccination: "Vaccination Record",
    id: "Identification Document",
    employment: "Employment Document",
};

export default function AddDocumentDialog({ open, onOpenChange, type, document, onSuccess }: Props) {
    const isEdit = !!document;
    const [fileName, setFileName] = useState(document?.filename || "No file chosen");

    const schema = z.object({
        ...(type === "license" && {
            type: z.string().min(1),
            classOrCategory: z.string().min(1),
            certificateNumber: z.string().min(1),
            dateIssued: z.string().min(1),
            expiryDate: z.string().optional(),
        }),
        ...(type === "vaccination" && {
            vaccineType: z.string().min(1),
            dateTaken: z.string().min(1),
            expiryDate: z.string().optional(),
        }),
        ...(type === "id" && {
            docType: z.string().min(1),
            docNumber: z.string().min(1),
            expiryDate: z.string().optional(),
        }),
        ...(type === "employment" && {
            docType: z.string().min(1),
        }),
        remarks: z.string().optional(),
    });

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        reset,
        formState: { errors },
    } = useForm<any>({
        resolver: zodResolver(schema),
    });

    // Reset + Pre-fill on open/edit
    useEffect(() => {
        if (!open) {
            reset();
            setFileName("No file chosen");
            return;
        }

        if (isEdit && document) {
            setFileName(document.filename);

            if (type === "license") {
                const match = document.title.match(/^(.*?) - (.*)$/);
                setValue("type", match ? match[1].trim() : document.title);
                setValue("classOrCategory", match ? match[2] : "");
                setValue("certificateNumber", document.raw?.certificateNumber || "");
                setValue("dateIssued", document.raw?.dateIssued || "");
                setValue("expiryDate", document.expiresAt || "");
                setValue("remarks", document.description);
            }
            if (type === "vaccination") {
                setValue("vaccineType", document.title);
                setValue("dateTaken", document.raw?.dateTaken || "");
                setValue("expiryDate", document.expiresAt || "");
                setValue("remarks", document.description);
            }
            if (type === "id") {
                const match = document.title.match(/^(.*?) - (.*)$/);
                setValue("docType", match ? match[1].trim() : document.title);
                setValue("docNumber", match ? match[2] : "");
                setValue("expiryDate", document.expiresAt || "");
                setValue("remarks", document.description);
            }
            if (type === "employment") {
                setValue("docType", document.title);
                setValue("remarks", document.description);
            }
        }
    }, [open, document, isEdit, type, setValue, reset]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) setFileName(file.name);
    };

    const onSubmit = (data: any) => {
        let result: any = {
            title: "",
            filename: fileName === "No file chosen" ? "document.pdf" : fileName,
            description: data.remarks || "",
            expiresAt: undefined,
        };

        switch (type) {
            case "license":
                result.title = `${data.type} - ${data.classOrCategory}`;
                result.description = data.remarks || `${data.classOrCategory} License`;
                result.expiresAt = data.expiryDate;
                break;
            case "vaccination":
                result.title = data.vaccineType;
                result.expiresAt = data.expiryDate;
                break;
            case "id":
                result.title = `${data.docType} - ${data.docNumber}`;
                result.expiresAt = data.expiryDate;
                break;
            case "employment":
                result.title = data.docType;
                break;
        }

        onSuccess(result);
        onOpenChange(false);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="w-full max-w-2xl max-h-[90vh] p-0">
                <DialogHeader className="header-bg-soft p-6 border-b">
                    <DialogTitle className="text-[#2160AD]">
                        {isEdit ? "Edit" : "Add"} {dialogTitles[type]}
                    </DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit(onSubmit)} className="">
                    <div className="flex-1 overflow-y-auto p-6 space-y-6 max-h-[calc(90vh-200px)]">
                        <div className="space-y-4">
                            {/* Your exact field layout from the code you sent */}
                            {type === "license" && (
                                <>
                                    <div>
                                        <Label className="modal-field-label modal-field-required">Type</Label>
                                        <Select onValueChange={(v) => setValue("type", v)} value={watch("type") || "Driving License"}>
                                            <SelectTrigger className="form-input-height">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {licenseTypes.map((t) => (
                                                    <SelectItem key={t} value={t}>{t}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div>
                                        <Label>Class/Category</Label>
                                        <Input {...register("classOrCategory")} placeholder="e.g., Class 3" className="form-input-height" />
                                    </div>
                                    <div>
                                        <Label>Certificate Number</Label>
                                        <Input {...register("certificateNumber")} placeholder="e.g., 12345678A" className="form-input-height" />
                                    </div>
                                    <div>
                                        <Label className="modal-field-required">Date Issued</Label>
                                        <Input type="date" {...register("dateIssued")} className="form-input-height" />
                                    </div>
                                    <div>
                                        <Label>Expiry Date</Label>
                                        <Input type="date" {...register("expiryDate")} className="form-input-height" />
                                    </div>
                                </>
                            )}

                            {type === "vaccination" && (
                                <>
                                    <div>
                                        <Label className="modal-field-label modal-field-required">Vaccine Type</Label>
                                        <Select onValueChange={(v) => setValue("vaccineType", v)} value={watch("vaccineType")}>
                                            <SelectTrigger className="form-input-height">
                                                <SelectValue placeholder="Select vaccine" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {vaccineTypes.map((v) => (
                                                    <SelectItem key={v} value={v}>{v}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div>
                                        <Label className="modal-field-required">Date Taken</Label>
                                        <Input type="date" {...register("dateTaken")} className="form-input-height" />
                                    </div>
                                    <div>
                                        <Label>Expiry Date</Label>
                                        <Input type="date" {...register("expiryDate")} className="form-input-height" />
                                    </div>
                                </>
                            )}

                            {type === "id" && (
                                <>
                                    <div>
                                        <Label className="modal-field-label modal-field-required">Document Type</Label>
                                        <Select onValueChange={(v) => setValue("docType", v)} value={watch("docType") || "NRIC"}>
                                            <SelectTrigger className="form-input-height">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {idDocTypes.map((d) => (
                                                    <SelectItem key={d} value={d}>{d}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div>
                                        <Label className="modal-field-required">Document Number</Label>
                                        <Input {...register("docNumber")} placeholder="e.g., S1234567A" className="form-input-height" />
                                    </div>
                                    <div>
                                        <Label>Expiry Date</Label>
                                        <Input type="date" {...register("expiryDate")} className="form-input-height" />
                                    </div>
                                </>
                            )}

                            {type === "employment" && (
                                <div>
                                    <Label className="modal-field-label modal-field-required">Document Type</Label>
                                    <Select onValueChange={(v) => setValue("docType", v)} value={watch("docType") || "Employment Contract"}>
                                        <SelectTrigger className="form-input-height">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {employmentDocTypes.map((d) => (
                                                <SelectItem key={d} value={d}>{d}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            )}

                            {/* File Upload */}
                            <div>
                                <Label className="modal-field-required">Upload Document</Label>
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-[#2160AD] transition-colors cursor-pointer">
                                    <input
                                        type="file"
                                        accept=".pdf,.jpg,.jpeg,.png"
                                        className="hidden"
                                        id="file-upload"
                                        onChange={handleFileChange}
                                    />
                                    <label htmlFor="file-upload" className="cursor-pointer text-center block">
                                        <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                                        <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                                        <p className="text-xs text-gray-500 mt-1">PDF, JPG, PNG (Max 10MB)</p>
                                        {fileName !== "No file chosen" && (
                                            <p className="mt-3 text-sm font-medium text-[#2160AD] flex items-center justify-center gap-2">
                                                <FileText className="w-4 h-4" /> {fileName}
                                            </p>
                                        )}
                                    </label>
                                </div>
                            </div>

                            {/* Remarks */}
                            <div>
                                <Label>Remarks</Label>
                                <Textarea
                                    {...register("remarks")}
                                    placeholder="Add any additional notes..."
                                    className="min-h-[80px]"
                                />
                            </div>
                        </div>
                    </div>

                    <DialogFooter className="flex justify-end gap-3 p-6 pt-4 border-t bg-white">
                        <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                            Cancel
                        </Button>
                        <Button type="submit">
                            {isEdit ? "Save Changes" : "Add Document"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}