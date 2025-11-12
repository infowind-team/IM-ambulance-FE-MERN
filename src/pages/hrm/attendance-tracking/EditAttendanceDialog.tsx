'use client';

import { useState } from 'react';
import { X, Clock, Save } from 'lucide-react';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface EditAttendanceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave?: (data: AttendanceFormData) => void;
}

export interface AttendanceFormData {
  date: string;
  status: string;
  clockIn: string;
  clockOut: string;
  notes: string;
}

export default function EditAttendanceDialog({
  open,
  onOpenChange,
  onSave,
}: EditAttendanceDialogProps) {
  const [formData, setFormData] = useState<AttendanceFormData>({
    date: '2025-11-12',
    status: 'On Leave',
    clockIn: '',
    clockOut: '',
    notes: '',
  });

  const handleChange = (field: keyof AttendanceFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    onSave?.(formData);
    onOpenChange(false);
  };

  const handleReset = () => {
    setFormData({
      date: '2025-11-12',
      status: 'On Leave',
      clockIn: '',
      clockOut: '',
      notes: '',
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="fixed top-1/2 left-1/2 z-50 w-full max-w-[580px] h-[620px] -translate-x-1/2 -translate-y-1/2 rounded-[10px] bg-white shadow-lg border flex flex-col p-0 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
        style={{ pointerEvents: 'auto' }}
      >
        {/* Header */}
        <DialogHeader className="header-bg-soft p-6 border-b">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-lg font-semibold text-base-optimized">
              Edit Attendance - Annette Black
            </DialogTitle>
          </div>
        </DialogHeader>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 max-h-[calc(620px-120px)]">
          {/* Employee Info */}
          <div className="bg-gray-50 rounded-lg p-4 space-y-4">
            <h3 className="text-base-optimized font-medium text-[#2160AD]">
              Employee Information
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-base-optimized font-medium">Staff Name</Label>
                <div className="bg-white border rounded-lg px-3 py-2 mt-1">
                  <span className="text-base-optimized">Annette Black</span>
                </div>
              </div>
              <div>
                <Label className="text-base-optimized font-medium">Staff ID</Label>
                <div className="bg-white border rounded-lg px-3 py-2 mt-1">
                  <span className="text-base-optimized">1</span>
                </div>
              </div>
            </div>
          </div>

          {/* Attendance Details */}
          <div className="space-y-4">
            <h3 className="text-base-optimized font-medium text-[#2160AD]">
              Attendance Details
            </h3>

            {/* Date */}
            <div>
              <Label className="text-base-optimized font-medium">
                Date <span className="text-red-500">*</span>
              </Label>
              <Input
                type="date"
                value={formData.date}
                onChange={(e) => handleChange('date', e.target.value)}
                className="mt-1 text-base-optimized"
              />
            </div>

            {/* Status */}
            <div>
              <Label className="text-base-optimized font-medium">Status</Label>
              <Select
                value={formData.status}
                onValueChange={(value) => handleChange('status', value)}
              >
                <SelectTrigger className="mt-1 text-base-optimized">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Present">Present</SelectItem>
                  <SelectItem value="On Leave">On Leave</SelectItem>
                  <SelectItem value="Sick Leave">Sick Leave</SelectItem>
                  <SelectItem value="Absent">Absent</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Clock In / Out */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-base-optimized font-medium">
                  Clock In <span className="text-red-500">*</span>
                </Label>
                <div className="relative mt-1">
                  <Input
                    type="time"
                    value={formData.clockIn}
                    onChange={(e) => handleChange('clockIn', e.target.value)}
                    className="pr-10 text-base-optimized"
                    placeholder="--:--"
                  />
                  <Clock className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
              <div>
                <Label className="text-base-optimized font-medium">
                  Clock Out <span className="text-red-500">*</span>
                </Label>
                <div className="relative mt-1">
                  <Input
                    type="time"
                    value={formData.clockOut}
                    onChange={(e) => handleChange('clockOut', e.target.value)}
                    className="pr-10 text-base-optimized"
                    placeholder="--:--"
                  />
                  <Clock className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Notes */}
            <div>
              <Label className="text-base-optimized font-medium">
                Notes (Optional)
              </Label>
              <Input
                type="text"
                value={formData.notes}
                onChange={(e) => handleChange('notes', e.target.value)}
                placeholder="Add any additional notes..."
                className="mt-1 text-base-optimized"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 p-6 pt-4 border-t bg-white">
          <Button variant="outline" onClick={handleReset}>
            Reset
          </Button>
          <DialogClose asChild>
            <Button variant="outline">
              Cancel
            </Button>
          </DialogClose>
          <Button
            onClick={handleSubmit}
          >
            <Save className="w-4 h-4" />
            Save Changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}