import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { UseFormRegister, Path } from "react-hook-form";

type FormValues = any;

type Props = {
  index: number;
  namePrefix: "tripServices" | "supportServices";
  register: UseFormRegister<FormValues>;
  disabled: boolean;
  onRemove: (idx: number) => void;
};

export default function RateRow({
  index,
  namePrefix,
  register,
  disabled,
  onRemove,
}: Props) {
  const keys = ["office", "nonOffice", "weekend"] as const;

  return (
    <div className="grid grid-cols-6 gap-4 items-center">
      <Input
        placeholder="Enter trip type"
        {...register(`${namePrefix}.${index}.name` as Path<FormValues>)}
        disabled={disabled}
        className="bg-white!"
      />
      {keys.map((k) => (
        <div key={k} className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
            $
          </span>
          <Input
            type="number"
            step="0.01"
            min="0"
            {...register(`${namePrefix}.${index}.${k}` as Path<FormValues>, {
              valueAsNumber: true,
            })}
            disabled={disabled}
            className="pl-8 bg-white!"
          />
        </div>
      ))}
      <Switch
        {...register(`${namePrefix}.${index}.active`)}
        defaultChecked
        disabled={disabled}
      />
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onRemove(index)}
        disabled={disabled}
        className="text-red-500 hover:text-red-700"
      >
        <Trash2 className="w-4 h-4" />
      </Button>
    </div>
  );
}