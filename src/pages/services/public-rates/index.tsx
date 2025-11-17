"use client";

import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import ConfigureHoursDialog from "../services-dialogs/ConfigureHoursDialog";
import RatesSection from "./RatesSection";
import { schema } from "./publicRatesSchema";
import { Clock, Save, SquarePen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PublicRatesConfig() {
  const [isEditing, setIsEditing] = useState(false);
  const [openHoursDialog, setOpenHoursDialog] = useState(false);

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema) as any,
    defaultValues: {
      tripServices: [
        {
          name: "Basic Transfer",
          office: 120,
          nonOffice: 150,
          weekend: 180,
          active: true,
        },
        // … other defaults …
      ],
      supportServices: [
        {
          name: "Medical Escort",
          office: 30,
          nonOffice: 40,
          weekend: 60,
          active: true,
        },
        // …
      ],
      addOnServices: [
        {
          name: "Oxygen",
          unit: "Litre",
          active: true,
          pricingRules: [
            {
              rule: "First (Fixed cost for initial units)",
              units: 5,
              amount: 15,
              currency: "SGD",
            },
            {
              rule: "Next (Fixed cost for following units)",
              units: 10,
              amount: 12,
              currency: "SGD",
            },
            {
              rule: "Every (Cost Per Unit)",
              units: 1,
              amount: 3,
              currency: "SGD",
            },
          ],
        },
        // …
      ],
      additionalCharges: [
        {
          name: "Waiting Fee",
          unit: "hours",
          active: true,
          isFixed: true,
          pricingRules: [
            {
              rule: "First (Fixed cost for initial units)",
              units: 1,
              amount: 50,
              currency: "SGD",
            },
            {
              rule: "Next (Fixed cost for following units)",
              units: 2,
              amount: 40,
              currency: "SGD",
            },
            {
              rule: "Every (Cost Per Unit)",
              units: 1,
              amount: 30,
              currency: "SGD",
            },
          ],
        },
        // …
      ],
    },
  });

  const { handleSubmit } = form;

  const onSubmit = (data: any) => {
    console.log("Submitted:", data);
    setIsEditing(false);
  };

  const handleHoursSave = (data: any) => {
    console.log("Office Hours Saved:", data);
    setOpenHoursDialog(false);
  };

  return (
    <div className="p-6 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-[#2160AD] text-2xl font-semibold">
            Public Rates Configuration
          </h2>
          <p className="text-sm text-gray-500">
            Manage standard rates for public services
          </p>
        </div>
        <div className="flex gap-2">
          {isEditing ? (
            <Button
              variant="outline" 
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </Button>
          ) : (
            <Button
              variant="outline" 
              className="border-[#2160AD] text-[#2160AD]"
              onClick={() => setOpenHoursDialog(true)}
            >
              <Clock className="w-4 h-4 mr-2" />
              Configure Hours
            </Button>
          )}
          <Button
            onClick={() =>
              isEditing ? handleSubmit(onSubmit)() : setIsEditing(true)
            } 
          >
            {isEditing ? (
              <>
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </>
            ) : (
              <>
                <SquarePen className="w-4 h-4 mr-2" />
                Edit Rates
              </>
            )}
          </Button>
        </div>
      </div>

      <ConfigureHoursDialog
        open={openHoursDialog}
        onOpenChange={setOpenHoursDialog}
        onSave={handleHoursSave}
      />

      <RatesSection form={form} isEditing={isEditing} />
    </div>
  );
}
