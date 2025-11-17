import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Trash2, Plus } from "lucide-react";
import {
  UseFieldArrayReturn,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";

type FormValues = any;

type Props = {
  chargeIdx: number;
  fieldArray: UseFieldArrayReturn<
    FormValues,
    `additionalCharges.${number}.pricingRules`
  >;
  register: UseFormRegister<FormValues>;
  watch: UseFormWatch<FormValues>;
  disabled: boolean;
  isFixed?: boolean;
  onRemoveCharge: (idx: number) => void;
  canRemove: boolean;
};

export default function AdditionalChargeCard({
  chargeIdx,
  fieldArray,
  register,
  watch,
  disabled,
  isFixed = false,
  onRemoveCharge,
  canRemove,
}: Props) {
  const { fields: ruleFields, append, remove } = fieldArray;
  const unit = watch(`additionalCharges.${chargeIdx}.unit`) || "Unit";

  return (
    <div className="border-2 border-[#e0e0e0] rounded-lg p-6 space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[#2160AD] font-semibold">
          {isFixed
            ? `${watch(`additionalCharges.${chargeIdx}.name`)} (Mandatory)`
            : `Additional Charge ${chargeIdx + 1}`}
        </h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Switch
              {...register(`additionalCharges.${chargeIdx}.active`)}
              disabled={disabled}
            />
            <Label className="text-sm">Active</Label>
          </div>
          {canRemove && !isFixed && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onRemoveCharge(chargeIdx)}
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
          <Label>{isFixed ? "Charge Name (Fixed)" : "Charge Name"}</Label>
          <Input
            placeholder="e.g., Waiting Fee"
            {...register(`additionalCharges.${chargeIdx}.name`)}
            disabled={disabled}
            readOnly={isFixed}
          />
        </div>
        <div className="space-y-2">
          <Label>Unit</Label>
          <Input
            placeholder="e.g., hours"
            {...register(`additionalCharges.${chargeIdx}.unit`)}
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
                rule: "Every (Cost Per Unit)",
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
            {["Rule", `Unit (${unit})`, "Amount", "Currency", "Actions"].map(
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
                value={watch(
                  `additionalCharges.${chargeIdx}.pricingRules.${ruleIdx}.rule`
                )}
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
                  <SelectItem value="Greater than">Greater than</SelectItem>
                  <SelectItem value="Lesser than">Lesser than</SelectItem>
                </SelectContent>
              </Select>

              <Input
                type="number"
                min="1"
                {...register(
                  `additionalCharges.${chargeIdx}.pricingRules.${ruleIdx}.units`,
                  {
                    valueAsNumber: true,
                  }
                )}
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
                  {...register(
                    `additionalCharges.${chargeIdx}.pricingRules.${ruleIdx}.amount`,
                    {
                      valueAsNumber: true,
                    }
                  )}
                  disabled={disabled}
                />
              </div>

              <Select
                value={watch(
                  `additionalCharges.${chargeIdx}.pricingRules.${ruleIdx}.currency`
                )}
                disabled={disabled}
              >
                <SelectTrigger className="w-20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="SGD">$</SelectItem>
                  <SelectItem value="USD">$</SelectItem>
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
