'use client';

import { Eye, SquarePen, Calendar, CircleCheck, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardHeader } from '@/components/ui/card';

interface LeaveType {
  name: string;
  entitlement: string;
  serviceYears: string;
  remarks?: string;
}

interface LeaveScheme {
  id: string;
  name: string;
  remarks: string;
  leaveTypes: LeaveType[];
}

interface LeaveSchemeDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  scheme?: LeaveScheme;
  onEdit?: (schemeId: string) => void;
}

// Mock data (replace with real API)
const mockScheme: LeaveScheme = {
  id: '1',
  name: 'Junior Staff Leave Scheme',
  remarks: 'Reduced entitlements for probationary and new hire employees',
  leaveTypes: [
    {
      name: 'Annual Leave',
      entitlement: '7 days',
      serviceYears: '0-1',
      remarks: 'Reduced annual leave for new employees',
    },
  ],
};

export default function LeaveSchemeDetailsDialog({
  open,
  onOpenChange,
  scheme = mockScheme,
  onEdit,
}: LeaveSchemeDetailsDialogProps) {
  const handleEdit = () => {
    onEdit?.(scheme.id);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-[1000px]! w-full max-h-[95vh] overflow-y-auto p-8"
        style={{ pointerEvents: 'auto' }}
      >
        {/* Header */}
        <DialogHeader className="header-bg-soft p-6 -m-8 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-lg font-semibold text-base-optimized flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Leave Scheme Details
              </DialogTitle>
              <p className="text-sm text-gray-600 mt-2">
                Complete overview of {scheme.name}
              </p>
            </div>
            <Button
              onClick={handleEdit}
              className="bg-[#2160AD] hover:bg-[#2160AD]/90 text-white gap-2"
            >
              <SquarePen className="w-4 h-4" />
              Edit Scheme
            </Button>
          </div>
        </DialogHeader>

        {/* Body */}
        <div className="space-y-6">
          {/* Summary Card */}
          <Card className="bg-gradient-to-br from-blue-50 to-white border-[#2160AD]/20">
            <CardHeader className='pb-6'>
              <h4 className="text-base flex items-center gap-2">
                <CircleCheck className="w-5 h-5 text-[#23cf65]" />
                Leave Scheme Summary
              </h4>
            </CardHeader>
            <div className="px-6 pb-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Scheme Name</p>
                  <p className="text-base-optimized font-medium text-[#2160AD]">
                    {scheme.name}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600">Remarks</p>
                <p className="text-sm text-gray-700 mt-1">{scheme.remarks}</p>
              </div>
            </div>
          </Card>

          {/* Leave Types */}
          {scheme.leaveTypes.map((leave, index) => (
            <Card key={index}>
              <CardHeader className="pb-6">
                <h4 className="text-base flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#2160AD]" />
                  Leave Types - {leave.serviceYears} years
                </h4>
              </CardHeader>
              <div className="px-6 pb-6">
                <div className="space-y-4">
                  <div className="bg-white p-4 border-2 border-gray-200 rounded-lg hover:border-[#2160AD]/30 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-medium text-base text-gray-900">
                        {leave.name}
                      </h4>
                    </div>

                    <div className="mb-3">
                      <p className="text-xs text-gray-500 mb-1">Entitlement</p>
                      <p className="text-lg font-semibold text-[#2160AD]">
                        {leave.entitlement}
                      </p>
                    </div>

                    <div className="mb-3">
                      <p className="text-xs font-medium text-gray-700 mb-2">
                        Eligibility Conditions
                      </p>
                      <div className="space-y-1">
                        <div className="text-xs text-gray-600 flex items-center gap-2">
                          <span className="w-1 h-1 bg-[#2160AD] rounded-full"></span>
                          <span className="capitalize">service years</span>
                          <span className="text-gray-400">between</span>
                          <span className="font-medium">{leave.serviceYears}</span>
                        </div>
                      </div>
                    </div>

                    {leave.remarks && (
                      <div className="text-xs text-gray-600 pt-3 border-t border-gray-200">
                        <span className="font-medium">Remarks:</span>{' '}
                        {leave.remarks}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-2 mt-6 pt-4 border-t">
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </div>
        
      </DialogContent>
    </Dialog>
  );
}