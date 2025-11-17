import { Label } from "@/components/ui/label";
import { TripType } from "./types";
import { Circle } from "lucide-react";

type Props = {
  value: TripType;
  onChange: (v: TripType) => void;
};

export default function TripTypeSelector({ value, onChange }: Props) {
  return (
    <div>
      <Label>Trip Type <span className="text-red-500">*</span></Label>
      <div className="flex gap-4 mt-3">
        {(["one-way", "two-way", "three-way"] as const).map(type => (
          <label key={type} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="tripType"
              checked={value === type}
              onChange={() => onChange(type)}
              className="w-4 h-4 border-gray-300 bg-gray-200 hidden"
            />
            <button
              type="button"
              role="radio"
              aria-checked={value === type}
              className={`border-gray-300 aspect-square size-4 rounded-full transition-all relative bg-gray-200`}
            >
              {value === type && (
                <Circle className="absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 fill-primary" />
              )}
            </button>
            <span className="capitalize">{type.replace("-", " ")}</span>
          </label>
        ))}
      </div>
    </div>
  );
}