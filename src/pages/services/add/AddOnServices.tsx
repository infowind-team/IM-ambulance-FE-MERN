// src/components/contracts/sections/AddOnServices.tsx
"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Plus, Trash2 } from "lucide-react";
import { Control, UseFormRegister, UseFormWatch, useFieldArray } from "react-hook-form";
import { ContractFormData } from "./contract";

type Props = {
  control: Control<ContractFormData>;
  register: UseFormRegister<ContractFormData>;
  watch: UseFormWatch<ContractFormData>;
};

export default function AddOnServices({ control, register, watch }: Props) {
  const { fields: addOnFields, append: appendAddOn, remove: removeAddOn } = useFieldArray({
    control,
    name: "addOnServices",
  });

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2 text-[#2160AD]">
          <Plus className="w-5 h-5" />
          Add-on Services
        </CardTitle>
        <Button
          type="button"
          onClick={() =>
            appendAddOn({
              name: "",
              unit: "Litre",
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
          Add Service
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        {addOnFields.map((addOn, addOnIndex) => {
          const { fields: ruleFields, append: appendRule, remove: removeRule } = useFieldArray({
            control,
            name: `addOnServices.${addOnIndex}.pricingRules`,
          });

          const unit = watch(`addOnServices.${addOnIndex}.unit`) || "Unit";

          return (
            <div key={addOn.id} className="p-4 border rounded-lg space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-[#2160AD]">Add-on Service {addOnIndex + 1}</h4>
                {addOnFields.length > 1 && (
                  <Button variant="ghost" size="sm" onClick={() => removeAddOn(addOnIndex)} className="text-red-500">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Service Name</Label>
                  <Input placeholder="e.g., Oxygen" {...register(`addOnServices.${addOnIndex}.name`)} />
                </div>
                <div className="space-y-2">
                  <Label>Unit</Label>
                  <Input placeholder="Litre, Hour, Piece" {...register(`addOnServices.${addOnIndex}.unit`)} />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Pricing Rules</Label>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      appendRule({
                        rule: "First (Fixed cost for initial units)",
                        units: 1,
                        amount: 0,
                        currency: "SGD",
                        active: true,
                      })
                    }
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Rule
                  </Button>
                </div>

                <div className="space-y-3">
                  <div className="grid grid-cols-5 gap-4 text-sm font-medium text-gray-600 px-3">
                    <div>Pricing Rule</div>
                    <div>Unit ({unit})</div>
                    <div>Amount Per Unit</div>
                    <div>Active</div>
                    <div>Actions</div>
                  </div>

                  {ruleFields.map((rule, ruleIndex) => (
                    <div key={rule.id} className="grid grid-cols-5 gap-4 p-3 bg-gray-50 rounded-lg items-center">
                      <Select
                        defaultValue={rule.rule || "First (Fixed cost for initial units)"}
                        onValueChange={(value) => {
                          // You can set value if needed
                        }}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="First (Fixed cost for initial units)">
                            First (Fixed cost for initial units)
                          </SelectItem>
                          <SelectItem value="Subsequent (Per unit after initial)">
                            Subsequent (Per unit after initial)
                          </SelectItem>
                        </SelectContent>
                      </Select>

                      <Input
                        type="number"
                        min="1"
                        placeholder="1"
                        {...register(`addOnServices.${addOnIndex}.pricingRules.${ruleIndex}.units`, {
                          valueAsNumber: true,
                        })}
                      />

                      <div className="flex gap-2">
                        <Input
                          type="number"
                          step="0.01"
                          placeholder="0.00"
                          {...register(`addOnServices.${addOnIndex}.pricingRules.${ruleIndex}.amount`, {
                            valueAsNumber: true,
                          })}
                        />
                        <Select defaultValue="SGD">
                          <SelectTrigger className="w-20">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="SGD">%</SelectItem>
                            <SelectItem value="USD">$</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <Switch
                        {...register(`addOnServices.${addOnIndex}.pricingRules.${ruleIndex}.active`)}
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
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}