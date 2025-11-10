"use client";

import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  User,
  Building,
  Check,
} from "lucide-react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { cn } from "@/components/ui/utils";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import EmployeeForm from "./EmployeeForm";
import DocumentsSection from "./DocumentsSection";

// Zod Schema
const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  contact: z.string().regex(/^\+?\d{8,15}$/, "Invalid contact number"),
  email: z.string().email("Invalid email"),
  dob: z.string().optional(),
  maritalStatus: z.string().optional(),
  maritalStatusDate: z.string().optional(),

  postalCode: z.string().optional(),
  block: z.string().optional(),
  street: z.string().optional(),

  family: z.array(
    z.object({
      name: z.string().min(1, "Name required"),
      relationship: z.string().min(1, "Relationship required"),
      contact: z.string().optional(),
      isEmergency: z.boolean().default(false),
      dob: z.string().optional(),
      age: z.coerce.number().optional(),
    })
  ),
});

type FormData = z.infer<typeof formSchema>;

const steps = [
  { id: 1, name: "Personal Details", icon: User },
  { id: 2, name: "Employment Details", icon: Building },
  { id: 3, name: "Documents", icon: Check },
];

interface AddEmployeeProps {
  onBack: () => void;
}

export default function AddEmployee({ onBack }: AddEmployeeProps) {
  const [currentStep, setCurrentStep] = useState(1);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    trigger,
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema) as any,
    mode: "onBlur",
    defaultValues: {
      maritalStatus: "",
      family: [
        {
          name: "",
          relationship: "Other",
          contact: "",
          isEmergency: false,
          dob: "",
          age: undefined,
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "family",
  });

  const goToStep = async (step: number) => {
    if (step > currentStep) {
      const fieldsToValidate =
        step === 2
          ? ["name", "contact", "email"]
          : step === 3
            ? ["postalCode", "block", "street"]
            : [];
      const result =
        fieldsToValidate.length > 0
          ? await trigger(fieldsToValidate as any)
          : true;
      if (!result) return;
    }
    setCurrentStep(step);
  };

  const onSubmit = (data: FormData) => {
    console.log("Employee Added:", data);
    alert("Employee added successfully!");
    onBack();
  };

  return (
    <div className="flex flex-col bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" onClick={onBack}>
            <ChevronLeft className="w-4 h-4" /> Back
          </Button>
          <div>
            <h1 className="text-2xl font-semibold text-[#2160AD]">
              Add New Employee
            </h1>
            <p className="text-gray-600">
              Complete all sections to add employee
            </p>
          </div>
        </div>
        {currentStep < steps.length && (
          <Button
            className="bg-[#2160AD] hover:bg-[#1a4d8c]"
            onClick={() => goToStep(currentStep + 1)}
          >
            Next Section <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        )}
        {/* Final Submit */}
        {currentStep === steps.length && (
          <div className="flex justify-end gap-3">
            <Button type="button" variant="outline" onClick={onBack}>
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-[#2160AD] hover:bg-[#1a4d8c]"
            >
              Add Employee +
            </Button>
          </div>
        )}
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-80 border-r header-bg-soft flex flex-col">
          <div className="p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Employee Setup</h3>
            <div className="space-y-2">
              {steps.map((step) => {
                const Icon = step.icon;
                const isActive = currentStep === step.id;
                const isComplete = currentStep > step.id;

                return (
                  <button
                    key={step.id}
                    onClick={() => goToStep(step.id)}
                    className={cn(
                      "w-full text-left p-4 rounded-lg transition-all flex items-center gap-3",
                      isActive && "bg-[#2160AD] text-white shadow-lg",
                      !isActive &&
                      "bg-white text-gray-700 hover:bg-gray-100 border"
                    )}
                  >
                    <div
                      className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center",
                        isActive && "bg-white/20",
                        isComplete && "bg-green-100",
                        !isActive && !isComplete && "bg-gray-100"
                      )}
                    >
                      <Icon
                        className={cn(
                          "w-5 h-5",
                          isActive && "text-white",
                          isComplete && "text-green-600",
                          !isActive && !isComplete && "text-gray-500"
                        )}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{step.name}</span>
                        <ChevronRight
                          className={cn(
                            "w-4 h-4",
                            isActive ? "text-white" : "text-gray-400"
                          )}
                        />
                      </div>
                      <div
                        className={cn(
                          "text-sm",
                          isActive ? "opacity-75 text-white" : "text-gray-500"
                        )}
                      >
                        {isComplete
                          ? "Complete"
                          : currentStep === step.id
                            ? "In Progress"
                            : "Incomplete"}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="p-6">

            {currentStep === 1 && (
              <div className="">
                <div className="space-y-6">
                  <Card className="overflow-hidden">
                    <CardHeader className="header-bg-soft pb-6">
                      <CardTitle>Personal Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>
                            Staff Name <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            placeholder="Enter full name"
                            {...register("name")}
                          />
                          {errors.name && (
                            <p className="text-sm text-red-500">
                              {errors.name.message}
                            </p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label>
                            Contact <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            placeholder="+65 9000 0000"
                            {...register("contact")}
                          />
                          {errors.contact && (
                            <p className="text-sm text-red-500">
                              {errors.contact.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>
                            Email <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            type="email"
                            placeholder="email@example.com"
                            {...register("email")}
                          />
                          {errors.email && (
                            <p className="text-sm text-red-500">
                              {errors.email.message}
                            </p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label>Date of Birth</Label>
                          <Input type="date" {...register("dob")} />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Marital Status</Label>
                          <Select
                            onValueChange={(value) =>
                              setValue("maritalStatus", value)
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="single">Single</SelectItem>
                              <SelectItem value="married">Married</SelectItem>
                              <SelectItem value="divorced">Divorced</SelectItem>
                              <SelectItem value="widowed">Widowed</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label>Marital Status Date</Label>
                          <Input type="date" {...register("maritalStatusDate")} />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="overflow-hidden">
                    <CardHeader className="header-bg-soft pb-6">
                      <CardTitle>Address Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label>Postal Code</Label>
                          <Input
                            placeholder="123456"
                            {...register("postalCode")}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Block/House No</Label>
                          <Input placeholder="Block 123" {...register("block")} />
                        </div>
                        <div className="space-y-2">
                          <Label>Street Name</Label>
                          <Input
                            placeholder="Main Street"
                            {...register("street")}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="overflow-hidden">
                    <CardHeader className="flex flex-row items-center justify-between header-bg-soft pb-6">
                      <CardTitle>Family Members</CardTitle>
                      <Button
                        type="button"
                        size="sm"
                        className="bg-[#2160AD] hover:bg-[#1d5497]"
                        onClick={() =>
                          append({
                            name: "",
                            relationship: "Other",
                            contact: "",
                            isEmergency: false,
                            dob: "",
                            age: undefined,
                          })
                        }
                      >
                        <Plus className="w-4 h-4 mr-1" /> Add
                      </Button>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {fields.map((field, index) => (
                        <div
                          key={field.id}
                          className="border rounded-lg p-4 space-y-4"
                        >
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label>Name</Label>
                              <Input
                                placeholder="Family member name"
                                {...register(`family.${index}.name`)}
                              />
                              {errors.family?.[index]?.name && (
                                <p className="text-sm text-red-500">
                                  {errors.family[index].name?.message}
                                </p>
                              )}
                            </div>
                            <div className="space-y-2">
                              <Label>Relationship</Label>
                              <Select
                                onValueChange={(value) =>
                                  setValue(`family.${index}.relationship`, value)
                                }
                                defaultValue={watch(
                                  `family.${index}.relationship`
                                )}
                              >
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="Spouse">Spouse</SelectItem>
                                  <SelectItem value="Child">Child</SelectItem>
                                  <SelectItem value="Parent">Parent</SelectItem>
                                  <SelectItem value="Sibling">Sibling</SelectItem>
                                  <SelectItem value="Other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label>Contact Number</Label>
                              <Input
                                placeholder="+65 9000 0000"
                                {...register(`family.${index}.contact`)}
                              />
                            </div>
                            <div className="flex items-center space-x-2 h-9">
                              <Checkbox
                                id={`emergency-${index}`}
                                {...register(`family.${index}.isEmergency`)}
                              />
                              <Label
                                htmlFor={`emergency-${index}`}
                                className="cursor-pointer text-sm"
                              >
                                Set as emergency contact
                              </Label>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label>Date of Birth</Label>
                              <Input
                                type="date"
                                {...register(`family.${index}.dob`)}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>Age</Label>
                              <Input
                                type="number"
                                placeholder="Age"
                                {...register(`family.${index}.age`, {
                                  valueAsNumber: true,
                                })}
                              />
                            </div>
                          </div>

                          {fields.length > 1 && (
                            <div className="flex justify-end pt-2">
                              <Button
                                type="button"
                                variant="destructive"
                                size="sm"
                                onClick={() => remove(index)}
                                className="w-full"
                              >
                                Remove
                              </Button>
                            </div>
                          )}
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="">
                <EmployeeForm />
              </div>
            )}

            {currentStep === 3 && (
              <div className="">
                <DocumentsSection />
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
