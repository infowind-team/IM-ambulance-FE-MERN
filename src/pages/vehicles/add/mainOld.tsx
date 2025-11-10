"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Truck,
  User,
  FileText,
  Settings,
  Upload,
  Shield,
  Wrench,
  TriangleAlert,
  Plus,
  Folder,
  SquarePen,
  Trash2,
} from "lucide-react";
import FunctionalHeader from "@/layout/FunctionalHeader";

// Form Schema
const formSchema = z.object({
  status: z.string(),
  vehicleNumber: z.string().min(1, "Vehicle Number is required"),
  chassisNo: z.string().min(1, "Chassis No. is required"),
  vehicleScheme: z.string().optional(),
  vehicleType: z.string().optional(),
  makeModel: z.string().min(1, "Make & Model is required"),
  year: z.string().optional(),
  currentPropellant: z.string().optional(),
  driver: z.string().min(1, "Driver is required"),
  medic: z.string().optional(),
  escort: z.string().optional(),
  ownerName: z.string(),
  ownerId: z.string(),
  registeredAddress: z.string(),
  mailingAddress: z.string(),
  ownerIdType: z.string(),
  registrationDate: z.string().optional(),
  previousVehicleNo: z.string().optional(),
  effectiveOwnershipDate: z.string().optional(),
  originalRegistrationDate: z.string().optional(),
  noOfTransfers: z.string(),
  iuLabelNo: z.string().optional(),
  engineNo: z.string().optional(),
  engineType: z.string().optional(),
  maxUnladenWeight: z.string(),
  maxLadenWeight: z.string(),
  engineCapacity: z.string(),
  maxPowerOutput: z.string(),
  primaryColor: z.string(),
  secondaryColor: z.string(),
  passengerCapacity: z.string(),
  wheelchairAccessible: z.enum(["Yes", "No"]),
  lifter: z.enum(["Yes", "No"]),
  stretcherCompatible: z.enum(["Yes", "No"]),
  omv: z.string(),
  arfRate: z.string(),
  actualArfPaid: z.string(),
  coeExpiryDate: z.string().optional(),
  opcCashRebate: z.string(),
  qpDuringCoe: z.string().optional(),
  coeNo: z.string().optional(),
  parfEligibility: z.string(),
  parfExpiryDate: z.string(),
  minParfBenefit: z.string(),
  co2Emission: z.string(),
  coEmission: z.string(),
  hcEmission: z.string(),
  noxEmission: z.string(),
  pmEmission: z.string(),
});

type FormData = z.infer<typeof formSchema>;

