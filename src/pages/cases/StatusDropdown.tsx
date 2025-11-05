'use client';

import React, { useState } from 'react';

interface StatusDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

export default function StatusDropdown({ value, onChange }: StatusDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const statuses = [
    'All Status',
    'Open',
    'Pending for Dispatch',
    'Dispatched',
    'Pending Confirmation',
    'Pending for Payment',
    'Completed',
    'Cancelled',
  ];

  return (
    <div className="relative w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#f3f3f5] flex h-[36px] items-center justify-between w-full px-[13px] py-px rounded-[8px] cursor-pointer hover:bg-[#e8e8ed] transition-colors"
      >
        <span className="font-['Lato'] text-[16px] leading-[24px] text-neutral-950">
          {value}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-4 opacity-50"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-30"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute z-40 w-full mt-1 bg-white border border-gray-200 rounded-[8px] shadow-lg max-h-[300px] overflow-y-auto">
            {statuses.map((status) => (
              <button
                key={status}
                onClick={() => {
                  onChange(status);
                  setIsOpen(false);
                }}
                className="w-full px-4 py-2 text-left hover:bg-[#f3f3f5] font-['Lato'] text-[16px] text-neutral-950 flex items-center justify-between transition-colors"
              >
                {status}
                {status === value && (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 16 16"
                    stroke="#2160ad"
                    strokeWidth="2"
                  >
                    <path
                      d="M13.3327 4L5.99935 11.3333L2.66602 8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}