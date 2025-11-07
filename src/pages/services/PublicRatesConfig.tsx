"use client";

import { useState } from "react";
import { useForm, useFieldArray, Resolver, Path } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  FileText,
  Building2,
  DollarSign,
  Plus,
  Trash2,
  Clock,
  SquarePen,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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

type Service = {
  id: string;
  name: string;
  office: number;
  nonOffice: number;
  weekend: number;
  active: boolean;
};

type AddOn = {
  name: string;
  unit: string;
  active: boolean;
  pricingRules: {
    rule: string;
    units: number;
    amount: number;
    currency: string;
  }[];
};

type AdditionalCharge = {
  name: string;
  unit: string;
  active: boolean;
  isFixed?: boolean; // true for mandatory (non-editable name)
  pricingRules: {
    rule: string;
    units: number;
    amount: number;
    currency: string;
  }[];
};

const schema = z.object({
  tripServices: z.array(
    z.object({
      name: z.string().min(1, "Required"),
      office: z.number().min(0),
      nonOffice: z.number().min(0),
      weekend: z.number().min(0),
      active: z.boolean(),
    })
  ),
  supportServices: z.array(
    z.object({
      name: z.string().min(1, "Required"),
      office: z.number().min(0),
      nonOffice: z.number().min(0),
      weekend: z.number().min(0),
      active: z.boolean(),
    })
  ),
  addOnServices: z.array(
    z.object({
      name: z.string().min(1, "Required"),
      unit: z.string().min(1, "Required"),
      active: z.boolean(),
      pricingRules: z.array(
        z.object({
          rule: z.string().min(1),
          units: z.number().min(1),
          amount: z.number().min(0),
          currency: z.string().default("SGD"),
        })
      ),
    })
  ),
  additionalCharges: z.array(
    z.object({
      name: z.string().min(1, "Required"),
      unit: z.string().min(1, "Required"),
      active: z.boolean(),
      isFixed: z.boolean().optional(),
      pricingRules: z.array(
        z.object({
          rule: z.string().min(1),
          units: z.number().min(1),
          amount: z.number().min(0),
          currency: z.string().default("SGD"),
        })
      ),
    })
  ),
});

type FormData = z.infer<typeof schema>;

