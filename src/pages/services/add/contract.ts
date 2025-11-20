// src/components/contracts/types/contract.ts
import * as z from "zod";

export const contractSchema = z.object({
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

export type ContractFormData = z.infer<typeof contractSchema>;