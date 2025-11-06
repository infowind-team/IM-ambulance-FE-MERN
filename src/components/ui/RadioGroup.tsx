'use client';

function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
import { Circle } from 'lucide-react';

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  label: string;
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

export function RadioGroup({
  label,
  options,
  value,
  onChange,
  required,
}: RadioGroupProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium leading-none select-none">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div role="radiogroup" className="flex gap-6">
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            role="radio"
            aria-checked={value === opt.value}
            onClick={() => onChange(opt.value)}
            className="flex items-center gap-2 focus:outline-none"
          >
            <div
              className={cn(
                "w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all",
                value === opt.value
                  ? "border-[#2160AD] bg-[#2160AD]"
                  : "border-gray-300 bg-white"
              )}
            >
              {value === opt.value && (
                <Circle className="w-2 h-2 text-white fill-white" />
              )}
            </div>
            <span className="text-sm font-medium text-base">{opt.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}