export default function VehiclesAddPage() {
  const [maintenanceRecords, setMaintenanceRecords] = useState([
    {
      id: 1,
      lastService: "2024-01-15",
      nextDue: "2024-07-15",
      odometer: "45,230",
      files: 1,
    },
    {
      id: 2,
      lastService: "2024-02-28",
      nextDue: "2024-08-28",
      odometer: "46,850",
      files: 1,
    },
    {
      id: 3,
      lastService: "2024-03-10",
      nextDue: "2024-09-10",
      odometer: "47,200",
      files: 0,
    },
  ]);

  const [certificateRecords, setCertificateRecords] = useState([
    {
      id: 1,
      type: "Vehicle Inspection Certificate (LTA)",
      number: "LTA-2024-001234",
      issued: "2024-01-15",
      expiry: "2025-01-14",
      file: "inspection_cert.pdf",
      remarks: "-",
    },
    {
      id: 2,
      type: "Vehicle Insurance",
      number: "INS-2024-567890",
      issued: "2024-02-01",
      expiry: "2025-01-31",
      file: "insurance_policy.pdf",
      remarks: "Comprehensive coverage",
    },
  ]);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      status: "Active",
      vehicleNumber: "",
      chassisNo: "",
      makeModel: "",
      currentPropellant: "Diesel",
      driver: "",
      ownerName: "IM Ambulance Services Pte Ltd",
      ownerId: "200123456789",
      registeredAddress: "123 Medical Drive, Singapore 123456",
      mailingAddress: "123 Medical Drive, Singapore 123456",
      ownerIdType: "Company Registration",
      noOfTransfers: "0",
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
      opcCashRebate: "No",
      qpDuringCoe: "-",
      parfEligibility: "53630.00",
      parfExpiryDate: "2030-09-24",
      minParfBenefit: "26815.00",
      co2Emission: "180",
      coEmission: "1.5",
      hcEmission: "0.8",
      noxEmission: "2.1",
      pmEmission: "0.02",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    // Handle submission
  };

  return (
    <>
      <FunctionalHeader
        title="Add New Vehicle"
        breadcrumb={[
          { label: "Operations" },
          { label: "Vehicle" },
          { label: "Add New Vehicle" },
        ]}
      />
      <div className="flex-1 w-full overflow-auto">
        <div className="p-4 lg:p-6 w-full">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full">
            {/* Status */}
            <div className="max-w-[300px]">
              <Label className="text-base font-medium text-base-optimized mb-2 block">
                Status <span className="text-red-500">*</span>
              </Label>
              <Controller
                name="status"
                control={control}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="w-auto max-w-[300px] h-10">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Active">Active</SelectItem>
                      <SelectItem value="Inactive">Inactive</SelectItem>
                      <SelectItem value="Maintenance">Maintenance</SelectItem>
                      <SelectItem value="Out of Service">Out of Service</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>

            {/* Vehicle Registration Details */}
            <Card className="overflow-hidden">
              <CardHeader className="header-bg-soft pb-6">
                <CardTitle className="flex items-center gap-2">
                  <Truck className="w-5 h-5" />
                  Vehicle Registration Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <Label>
                      Vehicle Number <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      {...register("vehicleNumber")}
                      placeholder="e.g., SAZ1234A"
                      className={errors.vehicleNumber ? "border-red-300" : ""}
                    />
                    {errors.vehicleNumber && (
                      <p className="text-sm text-red-500">
                        {errors.vehicleNumber.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label>
                      Chassis No. <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      {...register("chassisNo")}
                      placeholder="e.g., JTFST22P200040240"
                      className={errors.chassisNo ? "border-red-300" : ""}
                    />
                    {errors.chassisNo && (
                      <p className="text-sm text-red-500">
                        {errors.chassisNo.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label>
                      Vehicle Scheme <span className="text-red-500">*</span>
                    </Label>
                    <Controller
                      name="vehicleScheme"
                      control={control}
                      render={({ field }) => (
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select scheme" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="normal">Normal</SelectItem>
                            <SelectItem value="opc">OPC</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>
                      Vehicle Type <span className="text-red-500">*</span>
                    </Label>
                    <Controller
                      name="vehicleType"
                      control={control}
                      render={({ field }) => (
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ambulance">Ambulance</SelectItem>
                            <SelectItem value="van">Van</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>
                      Make & Model <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      {...register("makeModel")}
                      placeholder="e.g., Mercedes-Benz Sprinter"
                      className={errors.makeModel ? "border-red-300" : ""}
                    />
                    {errors.makeModel && (
                      <p className="text-sm text-red-500">
                        {errors.makeModel.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label>Year</Label>
                    <Input {...register("year")} placeholder="e.g., 2023" />
                  </div>

                  <div className="space-y-2">
                    <Label>Current Propellant</Label>
                    <Controller
                      name="currentPropellant"
                      control={control}
                      render={({ field }) => (
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Diesel">Diesel</SelectItem>
                            <SelectItem value="Petrol">Petrol</SelectItem>
                            <SelectItem value="Electric">Electric</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Team Details */}
            <Card className="overflow-hidden">
              <CardHeader className="header-bg-soft pb-6">
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Team Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>
                      Driver <span className="text-red-500">*</span>
                    </Label>
                    <Controller
                      name="driver"
                      control={control}
                      render={({ field }) => (
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger
                            className={errors.driver ? "border-red-300" : ""}
                          >
                            <SelectValue placeholder="Select Driver" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="John Doe">John Doe</SelectItem>
                            <SelectItem value="Jane Smith">
                              Jane Smith
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {errors.driver && (
                      <p className="text-sm text-red-500">
                        {errors.driver.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label>Medic</Label>
                    <Controller
                      name="medic"
                      control={control}
                      render={({ field }) => (
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select Medic" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Dr. Lee">Dr. Lee</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Escort</Label>
                    <Controller
                      name="escort"
                      control={control}
                      render={({ field }) => (
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="-" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">-</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Owner's Details */}
            <Card className="overflow-hidden">
              <CardHeader className="header-bg-soft pb-6">
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Owner's Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>
                      Owner's Name <span className="text-red-500">*</span>
                    </Label>
                    <Input {...register("ownerName")} />
                  </div>
                  <div className="space-y-2">
                    <Label>
                      NRIC/Passport/Company Cert No.{" "}
                      <span className="text-red-500">*</span>
                    </Label>
                    <Input {...register("ownerId")} />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <Label>Registered Address</Label>
                    <Input {...register("registeredAddress")} />
                  </div>
                  <div className="space-y-2">
                    <Label>Mailing Address</Label>
                    <Input {...register("mailingAddress")} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Owner's ID Type</Label>
                    <Controller
                      name="ownerIdType"
                      control={control}
                      render={({ field }) => (
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Company Registration">
                              Company Registration
                            </SelectItem>
                            <SelectItem value="NRIC">NRIC</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Registration Date</Label>
                    <Input type="date" {...register("registrationDate")} />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Registration Details */}
            <Card className="overflow-hidden">
              <CardHeader className="header-bg-soft pb-6">
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Registration Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>Previous Vehicle No.</Label>
                    <Input
                      {...register("previousVehicleNo")}
                      defaultValue="-"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Effective Date of Ownership</Label>
                    <Input
                      type="date"
                      {...register("effectiveOwnershipDate")}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Original Registration Date</Label>
                    <Input
                      type="date"
                      {...register("originalRegistrationDate")}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>No. of Transfers</Label>
                    <Input {...register("noOfTransfers")} />
                  </div>
                  <div className="space-y-2">
                    <Label>IU Label No.</Label>
                    <Input
                      {...register("iuLabelNo")}
                      placeholder="e.g., 40057623"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vehicle Specifications */}
            <Card className="overflow-hidden">
              <CardHeader className="header-bg-soft pb-6">
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Vehicle Specifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <Label>Engine No.</Label>
                    <Input
                      {...register("engineNo")}
                      placeholder="e.g., 1KDB045665"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Engine Type</Label>
                    <Controller
                      name="engineType"
                      control={control}
                      render={({ field }) => (
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Diesel">Diesel</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Maximum Unladen Weight (kg)</Label>
                    <Input {...register("maxUnladenWeight")} />
                  </div>
                  <div className="space-y-2">
                    <Label>Maximum Laden Weight (kg)</Label>
                    <Input {...register("maxLadenWeight")} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <Label>Engine Capacity (cc)</Label>
                    <Input {...register("engineCapacity")} />
                  </div>
                  <div className="space-y-2">
                    <Label>Maximum Power Output (kW)</Label>
                    <Input {...register("maxPowerOutput")} />
                  </div>
                  <div className="space-y-2">
                    <Label>Primary Color</Label>
                    <Controller
                      name="primaryColor"
                      control={control}
                      render={({ field }) => (
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="White">White</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Secondary Color</Label>
                    <Controller
                      name="secondaryColor"
                      control={control}
                      render={({ field }) => (
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Red">Red</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <Label>Passenger Capacity</Label>
                    <Input {...register("passengerCapacity")} />
                  </div>
                  <div className="space-y-2">
                    <Label>Wheelchair Accessible</Label>
                    <Controller
                      name="wheelchairAccessible"
                      control={control}
                      render={({ field }) => (
                        <RadioGroup
                          value={field.value}
                          onValueChange={field.onChange}
                          className="flex gap-4"
                        >
                          <div className="flex items-center gap-2">
                            <RadioGroupItem value="Yes" id="wa-yes" />
                            <Label htmlFor="wa-yes">Yes</Label>
                          </div>
                          <div className="flex items-center gap-2">
                            <RadioGroupItem value="No" id="wa-no" />
                            <Label htmlFor="wa-no">No</Label>
                          </div>
                        </RadioGroup>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Lifter</Label>
                    <Controller
                      name="lifter"
                      control={control}
                      render={({ field }) => (
                        <RadioGroup
                          value={field.value}
                          onValueChange={field.onChange}
                          className="flex gap-4"
                        >
                          <div className="flex items-center gap-2">
                            <RadioGroupItem value="Yes" id="lifter-yes" />
                            <Label htmlFor="lifter-yes">Yes</Label>
                          </div>
                          <div className="flex items-center gap-2">
                            <RadioGroupItem value="No" id="lifter-no" />
                            <Label htmlFor="lifter-no">No</Label>
                          </div>
                        </RadioGroup>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Stretcher Compatible</Label>
                    <Controller
                      name="stretcherCompatible"
                      control={control}
                      render={({ field }) => (
                        <RadioGroup
                          value={field.value}
                          onValueChange={field.onChange}
                          className="flex gap-4"
                        >
                          <div className="flex items-center gap-2">
                            <RadioGroupItem value="Yes" id="stretcher-yes" />
                            <Label htmlFor="stretcher-yes">Yes</Label>
                          </div>
                          <div className="flex items-center gap-2">
                            <RadioGroupItem value="No" id="stretcher-no" />
                            <Label htmlFor="stretcher-no">No</Label>
                          </div>
                        </RadioGroup>
                      )}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ARF & COE */}
            <Card className="overflow-hidden">
              <CardHeader className="header-bg-soft pb-6">
                <CardTitle className="flex items-center gap-2">
                  <TriangleAlert className="w-5 h-5" />
                  Additional Registration Fee (ARF) & COE Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <Label>Open Market Value (S$)</Label>
                    <Input {...register("omv")} />
                  </div>
                  <div className="space-y-2">
                    <Label>Additional Registration Fee Rate (%)</Label>
                    <Input {...register("arfRate")} />
                  </div>
                  <div className="space-y-2">
                    <Label>Actual ARF Paid (S$)</Label>
                    <Input {...register("actualArfPaid")} />
                  </div>
                  <div className="space-y-2">
                    <Label>COE Expiry Date</Label>
                    <Input type="date" {...register("coeExpiryDate")} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label>OPC Cash Rebate Eligibility</Label>
                    <Controller
                      name="opcCashRebate"
                      control={control}
                      render={({ field }) => (
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="No">No</SelectItem>
                            <SelectItem value="Yes">Yes</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>QP during COE Bidding Exercise</Label>
                    <Input {...register("qpDuringCoe")} defaultValue="-" />
                  </div>
                  <div className="space-y-2">
                    <Label>COE No.</Label>
                    <Input
                      {...register("coeNo")}
                      placeholder="e.g., COE123456789"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* PARF Rebate */}
            <Card className="overflow-hidden">
              <CardHeader className="header-bg-soft pb-6">
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  PARF Rebate Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label>PARF Eligibility (S$)</Label>
                    <Input {...register("parfEligibility")} />
                  </div>
                  <div className="space-y-2">
                    <Label>PARF Eligibility Expiry Date</Label>
                    <Input type="date" {...register("parfExpiryDate")} />
                  </div>
                  <div className="space-y-2">
                    <Label>Min PARF Benefit (S$)</Label>
                    <Input {...register("minParfBenefit")} />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emissions */}
            <Card className="overflow-hidden">
              <CardHeader className="header-bg-soft pb-6">
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Vehicle Emissions Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="space-y-2">
                    <Label>CO2 Emission (g/km)</Label>
                    <Input {...register("co2Emission")} />
                  </div>
                  <div className="space-y-2">
                    <Label>CO Emission (g/km)</Label>
                    <Input {...register("coEmission")} />
                  </div>
                  <div className="space-y-2">
                    <Label>HC Emission (g/km)</Label>
                    <Input {...register("hcEmission")} />
                  </div>
                  <div className="space-y-2">
                    <Label>NOx Emission (g/km)</Label>
                    <Input {...register("noxEmission")} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div className="space-y-2">
                    <Label>PM Emission (g/km)</Label>
                    <Input {...register("pmEmission")} />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Documentation Upload */}
            <Card className="overflow-hidden">
              <CardHeader className="header-bg-soft pb-6">
                <CardTitle className="flex items-center gap-2">
                  <Upload className="w-5 h-5" />
                  Documentation (Optional)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
                  <Upload className="w-8 h-8 mx-auto text-gray-400" />
                  <p className="text-gray-600 mt-2">
                    Click to upload files or drag and drop
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Registration documents, insurance, etc. (PDF, DOC, JPG up to
                    10MB)
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Maintenance Records */}
            <Card className="overflow-hidden">
              <CardHeader className="header-bg-soft pb-6">
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="w-5 h-5" />
                  Maintenance & Compliance Records
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Maintenance History</h3>
                    <Button type="button" variant="outline" size="sm">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Record
                    </Button>
                  </div>
                  <div className="rounded-lg border overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-[#2160AD] text-white">
                        <tr>
                          <th className="px-4 py-3 text-left">
                            Last Service Date
                          </th>
                          <th className="px-4 py-3 text-left">
                            Next Service Due
                          </th>
                          <th className="px-4 py-3 text-left">
                            Current Odometer (km)
                          </th>
                          <th className="px-4 py-3 text-left">Documents</th>
                          <th className="px-4 py-3 text-left">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {maintenanceRecords.map((record) => (
                          <tr key={record.id} className="hover:header-bg-soft">
                            <td className="px-4 py-3">{record.lastService}</td>
                            <td className="px-4 py-3">{record.nextDue}</td>
                            <td className="px-4 py-3">{record.odometer}</td>
                            <td className="px-4 py-3">
                              {record.files > 0 ? (
                                <div className="flex items-center gap-2">
                                  <Folder className="w-4 h-4 text-blue-600" />
                                  <span className="text-xs text-blue-600">
                                    {record.files} file
                                  </span>
                                </div>
                              ) : (
                                <span className="text-xs text-gray-400">
                                  No files
                                </span>
                              )}
                            </td>
                            <td className="px-4 py-3">
                              <div className="flex gap-1">
                                <Button size="icon" variant="ghost">
                                  <SquarePen className="w-4 h-4 text-gray-500" />
                                </Button>
                                <Button size="icon" variant="ghost">
                                  <Trash2 className="w-4 h-4 text-red-600" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certificates */}
            <Card className="overflow-hidden">
              <CardHeader className="header-bg-soft pb-6">
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Certificates & Licenses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Certificate Records</h3>
                    <Button type="button" variant="outline" size="sm">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Certificate
                    </Button>
                  </div>
                  <div className="rounded-lg border overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-[#2160AD] text-white">
                        <tr>
                          <th className="px-4 py-3 text-left">Type</th>
                          <th className="px-4 py-3 text-left">Number</th>
                          <th className="px-4 py-3 text-left">Issued</th>
                          <th className="px-4 py-3 text-left">Expiry</th>
                          <th className="px-4 py-3 text-left">Document</th>
                          <th className="px-4 py-3 text-left">Remarks</th>
                          <th className="px-4 py-3 text-left">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {certificateRecords.map((cert) => (
                          <tr key={cert.id} className="hover:header-bg-soft">
                            <td className="px-4 py-3">{cert.type}</td>
                            <td className="px-4 py-3">{cert.number}</td>
                            <td className="px-4 py-3">{cert.issued}</td>
                            <td className="px-4 py-3">{cert.expiry}</td>
                            <td className="px-4 py-3">
                              <div className="flex items-center gap-2">
                                <FileText className="w-4 h-4 text-blue-600" />
                                <span className="text-xs text-blue-600 truncate max-w-[120px]">
                                  {cert.file}
                                </span>
                              </div>
                            </td>
                            <td className="px-4 py-3 text-sm">
                              {cert.remarks}
                            </td>
                            <td className="px-4 py-3">
                              <div className="flex gap-1">
                                <Button size="icon" variant="ghost">
                                  <SquarePen className="w-4 h-4 text-gray-500" />
                                </Button>
                                <Button size="icon" variant="ghost">
                                  <Trash2 className="w-4 h-4 text-red-600" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Submit Buttons */}
            <div className="flex justify-end gap-3 pt-4 border-t">
              <Button type="button" variant="outline">
                Cancel
              </Button>
              <Button type="submit" className="bg-[#2160AD] hover:bg-[#1d5497]">
                Add Vehicle
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
