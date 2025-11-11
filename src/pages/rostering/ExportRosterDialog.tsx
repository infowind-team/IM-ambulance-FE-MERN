// app/roster/ExportRosterDialog.tsx
'use client';

import { useMemo, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Eye, FileDown, X } from 'lucide-react';
import { format, startOfWeek, endOfWeek, startOfMonth, endOfMonth } from 'date-fns';
import { SharedDatePicker } from '@/components/ui/shared-date-picker';
import { Label } from '@/components/ui/label';

type TeamKey = 'shift' | 'office' | 'ops';

const TEAM_OPTIONS = [
  { key: 'shift', label: 'Ground Crew (Shift)', cadence: 'Weekly' },
  { key: 'office', label: 'Ground Crew (Office Hours)', cadence: 'Monthly' },
  { key: 'ops', label: 'Operations', cadence: 'Monthly' },
] as const;

interface ExportRosterDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onPreview: (team: TeamKey, startDate: Date, endDate: Date) => void;
}

export default function ExportRosterDialog({ isOpen, onClose, onPreview }: ExportRosterDialogProps) {
  const [team, setTeam] = useState<TeamKey>('shift');
  const [weekDate, setWeekDate] = useState<Date>(new Date());
  const [monthDate, setMonthDate] = useState<Date>(new Date());

  const selectedTeamOption = TEAM_OPTIONS.find(t => t.key === team)!;
  const isWeekly = selectedTeamOption.cadence === 'Weekly';

  const { start, end, label } = useMemo(() => {
    if (isWeekly) {
      const s = startOfWeek(weekDate, { weekStartsOn: 1 });
      const e = endOfWeek(weekDate, { weekStartsOn: 1 });
      return { start: s, end: e, label: '7 days: Monday to Sunday' };
    } else {
      const s = startOfMonth(monthDate);
      const e = endOfMonth(monthDate);
      return { start: s, end: e, label: `${e.getDate()} days in ${format(s, 'MMMM yyyy')}` };
    }
  }, [isWeekly, weekDate, monthDate]);

  const handlePreview = () => {
    onPreview(team, start, end);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Export Roster</DialogTitle>
          <DialogDescription>
            Select a team and date range to export or preview the roster.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <Label>Select Team <span className="text-red-500">*</span></Label>
            <Select value={team} onValueChange={(v: TeamKey) => setTeam(v)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {TEAM_OPTIONS.map(opt => (
                  <SelectItem key={opt.key} value={opt.key}>
                    <div className="flex items-center justify-between w-full">
                      <span>{opt.label}</span>
                      <span className="text-xs text-muted-foreground ml-3">({opt.cadence})</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>{isWeekly ? 'Select Week' : 'Select Month'} <span className="text-red-500">*</span></Label>
            {isWeekly ? (
              <SharedDatePicker
                date={weekDate}
                onDateChange={setWeekDate}
                mode="week"
              />
            ) : (
              <SharedDatePicker
                date={monthDate}
                onDateChange={setMonthDate}
                mode="month"
              />
            )}
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm font-medium text-gray-700 mb-1">Export Range:</p>
            <p className="text-sm text-gray-900 font-medium">
              {format(start, 'MMM dd, yyyy')} - {format(end, 'MMM dd, yyyy')}
            </p>
            <span className="text-xs text-gray-500 block mt-1">{label}</span>
          </div>

          <div className="flex gap-3 pt-4">
            <Button variant="outline" className="flex-1" onClick={handlePreview}>
              <Eye className="w-4 h-4 mr-2" />
              Preview
            </Button>
            <Button className="flex-1 bg-[#2160AD] hover:bg-[#1d5497]">
              <FileDown className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}