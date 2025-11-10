"use client";

import { useState } from "react";
import { Clock, X, Plus } from "lucide-react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

type OfficeHours = {
  weekdays: string[];
  weekdayStart: string;
  weekdayEnd: string;
  weekends: string[];
  weekendStart: string;
  weekendEnd: string;
};

type ConfigureHoursDialogProps = {
  /** Controls the open state from the parent */
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Called when the user clicks “Save” */
  onSave: (data: OfficeHours) => void;
  /** Optional defaults – will be merged with the hard-coded fallbacks */
  defaultValues?: Partial<OfficeHours>;
};

export default function ConfigureHoursDialog({
  open,
  onOpenChange,
  onSave,
  defaultValues = {},
}: ConfigureHoursDialogProps) {
  /* --------------------------------------------------------------- */
  /*  State – merge defaults with hard-coded fallbacks                */
  /* --------------------------------------------------------------- */
  const [selectedWeekdays, setSelectedWeekdays] = useState<string[]>(
    defaultValues.weekdays ?? ["Mon", "Wed", "Thu"]
  );
  const [selectedWeekend, setSelectedWeekend] = useState<string[]>(
    defaultValues.weekends ?? ["Sat"]
  );

  const [weekdayStart, setWeekdayStart] = useState(
    defaultValues.weekdayStart ?? "08:00"
  );
  const [weekdayEnd, setWeekdayEnd] = useState(defaultValues.weekdayEnd ?? "18:00");
  const [weekendStart, setWeekendStart] = useState(
    defaultValues.weekendStart ?? "08:00"
  );
  const [weekendEnd, setWeekendEnd] = useState(defaultValues.weekendEnd ?? "18:00");

  /* --------------------------------------------------------------- */
  /*  Helper – toggle a day in a list                                 */
  /* --------------------------------------------------------------- */
  const toggleDay = (
    days: string[],
    setDays: React.Dispatch<React.SetStateAction<string[]>>,
    day: string
  ) => {
    setDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  /* --------------------------------------------------------------- */
  /*  Save handler                                                    */
  /* --------------------------------------------------------------- */
  const handleSave = () => {
    onSave({
      weekdays: selectedWeekdays,
      weekdayStart,
      weekdayEnd,
      weekends: selectedWeekend,
      weekendStart,
      weekendEnd,
    });
    onOpenChange(false);
  };

  /* --------------------------------------------------------------- */
  /*  Render                                                          */
  /* --------------------------------------------------------------- */
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {/* ----------------------------------------------------------- */}
      {/*  Content                                                    */}
      {/* ----------------------------------------------------------- */}
      <DialogContent
        className="max-w-3xl max-h-[90vh] overflow-y-auto"
        aria-describedby="hours-desc"
      >
        {/* ------------------- Header ------------------- */}
        <DialogHeader className="header-bg-soft p-6 -m-6 mb-6">
          <DialogTitle className="flex items-center gap-2 text-lg font-semibold">
            <Clock className="w-5 h-5" />
            Configure Office Hours
          </DialogTitle>
          <DialogDescription id="hours-desc" className="text-base">
            Define office hours for weekdays and weekends. Any time outside
            these hours will apply non-office hour rates.
          </DialogDescription>
        </DialogHeader>

        {/* ------------------- Body ------------------- */}
        <div className="space-y-6">
          {/* ---------- Weekdays ---------- */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <Label>Weekdays (Monday - Friday)</Label>
              <InfoIcon />
            </div>

            {/* Select days */}
            <div className="space-y-3">
              <Label className="text-sm font-medium text-gray-600">
                Select Weekdays
              </Label>
              <div className="flex flex-wrap gap-2">
                {["Mon", "Tue", "Wed", "Thu", "Fri"].map((d) => (
                  <Button
                    key={d}
                    variant={selectedWeekdays.includes(d) ? "default" : "outline"}
                    onClick={() =>
                      toggleDay(selectedWeekdays, setSelectedWeekdays, d)
                    }
                  >
                    {d}
                  </Button>
                ))}
              </div>
            </div>

            {/* Times */}
            <div className="space-y-3">
              <Label className="text-sm font-medium text-gray-600">
                Office Hours
              </Label>
              <div className="grid grid-cols-2 gap-4">
                <TimeField
                  label="Start Time"
                  value={weekdayStart}
                  onChange={setWeekdayStart}
                />
                <TimeField
                  label="End Time"
                  value={weekdayEnd}
                  onChange={setWeekdayEnd}
                />
              </div>
            </div>
          </section>

          {/* ---------- Weekends & PH ---------- */}
          <section className="space-y-4 pt-6 border-t">
            <div className="flex items-center gap-2">
              <Label>Weekends &amp; PHs</Label>
              <InfoIcon />
            </div>

            {/* Select days */}
            <div className="space-y-3">
              <Label className="text-sm font-medium text-gray-600">
                Select Weekend Days
              </Label>
              <div className="flex gap-2">
                {["Sat", "Sun"].map((d) => (
                  <Button
                    key={d}
                    variant={selectedWeekend.includes(d) ? "default" : "outline"}
                    onClick={() =>
                      toggleDay(selectedWeekend, setSelectedWeekend, d)
                    }
                  >
                    {d}
                  </Button>
                ))}
              </div>
            </div>

            {/* Times */}
            <div className="space-y-3">
              <Label className="text-sm font-medium text-gray-600">
                Office Hours
              </Label>
              <div className="grid grid-cols-2 gap-4">
                <TimeField
                  label="Start Time"
                  value={weekendStart}
                  onChange={setWeekendStart}
                />
                <TimeField
                  label="End Time"
                  value={weekendEnd}
                  onChange={setWeekendEnd}
                />
              </div>
            </div>
          </section>
        </div>

        {/* ------------------- Footer ------------------- */}
        <DialogFooter className="flex gap-3 pt-6 mt-6 border-t">
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button
            className="flex-1 bg-[#2160AD] hover:bg-[#1d5497] text-white"
            onClick={handleSave}
          >
            Save Configuration
          </Button>
        </DialogFooter>

        {/* The primitive already adds a close button – keep it for a11y */}
        {/* If you want to hide it, add `hideCloseButton` prop to DialogContent */}
      </DialogContent>
    </Dialog>
  );
}

/* ----------------------------------------------------------------- */
/* Small reusable components to keep the JSX tidy                     */
/* ----------------------------------------------------------------- */
function InfoIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-info w-4 h-4 text-gray-500 cursor-help"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function TimeField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="space-y-2">
      <Label className="text-sm text-gray-500">{label}</Label>
      <div className="flex items-center gap-2">
        <Clock className="w-4 h-4 text-gray-400" />
        <Input type="time" value={value} onChange={(e) => onChange(e.target.value)} />
      </div>
    </div>
  );
}