export default function PublicRatesConfig() {
  const [isEditing, setIsEditing] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema) as Resolver<FormData>,
    defaultValues: {
      tripServices: [
        { name: "Basic Transfer", office: 120, nonOffice: 150, weekend: 180, active: true },
        { name: "Long Distance Transfer", office: 150, nonOffice: 180, weekend: 210, active: true },
        { name: "Multiple Destination", office: 180, nonOffice: 210, weekend: 240, active: true },
        { name: "Standby Service", office: 120, nonOffice: 150, weekend: 180, active: true },
        { name: "Emergency Response", office: 220, nonOffice: 280, weekend: 320, active: true },
      ],
      supportServices: [
        { name: "Medical Escort", office: 30, nonOffice: 40, weekend: 60, active: true },
        { name: "Terminal Discharge", office: 140, nonOffice: 160, weekend: 250, active: true },
        { name: "Stretcher Bearer", office: 25, nonOffice: 35, weekend: 50, active: true },
        { name: "Basic Life Support", office: 45, nonOffice: 60, weekend: 85, active: true },
      ],
      addOnServices: [
        {
          name: "Oxygen",
          unit: "Litre",
          active: true,
          pricingRules: [
            { rule: "First (Fixed cost for initial units)", units: 5, amount: 15, currency: "SGD" },
            { rule: "Next (Fixed cost for following units)", units: 10, amount: 12, currency: "SGD" },
            { rule: "Every (Cost Per Unit)", units: 1, amount: 3, currency: "SGD" },
          ],
        },
        {
          name: "Wheelchair",
          unit: "Trip",
          active: true,
          pricingRules: [
            { rule: "First (Fixed cost for initial units)", units: 1, amount: 25, currency: "SGD" },
            { rule: "Every (Cost Per Unit)", units: 1, amount: 20, currency: "SGD" },
          ],
        },
      ],
      additionalCharges: [
        {
          name: "Waiting Fee",
          unit: "hours",
          active: true,
          isFixed: true,
          pricingRules: [
            { rule: "First (Fixed cost for initial units)", units: 1, amount: 50, currency: "SGD" },
            { rule: "Next (Fixed cost for following units)", units: 2, amount: 40, currency: "SGD" },
            { rule: "Every (Cost Per Unit)", units: 1, amount: 30, currency: "SGD" },
          ],
        },
        {
          name: "Cancellation Charges",
          unit: "Trip",
          active: true,
          isFixed: true,
          pricingRules: [
            { rule: "Every (Cost Per Unit)", units: 1, amount: 45, currency: "SGD" },
          ],
        },
        {
          name: "Mileage Charge",
          unit: "km",
          active: true,
          isFixed: false,
          pricingRules: [
            { rule: "First (Fixed cost for initial units)", units: 10, amount: 0, currency: "SGD" },
            { rule: "Greater than", units: 10, amount: 2.5, currency: "SGD" },
          ],
        },
      ],
    },
  });

  // ---- Trip Services -------------------------------------------------
  const { fields: tripFields, append: appendTrip, remove: removeTrip } = useFieldArray({ control, name: "tripServices" });

  // ---- Support Services -----------------------------------------------
  const { fields: supportFields, append: appendSupport, remove: removeSupport } = useFieldArray({ control, name: "supportServices" });

  // ---- Add-on Services ------------------------------------------------
  const { fields: addOnFields, append: appendAddOn, remove: removeAddOn } = useFieldArray({ control, name: "addOnServices" });

  // ---- Additional Charges ---------------------------------------------
  const { fields: chargeFields, append: appendCharge, remove: removeCharge } = useFieldArray({ control, name: "additionalCharges" });

  const onSubmit = (data: FormData) => {
    console.log("Submitted:", data);
    setIsEditing(false);
  };

  // ------------------------------------------------------------------------
  const RateRow = ({
    index,
    type,
  }: {
    index: number;
    type: "tripServices" | "supportServices";
  }) => (
    <div className="grid grid-cols-6 gap-4 items-center">
      <Input
        placeholder="Enter service type"
        {...register(`${type}.${index}.name`)}
        disabled={!isEditing}
        className="bg-white"
      />
      {["office", "nonOffice", "weekend"].map((key) => (
        <div key={key} className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
          <Input
            type="number"
            step="0.01"
            min="0"
            {...register(`${type}.${index}.${key}` as Path<FormData>, { valueAsNumber: true })}
            disabled={!isEditing}
            className="pl-8 bg-white"
          />
        </div>
      ))}
      <Switch
        {...register(`${type}.${index}.active`)}
        defaultChecked
        disabled={!isEditing}
      />
      <Button
        variant="ghost"
        size="icon"
        onClick={() => (type === "tripServices" ? removeTrip(index) : removeSupport(index))}
        disabled={!isEditing}
        className="text-red-500 hover:text-red-700"
      >
        <Trash2 className="w-4 h-4" />
      </Button>
    </div>
  );

  // ------------------------------------------------------------------------
  return (
    <div className="p-6 space-y-8">
      {/* Header */}
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
          <Button variant="outline" className="border-[#2160AD] text-[#2160AD]">
            <Clock className="w-4 h-4 mr-2" />
            Configure Hours
          </Button>
          <Button
            onClick={() => (isEditing ? handleSubmit(onSubmit)() : setIsEditing(true))}
            className="bg-[#2160AD] hover:bg-[#1a4d8c] text-white"
          >
            <SquarePen className="w-4 h-4 mr-2" />
            {isEditing ? "Save Rates" : "Edit Rates"}
          </Button>
        </div>
      </div>

      {/* ==== Trip Types ==== */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-[#2160AD]">
            <FileText className="w-5 h-5" />
            Trip Types
          </CardTitle>
          <Button
            type="button"
            onClick={() =>
              appendTrip({
                name: "",
                office: 0,
                nonOffice: 0,
                weekend: 0,
                active: true,
              })
            }
            disabled={!isEditing}
            className="bg-[#2160AD] hover:bg-[#1a4d8c] text-white"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Trip Type
          </Button>
        </CardHeader>
        <CardContent>
          <div className="bg-[rgba(61,61,61,0.03)] rounded-lg border border-gray-100 p-4">
            <div className="grid grid-cols-6 gap-4 pb-4 mb-4 border-b border-gray-200">
              {["Service", "Office Hours", "Non-Office Hours", "Weekend & PH", "Active", "Actions"].map(
                (h) => (
                  <div key={h} className="font-semibold text-[#29384d] text-base">
                    {h}
                  </div>
                )
              )}
            </div>
            <div className="space-y-4">
              {tripFields.map((_, i) => (
                <RateRow key={tripFields[i].id} index={i} type="tripServices" />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ==== Support Services ==== */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-[#2160AD]">
            <Building2 className="w-5 h-5" />
            Support Services
          </CardTitle>
          <Button
            type="button"
            onClick={() =>
              appendSupport({
                name: "",
                office: 0,
                nonOffice: 0,
                weekend: 0,
                active: true,
              })
            }
            disabled={!isEditing}
            className="bg-[#2160AD] hover:bg-[#1a4d8c] text-white"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Support Service
          </Button>
        </CardHeader>
        <CardContent>
          <div className="bg-[#fcfcfc] rounded-lg border border-gray-100 p-4">
            <div className="grid grid-cols-6 gap-4 pb-4 mb-4 border-b border-gray-200">
              {["Service", "Office Hours", "Non-Office Hours", "Weekend & PH", "Active", "Actions"].map(
                (h) => (
                  <div key={h} className="font-semibold text-[#29384d] text-base">
                    {h}
                  </div>
                )
              )}
            </div>
            <div className="space-y-4">
              {supportFields.map((_, i) => (
                <RateRow key={supportFields[i].id} index={i} type="supportServices" />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ==== Add-on Services ==== */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-[#2160AD]">
            <DollarSign className="w-5 h-5" />
            Add-on Services
          </CardTitle>
          <Button
            type="button"
            onClick={() =>
              appendAddOn({
                name: "",
                unit: "Litre",
                active: true,
                pricingRules: [
                  {
                    rule: "First (Fixed cost for initial units)",
                    units: 1,
                    amount: 0,
                    currency: "SGD",
                  },
                ],
              })
            }
            disabled={!isEditing}
            className="bg-[#2160AD] hover:bg-[#1a4d8c] text-white"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Add-on Service
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          {addOnFields.map((addOn, addOnIdx) => {
            const {
              fields: ruleFields,
              append: appendRule,
              remove: removeRule,
            } = useFieldArray({
              control,
              name: `addOnServices.${addOnIdx}.pricingRules`,
            });

            const unit = watch(`addOnServices.${addOnIdx}.unit`) || "Unit";

            return (
              <div
                key={addOn.id}
                className="border border-[#e0e0e0] rounded-lg p-6 space-y-4"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[#2160AD] font-semibold">
                    Add-on Service {addOnIdx + 1}
                  </h3>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Switch
                        {...register(`addOnServices.${addOnIdx}.active`)}
                        defaultChecked
                        disabled={!isEditing}
                      />
                      <Label className="text-sm">Active</Label>
                    </div>
                    {addOnFields.length > 1 && (
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeAddOn(addOnIdx)}
                        disabled={!isEditing}
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
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Unit</Label>
                    <Input
                      placeholder="e.g., Litre"
                      {...register(`addOnServices.${addOnIdx}.unit`)}
                      disabled={!isEditing}
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
                        appendRule({
                          rule: "First (Fixed cost for initial units)",
                          units: 1,
                          amount: 0,
                          currency: "SGD",
                        })
                      }
                      disabled={!isEditing}
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add Rule
                    </Button>
                  </div>

                  <div className="bg-[#f7f7f8] p-4 rounded-lg space-y-3">
                    <div className="grid grid-cols-5 gap-4 pb-2 border-b border-gray-300">
                      <div className="text-sm font-semibold text-[#29384d]">Pricing Rule</div>
                      <div className="text-sm font-semibold text-[#29384d]">Unit ({unit})</div>
                      <div className="text-sm font-semibold text-[#29384d]">Amount Per Unit</div>
                      <div className="text-sm font-semibold text-[#29384d]">Currency</div>
                      <div className="text-sm font-semibold text-[#29384d]">Actions</div>
                    </div>

                    {ruleFields.map((rule, ruleIdx) => (
                      <div
                        key={rule.id}
                        className="grid grid-cols-5 gap-4 items-center"
                      >
                        <Select
                          value={watch(`addOnServices.${addOnIdx}.pricingRules.${ruleIdx}.rule`)}
                          onValueChange={(v) => {}}
                          disabled={!isEditing}
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
                          </SelectContent>
                        </Select>

                        <Input
                          type="number"
                          min="1"
                          placeholder="0"
                          {...register(
                            `addOnServices.${addOnIdx}.pricingRules.${ruleIdx}.units`,
                            { valueAsNumber: true }
                          )}
                          disabled={!isEditing}
                        />

                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                          <Input
                            type="number"
                            step="0.01"
                            min="0"
                            placeholder="0.00"
                            className="pl-8"
                            {...register(
                              `addOnServices.${addOnIdx}.pricingRules.${ruleIdx}.amount`,
                              { valueAsNumber: true }
                            )}
                            disabled={!isEditing}
                          />
                        </div>

                        <Select
                          value={watch(`addOnServices.${addOnIdx}.pricingRules.${ruleIdx}.currency`)}
                          disabled={!isEditing}
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
                          onClick={() => removeRule(ruleIdx)}
                          disabled={!isEditing || ruleFields.length === 1}
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
          })}
        </CardContent>
      </Card>

      {/* ==== Additional Charges ==== */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-[#2160AD]">
            <DollarSign className="w-5 h-5" />
            Additional Charges
          </CardTitle>
          <Button
            type="button"
            onClick={() =>
              appendCharge({
                name: "",
                unit: "Unit",
                active: true,
                isFixed: false,
                pricingRules: [
                  {
                    rule: "Every (Cost Per Unit)",
                    units: 1,
                    amount: 0,
                    currency: "SGD",
                  },
                ],
              })
            }
            disabled={!isEditing}
            className="bg-[#2160AD] hover:bg-[#1a4d8c] text-white"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Additional Charge
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          {chargeFields.map((charge, chargeIdx) => {
            const {
              fields: ruleFields,
              append: appendRule,
              remove: removeRule,
            } = useFieldArray({
              control,
              name: `additionalCharges.${chargeIdx}.pricingRules`,
            });

            const unit = watch(`additionalCharges.${chargeIdx}.unit`) || "Unit";
            const isFixed = charge.isFixed;

            return (
              <div
                key={charge.id}
                className="border-2 border-[#e0e0e0] rounded-lg p-6 space-y-4"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[#2160AD] font-semibold">
                    {isFixed ? charge.name + " (Mandatory)" : `Additional Charge ${chargeIdx + 1}`}
                  </h3>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Switch
                        {...register(`additionalCharges.${chargeIdx}.active`)}
                        disabled={!isEditing}
                      />
                      <Label className="text-sm">Active</Label>
                    </div>
                    {!isFixed && chargeFields.length > 2 && (
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeCharge(chargeIdx)}
                        disabled={!isEditing}
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
                      disabled={isFixed || !isEditing}
                      readOnly={isFixed}
                      className={isFixed ? "header-bg-soft" : ""}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Unit</Label>
                    <Input
                      placeholder="e.g., hours"
                      {...register(`additionalCharges.${chargeIdx}.unit`)}
                      disabled={!isEditing}
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
                        appendRule({
                          rule: "Every (Cost Per Unit)",
                          units: 1,
                          amount: 0,
                          currency: "SGD",
                        })
                      }
                      disabled={!isEditing}
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add Rule
                    </Button>
                  </div>

                  <div className="bg-[#f7f7f8] p-4 rounded-lg space-y-3">
                    <div className="grid grid-cols-5 gap-4 pb-2 border-b border-gray-300">
                      <div className="text-sm font-semibold text-[#29384d]">Rule</div>
                      <div className="text-sm font-semibold text-[#29384d]">Unit ({unit})</div>
                      <div className="text-sm font-semibold text-[#29384d]">Amount</div>
                      <div className="text-sm font-semibold text-[#29384d]">Type</div>
                      <div className="text-sm font-semibold text-[#29384d]">Actions</div>
                    </div>

                    {ruleFields.map((rule, ruleIdx) => (
                      <div
                        key={rule.id}
                        className="grid grid-cols-5 gap-4 items-center"
                      >
                        <Select
                          value={watch(`additionalCharges.${chargeIdx}.pricingRules.${ruleIdx}.rule`)}
                          onValueChange={() => {}}
                          disabled={!isEditing}
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
                            <SelectItem value="Greater than">
                              Greater than
                            </SelectItem>
                          </SelectContent>
                        </Select>

                        <Input
                          type="number"
                          min="1"
                          placeholder="0"
                          {...register(
                            `additionalCharges.${chargeIdx}.pricingRules.${ruleIdx}.units`,
                            { valueAsNumber: true }
                          )}
                          disabled={!isEditing}
                        />

                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                          <Input
                            type="number"
                            step="0.01"
                            min="0"
                            placeholder="0.00"
                            className="pl-8"
                            {...register(
                              `additionalCharges.${chargeIdx}.pricingRules.${ruleIdx}.amount`,
                              { valueAsNumber: true }
                            )}
                            disabled={!isEditing}
                          />
                        </div>

                        <Select
                          value={watch(`additionalCharges.${chargeIdx}.pricingRules.${ruleIdx}.currency`)}
                          disabled={!isEditing}
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
                          onClick={() => removeRule(ruleIdx)}
                          disabled={!isEditing || ruleFields.length === 1}
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
          })}
        </CardContent>
      </Card>
    </div>
  );
}