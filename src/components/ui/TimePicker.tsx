'use client';

import { forwardRef } from 'react';
import { Clock } from 'lucide-react';

const cn = (...classes: Array<string | boolean | null | undefined>) =>
  classes.filter(Boolean).join(' ');

interface TimePickerProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
  error?: string;
}

export const TimePicker = forwardRef<HTMLInputElement, TimePickerProps>(
  ({ label, required, error, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2 w-full">
        <label className="text-sm font-medium text-base leading-none select-none">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
        <div className="relative">
          <input
            ref={ref}
            type="time"
            className={cn(
              "flex h-9 w-full rounded-md border border-gray-300 bg-white px-3 py-1 text-base transition-all pr-10",
              "focus-visible:ring-2 focus-visible:ring-[#2160AD]/50 focus-visible:outline-none",
              error && "border-red-500",
              className
            )}
            {...props}
          />
          <Clock className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
      </div>
    );
  }
);
TimePicker.displayName = 'TimePicker';