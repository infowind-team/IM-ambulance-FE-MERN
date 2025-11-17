import * as z from "zod";

export const schema = z.object({
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

export type FormData = z.infer<typeof schema>;