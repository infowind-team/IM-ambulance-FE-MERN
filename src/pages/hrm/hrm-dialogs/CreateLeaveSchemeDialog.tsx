'use client';

import { useState } from 'react';
import { X, Settings, Calendar, ChevronLeft, ChevronRight, CheckCircle, Plus, Trash2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface CreateLeaveSchemeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave?: (data: LeaveSchemeFormData & { leaveTypes: Array<{ type: string; days: number }> }) => void;
}

export interface LeaveSchemeFormData {
  name: string;
  serviceYearsFrom: number;
  serviceYearsTo: number | null;
  remarks: string;
  childAgeRequirement: number | null;
}

export default function CreateLeaveSchemeDialog({
  open,
  onOpenChange,
  onSave,
}: CreateLeaveSchemeDialogProps) {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const [formData, setFormData] = useState<LeaveSchemeFormData>({
    name: '',
    serviceYearsFrom: 0,
    serviceYearsTo: null,
    remarks: '',
    childAgeRequirement: null,
  });

  const [leaveTypes, setLeaveTypes] = useState<Array<{ type: string; days: number }>>([
    { type: '', days: 0 },
  ]);

  const updateField = (field: keyof LeaveSchemeFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const addLeaveType = () => {
    setLeaveTypes((prev) => [...prev, { type: '', days: 0 }]);
  };

  const removeLeaveType = (index: number) => {
    setLeaveTypes((prev) => prev.filter((_, i) => i !== index));
  };

  const updateLeaveType = (index: number, field: 'type' | 'days', value: string | number) => {
    setLeaveTypes((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      )
    );
  };

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSave = () => {
    const finalData = {
      ...formData,
      leaveTypes: leaveTypes.filter((lt) => lt.type && lt.days > 0),
    };
    onSave?.(finalData);
    onOpenChange(false);
  };

  const isStepValid = () => {
    if (step === 1) {
      return formData.name.trim() !== '' && formData.serviceYearsFrom >= 0;
    }
    if (step === 2) {
      return leaveTypes.some((lt) => lt.type && lt.days > 0);
    }
    return true;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-[1200px]! w-full max-h-[95vh] p-0 flex flex-col overflow-hidden"
        style={{ pointerEvents: 'auto' }}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-10 bg-white border-b">
          <DialogHeader className="header-bg-soft p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                <DialogTitle className="text-lg font-semibold">
                  Create MOM-Compliant Leave Scheme
                </DialogTitle>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Design leave entitlements using Singapore MOM statutory framework with custom company benefits
            </p>
          </DialogHeader>

          {/* Step Indicator */}
          <div className="px-6 py-4 bg-white">
            <div className="flex items-center justify-between max-w-3xl mx-auto">
              <div className="flex items-center flex-1">
                <StepIndicator active={step >= 1} completed={step > 1} icon={<Settings className="w-5 h-5" />} label="Basic Info" />
                <ChevronRight className="w-5 h-5 mx-2 text-gray-300 flex-shrink-0" />
              </div>
              <div className="flex items-center flex-1">
                <StepIndicator active={step === 2} completed={step > 2} icon={<Calendar className="w-5 h-5" />} label="Leave Types" />
                <ChevronRight className="w-5 h-5 mx-2 text-gray-300 flex-shrink-0" />
              </div>
              <div className="flex items-center flex-1">
                <StepIndicator active={step === 3} completed={false} icon={<CheckCircle className="w-5 h-5" />} label="Review" />
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6 max-w-5xl mx-auto">
            {/* Step 1 */}
            {step === 1 && (
              <Card className="border rounded-xl">
                <CardHeader className="pb-6">
                  <h4 className="text-base flex items-center gap-2 font-medium">
                    <Calendar className="w-4 h-4 text-[#2160AD]" />
                    Scheme Configuration
                  </h4>
                </CardHeader>
                <div className="px-6 pb-6 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className=" font-medium">
                        Scheme Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        placeholder="e.g., Senior Staff Enhanced Leave Scheme"
                        value={formData.name}
                        onChange={(e) => updateField('name', e.target.value)}
                        className="form-input-height "
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className=" font-medium">
                        Service Years From <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        type="number"
                        min="0"
                        placeholder="0"
                        value={formData.serviceYearsFrom}
                        onChange={(e) => updateField('serviceYearsFrom', parseInt(e.target.value) || 0)}
                        className="form-input-height "
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className=" font-medium">Service Years To</Label>
                      <Input
                        type="number"
                        min="1"
                        placeholder="Leave blank for 'X+ years'"
                        value={formData.serviceYearsTo ?? ''}
                        onChange={(e) => updateField('serviceYearsTo', e.target.value === '' ? null : parseInt(e.target.value))}
                        className="form-input-height "
                      />
                      <p className="text-xs text-gray-500">Leave blank for open-ended (e.g., "8+ years")</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className=" font-medium">Remarks</Label>
                    <Textarea
                      placeholder="Additional notes about this scheme..."
                      value={formData.remarks}
                      onChange={(e) => updateField('remarks', e.target.value)}
                      className="min-h-20 "
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Child Age Requirement (Optional)</Label>
                    <div className="grid grid-cols-3 gap-3">
                      <Input value="Child Age" disabled className="bg-gray-50 text-black text-sm" />
                      <Input value="Less Than / Equal to" disabled className="bg-gray-50 text-black text-sm" />
                      <Input
                        type="number"
                        placeholder="Age"
                        value={formData.childAgeRequirement ?? ''}
                        onChange={(e) => updateField('childAgeRequirement', e.target.value === '' ? null : parseInt(e.target.value))}
                        className="text-sm text-center"
                      />
                    </div>
                  </div>
                </div>
              </Card>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <Card className="border rounded-xl">
                <CardHeader className="pb-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base flex items-center gap-2">
                      <Settings className="w-4 h-4 text-[#2160AD]" />
                      Leave Types
                    </h4>
                    <Button size="sm" onClick={addLeaveType} className="h-8 gap-2 hover-lift">
                      <Plus className="w-4 h-4" />
                      Add Leave
                    </Button>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Define all leave types and their entitlements for this scheme.
                  </p>
                </CardHeader>

                <div className="px-6 pb-6 space-y-6">
                  {leaveTypes.map((leave, index) => (
                    <Card key={index} className="border-l-4 border-l-[#2160AD] rounded-xl">
                      <div className="px-6 pt-6">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm">Leave Type {index + 1}</h4>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => removeLeaveType(index)}
                            className="h-8 text-red-600 hover:text-red-700 hover:bg-red-50 gap-1.5"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="px-6 pb-6 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label className="text-sm font-medium">
                              Leave Type <span className="text-red-500">*</span>
                            </Label>
                            <Select
                              value={leave.type}
                              onValueChange={(value) => updateLeaveType(index, 'type', value)}
                            >
                              <SelectTrigger className="form-input-height ">
                                <SelectValue placeholder="Select leave type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="annual">Annual Leave</SelectItem>
                                <SelectItem value="medical">Medical Leave</SelectItem>
                                <SelectItem value="childcare">Childcare Leave</SelectItem>
                                <SelectItem value="maternity">Maternity Leave</SelectItem>
                                <SelectItem value="paternity">Paternity Leave</SelectItem>
                                <SelectItem value="study">Study Leave</SelectItem>
                                <SelectItem value="compassionate">Compassionate Leave</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label className="text-sm font-medium">
                              Entitlement Days <span className="text-red-500">*</span>
                            </Label>
                            <Input
                              type="number"
                              min="0"
                              step="0.5"
                              value={leave.days}
                              onChange={(e) => updateLeaveType(index, 'days', parseFloat(e.target.value) || 0)}
                              className="form-input-height "
                            />
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}

                  {leaveTypes.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      No leave types added yet. Click "Add Leave" to start.
                    </div>
                  )}
                </div>
              </Card>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div className="text-center py-12">
                <p className="text-gray-500">Review & Submit (Step 3) – to be implemented</p>
              </div>
            )}
          </div>
        </div>

        {/* Sticky Footer */}
        <div className="sticky bottom-0 bg-white border-t p-4">
          <div className="flex items-center justify-between max-w-5xl mx-auto">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={step === 1}
              className="gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>

            <div className="text-sm text-gray-600">
              Step {step} of {totalSteps}
            </div>

            {step < totalSteps ? (
              <Button
                onClick={handleNext}
                disabled={!isStepValid()}
                className="bg-[#2160AD] hover:bg-[#2160AD]/90 text-white gap-2"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button
                onClick={handleSave}
                className="bg-[#2160AD] hover:bg-[#2160AD]/90 text-white"
              >
                Create Scheme
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Reusable Step Indicator
function StepIndicator({
  active,
  completed,
  icon,
  label,
}: {
  active: boolean;
  completed: boolean;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center flex-1">
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ring-0 ${
          completed ? 'bg-[#23cf65] text-white'
          : active ? 'bg-[#2160AD] text-white ring-[#2160AD]/20 ring-4'
          : 'bg-gray-200 text-gray-500'
        }`}
      >
        {icon}
      </div>
      <span
        className={`mt-2 text-sm font-medium ${
          completed ? 'text-[#23cf65]' : active ? 'text-[#2160AD]' : 'text-gray-500'
        }`}
      >
        {label}
      </span>
    </div>
  );
}