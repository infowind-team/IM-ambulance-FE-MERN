// components/hrm-dialogs/AdjustLeaveDialog.tsx
"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { PenLine, CalendarIcon, FileText, X } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/components/ui/utils";
import { DatePicker } from "@/components/ui/date-picker";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface LeaveType { value: string; label: string; }
interface Reason { value: string; label: string; }
interface AdjustmentHistory { date: string; type: string; days: string; reason: string; }

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  employeeName: string;
  employeeId: string;
  leaveTypes?: LeaveType[];
  reasons?: Reason[];
  history?: AdjustmentHistory[];
}

const defaultLeaveTypes: LeaveType[] = [
  { value: "annual", label: "Annual Leave" },
  { value: "medical", label: "Medical Leave" },
  { value: "childcare", label: "Childcare Leave" },
  { value: "maternity", label: "Maternity Leave" },
  { value: "paternity", label: "Paternity Leave" },
];

const defaultReasons: Reason[] = [
  { value: "correction", label: "Data Correction" },
  { value: "carry-forward", label: "Carry Forward" },
  { value: "compassionate", label: "Compassionate Grounds" },
  { value: "other", label: "Other" },
];

export default function AdjustLeaveDialog({
  open,
  onOpenChange,
  employeeName,
  employeeId,
  leaveTypes = defaultLeaveTypes,
  reasons = defaultReasons,
  history = [],
}: Props) {
  const [leaveType, setLeaveType] = useState("");
  const [adjustmentDays, setAdjustmentDays] = useState("");
  const [effectiveDate, setEffectiveDate] = useState<Date | undefined>(undefined);
  const [reason, setReason] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");

  const increment = () => setAdjustmentDays((prev) => (parseInt(prev || "0") + 1).toString());
  const decrement = () => setAdjustmentDays((prev) => Math.max(-(parseInt(prev || "0")), parseInt(prev || "0") - 1).toString());

  const handleSave = () => {
    console.log("Adjustment saved:", { employeeId, leaveType, adjustmentDays, effectiveDate, reason, additionalNotes });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl! max-h-[85vh] overflow-y-auto p-0">
        <DialogHeader className="border-b border-[#2160AD]/20 pb-4 p-6">
          <DialogTitle className="text-lg font-semibold text-[#2160AD] flex items-center gap-2">
            <PenLine className="w-5 h-5" />
            Adjust Leave Balance
          </DialogTitle>
          <p className="text-sm text-muted-foreground">
            Make manual adjustments to employee leave entitlements
          </p>
        </DialogHeader>

        <div className="p-6 space-y-5">
          {/* Form */}
          <Card className="overflow-hidden w-full">
            <CardHeader className="header-bg-soft pb-6">
              <CardTitle className="text-gray-900">Leave Adjustment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-gray-500">Employee <span className="text-red-500">*</span></Label>
                  <Input value={employeeName} disabled className="bg-gray-50" />
                </div>
                <div className="space-y-2">
                  <Label className="text-gray-500">Leave Type <span className="text-red-500">*</span></Label>
                  <Select value={leaveType} onValueChange={setLeaveType}>
                    <SelectTrigger><SelectValue placeholder="Select leave type..." /></SelectTrigger>
                    <SelectContent>
                      {leaveTypes.map((t) => (
                        <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-gray-500">Adjustment (Days) <span className="text-red-500">*</span></Label>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="h-8 px-4 border-[#2160AD] text-[#2160AD]" onClick={decrement}>−</Button>
                  <Input type="number" value={adjustmentDays} onChange={(e) => setAdjustmentDays(e.target.value)} className="text-center" placeholder="0" />
                  <Button variant="outline" size="sm" className="h-8 px-4 border-[#2160AD] text-[#2160AD]" onClick={increment}>+</Button>
                </div>
                <p className="text-sm text-gray-600">Use positive to add, negative to deduct</p>
              </div>

              <div className="space-y-2">
                <Label className="text-gray-500">Effective Date (Optional)</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className={cn("w-full justify-start", !effectiveDate && "text-muted-foreground")}>
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {effectiveDate ? format(effectiveDate, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    {/* <Calendar mode="single" selected={effectiveDate} onSelect={setEffectiveDate} initialFocus /> */}
                    <DatePicker mode="single" selected={effectiveDate} onSelect={setEffectiveDate} />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label className="text-gray-500">Reason <span className="text-red-500">*</span></Label>
                <Select value={reason} onValueChange={setReason}>
                  <SelectTrigger><SelectValue placeholder="Select reason" /></SelectTrigger>
                  <SelectContent>
                    {reasons.map((r) => (
                      <SelectItem key={r.value} value={r.value}>{r.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-gray-500">Additional Notes (Optional)</Label>
                <Textarea value={additionalNotes} onChange={(e) => setAdditionalNotes(e.target.value)} placeholder="Add notes..." className="min-h-20" />
              </div>
            </CardContent>
          </Card>

          {/* History */}
          <Card className="overflow-hidden w-full">
            <CardHeader className="header-bg-soft pb-6">
              <CardTitle className="text-gray-900">Adjustment History</CardTitle>
            </CardHeader>
            {history.length === 0 ? (
              <div className="text-center py-16 text-gray-400">
                <FileText className="w-10 h-10 mx-auto mb-3 opacity-20" />
                <p className="text-sm">No past adjustments</p>
              </div>
            ) : (
            <CardContent>
                {history.map((item, i) => (
                <div key={i} className="flex justify-between text-sm border-b pb-2 last:border-0">
                    <div>
                    <p className="font-medium">{item.date}</p>
                    <p className="text-gray-600">{item.type} • {item.reason}</p>
                    </div>
                    <p className={cn("font-medium", item.days.startsWith("-") ? "text-red-600" : "text-green-600")}>
                    {item.days} days
                    </p>
                </div>
                ))}
            </CardContent>
            )}
          </Card>
        </div>

        <DialogFooter className="border-t border-[#2160AD]/20 pt-4 p-6 flex-col-reverse sm:flex-row gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button
            className="bg-[#2160AD] hover:bg-[#1a4d8a]"
            onClick={handleSave}
            disabled={!leaveType || !adjustmentDays || !reason}
          >
            Save Adjustment
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}