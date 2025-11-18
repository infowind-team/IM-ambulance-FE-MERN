// src/components/contracts/CreateContractForm.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"; 
import { useRouter } from "next/navigation";
import { ContractFormData, contractSchema } from "../add/contract";
import TripServices from "../add/TripServices";
import SupportServices from "../add/SupportServices";
import AddOnServices from "../add/AddOnServices";
import AdditionalCharges from "../add/AdditionalCharges";
 

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

type FormValues = any;

type Props = {
  isEditing: boolean;
};

export default function RatesSection({ isEditing }: Props) {
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
      <div className="flex-1 w-full overflow-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <TripServices control={control} register={register} />
          <SupportServices control={control} register={register} />
          <AddOnServices control={control} register={register} watch={watch} />
          <AdditionalCharges control={control} register={register} watch={watch} />
        </form>
      </div>
    </>
  );
}