// src/components/contracts/CreateContractForm.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contractSchema, ContractFormData } from "./contract";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import FunctionalHeader from "@/layout/FunctionalHeader";
import { useRouter } from "next/navigation";

// Section Components (correct relative paths)
import ContractInformation from "./ContractInformation";
import ContractDocuments from "./ContractDocuments";
import TripServices from "./TripServices";
import SupportServices from "./SupportServices";
import AddOnServices from "./AddOnServices";
import AdditionalCharges from "./AdditionalCharges";
import BranchInformation from "./BranchInformation";

const defaultValues: Partial<ContractFormData> = {
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
    {
      type: "",
      officeHours: 0,
      nonOfficeHours: 0,
      weekendPH: 0,
      active: true,
    },
  ],
  supportServices: [
    {
      type: "",
      officeHours: 0,
      nonOfficeHours: 0,
      weekendPH: 0,
      active: true,
    },
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
};

export default function CreateContractForm() {
  const router = useRouter();

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ContractFormData>({
    resolver: zodResolver(contractSchema) as any, // workaround for type incompatibility between zodResolver/contractSchema and useForm generic
    defaultValues,
  });

  const onSubmit = (data: ContractFormData) => {
    console.log("Contract Submitted:", data);
    // TODO: Send to API
    alert("Contract created successfully! (Check console)");
  };

  return (
    <>
      <FunctionalHeader
        title="Add New Contract"
        breadcrumb={[
          { label: "Management" },
          { label: "Services" },
          { label: "Add New Contract" },
        ]}
      />

      <div className="flex-1 w-full overflow-auto">
        <div className="px-6 pt-4 pb-2">
          <Button variant="outline" onClick={() => router.back()}>
            <ChevronLeft className="w-5 h-5 mr-2" />
            Back to Services
          </Button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-8">
          {/* Section Components */}
          <ContractInformation register={register} errors={errors} />
          <ContractDocuments />
          <BranchInformation control={control} register={register} />
          <TripServices control={control} register={register} />
          <SupportServices control={control} register={register} />
          <AddOnServices control={control} register={register} watch={watch} />
          <AdditionalCharges control={control} register={register} watch={watch} />

          {/* Submit Buttons */}
          <div className="flex justify-end gap-4 pt-8 border-t border-gray-200">
            <Button type="button" variant="outline" onClick={() => router.back()}>
              Cancel
            </Button>
            <Button type="submit" className="bg-[#2160AD] hover:bg-[#1a4d8c] text-white">
              Create Contract
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}