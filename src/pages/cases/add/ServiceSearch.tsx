// components/theme-ui/ServiceSearch.tsx
"use client";

import * as React from "react";
import { Command } from "cmdk";
import * as Popover from "@radix-ui/react-popover";
import { Plus, X } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export interface Service {
  value: string;
  label: string;
  price: string;
  unit: string;
}

export const ALL_SERVICES: Service[] = [
  { value: "Oxygen Support", label: "Oxygen Support", unit: "per day", price: "$50" },
  { value: "Wheelchair Service", label: "Wheelchair Service", unit: "per service", price: "$25" },
  { value: "Stretcher Service", label: "Stretcher Service", unit: "per service", price: "$35" },
  { value: "Medical Escort", label: "Medical Escort", unit: "per hour", price: "$75" },
  { value: "Standby Service", label: "Standby Service", unit: "per day", price: "$120" },
  { value: "A&E Transfer", label: "A&E Transfer", unit: "per hour", price: "$80" },
  { value: "Dialysis Transport", label: "Dialysis Transport", unit: "per service", price: "$45" },
  { value: "IV Therapy Support", label: "IV Therapy Support", unit: "per trip", price: "$65" },
  { value: "Emergency Equipment", label: "Emergency Equipment", unit: "per trip", price: "$65" },
];

interface ServiceSearchProps {
  value: string;
  onChange: (value: string) => void;
  onSelect?: (service: Service | null) => void;
  placeholder?: string;
  label?: string;
  required?: boolean;
}

export function ServiceSearch({
  value,
  onChange,
  onSelect,
  placeholder = "Search or add custom service...",
  label = "Add Service",
  required = false,
}: ServiceSearchProps) {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");

  const filtered = React.useMemo(() => {
    if (!search) return ALL_SERVICES;
    const lower = search.toLowerCase();
    return ALL_SERVICES.filter(
      (s) =>
        s.label.toLowerCase().includes(lower) ||
        s.value.toLowerCase().includes(lower)
    );
  }, [search]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearch(val);
    onChange(val);
    setOpen(true);
  };

  const handleSelect = (service: Service) => {
    setSearch(service.label);
    onChange(service.label);
    onSelect?.(service);
    setOpen(false);
  };

  const handleCustomAdd = () => {
    if (search.trim() && !ALL_SERVICES.some((s) => s.label === search)) {
      onSelect?.(null);
      setOpen(false);
    }
  };
  
  const handleClear = () => {
    setSearch("");
    onChange("");
    setOpen(false);
  };

  return (
    <div className="space-y-2 w-full">
      {label && (
        <Label className="text-base font-medium text-base-optimized mb-2 block">
          {label} {required && <span className="text-red-500">*</span>}
        </Label>
      )}

      <Popover.Root open={open} onOpenChange={setOpen}>
        <Popover.Trigger asChild>
          <div className="relative">
            <Input
              type="text"
              value={search}
              onChange={handleInputChange}
              placeholder={placeholder}
              className="w-full pr-10" // padding-right for clear button
            />

            {/* Clear Button */}
            {search && (
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 text-gray-500 hover:text-gray-700"
                onClick={handleClear}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Clear search</span>
              </Button>
            )}
          </div>
        </Popover.Trigger>

        <Popover.Portal>
          <Popover.Content
            side="bottom"
            align="start"
            className="z-50 w-(--radix-popover-trigger-width) rounded-md border bg-popover p-0 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
            onOpenAutoFocus={(e) => e.preventDefault()}
          >
            <Command className="overflow-hidden rounded-md">
              <Command.List className="max-h-64 overflow-auto p-1">
                <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
                  No matching services. Press Enter to add “{search}” as a custom service.
                </Command.Empty>

                {filtered.map((service) => (
                  <Command.Item
                    key={service.value}
                    value={service.value}
                    onSelect={() => handleSelect(service)}
                    className="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground relative flex cursor-pointer select-none items-center justify-between rounded-sm px-2 py-3 text-sm outline-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50"
                  >
                    <div className="flex-1">
                      <div className="text-base-optimized font-medium text-gray-900">
                        {service.label}
                      </div>
                      <div className="text-sm text-gray-500 mt-0.5">
                        Additional Service
                      </div>
                    </div>
                    <div className="text-sm font-medium text-[#2160AD] ml-4">
                      {service.price}
                    </div>
                  </Command.Item>
                ))}
              </Command.List>
            </Command>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
}