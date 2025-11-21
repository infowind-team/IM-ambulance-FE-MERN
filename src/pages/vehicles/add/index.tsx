"use client";

import { useState, useEffect } from "react";
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
import DocumentationUploadSection from "./DocumentationUploadSection";   // ← new
import MaintenanceRecordsSection from "./MaintenanceRecordsSection";
import CertificatesSection from "./CertificatesSection";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { VehicleFormValues, MaintenanceRecord, CertificateRecord, UploadedFile } from "./types";


export default function VehicleAddForm() {
  const router = useRouter();
  const { id } = router.query;
  const vehicleId = Array.isArray(id) ? id[0] : id;
  const isViewMode = !!vehicleId; 
  const isAddMode = !vehicleId;
  const [isEditing, setIsEditing] = useState(!isViewMode);  
  const [originalData, setOriginalData] = useState<VehicleFormValues | null>(null);
  const [usersList, setUsersList] = useState([]);
  

 
  const form = useForm<VehicleFormValues>({
    defaultValues: {
      status: "Active",
      vehicleNumber: "",
      chassisNumber: "",
      scheme: "",
      type: "",
      makeModel: "",
      year: "",
      propellant: "Diesel",
      driver: "",
      medic: "",
      escort: "",
      ownerName: "IM Ambulance Services Pte Ltd",
      ownerId: "675a3c1e8a3c4d5f6b7a8d14",
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

      maintenance: [],
      certificates: [
        {
          id: 1,
          type: "Vehicle Inspection Certificate (LTA)",
          number: "LTA-2024-001234",
          issued: "2024-01-15",
          expiry: "2025-01-14",
          fileNames: ["inspection_cert.pdf"],
          fileObj: "document.pdf",
          remarks: "-",
          isEditing: false,
        },
        {
          id: 2,
          type: "Vehicle Insurance",
          number: "INS-2024-567890",
          issued: "2024-02-01",
          expiry: "2025-01-31",
          fileNames: ["insurance_policy.pdf"],
          fileObj: "document.pdf",
          remarks: "Comprehensive coverage",
          isEditing: false,
        },
      ],
    },
    mode: "onSubmit",
  });

  const [maintenanceRecords, setMaintenanceRecords] = useState<MaintenanceRecord[]>([
    { id: 1, lastService: "2024-01-15", nextDue: "2024-07-15", odometer: "45,230", files: 1 },
    { id: 2, lastService: "2024-02-28", nextDue: "2024-08-28", odometer: "46,850", files: 1 },
    { id: 3, lastService: "2024-03-10", nextDue: "2024-09-10", odometer: "47,200", files: 0 },

  ]);

  const [certificateRecords, setCertificateRecords] = useState<CertificateRecord[]>([
    {
      id: 1,
      type: "Vehicle Inspection Certificate (LTA)",
      number: "LTA-2024-001234",
      issued: "2024-02-11",
      expiry: "2024-02-12",
      file: "inspection_cert.pdf",
      remarks: "-",
    },
    {
      id: 2,
      type: "Vehicle Insurance",
      number: "INS-2024-567890",
      issued: "2024-02-01",
      expiry: "2024-02-10",
      file: "insurance_policy.pdf",
      remarks: "Comprehensive coverage",
    },
  ]);

  // ←←← NEW STATE FOR DOCUMENTATION FILES
  const [documentationFiles, setDocumentationFiles] = useState<UploadedFile[]>([]);

  

  useEffect(() => {
    async function fetchUsers() {
      try{
        const access_token = localStorage.getItem("accessToken");
      const res = await fetch("/api/vehicles/userlist",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: access_token ? `Bearer ${access_token}` : "",
        }});
      const data = await res.json();
      setUsersList(data?.data || []);  
      }catch(error:any){
        console.log(error)
      }
    }
    fetchUsers();
  }, []);

  const onSubmit = async (formValues: VehicleFormValues) => {
    try {
      

      // Construct payload EXACTLY like Code 2
      const payload = {
        vehicleNumber: formValues.vehicleNumber,
        chassisNumber: formValues.chassisNumber,
        type: formValues.type,
        scheme: formValues.scheme,
        make: formValues.makeModel,
        model: formValues.makeModel,
        year: Number(formValues.year),
        status: formValues.status,
        propellant: formValues.propellant,

        // STATIC IDs (same as Code 2)
        driverId:  formValues.driver || null,
        medicId: formValues.medic||null,
        escortId: formValues.escort || null,
        ownerId: "675a3c1e8a3c4d5f6b7a8d14",

        specifications: {
          engineNumber: formValues.engineNo,
          engineType: formValues.engineType,
          engineCapacity: Number(formValues.engineCapacity),
          maxUnladenWeight: Number(formValues.maxUnladenWeight),
          maxLadenWeight: Number(formValues.maxLadenWeight),
          enginePower: Number(formValues.maxPowerOutput),
          primaryColour: formValues.primaryColor,
          secondaryColour: formValues.secondaryColor,
          passengerCapacity: Number(formValues.passengerCapacity),
          wheelchairAccessible: true,
          lifter: true,
          stretcherCompatible: true,
        },

        emissions: {
          co2Emissions: Number(formValues.co2Emission),
          coEmissions: Number(formValues.coEmission),
          hcEmissions: Number(formValues.hcEmission),
          noxEmissions: Number(formValues.noxEmission),
          pmEmissions: Number(formValues.pmEmission),
        },

        owner: {
          vehicleId: "675a3d5e8a3c4d5f6b7a8e35",
          ownerName: formValues.ownerName,
          certificateNumber: "CERT001",
          registeredAddress: formValues.registeredAddress,
          mailingAddress: formValues.mailingAddress,
          ownerIdType: formValues.ownerIdType,
          registrationDate: formValues.registrationDate,
        },

        // ✔ Pick the FIRST maintenance item (like Code 2)
        maintenance: {
          vehicleId: "675a3d5e8a3c4d5f6b7a8e25",
          lastServiceDate: maintenanceRecords[0]?.lastService || "",
          nextServiceDate: maintenanceRecords[0]?.nextDue || "",
          currentOdometerReading: Number(
            (maintenanceRecords[0]?.odometer || "0").replace(/,/g, "")
          ),
          documentUrl: "insurance_policy.pdf",
        },

        // ✔ Pick the FIRST certificate (like Code 2)
        certificates: {
          vehicleId: "675a3d5e8a3c4d5f6b7a8e25",
          certificateType: certificateRecords[0]?.type || "",
          certificateNumber: certificateRecords[0]?.number || "",
          issuedDate: new Date(
            certificateRecords[0]?.issued 
          ).toISOString(),
          expiryDate: new Date(
            certificateRecords[0]?.expiry
          ).toISOString(),
          documentUrl: certificateRecords[0]?.file || "",
          remarks: certificateRecords[0]?.remarks || "",
        },
      };

      console.log(payload)

      const access_token = localStorage.getItem("accessToken");

      const url = vehicleId
        ? `/api/vehicles/update/${vehicleId}`
        : `/api/vehicles/create-vehicle`;
      
      const method = vehicleId ? "PUT" : "POST";
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to save vehicle");

      alert("Vehicle added successfully!");

      setTimeout(() => {
        router.push("/vehicles");
      }, 2000);

    } catch (error) {
      console.error(error);
    }
  };

  const fetchVehicle = async () => {
    try {
      const token = localStorage.getItem("accessToken");

      const res = await fetch(`/api/vehicles/details/${vehicleId}`, {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      });

      const data = await res.json();
      if (!res.ok) throw new Error("Failed to fetch vehicle");

      
      const vehicle = data?.data; // shortcut

      const prefilledValues: VehicleFormValues = {
        // Basic Fields
        status: vehicle?.status || "Active",
        vehicleNumber: vehicle?.vehicleNumber || "",
        chassisNumber: vehicle?.chassisNumber || "",
        scheme: vehicle?.scheme || "",
        type: vehicle?.type || "",
        makeModel: vehicle?.make || "",
        year: vehicle?.year?.toString() || "",
        propellant: vehicle?.propellant || "",

        // Team fields
        driver: vehicle?.driverId || "",
        medic: vehicle?.medicId || "",
        escort: vehicle?.escortId || "",

        // Owner fields  (not coming from backend)
        ownerName: "",
        ownerId: "",
        registeredAddress: "",
        mailingAddress: "",
        ownerIdType: "",
        registrationDate: "",

        // Registration details (not coming from backend)
        previousVehicleNo: "",
        effectiveOwnershipDate: "",
        originalRegistrationDate: "",
        noOfTransfers: "",
        iuLabelNo: "",

        // Specifications
        engineNo: vehicle?.specifications?.engineNumber || "",
        engineType: vehicle?.specifications?.engineType || "",
        maxUnladenWeight: vehicle?.specifications?.maxUnladenWeight?.toString() || "",
        maxLadenWeight: vehicle?.specifications?.maxLadenWeight?.toString() || "",
        engineCapacity: vehicle?.specifications?.engineCapacity?.toString() || "",
        maxPowerOutput: vehicle?.specifications?.enginePower?.toString() || "",
        primaryColor: vehicle?.specifications?.primaryColour || "",
        secondaryColor: vehicle?.specifications?.secondaryColour || "",
        passengerCapacity: vehicle?.specifications?.passengerCapacity?.toString() || "",
        wheelchairAccessible: vehicle?.specifications?.wheelchairAccessible ? "Yes" : "No",
        lifter: vehicle?.specifications?.lifter ? "Yes" : "No",
        stretcherCompatible:
          vehicle?.specifications?.stretcherCompatible ? "Yes" : "No",

        // ARF / COE fields  (not coming from backend)
        omv: "",
        arfRate: "",
        actualArfPaid: "",
        coeExpiryDate: "",
        opcCashRebate: "No",
        qpDuringCoe: "",
        coeNo: "",
        parfEligibility: "",
        parfExpiryDate: "",
        minParfBenefit: "",

        // Emissions
        co2Emission: vehicle?.emissions?.co2Emissions?.toString() || "",
        coEmission: vehicle?.emissions?.coEmissions?.toString() || "",
        hcEmission: vehicle?.emissions?.hcEmissions?.toString() || "",
        noxEmission: vehicle?.emissions?.noxEmissions?.toString() || "",
        pmEmission: vehicle?.emissions?.pmEmissions?.toString() || "",
      };



      //Save these values for Cancel button
      setOriginalData(prefilledValues);

      // Apply values to the form
      form.reset(prefilledValues);

      // // Maintenance
      // setMaintenanceRecords([
      //   {
      //     id: 1,
      //     lastService: data?.maintenance?.lastServiceDate || "",
      //     nextDue: data?.maintenance?.nextServiceDate || "",
      //     odometer: String(data?.maintenance?.currentOdometerReading || "0"),
      //     files: 1,
      //   },
      // ]);
      

      // //  Certificates
      // setCertificateRecords([
      //   {
      //     id: 1,
      //     type: data.certificates?.certificateType || "",
      //     number: data.certificates?.certificateNumber || "",
      //     issued: data.certificates?.issuedDate|| "",
      //     expiry: data.certificates?.expiryDate || "",
      //     file: data.certificates?.documentUrl || "",
      //     remarks: data.certificates?.remarks || "",
      //   },
      // ]);

    } catch (err) {
      console.error("Fetch vehicle failed:", err);
    }
  };

  useEffect(() => {
    if (!vehicleId) return;
    fetchVehicle();
  }, [vehicleId]);



  return (
    <>
      <FunctionalHeader
        title={
          isAddMode
            ? "Adding New Vehicle"
            : isEditing
              ? `Editing - ${vehicleId}`
              : `Viewing - ${vehicleId}`
        }
        breadcrumb={[
          { label: "Operations" },
          { label: "Vehicles", href: "/vehicles" },
          {
            label: isAddMode
              ? "Adding New Vehicle"
              : isEditing
                ? `Editing - ${form.watch("vehicleNumber")}`
                : `Viewing - ${form.watch("vehicleNumber")}`,
          },
        ]}
      />


      <div className="flex-1 w-full overflow-auto">
        <Form {...form}>
          {!isEditing && vehicleId && (
            <div className="flex justify-end p-4">
              <Button
                variant="outline"
                type="button"
                onClick={() => setIsEditing(true)}
              >
                Edit Vehicle
              </Button>
            </div>
          )}
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-4 lg:p-6">
            <StatusSection isEditing={isEditing} />
            <VehicleRegistrationSection isEditing={isEditing}/>
            <TeamDetailsSection isEditing = {isEditing}  users={usersList}/>
            <OwnerDetailsSection isEditing = {isEditing} />
            <RegistrationDetailsSection isEditing = {isEditing}/>
            <VehicleSpecsSection isEditing = {isEditing}  />
            <ArfCoeSection isEditing = {isEditing} />
            <ParfRebateSection isEditing ={isEditing}/>
            <EmissionsSection isEditing = {isEditing}/>

            {/* ←←← NEW CONTROLLED UPLOAD SECTION */}
            <DocumentationUploadSection
              value={documentationFiles}
              onChange={setDocumentationFiles}
              isEditing = {isEditing}
            />

            <MaintenanceRecordsSection records={maintenanceRecords} setRecords={setMaintenanceRecords} isEditing={isEditing} />
            <CertificatesSection records={certificateRecords} setRecords={setCertificateRecords} isEditing= {isEditing}/>

            <div className="flex justify-end gap-3 pt-4 border-t">
               {!isEditing && (
                <Button
                  type="button"
                  size="lg"
                  variant="outline"
                  onClick={() => router.push("/vehicles")}
                >
                  Cancel
                </Button>
              )}

              {/* EDIT MODE → CANCEL + SAVE CHANGES */}
              {isEditing && (
                <>
                  <Button
                    type="button"
                    size="lg"
                    variant="outline"
                    onClick={() => router.push("/vehicles")}
                  >
                    Cancel
                  </Button>

                  <Button
                    type="submit"
                    size="lg"
     
                  >
                    Save Changes
                  </Button>
                </>
              )}
            </div>

          </form>
        </Form>
      </div>
    </>
  );
}