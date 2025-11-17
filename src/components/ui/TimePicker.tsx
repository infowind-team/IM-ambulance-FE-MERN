"use client";

import { forwardRef } from "react";
import { Clock } from "lucide-react";
import { Label } from "./label";
import { Input } from "./input";

const cn = (...classes: Array<string | boolean | null | undefined>) =>
  classes.filter(Boolean).join(" ");

interface TimePickerProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
  error?: string;
}

export const TimePicker = forwardRef<HTMLInputElement, TimePickerProps>(
  ({ label, required, error, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2 w-full">
        {label && (
          <Label>
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </Label>
        )}
        <div className="relative">
          <Input
            ref={ref}
            type="time"
            className={cn(error && "border-red-300", className)}
            {...props}
          />
          <Clock className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
        {/* {error && <p className="text-sm text-red-500 mt-1">{error}</p>} */}
      </div>
    );
  }
);
TimePicker.displayName = "TimePicker";
