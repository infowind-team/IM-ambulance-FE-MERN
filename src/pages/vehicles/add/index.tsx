"use client";

import { useState } from "react";
import FunctionalHeader from "@/layout/FunctionalHeader";
import StatusSection from "./StatusSection";
import VehicleRegistrationSection from "./VehicleRegistrationSection";
import TeamDetailsSection from "./TeamDetailsSection";
import OwnerDetailsSection from "./OwnerDetailsSection";
import RegistrationDetailsSection from "./RegistrationDetailsSection";
import VehicleSpecsSection from "./VehicleSpecsSection";
import ArfCoeSection from "./ArfCoeSection";
import ParfRebateSection from "./ParfRebateSection";
import EmissionsSection from "./EmissionsSection";
import DocumentationUploadSection from "./DocumentationUploadSection";
import MaintenanceRecordsSection from "./MaintenanceRecordsSection";
import CertificatesSection from "./CertificatesSection";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { VehicleFormValues, MaintenanceRecord, CertificateRecord } from "./types";

export default function VehicleAddForm() {
  const form = useForm<VehicleFormValues>({
    defaultValues: {
      status: "Active",
      vehicleNumber: "",
      chassisNo: "",
      vehicleScheme: "",
      vehicleType: "",
      makeModel: "",
      year: "",
      currentPropellant: "Diesel",
      driver: "",
      medic: "",
      escort: "",
      ownerName: "IM Ambulance Services Pte Ltd",
      ownerId: "200123456789",
      registeredAddress: "123 Medical Drive, Singapore 123456",
      mailingAddress: "123 Medical Drive, Singapore 123456",
      ownerIdType: "Company Registration",
      registrationDate: "",
      previousVehicleNo: "",
      effectiveOwnershipDate: "",
      originalRegistrationDate: "",
      noOfTransfers: "0",
      iuLabelNo: "",
      engineNo: "",
      engineType: "",
      maxUnladenWeight: "2200",
      maxLadenWeight: "3250",
      engineCapacity: "2982",
      maxPowerOutput: "110",
      primaryColor: "White",
      secondaryColor: "Red",
      passengerCapacity: "5",
      wheelchairAccessible: "Yes",
      lifter: "Yes",
      stretcherCompatible: "Yes",
      omv: "53630.00",
      arfRate: "100",
      actualArfPaid: "53630.00",
      coeExpiryDate: "",
      opcCashRebate: "No",
      qpDuringCoe: "-",
      coeNo: "",
      parfEligibility: "53630.00",
      parfExpiryDate: "2030-09-24",
      minParfBenefit: "26815.00",
      co2Emission: "180",
      coEmission: "1.5",
      hcEmission: "0.8",
      noxEmission: "2.1",
      pmEmission: "0.02",
    },
    mode: "onSubmit",
  });

  const [maintenanceRecords, setMaintenanceRecords] = useState<MaintenanceRecord[]>([
    { id: 1, lastService: "15/01/2024", nextDue: "15/07/2024", odometer: "45,230", files: 1 },
    { id: 2, lastService: "28/02/2024", nextDue: "28/08/2024", odometer: "46,850", files: 1 },
    { id: 3, lastService: "10/03/2024", nextDue: "10/09/2024", odometer: "47,200", files: 0 },
  ]);

  const [certificateRecords, setCertificateRecords] = useState<CertificateRecord[]>([
    {
      id: 1,
      type: "Vehicle Inspection Certificate (LTA)",
      number: "LTA-2024-001234",
      issued: "15/01/2024",
      expiry: "14/01/2025",
      file: "inspection_cert.pdf",
      remarks: "-",
    },
    {
      id: 2,
      type: "Vehicle Insurance",
      number: "INS-2024-567890",
      issued: "01/02/2024",
      expiry: "31/01/2025",
      file: "insurance_policy.pdf",
      remarks: "Comprehensive coverage",
    },
  ]);

  const onSubmit = (values: VehicleFormValues) => {
    console.log("Form:", values);
    console.log("Maintenance:", maintenanceRecords);
    console.log("Certificates:", certificateRecords);
    // TODO: Send to API
  };

  return (
    <>
      <FunctionalHeader
        title="Add New Vehicle"
        breadcrumb={[
          { label: "Operations" },
          { label: "vehicles", href: "/vehicles" },
          { label: "Add New Vehicle" },
        ]}
      />
      <div className="flex-1 w-full overflow-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-4 lg:p-6">
            <StatusSection />
            <VehicleRegistrationSection />
            <TeamDetailsSection />
            <OwnerDetailsSection />
            <RegistrationDetailsSection />
            <VehicleSpecsSection />
            <ArfCoeSection />
            <ParfRebateSection />
            <EmissionsSection />
            <DocumentationUploadSection />
            <MaintenanceRecordsSection records={maintenanceRecords} setRecords={setMaintenanceRecords} />
            <CertificatesSection records={certificateRecords} setRecords={setCertificateRecords} />

            <div className="flex justify-end gap-3 pt-4 border-t">
              <Button type="button" variant="outline" size="lg" onClick={() => form.reset()}>
                Cancel
              </Button>
              <Button type="submit" size="lg">
                Add Vehicle
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
}