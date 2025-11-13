// "use client";

// import React, { useState, useMemo } from "react";
// import { useForm, useFieldArray, Controller } from "react-hook-form";

// import {
//   Calendar,
//   Clock,
//   Car,
//   MapPin,
//   Navigation,
//   User,
//   Plus,
//   Phone,
//   Home,
//   FileText,
//   Circle,
//   X,
// } from "lucide-react";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import FunctionalHeader from "@/layout/FunctionalHeader";
// import { Textarea } from "@/components/ui/textarea";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Button } from "@/components/ui/button";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import { ServiceSearch } from "./ServiceSearch";

// // Import shared ALL_SERVICES from ServiceSearch
// import { ALL_SERVICES } from "./ServiceSearch";

// const options = [
//   "All Status",
//   "Open",
//   "Pending for Dispatch",
//   "Dispatched",
//   "Pending Confirmation",
//   "Pending for Payment",
//   "Completed",
//   "Cancelled",
// ];

// /* -------------------------------------------------------------------------- */
// /*                                 TYPES & STATE                              */
// /* -------------------------------------------------------------------------- */
// interface SelectedService {
//   id: string;
//   name: string;
//   price: number;
//   unit: string;
//   quantity: number;
// }

// interface Trip {
//   id: string;
//   pickupLocation: string;
//   pickupBlock: string;
//   pickupUnit: string;
//   pickupWard: string;
//   pickupRoom: string;
//   pickupBed: string;

//   dropoffLocation: string;
//   dropoffBlock: string;
//   dropoffUnit: string;
//   dropoffWard: string;
//   dropoffRoom: string;
//   dropoffBed: string;

//   scheduledTime: string;
// }

// /* -------------------------------------------------------------------------- */
// /*                               MAIN COMPONENT                               */
// /* -------------------------------------------------------------------------- */
// export default function CasesAddPage() {
//   const [status, setStatus] = useState("Open");
//   const [intakeMode, setIntake] = useState("Phone Call");
//   const [transportMode, setTransport] = useState("Select transport mode");
//   const [gender, setGender] = useState("Male");

//   const [tripType, setTripType] = useState<"one-way" | "two-way" | "three-way">(
//     "one-way"
//   );

//   const [vehicleType, setVehicleType] = useState("Ambulance");
//   const [vehicleNumber, setVehicleNumber] = useState("AMB001");

//   /* Requestor */
//   const [requestorName, setRequestorName] = useState("");
//   const [requestorContact, setRequestorContact] = useState("");

//   /* Patient */
//   const [patientName, setPatientName] = useState("");
//   const [nric, setPatientNric] = useState("");
//   const [age, setPatientAge] = useState("");
//   const [weight, setPatientWeight] = useState("");
//   const [patientContact, setPatientContact] = useState("");
//   const [patientCondition, setPatientCondition] = useState("");

//   /* Next of Kin */
//   const [nokName, setNokName] = useState("");
//   const [nokContact, setNokContact] = useState("");
//   const [nokRelation, setNokRelationship] = useState("Parent");
//   const [nokAccompany, setNokAccompanying] = useState("0");

//   /* Times */
//   const [bookingTime, setBookingTime] = useState("");
//   const [bookingDate, setBookingDate] = useState("");

//   /* Vehicle assignment */
//   const [mtoName, setMto] = useState("");
//   const [staffName, setEmt] = useState("");
//   const [escortName, setEscort] = useState("");

//   /* Services */
//   const [serviceSearch, setServiceSearch] = useState("");
//   const [selectedServices, setSelectedServices] = useState<SelectedService[]>(
//     []
//   );

//   /* ------------------------------ Trip state ----------------------------- */
//   const [trips, setTrips] = useState<Trip[]>([
//     {
//       id: "trip-1",
//       pickupLocation: "",
//       pickupBlock: "",
//       pickupUnit: "",
//       pickupWard: "",
//       pickupRoom: "",
//       pickupBed: "",
//       dropoffLocation: "",
//       dropoffBlock: "",
//       dropoffUnit: "",
//       dropoffWard: "",
//       dropoffRoom: "",
//       dropoffBed: "",
//       scheduledTime: "",
//     },
//   ]);

//   React.useEffect(() => {
//     const count = tripType === "one-way" ? 1 : tripType === "two-way" ? 2 : 3;
//     setTrips((prev) => {
//       const kept = prev.slice(0, count);
//       const missing = count - kept.length;
//       return [
//         ...kept,
//         ...Array.from({ length: missing }, (_, i) => ({
//           id: `trip-${kept.length + i + 1}`,
//           pickupLocation: "",
//           pickupBlock: "",
//           pickupUnit: "",
//           pickupWard: "",
//           pickupRoom: "",
//           pickupBed: "",
//           dropoffLocation: "",
//           dropoffBlock: "",
//           dropoffUnit: "",
//           dropoffWard: "",
//           dropoffRoom: "",
//           dropoffBed: "",
//           scheduledTime: "",
//         })),
//       ];
//     });
//   }, [tripType]);

//   const updateTrip = (tripId: string, field: keyof Trip, value: string) => {
//     setTrips((prev) =>
//       prev.map((t) => (t.id === tripId ? { ...t, [field]: value } : t))
//     );
//   };

//   const formatPrice = (amount: number) => `$${amount.toFixed(2)}`;

//   const servicesTotal = useMemo(() => {
//     return selectedServices.reduce((sum, s) => sum + s.price * s.quantity, 0);
//   }, [selectedServices]);

//   const handleServiceSelect = (service: any) => {
//     if (!service) return;
//     const already = selectedServices.some((s) => s.name === service.label);
//     if (already) return;

//     const newService: SelectedService = {
//       id: `${service.value}-${Date.now()}`,
//       name: service.label,
//       price: parseFloat(service.price.replace("$", "")),
//       unit: "per hour",
//       quantity: 1,
//     };
//     setSelectedServices((prev) => [...prev, newService]);
//     setServiceSearch("");
//   };

//   /* ---------------------------------------------------------------------- */
//   /*                         QUICK-ADD HANDLER                              */
//   /* ---------------------------------------------------------------------- */
//   const handleQuickAdd = (svc: (typeof ALL_SERVICES)[0]) => {
//     setServiceSearch(svc.label);
//     const fakeSelect = {
//       label: svc.label,
//       value: svc.value,
//       price: svc.price,
//     };
//     handleServiceSelect(fakeSelect);
//     setTimeout(() => setServiceSearch(""), 300);
//   };

//   const handleCreateCase = async () => {
//     const payload = {
//       status,
//       intakeMode,
//       transportMode,
//       gender,
//       tripType,
//       vehicleType,
//       vehicleNumber,
//       requestorName,
//       requestorContact,
//       patientName,
//       nric,
//       age,
//       weight,
//       patientContact,
//       patientCondition,
//       nokName,
//       nokContact,
//       nokRelation,
//       nokAccompany,
//       bookingTime,
//       bookingDate,
//       mtoName,
//       staffName,
//       escortName,
//       trips,
//       selectedServices,
//     };
//     const access_token =
//       typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;

//     try {
//       const res = await fetch('/api/cases/create-case', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json',
//           Authorization: access_token ? `Bearer ${access_token}` : "",
//          },
//         body: JSON.stringify(payload),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         alert('Case created successfully!');
//         console.log('Created case:', data);
//       } else {
//         alert(`Error: ${data.message || 'Failed to create case'}`);
//       }
//     } catch (err) {
//       console.error(err);
//       alert('Something went wrong!');
//     }
//   };


//   return (
//     <>
//       <FunctionalHeader
//         title="Add New Case"
//         breadcrumb={[
//           { label: "Operations" },
//           { label: "Cases" },
//           { label: "Add New Case" },
//         ]}
//       />
//       <div className="flex-1 w-full overflow-auto">
//         <div className="p-4 lg:p-6 space-y-6 w-full">
//           {/* Status */}
//           <div className="max-w-[300px]">
//             <Label className="text-base font-medium text-base-optimized mb-2 block">
//               Status <span className="text-red-500">*</span>
//             </Label>
//             <Select value={status} onValueChange={setStatus}>
//               <SelectTrigger className="w-full text-base-optimized">
//                 <SelectValue />
//               </SelectTrigger>
//               <SelectContent>
//                 {options.map((opt) => (
//                   <SelectItem key={opt} value={opt}>
//                     {opt}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>

