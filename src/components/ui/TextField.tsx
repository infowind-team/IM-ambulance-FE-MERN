import React from "react";
interface TextFieldProps {
  label: string;
  type?: 'text' | 'password';
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export function TextField({ label, type = 'text', value, onChange, placeholder }: TextFieldProps) {
  return (
    <div className="space-y-2 w-full">
      <label className="block text-sm font-medium text-[#2160AD]">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2160AD] focus:border-[#2160AD] outline-none transition-all pointer-events-auto"
      />
    </div>
  );
}
