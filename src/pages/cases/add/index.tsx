"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FunctionalHeader from "@/layout/FunctionalHeader";
import CaseStatus from "./CaseStatus";
import BookingInfo from "./BookingInfo";
import PatientInfo from "./PatientInfo";
import NextOfKin from "./NextOfKin";
import TripTypeSelector from "./TripTypeSelector";
import TripDetails from "./TripDetails";
import VehicleAssignment from "./VehicleAssignment";
import BillingSummary from "./BillingSummary";
import AdditionalRemarks from "./AdditionalRemarks";
import { CaseFormValues, SelectedService, Trip, TripType } from "./types";
import ServiceSelection from "./ServiceSelection";
import { Navigation, User } from "lucide-react";
import { Form } from "@/components/ui/form";
import { useFieldArray, useForm, useWatch } from "react-hook-form";

const createEmptyTrip = (index: number): Trip => ({
  id: `trip-${index + 1}`,
  pickupLocation: "",
  pickupBlock: "",
  pickupUnit: "",
  pickupWard: "",
  pickupRoom: "",
  pickupBed: "",
  dropoffLocation: "",
  dropoffBlock: "",
  dropoffUnit: "",
  dropoffWard: "",
  dropoffRoom: "",
  dropoffBed: "",
  scheduledTime: "",
});

export default function CasesAddPage() {
  const form = useForm<CaseFormValues>({
    defaultValues: {
      status: "Open",
      intake: "Phone Call",
      bookingDate: null,
      bookingTime: "",
      requestorName: "",
      requestorContact: "",
      transportMode: "Wheelchair",
      patientName: "",
      patientNric: "",
      patientAge: "",
      patientWeight: "",
      gender: "Male",
      patientContact: "",
      patientCondition: "",
      nokName: "",
      nokContact: "",
      nokRelationship: "Parent",
      nokAccompanying: "0",
      tripType: "one-way",
      trips: [createEmptyTrip(0)],
      vehicleType: "Ambulance",
      vehicleNumber: "AMB001",
      mto: "",
      emt: "",
      escort: "",
      remarks: "",
    },
    mode: "onSubmit",
  });

  const tripType = useWatch({
    control: form.control,
    name: "tripType",
  }) as TripType;

  const { fields: tripFields, replace } = useFieldArray({
    control: form.control,
    name: "trips",
  });

  // === Services ===
  const [serviceSearch, setServiceSearch] = useState("");
  const [selectedServices, setSelectedServices] = useState<SelectedService[]>([]);

  useEffect(() => {
    const count = tripType === "one-way" ? 1 : tripType === "two-way" ? 2 : 3;
    const currentTrips = form.getValues("trips");
    if (currentTrips.length === count) return;

    if (currentTrips.length > count) {
      replace(currentTrips.slice(0, count));
      return;
    }

    const missing = count - currentTrips.length;
    const nextTrips = [
      ...currentTrips,
      ...Array.from({ length: missing }, (_, i) => createEmptyTrip(currentTrips.length + i)),
    ];
    replace(nextTrips);
  }, [tripType, form, replace]);

  const onSubmit = (values: CaseFormValues) => {
    console.log("Case Created:", {
      ...values,
      selectedServices,
    });
    // API call here
  };

  return (
    <>
      <FunctionalHeader
        title="Add New Case"
        breadcrumb={[
          { label: "Operations" },
          { label: "Cases", href: "/cases" },
          { label: "Add New Case" }
        ]}
      />
      <div className="flex-1 w-full overflow-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="p-4 lg:p-6 space-y-6 w-full">
            <CaseStatus />

            <BookingInfo />

            <Card className="overflow-hidden w-full">
              <CardHeader className="header-bg-soft pb-6">
                <CardTitle className="flex items-center gap-2"><User className="w-5 h-5" /> Patient Information</CardTitle>
              </CardHeader>
              <CardContent>
                <PatientInfo />
                <hr className="my-4" />
                <NextOfKin />
              </CardContent>
            </Card>

            <Card className="overflow-hidden w-full">
              <CardHeader className="header-bg-soft pb-6">
                <CardTitle className="flex items-center gap-2"><Navigation className="w-5 h-5" /> Trip Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <TripTypeSelector />
                <hr className="mb-4" />
                <TripDetails trips={tripFields} />
                <VehicleAssignment />
              </CardContent>
            </Card>

            <ServiceSelection
              selectedServices={selectedServices}
              setSelectedServices={setSelectedServices}
              serviceSearch={serviceSearch}
              setServiceSearch={setServiceSearch}
            />

            <BillingSummary services={selectedServices} baseTransportFee={85.00} />

            <AdditionalRemarks />

            <div className="flex justify-end gap-4 border-t pt-6">
              <Button type="button" variant="outline" size="lg" onClick={() => form.reset()}>
                Cancel
              </Button>
              <Button type="submit" size="lg">Create Case</Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
}