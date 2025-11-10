"use client";

import { useForm, useFieldArray, Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Building2,
  MapPin,
  Calendar,
  DollarSign,
  Plus,
  Trash2,
  Copy,
  Clock,
  ChevronDown,
  ChevronLeft,
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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FunctionalHeader from "@/layout/FunctionalHeader";
import router from "next/router";

// Zod schema
const contractSchema = z.object({
  healthcareFacilityName: z.string().min(1, "Required"),
  contractId: z.string().min(1, "Required"),
  contractStartDate: z.string().min(1, "Required"),
  contractEndDate: z.string().min(1, "Required"),
  branches: z.array(
    z.object({
      name: z.string().min(1, "Required"),
      postalCode: z.string().min(1, "Required"),
      address: z.string().min(1, "Required"),
      contactPerson: z.string().min(1, "Required"),
      phone: z.string().min(1, "Required"),
      email: z.string().email("Invalid email"),
    })
  ),
  tripServices: z.array(
    z.object({
      type: z.string().min(1, "Required"),
      officeHours: z.number().min(0),
      nonOfficeHours: z.number().min(0),
      weekendPH: z.number().min(0),
      active: z.boolean(),
    })
  ),
  supportServices: z.array(
    z.object({
      type: z.string().min(1, "Required"),
      officeHours: z.number().min(0),
      nonOfficeHours: z.number().min(0),
      weekendPH: z.number().min(0),
      active: z.boolean(),
    })
  ),
  addOnServices: z.array(
    z.object({
      name: z.string().min(1, "Required"),
      unit: z.string().min(1, "Required"),
      pricingRules: z.array(
        z.object({
          rule: z.string().min(1),
          units: z.number().min(1),
          amount: z.number().min(0),
          currency: z.string().default("SGD"),
          active: z.boolean(),
        })
      ),
    })
  ),
  additionalCharges: z.array(
    z.object({
      name: z.string().min(1, "Required"),
      unit: z.string().min(1, "Required"),
      isMandatory: z.boolean().optional(),
      pricingRules: z.array(
        z.object({
          rule: z.string().min(1),
          units: z.number().min(1),
          amount: z.number().min(0),
          currency: z.string().default("SGD"),
          active: z.boolean(),
        })
      ),
    })
  ),
});

type ContractFormData = z.infer<typeof contractSchema>;

export default function CreateContractPage() {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ContractFormData>({
    resolver: zodResolver(contractSchema) as Resolver<ContractFormData>,
    defaultValues: {
      healthcareFacilityName: "",
      contractId: "",
      contractStartDate: "",
      contractEndDate: "",
      branches: [
        {
          name: "",
          postalCode: "",
          address: "",
          contactPerson: "",
          phone: "",
          email: "",
        },
      ],
      tripServices: [
        { type: "", officeHours: 0, nonOfficeHours: 0, weekendPH: 0, active: true },
      ],
      supportServices: [
        { type: "", officeHours: 0, nonOfficeHours: 0, weekendPH: 0, active: true },
      ],
      addOnServices: [
        {
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
        },
      ],
      additionalCharges: [
        {
          name: "Waiting Fee",
          unit: "Hours",
          isMandatory: true,
          pricingRules: [
            { rule: "First (Fixed cost for initial units)", units: 1, amount: 0, currency: "SGD", active: true },
            { rule: "Next (Fixed cost for following units)", units: 1, amount: 0, currency: "SGD", active: true },
          ],
        },
        {
          name: "Cancellation Charges",
          unit: "Hours",
          isMandatory: true,
          pricingRules: [
            { rule: "First (Fixed cost for initial units)", units: 1, amount: 0, currency: "SGD", active: true },
            { rule: "Next (Fixed cost for following units)", units: 1, amount: 0, currency: "SGD", active: true },
          ],
        },
      ],
    },
  });

  // Field arrays
  const {
    fields: branchFields,
    append: appendBranch,
    remove: removeBranch,
  } = useFieldArray({ control, name: "branches" });

  const {
    fields: tripFields,
    append: appendTrip,
    remove: removeTrip,
  } = useFieldArray({ control, name: "tripServices" });

  const {
    fields: supportFields,
    append: appendSupport,
    remove: removeSupport,
  } = useFieldArray({ control, name: "supportServices" });

  const {
    fields: addOnFields,
    append: appendAddOn,
    remove: removeAddOn,
  } = useFieldArray({ control, name: "addOnServices" });

  const {
    fields: chargeFields,
    append: appendCharge,
    remove: removeCharge,
  } = useFieldArray({ control, name: "additionalCharges" });

  const onSubmit = (data: ContractFormData) => {
    console.log("Submitted:", data);
  };

  return (
    <>
      <FunctionalHeader title="Add New Contract" breadcrumb={[{ label: "Management" }, { label: "Services" }, { label: "Add New Contract" }]} />
      <div className="flex-1 w-full overflow-auto">
        <div className="px-6 pt-4 pb-2 flex items-center justify-between">
          <Button variant="outline" onClick={() => router.push("/services")}><ChevronLeft className="w-5 h-5" /> Back to Services</Button>
        </div>

        <div className="p-6 space-y-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Contract Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#2160AD]">
                  <Building2 className="w-5 h-5" />
                  Contract Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Healthcare Facility Name</Label>
                    <div className="relative">
                      <Input
                        placeholder="Search or enter healthcare facility name"
                        {...register("healthcareFacilityName")}
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full p-0"
                      >
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Contract ID</Label>
                    <Input placeholder="Enter contract ID" {...register("contractId")} />
                  </div>
                  <div className="space-y-2">
                    <Label>Contract Start Date</Label>
                    <Input type="date" {...register("contractStartDate")} />
                  </div>
                  <div className="space-y-2">
                    <Label>Contract End Date</Label>
                    <Input type="date" {...register("contractEndDate")} />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contract Documents */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#2160AD]">
                  <Building2 className="w-5 h-5" />
                  Contract Documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative border-2 border-dashed rounded-lg p-8 text-center transition-colors border-gray-300 hover:border-[#2160AD] cursor-pointer">
                  <input
                    id="document-upload"
                    type="file"
                    multiple
                    className="hidden"
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.txt"
                  />
                  <div className="space-y-2">
                    <Building2 className="w-8 h-8 mx-auto text-gray-400" />
                    <div className="text-base font-medium text-gray-700">
                      Drag and drop files here
                    </div>
                    <div className="text-sm text-gray-500">or click to browse files</div>
                    <div className="text-xs text-gray-400">
                      Supports PDF, DOC, DOCX, XLS, XLSX, TXT files
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Upload contract documents, terms of service, or other relevant files
                </p>
              </CardContent>
            </Card>

            {/* Branch Information */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-[#2160AD]">
                  <MapPin className="w-5 h-5" />
                  Branch Information
                </CardTitle>
                <Button
                  type="button"
                  onClick={() =>
                    appendBranch({
                      name: "",
                      postalCode: "",
                      address: "",
                      contactPerson: "",
                      phone: "",
                      email: "",
                    })
                  }
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Branch
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                {branchFields.map((field, index) => (
                  <div key={field.id} className="p-4 border rounded-lg space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-[#2160AD]">Branch {index + 1}</h4>
                      {branchFields.length > 1 && (
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeBranch(index)}
                        >
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </Button>
                      )}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Branch Name</Label>
                        <Input
                          placeholder="Enter branch name"
                          {...register(`branches.${index}.name`)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Postal Code</Label>
                        <Input
                          placeholder="Enter postal code"
                          {...register(`branches.${index}.postalCode`)}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Address</Label>
                      <Textarea
                        placeholder="Enter complete address"
                        {...register(`branches.${index}.address`)}
                        className="min-h-20"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label>Contact Person</Label>
                        <Input
                          placeholder="Contact person name"
                          {...register(`branches.${index}.contactPerson`)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Phone Number</Label>
                        <Input
                          placeholder="e.g., +65 6225 5554"
                          {...register(`branches.${index}.phone`)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Email</Label>
                        <Input
                          type="email"
                          placeholder="contact@healthcare.com"
                          {...register(`branches.${index}.email`)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Trip Services */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-[#2160AD]">
                  <Calendar className="w-5 h-5" />
                  Trip Services
                </CardTitle>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="border-[#2160AD] text-[#2160AD] hover:bg-[#2160AD]/10"
                  >
                    <Clock className="w-4 h-4 mr-2" />
                    Configure Hours
                  </Button>
                  <Button
                    type="button"
                    onClick={() =>
                      appendTrip({
                        type: "",
                        officeHours: 0,
                        nonOfficeHours: 0,
                        weekendPH: 0,
                        active: true,
                      })
                    }
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Trip Service Line
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-[rgba(61,61,61,0.03)] rounded-lg border border-gray-100 p-4">
                  <div className="grid grid-cols-6 gap-4 pb-4 border-b border-gray-200 mb-4">
                    <div className="font-semibold text-[#29384d] text-base">Trip Service</div>
                    <div className="font-semibold text-[#29384d] text-base">Office Hours</div>
                    <div className="font-semibold text-[#29384d] text-base">Non-Office Hours</div>
                    <div className="font-semibold text-[#29384d] text-base">Weekend & PH</div>
                    <div className="font-semibold text-[#29384d] text-base">Active</div>
                    <div className="font-semibold text-[#29384d] text-base">Actions</div>
                  </div>
                  <div className="space-y-4">
                    {tripFields.map((field, index) => (
                      <div key={field.id} className="grid grid-cols-6 gap-4 items-center">
                        <Input
                          placeholder="Enter trip type"
                          {...register(`tripServices.${index}.type`)}
                          className="bg-white"
                        />
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                          <Input
                            type="number"
                            step="0.01"
                            min="0"
                            {...register(`tripServices.${index}.officeHours`, { valueAsNumber: true })}
                            className="pl-8 bg-white"
                          />
                        </div>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                          <Input
                            type="number"
                            step="0.01"
                            min="0"
                            {...register(`tripServices.${index}.nonOfficeHours`, { valueAsNumber: true })}
                            className="pl-8 bg-white"
                          />
                        </div>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                          <Input
                            type="number"
                            step="0.01"
                            min="0"
                            {...register(`tripServices.${index}.weekendPH`, { valueAsNumber: true })}
                            className="pl-8 bg-white"
                          />
                        </div>
                        <Switch {...register(`tripServices.${index}.active`)} defaultChecked />
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="icon">
                            <Copy className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="icon" onClick={() => removeTrip(index)}>
                            <Trash2 className="w-4 h-4 text-red-500" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Support Services */}
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
                      type: "",
                      officeHours: 0,
                      nonOfficeHours: 0,
                      weekendPH: 0,
                      active: true,
                    })
                  }
                  className="bg-[#2160AD] hover:bg-[#1a4d8c] text-white"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Support Service Line
                </Button>
              </CardHeader>
              <CardContent>
                <div className="bg-[#fcfcfc] rounded-lg border border-gray-100 p-4">
                  <div className="grid grid-cols-6 gap-4 pb-4 border-b border-gray-200 mb-4">
                    <div className="font-semibold text-[#29384d] text-base">Service Type</div>
                    <div className="font-semibold text-[#29384d] text-base">Office Hours</div>
                    <div className="font-semibold text-[#29384d] text-base">Non-Office Hours</div>
                    <div className="font-semibold text-[#29384d] text-base">Weekend & PH</div>
                    <div className="font-semibold text-[#29384d] text-base">Active</div>
                    <div className="font-semibold text-[#29384d] text-base">Actions</div>
                  </div>
                  <div className="space-y-4">
                    {supportFields.map((field, index) => (
                      <div key={field.id} className="grid grid-cols-6 gap-4 items-center">
                        <Input
                          placeholder="Enter service type"
                          {...register(`supportServices.${index}.type`)}
                          className="bg-white"
                        />
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                          <Input
                            type="number"
                            step="0.01"
                            min="0"
                            placeholder="0.00"
                            {...register(`supportServices.${index}.officeHours`, { valueAsNumber: true })}
                            className="pl-8 bg-white"
                          />
                        </div>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                          <Input
                            type="number"
                            step="0.01"
                            min="0"
                            placeholder="0.00"
                            {...register(`supportServices.${index}.nonOfficeHours`, { valueAsNumber: true })}
                            className="pl-8 bg-white"
                          />
                        </div>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                          <Input
                            type="number"
                            step="0.01"
                            min="0"
                            placeholder="0.00"
                            {...register(`supportServices.${index}.weekendPH`, { valueAsNumber: true })}
                            className="pl-8 bg-white"
                          />
                        </div>
                        <Switch {...register(`supportServices.${index}.active`)} defaultChecked />
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="icon">
                            <Copy className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="icon" onClick={() => removeSupport(index)}>
                            <Trash2 className="w-4 h-4 text-red-500" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Add-on Services */}
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
                  variant="outline"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Service
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                {addOnFields.map((addOn, addOnIndex) => {
                  const {
                    fields: ruleFields,
                    append: appendRule,
                    remove: removeRule,
                  } = useFieldArray({
                    control,
                    name: `addOnServices.${addOnIndex}.pricingRules`,
                  });

                  return (
                    <div key={addOn.id} className="p-4 border rounded-lg space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-[#2160AD]">
                          Add-on Service {addOnIndex + 1}
                        </h4>
                        {addOnFields.length > 1 && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeAddOn(addOnIndex)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Service Name</Label>
                          <Input
                            placeholder="e.g., Oxygen"
                            {...register(`addOnServices.${addOnIndex}.name`)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Unit</Label>
                          <Input
                            placeholder="Enter unit (e.g., Litre, Hour, Piece)"
                            {...register(`addOnServices.${addOnIndex}.unit`)}
                          />
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
                            <div>Unit ({watch(`addOnServices.${addOnIndex}.unit`) || "Unit"})</div>
                            <div>Amount Per Unit</div>
                            <div>Active</div>
                            <div>Actions</div>
                          </div>

                          {ruleFields.map((rule, ruleIndex) => (
                            <div
                              key={rule.id}
                              className="grid grid-cols-5 gap-4 p-3 header-bg-soft rounded-lg items-center"
                            >
                              <Select defaultValue="First (Fixed cost for initial units)">
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
                                  min="0"
                                  placeholder="0.00"
                                  {...register(`addOnServices.${addOnIndex}.pricingRules.${ruleIndex}.amount`, {
                                    valueAsNumber: true,
                                  })}
                                  className="flex-1"
                                />
                                <Select defaultValue="SGD">
                                  <SelectTrigger className="w-20">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="SGD">$</SelectItem>
                                    <SelectItem value="USD">$</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>

                              <div className="flex justify-center">
                                <Switch
                                  {...register(`addOnServices.${addOnIndex}.pricingRules.${ruleIndex}.active`)}
                                  defaultChecked
                                />
                              </div>

                              <div className="flex justify-center">
                                {ruleFields.length > 1 && (
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => removeRule(ruleIndex)}
                                    className="text-red-500 hover:text-red-700"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </Button>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Additional Charges */}
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
                  variant="outline"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Charge
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {chargeFields.map((charge, chargeIndex) => {
                  const isMandatory = charge.isMandatory;
                  const unit = watch(`additionalCharges.${chargeIndex}.unit`) || "hours";

                  const {
                    fields: tierFields,
                    append: appendTier,
                    remove: removeTier,
                  } = useFieldArray({
                    control,
                    name: `additionalCharges.${chargeIndex}.pricingRules`,
                  });

                  return (
                    <div key={charge.id} className="p-4 border rounded-lg space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-[#2160AD]">
                          {isMandatory ? `${charge.name} (Mandatory)` : `Additional Charge ${chargeIndex + 1}`}
                        </h4>
                        {!isMandatory && chargeFields.length > 2 && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeCharge(chargeIndex)}
                            className="text-red-500 hover:text-red-700"
                          >
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
                            readOnly={isMandatory}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Unit</Label>
                          <Select
                            defaultValue={unit}
                            onValueChange={(value) => {
                              // Optional: handle unit change
                            }}
                            disabled={isMandatory}
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

                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Label>Pricing Rules</Label>
                          <Button
                            type="button"
                            size="sm"
                            variant="outline"
                            onClick={() =>
                              appendTier({
                                rule: "First (Fixed cost for initial units)",
                                units: 1,
                                amount: 0,
                                currency: "SGD",
                                active: true,
                              })
                            }
                          >
                            <Plus className="w-4 h-4 mr-1" />
                            Add Tier
                          </Button>
                        </div>

                        <div className="grid grid-cols-5 gap-4 text-sm font-medium text-gray-600 px-3">
                          <div>Pricing Rule</div>
                          <div>Unit ({unit})</div>
                          <div>Amount Per Unit</div>
                          <div>Active</div>
                          <div>Actions</div>
                        </div>

                        {tierFields.map((tier, tierIndex) => (
                          <div
                            key={tier.id}
                            className="grid grid-cols-1 md:grid-cols-5 gap-3 p-0 rounded items-center"
                          >
                            <Select defaultValue={tier.rule}>
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
                              </SelectContent>
                            </Select>

                            <Input
                              type="number"
                              step="0.5"
                              min="0"
                              placeholder="0"
                              {...register(`additionalCharges.${chargeIndex}.pricingRules.${tierIndex}.units`, {
                                valueAsNumber: true,
                              })}
                            />

                            <div className="flex gap-2">
                              <Input
                                type="number"
                                step="0.01"
                                min="0"
                                placeholder="50.00"
                                {...register(`additionalCharges.${chargeIndex}.pricingRules.${tierIndex}.amount`, {
                                  valueAsNumber: true,
                                })}
                                className="flex-1"
                              />
                              <Select defaultValue="SGD">
                                <SelectTrigger className="w-16">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="SGD">$</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="flex items-center h-11">
                              <Switch
                                {...register(`additionalCharges.${chargeIndex}.pricingRules.${tierIndex}.active`)}
                                defaultChecked
                              />
                            </div>

                            <div className="flex items-center h-11">
                              {tierFields.length > 1 && (
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => removeTier(tierIndex)}
                                  className="text-red-500 hover:text-red-700 p-1 h-8 w-8"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Submit */}
            <div className="flex items-center justify-end gap-4 pt-6 border-t">
              <Button variant="outline">Cancel</Button>
              <Button type="submit" className="bg-[#2160AD] hover:bg-[#1a4d8c]">
                Create Contract
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}