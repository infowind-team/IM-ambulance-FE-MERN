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
  pickUpLocation: "",
  pickupBlock: "",
  pickupUnit: "",
  pickupWard: "",
  pickupRoom: "",
  pickupBed: "",
  dropOffLocation: "",
  dropoffBlock: "",
  dropoffUnit: "",
  dropoffWard: "",
  dropoffRoom: "",
  dropoffBed: "",
  pickUpTime: "",
  
});

export default function CasesAddPage() {
  const form = useForm<CaseFormValues>({
    defaultValues: {
      status: "Open",
      intakeMode: "Phone Call", // changed from intakeMode to intake
      bookingDate: null,
      bookingTime: "",
      requestorName: "",
      requestorContact: "",
      transportMode: "Wheelchair",
      patientName: "",
      nric: "", // changed from patientNric to nric
      age: 0, // changed from patientAge to age
      weight: 0, // changed from patientWeight to weight 
      gender: "Male",
      patientContact: "",
      patientCondition: "",
      nokName: "",
      nokContact: "",
      nokRelation: "Parent", //changed from nokRelationship to nokRelation
      nokAccompany: 0, //changed from nokAccompanying to nokAccompany
      tripType: "one-way",
      tripDetails: [createEmptyTrip(0)],
      vehicleType: "Ambulance",
      vehicleNumber: "AMB001",
      mtoName: "", // mto -> mtoName
      staffName: "", // emt -> staffName
      escortName: "", // escort -> escortName
      remarks: "",
      servicesRequired: [],
    },
    mode: "onSubmit",
  });

  const tripType = useWatch({
    control: form.control,
    name: "tripType",
  }) as TripType;

  const { fields: tripFields, replace } = useFieldArray({
    control: form.control,
    name: "tripDetails",
  });

  // === Services ===
  const [serviceSearch, setServiceSearch] = useState("");
  const [selectedServices, setSelectedServices] = useState<SelectedService[]>([]);

  useEffect(() => {
    const count = tripType === "one-way" ? 1 : tripType === "two-way" ? 2 : 3;
    const currentTrips = form.getValues("tripDetails");
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

   useEffect(() => {
    form.setValue(
      "servicesRequired",
      selectedServices.map(service => service.name)
    );
  }, [selectedServices, form]);

  const onSubmit = async(values: CaseFormValues) => {
    // console.log("Case Created:", {
    //   ...values,
    //   selectedServices,
    // });
    const payload = {
         ...values,
    age: Number(values.age),
    weight: Number(values.weight),
    nokAccompany: Number(values.nokAccompany),
    tripDetails: values.tripDetails.map(trip => ({
      id: trip.id,
      pickUpTime: new Date(`1970-01-01T${trip.pickUpTime}:00Z`).toISOString(),
      pickUpAddress: [
        {blockNumber:Number(trip.pickupBlock),
        unitNumber:Number(trip.pickupUnit),
        wardDetails:trip.pickupWard,
        roomNumber: Number(trip.pickupRoom),
        bedNumber:Number(trip.pickupBed)}
      ],
      dropOffAddress: [
        {blockNumber:Number(trip.dropoffBlock),
        unitNumber:Number(trip.dropoffUnit),
        wardDetails: trip.dropoffWard,
        roomNumber:Number(trip.dropoffRoom),
        bedNumber: Number(trip.dropoffBed)}
      ],
      pickUpLocation: trip.pickUpLocation,
      dropOffLocation: trip.dropOffLocation
    }))
    }
    
    
    const access_token =
      typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;

    try{
      const res = await fetch("/api/cases/create-case", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: access_token ? `Bearer ${access_token}` : "",
        },
        body: JSON.stringify(payload),
      });
      const response = await res.json();
      if (res.ok) {
        alert("Case created successfully!");
        console.log("Created case:", response);
      } else {
        alert(`Error: ${response.message || "Failed to create case"}`);
      }

    }catch(error:any){
      console.log(error);
      alert("something went wrong!")
    }
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