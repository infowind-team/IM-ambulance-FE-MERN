// components/ui/shared-date-picker.tsx
'use client';

import * as React from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';
import { format, addDays, subDays, addMonths, subMonths } from 'date-fns';
import { cn } from './utils';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { DayPicker } from 'react-day-picker';
import "react-day-picker/style.css";

type DatePickerMode = 'day' | 'week' | 'month';

interface SharedDatePickerProps {
  date: Date;
  onDateChange: (date: Date) => void;
  mode: DatePickerMode;
  showWeekRange?: boolean; // Only for week mode
  className?: string;
}

export function SharedDatePicker({
  date,
  onDateChange,
  mode,
  showWeekRange = false,
  className,
}: SharedDatePickerProps) {
  const goPrev = () => {
    if (mode === 'day') onDateChange(subDays(date, 1));
    else if (mode === 'week') onDateChange(subDays(date, 7));
    else if (mode === 'month') onDateChange(subMonths(date, 1));
  };

  const goNext = () => {
    if (mode === 'day') onDateChange(addDays(date, 1));
    else if (mode === 'week') onDateChange(addDays(date, 7));
    else if (mode === 'month') onDateChange(addMonths(date, 1));
  };

  const formatDisplay = () => {
    if (mode === 'month') return format(date, 'MMMM yyyy');
    if (mode === 'week' && showWeekRange) {
      const dayOfWeek = date.getDay();
      const startOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek; // Monday start
      const start = addDays(date, startOffset);
      const end = addDays(start, 6);

      const sameMonth = start.getMonth() === end.getMonth();
      const sameYear = start.getFullYear() === end.getFullYear();

      const formatStart = sameMonth ? format(start, 'MMM d') : format(start, 'MMM d, yyyy');
      const formatEnd = sameYear ? format(end, 'd, yyyy') : format(end, 'MMM d, yyyy');

      return `${formatStart} - ${formatEnd}`;
    }
    return format(date, 'EEEE, MMMM d, yyyy');
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      
      <Button
        variant="ghost"
        size="icon"
        onClick={goPrev}
        className="h-8 w-8 text-[#2160AD] hover:bg-[#2160AD]/10"
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>

      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            className="justify-start text-center text-[#2160AD] text-base font-normal h-9 px-4 hover:bg-[#2160AD]/10"
          >
            <CalendarIcon className="mr-2 h-4 w-4 text-[#2160AD]" />
            {formatDisplay()}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <DayPicker
            mode="single"
            selected={date}
            onSelect={(d) => d && onDateChange(d)}
            showOutsideDays
            className="p-3"
            classNames={{
              day: cn(
                "h-8 w-8 rounded-full text-center text-sm"
              )
            }}
          />
        </PopoverContent>
      </Popover>

      <Button
        variant="ghost"
        size="icon"
        onClick={goNext}
        className="h-8 w-8 text-[#2160AD] hover:bg-[#2160AD]/10"
      >
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );
}