'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface CancelCaseDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (reason: string) => Promise<void> | void;
  caseNumber: string;
}

export default function CancelCaseDialog({
  isOpen,
  onClose,
  onConfirm,
  caseNumber,
}: CancelCaseDialogProps) {
  const [reason, setReason] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleConfirm = async () => {
    if (!reason.trim() || reason.trim().length < 10) return;

    setIsLoading(true);
    try {
      await onConfirm(reason.trim());
      setReason('');
    } catch (error) {
      console.error('Cancellation failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenChange = (open: boolean) => {
    if (!open && !isLoading) {
      setReason('');
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-base">Cancel Case</DialogTitle>
          <DialogDescription className="text-base">
            Please provide a reason for cancelling this case. This action cannot be undone.
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          <Label htmlFor="cancel-reason">
            Reason for Cancellation <span className="text-red-500">*</span>
          </Label>
          <Textarea
            id="cancel-reason"
            placeholder="Enter the reason for cancelling this case..."
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="mt-3 min-h-16 resize-none text-base"
            disabled={isLoading}
          />
          {reason && reason.trim().length > 0 && reason.trim().length < 10 && (
            <p className="text-sm text-orange-600 mt-2">
              Please enter at least 10 characters
            </p>
          )}
        </div>

        <DialogFooter className="gap-3 sm:gap-4">
          <Button
            variant="outline"
            onClick={onClose}
            disabled={isLoading}
            size="lg"
            className="px-8"
          >
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={handleConfirm}
            disabled={!reason.trim() || reason.trim().length < 10 || isLoading}
            size="lg"
            className="px-10 font-semibold"
          >
            {isLoading ? 'Cancelling...' : 'Confirm Cancellation'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}