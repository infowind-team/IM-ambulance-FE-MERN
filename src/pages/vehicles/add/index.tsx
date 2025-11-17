// "use client";
// import { useRouter} from "next/router";
// import { useState, useRef, useEffect } from "react";

// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Truck,
//   User,
//   FileText,
//   Settings,
//   Upload,
//   Shield,
//   Wrench,
//   TriangleAlert,
//   Plus,
//   Folder,
//   SquarePen,
//   Trash2,
//   Check,
//   X,
// } from "lucide-react";
// import FunctionalHeader from "@/layout/FunctionalHeader";

// // Types
// type MaintenanceRecord = {
//   id: number;
//   lastServiceDate: string;
//   nextServiceDate: string;
//   odometer: string;
//   files: number;
//   fileNames?: string[];
//   isEditing?: boolean;
// };

// type CertificateRecord = {
//   id: number;
//   type: string;
//   number: string;
//   issued: string;
//   expiry: string;
//   file?: string;
//   fileObj?: File;
//   remarks: string;
//   isEditing?: boolean;
// };

// export default function VehiclesAddPage() {
//   const router = useRouter();
//   const { id } = router.query; // when you come via /vehicles/add?id=XYZ
//   const vehicleId = Array.isArray(id) ? id[0] : id
//   const [isEditable, setIsEditable] = useState(!id); // not editable if we have id
//   const [loading, setLoading] = useState(false);

//   // ---------- State ----------
//   const [maintenance, setMaintenanceRecords] = useState<MaintenanceRecord[]>([]);

//   const [certificates, setCertificateRecords] = useState<CertificateRecord[]>([
//     {
//       id: 1,
//       type: "Vehicle Inspection Certificate (LTA)",
//       number: "LTA-2024-001234",
//       issued: "2024-01-15",
//       expiry: "2025-01-14",
//       file: "inspection_cert.pdf",
//       remarks: "-",
//     },
//     {
//       id: 2,
//       type: "Vehicle Insurance",
//       number: "INS-2024-567890",
//       issued: "2024-02-01",
//       expiry: "2025-01-31",
//       file: "insurance_policy.pdf",
//       remarks: "Comprehensive coverage",
//     },
//   ]);

//   const [form, setForm] = useState({
//     status: "Active",
//     vehicleNumber: "",
//     chassisNumber: "",
//     scheme: "",
//     type: "",
//     makeModel: "",
//     year: "",
//     propellant: "Diesel",
//     driver: "",
//     medic: "",
//     escort: "",
//     ownerName: "IM Ambulance Services Pte Ltd",
//     "driverId": "675a3c1b8a3c4d5f6b7a8d11",
//     "medicId": "675a3c1c8a3c4d5f6b7a8d12",
//     "escortId": "675a3c1d8a3c4d5f6b7a8d13",
//     ownerId: "675a3c1e8a3c4d5f6b7a8d14",
//     registeredAddress: "123 Medical Drive, Singapore 123456",
//     mailingAddress: "123 Medical Drive, Singapore 123456",
//     ownerIdType: "Company Registration",
//     registrationDate: "",
//     previousVehicleNo: "",
//     effectiveOwnershipDate: "",
//     originalRegistrationDate: "",
//     noOfTransfers: "0",
//     iuLabelNo: "",
//     engineNo: "",
//     engineType: "",
//     maxUnladenWeight: "2200",
//     maxLadenWeight: "3250",
//     engineCapacity: "2982",
//     maxPowerOutput: "110",
//     primaryColor: "White",
//     secondaryColor: "Red",
//     passengerCapacity: "5",
//     wheelchairAccessible: "Yes",
//     lifter: "Yes",
//     stretcherCompatible: "Yes",
//     omv: "53630.00",
//     arfRate: "100",
//     actualArfPaid: "53630.00",
//     coeExpiryDate: "",
//     opcCashRebate: "No",
//     qpDuringCoe: "-",
//     coeNo: "",
//     parfEligibility: "53630.00",
//     parfExpiryDate: "2030-09-24",
//     minParfBenefit: "26815.00",
//     co2Emission: "180",
//     coEmission: "1.5",
//     hcEmission: "0.8",
//     noxEmission: "2.1",
//     pmEmission: "0.02",
//     lastServiceDate: "",
//     nextServiceDate:""
//   });

//   useEffect(() => {
//     if (!router.isReady) return;
//     setIsEditable(!id); 
//   }, [router.isReady, id]);

//   useEffect(() => {
//     if (id) fetchVehicleById(id as string);
//   }, [id]);

//   const fetchVehicleById = async (vehicleId: string) => {
//     try {
//       setLoading(true);
//       const accessToken = localStorage.getItem("accessToken");
//       const res = await fetch(`/api/vehicles/get-by-id/${vehicleId}`, {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//           "Content-Type": "application/json",
//         },
//       });
//       const data = await res.json();
//       if (!res.ok) throw new Error(data.message);

//       setForm((prev) => ({
//         ...prev,
//         vehicleNumber: data.data.vehicleNumber || "",
//         chassisNumber: data.data.chassisNumber || "",
//         type: data.data.type || "",
//         scheme: data.data.scheme || "",
//         makeModel: data.data.make || "",
//         year: data.data.year?.toString() || "",
//         propellant: data.data.propellant || "Diesel",
//         status: data.data.status || "Active",
//         ownerName: data.data.owner?.ownerName || "",
//         registrationDate: data.data.owner?.registrationDate?.split("T")[0] || "",
//       }));

//       if (data.data.vehicleCertificates) {
//         setCertificateRecords(
//           data.data.vehicleCertificates.map((c: any, index: number) => ({
//             id: index + 1,
//             type: c.certificateType,
//             number: c.certificateNumber,
//             issued: c.issuedDate?.split("T")[0] || "",
//             expiry: c.expiryDate?.split("T")[0] || "",
//             file: c.documentUrl || "",
//             remarks: c.remarks || "",
//           }))
//         );
//       }
//     } catch (err) {
//       console.error("Error fetching vehicle:", err);
//       alert("Failed to load vehicle details.");
//     } finally {
//       setLoading(false);
//     }
//   };


//   // ---------- Refs ----------
//   const maintenanceFileInputRef = useRef<HTMLInputElement>(null);
//   const certificateFileInputRef = useRef<HTMLInputElement>(null);

//   // ---------- Handlers ----------
//   const updateFormField = (name: string, value: string) => {
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };


//   // --- Maintenance ---
//   const handleAddMaintenance = () => {
//     const newId = Math.max(...maintenance.map((r) => r.id), 0) + 1;
//     setMaintenanceRecords((prev) => [
//       ...prev,
//       {
//         id: newId,
//         lastServiceDate: "",
//         nextServiceDate: "",
//         odometer: "",
//         files: 0,
//         fileNames: [],
//         isEditing: true,
//       },
//     ]);
//   };

//   const updateMaintenanceField = (
//     id: number,
//     field: keyof MaintenanceRecord,
//     value: string
//   ) => {
//     setMaintenanceRecords((prev) =>
//       prev.map((r) => (r.id === id ? { ...r, [field]: value } : r))
//     );
//   };

//   const handleMaintenanceFileUpload = (
//     id: number,
//     e: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const files = e.target.files;
//     if (!files) return;
//     const names = Array.from(files).map((f) => f.name);
//     setMaintenanceRecords((prev) =>
//       prev.map((r) =>
//         r.id === id
//           ? { ...r, files: files.length, fileNames: names }
//           : r
//       )
//     );
//   };

//   const saveMaintenance = (id: number) => {
//     setMaintenanceRecords((prev) =>
//       prev.map((r) =>
//         r.id === id
//           ? {
//             ...r,
//             isEditing: false,
//             lastServiceDate: r.lastServiceDate.trim(),
//             nextServiceDate: r.nextServiceDate.trim(),
//             odometer: r.odometer.trim(),
//           }
//           : r
//       )
//     );
//   };

//   const editMaintenance = (id: number) => {
//     setMaintenanceRecords((prev) =>
//       prev.map((r) => (r.id === id ? { ...r, isEditing: true } : r))
//     );
//   };

//   const cancelMaintenance = (id: number) => {
//     const record = maintenance.find((r) => r.id === id);
//     if (
//       record &&
//       record.files === 0 &&
//       !record.lastServiceDate &&
//       !record.nextServiceDate &&
//       !record.odometer
//     ) {
//       setMaintenanceRecords((prev) => prev.filter((r) => r.id !== id));
//     } else {
//       setMaintenanceRecords((prev) =>
//         prev.map((r) => (r.id === id ? { ...r, isEditing: false } : r))
//       );
//     }
//   };

//   const deleteMaintenance = (id: number) => {
//     setMaintenanceRecords((prev) => prev.filter((r) => r.id !== id));
//   };

//   // --- Certificates ---
//   const handleAddCertificate = () => {
//     const newId = Math.max(...certificates.map((r) => r.id), 0) + 1;
//     setCertificateRecords((prev) => [
//       ...prev,
//       {
//         id: newId,
//         type: "",
//         number: "",
//         issued: "",
//         expiry: "",
//         remarks: "",
//         isEditing: true,
//       },
//     ]);
//   };

//   const updateCertificateField = (
//     id: number,
//     field: keyof CertificateRecord,
//     value: string | File
//   ) => {
//     setCertificateRecords((prev) =>
//       prev.map((r) =>
//         r.id === id
//           ? {
//             ...r,
//             [field]: value,
//             ...(field === "fileObj" ? { file: (value as File).name } : {}),
//           }
//           : r
//       )
//     );
//   };

//   const saveCertificate = (id: number) => {
//     setCertificateRecords((prev) =>
//       prev.map((r) =>
//         r.id === id
//           ? {
//             ...r,
//             isEditing: false,
//             type: r.type.trim(),
//             number: r.number.trim(),
//             remarks: r.remarks.trim(),
//           }
//           : r
//       )
//     );
//   };

//   const editCertificate = (id: number) => {
//     setCertificateRecords((prev) =>
//       prev.map((r) => (r.id === id ? { ...r, isEditing: true } : r))
//     );
//   };

//   const cancelCertificate = (id: number) => {
//     const cert = certificates.find((r) => r.id === id);
//     if (
//       cert &&
//       !cert.type &&
//       !cert.number &&
//       !cert.issued &&
//       !cert.expiry &&
//       !cert.remarks &&
//       !cert.file
//     ) {
//       setCertificateRecords((prev) => prev.filter((r) => r.id !== id));
//     } else {
//       setCertificateRecords((prev) =>
//         prev.map((r) => (r.id === id ? { ...r, isEditing: false } : r))
//       );
//     }
//   };

//   const deleteCertificate = (id: number) => {
//     setCertificateRecords((prev) => prev.filter((r) => r.id !== id));
//   };

//   const handleAddVehicle = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {

//       const access_token =
//         typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;


