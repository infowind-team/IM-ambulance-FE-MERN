import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, DollarSign, FileText, Plus } from "lucide-react";
import {
  useFieldArray,
  UseFieldArrayReturn,
  UseFormReturn,
} from "react-hook-form";
import AdditionalChargeCard from "./AdditionalChargeCard";
import AddOnServiceCard from "./AddOnServiceCard";
import RateRow from "./RateRow";

type FormValues = any;

type SectionProps = {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  onAdd?: () => void;
  addLabel?: string;
  disabled: boolean;
};

const Section = ({
  title,
  icon,
  children,
  onAdd,
  addLabel,
  disabled,
}: SectionProps) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between">
      <CardTitle className="flex items-center gap-2 text-[#2160AD]">
        {icon}
        {title}
      </CardTitle>
      {onAdd && (
        <Button
          type="button"
          onClick={onAdd}
          className="bg-[#2160AD] hover:bg-[#1a4d8c] text-white"
          disabled={disabled}
        >
          <Plus className="w-4 h-4" />
          {addLabel}
        </Button>
      )}
    </CardHeader>
    <CardContent>{children}</CardContent>
  </Card>
);

type Props = {
  form: UseFormReturn<FormValues>;
  isEditing: boolean;
};

export default function RatesSection({ form, isEditing }: Props) {
  const { register, control, watch } = form;

  // ---- Trip -------------------------------------------------
  const {
    fields: tripFields,
    append: appendTrip,
    remove: removeTrip,
  } = useFieldArray({ control, name: "tripServices" });

  // ---- Support -----------------------------------------------
  const {
    fields: supportFields,
    append: appendSupport,
    remove: removeSupport,
  } = useFieldArray({ control, name: "supportServices" });

  // ---- Add-on ------------------------------------------------
  const {
    fields: addOnFields,
    append: appendAddOn,
    remove: removeAddOn,
  } = useFieldArray({ control, name: "addOnServices" });

  // ---- Additional Charges ------------------------------------
  const {
    fields: chargeFields,
    append: appendCharge,
    remove: removeCharge,
  } = useFieldArray({ control, name: "additionalCharges" });

  return (
    <>
      {/* Trip Types */}
      <Section
        title="Trip Types"
        icon={<FileText className="w-5 h-5" />}
        onAdd={() =>
          appendTrip({
            name: "",
            office: 0,
            nonOffice: 0,
            weekend: 0,
            active: true,
          })
        }
        addLabel="Add Trip Type"
        disabled={!isEditing}
      >
        <div className="bg-[rgba(61,61,61,0.03)] rounded-lg border border-gray-100 p-4">
          <div className="grid grid-cols-6 gap-4 pb-4 mb-4 border-b border-gray-200">
            {[
              "Trip Service",
              "Office Hours",
              "Non-Office Hours",
              "Weekend & PH",
              "Active",
              "Actions",
            ].map((h) => (
              <div key={h} className="font-semibold text-[#29384d] text-base">
                {h}
              </div>
            ))}
          </div>
          <div className="space-y-4">
            {tripFields.map((_, i) => (
              <RateRow
                key={tripFields[i].id}
                index={i}
                namePrefix="tripServices"
                register={register}
                disabled={!isEditing}
                onRemove={removeTrip}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Support Services */}
      <Section
        title="Support Services"
        icon={<Building2 className="w-5 h-5" />}
        onAdd={() =>
          appendSupport({
            name: "",
            office: 0,
            nonOffice: 0,
            weekend: 0,
            active: true,
          })
        }
        addLabel="Add Support Service Line"
        disabled={!isEditing}
      >
        <div className="bg-[rgba(61,61,61,0.03)] rounded-lg border border-gray-100 p-4">
          <div className="grid grid-cols-6 gap-4 pb-4 mb-4 border-b border-gray-200">
            {[
              "Service Type",
              "Office Hours",
              "Non-Office Hours",
              "Weekend & PH",
              "Active",
              "Actions",
            ].map((h) => (
              <div key={h} className="font-semibold text-[#29384d] text-base">
                {h}
              </div>
            ))}
          </div>
          <div className="space-y-4">
            {supportFields.map((_, i) => (
              <RateRow
                key={supportFields[i].id}
                index={i}
                namePrefix="supportServices"
                register={register}
                disabled={!isEditing}
                onRemove={removeSupport}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Add-on Services */}
      <Section
        title="Add-on Services"
        icon={<DollarSign className="w-5 h-5" />}
        disabled={!isEditing}
        onAdd={() =>
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
        addLabel="Add Add-on Service"
      >
        <div className="space-y-6">
          {addOnFields.map((addOn, idx) => {
            const ruleArray = useFieldArray({
              control,
              name: `addOnServices.${idx}.pricingRules`,
            });
            return (
              <AddOnServiceCard
                key={addOn.id}
                addOnIdx={idx}
                fieldArray={ruleArray}
                register={register}
                watch={watch}
                disabled={!isEditing}
                onRemoveAddOn={removeAddOn}
                canRemove={addOnFields.length > 1}
              />
            );
          })}
        </div>
      </Section>

      {/* Additional Charges */}
      <Section
        title="Additional Charges"
        icon={<DollarSign className="w-5 h-5" />}
        disabled={!isEditing}
        onAdd={() =>
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
        addLabel="Add Additional Charge"
      >
        <div className="space-y-6">
          {chargeFields.map((charge, idx) => {
            const ruleArray = useFieldArray({
              control,
              name: `additionalCharges.${idx}.pricingRules`,
            });
            return (
              <AdditionalChargeCard
                key={charge.id}
                chargeIdx={idx}
                fieldArray={ruleArray}
                register={register}
                watch={watch}
                disabled={!isEditing}
                isFixed={"isFixed" in charge ? (charge as any).isFixed : false}
                onRemoveCharge={removeCharge}
                canRemove={chargeFields.length > 2}
              />
            );
          })}
        </div>
      </Section>
    </>
  );
}
