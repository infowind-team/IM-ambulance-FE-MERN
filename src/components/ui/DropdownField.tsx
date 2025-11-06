'use client';

import { forwardRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const cn = (...classes: Array<string | undefined | null | false>) => {
  return classes.filter(Boolean).join(' ');
};

interface DropdownFieldProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  required?: boolean;
  options: { value: string; label: string }[];
  error?: string;
}

export const DropdownField = forwardRef<HTMLSelectElement, DropdownFieldProps>(
  ({ label, required, options, error, className, ...props }, ref) => {
    const [open, setOpen] = useState(false);

    return (
      <div className="flex flex-col gap-2 w-full">
        <label className="text-sm font-medium text-base leading-none select-none">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
        <div className="relative">
          <select
            ref={ref}
            className={cn(
              "flex h-9 w-full appearance-none items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-1 text-base transition-all",
              "focus-visible:ring-2 focus-visible:ring-[#2160AD]/50 focus-visible:outline-none",
              "disabled:cursor-not-allowed disabled:opacity-50",
              error && "border-red-500 focus-visible:ring-red-500",
              className
            )}
            {...props}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        </div>
        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
      </div>
    );
  }
);
DropdownField.displayName = 'DropdownField';