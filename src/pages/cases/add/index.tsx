"use client";

import React, { useState, useMemo } from "react";
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
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { ServiceSearch } from "../ServiceSearch";

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

/* -------------------------------------------------------------------------- */
/*                               MAIN COMPONENT                               */
/* -------------------------------------------------------------------------- */
export default function CasesAddPage() {
  const [status, setStatus] = useState("Open");
  const [intake, setIntake] = useState("Phone Call");
  const [transport, setTransport] = useState("Select transport mode");
  const [gender, setGender] = useState("Male");

  const [tripType, setTripType] = useState<"one-way" | "two-way" | "three-way">(
    "one-way"
  );

  const [vehicleType, setVehicleType] = useState("Ambulance");
  const [vehicleNumber, setVehicleNumber] = useState("AMB001");

  /* Requestor */
  const [requestorName, setRequestorName] = useState("");
  const [requestorContact, setRequestorContact] = useState("");

  /* Patient */
  const [patientName, setPatientName] = useState("");
  const [patientNric, setPatientNric] = useState("");
  const [patientAge, setPatientAge] = useState("");
  const [patientWeight, setPatientWeight] = useState("");
  const [patientContact, setPatientContact] = useState("");
  const [patientCondition, setPatientCondition] = useState("");

  /* Next of Kin */
  const [nokName, setNokName] = useState("");
  const [nokContact, setNokContact] = useState("");
  const [nokRelationship, setNokRelationship] = useState("Parent");
  const [nokAccompanying, setNokAccompanying] = useState("0");

  /* Times */
  const [bookingTime, setBookingTime] = useState("");
  const [bookingDate, setBookingDate] = useState("");

  /* Vehicle assignment */
  const [mto, setMto] = useState("");
  const [emt, setEmt] = useState("");
  const [escort, setEscort] = useState("");

  /* Services */
  const [serviceSearch, setServiceSearch] = useState("");
  const [selectedServices, setSelectedServices] = useState<SelectedService[]>([]);

  /* ------------------------------ Trip state ----------------------------- */
  const [trips, setTrips] = useState<Trip[]>([
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
  ]);

  React.useEffect(() => {
    const count = tripType === "one-way" ? 1 : tripType === "two-way" ? 2 : 3;
    setTrips((prev) => {
      const kept = prev.slice(0, count);
      const missing = count - kept.length;
      return [
        ...kept,
        ...Array.from({ length: missing }, (_, i) => ({
          id: `trip-${kept.length + i + 1}`,
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
        })),
      ];
    });
  }, [tripType]);

  const updateTrip = (tripId: string, field: keyof Trip, value: string) => {
    setTrips((prev) =>
      prev.map((t) => (t.id === tripId ? { ...t, [field]: value } : t))
    );
  };

  const formatPrice = (amount: number) => `$${amount.toFixed(2)}`;

  const servicesTotal = useMemo(() => {
    return selectedServices.reduce((sum, s) => sum + s.price * s.quantity, 0);
  }, [selectedServices]);

  const handleServiceSelect = (service: any) => {
    if (!service) return;
    const already = selectedServices.some((s) => s.name === service.label);
    if (already) return;

    const newService: SelectedService = {
      id: `${service.value}-${Date.now()}`,
      name: service.label,
      price: parseFloat(service.price.replace("$", "")),
      unit: "per hour",
      quantity: 1,
    };
    setSelectedServices((prev) => [...prev, newService]);
    setServiceSearch("");
  };


  return (
    <>
      <FunctionalHeader
        title="Add New Case"
        breadcrumb={[
          { label: 'Operations' },
          { label: 'Cases' },
          { label: 'Add New Case' },
        ]}
      />
      <div className="flex-1 w-full overflow-auto">
        <div className="p-4 lg:p-6 space-y-6 w-full">
          {/* Status */}
          <div className="max-w-[300px]">
            <Label className="text-base font-medium text-base-optimized mb-2 block">
              Status <span className="text-red-500">*</span>
            </Label>
            <Select value={status} onValueChange={setStatus}>
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
                <Select value={intake} onValueChange={setIntake}>
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
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label className="text-base font-medium text-base-optimized mb-2 block">
                    Booking Date <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    type="date"
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    placeholder="Select booking date"
                    className="w-full"
                  />
                </div>
                <div>
                  <Label className="text-base font-medium text-base-optimized mb-2 block">
                    Booking Time <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    type="time"
                    value={bookingTime}
                    onChange={(e) => setBookingTime(e.target.value)}
                    className="w-full"
                  />
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
                  value={requestorName}
                  onChange={(e) => setRequestorName(e.target.value)}
                  className="w-full"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label className="text-base font-medium text-base-optimized mb-2 block">
                    Requestor Contact <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    placeholder="Enter contact number"
                    type="text"
                    value={requestorContact}
                    onChange={(e) => setRequestorContact(e.target.value)}
                    className="w-full"
                  />
                </div>
                <div>
                  <Label className="text-base font-medium text-base-optimized mb-2 block">
                    Mode of Transport
                  </Label>
                  <Select value={transport} onValueChange={setTransport}>
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
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    className="w-full"
                  />
                </div>
                <div>
                  <Label className="text-base font-medium text-base-optimized mb-2 block">
                    NRIC <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    placeholder="S****567Z"
                    type="text"
                    value={patientNric}
                    onChange={(e) => setPatientNric(e.target.value)}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <Label className="text-base font-medium text-base-optimized mb-2 block">
                    Age
                  </Label>
                  <Input
                    placeholder="65"
                    type="number"
                    value={patientAge}
                    onChange={(e) => setPatientAge(e.target.value)}
                    className="w-full"
                  />
                </div>
                <div>
                  <Label className="text-base font-medium text-base-optimized mb-2 block">
                    Weight (KG)
                  </Label>
                  <Input
                    placeholder="70"
                    type="number"
                    value={patientWeight}
                    onChange={(e) => setPatientWeight(e.target.value)}
                    className="w-full"
                  />
                </div>
                <div>
                  <Label className="text-base font-medium text-base-optimized mb-2 block">
                    Gender
                  </Label>
                  <Select value={gender} onValueChange={setGender}>
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
                </div>
              </div>

              <div>
                <Label className="text-base font-medium text-base-optimized mb-2 block">
                  Patient Contact <span className="text-red-500">*</span>
                </Label>
                <Input
                  placeholder="+65 XXXX XXXX"
                  type="text"
                  value={patientContact}
                  onChange={(e) => setPatientContact(e.target.value)}
                  className="w-full"
                />
              </div>

              <div>
                <Label className="text-base font-medium text-base-optimized mb-2 block">
                  Patient's Condition | Chief Complaint
                </Label>
                <Textarea
                  placeholder="Describe patient's condition or chief complaint..."
                  value={patientCondition}
                  onChange={(e) => setPatientCondition(e.target.value)}
                />
              </div>

              <div className="bg-gray-200 h-px my-4"></div>

              <div className="space-y-4">
                <h4 className="text-base font-medium text-[#2160AD]">
                  Next of Kin Details
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-base font-medium text-base-optimized mb-2 block">
                      NOK Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      placeholder="Enter NOK name"
                      type="text"
                      value={nokName}
                      onChange={(e) => setNokName(e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Label className="text-base font-medium text-base-optimized mb-2 block">
                      NOK Contact <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      placeholder="+65 9123 4567"
                      type="text"
                      value={nokContact}
                      onChange={(e) => setNokContact(e.target.value)}
                      className="w-full"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-base font-medium text-base-optimized mb-2 block">
                      Relationship
                    </Label>
                    <Select value={nokRelationship} onValueChange={setNokRelationship}>
                      <SelectTrigger className="w-full text-base-optimized">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {["Parent", "Spouse", "Child", "Sibling", "Friend", "Other"].map(
                          (opt) => (
                            <SelectItem key={opt} value={opt}>
                              {opt}
                            </SelectItem>
                          )
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-base font-medium text-base-optimized mb-2 block">
                      Accompanying NOK <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      type="number"
                      value={nokAccompanying}
                      onChange={(e) => setNokAccompanying(e.target.value)}
                      className="w-full"
                    />
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
                      onClick={() => setTripType(type)}
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

              {trips.map((trip, idx) => (
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
                            value={trip.pickupLocation}
                            onChange={(e) => updateTrip(trip.id, "pickupLocation", e.target.value)}
                            className="w-full"
                          />
                          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                            <Button
                              type="button"
                              size="icon"
                              variant="ghost"
                              className="h-6 w-6 p-0 hover:bg-gray-100 text-[#2160AD]"
                              title="Use current location"
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
                            <Label className="text-base font-medium text-base-optimized mb-2 block">
                              Block Number
                            </Label>
                            <Input
                              placeholder="e.g., 123"
                              type="text"
                              value={trip.pickupBlock}
                              onChange={(e) => updateTrip(trip.id, "pickupBlock", e.target.value)}
                              className="w-full"
                            />
                          </div>
                          <div>
                            <Label className="text-base font-medium text-base-optimized mb-2 block">
                              Unit Number
                            </Label>
                            <Input
                              placeholder="e.g., #12-34"
                              type="text"
                              value={trip.pickupUnit}
                              onChange={(e) => updateTrip(trip.id, "pickupUnit", e.target.value)}
                              className="w-full"
                            />
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            <div>
                              <Label className="text-base font-medium text-base-optimized mb-2 block">
                                Ward Details
                              </Label>
                              <Input
                                placeholder="e.g., Ward A"
                                type="text"
                                value={trip.pickupWard}
                                onChange={(e) => updateTrip(trip.id, "pickupWard", e.target.value)}
                                className="w-full"
                              />
                            </div>
                            <div>
                              <Label className="text-base font-medium text-base-optimized mb-2 block">
                                Room Number
                              </Label>
                              <Input
                                placeholder="e.g., 101"
                                type="text"
                                value={trip.pickupRoom}
                                onChange={(e) => updateTrip(trip.id, "pickupRoom", e.target.value)}
                                className="w-full"
                              />
                            </div>
                            <div>
                              <Label className="text-base font-medium text-base-optimized mb-2 block">
                                Bed Number
                              </Label>
                              <Input
                                placeholder="e.g., A1"
                                type="text"
                                value={trip.pickupBed}
                                onChange={(e) => updateTrip(trip.id, "pickupBed", e.target.value)}
                                className="w-full"
                              />
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
                            id="dropoff"
                            placeholder="Search dropoff location..."
                            value={trip.dropoffLocation}
                            onChange={(e) => updateTrip(trip.id, "dropoffLocation", e.target.value)}
                            className="pr-20 form-input-height"
                          />
                          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                            <Button
                              type="button"
                              size="icon"
                              variant="ghost"
                              className="h-6 w-6 p-0 hover:bg-gray-100 text-[#2160AD]"
                              title="Use current location"
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
                            <Label className="text-base font-medium text-base-optimized mb-2 block">
                              Block Number
                            </Label>
                            <Input
                              placeholder="e.g., 123"
                              type="text"
                              value={trip.dropoffBlock}
                              onChange={(e) => updateTrip(trip.id, "dropoffBlock", e.target.value)}
                              className="w-full"
                            />
                          </div>
                          <div>
                            <Label className="text-base font-medium text-base-optimized mb-2 block">
                              Unit Number
                            </Label>
                            <Input
                              placeholder="e.g., #12-34"
                              type="text"
                              value={trip.dropoffUnit}
                              onChange={(e) => updateTrip(trip.id, "dropoffUnit", e.target.value)}
                              className="w-full"
                            />
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            <div>
                              <Label className="text-base font-medium text-base-optimized mb-2 block">
                                Ward Details
                              </Label>
                              <Input
                                placeholder="e.g., Ward A"
                                type="text"
                                value={trip.dropoffWard}
                                onChange={(e) => updateTrip(trip.id, "dropoffWard", e.target.value)}
                                className="w-full"
                              />
                            </div>
                            <div>
                              <Label className="text-base font-medium text-base-optimized mb-2 block">
                                Room Number
                              </Label>
                              <Input
                                placeholder="e.g., 101"
                                type="text"
                                value={trip.dropoffRoom}
                                onChange={(e) => updateTrip(trip.id, "dropoffRoom", e.target.value)}
                                className="w-full"
                              />
                            </div>
                            <div>
                              <Label className="text-base font-medium text-base-optimized mb-2 block">
                                Bed Number
                              </Label>
                              <Input
                                placeholder="e.g., A1"
                                type="text"
                                value={trip.dropoffBed}
                                onChange={(e) => updateTrip(trip.id, "dropoffBed", e.target.value)}
                                className="w-full"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="max-w-md">
                      <Label className="text-base font-medium text-base-optimized mb-2 block">
                        Pick up - Scheduled Time
                      </Label>
                      <Input
                        type="time"
                        value={trip.scheduledTime}
                        onChange={(e) => updateTrip(trip.id, "scheduledTime", e.target.value)}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              ))}

              <div className="bg-gray-200 h-px my-4"></div>

              {/* Vehicle Assignment */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <Car className="w-5 h-5 text-[#2160AD]" />
                  <h4 className="text-base-optimized font-semibold text-[#2160AD]">
                    Vehicle Assignment
                  </h4>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-base font-medium text-base-optimized mb-2 block">
                      Vehicle Type
                    </Label>
                    <Select value={vehicleType} onValueChange={setVehicleType}>
                      <SelectTrigger className="w-full text-base-optimized">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {["Ambulance", "ICU Ambulance", "Patient Transport", "Wheelchair Vehicle"].map(
                          (opt) => (
                            <SelectItem key={opt} value={opt}>
                              {opt}
                            </SelectItem>
                          )
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-base font-medium text-base-optimized mb-2 block">
                      Vehicle Number
                    </Label>
                    <Select value={vehicleNumber} onValueChange={setVehicleNumber}>
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
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <Label className="text-base font-medium text-base-optimized mb-2 block">
                      MTO
                    </Label>
                    <Input
                      placeholder="Medical Transport Officer"
                      type="text"
                      value={mto}
                      onChange={(e) => setMto(e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Label className="text-base font-medium text-base-optimized mb-2 block">
                      EMT / EN / PRM
                    </Label>
                    <Input
                      placeholder="Emergency Medical Technician"
                      type="text"
                      value={emt}
                      onChange={(e) => setEmt(e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Label className="text-base font-medium text-base-optimized mb-2 block">
                      Escort (Person)
                    </Label>
                    <Input
                      placeholder="Escort name"
                      type="text"
                      value={escort}
                      onChange={(e) => setEscort(e.target.value)}
                      className="w-full"
                    />
                  </div>
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
                  <ServiceSearch
                    value={serviceSearch}
                    onChange={setServiceSearch}
                    onSelect={handleServiceSelect}
                  />
                  <Button size='icon' variant='outline'><Plus className="w-5 h-5" /></Button>
                </div>
                <div>
                  <Label className="text-base font-medium text-base-optimized mb-2 block">
                    Quick Add Services
                  </Label>
                  <div className="flex flex-wrap gap-2">
                    {["Oxygen Support", "Wheelchair Service", "Stretcher Service", "Medical Escort"].map(
                      (service) => (
                        <Button
                          key={service}
                          onClick={() => setServiceSearch(service)}
                          variant="outline"
                          size="sm"
                          className="border-[#2160AD]/30 hover:bg-[#2160AD]/10"
                        >
                          <Plus className="w-3 h-3 mr-1" />
                          {service}
                        </Button>
                      )
                    )}
                  </div>
                </div>
              </div>

              {selectedServices.length > 0 && (
                <div>
                  <Label className="text-base-optimized font-medium mb-3 block">
                    Added Services
                  </Label>
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
                      {selectedServices.map((svc) => {
                        const total = svc.price * svc.quantity;
                        return (
                          <div key={svc.id} className="px-4 py-3 hover:header-bg-soft">
                            <div className="grid grid-cols-6 gap-4 items-center">
                              <div className="col-span-2 font-medium text-base-optimized">
                                {svc.name}
                              </div>
                              <div>
                                <Input
                                  type="number"
                                  min="0"
                                  value={svc.quantity}
                                  onChange={(e) => {
                                    const qty = Math.max(0, parseInt(e.target.value) || 0);
                                    setSelectedServices((prev) =>
                                      prev.map((s) =>
                                        s.id === svc.id ? { ...s, quantity: qty } : s
                                      )
                                    );
                                  }}
                                  className="w-16 h-8 text-sm"
                                />
                              </div>
                              <div className="text-gray-600">{svc.unit}</div>
                              <div className="font-medium">{formatPrice(total)}</div>
                              <div>
                                <Button
                                  onClick={() =>
                                    setSelectedServices((prev) =>
                                      prev.filter((s) => s.id !== svc.id)
                                    )
                                  }
                                  variant="ghost"
                                  className="text-red-500 hover:text-red-700"
                                >
                                  Remove
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
              <div className="header-bg-soft p-6 rounded-lg border">
                <div className="font-semibold mb-4 text-[#2160AD] text-lg">
                  Billing Summary
                </div>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-start py-3 border-b border-gray-200">
                    <div className="flex-1">
                      <span className="font-medium text-base">Base Transport Fee</span>
                      <div className="text-sm text-gray-600 mt-1">
                        {trips.some((t) => t.pickupLocation && t.dropoffLocation)
                          ? "Calculated from route"
                          : "No pickup/dropoff selected"}
                      </div>
                    </div>
                    <span className="text-base font-semibold ml-4">$0.00</span>
                  </div>
                  {selectedServices.length > 0 ? (
                    selectedServices.map((svc) => (
                      <div key={svc.id} className="flex justify-between py-2 text-sm border-b border-dashed">
                        <div className="flex-1">
                          <span className="font-medium text-base">{svc.name}</span>
                          <div className="text-sm text-gray-600 mt-1">
                            {formatPrice(svc.price)}
                          </div>
                        </div>
                        <span className="font-medium">{formatPrice(svc.price * svc.quantity)}</span>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-4 text-gray-500">
                      <div className="text-base">No additional services selected</div>
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
                value={patientCondition}
                onChange={(e) => setPatientCondition(e.target.value)}
              />
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-3 pt-6 border-t">
            <Button variant="outline" className="px-6 lg:px-8">
              Cancel
            </Button>
            <Button className="px-6 lg:px-8">
              Create Case
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}