//           {/* Booking & Requestor Information */}
//           <Card className="overflow-hidden w-full">
//             <CardHeader className="header-bg-soft pb-6">
//               <CardTitle className="flex items-center gap-2">
//                 <Phone className="w-5 h-5" />
//                 Booking & Requestor Information
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <div>
//                 <Label className="text-base font-medium text-base-optimized mb-2 block">
//                   Mode of Intake <span className="text-red-500">*</span>
//                 </Label>
//                 <Select value={intakeMode} onValueChange={setIntake}>
//                   <SelectTrigger className="w-full text-base-optimized">
//                     <SelectValue />
//                   </SelectTrigger>
//                   <SelectContent>
//                     {["Phone Call", "Whatapp", "Email", "Walk-in"].map(
//                       (opt) => (
//                         <SelectItem key={opt} value={opt}>
//                           {opt}
//                         </SelectItem>
//                       )
//                     )}
//                   </SelectContent>
//                 </Select>
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div>
//                   <Label className="text-base font-medium text-base-optimized mb-2 block">
//                     Booking Date <span className="text-red-500">*</span>
//                   </Label>
//                   <Input
//                     type="date"
//                     value={bookingDate}
//                     onChange={(e) => setBookingDate(e.target.value)}
//                     placeholder="Select booking date"
//                     className="w-full"
//                   />
//                 </div>
//                 <div>
//                   <Label className="text-base font-medium text-base-optimized mb-2 block">
//                     Booking Time <span className="text-red-500">*</span>
//                   </Label>
//                   <Input
//                     type="time"
//                     value={bookingTime}
//                     onChange={(e) => setBookingTime(e.target.value)}
//                     className="w-full"
//                   />
//                 </div>
//               </div>

//               <div className="bg-gray-200 h-px my-4"></div>

//               <div>
//                 <Label className="text-base font-medium text-base-optimized mb-2 block">
//                   Requestor Name <span className="text-red-500">*</span>
//                 </Label>
//                 <Input
//                   placeholder="Enter requestor name"
//                   type="text"
//                   value={requestorName}
//                   onChange={(e) => setRequestorName(e.target.value)}
//                   className="w-full"
//                 />
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div>
//                   <Label className="text-base font-medium text-base-optimized mb-2 block">
//                     Requestor Contact <span className="text-red-500">*</span>
//                   </Label>
//                   <Input
//                     placeholder="Enter contact number"
//                     type="text"
//                     value={requestorContact}
//                     onChange={(e) => setRequestorContact(e.target.value)}
//                     className="w-full"
//                   />
//                 </div>
//                 <div>
//                   <Label className="text-base font-medium text-base-optimized mb-2 block">
//                     Mode of Transport
//                   </Label>
//                   <Select value={transportMode} onValueChange={setTransport}>
//                     <SelectTrigger className="w-full text-base-optimized">
//                       <SelectValue />
//                     </SelectTrigger>
//                     <SelectContent>
//                       {[
//                         "Select transport mode",
//                         "Wheelchair",
//                         "Stretcher",
//                         "Walking",
//                         "Crutches",
//                         "Walker",
//                         "Carry Chair",
//                         "Ambulatory",
//                       ].map((opt) => (
//                         <SelectItem key={opt} value={opt}>
//                           {opt}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           {/* Patient Information */}
//           <Card className="overflow-hidden w-full">
//             <CardHeader className="header-bg-soft pb-6">
//               <CardTitle className="flex items-center gap-2">
//                 <User className="w-5 h-5" />
//                 Patient Information
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div>
//                   <Label className="text-base font-medium text-base-optimized mb-2 block">
//                     Patient Name <span className="text-red-500">*</span>
//                   </Label>
//                   <Input
//                     placeholder="Enter patient name"
//                     type="text"
//                     value={patientName}
//                     onChange={(e) => setPatientName(e.target.value)}
//                     className="w-full"
//                   />
//                 </div>
//                 <div>
//                   <Label className="text-base font-medium text-base-optimized mb-2 block">
//                     NRIC <span className="text-red-500">*</span>
//                   </Label>
//                   <Input
//                     placeholder="S****567Z"
//                     type="text"
//                     value={nric}
//                     onChange={(e) => setPatientNric(e.target.value)}
//                     className="w-full"
//                   />
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//                 <div>
//                   <Label className="text-base font-medium text-base-optimized mb-2 block">
//                     Age
//                   </Label>
//                   <Input
//                     placeholder="65"
//                     type="number"
//                     value={age}
//                     onChange={(e) => setPatientAge(e.target.value)}
//                     className="w-full"
//                   />
//                 </div>
//                 <div>
//                   <Label className="text-base font-medium text-base-optimized mb-2 block">
//                     Weight (KG)
//                   </Label>
//                   <Input
//                     placeholder="70"
//                     type="number"
//                     value={weight}
//                     onChange={(e) => setPatientWeight(e.target.value)}
//                     className="w-full"
//                   />
//                 </div>
//                 <div>
//                   <Label className="text-base font-medium text-base-optimized mb-2 block">
//                     Gender
//                   </Label>
//                   <Select value={gender} onValueChange={setGender}>
//                     <SelectTrigger className="w-full text-base-optimized">
//                       <SelectValue />
//                     </SelectTrigger>
//                     <SelectContent>
//                       {["Male", "Female"].map((opt) => (
//                         <SelectItem key={opt} value={opt}>
//                           {opt}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                 </div>
//               </div>

//               <div>
//                 <Label className="text-base font-medium text-base-optimized mb-2 block">
//                   Patient Contact <span className="text-red-500">*</span>
//                 </Label>
//                 <Input
//                   placeholder="+65 XXXX XXXX"
//                   type="text"
//                   value={patientContact}
//                   onChange={(e) => setPatientContact(e.target.value)}
//                   className="w-full"
//                 />
//               </div>

//               <div>
//                 <Label className="text-base font-medium text-base-optimized mb-2 block">
//                   Patient's Condition | Chief Complaint
//                 </Label>
//                 <Textarea
//                   placeholder="Describe patient's condition or chief complaint..."
//                   value={patientCondition}
//                   onChange={(e) => setPatientCondition(e.target.value)}
//                 />
//               </div>

//               <div className="bg-gray-200 h-px my-4"></div>

//               <div className="space-y-4">
//                 <h4 className="text-base font-medium text-[#2160AD]">
//                   Next of Kin Details
//                 </h4>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   <div>
//                     <Label className="text-base font-medium text-base-optimized mb-2 block">
//                       NOK Name <span className="text-red-500">*</span>
//                     </Label>
//                     <Input
//                       placeholder="Enter NOK name"
//                       type="text"
//                       value={nokName}
//                       onChange={(e) => setNokName(e.target.value)}
//                       className="w-full"
//                     />
//                   </div>
//                   <div>
//                     <Label className="text-base font-medium text-base-optimized mb-2 block">
//                       NOK Contact <span className="text-red-500">*</span>
//                     </Label>
//                     <Input
//                       placeholder="+65 9123 4567"
//                       type="text"
//                       value={nokContact}
//                       onChange={(e) => setNokContact(e.target.value)}
//                       className="w-full"
//                     />
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   <div>
//                     <Label className="text-base font-medium text-base-optimized mb-2 block">
//                       Relationship
//                     </Label>
//                     <Select
//                       value={nokRelation}
//                       onValueChange={setNokRelationship}
//                     >
//                       <SelectTrigger className="w-full text-base-optimized">
//                         <SelectValue />
//                       </SelectTrigger>
//                       <SelectContent>
//                         {[
//                           "Parent",
//                           "Spouse",
//                           "Child",
//                           "Sibling",
//                           "Friend",
//                           "Other",
//                         ].map((opt) => (
//                           <SelectItem key={opt} value={opt}>
//                             {opt}
//                           </SelectItem>
//                         ))}
//                       </SelectContent>
//                     </Select>
//                   </div>
//                   <div>
//                     <Label className="text-base font-medium text-base-optimized mb-2 block">
//                       Accompanying NOK <span className="text-red-500">*</span>
//                     </Label>
//                     <Input
//                       type="number"
//                       value={nokAccompany}
//                       onChange={(e) => setNokAccompanying(e.target.value)}
//                       className="w-full"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           {/* Trip Details */}
//           <Card className="overflow-hidden w-full">
//             <CardHeader className="header-bg-soft pb-6">
//               <CardTitle className="flex items-center gap-2">
//                 <Navigation className="w-5 h-5" />
//                 Trip Details
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-6">
//               <div>
//                 <Label className="text-base font-medium text-base-optimized mb-2 block">
//                   Trip Type <span className="text-red-500">*</span>
//                 </Label>
//                 <div role="radiogroup" className="flex gap-4">
//                   {(["one-way", "two-way", "three-way"] as const).map(
//                     (type) => (
//                       <div
//                         key={type}
//                         className="flex items-center space-x-2"
//                         onClick={() => setTripType(type)}
//                       >
//                         <button
//                           type="button"
//                           role="radio"
//                           aria-checked={tripType === type}
//                           className={`border-gray-300 aspect-square size-4 rounded-full transition-all relative bg-gray-200`}
//                         >
//                           {tripType === type && (
//                             <Circle className="absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 fill-primary" />
//                           )}
//                         </button>
//                         <Label className="font-medium text-base">
//                           {type.charAt(0).toUpperCase() +
//                             type.slice(1).replace("-", " ")}
//                         </Label>
//                       </div>
//                     )
//                   )}
//                 </div>
//               </div>

