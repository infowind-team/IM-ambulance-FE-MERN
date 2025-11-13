// components/theme-ui/ServiceSearch.tsx
"use client";

import * as React from "react";
import { Plus, X } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandItem,
  CommandList,
  CommandInput,
} from "@/components/ui/command";

/* --------------------------------------------------------------- */
/*                         SERVICE DEFINITION                        */
/* --------------------------------------------------------------- */
export interface Service {
  value: string;
  label: string;
  price: string;
  unit: string;
}

/* --------------------------------------------------------------- */
/*                         ALL SERVICES (static)                    */
/* --------------------------------------------------------------- */
export const ALL_SERVICES: Service[] = [
  { value: "oxygen-support", label: "Oxygen Support", unit: "per day", price: "$50" },
  { value: "wheelchair", label: "Wheelchair Service", unit: "per service", price: "$25" },
  { value: "stretcher", label: "Stretcher Service", unit: "per service", price: "$35" },
  { value: "medical-escort", label: "Medical Escort", unit: "per hour", price: "$75" },
  { value: "standby", label: "Standby Service", unit: "per day", price: "$120" },
  { value: "ae-transfer", label: "A&E Transfer", unit: "per hour", price: "$80" },
  { value: "dialysis", label: "Dialysis Transport", unit: "per service", price: "$45" },
  { value: "iv-therapy", label: "IV Therapy Support", unit: "per trip", price: "$65" },
  { value: "emergency-equipment", label: "Emergency Equipment", unit: "per trip", price: "$65" },
];

/* --------------------------------------------------------------- */
/*                         PROPS                                            */
/* --------------------------------------------------------------- */
interface ServiceSearchProps {
  /** Current input value (controlled) */
  value: string;
  /** Called on every keystroke */
  onChange: (value: string) => void;
  /** Called when a service is selected (or custom service added) */
  onSelect?: (service: Service | null) => void;
  placeholder?: string;
  label?: string;
  required?: boolean;
}

/* --------------------------------------------------------------- */
/*                         MAIN COMPONENT                                   */
/* --------------------------------------------------------------- */
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

  /* ----------------------------------------------------------- */
  /*  Filter services – memoised, runs only when `search` changes */
  /* ----------------------------------------------------------- */
  const filtered = React.useMemo(() => {
    if (!search) return ALL_SERVICES;
    const lower = search.toLowerCase();
    return ALL_SERVICES.filter(
      (s) =>
        s.label.toLowerCase().includes(lower) ||
        s.value.toLowerCase().includes(lower)
    );
  }, [search]);

  /* ----------------------------------------------------------- */
  /*  Sync internal search with external `value` (controlled)    */
  /* ----------------------------------------------------------- */
  React.useEffect(() => {
    setSearch(value);
  }, [value]);

  /* ----------------------------------------------------------- */
  /*  Handlers                                                    */
  /* ----------------------------------------------------------- */
  const handleInputChange = (val: string) => {
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
      onSelect?.(null); // signal “custom service”
      setOpen(false);
    }
  };

  const handleClear = () => {
    setSearch("");
    onChange("");
    setOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && filtered.length === 0) {
      e.preventDefault();
      handleCustomAdd();
    }
  };

  return (
    <div className="space-y-2 w-full">
      {/* Optional label */}
      {label && (
        <Label>
          {label} {required && <span className="text-red-500">*</span>}
        </Label>
      )}

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div className="relative">
            <Input
              type="text"
              value={search}
              onChange={(e) => handleInputChange(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={placeholder}
              className="w-full pr-10"
            />

            {/* Clear button */}
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
        </PopoverTrigger>

        <PopoverContent
          className="w-[var(--radix-popover-trigger-width)] p-0"
          align="start"
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <Command>
            {/* Built-in input – we hide it and use our own above */}
            <CommandInput className="hidden" />

            <CommandList className="max-h-64 overflow-auto p-1">
              <CommandEmpty className="py-6 text-center text-sm text-muted-foreground">
                No matching services. Press **Enter** to add “{search}” as a custom service.
              </CommandEmpty>

              {filtered.map((service) => (
                <CommandItem
                  key={service.value}
                  value={service.value}
                  onSelect={() => handleSelect(service)}
                  className="flex cursor-pointer items-center justify-between rounded-sm px-2 py-2 text-sm outline-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50"
                >
                  <div className="flex-1">
                    <div className="font-medium text-base-optimized">
                      {service.label}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {/* {service.unit} */} Additional Service
                    </div>
                  </div>

                  <div className="ml-4 text-sm font-medium text-[#2160AD]">
                    {service.price}
                  </div>
                </CommandItem>
              ))}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}