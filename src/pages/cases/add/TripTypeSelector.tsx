import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Circle } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { CaseFormValues } from "./types";

export default function TripTypeSelector() {
  const { control } = useFormContext<CaseFormValues>();

  return (
    <FormField
      control={control}
      name="tripType"
      rules={{ required: "Trip type is required" }}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Trip Type <span className="text-red-500">*</span></FormLabel>
          <FormControl>
            <div className="flex gap-4 mt-3">
              {(["one-way", "two-way", "three-way"] as const).map(type => (
                <label key={type} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="tripType"
                    className="hidden"
                    checked={field.value === type}
                    onChange={() => field.onChange(type)}
                  />
                  <button
                    type="button"
                    role="radio"
                    aria-checked={field.value === type}
                    onClick={() => field.onChange(type)}
                    className="border-gray-300 aspect-square size-4 rounded-full transition-all relative bg-gray-200"
                  >
                    {field.value === type && (
                      <Circle className="absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 fill-primary" />
                    )}
                  </button>
                  <span className="capitalize">{type.replace("-", " ")}</span>
                </label>
              ))}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