//               <div className="bg-gray-200 h-px my-4"></div>

//               {trips.map((trip, idx) => (
//                 <div
//                   key={trip.id}
//                   className="border rounded-lg p-4 header-bg-soft/30"
//                 >
//                   <div className="flex items-center gap-2 mb-4">
//                     <div className="w-6 h-6 rounded-full bg-[#2160AD] text-white text-sm flex items-center justify-center font-medium">
//                       {idx + 1}
//                     </div>
//                     <h4 className="text-base font-medium">Trip {idx + 1}</h4>
//                   </div>

//                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                     {/* Pickup */}
//                     <div className="space-y-4">
//                       <div>
//                         <Label className="text-base font-medium text-base-optimized mb-2 block">
//                           Pickup Location{" "}
//                           <span className="text-red-500">*</span>
//                         </Label>
//                         <div className="relative">
//                           <Input
//                             placeholder="Search pickup location..."
//                             type="text"
//                             value={trip.pickupLocation}
//                             onChange={(e) =>
//                               updateTrip(
//                                 trip.id,
//                                 "pickupLocation",
//                                 e.target.value
//                               )
//                             }
//                             className="w-full"
//                           />
//                           <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
//                             <Button
//                               type="button"
//                               size="icon"
//                               variant="ghost"
//                               className="h-6 w-6 p-0 hover:bg-gray-100 text-[#2160AD]"
//                               title="Use current location"
//                             >
//                               <MapPin className="w-3 h-3" />
//                             </Button>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="flex flex-col gap-6 rounded-xl border p-4 header-bg-soft/50 border-gray-200">
//                         <div className="flex items-center gap-2 mb-3">
//                           <Home className="w-4 h-4 text-[#2160AD]" />
//                           <Label className="text-base font-medium">
//                             Address Details
//                           </Label>
//                         </div>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                           <div>
//                             <Label className="text-base font-medium text-base-optimized mb-2 block">
//                               Block Number
//                             </Label>
//                             <Input
//                               placeholder="e.g., 123"
//                               type="text"
//                               value={trip.pickupBlock}
//                               onChange={(e) =>
//                                 updateTrip(
//                                   trip.id,
//                                   "pickupBlock",
//                                   e.target.value
//                                 )
//                               }
//                               className="w-full"
//                             />
//                           </div>
//                           <div>
//                             <Label className="text-base font-medium text-base-optimized mb-2 block">
//                               Unit Number
//                             </Label>
//                             <Input
//                               placeholder="e.g., #12-34"
//                               type="text"
//                               value={trip.pickupUnit}
//                               onChange={(e) =>
//                                 updateTrip(
//                                   trip.id,
//                                   "pickupUnit",
//                                   e.target.value
//                                 )
//                               }
//                               className="w-full"
//                             />
//                           </div>
//                         </div>
//                         <div className="mt-4 pt-4 border-t border-gray-200">
//                           <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
//                             <div>
//                               <Label className="text-base font-medium text-base-optimized mb-2 block">
//                                 Ward Details
//                               </Label>
//                               <Input
//                                 placeholder="e.g., Ward A"
//                                 type="text"
//                                 value={trip.pickupWard}
//                                 onChange={(e) =>
//                                   updateTrip(
//                                     trip.id,
//                                     "pickupWard",
//                                     e.target.value
//                                   )
//                                 }
//                                 className="w-full"
//                               />
//                             </div>
//                             <div>
//                               <Label className="text-base font-medium text-base-optimized mb-2 block">
//                                 Room Number
//                               </Label>
//                               <Input
//                                 placeholder="e.g., 101"
//                                 type="text"
//                                 value={trip.pickupRoom}
//                                 onChange={(e) =>
//                                   updateTrip(
//                                     trip.id,
//                                     "pickupRoom",
//                                     e.target.value
//                                   )
//                                 }
//                                 className="w-full"
//                               />
//                             </div>
//                             <div>
//                               <Label className="text-base font-medium text-base-optimized mb-2 block">
//                                 Bed Number
//                               </Label>
//                               <Input
//                                 placeholder="e.g., A1"
//                                 type="text"
//                                 value={trip.pickupBed}
//                                 onChange={(e) =>
//                                   updateTrip(
//                                     trip.id,
//                                     "pickupBed",
//                                     e.target.value
//                                   )
//                                 }
//                                 className="w-full"
//                               />
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Dropoff */}
//                     <div className="space-y-4">
//                       <div>
//                         <Label className="text-base font-medium text-base-optimized mb-2 block">
//                           Dropoff Location{" "}
//                           <span className="text-red-500">*</span>
//                         </Label>
//                         <div className="relative">
//                           <Input
//                             placeholder="Search dropoff location..."
//                             value={trip.dropoffLocation}
//                             onChange={(e) =>
//                               updateTrip(
//                                 trip.id,
//                                 "dropoffLocation",
//                                 e.target.value
//                               )
//                             }
//                             className="pr-20 form-input-height"
//                           />
//                           <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
//                             <Button
//                               type="button"
//                               size="icon"
//                               variant="ghost"
//                               className="h-6 w-6 p-0 hover:bg-gray-100 text-[#2160AD]"
//                               title="Use current location"
//                             >
//                               <MapPin className="w-3 h-3" />
//                             </Button>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="flex flex-col gap-6 rounded-xl border p-4 header-bg-soft/50 border-gray-200">
//                         <div className="flex items-center gap-2 mb-3">
//                           <Home className="w-4 h-4 text-[#2160AD]" />
//                           <Label className="text-base font-medium">
//                             Address Details
//                           </Label>
//                         </div>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                           <div>
//                             <Label className="text-base font-medium text-base-optimized mb-2 block">
//                               Block Number
//                             </Label>
//                             <Input
//                               placeholder="e.g., 123"
//                               type="text"
//                               value={trip.dropoffBlock}
//                               onChange={(e) =>
//                                 updateTrip(
//                                   trip.id,
//                                   "dropoffBlock",
//                                   e.target.value
//                                 )
//                               }
//                               className="w-full"
//                             />
//                           </div>
//                           <div>
//                             <Label className="text-base font-medium text-base-optimized mb-2 block">
//                               Unit Number
//                             </Label>
//                             <Input
//                               placeholder="e.g., #12-34"
//                               type="text"
//                               value={trip.dropoffUnit}
//                               onChange={(e) =>
//                                 updateTrip(
//                                   trip.id,
//                                   "dropoffUnit",
//                                   e.target.value
//                                 )
//                               }
//                               className="w-full"
//                             />
//                           </div>
//                         </div>
//                         <div className="mt-4 pt-4 border-t border-gray-200">
//                           <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
//                             <div>
//                               <Label className="text-base font-medium text-base-optimized mb-2 block">
//                                 Ward Details
//                               </Label>
//                               <Input
//                                 placeholder="e.g., Ward A"
//                                 type="text"
//                                 value={trip.dropoffWard}
//                                 onChange={(e) =>
//                                   updateTrip(
//                                     trip.id,
//                                     "dropoffWard",
//                                     e.target.value
//                                   )
//                                 }
//                                 className="w-full"
//                               />
//                             </div>
//                             <div>
//                               <Label className="text-base font-medium text-base-optimized mb-2 block">
//                                 Room Number
//                               </Label>
//                               <Input
//                                 placeholder="e.g., 101"
//                                 type="text"
//                                 value={trip.dropoffRoom}
//                                 onChange={(e) =>
//                                   updateTrip(
//                                     trip.id,
//                                     "dropoffRoom",
//                                     e.target.value
//                                   )
//                                 }
//                                 className="w-full"
//                               />
//                             </div>
//                             <div>
//                               <Label className="text-base font-medium text-base-optimized mb-2 block">
//                                 Bed Number
//                               </Label>
//                               <Input
//                                 placeholder="e.g., A1"
//                                 type="text"
//                                 value={trip.dropoffBed}
//                                 onChange={(e) =>
//                                   updateTrip(
//                                     trip.id,
//                                     "dropoffBed",
//                                     e.target.value
//                                   )
//                                 }
//                                 className="w-full"
//                               />
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="mt-4">
//                     <div className="max-w-md">
//                       <Label className="text-base font-medium text-base-optimized mb-2 block">
//                         Pick up - Scheduled Time
//                       </Label>
//                       <Input
//                         type="time"
//                         value={trip.scheduledTime}
//                         onChange={(e) =>
//                           updateTrip(trip.id, "scheduledTime", e.target.value)
//                         }
//                         className="w-full"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               ))}

