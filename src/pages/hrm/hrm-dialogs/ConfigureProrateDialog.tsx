'use client';

import { useState } from 'react';
import { X, Settings, Calendar } from 'lucide-react';
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
    RadioGroup,
    RadioGroupItem,
} from '@/components/ui/radio-group';
import { Card } from '@/components/ui/card';

interface ConfigureProrateDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSave?: (method: 'by_month' | 'by_service_days') => void;
}

export default function ConfigureProrateDialog({
    open,
    onOpenChange,
    onSave,
}: ConfigureProrateDialogProps) {
    const [selectedMethod, setSelectedMethod] = useState<'by_month' | 'by_service_days'>('by_month');

    const handleSave = () => {
        onSave?.(selectedMethod);
        onOpenChange(false);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-lg max-w-2xl p-0">
                {/* Header */}
                <DialogHeader className="modal-header-accent header-bg-soft p-6 pb-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Settings className="w-5 h-5 text-[#2160AD]" />
                            <DialogTitle className="text-lg font-semibold text-[#2160AD]">
                                Configure Prorate Calculation
                            </DialogTitle>
                        </div>
                    </div>
                    <p className="text-case mt-1">
                        Choose how leave entitlements are calculated for partial-year employees
                    </p>
                </DialogHeader>

                {/* Body */}
                <div className="p-6 space-y-6">
                    {/* Info Card */}
                    <Card className="modal-info-card p-4 header-bg-soft rounded-md">
                        <p className="text-sm text-gray-700">
                            Pro-rating determines how leave is calculated for employees who haven't worked a full year. This applies to all leave schemes across the system.
                        </p>
                    </Card>

                    {/* Radio Group */}
                    <div className="space-y-4">
                        <Label className=" font-medium">
                            Select Calculation Method <span className="text-red-500">*</span>
                        </Label>

                        <RadioGroup
                            value={selectedMethod}
                            onValueChange={(value) => setSelectedMethod(value as 'by_month' | 'by_service_days')}
                            className="space-y-3"
                        >
                            {/* By Month */}
                            <div
                                className={`p-5 rounded-lg border-2 transition-all cursor-pointer ${selectedMethod === 'by_month'
                                        ? 'border-[#2160AD] bg-[#2160AD]/5'
                                        : 'border-gray-200 hover:border-[#2160AD]/40'
                                    }`}
                            >
                                <div className="flex items-start gap-3">
                                    <RadioGroupItem value="by_month" id="by_month" className="mt-0.5" />
                                    <div className="flex-1">
                                        <Label
                                            htmlFor="by_month"
                                            className="font-semibold text-gray-900 cursor-pointer flex items-center gap-2"
                                        >
                                            <Calendar className="w-4 h-4 text-[#2160AD]" />
                                            By Month
                                        </Label>
                                        <p className="text-sm text-gray-600 mt-2">
                                            Calculates leave based on complete months worked in a year
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* By Service Days */}
                            <div
                                className={`p-5 rounded-lg border-2 transition-all cursor-pointer ${selectedMethod === 'by_service_days'
                                        ? 'border-[#2160AD] bg-[#2160AD]/5'
                                        : 'border-gray-200 hover:border-[#2160AD]/40'
                                    }`}
                            >
                                <div className="flex items-start gap-3">
                                    <RadioGroupItem value="by_service_days" id="by_service_days" className="mt-0.5" />
                                    <div className="flex-1">
                                        <Label
                                            htmlFor="by_service_days"
                                            className="font-semibold text-gray-900 cursor-pointer flex items-center gap-2"
                                        >
                                            <Calendar className="w-4 h-4 text-[#2160AD]" />
                                            By Service Days
                                        </Label>
                                        <p className="text-sm text-gray-600 mt-2">
                                            Calculates leave based on actual days worked (more precise)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </RadioGroup>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-2 p-6 border-t">
                    <DialogClose asChild>
                        <Button variant="outline">
                            Cancel
                        </Button>
                    </DialogClose>
                    <Button
                        onClick={handleSave}
                    >
                        Save Configuration
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}