//       const payload = {
//         vehicleNumber: form.vehicleNumber,
//         chassisNumber: form.chassisNumber,
//         type: form.type ,
//         scheme: form.scheme,
//         make: form.makeModel,
//         model:form.makeModel,
//         year: Number(form.year),
//         status: form.status,
//         propellant: form.propellant,
//         "driverId": "675a3c1b8a3c4d5f6b7a8d11",
//         "medicId": "675a3c1c8a3c4d5f6b7a8d12",
//         "escortId": "675a3c1d8a3c4d5f6b7a8d13",
//         "ownerId": "675a3c1e8a3c4d5f6b7a8d14",
//         "specifications": {
//           engineNumber: form.engineNo,
//           engineType: form.engineType,
//           "engineCapacity": Number(form.engineCapacity),
//           "maxUnladenWeight": Number(form.maxUnladenWeight),
//           "maxLadenWeight": Number(form.maxLadenWeight),
//           "enginePower": Number(form.maxPowerOutput),
//           "primaryColour": form.primaryColor,
//           "secondaryColour": form.secondaryColor,
//           "passengerCapacity": Number(form.passengerCapacity),
//           "wheelchairAccessible": true,
//           "lifter": true,
//           "stretcherCompatible": true
//         },
//         "emissions": {
//           "co2Emissions": 180,
//           "coEmissions": 1.5,
//           "hcEmissions": 0.8,
//           "noxEmissions": 2.1,
//           "pmEmissions": 0.02
//         },
//         "owner": {
//           vehicleId: "675a3d5e8a3c4d5f6b7a8e25",
//           ownerName: 'IM Ambulance Services Pte Ltd',
//           certificateNumber: "CERT001",
//           "registeredAddress": "123 Medical Drive, Singapore 123456",
//           "mailingAddress": "123 Medical Drive, Singapore 123456",
//           "ownerIdType": "Company Registration",
//           registrationDate: form.registrationDate
//         },
//         "maintenance": 
//           {
//             vehicleId: "675a3d5e8a3c4d5f6b7a8e25",
//             "lastServiceDate":  "2025-11-12",
//             "nextServiceDate":  "2025-12-12",
//             "currentOdometerReading": 123435,
//             "documentUrl": "insurance_policy.pdf"
//           }
//         ,
//         "certificates": 
//           {
//             "vehicleId": "675a3d5e8a3c4d5f6b7a8e25",
//             "certificateType": "Vehicle Inspection Certificate (LTA)",
//             "certificateNumber": "LTA-2024-001234",
//             "issuedDate": "2024-01-15T00:00:00.000Z",
//             "expiryDate": "2025-01-14T00:00:00.000Z",
//             "documentUrl": "inspection_cert.pdf",
//             "remarks": "Annual inspection passed successfully" 
//           }

//       } 
//       const res = await fetch("/api/vehicles/create-vehicle", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: access_token ? `Bearer ${access_token}` : "",
//         },
//         body: JSON.stringify(payload),
//       });


//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(data?.message || "Failed to add vehicle");
//       }

//       alert(" Vehicle added successfully!");



//     } catch (error: any) {
//       console.error("Error adding vehicle:", error);
//       alert(error.message || "Error adding vehicle");
//     }
//   };

//   const handleUpdateVehicle = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!id) {
//       alert("Missing vehicle ID");
//       return;
//     }

//     try {
//       setLoading(true);
//       const accessToken = localStorage.getItem("accessToken");

//       const payload = {
//         vehicleNumber: form.vehicleNumber,
//         chassisNumber: form.chassisNumber,
//         type: form.type ,
//         scheme: form.scheme,
//         make: form.makeModel,
//         model:form.makeModel,
//         year: Number(form.year),
//         status: form.status,
//         propellant: form.propellant,
//         "driverId": "675a3c1b8a3c4d5f6b7a8d11",
//         "medicId": "675a3c1c8a3c4d5f6b7a8d12",
//         "escortId": "675a3c1d8a3c4d5f6b7a8d13",
//         "ownerId": "675a3c1e8a3c4d5f6b7a8d14",
//         "specifications": {
//           engineNumber: form.engineNo,
//           engineType: form.engineType,
//           "engineCapacity": Number(form.engineCapacity),
//           "maxUnladenWeight": Number(form.maxUnladenWeight),
//           "maxLadenWeight": Number(form.maxLadenWeight),
//           "enginePower": Number(form.maxPowerOutput),
//           "primaryColour": form.primaryColor,
//           "secondaryColour": form.secondaryColor,
//           "passengerCapacity": Number(form.passengerCapacity),
//           "wheelchairAccessible": true,
//           "lifter": true,
//           "stretcherCompatible": true
//         },
//         "emissions": {
//           "co2Emissions": 180,
//           "coEmissions": 1.5,
//           "hcEmissions": 0.8,
//           "noxEmissions": 2.1,
//           "pmEmissions": 0.02
//         },
//         "owner": {
//           vehicleId: "675a3d5e8a3c4d5f6b7a8e35",
//           ownerName: 'IM Ambulance Services Pte Ltd',
//           certificateNumber: "CERT001",
//           "registeredAddress": "123 Medical Drive, Singapore 123456",
//           "mailingAddress": "123 Medical Drive, Singapore 123456",
//           "ownerIdType": "Company Registration",
//           registrationDate: form.registrationDate
//         },
//         "maintenance": 
//           {
//             vehicleId: "675a3d5e8a3c4d5f6b7a8e25",
//             "lastServiceDate":  "2025-11-12",
//             "nextServiceDate":  "2025-12-12",
//             "currentOdometerReading": 123435,
//             "documentUrl": "insurance_policy.pdf"
//           }
//         ,
//         "certificates": 
//           {
//             "vehicleId": "675a3d5e8a3c4d5f6b7a8e25",
//             "certificateType": "Vehicle Inspection Certificate (LTA)",
//             "certificateNumber": "LTA-2024-001234",
//             "issuedDate": "2024-01-15T00:00:00.000Z",
//             "expiryDate": "2025-01-14T00:00:00.000Z",
//             "documentUrl": "inspection_cert.pdf",
//             "remarks": "Annual inspection passed successfully" 
//           }
//         }

//       const response = await fetch(`/api/vehicles/update/${id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${accessToken}`,
//         },
//         body: JSON.stringify(payload),
//       });

//       const data = await response.json();

//       if (!response.ok) throw new Error(data.message || "Failed to update vehicle");

//       alert("Vehicle updated successfully!");
//       router.push("/vehicles");
//     } catch (error: any) {
//       console.error("Error updating vehicle:", error);
//       alert(error.message || "Error updating vehicle");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <FunctionalHeader
//         title={
//           id
//             ? `${isEditable ? "Editing" : "Viewing"} - ${form.vehicleNumber || id}`
//             : "Add New Vehicle"
//         }

//         breadcrumb={[
//           { label: "Operations" },
//           { label: "Vehicle" },
//           { label: vehicleId ? form.vehicleNumber || vehicleId : "Add New Vehicle" },
//         ]}
//       />
//       {vehicleId && (
//         <div className="flex justify-end p-4">
//           <Button variant="outline" onClick={() => setIsEditable((prev) => !prev)}>
//             {isEditable ? "Cancel Edit" : "Edit Vehicle"}
//           </Button>
//         </div>
//       )}

//       <div className="flex-1 w-full overflow-auto">
//         <div className="space-y-6 p-4 lg:p-6 w-full">
//           {/* Status */}
//           <div className="max-w-[300px]">
//             <Label className="text-base font-medium text-base-optimized mb-2 block">
//               Status <span className="text-red-500">*</span>
//             </Label>
//             <Select value={form.status} onValueChange={(v) => updateFormField("status", v)}>
//               <SelectTrigger className="w-full text-base-optimized">
//                 <SelectValue />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="Active">Active</SelectItem>
//                 <SelectItem value="Inactive">Inactive</SelectItem>
//                 <SelectItem value="Maintenance">Maintenance</SelectItem>
//                 <SelectItem value="Out of Service">Out of Service</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>