//               <div className="bg-gray-200 h-px my-4"></div>

//               {/* Vehicle Assignment */}
//               <div className="space-y-6">
//                 <div className="flex items-center gap-2 mb-4">
//                   <Car className="w-5 h-5 text-[#2160AD]" />
//                   <h4 className="text-base-optimized font-semibold text-[#2160AD]">
//                     Vehicle Assignment
//                   </h4>
//                 </div>

//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                   <div>
//                     <Label className="text-base font-medium text-base-optimized mb-2 block">
//                       Vehicle Type
//                     </Label>
//                     <Select value={vehicleType} onValueChange={setVehicleType}>
//                       <SelectTrigger className="w-full text-base-optimized">
//                         <SelectValue />
//                       </SelectTrigger>
//                       <SelectContent>
//                         {[
//                           "Ambulance",
//                           "ICU Ambulance",
//                           "Patient Transport",
//                           "Wheelchair Vehicle",
//                         ].map((opt) => (
//                           <SelectItem key={opt} value={opt}>
//                             {opt}
//                           </SelectItem>
//                         ))}
//                       </SelectContent>
//                     </Select>
//                   </div>
//                   <div>
//                     <Label className="text-base font-medium text-base-optimized mb-2 block">
//                       Vehicle Number
//                     </Label>
//                     <Select
//                       value={vehicleNumber}
//                       onValueChange={setVehicleNumber}
//                     >
//                       <SelectTrigger className="w-full text-base-optimized">
//                         <SelectValue />
//                       </SelectTrigger>
//                       <SelectContent>
//                         {["AMB001", "AMB002", "AMB003", "ICU001"].map((opt) => (
//                           <SelectItem key={opt} value={opt}>
//                             {opt}
//                           </SelectItem>
//                         ))}
//                       </SelectContent>
//                     </Select>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//                   <div>
//                     <Label className="text-base font-medium text-base-optimized mb-2 block">
//                       MTO
//                     </Label>
//                     <Input
//                       placeholder="Medical Transport Officer"
//                       type="text"
//                       value={mtoName}
//                       onChange={(e) => setMto(e.target.value)}
//                       className="w-full"
//                     />
//                   </div>
//                   <div>
//                     <Label className="text-base font-medium text-base-optimized mb-2 block">
//                       EMT / EN / PRM
//                     </Label>
//                     <Input
//                       placeholder="Emergency Medical Technician"
//                       type="text"
//                       value={staffName}
//                       onChange={(e) => setEmt(e.target.value)}
//                       className="w-full"
//                     />
//                   </div>
//                   <div>
//                     <Label className="text-base font-medium text-base-optimized mb-2 block">
//                       Escort (Person)
//                     </Label>
//                     <Input
//                       placeholder="Escort name"
//                       type="text"
//                       value={escortName}
//                       onChange={(e) => setEscort(e.target.value)}
//                       className="w-full"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           {/* Services */}
//           <Card className="overflow-hidden w-full">
//             <CardHeader className="header-bg-soft pb-6">
//               <CardTitle className="flex items-center gap-2">
//                 <Plus className="w-5 h-5" />
//                 Services
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-6">
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                 <div className="flex gap-2 items-end">
//                   <ServiceSearch
//                     value={serviceSearch}
//                     onChange={setServiceSearch}
//                     onSelect={handleServiceSelect}
//                   />
//                   <Button size="icon" variant="outline">
//                     <Plus className="w-5 h-5" />
//                   </Button>
//                 </div>

//                 {/* QUICK ADD SECTION */}
//                 <div>
//                   <Label className="text-base font-medium text-base-optimized mb-2 block">
//                     Quick Add Services
//                   </Label>
//                   <div className="flex flex-wrap gap-2">
//                     {ALL_SERVICES.filter(
//                       (svc) =>
//                         !selectedServices.some((s) => s.name === svc.label)
//                     )
//                       .slice(0, 4)
//                       .map((svc) => (
//                         <Button
//                           key={svc.value}
//                           onClick={() => handleQuickAdd(svc)}
//                           variant="outline"
//                           size="sm"
//                           className="border-[#2160AD]/30 hover:bg-[#2160AD]/10"
//                         >
//                           <Plus className="w-3 h-3 mr-1" />
//                           {svc.label}
//                         </Button>
//                       ))}
//                   </div>
//                 </div>
//               </div>

//               {selectedServices.length > 0 && (
//                 <div>
//                   <Label className="text-base-optimized font-medium mb-3 block">
//                     Added Services
//                   </Label>
//                   <div className="border rounded-lg overflow-hidden">
//                     <div className="header-bg-soft px-4 py-2 border-b">
//                       <div className="grid grid-cols-6 gap-4 text-sm font-medium text-gray-700">
//                         <div className="col-span-2">Service Name</div>
//                         <div>Quantity</div>
//                         <div>Unit</div>
//                         <div>Total Cost</div>
//                         <div>Action</div>
//                       </div>
//                     </div>
//                     <div className="divide-y">
//                       {selectedServices.map((svc) => {
//                         const total = svc.price * svc.quantity;
//                         return (
//                           <div
//                             key={svc.id}
//                             className="px-4 py-3 hover:header-bg-soft"
//                           >
//                             <div className="grid grid-cols-6 gap-4 items-center">
//                               <div className="col-span-2 font-medium text-base-optimized">
//                                 {svc.name}
//                               </div>
//                               <div>
//                                 <Input
//                                   type="number"
//                                   min="0"
//                                   value={svc.quantity}
//                                   onChange={(e) => {
//                                     const qty = Math.max(
//                                       0,
//                                       parseInt(e.target.value) || 0
//                                     );
//                                     setSelectedServices((prev) =>
//                                       prev.map((s) =>
//                                         s.id === svc.id
//                                           ? { ...s, quantity: qty }
//                                           : s
//                                       )
//                                     );
//                                   }}
//                                   className="w-16 h-8 text-sm"
//                                 />
//                               </div>
//                               <div className="text-gray-600">{svc.unit}</div>
//                               <div className="font-medium">
//                                 {formatPrice(total)}
//                               </div>
//                               <div>
//                                 <Button
//                                   onClick={() =>
//                                     setSelectedServices((prev) =>
//                                       prev.filter((s) => s.id !== svc.id)
//                                     )
//                                   }
//                                   variant="ghost"
//                                   className="text-red-500 hover:text-red-700"
//                                   size="icon"
//                                 >
//                                   <X className="w-3 h-3" />
//                                 </Button>
//                               </div>
//                             </div>
//                           </div>
//                         );
//                       })}
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </CardContent>
//           </Card>

