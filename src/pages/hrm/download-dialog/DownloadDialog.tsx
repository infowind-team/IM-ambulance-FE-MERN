'use client';

import { useState } from 'react';
import { Download, ChevronDown, X } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

interface Employee {
    id: string;
    name: string;
}

interface DownloadDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    employees?: Employee[];
    onDownload?: (employeeId: string) => void;
}

const mockEmployees: Employee[] = [
    {
        id: 'ADBFC008', name: 'Annette Black',
    },
    {
        id: 'JLIU002', name: 'Jennifer Liu',
    },
    {
        id: 'OPS001', name: 'Marcus Chen',
    },
    {
        id: 'HR001', name: 'Rebecca Taylor',
    },
];

const employees = [

];

export default function DownloadDialog({
    open,
    onOpenChange,
    employees = mockEmployees,
    onDownload,
}: DownloadDialogProps) {
    const [selectedEmployee, setSelectedEmployee] = useState<string>('');

    const handleDownload = () => {
        if (selectedEmployee) {
            onDownload?.(selectedEmployee);
            onOpenChange(false);
            setSelectedEmployee('');
        }
    };

    const handleClose = () => {
        setSelectedEmployee('');
        onOpenChange(false);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md p-0">
                {/* Header */}
                <DialogHeader className="p-6 pb-4">
                    <div className="flex items-center justify-between">
                        <DialogTitle className="text-lg font-semibold text-[#2160AD]">
                            Download Leave Entitlement
                        </DialogTitle>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                        Select an employee to download their leave entitlement details
                    </p>
                </DialogHeader>

                {/* Body */}
                <div className="p-6 pt-0 space-y-4">
                    <div className="space-y-2">
                        <Label className="text-sm font-medium">Select Employee</Label>
                        <Select value={selectedEmployee} onValueChange={setSelectedEmployee}>
                            <SelectTrigger className="h-9 text-base-optimized">
                                <SelectValue placeholder="Choose an employee" />
                            </SelectTrigger>
                            <SelectContent>
                                {employees.map((emp) => (
                                    <SelectItem key={emp.id} value={emp.id}>
                                        <div className="flex flex-col">
                                            <span className="font-medium">{emp.name} ({emp.id})</span>
                                        </div>
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-end gap-2 p-6 border-t">
                    <DialogClose asChild>
                        <Button variant="outline" onClick={handleClose}>
                            Cancel
                        </Button>
                    </DialogClose>
                    <Button
                        onClick={handleDownload}
                        disabled={!selectedEmployee}
                    >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}