//           {/* Vehicle Registration Details */}
//           <Card className="overflow-hidden">
//             <CardHeader className="header-bg-soft pb-6">
//               <CardTitle className="flex items-center gap-2">
//                 <Truck className="w-5 h-5" />
//                 Vehicle Registration Details
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                 <div className="space-y-2">
//                   <Label>
//                     Vehicle Number <span className="text-red-500">*</span>
//                   </Label>
//                   <Input
//                     required 
//                     disabled={!isEditable}
//                     value={form.vehicleNumber}
//                     onChange={(e) => updateFormField("vehicleNumber", e.target.value)}
//                     placeholder="e.g., SAZ1234A"
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label>
//                     Chassis No. <span className="text-red-500">*</span>
//                   </Label>
//                   <Input
//                     required 
//                     disabled={!isEditable}
//                     value={form.chassisNumber}
//                     onChange={(e) => updateFormField("chassisNumber", e.target.value)}
//                     placeholder="e.g., JTFST22P200040240"
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label>Vehicle Scheme</Label>
//                   <Select
//                     value={form.scheme}
//                     onValueChange={(v) => updateFormField("scheme", v)}
//                   >
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select scheme" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="normal">Normal</SelectItem>
//                       <SelectItem value="opc">OPC</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//                 <div className="space-y-2">
//                   <Label>Vehicle Type</Label>
//                   <Select
//                     value={form.type}
//                     onValueChange={(v) => updateFormField("type", v)}
//                   >
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select type" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="ambulance">Ambulance</SelectItem>
//                       <SelectItem value="van">Van</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 <div className="space-y-2">
//                   <Label>
//                     Make & Model <span className="text-red-500">*</span>
//                   </Label>
//                   <Input
//                     required
//                     disabled={!isEditable}
//                     value={form.makeModel}
//                     onChange={(e) => updateFormField("makeModel", e.target.value)}
//                     placeholder="e.g., Mercedes-Benz Sprinter"
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label>Year</Label>
//                   <Input
//                     value={form.year}
//                     disabled={!isEditable}
//                     onChange={(e) => updateFormField("year", e.target.value)}
//                     placeholder="e.g., 2023"
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label>Current Propellant</Label>
//                   <Select
//                     value={form.propellant}
//                     onValueChange={(v) => updateFormField("Propellant", v)}
//                   >
//                     <SelectTrigger>
//                       <SelectValue />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="Diesel">Diesel</SelectItem>
//                       <SelectItem value="Petrol">Petrol</SelectItem>
//                       <SelectItem value="Electric">Electric</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           {/* Team Details */}
//           <Card className="overflow-hidden">
//             <CardHeader className="header-bg-soft pb-6">
//               <CardTitle className="flex items-center gap-2">
//                 <User className="w-5 h-5" />
//                 Team Details
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 <div className="space-y-2">
//                   <Label>
//                     Driver <span className="text-red-500">*</span>
//                   </Label>
//                   <Select
//                     value={form.driver}
//                     onValueChange={(v) => updateFormField("driver", v)}
//                   >
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select Driver" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="John Doe">John Doe</SelectItem>
//                       <SelectItem value="Jane Smith">Jane Smith</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//                 <div className="space-y-2">
//                   <Label>Medic</Label>
//                   <Select
//                     value={form.medic}
//                     onValueChange={(v) => updateFormField("medic", v)}
//                   >
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select Medic" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="Dr. Lee">Dr. Lee</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//                 <div className="space-y-2">
//                   <Label>Escort</Label>
//                   <Select
//                     value={form.escort}
//                     onValueChange={(v) => updateFormField("escort", v)}
//                   >
//                     <SelectTrigger>
//                       <SelectValue placeholder="-" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="none">dr.lee</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           {/* Owner's Details */}
//           <Card className="overflow-hidden">
//             <CardHeader className="header-bg-soft pb-6">
//               <CardTitle className="flex items-center gap-2">
//                 <FileText className="w-5 h-5" />
//                 Owner's Details
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="space-y-2">
//                   <Label>
//                     Owner's Name <span className="text-red-500">*</span>
//                   </Label>
//                   <Input
//                     required
//                     disabled={!isEditable}
//                     value={form.ownerName}
//                     onChange={(e) => updateFormField("ownerName", e.target.value)}
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label>
//                     NRIC/Passport/Company Cert No.{" "}
//                     <span className="text-red-500">*</span>
//                   </Label>
//                   <Input
//                     required
//                     disabled={!isEditable}
//                     value={form.ownerId}
//                     onChange={(e) => updateFormField("ownerId", e.target.value)}
//                   />
//                 </div>
//               </div>
//               <div className="grid grid-cols-1 gap-4">
//                 <div className="space-y-2">
//                   <Label>Registered Address</Label>
//                   <Input
//                     disabled={!isEditable}
//                     value={form.registeredAddress}
//                     onChange={(e) => updateFormField("registeredAddress", e.target.value)}
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label>Mailing Address</Label>
//                   <Input
//                     disabled={!isEditable}
//                     value={form.mailingAddress}
//                     onChange={(e) => updateFormField("mailingAddress", e.target.value)}
//                   />
//                 </div>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="space-y-2">
//                   <Label>Owner's ID Type</Label>
//                   <Select
//                     disabled={!isEditable}
//                     value={form.ownerIdType}
//                     onValueChange={(v) => updateFormField("ownerIdType", v)}
//                   >
//                     <SelectTrigger>
//                       <SelectValue />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="Company Registration">
//                         Company Registration
//                       </SelectItem>
//                       <SelectItem value="NRIC">NRIC</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//                 <div className="space-y-2">
//                   <Label>Registration Date</Label>
//                   <Input
//                     type="date"
//                      disabled={!isEditable}
//                     value={form.registrationDate}
//                     onChange={(e) => updateFormField("registrationDate", e.target.value)}
//                   />
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           {/* Registration Details */}
//           <Card className="overflow-hidden">
//             <CardHeader className="header-bg-soft pb-6">
//               <CardTitle className="flex items-center gap-2">
//                 <FileText className="w-5 h-5" />
//                 Registration Details
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 <div className="space-y-2">
//                   <Label>Previous Vehicle No.</Label>
//                   <Input
//                     value={form.previousVehicleNo}
//                      disabled={!isEditable}
//                     onChange={(e) => updateFormField("previousVehicleNo", e.target.value)}
//                   // defaultValue="-"
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label>Effective Date of Ownership</Label>
//                   <Input
//                     type="date"
//                      disabled={!isEditable}
//                     value={form.effectiveOwnershipDate}
//                     onChange={(e) => updateFormField("effectiveOwnershipDate", e.target.value)}
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label>Original Registration Date</Label>
//                   <Input
//                     type="date"
//                      disabled={!isEditable}
//                     value={form.originalRegistrationDate}
//                     onChange={(e) => updateFormField("originalRegistrationDate", e.target.value)}
//                   />
//                 </div>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="space-y-2">
//                   <Label>No. of Transfers</Label>
//                   <Input
//                      disabled={!isEditable}
//                     value={form.noOfTransfers}
//                     onChange={(e) => updateFormField("noOfTransfers", e.target.value)}
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label>IU Label No.</Label>
//                   <Input
//                      disabled={!isEditable}
//                     value={form.iuLabelNo}
//                     onChange={(e) => updateFormField("iuLabelNo", e.target.value)}
//                     placeholder="e.g., 40057623"
//                   />
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           {/* Vehicle Specifications */}
//           <Card className="overflow-hidden">
//             <CardHeader className="header-bg-soft pb-6">
//               <CardTitle className="flex items-center gap-2">
//                 <Settings className="w-5 h-5" />
//                 Vehicle Specifications
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                 <div className="space-y-2">
//                   <Label>Engine No.</Label>
//                   <Input
//                      disabled={!isEditable}
//                     value={form.engineNo}
//                     onChange={(e) => updateFormField("engineNo", e.target.value)}
//                     placeholder="e.g., 1KDB045665"
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label>Engine Type</Label>
//                   <Select
//                     disabled={!isEditable}
//                     value={form.engineType}
//                     onValueChange={(v) => updateFormField("engineType", v)}
//                   >
//                     <SelectTrigger>
//                       <SelectValue />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="Diesel">Diesel</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//                 <div className="space-y-2">
//                   <Label>Maximum Unladen Weight (kg)</Label>
//                   <Input
//                     disabled={!isEditable}
//                     value={form.maxUnladenWeight}
//                     onChange={(e) => updateFormField("maxUnladenWeight", e.target.value)}
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label>Maximum Laden Weight (kg)</Label>
//                   <Input
//                      disabled={!isEditable}
//                     value={form.maxLadenWeight}
//                     onChange={(e) => updateFormField("maxLadenWeight", e.target.value)}
//                   />
//                 </div>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                 <div className="space-y-2">
//                   <Label>Engine Capacity (cc)</Label>
//                   <Input
//                     disabled={!isEditable}
//                     value={form.engineCapacity}
//                     onChange={(e) => updateFormField("engineCapacity", e.target.value)}
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label>Maximum Power Output (kW)</Label>
//                   <Input
//                      disabled={!isEditable}
//                     value={form.maxPowerOutput}
//                     onChange={(e) => updateFormField("maxPowerOutput", e.target.value)}
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label>Primary Color</Label>
//                   <Select
//                     disabled={!isEditable}
//                     value={form.primaryColor}
//                     onValueChange={(v) => updateFormField("primaryColor", v)}
//                   >
//                     <SelectTrigger>
//                       <SelectValue />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="White">White</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//                 <div className="space-y-2">
//                   <Label>Secondary Color</Label>
//                   <Select
//                     disabled={!isEditable}
//                     value={form.secondaryColor}
//                     onValueChange={(v) => updateFormField("secondaryColor", v)}
//                   >
//                     <SelectTrigger>
//                       <SelectValue />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="Red">Red</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                 <div className="space-y-2">
//                   <Label>Passenger Capacity</Label>
//                   <Input
//                    disabled={!isEditable}
//                     value={form.passengerCapacity}
//                     onChange={(e) => updateFormField("passengerCapacity", e.target.value)}
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label>Wheelchair Accessible</Label>
//                   <RadioGroup
//                     disabled={!isEditable}
//                     value={form.wheelchairAccessible}
//                     onValueChange={(v) => updateFormField("wheelchairAccessible", v)}
//                     className="flex gap-4"
//                   >
//                     <div className="flex items-center gap-2">
//                       <RadioGroupItem value="Yes" id="wa-yes" />
//                       <Label htmlFor="wa-yes">Yes</Label>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <RadioGroupItem value="No" id="wa-no" />
//                       <Label htmlFor="wa-no">No</Label>
//                     </div>
//                   </RadioGroup>
//                 </div>
//                 <div className="space-y-2">
//                   <Label>Lifter</Label>
//                   <RadioGroup
//                     disabled={!isEditable}
//                     value={form.lifter}
//                     onValueChange={(v) => updateFormField("lifter", v)}
//                     className="flex gap-4"
//                   >
//                     <div className="flex items-center gap-2">
//                       <RadioGroupItem value="Yes" id="lifter-yes" />
//                       <Label htmlFor="lifter-yes">Yes</Label>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <RadioGroupItem value="No" id="lifter-no" />
//                       <Label htmlFor="lifter-no">No</Label>
//                     </div>
//                   </RadioGroup>
//                 </div>
//                 <div className="space-y-2">
//                   <Label>Stretcher Compatible</Label>
//                   <RadioGroup
//                     disabled={!isEditable}
//                     value={form.stretcherCompatible}
//                     onValueChange={(v) => updateFormField("stretcherCompatible", v)}
//                     className="flex gap-4"
//                   >
//                     <div className="flex items-center gap-2">
//                       <RadioGroupItem value="Yes" id="stretcher-yes" />
//                       <Label htmlFor="stretcher-yes">Yes</Label>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <RadioGroupItem value="No" id="stretcher-no" />
//                       <Label htmlFor="stretcher-no">No</Label>
//                     </div>
//                   </RadioGroup>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           {/* ARF & COE */}
//           <Card className="overflow-hidden">
//             <CardHeader className="header-bg-soft pb-6">
//               <CardTitle className="flex items-center gap-2">
//                 <TriangleAlert className="w-5 h-5" />
//                 Additional Registration Fee (ARF) & COE Information
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                 <div className="space-y-2">
//                   <Label>Open Market Value (S$)</Label>
//                   <Input
//                    disabled={!isEditable}
//                     value={form.omv}
//                     onChange={(e) => updateFormField("omv", e.target.value)}
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label>Additional Registration Fee Rate (%)</Label>
//                   <Input
//                    disabled={!isEditable}
//                     value={form.arfRate}
//                     onChange={(e) => updateFormField("arfRate", e.target.value)}
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label>Actual ARF Paid (S$)</Label>
//                   <Input
//                    disabled={!isEditable}
//                     value={form.actualArfPaid}
//                     onChange={(e) => updateFormField("actualArfPaid", e.target.value)}
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label>COE Expiry Date</Label>
//                   <Input
//                    disabled={!isEditable}
//                     type="date"
//                     value={form.coeExpiryDate}
//                     onChange={(e) => updateFormField("coeExpiryDate", e.target.value)}
//                   />
//                 </div>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 <div className="space-y-2">
//                   <Label>OPC Cash Rebate Eligibility</Label>
//                   <Select
//                     disabled={!isEditable}
//                     value={form.opcCashRebate}
//                     onValueChange={(v) => updateFormField("opcCashRebate", v)}
//                   >
//                     <SelectTrigger>
//                       <SelectValue />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="No">No</SelectItem>
//                       <SelectItem value="Yes">Yes</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//                 <div className="space-y-2">
//                   <Label>QP during COE Bidding Exercise</Label>
//                   <Input
//                    disabled={!isEditable}
//                     value={form.qpDuringCoe}
//                     onChange={(e) => updateFormField("qpDuringCoe", e.target.value)}
//                   // defaultValue="-"
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label>COE No.</Label>
//                   <Input
//                    disabled={!isEditable}
//                     value={form.coeNo}
//                     onChange={(e) => updateFormField("coeNo", e.target.value)}
//                     placeholder="e.g., COE123456789"
//                   />
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           {/* PARF Rebate */}
//           <Card className="overflow-hidden">
//             <CardHeader className="header-bg-soft pb-6">
//               <CardTitle className="flex items-center gap-2">
//                 <FileText className="w-5 h-5" />
//                 PARF Rebate Details
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 <div className="space-y-2">
//                   <Label>PARF Eligibility (S$)</Label>
//                   <Input
//                    disabled={!isEditable}
//                     value={form.parfEligibility}
//                     onChange={(e) => updateFormField("parfEligibility", e.target.value)}
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label>PARF Eligibility Expiry Date</Label>
//                   <Input
//                    disabled={!isEditable}
//                     type="date"
//                     value={form.parfExpiryDate}
//                     onChange={(e) => updateFormField("parfExpiryDate", e.target.value)}
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label>Min PARF Benefit (S$)</Label>
//                   <Input
//                    disabled={!isEditable}
//                     value={form.minParfBenefit}
//                     onChange={(e) => updateFormField("minParfBenefit", e.target.value)}
//                   />
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           {/* Emissions */}
//           <Card className="overflow-hidden">
//             <CardHeader className="header-bg-soft pb-6">
//               <CardTitle className="flex items-center gap-2">
//                 <Settings className="w-5 h-5" />
//                 Vehicle Emissions Details
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                 <div className="space-y-2">
//                   <Label>CO2 Emission (g/km)</Label>
//                   <Input
//                    disabled={!isEditable}
//                     value={form.co2Emission}
//                     onChange={(e) => updateFormField("co2Emission", e.target.value)}
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label>CO Emission (g/km)</Label>
//                   <Input
//                    disabled={!isEditable}
//                     value={form.coEmission}
//                     onChange={(e) => updateFormField("coEmission", e.target.value)}
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label>HC Emission (g/km)</Label>
//                   <Input
//                    disabled={!isEditable}
//                     value={form.hcEmission}
//                     onChange={(e) => updateFormField("hcEmission", e.target.value)}
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label>NOx Emission (g/km)</Label>
//                   <Input
//                    disabled={!isEditable}
//                     value={form.noxEmission}
//                     onChange={(e) => updateFormField("noxEmission", e.target.value)}
//                   />
//                 </div>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
//                 <div className="space-y-2">
//                   <Label>PM Emission (g/km)</Label>
//                   <Input
//                    disabled={!isEditable}
//                     value={form.pmEmission}
//                     onChange={(e) => updateFormField("pmEmission", e.target.value)}
//                   />
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           {/* Documentation Upload */}
//           <Card className="overflow-hidden">
//             <CardHeader className="header-bg-soft pb-6">
//               <CardTitle className="flex items-center gap-2">
//                 <Upload className="w-5 h-5" />
//                 Documentation (Optional)
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
//                 <Upload className="w-8 h-8 mx-auto text-gray-400" />
//                 <p className="text-gray-600 mt-2">
//                   Click to upload files or drag and drop
//                 </p>
//                 <p className="text-sm text-gray-500 mt-1">
//                   Registration documents, insurance, etc. (PDF, DOC, JPG up to
//                   10MB)
//                 </p>
//               </div>
//             </CardContent>
//           </Card>