//           {/* Billing Summary */}
//           <Card className="overflow-hidden w-full">
//             <CardHeader className="header-bg-soft pb-6">
//               <CardTitle className="flex items-center gap-2">
//                 <Car className="w-5 h-5" />
//                 Billing Summary
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="bg-gray-50 p-6 rounded-lg border">
//                 <div className="font-semibold mb-4 text-[#2160AD] text-lg">
//                   Billing Summary
//                 </div>
//                 <div className="space-y-3 mb-4">
//                   <div className="flex justify-between items-start py-3 border-b border-gray-200">
//                     <div className="flex-1">
//                       <span className="font-medium text-base">
//                         Base Transport Fee
//                       </span>
//                       <div className="text-sm text-gray-600 mt-1">
//                         {trips.some(
//                           (t) => t.pickupLocation && t.dropoffLocation
//                         )
//                           ? "Calculated from route"
//                           : "No pickup location selected"}
//                       </div>
//                     </div>
//                     <span className="text-base font-semibold ml-4">$0.00</span>
//                   </div>
//                   {selectedServices.length > 0 ? (
//                     selectedServices.map((svc) => (
//                       <div
//                         key={svc.id}
//                         className="flex justify-between py-2 text-sm border-b border-dashed"
//                       >
//                         <div className="flex-1">
//                           <span className="font-medium text-base">
//                             {svc.name}
//                           </span>
//                           <div className="text-sm text-gray-600 mt-1">
//                             {formatPrice(svc.price)}
//                           </div>
//                         </div>
//                         <span className="font-medium">
//                           {formatPrice(svc.price * svc.quantity)}
//                         </span>
//                       </div>
//                     ))
//                   ) : (
//                     <div className="text-center py-4 text-gray-500">
//                       <div className="text-base">
//                         No additional services selected
//                       </div>
//                       <div className="text-sm mt-1">
//                         Add services above to see breakdown
//                       </div>
//                     </div>
//                   )}
//                 </div>
//                 <div className="bg-gray-200 h-px"></div>
//                 <div className="flex justify-between font-semibold text-lg text-[#2160AD] pt-4">
//                   <span>Total Amount:</span>
//                   <span>{formatPrice(servicesTotal)}</span>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           {/* Additional Remarks */}
//           <Card className="overflow-hidden w-full">
//             <CardHeader className="header-bg-soft pb-6">
//               <CardTitle className="flex items-center gap-2">
//                 <FileText className="w-5 h-5" />
//                 Additional Remarks
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <Textarea
//                 placeholder="Add any additional remarks or special instructions..."
//                 value={patientCondition}
//                 onChange={(e) => setPatientCondition(e.target.value)}
//               />
//             </CardContent>
//           </Card>

//           {/* Action Buttons */}
//           <div className="flex flex-col sm:flex-row justify-end gap-3 pt-6 border-t">
//             <Button variant="outline" className="px-6 lg:px-8">
//               Cancel
//             </Button>
//             <Button className="px-6 lg:px-8"  onClick={handleCreateCase}>Create Case</Button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

"use client";

import React, { useState, useMemo } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";

import {
  Calendar,
  Clock,
  Car,
  MapPin,
  Navigation,
  User,
  Plus,
  Phone,
  Home,
  FileText,
  Circle,
  X,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FunctionalHeader from "@/layout/FunctionalHeader";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ServiceSearch } from "./ServiceSearch";

// Import shared ALL_SERVICES from ServiceSearch
import { ALL_SERVICES } from "./ServiceSearch";

const options = [
  "All Status",
  "Open",
  "Pending for Dispatch",
  "Dispatched",
  "Pending Confirmation",
  "Pending for Payment",
  "Completed",
  "Cancelled",
];

/* -------------------------------------------------------------------------- */
/*                                 TYPES & STATE                              */
/* -------------------------------------------------------------------------- */
interface SelectedService {
  id: string;
  name: string;
  price: number;
  unit: string;
  quantity: number;
}

interface Trip {
  id: string;
  pickupLocation: string;
  pickupBlock: string;
  pickupUnit: string;
  pickupWard: string;
  pickupRoom: string;
  pickupBed: string;

  dropoffLocation: string;
  dropoffBlock: string;
  dropoffUnit: string;
  dropoffWard: string;
  dropoffRoom: string;
  dropoffBed: string;

  scheduledTime: string;
}

interface CaseFormValues {
  /* --- Basic Info --- */
  status: string;
  intakeMode: string;
  transportMode: string;
  gender: string;
  tripType: "one-way" | "two-way" | "three-way";

  /* --- Vehicle Assignment --- */
  vehicleType: string;
  vehicleNumber: string;
  mtoName?: string;
  staffName?: string;
  escortName?: string;

  /* --- Requestor --- */
  requestorName: string;
  requestorContact: string;

  /* --- Patient --- */
  patientName: string;
  nric: string;
  age?: string;
  weight?: string;
  patientContact: string;
  patientCondition?: string;

  /* --- Next of Kin --- */
  nokName: string;
  nokContact: string;
  nokRelation: string;
  nokAccompany: string;

  /* --- Booking Info --- */
  bookingDate: string;
  bookingTime: string;

  /* --- Trips and Services (nested interfaces) --- */
  trips: Trip[];
  selectedServices: SelectedService[];
}

