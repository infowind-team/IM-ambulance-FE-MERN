// src/components/contracts/sections/SupportServices.tsx
"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Building2, Plus, Trash2, Copy } from "lucide-react";
import { Control, UseFormRegister, useFieldArray } from "react-hook-form";
import { ContractFormData } from "./contract";

type Props = {
  control: Control<ContractFormData>;
  register: UseFormRegister<ContractFormData>;
};

export default function SupportServices({ control, register }: Props) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "supportServices",
  });

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2 text-[#2160AD]">
          <Building2 className="w-5 h-5" />
          Support Services
        </CardTitle>
        <Button
          type="button"
          onClick={() => append({ type: "", officeHours: 0, nonOfficeHours: 0, weekendPH: 0, active: true })}
          className="bg-[#2160AD] hover:bg-[#1a4d8c] text-white"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Support Service Line
        </Button>
      </CardHeader>
      <CardContent>
        <div className="bg-[rgba(61,61,61,0.03)] rounded-lg border border-gray-100 p-4">
          <div className="grid grid-cols-6 gap-4 pb-4 border-b border-gray-200 mb-4 font-semibold text-[#29384d] text-base">
            <div>Service Type</div>
            <div>Office Hours</div>
            <div>Non-Office Hours</div>
            <div>Weekend & PH</div>
            <div>Active</div>
            <div>Actions</div>
          </div>

          <div className="space-y-4">
            {fields.map((field, index) => (
              <div key={field.id} className="grid grid-cols-6 gap-4 items-center">
                <Input placeholder="Enter service type" {...register(`supportServices.${index}.type`)} className="bg-white!" />

                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                  <Input
                    type="number"
                    step="0.01"
                    min="0"
                    {...register(`supportServices.${index}.officeHours`, { valueAsNumber: true })}
                    className="pl-8 bg-white!"
                  />
                </div>

                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                  <Input
                    type="number"
                    step="0.01"
                    min="0"
                    {...register(`supportServices.${index}.nonOfficeHours`, { valueAsNumber: true })}
                    className="pl-8 bg-white!"
                  />
                </div>

                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                  <Input
                    type="number"
                    step="0.01"
                    min="0"
                    {...register(`supportServices.${index}.weekendPH`, { valueAsNumber: true })}
                    className="pl-8 bg-white!"
                  />
                </div>

                <Switch {...register(`supportServices.${index}.active`)} defaultChecked />

                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <Copy className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => remove(index)}>
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}