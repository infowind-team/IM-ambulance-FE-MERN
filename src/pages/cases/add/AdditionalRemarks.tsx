import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { FileText } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { CaseFormValues } from "./types";
import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";

export default function AdditionalRemarks() {
  const { control } = useFormContext<CaseFormValues>();

  return (
    <Card>
      <CardHeader className="header-bg-soft pb-6">
        <CardTitle className="flex items-center gap-2">
          <FileText className="w-5 h-5" />
          Additional Remarks
        </CardTitle>
      </CardHeader>
      <CardContent>
        <FormField
          control={control}
          name="remarks"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Enter any special instructions, medical notes, or additional information..."
                  rows={5}
                  className="resize-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
}
// @/components/cases/add/AdditionalRemarks.tsx