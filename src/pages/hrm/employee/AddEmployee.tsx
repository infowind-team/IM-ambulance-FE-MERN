// app/employee/add/page.tsx or wherever your file is
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ChevronLeft, ChevronRight, Plus, User, Building, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import EmployeeForm from "./EmployeeForm";
import DocumentsSection from "./DocumentsSection";
import PersonalDetailsForm from "./PersonalDetailsForm"; // ← New component

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
      name: z.string().min(1),
      relationship: z.string().min(1),
      contact: z.string().optional(),
      isEmergency: z.boolean(),
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

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema) as any,
    mode: "onBlur",
    defaultValues: {
      name: "",
      contact: "",
      email: "",
      maritalStatus: "",
      family: [{
        name: "",
        relationship: "Other",
        contact: "",
        isEmergency: false,
        dob: "",
        age: undefined,
      }],
    },
  });

  const { trigger, handleSubmit } = form;

  const goToStep = async (step: number) => {
    if (step > currentStep) {
      const isValid = await trigger();
      if (!isValid) return;
    }
    setCurrentStep(step);
  };

  const onSubmit = (data: FormData) => {
    console.log("Employee Added:", data);
    alert("Employee added successfully!");
    onBack();
  };

  return (
    <div className="flex flex-col bg-white h-screen">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" onClick={onBack}>
            <ChevronLeft className="w-4 h-4" /> Back
          </Button>
          <div>
            <h1 className="text-2xl font-semibold text-[#2160AD]">Add New Employee</h1>
            <p className="text-gray-600">Complete all sections to add employee</p>
          </div>
        </div>

        <div className="flex gap-3">
          {currentStep < steps.length && (
            <Button onClick={() => goToStep(currentStep + 1)} className="bg-[#2160AD]">
              Next <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          )}
          {currentStep === steps.length && (
            <>
              <Button variant="outline" onClick={onBack}>Cancel</Button>
              <Button form="employee-form" type="submit" className="bg-[#2160AD]">
                Add Employee
              </Button>
            </>
          )}
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - unchanged */}
        {/* ... your sidebar code ... */}

        {/* Main Content */}
        <div className="flex-1 overflow-auto p-6">
          <form id="employee-form" onSubmit={handleSubmit(onSubmit)}>
            {currentStep === 1 && <PersonalDetailsForm form={form} />}
            {currentStep === 2 && <EmployeeForm />}
            {currentStep === 3 && <DocumentsSection />}
          </form>
        </div>
      </div>
    </div>
  );
}