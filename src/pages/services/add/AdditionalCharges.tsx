// src/components/contracts/sections/AdditionalCharges.tsx
"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { DollarSign, Plus, Trash2 } from "lucide-react";
import { Control, UseFormRegister, UseFormWatch, useFieldArray } from "react-hook-form";
import { ContractFormData } from "./contract";

type Props = {
  control: Control<ContractFormData>;
  register: UseFormRegister<ContractFormData>;
  watch: UseFormWatch<ContractFormData>;
};

export default function AdditionalCharges({ control, register, watch }: Props) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "additionalCharges",
  });

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2 text-[#2160AD]">
          <DollarSign className="w-5 h-5" />
          Additional Charges
        </CardTitle>
        <Button
          type="button"
          onClick={() =>
            append({
              name: "",
              unit: "Hours",
              isMandatory: false,
              pricingRules: [
                {
                  rule: "First (Fixed cost for initial units)",
                  units: 1,
                  amount: 0,
                  currency: "SGD",
                  active: true,
                },
              ],
            })
          }
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Charge
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        {fields.map((charge, chargeIndex) => {
          const isMandatory = watch(`additionalCharges.${chargeIndex}.isMandatory`) ?? false;
          const unit = watch(`additionalCharges.${chargeIndex}.unit`) || "unit";

          const { fields: ruleFields, append: appendRule, remove: removeRule } = useFieldArray({
            control,
            name: `additionalCharges.${chargeIndex}.pricingRules`,
          });

          return (
            <div key={charge.id} className="p-4 border rounded-lg space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-[#2160AD]">
                  {isMandatory ? `${charge.name || "Mandatory Charge"} (Mandatory)` : `Additional Charge ${chargeIndex + 1}`}
                </h4>
                {!isMandatory && fields.length > 2 && (
                  <Button variant="ghost" size="sm" onClick={() => remove(chargeIndex)} className="text-red-500">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>{isMandatory ? "Charge Name (Fixed)" : "Charge Name"}</Label>
                  <Input
                    placeholder="e.g., Waiting Time"
                    {...register(`additionalCharges.${chargeIndex}.name`)}
                    disabled={isMandatory}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Unit</Label>
                  <Select
                    value={unit}
                    disabled={isMandatory}
                    onValueChange={(val) => {
                      // You can setValue here if needed
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Hours">Hours</SelectItem>
                      <SelectItem value="Minutes">Minutes</SelectItem>
                      <SelectItem value="Days">Days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Pricing Rules</Label>
                  <Button type="button" size="sm" variant="outline" onClick={() => appendRule({
                    rule: "First (Fixed cost for initial units)",
                    units: 1,
                    amount: 0,
                    currency: "SGD",
                    active: true,
                  })}>
                    <Plus className="w-4 h-4 mr-1" />
                    Add Tier
                  </Button>
                </div>

                <div className="grid grid-cols-5 gap-4 text-sm font-medium text-gray-600 px-3">
                  <div>Pricing Rule</div>
                  <div>Unit ({unit})</div>
                  <div>Amount</div>
                  <div>Active</div>
                  <div>Actions</div>
                </div>

                {ruleFields.map((rule, ruleIndex) => (
                  <div key={rule.id} className="grid grid-cols-5 gap-4 items-center p-3 bg-gray-50 rounded-lg">
                    <Select defaultValue={rule.rule || "First (Fixed cost for initial units)"}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="First (Fixed cost for initial units)">First (Fixed cost for initial units)</SelectItem>
                        <SelectItem value="Next (Fixed cost for following units)">Next (Fixed cost for following units)</SelectItem>
                      </SelectContent>
                    </Select>

                    <Input
                      type="number"
                      min="1"
                      placeholder="1"
                      {...register(`additionalCharges.${chargeIndex}.pricingRules.${ruleIndex}.units`, { valueAsNumber: true })}
                    />

                    <div className="flex gap-2">
                      <Input
                        type="number"
                        step="0.01"
                        placeholder="0.00"
                        {...register(`additionalCharges.${chargeIndex}.pricingRules.${ruleIndex}.amount`, { valueAsNumber: true })}
                      />
                      <Select defaultValue="SGD">
                        <SelectTrigger className="w-20">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="SGD">SGD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Switch
                      {...register(`additionalCharges.${chargeIndex}.pricingRules.${ruleIndex}.active`)}
                      defaultChecked
                    />

                    {ruleFields.length > 1 && (
                      <Button variant="ghost" size="icon" onClick={() => removeRule(ruleIndex)} className="text-red-500">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}