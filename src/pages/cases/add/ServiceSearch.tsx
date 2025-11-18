// @/components/cases/add/ServiceSearch.tsx
"use client";

import { useState, useEffect, useRef, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from "react";
import { Search, Plus, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ALL_SERVICES, Service } from "./ALL_SERVICES";

type Props = {
  value: string;
  onChange: (value: string) => void;
  onSelect: (service: Service | null) => void;
};

export default function ServiceSearch({ value, onChange, onSelect }: Props) {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState(value);

  const filteredServices = ALL_SERVICES.filter((service: { label: string; value: string; }) =>
    service.label.toLowerCase().includes(value.toLowerCase()) ||
    service.value.toLowerCase().includes(value.toLowerCase())
  );

  const handleSelect = (service: Service) => {
    onSelect(service);
    onChange("");
    setOpen(false);
    inputRef.current?.focus();
  };

  const handleInputChange = (val: string) => {
    setSearch(val);
    onChange(val);
    setOpen(true);
  };

  const handleClear = () => {
    setSearch("");
    onChange("");
    setOpen(false);
  };


  return (
    <div className="space-y-2 w-full">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div className="relative w-full flex gap-2">
            <div className="relative w-full flex">
              {/* <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" /> */}
              <Input
                ref={inputRef}
                value={search}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder="Search services..."
                className="pr-10"
              // onFocus={() => setOpen(true)}
              />
              {search && (
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
                  onClick={handleClear}
                >
                  <X className="w-4 h-4" />
                </Button>
              )}
            </div>
            <Button size="icon" variant="outline">
              <Plus className="w-5 h-5" />
            </Button>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-[450px] max-w-full p-1" align="start" onOpenAutoFocus={(e) => e.preventDefault()}>
          <Command>
            {/* <CommandInput placeholder="Search services..." value={value} onValueChange={onChange} /> */}
            <CommandList className="max-h-64 overflow-auto">
              <CommandEmpty className="p-6 text-center text-sm text-muted-foreground">
                No matching services. Press **Enter** to add “{search}” as a custom service.
              </CommandEmpty>

              {/* <CommandGroup heading="Available Services"> */}
              {filteredServices.map((service: Service) => (
                <CommandItem
                  key={service.value}
                  onSelect={() => handleSelect(service)}
                  className="flex cursor-pointer items-center justify-between rounded-sm px-2 py-2 text-sm outline-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50"
                >
                  <div className="flex-1">
                    <div className="font-medium">{service.label}</div>
                    <div className="text-sm text-muted-foreground">{service.unit ? `${service.unit}` : ""}</div>
                  </div>
                  <div className="ml-4 text-sm font-medium text-[#2160AD]">
                    {service.price}
                  </div>
                </CommandItem>
              ))}
              {/* </CommandGroup> */}

            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}