/* -------------------------------------------------------------------------- */
/*                               MAIN COMPONENT                               */
/* -------------------------------------------------------------------------- */
export default function CasesAddPage() {
  // local UI-only state for service search (kept as it was)
  const [serviceSearch, setServiceSearch] = useState("");

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm<CaseFormValues>({
    mode: "onChange",       
    reValidateMode: "onChange",
    defaultValues: {
      status: "Open",
      intakeMode: "Phone Call",
      transportMode: "Select transport mode",
      gender: "Male",
      tripType: "one-way",
      vehicleType: "Ambulance",
      vehicleNumber: "AMB001",
      requestorName: "",
      requestorContact: "",
      patientName: "",
      nric: "",
      age: "",
      weight: "",
      patientContact: "",
      patientCondition: "",
      nokName: "",
      nokContact: "",
      nokRelation: "Parent",
      nokAccompany: "0",
      bookingDate: "",
      bookingTime: "",
      mtoName: "",
      staffName: "",
      escortName: "",
      
      trips: [
        {
          id: "trip-1",
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
        },
      ],
      selectedServices: [],
    },
  });
  const bookingTime = watch("bookingTime");
  const trips = watch("trips");

  /* ------------------------------ Trips FieldArray ------------------------- */
  const tripType = watch("tripType");
  const {
    fields: tripFields,
    append: appendTrip,
    remove: removeTrip,
    update: updateTripFieldArray,
  } = useFieldArray({
    control,
    name: "trips",
  });

  // Keep trips in sync with tripType (1/2/3)
  React.useEffect(() => {
    const count = tripType === "one-way" ? 1 : tripType === "two-way" ? 2 : 3;
    const current = tripFields.length;

    if (current < count) {
      for (let i = current; i < count; i++) {
        appendTrip({
          id: `trip-${i + 1}`,
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
      }
    } else if (current > count) {
    
      for (let i = current - 1; i >= count; i--) {
        removeTrip(i);
      }
    }
    
  }, [tripType, tripFields.length, appendTrip, removeTrip]);

  /* --------------------------- Services FieldArray ------------------------ */
  const {
    fields: serviceFields,
    append: addService,
    remove: removeService,
  } = useFieldArray({
    control,
    name: "selectedServices",
  });

  /* ------------------------------ Helpers -------------------------------- */
  const formatPrice = (amount: number) => `$${amount.toFixed(2)}`;

  const selectedServices = watch("selectedServices") || [];

  const servicesTotal = useMemo(() => {
    return (selectedServices || []).reduce((sum, s) => sum + (s.price || 0) * (s.quantity || 0), 0);
  }, [selectedServices]);

  /* ---------------------------- Service handlers ------------------------- */
  const handleServiceSelect = (service: any) => {
    if (!service) return;

    const currentServices = watch("selectedServices") || [];
    const already = currentServices.some((s) => s.name === service.label);
    if (already) return;

    const newService: SelectedService = {
      id: `${service.value}-${Date.now()}`,
      name: service.label,
      price: parseFloat(String(service.price).replace("$", "")) || 0,
      unit: "per hour",
      quantity: 1,
    };

    addService(newService);
    setServiceSearch("");
  };

  const handleQuickAdd = (svc: (typeof ALL_SERVICES)[0]) => {
    setServiceSearch(svc.label);
    const fakeSelect = {
      label: svc.label,
      value: svc.value,
      price: svc.price,
    };
    handleServiceSelect(fakeSelect);
    setTimeout(() => setServiceSearch(""), 300);
  };

  /* ---------------------------- Submit handler --------------------------- */
  const onSubmit = async (payload: CaseFormValues) => {
    const access_token =
      typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;

    try {
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
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };
  const mode = watch("intakeMode");


  /* ---------------------------- UI / JSX -------------------------------- */
  return (
    <>
      <FunctionalHeader
        title="Add New Case"
        breadcrumb={[
          { label: "Operations" },
          { label: "Cases" },
          { label: "Add New Case" },
        ]}
      />
      <div className="flex-1 w-full overflow-auto">
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <div className="p-4 lg:p-6 space-y-6 w-full">
            {/* Status */}
            <div className="max-w-[300px]">
              <Label className="text-base font-medium text-base-optimized mb-2 block">
                Status <span className="text-red-500">*</span>
              </Label>

              <Controller
                control={control}
                name="status"
                rules={{ required: "Status is required" }}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={(v) => field.onChange(v)}>
                    <SelectTrigger className="w-full text-base-optimized">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {options.map((opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.status && <p className="text-red-500 text-sm">{errors.status.message}</p>}
            </div>

            {/* Booking & Requestor Information */}
            <Card className="overflow-hidden w-full">
              <CardHeader className="header-bg-soft pb-6">
                <CardTitle className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Booking & Requestor Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-base font-medium text-base-optimized mb-2 block">
                    Mode of Intake <span className="text-red-500">*</span>
                  </Label>

                  <Controller
                    control={control}
                    name="intakeMode"
                    rules={{ required: "Intake mode is required" }}
                    render={({ field }) => (
                      <Select value={field.value} onValueChange={(v) => field.onChange(v)}>
                        <SelectTrigger className="w-full text-base-optimized">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {["Phone Call", "Whatapp", "Email", "Walk-in"].map((opt) => (
                            <SelectItem key={opt} value={opt}>
                              {opt}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.intakeMode && <p className="text-red-500 text-sm">{errors.intakeMode.message}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-base font-medium text-base-optimized mb-2 block">
                      Booking Date <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      type="date"
                      {...register("bookingDate", { required: "Booking date is required" })}
                      className="w-full"
                    />
                    {errors.bookingDate && <p className="text-red-500 text-sm">{errors.bookingDate.message}</p>}
                  </div>
                  <div>
                    <Label className="text-base font-medium text-base-optimized mb-2 block">
                      Booking Time <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      type="time"
                      {...register("bookingTime", { required: "Booking time is required",
                          validate: (value) => {
                          // compare with first trip's scheduledTime (if exists)
                          const firstTrip = trips?.[0];
                          if (firstTrip?.scheduledTime && value === firstTrip.scheduledTime) {
                            return "Booking time and pickup time cannot be the same";
                          }
                          return true;
                        },
                       })}
                      className="w-full"
                    />
                    {errors.bookingTime && <p className="text-red-500 text-sm">{errors.bookingTime.message}</p>}
                  </div>
                </div>

                <div className="bg-gray-200 h-px my-4"></div>

                <div>
                  <Label className="text-base font-medium text-base-optimized mb-2 block">
                    Requestor Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    placeholder="Enter requestor name"
                    type="text"
                    {...register("requestorName", { required: "Requestor name is required",
                      pattern: {
                            value: /^[A-Za-z\s]+(?:\s[A-Za-z]+)*$/,
                            message: "requestor name must contain letters only",
                          },
                     })}
                    className="w-full"
                  />
                  {errors.requestorName && <p className="text-red-500 text-sm">{errors.requestorName.message}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-base font-medium text-base-optimized mb-2 block">
                      Requestor Contact <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      placeholder="Enter contact number"
                      type="text"
                      {...register("requestorContact", {
                        required: "Requester contact is required",
                        validate: (value) => {
                          if (!mode) return "Select mode first";

                        
                          if (["Phone", "WhatsApp", "Walk-in"].includes(mode)) {
                            const numberRegex = /^[0-9]{10,15}$/;
                            return (
                              numberRegex.test(value) ||
                              "Enter a valid phone number (10–15 digits)"
                            );
                          }

                         
                          if (mode === "Email") {
                            const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
                            return emailRegex.test(value) || "Enter a valid email address";
                          }

                          return true;
                        },
                      })}
                      className="w-full"
                    />
                    {errors.requestorContact && (
                      <p className="text-red-500 text-sm">{errors.requestorContact.message}</p>
                    )}
                  </div>
                  <div>
                    <Label className="text-base font-medium text-base-optimized mb-2 block">
                      Mode of Transport
                    </Label>
                    <Controller
                      control={control}
                      name="transportMode"
                      render={({ field }) => (
                        <Select value={field.value} onValueChange={(v) => field.onChange(v)}>
                          <SelectTrigger className="w-full text-base-optimized">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {[
                              "Select transport mode",
                              "Wheelchair",
                              "Stretcher",
                              "Walking",
                              "Crutches",
                              "Walker",
                              "Carry Chair",
                              "Ambulatory",
                            ].map((opt) => (
                              <SelectItem key={opt} value={opt}>
                                {opt}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Patient Information */}
            <Card className="overflow-hidden w-full">
              <CardHeader className="header-bg-soft pb-6">
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Patient Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-base font-medium text-base-optimized mb-2 block">
                      Patient Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      placeholder="Enter patient name"
                      type="text"
                      {...register("patientName", { required: "Patient name is required",
                        pattern: {
                            value: /^[A-Za-z\s]+(?:\s[A-Za-z]+)*$/,
                            message: "patient name must contain letters only",
                          },
                       })}
                      className="w-full"
                    />
                    {errors.patientName && <p className="text-red-500 text-sm">{errors.patientName.message}</p>}
                  </div>
                  <div>
                    <Label className="text-base font-medium text-base-optimized mb-2 block">
                      NRIC <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      placeholder="S****567Z"
                      type="text"
                      {...register("nric", {
                        required: "NRIC is required",
                        // adjust pattern if you have a specific one; this is example
                        pattern: {
                          value: /^[A-Za-z0-9\-\s]+$/,
                          message: "Invalid NRIC format",
                        },
                      })}
                      className="w-full"
                    />
                    {errors.nric && <p className="text-red-500 text-sm">{errors.nric.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <Label className="text-base font-medium text-base-optimized mb-2 block">
                      Age
                    </Label>
                    <Input placeholder="65" type="number" {...register("age")} className="w-full" />
                  </div>
                  <div>
                    <Label className="text-base font-medium text-base-optimized mb-2 block">
                      Weight (KG)
                    </Label>
                    <Input placeholder="70" type="number" {...register("weight")} className="w-full" />
                  </div>
                  <div>
                    <Label className="text-base font-medium text-base-optimized mb-2 block">
                      Gender
                    </Label>
                    <Controller
                      control={control}
                      name="gender"
                      render={({ field }) => (
                        <Select value={field.value} onValueChange={(v) => field.onChange(v)}>
                          <SelectTrigger className="w-full text-base-optimized">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {["Male", "Female"].map((opt) => (
                              <SelectItem key={opt} value={opt}>
                                {opt}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-base font-medium text-base-optimized mb-2 block">
                    Patient Contact <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    placeholder="+65 XXXX XXXX"
                    type="text"
                    {...register("patientContact", {
                      required: "Patient contact is required",
                      pattern: {
                        value: /^[0-9+()\-\s]*$/,
                        message: "Invalid contact format",
                      },
                    })}
                    className="w-full"
                  />
                  {errors.patientContact && <p className="text-red-500 text-sm">{errors.patientContact.message}</p>}
                </div>

                <div>
                  <Label className="text-base font-medium text-base-optimized mb-2 block">
                    Patient's Condition | Chief Complaint
                  </Label>
                  <Textarea
                    placeholder="Describe patient's condition or chief complaint..."
                    {...register("patientCondition")}
                  />
                </div>

                <div className="bg-gray-200 h-px my-4"></div>

                <div className="space-y-4">
                  <h4 className="text-base font-medium text-[#2160AD]">Next of Kin Details</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-base font-medium text-base-optimized mb-2 block">
                        NOK Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        placeholder="Enter NOK name"
                        type="text"
                        {...register("nokName", { required: "NOK name is required",
                          pattern: {
                            value: /^[A-Za-z\s]+(?:\s[A-Za-z]+)*$/,
                            message: "NOK name must contain letters only",
                          },
                         },

                        )}
                        className="w-full"
                      />
                      {errors.nokName && <p className="text-red-500 text-sm">{errors.nokName.message}</p>}
                    </div>
                    <div>
                      <Label className="text-base font-medium text-base-optimized mb-2 block">
                        NOK Contact <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        placeholder="+65 9123 4567"
                        type="text"
                        {...register("nokContact", {
                          required: "NOK contact number is required",
                          pattern: {
                            value: /^[0-9]+$/, // only digits allowed
                            message: "Only numbers are allowed",
                          },
                          minLength: {
                            value: 10,
                            message: "Must be at least 10 digits",
                          },
                          maxLength: {
                            value: 15,
                            message: "Must be at most 15 digits",
                          },
                        })}
                        className="w-full"
                      />
                      {errors.nokContact && <p className="text-red-500 text-sm">{errors.nokContact.message}</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-base font-medium text-base-optimized mb-2 block">
                        Relationship
                      </Label>
                      <Controller
                        control={control}
                        name="nokRelation"
                        render={({ field }) => (
                          <Select value={field.value} onValueChange={(v) => field.onChange(v)}>
                            <SelectTrigger className="w-full text-base-optimized">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {["Parent", "Spouse", "Child", "Sibling", "Friend", "Other"].map((opt) => (
                                <SelectItem key={opt} value={opt}>
                                  {opt}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        )}
                      />
                    </div>
                    <div>
                      <Label className="text-base font-medium text-base-optimized mb-2 block">
                        Accompanying NOK <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        type="number"
                        {...register("nokAccompany", { required: "Provide number of accompanying NOK" })}
                        className="w-full"
                      />
                      {errors.nokAccompany && <p className="text-red-500 text-sm">{errors.nokAccompany.message}</p>}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trip Details */}
            <Card className="overflow-hidden w-full">
              <CardHeader className="header-bg-soft pb-6">
                <CardTitle className="flex items-center gap-2">
                  <Navigation className="w-5 h-5" />
                  Trip Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label className="text-base font-medium text-base-optimized mb-2 block">
                    Trip Type <span className="text-red-500">*</span>
                  </Label>
                  <div role="radiogroup" className="flex gap-4">
                    {(["one-way", "two-way", "three-way"] as const).map((type) => (
                      <div
                        key={type}
                        className="flex items-center space-x-2"
                        onClick={() => setValue("tripType", type)}
                      >
                        <button
                          type="button"
                          role="radio"
                          aria-checked={tripType === type}
                          className={`border-gray-300 aspect-square size-4 rounded-full transition-all relative bg-gray-200`}
                        >
                          {tripType === type && (
                            <Circle className="absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 fill-primary" />
                          )}
                        </button>
                        <Label className="font-medium text-base">
                          {type.charAt(0).toUpperCase() + type.slice(1).replace("-", " ")}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-200 h-px my-4"></div>

                {tripFields.map((trip, idx) => (
                  <div key={trip.id} className="border rounded-lg p-4 header-bg-soft/30">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 rounded-full bg-[#2160AD] text-white text-sm flex items-center justify-center font-medium">
                        {idx + 1}
                      </div>
                      <h4 className="text-base font-medium">Trip {idx + 1}</h4>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Pickup */}
                      <div className="space-y-4">
                        <div>
                          <Label className="text-base font-medium text-base-optimized mb-2 block">
                            Pickup Location <span className="text-red-500">*</span>
                          </Label>
                          <div className="relative">
                            <Input
                              placeholder="Search pickup location..."
                              type="text"
                              {...register(`trips.${idx}.pickupLocation` as const, {
                                required: "Pickup location is required",
                              })}
                              className="w-full"
                            />

                            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                              <Button
                                type="button"
                                size="icon"
                                variant="ghost"
                                className="h-6 w-6 p-0 hover:bg-gray-100 text-[#2160AD]"
                                title="Use current location"
                                onClick={() => {
                                  // optional: fill with a mock/fixed location or call geolocation
                                  setValue(`trips.${idx}.pickupLocation` as const, "Current Location");
                                }}
                              >
                                <MapPin className="w-3 h-3" />
                              </Button>
                            </div>

                            {errors?.trips?.[idx]?.pickupLocation && (
                              <p className="text-red-500 text-sm mt-1">
                                {errors.trips[idx]?.pickupLocation?.message}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col gap-6 rounded-xl border p-4 header-bg-soft/50 border-gray-200">
                          <div className="flex items-center gap-2 mb-3">
                            <Home className="w-4 h-4 text-[#2160AD]" />
                            <Label className="text-base font-medium">Address Details</Label>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div>
                              <Label className="text-base font-medium text-base-optimized mb-2 block">Block Number</Label>
                              <Input {...register(`trips.${idx}.pickupBlock` as const)} placeholder="e.g., 123" type="text" />
                            </div>
                            <div>
                              <Label className="text-base font-medium text-base-optimized mb-2 block">Unit Number</Label>
                              <Input {...register(`trips.${idx}.pickupUnit` as const)} placeholder="e.g., #12-34" type="text" />
                            </div>
                          </div>
                          <div className="mt-4 pt-4 border-t border-gray-200">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                              <div>
                                <Label className="text-base font-medium text-base-optimized mb-2 block">Ward Details</Label>
                                <Input {...register(`trips.${idx}.pickupWard` as const)} placeholder="e.g., Ward A" type="text" />
                              </div>
                              <div>
                                <Label className="text-base font-medium text-base-optimized mb-2 block">Room Number</Label>
                                <Input {...register(`trips.${idx}.pickupRoom` as const)} placeholder="e.g., 101" type="text" />
                              </div>
                              <div>
                                <Label className="text-base font-medium text-base-optimized mb-2 block">Bed Number</Label>
                                <Input {...register(`trips.${idx}.pickupBed` as const)} placeholder="e.g., A1" type="text" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Dropoff */}
                      <div className="space-y-4">
                        <div>
                          <Label className="text-base font-medium text-base-optimized mb-2 block">
                            Dropoff Location <span className="text-red-500">*</span>
                          </Label>
                          <div className="relative">
                            <Input
                              placeholder="Search dropoff location..."
                              {...register(`trips.${idx}.dropoffLocation` as const, {
                                required: "Dropoff location is required",
                              })}
                              className="pr-20 form-input-height"
                            />
                            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                              <Button
                                type="button"
                                size="icon"
                                variant="ghost"
                                className="h-6 w-6 p-0 hover:bg-gray-100 text-[#2160AD]"
                                title="Use current location"
                                onClick={() => setValue(`trips.${idx}.dropoffLocation` as const, "Current Location")}
                              >
                                <MapPin className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-6 rounded-xl border p-4 header-bg-soft/50 border-gray-200">
                          <div className="flex items-center gap-2 mb-3">
                            <Home className="w-4 h-4 text-[#2160AD]" />
                            <Label className="text-base font-medium">Address Details</Label>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div>
                              <Label className="text-base font-medium text-base-optimized mb-2 block">Block Number</Label>
                              <Input {...register(`trips.${idx}.dropoffBlock` as const)} placeholder="e.g., 123" type="text" />
                            </div>
                            <div>
                              <Label className="text-base font-medium text-base-optimized mb-2 block">Unit Number</Label>
                              <Input {...register(`trips.${idx}.dropoffUnit` as const)} placeholder="e.g., #12-34" type="text" />
                            </div>
                          </div>
                          <div className="mt-4 pt-4 border-t border-gray-200">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                              <div>
                                <Label className="text-base font-medium text-base-optimized mb-2 block">Ward Details</Label>
                                <Input {...register(`trips.${idx}.dropoffWard` as const)} placeholder="e.g., Ward A" type="text" />
                              </div>
                              <div>
                                <Label className="text-base font-medium text-base-optimized mb-2 block">Room Number</Label>
                                <Input {...register(`trips.${idx}.dropoffRoom` as const)} placeholder="e.g., 101" type="text" />
                              </div>
                              <div>
                                <Label className="text-base font-medium text-base-optimized mb-2 block">Bed Number</Label>
                                <Input {...register(`trips.${idx}.dropoffBed` as const)} placeholder="e.g., A1" type="text" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="max-w-md">
                        <Label className="text-base font-medium text-base-optimized mb-2 block">Pick up - Scheduled Time</Label>
                        <Input
                          type="time"
                          {...register(`trips.${idx}.scheduledTime`, {
                            required: "Pickup time is required",
                            validate: (value) => {
                              if (bookingTime && value === bookingTime) {
                                return "Pickup time and booking time cannot be the same";
                              }
                              return true;
                            },
                          })}
                          className="w-full"
                        />
                        {/* Show validation error message */}
                        {errors.trips?.[idx]?.scheduledTime && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.trips[idx].scheduledTime?.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                <div className="bg-gray-200 h-px my-4"></div>

                {/* Vehicle Assignment */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Car className="w-5 h-5 text-[#2160AD]" />
                    <h4 className="text-base-optimized font-semibold text-[#2160AD]">Vehicle Assignment</h4>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <Label className="text-base font-medium text-base-optimized mb-2 block">Vehicle Type</Label>
                      <Controller
                        control={control}
                        name="vehicleType"
                        render={({ field }) => (
                          <Select value={field.value} onValueChange={(v) => field.onChange(v)}>
                            <SelectTrigger className="w-full text-base-optimized">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {["Ambulance", "ICU Ambulance", "Patient Transport", "Wheelchair Vehicle"].map((opt) => (
                                <SelectItem key={opt} value={opt}>
                                  {opt}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        )}
                      />
                    </div>
                    <div>
                      <Label className="text-base font-medium text-base-optimized mb-2 block">Vehicle Number</Label>
                      <Controller
                        control={control}
                        name="vehicleNumber"
                        render={({ field }) => (
                          <Select value={field.value} onValueChange={(v) => field.onChange(v)}>
                            <SelectTrigger className="w-full text-base-optimized">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {["AMB001", "AMB002", "AMB003", "ICU001"].map((opt) => (
                                <SelectItem key={opt} value={opt}>
                                  {opt}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        )}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div>
                      <Label className="text-base font-medium text-base-optimized mb-2 block">MTO</Label>
                      <Input placeholder="Medical Transport Officer" type="text" {...register("mtoName", {
                        pattern: {
                          value: /^[A-Za-z\s]+(?:\s[A-Za-z]+)*$/,
                          message: "MTO name must contain letters only",
                        },
                      })} className="w-full" />
                    </div>
                    {errors.mtoName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.mtoName.message}
                      </p>
                    )}
                    <div>
                      <Label className="text-base font-medium text-base-optimized mb-2 block">EMT / EN / PRM</Label>
                      <Input placeholder="Emergency Medical Technician" type="text" {...register("staffName", {
                        pattern: {
                          value: /^[A-Za-z\s]+(?:\s[A-Za-z]+)*$/,
                          message: "EMT name must contain letters only",
                        },
                      })} className="w-full" />
                    </div>
                    {errors.staffName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.staffName.message}
                      </p>
                    )}
                    <div>
                      <Label className="text-base font-medium text-base-optimized mb-2 block">Escort (Person)</Label>
                      <Input placeholder="Escort name" type="text" {...register("escortName", {
                        pattern: {
                          value: /^[A-Za-z\s]+(?:\s[A-Za-z]+)*$/,
                          message: "Escort name must contain letters only",
                        },
                      })} className="w-full" />
                    </div>
                    {errors.escortName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.escortName.message}
                      </p>)}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Services */}
            <Card className="overflow-hidden w-full">
              <CardHeader className="header-bg-soft pb-6">
                <CardTitle className="flex items-center gap-2">
                  <Plus className="w-5 h-5" />
                  Services
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="flex gap-2 items-end">
                    <ServiceSearch value={serviceSearch} onChange={setServiceSearch} onSelect={handleServiceSelect} />
                    <Button size="icon" variant="outline" onClick={() => { /* optional: open modal */ }}>
                      <Plus className="w-5 h-5" />
                    </Button>
                  </div>

                  {/* QUICK ADD SECTION */}
                  <div>
                    <Label className="text-base font-medium text-base-optimized mb-2 block">Quick Add Services</Label>
                    <div className="flex flex-wrap gap-2">
                      {ALL_SERVICES.filter((svc) => !selectedServices.some((s: SelectedService) => s.name === svc.label))
                        .slice(0, 4)
                        .map((svc) => (
                          <Button
                            key={svc.value}
                            onClick={() => handleQuickAdd(svc)}
                            variant="outline"
                            size="sm"
                            className="border-[#2160AD]/30 hover:bg-[#2160AD]/10"
                          >
                            <Plus className="w-3 h-3 mr-1" />
                            {svc.label}
                          </Button>
                        ))}
                    </div>
                  </div>
                </div>

                {serviceFields.length > 0 && (
                  <div>
                    <Label className="text-base-optimized font-medium mb-3 block">Added Services</Label>
                    <div className="border rounded-lg overflow-hidden">
                      <div className="header-bg-soft px-4 py-2 border-b">
                        <div className="grid grid-cols-6 gap-4 text-sm font-medium text-gray-700">
                          <div className="col-span-2">Service Name</div>
                          <div>Quantity</div>
                          <div>Unit</div>
                          <div>Total Cost</div>
                          <div>Action</div>
                        </div>
                      </div>
                      <div className="divide-y">
                        {serviceFields.map((svc, index) => {
                          const svcQty = (selectedServices[index]?.quantity) ?? svc.quantity ?? 1;
                          const svcPrice = (selectedServices[index]?.price) ?? svc.price ?? 0;
                          const total = svcPrice * svcQty;
                          return (
                            <div key={svc.id} className="px-4 py-3 hover:header-bg-soft">
                              <div className="grid grid-cols-6 gap-4 items-center">
                                <div className="col-span-2 font-medium text-base-optimized">{svc.name}</div>
                                <div>
                                  <Input
                                    type="number"
                                    min="0"
                                    {...register(`selectedServices.${index}.quantity` as const, {
                                      valueAsNumber: true,
                                      min: { value: 0, message: "Minimum 0" },
                                    })}
                                    className="w-16 h-8 text-sm"
                                  />
                                </div>
                                <div className="text-gray-600">{svc.unit}</div>
                                <div className="font-medium">{formatPrice(total)}</div>
                                <div>
                                  <Button
                                    onClick={() => removeService(index)}
                                    variant="ghost"
                                    className="text-red-500 hover:text-red-700"
                                    size="icon"
                                    type="button"
                                  >
                                    <X className="w-3 h-3" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Billing Summary */}
            <Card className="overflow-hidden w-full">
              <CardHeader className="header-bg-soft pb-6">
                <CardTitle className="flex items-center gap-2">
                  <Car className="w-5 h-5" />
                  Billing Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-6 rounded-lg border">
                  <div className="font-semibold mb-4 text-[#2160AD] text-lg">Billing Summary</div>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between items-start py-3 border-b border-gray-200">
                      <div className="flex-1">
                        <span className="font-medium text-base">Base Transport Fee</span>
                        <div className="text-sm text-gray-600 mt-1">
                          {tripFields.some((t) => t?.pickupLocation && t?.dropoffLocation)
                            ? "Calculated from route"
                            : "No pickup location selected"}
                        </div>
                      </div>
                      <span className="text-base font-semibold ml-4">$0.00</span>
                    </div>
                    {serviceFields.length > 0 ? (
                      serviceFields.map((svc, idx) => (
                        <div key={svc.id} className="flex justify-between py-2 text-sm border-b border-dashed">
                          <div className="flex-1">
                            <span className="font-medium text-base">{svc.name}</span>
                            <div className="text-sm text-gray-600 mt-1">{formatPrice((selectedServices[idx]?.price ?? svc.price) ?? 0)}</div>
                          </div>
                          <span className="font-medium">
                            {formatPrice(((selectedServices[idx]?.price ?? svc.price) ?? 0) * ((selectedServices[idx]?.quantity ?? svc.quantity) ?? 1))}
                          </span>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-4 text-gray-500">
                        <div className="text-base">No additional services selected</div>
                        <div className="text-sm mt-1">Add services above to see breakdown</div>
                      </div>
                    )}
                  </div>
                  <div className="bg-gray-200 h-px"></div>
                  <div className="flex justify-between font-semibold text-lg text-[#2160AD] pt-4">
                    <span>Total Amount:</span>
                    <span>{formatPrice(servicesTotal)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Remarks */}
            <Card className="overflow-hidden w-full">
              <CardHeader className="header-bg-soft pb-6">
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Additional Remarks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Add any additional remarks or special instructions..."
                  {...register("patientCondition")}
                />
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-end gap-3 pt-6 border-t">
              <Button variant="outline" className="px-6 lg:px-8" type="button" onClick={() => {
                // reset or redirect - keep behavior similar to original Cancel
                // optionally: reset() from useForm if you want to clear
              }}>
                Cancel
              </Button>
              <Button className="px-6 lg:px-8" type="submit">Create Case</Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
