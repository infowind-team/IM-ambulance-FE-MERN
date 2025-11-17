"use client";

import { useState, useEffect } from "react";
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
import { SelectedService, Trip, TripType } from "./types";
import ServiceSelection from "./ServiceSelection";
import { Navigation, User } from "lucide-react";


export default function CasesAddPage() {
  // === Status & Basic ===
  const [status, setStatus] = useState("Open");

  // === Booking ===
  const [intake, setIntake] = useState("Phone Call");
  const [bookingDate, setBookingDate] = useState<Date | null>(null);
  const [bookingTime, setBookingTime] = useState("");
  const [requestorName, setRequestorName] = useState("");
  const [requestorContact, setRequestorContact] = useState("");
  const [transportMode, setTransportMode] = useState("Wheelchair");

  // === Patient ===
  const [patientName, setPatientName] = useState("");
  const [patientNric, setPatientNric] = useState("");
  const [patientAge, setPatientAge] = useState("");
  const [patientWeight, setPatientWeight] = useState("");
  const [gender, setGender] = useState("Male");
  const [patientContact, setPatientContact] = useState("");
  const [patientCondition, setPatientCondition] = useState("");

  // === NOK ===
  const [nokName, setNokName] = useState("");
  const [nokContact, setNokContact] = useState("");
  const [nokRelationship, setNokRelationship] = useState("Parent");
  const [nokAccompanying, setNokAccompanying] = useState("0");

  // === Trips ===
  const [tripType, setTripType] = useState<TripType>("one-way");
  const [trips, setTrips] = useState<Trip[]>([
    {
      id: "trip-1",
      pickupLocation: "", pickupBlock: "", pickupUnit: "", pickupWard: "", pickupRoom: "", pickupBed: "",
      dropoffLocation: "", dropoffBlock: "", dropoffUnit: "", dropoffWard: "", dropoffRoom: "", dropoffBed: "",
      scheduledTime: ""
    }
  ]);

  // === Vehicle & Crew ===
  const [vehicleType, setVehicleType] = useState("Ambulance");
  const [vehicleNumber, setVehicleNumber] = useState("AMB001");
  const [mto, setMto] = useState("");
  const [emt, setEmt] = useState("");
  const [escort, setEscort] = useState("");

  // === Services ===
  const [serviceSearch, setServiceSearch] = useState("");
  const [selectedServices, setSelectedServices] = useState<SelectedService[]>([]);

  // === Remarks ===
  const [remarks, setRemarks] = useState("");

  // Sync trip count
  useEffect(() => {
    const count = tripType === "one-way" ? 1 : tripType === "two-way" ? 2 : 3;
    setTrips(prev => {
      const kept = prev.slice(0, count);
      const missing = count - kept.length;
      return [
        ...kept,
        ...Array.from({ length: missing }, (_, i) => ({
          id: `trip-${kept.length + i + 1}`,
          pickupLocation: "", pickupBlock: "", pickupUnit: "", pickupWard: "", pickupRoom: "", pickupBed: "",
          dropoffLocation: "", dropoffBlock: "", dropoffUnit: "", dropoffWard: "", dropoffRoom: "", dropoffBed: "",
          scheduledTime: ""
        }))
      ];
    });
  }, [tripType]);

  const updateTrip = (id: string, field: keyof Trip, value: string) => {
    setTrips(prev => prev.map(t => t.id === id ? { ...t, [field]: value } : t));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Case Created:", {
      status, intake, bookingDate, trips, selectedServices, mto, remarks
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
        <form onSubmit={onSubmit} className="p-4 lg:p-6 space-y-6 w-full">
          <CaseStatus value={status} onChange={setStatus} />

          <BookingInfo
            intake={intake} onIntakeChange={setIntake}
            bookingDate={bookingDate} onBookingDateChange={setBookingDate}
            bookingTime={bookingTime} onBookingTimeChange={setBookingTime}
            requestorName={requestorName} onRequestorNameChange={setRequestorName}
            requestorContact={requestorContact} onRequestorContactChange={setRequestorContact}
            transportMode={transportMode} onTransportModeChange={setTransportMode}
          />

          <Card className="overflow-hidden w-full">
            <CardHeader className="header-bg-soft pb-6">
              <CardTitle className="flex items-center gap-2"><User className="w-5 h-5" /> Patient Information</CardTitle>
            </CardHeader>
            <CardContent>
              <PatientInfo
                patientName={patientName} setPatientName={setPatientName}
                patientNric={patientNric} setPatientNric={setPatientNric}
                patientAge={patientAge} setPatientAge={setPatientAge}
                patientWeight={patientWeight} setPatientWeight={setPatientWeight}
                gender={gender} setGender={setGender}
                patientContact={patientContact} setPatientContact={setPatientContact}
                patientCondition={patientCondition} setPatientCondition={setPatientCondition}
              />
              <hr className="my-4" />
              <NextOfKin
                nokName={nokName} setNokName={setNokName}
                nokContact={nokContact} setNokContact={setNokContact}
                nokRelationship={nokRelationship} setNokRelationship={setNokRelationship}
                nokAccompanying={nokAccompanying} setNokAccompanying={setNokAccompanying}
              />
            </CardContent>
          </Card>

          <Card className="overflow-hidden w-full">
            <CardHeader className="header-bg-soft pb-6">
              <CardTitle className="flex items-center gap-2"><Navigation className="w-5 h-5" /> Trip Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <TripTypeSelector value={tripType} onChange={setTripType} />
              <hr className="mb-4" />
              <TripDetails trips={trips} updateTrip={updateTrip} />
              <VehicleAssignment
                vehicleType={vehicleType} setVehicleType={setVehicleType}
                vehicleNumber={vehicleNumber} setVehicleNumber={setVehicleNumber}
                mto={mto} setMto={setMto}
                emt={emt} setEmt={setEmt}
                escort={escort} setEscort={setEscort}
              />
            </CardContent>
          </Card>

          <ServiceSelection
            selectedServices={selectedServices}
            setSelectedServices={setSelectedServices}
            serviceSearch={serviceSearch}
            setServiceSearch={setServiceSearch}
          />

          <BillingSummary services={selectedServices} baseTransportFee={85.00} />

          <AdditionalRemarks value={remarks} onChange={setRemarks} />

          <div className="flex justify-end gap-4 border-t pt-6">
            <Button type="button" variant="outline" size="lg">Cancel</Button>
            <Button type="submit" size="lg">Create Case</Button>
          </div>
        </form>
      </div>
    </>
  );
}