"use client";

import { useState, useRef } from "react";
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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
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
  Check,
  X,
} from "lucide-react";
import FunctionalHeader from "@/layout/FunctionalHeader";

// Types
type MaintenanceRecord = {
  id: number;
  lastService: string;
  nextDue: string;
  odometer: string;
  files: number;
  fileNames?: string[];
  isEditing?: boolean;
};

type CertificateRecord = {
  id: number;
  type: string;
  number: string;
  issued: string;
  expiry: string;
  file?: string;
  fileObj?: File;
  remarks: string;
  isEditing?: boolean;
};

export default function VehiclesAddPage() {
  // ---------- State ----------
  const [maintenanceRecords, setMaintenanceRecords] = useState<MaintenanceRecord[]>([
    {
      id: 1,
      lastService: "15/01/2024",
      nextDue: "15/07/2024",
      odometer: "45,230",
      files: 1,
    },
    {
      id: 2,
      lastService: "28/02/2024",
      nextDue: "28/08/2024",
      odometer: "46,850",
      files: 1,
    },
    {
      id: 3,
      lastService: "10/03/2024",
      nextDue: "10/09/2024",
      odometer: "47,200",
      files: 0,
    },
  ]);

  const [certificateRecords, setCertificateRecords] = useState<CertificateRecord[]>([
    {
      id: 1,
      type: "Vehicle Inspection Certificate (LTA)",
      number: "LTA-2024-001234",
      issued: "15/01/2024",
      expiry: "14/01/2024",
      file: "inspection_cert.pdf",
      remarks: "-",
    },
    {
      id: 2,
      type: "Vehicle Insurance",
      number: "INS-2024-567890",
      issued: "01/02/2024",
      expiry: "31/01/2024",
      file: "insurance_policy.pdf",
      remarks: "Comprehensive coverage",
    },
  ]);

  const [form, setForm] = useState({
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
    parfExpiryDate: "24/09/2030",
    minParfBenefit: "26815.00",
    co2Emission: "180",
    coEmission: "1.5",
    hcEmission: "0.8",
    noxEmission: "2.1",
    pmEmission: "0.02",
  });

  // ---------- Refs ----------
  const maintenanceFileInputRef = useRef<HTMLInputElement>(null);
  const certificateFileInputRef = useRef<HTMLInputElement>(null);

  // ---------- Handlers ----------
  const updateFormField = (name: string, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form:", form);
    console.log("Maintenance Records:", maintenanceRecords);
    console.log("Certificate Records:", certificateRecords);
  };

  // --- Maintenance ---
  const handleAddMaintenance = () => {
    const newId = Math.max(...maintenanceRecords.map((r) => r.id), 0) + 1;
    setMaintenanceRecords((prev) => [
      ...prev,
      {
        id: newId,
        lastService: "",
        nextDue: "",
        odometer: "",
        files: 0,
        fileNames: [],
        isEditing: true,
      },
    ]);
  };

  const updateMaintenanceField = (
    id: number,
    field: keyof MaintenanceRecord,
    value: string
  ) => {
    setMaintenanceRecords((prev) =>
      prev.map((r) => (r.id === id ? { ...r, [field]: value } : r))
    );
  };

  const handleMaintenanceFileUpload = (
    id: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = e.target.files;
    if (!files) return;
    const names = Array.from(files).map((f) => f.name);
    setMaintenanceRecords((prev) =>
      prev.map((r) =>
        r.id === id
          ? { ...r, files: files.length, fileNames: names }
          : r
      )
    );
  };

  const saveMaintenance = (id: number) => {
    setMaintenanceRecords((prev) =>
      prev.map((r) =>
        r.id === id
          ? {
            ...r,
            isEditing: false,
            lastService: r.lastService.trim(),
            nextDue: r.nextDue.trim(),
            odometer: r.odometer.trim(),
          }
          : r
      )
    );
  };

  const editMaintenance = (id: number) => {
    setMaintenanceRecords((prev) =>
      prev.map((r) => (r.id === id ? { ...r, isEditing: true } : r))
    );
  };

  const cancelMaintenance = (id: number) => {
    const record = maintenanceRecords.find((r) => r.id === id);
    if (
      record &&
      record.files === 0 &&
      !record.lastService &&
      !record.nextDue &&
      !record.odometer
    ) {
      setMaintenanceRecords((prev) => prev.filter((r) => r.id !== id));
    } else {
      setMaintenanceRecords((prev) =>
        prev.map((r) => (r.id === id ? { ...r, isEditing: false } : r))
      );
    }
  };

  const deleteMaintenance = (id: number) => {
    setMaintenanceRecords((prev) => prev.filter((r) => r.id !== id));
  };

  // --- Certificates ---
  const handleAddCertificate = () => {
    const newId = Math.max(...certificateRecords.map((r) => r.id), 0) + 1;
    setCertificateRecords((prev) => [
      ...prev,
      {
        id: newId,
        type: "",
        number: "",
        issued: "",
        expiry: "",
        remarks: "",
        isEditing: true,
      },
    ]);
  };

  const updateCertificateField = (
    id: number,
    field: keyof CertificateRecord,
    value: string | File
  ) => {
    setCertificateRecords((prev) =>
      prev.map((r) =>
        r.id === id
          ? {
            ...r,
            [field]: value,
            ...(field === "fileObj" ? { file: (value as File).name } : {}),
          }
          : r
      )
    );
  };

  const saveCertificate = (id: number) => {
    setCertificateRecords((prev) =>
      prev.map((r) =>
        r.id === id
          ? {
            ...r,
            isEditing: false,
            type: r.type.trim(),
            number: r.number.trim(),
            remarks: r.remarks.trim(),
          }
          : r
      )
    );
  };

  const editCertificate = (id: number) => {
    setCertificateRecords((prev) =>
      prev.map((r) => (r.id === id ? { ...r, isEditing: true } : r))
    );
  };

  const cancelCertificate = (id: number) => {
    const cert = certificateRecords.find((r) => r.id === id);
    if (
      cert &&
      !cert.type &&
      !cert.number &&
      !cert.issued &&
      !cert.expiry &&
      !cert.remarks &&
      !cert.file
    ) {
      setCertificateRecords((prev) => prev.filter((r) => r.id !== id));
    } else {
      setCertificateRecords((prev) =>
        prev.map((r) => (r.id === id ? { ...r, isEditing: false } : r))
      );
    }
  };

  const deleteCertificate = (id: number) => {
    setCertificateRecords((prev) => prev.filter((r) => r.id !== id));
  };

  // Helper: Convert DD/MM/YYYY → YYYY-MM-DD
  const toIsoDate = (ddmmyyyy: string): string => {
    if (!ddmmyyyy) return "";
    const [day, month, year] = ddmmyyyy.split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  // Helper: Convert YYYY-MM-DD → DD/MM/YYYY
  const toDisplayDate = (isoDate: string): string => {
    if (!isoDate) return "";
    const [year, month, day] = isoDate.split("-");
    return `${day}/${month}/${year}`;
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
        <div className="space-y-6 p-4 lg:p-6 w-full">
          {/* Status */}
          <div className="max-w-[300px]">
            <Label className="text-base font-medium text-base-optimized mb-2 block">
              Status <span className="text-red-500">*</span>
            </Label>
            <Select value={form.status} onValueChange={(v) => updateFormField("status", v)}>
              <SelectTrigger className="w-full text-base-optimized">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="Inactive">Inactive</SelectItem>
                <SelectItem value="Maintenance">Maintenance</SelectItem>
                <SelectItem value="Out of Service">Out of Service</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Vehicle Registration Details */}
          <Card className="overflow-hidden w-full">
            <CardHeader className="header-bg-soft pb-6">
              <CardTitle className="flex items-center gap-2">
                <Truck className="w-5 h-5" />
                Vehicle Registration Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <Label>
                    Vehicle Number <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    required
                    value={form.vehicleNumber}
                    onChange={(e) => updateFormField("vehicleNumber", e.target.value)}
                    placeholder="e.g., SAZ1234A"
                  />
                </div>
                <div className="space-y-2">
                  <Label>
                    Chassis No. <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    required
                    value={form.chassisNo}
                    onChange={(e) => updateFormField("chassisNo", e.target.value)}
                    placeholder="e.g., JTFST22P200040240"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Vehicle Scheme <span className="text-red-500">*</span></Label>
                  <Select
                    value={form.vehicleScheme}
                    onValueChange={(v) => updateFormField("vehicleScheme", v)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select scheme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Ambulance">Ambulance</SelectItem>
                      <SelectItem value="Emergency Response">Emergency Response</SelectItem>
                      <SelectItem value="Patient Transport">Patient Transport</SelectItem>
                      <SelectItem value="Medical Support">Medical Support</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Vehicle Type <span className="text-red-500">*</span></Label>
                  <Select
                    value={form.vehicleType}
                    onValueChange={(v) => updateFormField("vehicleType", v)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Basic Life Support">Basic Life Support</SelectItem>
                      <SelectItem value="Advanced Life Support">Advanced Life Support</SelectItem>
                      <SelectItem value="ICU Ambulance">ICU Ambulance</SelectItem>
                      <SelectItem value="Pediatric Ambulance">Pediatric Ambulance</SelectItem>
                      <SelectItem value="medical">Maternity Ambulance</SelectItem>
                      <SelectItem value="Maternity Ambulance">Psychiatric Transport</SelectItem>
                      <SelectItem value="Bariatric Ambulance">Bariatric Ambulance</SelectItem>
                      <SelectItem value="Trauma Response">Trauma Response</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>
                    Make & Model <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    required
                    value={form.makeModel}
                    onChange={(e) => updateFormField("makeModel", e.target.value)}
                    placeholder="e.g., Mercedes-Benz Sprinter"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Year</Label>
                  <Input
                    value={form.year}
                    onChange={(e) => updateFormField("year", e.target.value)}
                    placeholder="e.g., 2023"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Current Propellant</Label>
                  <Select
                    value={form.currentPropellant}
                    onValueChange={(v) => updateFormField("currentPropellant", v)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Diesel">Diesel</SelectItem>
                      <SelectItem value="Petrol">Petrol</SelectItem>
                      <SelectItem value="Electric">Electric</SelectItem>
                      <SelectItem value="Hybrid">Hybrid</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Team Details */}
          <Card className="overflow-hidden w-full">
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
                  <Select
                    value={form.driver}
                    onValueChange={(v) => updateFormField("driver", v)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Driver" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Annette Black">Annette Black</SelectItem>
                      <SelectItem value="Jennifer Liu">Jennifer Liu</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Medic</Label>
                  <Select
                    value={form.medic}
                    onValueChange={(v) => updateFormField("medic", v)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Medic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Annette Black">Annette Black</SelectItem>
                      <SelectItem value="Jennifer Liu">Jennifer Liu</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Escort</Label>
                  <Select
                    value={form.escort}
                    onValueChange={(v) => updateFormField("escort", v)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="-" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">-</SelectItem>
                      <SelectItem value="Annette Black">Annette Black</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Owner's Details */}
          <Card className="overflow-hidden w-full">
            <CardHeader className="header-bg-soft pb-6">
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Owner's Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>
                    Owner's Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    required
                    value={form.ownerName}
                    onChange={(e) => updateFormField("ownerName", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>
                    NRIC/Passport/Company Cert No.{" "}
                    <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    required
                    value={form.ownerId}
                    onChange={(e) => updateFormField("ownerId", e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Label>Registered Address</Label>
                  <Input
                    value={form.registeredAddress}
                    onChange={(e) => updateFormField("registeredAddress", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Mailing Address</Label>
                  <Input
                    value={form.mailingAddress}
                    onChange={(e) => updateFormField("mailingAddress", e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Owner's ID Type</Label>
                  <Select
                    value={form.ownerIdType}
                    onValueChange={(v) => updateFormField("ownerIdType", v)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Company Registration">
                        Company Registration
                      </SelectItem>
                      <SelectItem value="NRIC">NRIC</SelectItem>
                      <SelectItem value="Passport">Passport</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Registration Date</Label>
                  <Input
                    type="date"
                    value={form.registrationDate}
                    onChange={(e) => updateFormField("registrationDate", e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Registration Details */}
          <Card className="overflow-hidden w-full">
            <CardHeader className="header-bg-soft pb-6">
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Registration Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>Previous Vehicle No.</Label>
                  <Input
                    value={form.previousVehicleNo}
                    onChange={(e) => updateFormField("previousVehicleNo", e.target.value)}
                    defaultValue="-"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Effective Date of Ownership</Label>
                  <Input
                    type="date"
                    value={form.effectiveOwnershipDate}
                    onChange={(e) => updateFormField("effectiveOwnershipDate", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Original Registration Date</Label>
                  <Input
                    type="date"
                    value={form.originalRegistrationDate}
                    onChange={(e) => updateFormField("originalRegistrationDate", e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>No. of Transfers</Label>
                  <Input
                    value={form.noOfTransfers}
                    onChange={(e) => updateFormField("noOfTransfers", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>IU Label No.</Label>
                  <Input
                    value={form.iuLabelNo}
                    onChange={(e) => updateFormField("iuLabelNo", e.target.value)}
                    placeholder="e.g., 40057623"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Vehicle Specifications */}
          <Card className="overflow-hidden w-full">
            <CardHeader className="header-bg-soft pb-6">
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Vehicle Specifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <Label>Engine No.</Label>
                  <Input
                    value={form.engineNo}
                    onChange={(e) => updateFormField("engineNo", e.target.value)}
                    placeholder="e.g., 1KDB045665"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Engine Type</Label>
                  <Select
                    value={form.engineType}
                    onValueChange={(v) => updateFormField("engineType", v)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Diesel">Diesel</SelectItem>
                      <SelectItem value="Petrol">Petrol</SelectItem>
                      <SelectItem value="Electric">Electric</SelectItem>
                      <SelectItem value="Hybrid">Hybrid</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Maximum Unladen Weight (kg)</Label>
                  <Input
                    value={form.maxUnladenWeight}
                    onChange={(e) => updateFormField("maxUnladenWeight", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Maximum Laden Weight (kg)</Label>
                  <Input
                    value={form.maxLadenWeight}
                    onChange={(e) => updateFormField("maxLadenWeight", e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <Label>Engine Capacity (cc)</Label>
                  <Input
                    value={form.engineCapacity}
                    onChange={(e) => updateFormField("engineCapacity", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Maximum Power Output (kW)</Label>
                  <Input
                    value={form.maxPowerOutput}
                    onChange={(e) => updateFormField("maxPowerOutput", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Primary Color</Label>
                  <Select
                    value={form.primaryColor}
                    onValueChange={(v) => updateFormField("primaryColor", v)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="White">White</SelectItem>
                      <SelectItem value="Yellow">Yellow</SelectItem>
                      <SelectItem value="Blue">Blue</SelectItem>
                      <SelectItem value="Red">Red</SelectItem>
                      <SelectItem value="Green">Green</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Secondary Color</Label>
                  <Select
                    value={form.secondaryColor}
                    onValueChange={(v) => updateFormField("secondaryColor", v)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Red">Red</SelectItem>
                      <SelectItem value="Blue">Blue</SelectItem>
                      <SelectItem value="Green">Green</SelectItem>
                      <SelectItem value="Orange">Orange</SelectItem>
                      <SelectItem value="Black">Black</SelectItem>
                      <SelectItem value="None">None</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <Label>Passenger Capacity</Label>
                  <Input
                    value={form.passengerCapacity}
                    onChange={(e) => updateFormField("passengerCapacity", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Wheelchair Accessible</Label>
                  <RadioGroup
                    value={form.wheelchairAccessible}
                    onValueChange={(v) => updateFormField("wheelchairAccessible", v)}
                    className="flex gap-4"
                  >
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="Yes" id="wa-yes" />
                      <Label className="m-0" htmlFor="wa-yes">Yes</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="No" id="wa-no" />
                      <Label className="m-0" htmlFor="wa-no">No</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="space-y-2">
                  <Label>Lifter</Label>
                  <RadioGroup
                    value={form.lifter}
                    onValueChange={(v) => updateFormField("lifter", v)}
                    className="flex gap-4"
                  >
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="Yes" id="lifter-yes" />
                      <Label className="m-0" htmlFor="lifter-yes">Yes</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="No" id="lifter-no" />
                      <Label className="m-0" htmlFor="lifter-no">No</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="space-y-2">
                  <Label>Stretcher Compatible</Label>
                  <RadioGroup
                    value={form.stretcherCompatible}
                    onValueChange={(v) => updateFormField("stretcherCompatible", v)}
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
                </div>
              </div>
            </CardContent>
          </Card>

          {/* ARF & COE */}
          <Card className="overflow-hidden w-full">
            <CardHeader className="header-bg-soft pb-6">
              <CardTitle className="flex items-center gap-2">
                <TriangleAlert className="w-5 h-5" />
                Additional Registration Fee (ARF) & COE Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <Label>Open Market Value (S$)</Label>
                  <Input
                    value={form.omv}
                    onChange={(e) => updateFormField("omv", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Additional Registration Fee Rate (%)</Label>
                  <Input
                    value={form.arfRate}
                    onChange={(e) => updateFormField("arfRate", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Actual ARF Paid (S$)</Label>
                  <Input
                    value={form.actualArfPaid}
                    onChange={(e) => updateFormField("actualArfPaid", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>COE Expiry Date</Label>
                  <Input
                    type="date"
                    value={form.coeExpiryDate}
                    onChange={(e) => updateFormField("coeExpiryDate", e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label>OPC Cash Rebate Eligibility</Label>
                  <Select
                    value={form.opcCashRebate}
                    onValueChange={(v) => updateFormField("opcCashRebate", v)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="No">No</SelectItem>
                      <SelectItem value="Yes">Yes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>QP during COE Bidding Exercise</Label>
                  <Input
                    value={form.qpDuringCoe}
                    onChange={(e) => updateFormField("qpDuringCoe", e.target.value)}
                    defaultValue="-"
                  />
                </div>
                <div className="space-y-2">
                  <Label>COE No.</Label>
                  <Input
                    value={form.coeNo}
                    onChange={(e) => updateFormField("coeNo", e.target.value)}
                    placeholder="e.g., COE123456789"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* PARF Rebate */}
          <Card className="overflow-hidden w-full">
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
                  <Input
                    value={form.parfEligibility}
                    onChange={(e) => updateFormField("parfEligibility", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>PARF Eligibility Expiry Date</Label>
                  <Input
                    type="date"
                    value={form.parfExpiryDate}
                    onChange={(e) => updateFormField("parfExpiryDate", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Min PARF Benefit (S$)</Label>
                  <Input
                    value={form.minParfBenefit}
                    onChange={(e) => updateFormField("minParfBenefit", e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Emissions */}
          <Card className="overflow-hidden w-full">
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
                  <Input
                    value={form.co2Emission}
                    onChange={(e) => updateFormField("co2Emission", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>CO Emission (g/km)</Label>
                  <Input
                    value={form.coEmission}
                    onChange={(e) => updateFormField("coEmission", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>HC Emission (g/km)</Label>
                  <Input
                    value={form.hcEmission}
                    onChange={(e) => updateFormField("hcEmission", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>NOx Emission (g/km)</Label>
                  <Input
                    value={form.noxEmission}
                    onChange={(e) => updateFormField("noxEmission", e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="space-y-2">
                  <Label>PM Emission (g/km)</Label>
                  <Input
                    value={form.pmEmission}
                    onChange={(e) => updateFormField("pmEmission", e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Documentation Upload */}
          <Card className="overflow-hidden w-full">
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

          {/* Maintenance & Compliance Records */}
          <Card className="overflow-hidden w-full">
            <CardHeader className="header-bg-soft pb-6">
              <CardTitle className="flex items-center gap-2">
                <Wrench className="w-5 h-5" />
                Maintenance & Compliance Records
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Maintenance History</h3>
                  <Button type="button" variant="outline" size="sm" onClick={handleAddMaintenance}>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Record
                  </Button>
                </div>
                <div className="border rounded-lg overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-[#2160AD] hover:bg-[#2160AD]">
                        <TableHead className="text-white px-4 py-3">Last Service Date</TableHead>
                        <TableHead className="text-white px-4 py-3">Next Service Due</TableHead>
                        <TableHead className="text-white px-4 py-3">Current Odometer (km)</TableHead>
                        <TableHead className="text-white px-4 py-3">Documents</TableHead>
                        <TableHead className="text-white px-4 py-3">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {maintenanceRecords.map((record) => (
                        <TableRow key={record.id} className="hover:bg-gray-50">
                          {record.isEditing ? (
                            <>
                              <TableCell className="px-4 py-3">
                                <Input
                                  type="date"
                                  value={toIsoDate(record.lastService)}
                                  onChange={(e) =>
                                    updateMaintenanceField(record.id, "lastService", toDisplayDate(e.target.value))
                                  }
                                  className="h-9 w-full"
                                />
                              </TableCell>
                              <TableCell className="px-4 py-3">
                                <Input
                                  type="date"
                                  value={toIsoDate(record.nextDue)}
                                  onChange={(e) =>
                                    updateMaintenanceField(record.id, "nextDue", toDisplayDate(e.target.value))
                                  }
                                  className="h-9 w-full"
                                />
                              </TableCell>
                              <TableCell className="px-4 py-3">
                                <Input
                                  placeholder="e.g., 45,230"
                                  value={record.odometer}
                                  onChange={(e) =>
                                    updateMaintenanceField(record.id, "odometer", e.target.value)
                                  }
                                  className="h-9 w-full"
                                />
                              </TableCell>
                              <TableCell className="px-4 py-3">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => maintenanceFileInputRef.current?.click()}
                                  className="h-8"
                                >
                                  <Upload className="w-4 h-4 mr-1" />
                                  Upload
                                </Button>
                                <input
                                  ref={maintenanceFileInputRef}
                                  type="file"
                                  multiple
                                  hidden
                                  onChange={(e) => handleMaintenanceFileUpload(record.id, e)}
                                />
                                {record.files > 0 && (
                                  <div className="mt-1 text-xs text-blue-600">
                                    {record.files} file{record.files > 1 ? "s" : ""}
                                  </div>
                                )}
                              </TableCell>
                              <TableCell className="px-4 py-3">
                                <div className="flex items-center gap-1">
                                  <Button
                                    size="icon"
                                    variant="ghost"
                                    onClick={() => saveMaintenance(record.id)}
                                    className="h-8 w-8"
                                  >
                                    <Check className="w-4 h-4 text-green-600" />
                                  </Button>
                                  <Button
                                    size="icon"
                                    variant="ghost"
                                    onClick={() => cancelMaintenance(record.id)}
                                    className="h-8 w-8"
                                  >
                                    <X className="w-4 h-4 text-red-600" />
                                  </Button>
                                </div>
                              </TableCell>
                            </>
                          ) : (
                            <>
                              <TableCell className="px-4 py-3">{record.lastService || "-"}</TableCell>
                              <TableCell className="px-4 py-3">{record.nextDue || "-"}</TableCell>
                              <TableCell className="px-4 py-3">{record.odometer}</TableCell>
                              <TableCell className="px-4 py-3">
                                {record.files > 0 ? (
                                  <div className="flex items-center gap-2">
                                    <Folder className="w-4 h-4 text-blue-600" />
                                    <span className="text-xs text-blue-600">
                                      {record.files} file{record.files > 1 ? "s" : ""}
                                    </span>
                                  </div>
                                ) : (
                                  <span className="text-xs text-gray-400">No files</span>
                                )}
                              </TableCell>
                              <TableCell className="px-4 py-3">
                                <div className="flex gap-1">
                                  <Button
                                    size="icon"
                                    variant="ghost"
                                    onClick={() => editMaintenance(record.id)}
                                  >
                                    <SquarePen className="w-4 h-4 text-gray-500" />
                                  </Button>
                                  <Button
                                    size="icon"
                                    variant="ghost"
                                    onClick={() => deleteMaintenance(record.id)}
                                  >
                                    <Trash2 className="w-4 h-4 text-red-600" />
                                  </Button>
                                </div>
                              </TableCell>
                            </>
                          )}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Certificates & Licenses */}
          <Card className="overflow-hidden w-full">
            <CardHeader className="header-bg-soft pb-6">
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Certificates & Licenses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Certificate Records</h3>
                  <Button type="button" variant="outline" size="sm" onClick={handleAddCertificate}>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Certificate
                  </Button>
                </div>
                <div className="border rounded-lg overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-[#2160AD] hover:bg-[#2160AD]">
                        <TableHead className="text-white px-4 py-3">Type</TableHead>
                        <TableHead className="text-white px-4 py-3">Number</TableHead>
                        <TableHead className="text-white px-4 py-3">Issued</TableHead>
                        <TableHead className="text-white px-4 py-3">Expiry</TableHead>
                        <TableHead className="text-white px-4 py-3">Document</TableHead>
                        <TableHead className="text-white px-4 py-3">Remarks</TableHead>
                        <TableHead className="text-white px-4 py-3">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {certificateRecords.map((cert) => (
                        <TableRow key={cert.id} className="hover:bg-gray-50">
                          {cert.isEditing ? (
                            <>
                              <TableCell className="px-4 py-3">
                                <Select
                                  value={cert.type}
                                  onValueChange={(v) => updateCertificateField(cert.id, "type", v)}
                                >
                                  <SelectTrigger className="h-9 w-full">
                                    <SelectValue placeholder="Select type" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="Vehicle Inspection Certificate (LTA)">
                                      Vehicle Inspection Certificate (LTA)
                                    </SelectItem>
                                    <SelectItem value="Vehicle Insurance">Vehicle Insurance</SelectItem>
                                    <SelectItem value="Road Tax">Road Tax</SelectItem>
                                    <SelectItem value="COE">COE</SelectItem>
                                  </SelectContent>
                                </Select>
                              </TableCell>
                              <TableCell className="px-4 py-3">
                                <Input
                                  placeholder="e.g., LTA-2024-001234"
                                  value={cert.number}
                                  onChange={(e) => updateCertificateField(cert.id, "number", e.target.value)}
                                  className="h-9 w-full"
                                />
                              </TableCell>
                              <TableCell className="px-4 py-3">
                                <Input
                                  type="date"
                                  value={toIsoDate(cert.issued)}
                                  onChange={(e) =>
                                    updateCertificateField(cert.id, "issued", toDisplayDate(e.target.value))
                                  }
                                  className="h-9 w-full"
                                />
                              </TableCell>
                              <TableCell className="px-4 py-3">
                                <Input
                                  type="date"
                                  value={toIsoDate(cert.expiry)}
                                  onChange={(e) =>
                                    updateCertificateField(cert.id, "expiry", toDisplayDate(e.target.value))
                                  }
                                  className="h-9 w-full"
                                />
                              </TableCell>
                              <TableCell className="px-4 py-3">
                                <label className="cursor-pointer">
                                  <Input
                                    ref={certificateFileInputRef}
                                    type="file"
                                    accept=".pdf,.jpg,.jpeg,.png"
                                    className="hidden"
                                    onChange={(e) => {
                                      const file = e.target.files?.[0];
                                      if (file) updateCertificateField(cert.id, "fileObj", file);
                                    }}
                                  />
                                  <Button size="sm" variant="outline" className="h-8" onClick={() => certificateFileInputRef.current?.click()}>
                                    <Upload className="w-4 h-4 mr-1" />
                                    Upload
                                  </Button>
                                </label>
                                {cert.file && (
                                  <div className="mt-1 text-xs text-blue-600 truncate max-w-[100px]">
                                    {cert.file}
                                  </div>
                                )}
                              </TableCell>
                              <TableCell className="px-4 py-3">
                                <Textarea
                                  placeholder="Optional notes"
                                  value={cert.remarks}
                                  onChange={(e) => updateCertificateField(cert.id, "remarks", e.target.value)}
                                  className="min-h-[40px] resize-none"
                                  rows={1}
                                />
                              </TableCell>
                              <TableCell className="px-4 py-3">
                                <div className="flex items-center gap-1">
                                  <Button
                                    size="icon"
                                    variant="ghost"
                                    onClick={() => saveCertificate(cert.id)}
                                    className="h-8 w-8"
                                  >
                                    <Check className="w-4 h-4 text-green-600" />
                                  </Button>
                                  <Button
                                    size="icon"
                                    variant="ghost"
                                    onClick={() => cancelCertificate(cert.id)}
                                    className="h-8 w-8"
                                  >
                                    <X className="w-4 h-4 text-red-600" />
                                  </Button>
                                </div>
                              </TableCell>
                            </>
                          ) : (
                            <>
                              <TableCell className="px-4 py-3">{cert.type}</TableCell>
                              <TableCell className="px-4 py-3">{cert.number}</TableCell>
                              <TableCell className="px-4 py-3">{cert.issued || "-"}</TableCell>
                              <TableCell className="px-4 py-3">{cert.expiry || "-"}</TableCell>
                              <TableCell className="px-4 py-3">
                                {cert.file ? (
                                  <div className="flex items-center gap-2">
                                    <FileText className="w-4 h-4 text-blue-600" />
                                    <span className="text-xs text-blue-600 truncate max-w-[120px]">
                                      {cert.file}
                                    </span>
                                  </div>
                                ) : (
                                  <span className="text-xs text-gray-400">-</span>
                                )}
                              </TableCell>
                              <TableCell className="px-4 py-3 text-sm">{cert.remarks || "-"}</TableCell>
                              <TableCell className="px-4 py-3">
                                <div className="flex gap-1">
                                  <Button
                                    size="icon"
                                    variant="ghost"
                                    onClick={() => editCertificate(cert.id)}
                                  >
                                    <SquarePen className="w-4 h-4 text-gray-500" />
                                  </Button>
                                  <Button
                                    size="icon"
                                    variant="ghost"
                                    onClick={() => deleteCertificate(cert.id)}
                                  >
                                    <Trash2 className="w-4 h-4 text-red-600" />
                                  </Button>
                                </div>
                              </TableCell>
                            </>
                          )}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submit Buttons */}
          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button type="button" variant="outline" size="lg">
              Cancel
            </Button>
            <Button type="submit" size="lg">
              Add Vehicle
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}