//           {/* Maintenance & Compliance Records */}
//           <Card className="overflow-hidden">
//             <CardHeader className="header-bg-soft pb-6">
//               <CardTitle className="flex items-center gap-2">
//                 <Wrench className="w-5 h-5" />
//                 Maintenance & Compliance Records
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-6">
//                 <div className="flex items-center justify-between">
//                   <h3 className="text-lg font-medium">Maintenance History</h3>
//                   {isEditable &&<Button type="button" variant="outline" size="sm" onClick={handleAddMaintenance}>
//                     <Plus className="w-4 h-4 mr-2" />
//                     Add Record
//                   </Button>}
//                 </div>
//                 <div className="border rounded-lg overflow-hidden">
//                   <Table>
//                     <TableHeader>
//                       <TableRow className="bg-[#2160AD] hover:bg-[#2160AD]">
//                         <TableHead className="text-white px-4 py-3">Last Service Date</TableHead>
//                         <TableHead className="text-white px-4 py-3">Next Service Due</TableHead>
//                         <TableHead className="text-white px-4 py-3">Current Odometer (km)</TableHead>
//                         <TableHead className="text-white px-4 py-3">Documents</TableHead>
//                         <TableHead className="text-white px-4 py-3">Actions</TableHead>
//                       </TableRow>
//                     </TableHeader>
//                     <TableBody>
//                       {maintenance.map((record) => (
//                         <TableRow key={record.id} className="hover:bg-gray-50">
//                           {record.isEditing ? (
//                             <>
//                               <TableCell className="px-4 py-3">
//                                 <Input
//                                  disabled={!isEditable}
//                                   type="date"
//                                   value={record.lastServiceDate}
//                                   onChange={(e) =>
//                                     updateMaintenanceField(record.id, "lastServiceDate", e.target.value)
//                                   }
//                                   className="h-9 w-full"
//                                 />
//                               </TableCell>
//                               <TableCell className="px-4 py-3">
//                                 <Input
//                                  disabled={!isEditable}
//                                   type="date"
//                                   value={record.nextServiceDate}
//                                   onChange={(e) =>
//                                     updateMaintenanceField(record.id, "nextServiceDate", e.target.value)
//                                   }
//                                   className="h-9 w-full"
//                                 />
//                               </TableCell>
//                               <TableCell className="px-4 py-3">
//                                 <Input
//                                  disabled={!isEditable}
//                                   placeholder="e.g., 45,230"
//                                   value={record.odometer}
//                                   onChange={(e) =>
//                                     updateMaintenanceField(record.id, "odometer", e.target.value)
//                                   }
//                                   className="h-9 w-full"
//                                 />
//                               </TableCell>
//                               <TableCell className="px-4 py-3">
//                                 <Button
//                                   size="sm"
//                                   variant="outline"
//                                   onClick={() => maintenanceFileInputRef.current?.click()}
//                                   className="h-8"
//                                 >
//                                   <Upload className="w-4 h-4 mr-1" />
//                                   Upload
//                                 </Button>
//                                 <input
//                                  disabled={!isEditable}
//                                   ref={maintenanceFileInputRef}
//                                   type="file"
//                                   multiple
//                                   hidden
//                                   onChange={(e) => handleMaintenanceFileUpload(record.id, e)}
//                                 />
//                                 {record.files > 0 && (
//                                   <div className="mt-1 text-xs text-blue-600">
//                                     {record.files} file{record.files > 1 ? "s" : ""}
//                                   </div>
//                                 )}
//                               </TableCell>
//                               <TableCell className="px-4 py-3">
//                                 <div className="flex items-center gap-1">
//                                   <Button
//                                     size="icon"
//                                     variant="ghost"
//                                     onClick={() => saveMaintenance(record.id)}
//                                     className="h-8 w-8"
//                                   >
//                                     <Check className="w-4 h-4 text-green-600" />
//                                   </Button>
//                                   <Button
//                                     size="icon"
//                                     variant="ghost"
//                                     onClick={() => cancelMaintenance(record.id)}
//                                     className="h-8 w-8"
//                                   >
//                                     <X className="w-4 h-4 text-red-600" />
//                                   </Button>
//                                 </div>
//                               </TableCell>
//                             </>
//                           ) : (
//                             <>
//                               <TableCell className="px-4 py-3">{record.lastServiceDate}</TableCell>
//                               <TableCell className="px-4 py-3">{record.nextServiceDate}</TableCell>
//                               <TableCell className="px-4 py-3">{record.odometer}</TableCell>
//                               <TableCell className="px-4 py-3">
//                                 {record.files > 0 ? (
//                                   <div className="flex items-center gap-2">
//                                     <Folder className="w-4 h-4 text-blue-600" />
//                                     <span className="text-xs text-blue-600">
//                                       {record.files} file{record.files > 1 ? "s" : ""}
//                                     </span>
//                                   </div>
//                                 ) : (
//                                   <span className="text-xs text-gray-400">No files</span>
//                                 )}
//                               </TableCell>
//                               <TableCell className="px-4 py-3">
//                                 <div className="flex gap-1">
//                                   <Button
//                                     size="icon"
//                                     variant="ghost"
//                                     onClick={() => editMaintenance(record.id)}
//                                   >
//                                     <SquarePen className="w-4 h-4 text-gray-500" />
//                                   </Button>
//                                   <Button
//                                     size="icon"
//                                     variant="ghost"
//                                     onClick={() => deleteMaintenance(record.id)}
//                                   >
//                                     <Trash2 className="w-4 h-4 text-red-600" />
//                                   </Button>
//                                 </div>
//                               </TableCell>
//                             </>
//                           )}
//                         </TableRow>
//                       ))}
//                     </TableBody>
//                   </Table>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           {/* Certificates & Licenses */}
//           <Card className="overflow-hidden">
//             <CardHeader className="header-bg-soft pb-6">
//               <CardTitle className="flex items-center gap-2">
//                 <Shield className="w-5 h-5" />
//                 Certificates & Licenses
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-6">
//                 <div className="flex items-center justify-between">
//                   <h3 className="text-lg font-medium">Certificate Records</h3>
//                   {isEditable&&<Button type="button" variant="outline" size="sm" onClick={handleAddCertificate}>
//                     <Plus className="w-4 h-4 mr-2" />
//                     Add Certificate
//                   </Button>}
//                 </div>
//                 <div className="border rounded-lg overflow-hidden">
//                   <Table>
//                     <TableHeader>
//                       <TableRow className="bg-[#2160AD] hover:bg-[#2160AD]">
//                         <TableHead className="text-white px-4 py-3">Type</TableHead>
//                         <TableHead className="text-white px-4 py-3">Number</TableHead>
//                         <TableHead className="text-white px-4 py-3">Issued</TableHead>
//                         <TableHead className="text-white px-4 py-3">Expiry</TableHead>
//                         <TableHead className="text-white px-4 py-3">Document</TableHead>
//                         <TableHead className="text-white px-4 py-3">Remarks</TableHead>
//                         <TableHead className="text-white px-4 py-3">Actions</TableHead>
//                       </TableRow>
//                     </TableHeader>
//                     <TableBody>
//                       {certificates.map((cert) => (
//                         <TableRow key={cert.id} className="hover:bg-gray-50">
//                           {cert.isEditing ? (
//                             <>
//                               <TableCell className="px-4 py-3">
//                                 <Select
//                                   value={cert.type}
//                                   onValueChange={(v) => updateCertificateField(cert.id, "type", v)}
//                                 >
//                                   <SelectTrigger className="h-9 w-full">
//                                     <SelectValue placeholder="Select type" />
//                                   </SelectTrigger>
//                                   <SelectContent>
//                                     <SelectItem value="Vehicle Inspection Certificate (LTA)">
//                                       Vehicle Inspection Certificate (LTA)
//                                     </SelectItem>
//                                     <SelectItem value="Vehicle Insurance">Vehicle Insurance</SelectItem>
//                                     <SelectItem value="Road Tax">Road Tax</SelectItem>
//                                     <SelectItem value="COE">COE</SelectItem>
//                                   </SelectContent>
//                                 </Select>
//                               </TableCell>
//                               <TableCell className="px-4 py-3">
//                                 <Input
//                                  disabled={!isEditable}
//                                   placeholder="e.g., LTA-2024-001234"
//                                   value={cert.number}
//                                   onChange={(e) => updateCertificateField(cert.id, "number", e.target.value)}
//                                   className="h-9 w-full"
//                                 />
//                               </TableCell>
//                               <TableCell className="px-4 py-3">
//                                 <Input
//                                  disabled={!isEditable}
//                                   type="date"
//                                   value={cert.issued}
//                                   onChange={(e) => updateCertificateField(cert.id, "issued", e.target.value)}
//                                   className="h-9 w-full"
//                                 />
//                               </TableCell>
//                               <TableCell className="px-4 py-3">
//                                 <Input
//                                   type="date"
//                                   value={cert.expiry}
//                                   onChange={(e) => updateCertificateField(cert.id, "expiry", e.target.value)}
//                                   className="h-9 w-full"
//                                 />
//                               </TableCell>
//                               <TableCell className="px-4 py-3">
//                                 <label className="cursor-pointer">
//                                   <Input
//                                    disabled={!isEditable}
//                                     ref={certificateFileInputRef}
//                                     type="file"
//                                     accept=".pdf,.jpg,.jpeg,.png"
//                                     className="hidden"
//                                     onChange={(e) => {
//                                       const file = e.target.files?.[0];
//                                       if (file) updateCertificateField(cert.id, "fileObj", file);
//                                     }}
//                                   />
//                                   <Button size="sm" variant="outline" className="h-8" onClick={() => certificateFileInputRef.current?.click()}>
//                                     <Upload className="w-4 h-4 mr-1" />
//                                     Upload
//                                   </Button>
//                                 </label>
//                                 {cert.file && (
//                                   <div className="mt-1 text-xs text-blue-600 truncate max-w-[100px]">
//                                     {cert.file}
//                                   </div>
//                                 )}
//                               </TableCell>
//                               <TableCell className="px-4 py-3">
//                                 <Textarea
//                                   placeholder="Optional notes"
//                                   value={cert.remarks}
//                                   onChange={(e) => updateCertificateField(cert.id, "remarks", e.target.value)}
//                                   className="min-h-[40px] resize-none"
//                                   rows={1}
//                                 />
//                               </TableCell>
//                               <TableCell className="px-4 py-3">
//                                 <div className="flex items-center gap-1">
//                                   <Button
//                                     size="icon"
//                                     variant="ghost"
//                                     onClick={() => saveCertificate(cert.id)}
//                                     className="h-8 w-8"
//                                   >
//                                     <Check className="w-4 h-4 text-green-600" />
//                                   </Button>
//                                   <Button
//                                     size="icon"
//                                     variant="ghost"
//                                     onClick={() => cancelCertificate(cert.id)}
//                                     className="h-8 w-8"
//                                   >
//                                     <X className="w-4 h-4 text-red-600" />
//                                   </Button>
//                                 </div>
//                               </TableCell>
//                             </>
//                           ) : (
//                             <>
//                               <TableCell className="px-4 py-3">{cert.type}</TableCell>
//                               <TableCell className="px-4 py-3">{cert.number}</TableCell>
//                               <TableCell className="px-4 py-3">{cert.issued}</TableCell>
//                               <TableCell className="px-4 py-3">{cert.expiry}</TableCell>
//                               <TableCell className="px-4 py-3">
//                                 {cert.file ? (
//                                   <div className="flex items-center gap-2">
//                                     <FileText className="w-4 h-4 text-blue-600" />
//                                     <span className="text-xs text-blue-600 truncate max-w-[120px]">
//                                       {cert.file}
//                                     </span>
//                                   </div>
//                                 ) : (
//                                   <span className="text-xs text-gray-400">-</span>
//                                 )}
//                               </TableCell>
//                               <TableCell className="px-4 py-3 text-sm">{cert.remarks || "-"}</TableCell>
//                               <TableCell className="px-4 py-3">
//                                 <div className="flex gap-1">
//                                   <Button
//                                     size="icon"
//                                     variant="ghost"
//                                     onClick={() => editCertificate(cert.id)}
//                                   >
//                                     <SquarePen className="w-4 h-4 text-gray-500" />
//                                   </Button>
//                                   <Button
//                                     size="icon"
//                                     variant="ghost"
//                                     onClick={() => deleteCertificate(cert.id)}
//                                   >
//                                     <Trash2 className="w-4 h-4 text-red-600" />
//                                   </Button>
//                                 </div>
//                               </TableCell>
//                             </>
//                           )}
//                         </TableRow>
//                       ))}
//                     </TableBody>
//                   </Table>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           {/* Submit Buttons */}
//           {router.isReady && isEditable && (
//             <div className="flex justify-end gap-3 pt-4 border-t">
//               <Button
//                 type="button"
//                 variant="outline"
//                 onClick={() => router.push("/vehicles")}
//               >
//                 Cancel
//               </Button>
//               <Button
//                 type="submit"
//                 className="bg-[#2160AD] hover:bg-[#1d5497]"
//                 onClick={id ? handleUpdateVehicle : handleAddVehicle}
//               >
//                 {id ? "Update Vehicle" : "Add Vehicle"}
//               </Button>

