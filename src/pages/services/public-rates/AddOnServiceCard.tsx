import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Trash2, Plus } from "lucide-react";
import { UseFieldArrayReturn, UseFormRegister, UseFormWatch } from "react-hook-form";

type FormValues = any;

type Props = {
  addOnIdx: number;
  fieldArray: UseFieldArrayReturn<FormValues, `addOnServices.${number}.pricingRules`>;
  register: UseFormRegister<FormValues>;
  watch: UseFormWatch<FormValues>;
  disabled: boolean;
  onRemoveAddOn: (idx: number) => void;
  canRemove: boolean;
};

export default function AddOnServiceCard({
  addOnIdx,
  fieldArray,
  register,
  watch,
  disabled,
  onRemoveAddOn,
  canRemove,
}: Props) {
  const { fields: ruleFields, append, remove } = fieldArray;
  const unit = watch(`addOnServices.${addOnIdx}.unit`) || "Unit";

  function appendAddOn(arg0: { name: string; unit: string; active: boolean; pricingRules: { rule: string; units: number; amount: number; currency: string; }[]; }): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="border border-[#e0e0e0] rounded-lg p-6 space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[#2160AD] font-semibold">Add-on Service {addOnIdx + 1}</h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Switch
              {...register(`addOnServices.${addOnIdx}.active`)}
              defaultChecked
              disabled={disabled}
            />
            <Label className="text-sm">Active</Label>
          </div>
          {canRemove && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onRemoveAddOn(addOnIdx)}
              disabled={disabled}
              className="text-red-500 hover:text-red-700"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Service Name</Label>
          <Input
            placeholder="e.g., Oxygen"
            {...register(`addOnServices.${addOnIdx}.name`)}
            disabled={disabled}
          />
        </div>
        <div className="space-y-2">
          <Label>Unit</Label>
          <Input
            placeholder="e.g., Litre"
            {...register(`addOnServices.${addOnIdx}.unit`)}
            disabled={disabled}
          />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label className="text-base font-semibold">Pricing Rules</Label>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() =>
              append({
                rule: "First (Fixed cost for initial units)",
                units: 1,
                amount: 0,
                currency: "SGD",
              })
            }
            disabled={disabled}
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Rule
          </Button>
        </div>

        <div className="bg-[#f7f7f8] p-4 rounded-lg space-y-3">
          <div className="grid grid-cols-5 gap-4 pb-2 border-b border-gray-300">
            {["Pricing Rule", `Unit (${unit})`, "Amount Per Unit", "Currency", "Actions"].map(
              (h) => (
                <div key={h} className="text-sm font-semibold text-[#29384d]">
                  {h}
                </div>
              )
            )}
          </div>

          {ruleFields.map((rule, ruleIdx) => (
            <div key={rule.id} className="grid grid-cols-5 gap-4 items-center">
              <Select
                value={watch(`addOnServices.${addOnIdx}.pricingRules.${ruleIdx}.rule`)}
                onValueChange={() => {}}
                disabled={disabled}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="First (Fixed cost for initial units)">
                    First (Fixed cost for initial units)
                  </SelectItem>
                  <SelectItem value="Next (Fixed cost for following units)">
                    Next (Fixed cost for following units)
                  </SelectItem>
                  <SelectItem value="Every (Cost Per Unit)">
                    Every (Cost Per Unit)
                  </SelectItem>
                  <SelectItem value="Remaining (Cost for extra units)">
                    Remaining (Cost for extra units)
                  </SelectItem>
                  <SelectItem value="Greater than">
                    Greater than
                  </SelectItem>
                  <SelectItem value="Lesser than">
                    Lesser than
                  </SelectItem>
                </SelectContent>
              </Select>

              <Input
                type="number"
                min="1"
                {...register(`addOnServices.${addOnIdx}.pricingRules.${ruleIdx}.units`, {
                  valueAsNumber: true,
                })}
                disabled={disabled}
              />

              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                  $
                </span>
                <Input
                  type="number"
                  step="0.01"
                  min="0"
                  className="pl-8"
                  {...register(`addOnServices.${addOnIdx}.pricingRules.${ruleIdx}.amount`, {
                    valueAsNumber: true,
                  })}
                  disabled={disabled}
                />
              </div>

              <Select
                value={watch(`addOnServices.${addOnIdx}.pricingRules.${ruleIdx}.currency`)}
                disabled={disabled}
              >
                <SelectTrigger className="w-20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USD">$</SelectItem>
                  <SelectItem value="SGD">%</SelectItem>
                </SelectContent>
              </Select>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => remove(ruleIdx)}
                disabled={disabled || ruleFields.length === 1}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}