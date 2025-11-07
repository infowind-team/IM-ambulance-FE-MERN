// components/theme-ui/ServiceSearch.tsx
"use client";

import * as React from "react";
import { Command } from "cmdk";
import * as Popover from "@radix-ui/react-popover";
import { Plus } from "lucide-react";
import { Label } from "@/components/ui/label";

interface Service {
  value: string;
  label: string;
  price: string;
}

const ALL_SERVICES: Service[] = [
  { value: "Oxygen Support", label: "Oxygen Support", price: "$50" },
  { value: "Wheelchair Service", label: "Wheelchair Service", price: "$25" },
  { value: "Stretcher Service", label: "Stretcher Service", price: "$35" },
  { value: "Medical Escort", label: "Medical Escort", price: "$75" },
  { value: "Standby Service", label: "Standby Service", price: "$120" },
  { value: "A&E Transfer", label: "A&E Transfer", price: "$80" },
  { value: "Dialysis Transport", label: "Dialysis Transport", price: "$45" },
  { value: "IV Therapy Support", label: "IV Therapy Support", price: "$65" },
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

  // Filter services while the user types
  const filtered = React.useMemo(() => {
    if (!search) return ALL_SERVICES;
    const lower = search.toLowerCase();
    return ALL_SERVICES.filter(
      (s) =>
        s.label.toLowerCase().includes(lower) ||
        s.value.toLowerCase().includes(lower)
    );
  }, [search]);

  // When the input changes we also update the parent state
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
      onSelect?.(null); // custom entry
      setOpen(false);
    }
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
            <input
              type="text"
              value={search}
              onChange={handleInputChange}
              placeholder={placeholder}
              className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-10 w-full rounded-md border bg-input-background px-3 py-1 text-base-optimized transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive form-input-height"
            />
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