//           </div>)}
//         </div>
//       </div>


//     </>
//   );
// }

"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { useRouter } from "next/router";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";


import {
  Calendar,
  Clock,
  Car,
  MapPin,
  FileText,
  Upload,
  Shield,
  TriangleAlert,
  Plus,
  Folder,
  SquarePen,
  Trash2,
  Check,
  X,
  Wrench,
  User,
  Settings,
  Truck,
} from "lucide-react";

import FunctionalHeader from "@/layout/FunctionalHeader";

import {
  Calendar as CalendarIcon,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

type MaintenanceRecord = {
  id: number | string;
  lastServiceDate: string;
  nextServiceDate: string;
  odometer: string;
  fileNames?: string[];
  fileObjs?: File[];
  files?: number;
  isEditing?: boolean;
};

type CertificateRecord = {
  id: number | string;
  type: string;
  number: string;
  issued: string;
  expiry: string;
  fileNames?: string[];
  fileObjs?: File[];
  files?: number;
  fileObj?: File | null;
  remarks?: string;
  isEditing?: boolean;
};

type FormValues = {
  status: string;
  vehicleNumber: string;
  chassisNumber: string;
  scheme: string;
  type: string;
  makeModel: string;
  year: string;
  propellant: string;
  driver: string;
  medic: string;
  escort: string;
  ownerName: string;
  ownerId: string;
  registeredAddress: string;
  mailingAddress: string;
  ownerIdType: string;
  registrationDate: string;
  previousVehicleNo: string;
  effectiveOwnershipDate: string;
  originalRegistrationDate: string;
  noOfTransfers: string;
  iuLabelNo: string;
  engineNo: string;
  engineType: string;
  maxUnladenWeight: string;
  maxLadenWeight: string;
  engineCapacity: string;
  maxPowerOutput: string;
  primaryColor: string;
  secondaryColor: string;
  passengerCapacity: string;
  wheelchairAccessible: string;
  lifter: string;
  stretcherCompatible: string;
  omv: string;
  arfRate: string;
  actualArfPaid: string;
  coeExpiryDate: string;
  opcCashRebate: string;
  qpDuringCoe: string;
  coeNo: string;
  parfEligibility: string;
  parfExpiryDate: string;
  minParfBenefit: string;
  co2Emission: string;
  coEmission: string;
  hcEmission: string;
  noxEmission: string;
  pmEmission: string;
  maintenance: MaintenanceRecord[];
  certificates: CertificateRecord[];
};

export default function VehiclesAddPage() {
  const router = useRouter();
  const { id } = router.query;
  const vehicleId = Array.isArray(id) ? id[0] : id;

  const [isEditable, setIsEditable] = useState(!id);
  const [loading, setLoading] = useState(false);

  const maintenanceFileInputRef = useRef<HTMLInputElement | null>(null);
  const certificateFileInputRef = useRef<HTMLInputElement | null>(null);

  const {
    control,
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onChange"  ,
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
          fileObj: null,
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
          fileObj: null,
          remarks: "Comprehensive coverage",
          isEditing: false,
        },
      ],
    },
  });

  const {
    fields: maintenanceFields,
    append: appendMaintenance,
    remove: removeMaintenance,
    update: updateMaintenanceEntry,
  } = useFieldArray({
    control,
    name: "maintenance",
  });
  const updateMaintenanceField = (
    index: number,
    field: keyof MaintenanceRecord,
    value: any
  ) => {
    setValue(`maintenance.${index}.${field}`, value);
  };

  const handleMaintenanceFileUpload = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = e.target.files;
    if (!files) return;

    const fileArray = Array.from(files);
    const names = fileArray.map((f) => f.name);

    // Store files inside RHF
    setValue(`maintenance.${index}.fileObjs`, fileArray);
    setValue(`maintenance.${index}.files`, fileArray.length);
    setValue(`maintenance.${index}.fileNames`, names);
  };

  const editMaintenance = (index: number) => {
    setValue(`maintenance.${index}.isEditing`, true);
  };

  const saveMaintenance = (index: number) => {
    const record = watch(`maintenance.${index}`);

    setValue(`maintenance.${index}.lastServiceDate`, (record.lastServiceDate || "").trim());
    setValue(`maintenance.${index}.nextServiceDate`, (record.nextServiceDate || "").trim());
    setValue(`maintenance.${index}.odometer`, record.odometer.trim());

    setValue(`maintenance.${index}.isEditing`, false);
  };

  const cancelMaintenance = (index: number) => {
    const record = watch(`maintenance.${index}`);

    const isEmpty =
      (record.files ?? 0) === 0 &&
      !record.lastServiceDate &&
      !record.nextServiceDate &&
      !record.odometer;

    if (isEmpty) {
      removeMaintenance(index);   // DELETE ROW
    } else {
      setValue(`maintenance.${index}.isEditing`, false);
    }
  };

  const deleteMaintenance = (index: number) => {
    removeMaintenance(index);
  };

  const handleAddMaintenance = () => {
    appendMaintenance({
      id: Date.now(), // or uuid
      lastServiceDate: "",
      nextServiceDate: "",
      odometer: "",
      fileNames: [],
      fileObjs: [],
      files: 0,
      isEditing: true,
    });
  };


  const {
    fields: certificateFields,
    append: appendCertificate,
    remove: removeCertificate,
    update: updateCertificateEntry,
  } = useFieldArray({
    control,
    name: "certificates",
  });

  const updateCertificateField = (
    index: number,
    field: keyof CertificateRecord,
    value: any
  ) => {
    setValue(`certificates.${index}.${field}`, value);
  };

  const saveCertificate = (index: number) => {
    const cert = watch(`certificates.${index}`);

    setValue(`certificates.${index}.type`, (cert.type ?? "").trim());
    setValue(`certificates.${index}.number`, (cert.number ?? "").trim());
    setValue(`certificates.${index}.remarks`, (cert.remarks ?? "").trim());
    setValue(`certificates.${index}.issued`, cert.issued ?? "");
    setValue(`certificates.${index}.expiry`, cert.expiry ?? "");


    const fileCount = cert.fileObjs?.length ?? 0;
    setValue(`certificates.${index}.files`, fileCount);


    setValue(`certificates.${index}.isEditing`, false);
  };

  const editCertificate = (index: number) => {
    setValue(`certificates.${index}.isEditing`, true);
  };

  const cancelCertificate = (index: number) => {
    const cert = watch(`certificates.${index}`);

    const isEmpty =
      !cert.type &&
      !cert.number &&
      !cert.issued &&
      !cert.expiry &&
      !cert.remarks &&
      (cert.fileObjs?.length ?? 0) === 0;

    if (isEmpty) {
      removeCertificate(index);     // delete row
    } else {
      setValue(`certificates.${index}.isEditing`, false);
    }
  };

  const handleAddCertificate = () => {
  appendCertificate({
    id: Date.now(),   // unique
    type: "",
    number: "",
    issued: "",
    expiry: "",
    remarks: "",
    // file: "",
    fileObj: null,
    isEditing: true,
  });
};


  const deleteCertificate = (index: number) => {
    removeCertificate(index);
  };

  // 
  const onSubmit = async (form: FormValues) => {
    try {
      setLoading(true);

      const payload = {
        vehicleNumber: form.vehicleNumber,
        chassisNumber: form.chassisNumber,
        type: form.type,
        scheme: form.scheme,
        make: form.makeModel,
        model: form.makeModel,
        year: Number(form.year),
        status: form.status,
        propellant: form.propellant,
        driverId: "675a3c1b8a3c4d5f6b7a8d11",
        medicId: "675a3c1c8a3c4d5f6b7a8d12",
        escortId: "675a3c1d8a3c4d5f6b7a8d13",
        ownerId: "675a3c1e8a3c4d5f6b7a8d14",
        specifications: {
          engineNumber: form.engineNo,
          engineType: form.engineType,
          engineCapacity: Number(form.engineCapacity),
          maxUnladenWeight: Number(form.maxUnladenWeight),
          maxLadenWeight: Number(form.maxLadenWeight),
          enginePower: Number(form.maxPowerOutput),
          primaryColour: form.primaryColor,
          secondaryColour: form.secondaryColor,
          passengerCapacity: Number(form.passengerCapacity),
          wheelchairAccessible: true,
          lifter: true,
          stretcherCompatible: true,
        },
        emissions: {
          co2Emissions: 180,
          coEmissions: 1.5,
          hcEmissions: 0.8,
          noxEmissions: 2.1,
          pmEmissions: 0.02,
        },
        owner: {
          vehicleId: "675a3d5e8a3c4d5f6b7a8e35",
          ownerName: "IM Ambulance Services Pte Ltd",
          certificateNumber: "CERT001",
          registeredAddress: "123 Medical Drive, Singapore 123456",
          mailingAddress: "123 Medical Drive, Singapore 123456",
          ownerIdType: "Company Registration",
          registrationDate: form.registrationDate,
        },
        maintenance: {
          vehicleId: "675a3d5e8a3c4d5f6b7a8e25",
          lastServiceDate: "2025-11-12",
          nextServiceDate: "2025-12-12",
          currentOdometerReading: 123435,
          documentUrl: "insurance_policy.pdf",
        },
        certificates: {
          vehicleId: "675a3d5e8a3c4d5f6b7a8e25",
          certificateType: "Vehicle Inspection Certificate (LTA)",
          certificateNumber: "LTA-2024-001234",
          issuedDate: "2024-01-15T00:00:00.000Z",
          expiryDate: "2025-01-14T00:00:00.000Z",
          documentUrl: "inspection_cert.pdf",
          remarks: "Annual inspection passed successfully",
        },
      };

      const access_token = localStorage.getItem("accessToken");

      const response = await fetch(
        vehicleId
          ? `/api/vehicles/update/${vehicleId}`
          : `/api/vehicles/create-vehicle`,
        {
          method: vehicleId ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: access_token ? `Bearer ${access_token}` : "",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) throw new Error("Failed to save vehicle");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <>

      <FunctionalHeader
        title={
          id
            ? `${isEditable ? "Editing" : "Viewing"} - ${watch("vehicleNumber") || id}`
            : "Add New Vehicle"
        }

        breadcrumb={[
          { label: "Operations" },
          { label: "Vehicle" },
          { label: vehicleId ? watch("vehicleNumber") || vehicleId : "Add New Vehicle" },
        ]}

      />
      <div className=" overflow-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-10 auto-complete-off">

          {/* EDIT / CANCEL EDIT BUTTON */}
          {vehicleId && (
            <div className="flex justify-end p-4">
              <Button
                variant="outline"
                type="button"
                onClick={() => setIsEditable((prev) => !prev)}
              >
                {isEditable ? "Cancel Edit" : "Edit Vehicle"}
              </Button>
            </div>
          )}
          <div className="flex-1 w-full overflow-auto">
            <div className="space-y-6 p-4 lg:p-6 w-full">
              {/* Status */}
              <div className="max-w-[300px]">
                <Label className="text-base font-medium text-base-optimized mb-2 block">
                  Status <span className="text-red-500">*</span>
                </Label>
                <Controller
                  name="status"
                  control={control}
                  render={({ field }) => (
                    <Select
                      disabled={!isEditable}
                      value={field.value}
                      onValueChange={(v) => field.onChange(v)}
                    >
                      <SelectTrigger className="w-full text-base-optimized">
                        <SelectValue placeholder="Select Status" />
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

                {errors.status && (
                  <p className="text-red-500 text-sm">{errors.status.message}</p>
                )}
              </div>
            </div>
          </div>


          {/* Vehicle Registration Details */}
          <Card className="overflow-hidden">
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
                    {...register("vehicleNumber", {
                      required: "Vehicle Number is required",
                      pattern: {
                        value: /^[A-Za-z0-9]+$/,
                        message: "Only alphanumeric characters are allowed (A-Z, 0-9)",
                      }
                    })}
                    disabled={!isEditable}
                    placeholder="e.g., SAZ1234A"
                    onKeyDown={(e) => {
                      if (!/[A-Za-z0-9]/.test(e.key) && e.key !== "Backspace") {
                        e.preventDefault();
                      }
                    }}
                  />
                  {errors.vehicleNumber && (
                    <p className="text-red-500 text-sm">{errors.vehicleNumber.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label>
                    Chassis No. <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    {...register("chassisNumber", {
                      required: "chassis Number is required",
                      pattern: {
                        value: /^[A-Za-z0-9]+$/,
                        message: "Only alphanumeric characters are allowed (A-Z, 0-9)",
                      }
                    })}
                    disabled={!isEditable}
                    placeholder="e.g., JTFST22P200040240"
                  />
                  {errors.chassisNumber && (
                    <p className="text-red-500 text-sm">{errors.chassisNumber.message}</p>
                  )}
                </div>
              </div>
                
                <div className="space-y-2">
                  <Label>
                    Vehicle Scheme <span className="text-red-500">*</span>
                  </Label>

                  <Controller
                    name="scheme"
                    control={control}
                    rules={{ required: "Scheme is required" }}
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                        disabled={!isEditable}
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
                  {errors.scheme && (
                    <p className="text-red-500 text-sm">{errors.scheme.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label>
                    Vehicle Type <span className="text-red-500">*</span>
                  </Label>

                  <Controller
                    name="type"
                    control={control}
                    rules={{ required: "Vehicle type is required" }}
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                        disabled={!isEditable}
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

                  {errors.type && (
                    <p className="text-red-500 text-sm">{errors.type.message}</p>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>
                      Make & Model <span className="text-red-500">*</span>
                    </Label>

                    <Input
                      placeholder="e.g., Mercedes-Benz Sprinter"
                      disabled={!isEditable}
                      {...register("makeModel", {
                        required: "Make & Model is required",
                      })}
                    />

                    {errors.makeModel && (
                      <p className="text-red-500 text-sm">{errors.makeModel.message}</p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Year</Label>
                  <Input
                    disabled={!isEditable}
                    {...register("year", {
                      required: "year is required",
                    })}
                    placeholder="e.g., 2023"
                  />
                  {errors.year && (
                    <p className="text-red-500 text-sm">{errors.year.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label>
                    Current Propellant <span className="text-red-500">*</span>
                  </Label>

                  <Controller
                    name="propellant"
                    control={control}
                    rules={{ required: "Propellant is required" }}
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                        disabled={!isEditable}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select propellant" />
                        </SelectTrigger>

                        <SelectContent>
                          <SelectItem value="Diesel">Diesel</SelectItem>
                          <SelectItem value="Petrol">Petrol</SelectItem>
                          <SelectItem value="Electric">Electric</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />

                  {errors.propellant && (
                    <p className="text-red-500 text-sm">{errors.propellant.message}</p>
                  )}
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
                    rules={{ required: "Driver is required" }}
                    render={({ field }) => (
                      <Select
                        disabled={!isEditable}
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select Driver" />
                        </SelectTrigger>

                        <SelectContent>
                          <SelectItem value="John Doe">John Doe</SelectItem>
                          <SelectItem value="Jane Smith">Jane Smith</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />

                  {errors.driver && (
                    <p className="text-red-500 text-sm">{errors.driver.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label>Medic</Label>

                  <Controller
                    name="medic"
                    control={control}
                    render={({ field }) => (
                      <Select
                        disabled={!isEditable}
                        onValueChange={field.onChange}
                        value={field.value}
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
                        disabled={!isEditable}
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="-" />
                        </SelectTrigger>

                        <SelectContent>
                          <SelectItem value="none">dr.lee</SelectItem>
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
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>
                    Owner's Name <span className="text-red-500">*</span>
                  </Label>

                  <Input
                    disabled={!isEditable}
                    placeholder="Enter owner's name"
                    {...register("ownerName", {
                      required: "Owner's name is required",
                      pattern: {
                        value: /^[A-Za-z\s]+$/,
                        message: "Name can only contain alphabets and spaces",
                      },
                    })}
                  />
                  {errors.ownerName && (
                    <p className="text-red-500 text-sm">{errors.ownerName.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label>
                    NRIC/Passport/Company Cert No.{" "}
                    <span className="text-red-500">*</span>
                  </Label>

                  <Input
                    disabled={!isEditable}
                    placeholder="Enter identification number"
                    {...register("ownerId", {
                      required: "This field is required",
                      pattern: {
                        value: /^[A-Za-z0-9-]+$/,
                        message: "Only letters, numbers and hyphens are allowed",
                      },
                      // minLength: {
                      //   value: 5,
                      //   message: "Must be at least 5 characters",
                      // },
                      // maxLength: {
                      //   value: 20,
                      //   message: "Cannot exceed 20 characters",
                      // },
                    })}
                  />
                  {errors.ownerId && (
                    <p className="text-red-500 text-sm">
                      {errors.ownerId.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Label>
                    Registered Address <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    disabled={!isEditable}
                    placeholder="Enter registered address"
                    {...register("registeredAddress", {
                      required: "Registered address is required",
                      pattern: {
                        value: /^[A-Za-z0-9\s,./-]+$/,
                        message:
                          "Address can only contain letters, numbers, spaces, and , . / - characters",
                      },
                    })}
                  />
                  {errors.registeredAddress && (
                    <p className="text-red-500 text-sm">{errors.registeredAddress.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label>
                    Mailing Address <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    disabled={!isEditable}
                    placeholder="Enter mailing address"
                    {...register("mailingAddress", {
                      required: "Mailing address is required",
                      pattern: {
                        value: /^[A-Za-z0-9\s,./-]+$/,
                        message:
                          "Address can only contain letters, numbers, spaces, and , . / - characters",
                      },
                    })}
                  />
                  {errors.mailingAddress && (
                    <p className="text-red-500 text-sm">{errors.mailingAddress.message}</p>
                  )}
                </div>

              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>
                    Owner's ID Type <span className="text-red-500">*</span>
                  </Label>
                  <Controller
                    name="ownerIdType"
                    control={control}
                    rules={{ required: "Owner's ID Type is required" }}
                    render={({ field }) => (
                      <Select
                        disabled={!isEditable}
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select ID Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Company Registration">Company Registration</SelectItem>
                          <SelectItem value="NRIC">NRIC</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />

                  {errors.ownerIdType && (
                    <p className="text-red-500 text-sm">{errors.ownerIdType.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label>
                    Registration Date <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    type="date"
                    disabled={!isEditable}
                    {...register("registrationDate", {
                      required: "Registration date is required",
                    })}
                  />
                  {errors.registrationDate && (
                    <p className="text-red-500 text-sm">{errors.registrationDate.message}</p>
                  )}
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
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>Previous Vehicle No.</Label>
                  <Input
                    disabled={!isEditable}
                    placeholder="e.g., SGX1234A"
                    {...register("previousVehicleNo", {
                      pattern: {
                        value: /^[A-Za-z0-9\s-]*$/,
                        message: "Only letters, numbers, spaces and hyphens are allowed",
                      },
                    })}
                  />
                  {errors.previousVehicleNo && (
                    <p className="text-red-500 text-sm">
                      {errors.previousVehicleNo.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label>Effective Date of Ownership</Label>
                  <Input
                    type="date"
                    disabled={!isEditable}
                    {...register("effectiveOwnershipDate", {
                      required: "Effective ownership date is required",
                    })}
                  />
                  {errors.effectiveOwnershipDate && (
                    <p className="text-red-500 text-sm">
                      {errors.effectiveOwnershipDate.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label>Original Registration Date</Label>
                  <Input
                    type="date"
                    disabled={!isEditable}
                    {...register("originalRegistrationDate", {
                      required: "Original registration date is required",
                    })}
                  />
                  {errors.originalRegistrationDate && (
                    <p className="text-red-500 text-sm">
                      {errors.originalRegistrationDate.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <Label>No. of Transfers</Label>
                <Input
                  disabled={!isEditable}
                  {...register("noOfTransfers", {
                    required: "Number of transfers is required",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Only numeric values are allowed",
                    },
                  })}
                  placeholder="0"
                />
                {errors.noOfTransfers && (
                  <p className="text-red-500 text-sm">
                    {errors.noOfTransfers.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label>IU Label No.</Label>
                <Input
                  disabled={!isEditable}
                  placeholder="e.g., 40057623"
                  {...register("iuLabelNo", {
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "Only numbers are allowed",
                    },
                  })}
                />
                {errors.iuLabelNo && (
                  <p className="text-red-500 text-sm">
                    {errors.iuLabelNo.message}
                  </p>
                )}
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
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <Label>Engine No.</Label>
                  <Controller
                    name="engineNo"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        disabled={!isEditable}
                        placeholder="e.g., 1KDB045665"
                      />
                    )}
                  />
                  {errors.engineNo && (
                    <p className="text-red-500 text-sm">{errors.engineNo.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label>Engine Type</Label>

                  <Controller
                    name="engineType"
                    control={control}
                    render={({ field }) => (
                      <Select
                        disabled={!isEditable}
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select engine type" />
                        </SelectTrigger>

                        <SelectContent>
                          <SelectItem value="Diesel">Diesel</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.engineType && (
                    <p className="text-red-500 text-sm">{errors.engineType.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label>Maximum Unladen Weight (kg)</Label>
                  <Controller
                    name="maxUnladenWeight"
                    control={control}
                    render={({ field }) => (
                      <Input
                        disabled={!isEditable}
                        {...field}
                      />
                    )}
                  />
                  {errors.maxUnladenWeight && (
                    <p className="text-red-500 text-sm">{errors.maxUnladenWeight.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label>Maximum Laden Weight (kg)</Label>
                  <Controller
                    name="maxLadenWeight"
                    control={control}
                    rules={{
                      required: "Maximum laden weight is required",
                      pattern: {
                        value: /^[0-9]*$/,
                        message: "Only numbers are allowed",
                      },
                    }}
                    render={({ field }) => (
                      <Input
                        disabled={!isEditable}
                        {...field}
                      />
                    )}
                  />
                  {errors.maxLadenWeight && (
                    <p className="text-red-500 text-sm">
                      {errors.maxLadenWeight.message}
                    </p>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <Label>Engine Capacity (cc)</Label>

                    <Controller
                      name="engineCapacity"
                      control={control}
                      rules={{
                        required: "Engine capacity is required",
                        pattern: {
                          value: /^[0-9]*$/,
                          message: "Only numeric values are allowed",
                        },
                      }}
                      render={({ field }) => (
                        <Input
                          disabled={!isEditable}
                          {...field}
                        />
                      )}
                    />

                    {errors.engineCapacity && (
                      <p className="text-red-500 text-sm">
                        {errors.engineCapacity.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label>Maximum Power Output (kW)</Label>

                    <Controller
                      name="maxPowerOutput"
                      control={control}
                      rules={{
                        required: "Maximum power output is required",
                        pattern: {
                          value: /^[0-9]*$/,
                          message: "Only numeric values are allowed",
                        },
                      }}
                      render={({ field }) => (
                        <Input
                          disabled={!isEditable}
                          {...field}
                        />
                      )}
                    />

                    {errors.maxPowerOutput && (
                      <p className="text-red-500 text-sm">
                        {errors.maxPowerOutput.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label>Primary Color</Label>

                    <Controller
                      name="primaryColor"
                      control={control}
                      rules={{
                        required: "Primary color is required",
                      }}
                      render={({ field }) => (
                        <Select
                          disabled={!isEditable}
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select color" />
                          </SelectTrigger>

                          <SelectContent>
                            <SelectItem value="White">White</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />

                    {errors.primaryColor && (
                      <p className="text-red-500 text-sm">{errors.primaryColor.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label>Secondary Color</Label>

                    <Controller
                      name="secondaryColor"
                      control={control}
                      rules={{
                        required: "Secondary color is required",
                      }}
                      render={({ field }) => (
                        <Select
                          disabled={!isEditable}
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select color" />
                          </SelectTrigger>

                          <SelectContent>
                            <SelectItem value="Red">Red</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />

                    {errors.secondaryColor && (
                      <p className="text-red-500 text-sm">{errors.secondaryColor.message}</p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <Label>Passenger Capacity</Label>
                    <Input
                      type="number"
                      disabled={!isEditable}
                      {...register("passengerCapacity", {
                        required: "Passenger capacity is required",
                        pattern: {
                          value: /^[0-9]+$/,
                          message: "Only numeric values are allowed",
                        },
                      })}
                      placeholder="e.g., 4"
                    />

                    {errors.passengerCapacity && (
                      <p className="text-red-500 text-sm">
                        {errors.passengerCapacity.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label>Wheelchair Accessible</Label>

                    <Controller
                      name="wheelchairAccessible"
                      control={control}
                      rules={{ required: "Please select an option" }}
                      render={({ field }) => (
                        <RadioGroup
                          className="flex gap-4"
                          disabled={!isEditable}
                          onValueChange={field.onChange}
                          value={field.value}
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

                    {errors.wheelchairAccessible && (
                      <p className="text-red-500 text-sm">
                        {errors.wheelchairAccessible.message}
                      </p>
                    )}
                  </div>

                  {errors.wheelchairAccessible && (
                    <p className="text-red-500 text-sm">
                      {errors.wheelchairAccessible.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label>Lifter</Label>

                  <Controller
                    name="lifter"
                    control={control}
                    rules={{ required: "Please select an option" }}
                    render={({ field }) => (
                      <RadioGroup
                        className="flex gap-4"
                        disabled={!isEditable}
                        value={field.value}
                        onValueChange={field.onChange}
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

                  {errors.lifter && (
                    <p className="text-red-500 text-sm">{errors.lifter.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label>Stretcher Compatible</Label>

                  <Controller
                    name="stretcherCompatible"
                    control={control}
                    rules={{ required: "Please select an option" }}
                    render={({ field }) => (
                      <RadioGroup
                        className="flex gap-4"
                        disabled={!isEditable}
                        value={field.value}
                        onValueChange={field.onChange}
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

                  {errors.stretcherCompatible && (
                    <p className="text-red-500 text-sm">
                      {errors.stretcherCompatible.message}
                    </p>
                  )}
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
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

                {/* OMV */}
                <div className="space-y-2">
                  <Label>Open Market Value (S$)</Label>
                  <Input
                    disabled={!isEditable}
                    placeholder="e.g., 25000"
                    {...register("omv", {
                      required: "OMV is required",
                      pattern: {
                        value: /^[0-9]*$/,
                        message: "Only numbers allowed"
                      }
                    })}
                  />
                  {errors.omv && (
                    <p className="text-red-500 text-sm">{errors.omv.message}</p>
                  )}
                </div>

                {/* ARF Rate */}
                <div className="space-y-2">
                  <Label>Additional Registration Fee Rate (%)</Label>
                  <Input
                    disabled={!isEditable}
                    placeholder="e.g., 100"
                    {...register("arfRate", {
                      required: "ARF rate is required",
                      pattern: {
                        value: /^[0-9]*$/,
                        message: "Only numbers allowed"
                      }
                    })}
                  />
                  {errors.arfRate && (
                    <p className="text-red-500 text-sm">{errors.arfRate.message}</p>
                  )}
                </div>

                {/* Actual ARF Paid */}
                <div className="space-y-2">
                  <Label>Actual ARF Paid (S$)</Label>
                  <Input
                    disabled={!isEditable}
                    placeholder="e.g., 18000"
                    {...register("actualArfPaid", {
                      required: "Actual ARF paid is required",
                      pattern: {
                        value: /^[0-9]*$/,
                        message: "Only numbers allowed"
                      }
                    })}
                  />
                  {errors.actualArfPaid && (
                    <p className="text-red-500 text-sm">{errors.actualArfPaid.message}</p>
                  )}
                </div>

                {/* COE Expiry Date */}
                <div className="space-y-2">
                  <Label>COE Expiry Date</Label>
                  <Input
                    type="date"
                    disabled={!isEditable}
                    {...register("coeExpiryDate", {
                      required: "COE expiry date is required",
                    })}
                  />
                  {errors.coeExpiryDate && (
                    <p className="text-red-500 text-sm">{errors.coeExpiryDate.message}</p>
                  )}
                </div>

              </div>


              {/* Second Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* OPC Cash Rebate Eligibility */}
                <div className="space-y-2">
                  <Label>OPC Cash Rebate Eligibility</Label>
                  <Controller
                    name="opcCashRebate"
                    control={control}
                    rules={{ required: "Please select an option" }}
                    render={({ field }) => (
                      <Select
                        disabled={!isEditable}
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="No">No</SelectItem>
                          <SelectItem value="Yes">Yes</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.opcCashRebate && (
                    <p className="text-red-500 text-sm">{errors.opcCashRebate.message}</p>
                  )}
                </div>

                {/* QP During COE */}
                <div className="space-y-2">
                  <Label>QP during COE Bidding Exercise</Label>
                  <Input
                    disabled={!isEditable}
                    placeholder="e.g., 30500"
                    {...register("qpDuringCoe", {
                      pattern: {
                        value: /^[0-9]*$/,
                        message: "Only numbers allowed"
                      }
                    })}
                  />
                  {errors.qpDuringCoe && (
                    <p className="text-red-500 text-sm">{errors.qpDuringCoe.message}</p>
                  )}
                </div>

                {/* COE No */}
                <div className="space-y-2">
                  <Label>COE No.</Label>
                  <Input
                    disabled={!isEditable}
                    placeholder="e.g., COE123456789"
                    {...register("coeNo", {
                      required: "COE number is required",
                      pattern: {
                        value: /^[A-Za-z0-9]*$/,
                        message: "Only letters and numbers allowed"
                      }
                    })}
                  />
                  {errors.coeNo && (
                    <p className="text-red-500 text-sm">{errors.coeNo.message}</p>
                  )}
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
                {/* PARF Eligibility */}
                <div className="space-y-2">
                  <Label>PARF Eligibility (S$)</Label>
                  <Controller
                    name="parfEligibility"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        disabled={!isEditable}
                      />
                    )}
                  />
                </div>

                {/* PARF Eligibility Expiry Date */}
                <div className="space-y-2">
                  <Label>PARF Eligibility Expiry Date</Label>
                  <Controller
                    name="parfExpiryDate"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        type="date"
                        disabled={!isEditable}
                      />
                    )}
                  />
                </div>

                {/* Min PARF Benefit */}
                <div className="space-y-2">
                  <Label>Min PARF Benefit (S$)</Label>
                  <Controller
                    name="minParfBenefit"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        disabled={!isEditable}
                      />
                    )}
                  />
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
                {/* CO2 Emission */}
                <div className="space-y-2">
                  <Label>CO2 Emission (g/km)</Label>
                  <Controller
                    name="co2Emission"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        disabled={!isEditable}
                      />
                    )}
                  />
                </div>

                {/* CO Emission */}
                <div className="space-y-2">
                  <Label>CO Emission (g/km)</Label>
                  <Controller
                    name="coEmission"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        disabled={!isEditable}
                      />
                    )}
                  />
                </div>

                {/* HC Emission */}
                <div className="space-y-2">
                  <Label>HC Emission (g/km)</Label>
                  <Controller
                    name="hcEmission"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        disabled={!isEditable}
                      />
                    )}
                  />
                </div>

                {/* NOx Emission */}
                <div className="space-y-2">
                  <Label>NOx Emission (g/km)</Label>
                  <Controller
                    name="noxEmission"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        disabled={!isEditable}
                      />
                    )}
                  />
                </div>
              </div>

              {/* PM Emission */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="space-y-2">
                  <Label>PM Emission (g/km)</Label>
                  <Controller
                    name="pmEmission"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        disabled={!isEditable}
                      />
                    )}
                  />
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

          {/* Maintenance & Compliance Records */}
          <Card className="overflow-hidden">
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
                  {isEditable && <Button type="button" variant="outline" size="sm" onClick={handleAddMaintenance}>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Record
                  </Button>}
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
                      {maintenanceFields.map((record, index) => (
                        <TableRow key={record.id} className="hover:bg-gray-50">
                          {record.isEditing ? (
                            <>
                              <TableCell className="px-4 py-3">
                                <Input
                                  disabled={!isEditable}
                                  type="date"
                                  value={record.lastServiceDate}
                                  onChange={(e) =>
                                    updateMaintenanceField(
                                      index,
                                      "lastServiceDate",
                                      e.target.value
                                    )
                                  }
                                  className="h-9 w-full"
                                />
                              </TableCell>
                              <TableCell className="px-4 py-3">
                                <Input
                                  disabled={!isEditable}
                                  type="date"
                                  value={record.nextServiceDate}
                                  onChange={(e) =>
                                    updateMaintenanceField(
                                      index,
                                      "nextServiceDate",
                                      e.target.value
                                    )
                                  }
                                  className="h-9 w-full"
                                />
                              </TableCell>
                              <TableCell className="px-4 py-3">
                                <Input
                                  disabled={!isEditable}
                                  placeholder="e.g., 45,230"
                                  value={record.odometer}
                                  onChange={(e) =>
                                    updateMaintenanceField(
                                      index,
                                      "odometer",
                                      e.target.value
                                    )
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
                                  disabled={!isEditable}
                                  ref={maintenanceFileInputRef}
                                  type="file"
                                  multiple
                                  hidden
                                  onChange={(e) => handleMaintenanceFileUpload(index, e)}
                                />

                                {record.files && record.files > 0 && (
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
                                    onClick={() => saveMaintenance(index)}
                                    className="h-8 w-8"
                                  >
                                    <Check className="w-4 h-4 text-green-600" />
                                  </Button>
                                  <Button
                                    size="icon"
                                    variant="ghost"
                                    onClick={() => cancelMaintenance(index)}
                                    className="h-8 w-8"
                                  >
                                    <X className="w-4 h-4 text-red-600" />
                                  </Button>
                                </div>
                              </TableCell>
                            </>
                          ) : (
                            <>
                              <TableCell className="px-4 py-3">{record.lastServiceDate}</TableCell>
                              <TableCell className="px-4 py-3">{record.nextServiceDate}</TableCell>
                              <TableCell className="px-4 py-3">{record.odometer}</TableCell>
                              <TableCell className="px-4 py-3">
                                {index > 0 ? (
                                  <div className="flex items-center gap-2">
                                    <Folder className="w-4 h-4 text-blue-600" />
                                    <span className="text-xs text-blue-600">
                                      {(record.files ?? 0)} file{(record.files ?? 0) > 1 ? "s" : ""}
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
                                    onClick={() => editMaintenance(index)}
                                  >
                                    <SquarePen className="w-4 h-4 text-gray-500" />
                                  </Button>
                                  <Button
                                    size="icon"
                                    variant="ghost"
                                    onClick={() => deleteMaintenance(index)}
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
          <Card className="overflow-hidden">
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
                  {isEditable && <Button type="button" variant="outline" size="sm" onClick={handleAddCertificate}>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Certificate
                  </Button>}
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
                      {certificateFields.map((cert, index) => (
                        <TableRow key={cert.id} className="hover:bg-gray-50">
                          {cert.isEditing ? (
                            <>
                              <TableCell className="px-4 py-3">
                                <Select
                                  value={cert.type}
                                  onValueChange={(v) => updateCertificateField(index, "type", v)}
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
                                <Controller
                                  name={`certificates.${index}.number`}
                                  control={control}
                                  render={({ field }) => (
                                    <Input
                                      disabled={!isEditable}
                                      placeholder="e.g., LTA-2024-001234"
                                      value={field.value}
                                      onChange={(e) => field.onChange(e.target.value)}
                                      className="h-9 w-full"
                                    />
                                  )}
                                />
                              </TableCell>
                              <TableCell className="px-4 py-3">
                                <Controller
                                  name={`certificates.${index}.issued`}
                                  control={control}
                                  render={({ field }) => (
                                    <Input
                                      disabled={!isEditable}
                                      type="date"
                                      value={field.value || ""}
                                      onChange={(e) => field.onChange(e.target.value)}
                                      className="h-9 w-full"
                                    />
                                  )}
                                />

                              </TableCell>
                              <TableCell className="px-4 py-3">
                                <Controller
                                  name={`certificates.${index}.expiry`}
                                  control={control}
                                  render={({ field }) => (
                                    <Input
                                      type="date"
                                      value={field.value || ""}
                                      onChange={(e) => field.onChange(e.target.value)}
                                      className="h-9 w-full"
                                      disabled={!isEditable}
                                    />
                                  )}
                                />

                              </TableCell>
                              <TableCell className="px-4 py-3">
                                <label className="cursor-pointer">
                                  <Controller
                                    name={`certificates.${index}.fileObjs`}
                                    control={control}
                                    render={({ field }) => (
                                      <Input
                                        disabled={!isEditable}
                                        ref={certificateFileInputRef}
                                        type="file"
                                        accept=".pdf,.jpg,.jpeg,.png"
                                        multiple
                                        className="hidden"
                                        onChange={(e) => {
                                          const files = Array.from(e.target.files || []);
                                          field.onChange(files);
                                          setValue(
                                            `certificates.${index}.fileNames`,
                                            files.map((f) => f.name)
                                          );
                                        }}
                                      />
                                    )}
                                  />

                                  <Button size="sm" variant="outline" className="h-8" onClick={() => certificateFileInputRef.current?.click()}>
                                    <Upload className="w-4 h-4 mr-1" />
                                    Upload
                                  </Button>
                                </label>
                                {cert.fileNames && cert.fileNames.length > 0 && (
                                  <div className="mt-1 text-xs text-blue-600 truncate max-w-[100px]">
                                    {cert.fileNames.join(", ")}
                                  </div>
                                )}
                              </TableCell>
                              <TableCell className="px-4 py-3">
                                <Textarea
                                  disabled={!isEditable}
                                  placeholder="Optional notes"
                                  value={cert.remarks}
                                  onChange={(e) => updateCertificateField(index, "remarks", e.target.value)}
                                  className="min-h-[40px] resize-none"
                                  rows={1}
                                />
                              </TableCell>
                              <TableCell className="px-4 py-3">
                                <div className="flex items-center gap-1">
                                  <Button
                                    size="icon"
                                    variant="ghost"
                                    onClick={() => saveCertificate(index)}
                                    className="h-8 w-8"
                                  >
                                    <Check className="w-4 h-4 text-green-600" />
                                  </Button>
                                  <Button
                                    size="icon"
                                    variant="ghost"
                                    onClick={() => cancelCertificate(index)}
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
                              <TableCell className="px-4 py-3">{cert.issued}</TableCell>
                              <TableCell className="px-4 py-3">{cert.expiry}</TableCell>
                              <TableCell className="px-4 py-3">
                                {cert.fileNames && cert.fileNames.length > 0 ? (
                                  <div className="flex items-center gap-2">
                                    <FileText className="w-4 h-4 text-blue-600" />
                                    <span className="text-xs text-blue-600 truncate max-w-[120px]">
                                      {cert.fileNames.join(", ")}
                                    </span>
                                  </div>
                                ) : (
                                  <span className="text-xs text-gray-400">-</span>
                                )}
                              </TableCell>
                              <TableCell className="px-4 py-3 text-sm">{cert.remarks || "-"}</TableCell>
                              <TableCell className="px-4 py-3">
                                <div className="flex items-center gap-1">
                                  <Button
                                    size="icon"
                                    variant="ghost"
                                    onClick={() => saveCertificate(index)}
                                    className="h-8 w-8"
                                  >
                                    <Check className="w-4 h-4 text-green-600" />
                                  </Button>

                                  <Button
                                    size="icon"
                                    variant="ghost"
                                    onClick={() => cancelCertificate(index)}
                                    className="h-8 w-8"
                                  >
                                    <X className="w-4 h-4 text-red-600" />
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
          <div>
            {isEditable && (
              <div className="flex justify-end gap-3 pt-4 border-t">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.push("/vehicles")}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-[#2160AD] hover:bg-[#1d5497]"
                  disabled={loading}
                >
                  {id ? "Update Vehicle" : "Add Vehicle"}
                </Button>

              </div>)}
          
      </div >
    </form >
      </div >
  </>
  );
}




