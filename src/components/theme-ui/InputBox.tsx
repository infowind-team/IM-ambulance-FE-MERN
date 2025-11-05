import { Clock } from "lucide-react";
import React from "react";

interface InputBoxProps {
  label: string;
  type?: "text" | "password" | "time" | "date" | "email" | "number";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
}

export function InputBox({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
}: InputBoxProps) {
  const isTimeOrDate = type === "time" || type === "date";

  return (
    <div className="space-y-2 w-full relative">
      <label className="text-base font-medium text-base-optimized mb-2 block">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-10 w-full rounded-md border bg-input-background px-3 py-1 text-base-optimized transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive form-input-height ${
            isTimeOrDate ? "pr-10" : ""
          }`}
        />
        {isTimeOrDate && (
          <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        )}
      </div>
    </div>
  );
}