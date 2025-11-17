"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface AssignStatusDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onUnassign: () => void;
  staffName: string;
}

export default function AssignStatusDialog({
  isOpen,
  onClose,
  onUnassign,
  staffName,
}: AssignStatusDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] p-16">
        {/* Message */}
        <div className="text-xl font-normal text-black text-center mb-9">
          <h2 className="text-2xl font-bold text-black mb-9">Unassign Staff?</h2>
          <p className="mb-0">Are you sure you want to</p>
          <p>
            <span className="font-bold">unassign {staffName}</span>?
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-6 justify-center">
          <Button
            onClick={onClose}
            className="bg-[#2160ad] text-white px-8 py-4 h-auto rounded-[44px] text-xl font-normal hover:bg-[#1d5497]"
          >
            Cancel
          </Button>

          <Button
            variant="outline"
            onClick={() => {
              onUnassign();
              onClose();
            }}
            className="bg-white text-black border-2 border-[#2160ad] px-8 py-4 h-auto rounded-[44px] text-xl font-normal hover:bg-gray-50"
          >
            Unassign
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
