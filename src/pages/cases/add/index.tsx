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
import FunctionalHeader from "@/layout/FunctionalHeader";
import SelectDropdown from "@/components/theme-ui/SelectDropdown";
import { Textarea } from "@/components/ui/textarea";
import { InputBox } from "@/components/theme-ui/InputBox";
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

/* One trip – all fields that belong to a single leg */
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
  /* ------------------------------ Global state ----------------------------- */
  const [status, setStatus] = useState("All Status");
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

  /* Vehicle assignment */
  const [mto, setMto] = useState("");
  const [emt, setEmt] = useState("");
  const [escort, setEscort] = useState("");

  /* Services */
  const [serviceSearch, setServiceSearch] = useState("");
  const [selectedServices, setSelectedServices] = useState<SelectedService[]>(
    []
  );

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

  /* When trip type changes → keep existing trips (up to the new count) */
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

  /* Helper to update a field inside a specific trip */
  const updateTrip = (tripId: string, field: keyof Trip, value: string) => {
    setTrips((prev) =>
      prev.map((t) => (t.id === tripId ? { ...t, [field]: value } : t))
    );
  };

  /* ------------------------------ Utils ------------------------------ */
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

  /* --------------------------------------------------------------------- */
  return (
    <>
      <FunctionalHeader title="Add New Case" />
      <div className="flex-1 w-full overflow-auto">
        <div className="p-4 lg:p-6 space-y-6 w-full">
          {/* Status */}
          <div className="max-w-[300px]">
            <label className="text-base font-medium text-base-optimized mb-2 block">
              Status <span className="text-red-500">*</span>
            </label>
            <SelectDropdown
              value={status}
              options={options}
              onChange={setStatus}
            />
          </div>

          {/* Booking & Requestor Information */}
          <div className="bg-white text-gray-900 flex flex-col gap-6 rounded-xl border border-[#2160AD]/20 w-full">
            <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 header-bg-soft">
              <h4 className="leading-none text-base flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Booking & Requestor Information
              </h4>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="text-base font-medium text-base-optimized mb-2 block">
                  Mode of Intake <span className="text-red-500">*</span>
                </label>
                <SelectDropdown
                  value={intake}
                  options={["Phone Call", "Whatapp", "Email", "Walk-in"]}
                  onChange={setIntake}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-base font-medium text-base-optimized mb-2 block">
                    Booking Date <span className="text-red-500">*</span>
                  </label>
                  <button className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm transition-all border bg-white hover:bg-gray-50 h-9 px-4 py-2 w-full justify-start text-left">
                    <Calendar className="mr-2 h-4 w-4" />
                    Select booking date
                  </button>
                </div>
                <div>
                  <InputBox
                    label="Booking Time"
                    type="time"
                    value={bookingTime}
                    onChange={(e) => setBookingTime(e.target.value)}
                    placeholder=""
                    required={true}
                  />
                </div>
              </div>
              <div className="bg-gray-200 h-px my-4"></div>
              <div>
                <InputBox
                  placeholder="Enter requestor name"
                  label="Requestor Name"
                  type="text"
                  value={requestorName}
                  onChange={(e) => setRequestorName(e.target.value)}
                  required={true}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <InputBox
                    placeholder="Enter contact number"
                    label="Requestor Contact"
                    type="text"
                    value={requestorContact}
                    onChange={(e) => setRequestorContact(e.target.value)}
                    required={true}
                  />
                </div>
                <div>
                  <label className="text-base font-medium text-base-optimized mb-2 block">
                    Mode of Transport
                  </label>
                  <SelectDropdown
                    value={transport}
                    options={[
                      "Select transport mode",
                      "Wheelchair",
                      "Stretcher",
                      "Walking",
                      "Crutches",
                      "Walker",
                      "Carry Chair",
                      "Ambulatory",
                    ]}
                    onChange={setTransport}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Patient Information */}
          <div className="bg-white text-gray-900 flex flex-col gap-6 rounded-xl border border-[#2160AD]/20 w-full">
            <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 header-bg-soft">
              <h4 className="leading-none text-base flex items-center gap-2">
                <User className="w-5 h-5" />
                Patient Information
              </h4>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <InputBox
                    placeholder="Enter patient name"
                    label="Patient Name"
                    type="text"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    required={true}
                  />
                </div>
                <div>
                  <InputBox
                    placeholder="S****567Z"
                    label="NRIC"
                    type="text"
                    value={patientNric}
                    onChange={(e) => setPatientNric(e.target.value)}
                    required={true}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <InputBox
                    placeholder="65"
                    label="Age"
                    type="number"
                    value={patientAge}
                    onChange={(e) => setPatientAge(e.target.value)}
                    required={false}
                  />
                </div>
                <div>
                  <InputBox
                    placeholder="70"
                    label="Weight (KG)"
                    type="number"
                    value={patientWeight}
                    onChange={(e) => setPatientWeight(e.target.value)}
                    required={false}
                  />
                </div>
                <div>
                  <label className="text-base font-medium text-base-optimized mb-2 block">
                    Gender
                  </label>
                  <SelectDropdown
                    value={gender}
                    options={["Male", "Female"]}
                    onChange={setGender}
                  />
                </div>
              </div>
              <div>
                <InputBox
                  placeholder="+65 XXXX XXXX"
                  label="Patient Contact"
                  type="text"
                  value={patientContact}
                  onChange={(e) => setPatientContact(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="text-base font-medium text-base-optimized mb-2 block">
                  Patient's Condition | Chief Complaint
                </label>
                <Textarea
                  placeholder="Describe patient's condition or chief complaint..."
                  value={patientCondition}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setPatientCondition(e.target.value)
                  }
                />
              </div>
              <div className="bg-gray-200 h-px my-4"></div>
              <div className="space-y-4">
                <h4 className="text-base font-medium text-[#2160AD]">
                  Next of Kin Details
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <InputBox
                      placeholder="Enter NOK name"
                      label="NOK Name"
                      type="text"
                      value={nokName}
                      onChange={(e) => setNokName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <InputBox
                      placeholder="+65 9123 4567"
                      label="NOK Contact"
                      type="text"
                      value={nokContact}
                      onChange={(e) => setNokContact(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-base font-medium text-base-optimized mb-2 block">
                      Relationship
                    </label>
                    <SelectDropdown
                      value={nokRelationship}
                      options={[
                        "Parent",
                        "Spouse",
                        "Child",
                        "Sibling",
                        "Friend",
                        "Other",
                      ]}
                      onChange={setNokRelationship}
                    />
                  </div>
                  <div>
                    <InputBox
                      label="Accompanying NOK"
                      type="number"
                      value={nokAccompanying}
                      onChange={(e) => setNokAccompanying(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trip Details */}
          <div className="bg-white text-gray-900 flex flex-col gap-6 rounded-xl border border-[#2160AD]/20 w-full">
            <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 header-bg-soft">
              <h4 className="leading-none text-base flex items-center gap-2">
                <Navigation className="w-5 h-5" />
                Trip Details
              </h4>
            </div>
            <div className="p-6 space-y-6">
              {/* Trip Type Radio */}
              <div>
                <label className="text-base font-medium text-base-optimized mb-2 block">
                  Trip Type <span className="text-red-500">*</span>
                </label>
                <div role="radiogroup" className="flex gap-4">
                  {(["one-way", "two-way", "three-way"] as const).map(
                    (type) => (
                      <div
                        key={type}
                        className="flex items-center space-x-2 relative"
                        onClick={() => setTripType(type)}
                      >
                        <button
                          type="button"
                          role="radio"
                          aria-checked={tripType === type}
                          data-state={
                            tripType === type ? "checked" : "unchecked"
                          }
                          value={type}
                          className={`border-gray-300 aspect-square size-4 rounded-full transition-all relative bg-gray-200`}
                        >
                          {tripType === type && (
                            <Circle className="absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 fill-primary" />
                          )}
                        </button>
                        <label className="font-medium text-base">
                          {type.charAt(0).toUpperCase() +
                            type.slice(1).replace("-", " ")}
                        </label>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="bg-gray-200 h-px my-4"></div>

              {/* -------------------------- DYNAMIC TRIPS -------------------------- */}
              {trips.map((trip, idx) => (
                <div
                  key={trip.id}
                  className="border rounded-lg p-4 bg-gray-50/30"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 rounded-full bg-[#2160AD] text-white text-sm flex items-center justify-center font-medium">
                      {idx + 1}
                    </div>
                    <h4 className="text-base font-medium">Trip {idx + 1}</h4>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* ---- PICKUP ---- */}
                    <div className="space-y-4">
                      <div>
                        <InputBox
                          placeholder="Search pickup location..."
                          label="Pickup Location"
                          type="text"
                          value={trip.pickupLocation}
                          onChange={(e) =>
                            updateTrip(
                              trip.id,
                              "pickupLocation",
                              e.target.value
                            )
                          }
                          required={true}
                        />
                      </div>

                      <div className="flex flex-col gap-6 rounded-xl border p-4 bg-gray-50/50 border-gray-200">
                        <div className="flex items-center gap-2 mb-3">
                          <Home className="w-4 h-4 text-[#2160AD]" />
                          <label className="text-base font-medium">
                            Address Details
                          </label>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div>
                            <InputBox
                              placeholder="e.g., 123"
                              label="Block Number"
                              type="text"
                              value={trip.pickupBlock}
                              onChange={(e) =>
                                updateTrip(
                                  trip.id,
                                  "pickupBlock",
                                  e.target.value
                                )
                              }
                              required={false}
                            />
                          </div>
                          <div>
                            <InputBox
                              placeholder="e.g., #12-34"
                              label="Unit Number"
                              type="text"
                              value={trip.pickupUnit}
                              onChange={(e) =>
                                updateTrip(
                                  trip.id,
                                  "pickupUnit",
                                  e.target.value
                                )
                              }
                              required={false}
                            />
                          </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            <div>
                              <InputBox
                                placeholder="e.g., Ward A"
                                label="Ward Details"
                                type="text"
                                value={trip.pickupWard}
                                onChange={(e) =>
                                  updateTrip(
                                    trip.id,
                                    "pickupWard",
                                    e.target.value
                                  )
                                }
                                required={false}
                              />
                            </div>
                            <div>
                              <InputBox
                                placeholder="e.g., 101"
                                label="Room Number"
                                type="text"
                                value={trip.pickupRoom}
                                onChange={(e) =>
                                  updateTrip(
                                    trip.id,
                                    "pickupRoom",
                                    e.target.value
                                  )
                                }
                                required={false}
                              />
                            </div>
                            <div>
                              <InputBox
                                placeholder="e.g., A1"
                                label="Bed Number"
                                type="text"
                                value={trip.pickupBed}
                                onChange={(e) =>
                                  updateTrip(
                                    trip.id,
                                    "pickupBed",
                                    e.target.value
                                  )
                                }
                                required={false}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ---- DROPOFF ---- */}
                    <div className="space-y-4">
                      <div>
                        <InputBox
                          placeholder="Search dropoff location..."
                          label="Dropoff Location"
                          type="text"
                          value={trip.dropoffLocation}
                          onChange={(e) =>
                            updateTrip(
                              trip.id,
                              "dropoffLocation",
                              e.target.value
                            )
                          }
                          required={true}
                        />
                      </div>

                      <div className="flex flex-col gap-6 rounded-xl border p-4 bg-gray-50/50 border-gray-200">
                        <div className="flex items-center gap-2 mb-3">
                          <Home className="w-4 h-4 text-[#2160AD]" />
                          <label className="text-base font-medium">
                            Address Details
                          </label>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div>
                            <InputBox
                              placeholder="e.g., 123"
                              label="Block Number"
                              type="text"
                              value={trip.dropoffBlock}
                              onChange={(e) =>
                                updateTrip(
                                  trip.id,
                                  "dropoffBlock",
                                  e.target.value
                                )
                              }
                              required={false}
                            />
                          </div>
                          <div>
                            <InputBox
                              placeholder="e.g., #12-34"
                              label="Unit Number"
                              type="text"
                              value={trip.dropoffUnit}
                              onChange={(e) =>
                                updateTrip(
                                  trip.id,
                                  "dropoffUnit",
                                  e.target.value
                                )
                              }
                              required={false}
                            />
                          </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            <div>
                              <InputBox
                                placeholder="e.g., Ward A"
                                label="Ward Details"
                                type="text"
                                value={trip.dropoffWard}
                                onChange={(e) =>
                                  updateTrip(
                                    trip.id,
                                    "dropoffWard",
                                    e.target.value
                                  )
                                }
                                required={false}
                              />
                            </div>
                            <div>
                              <InputBox
                                placeholder="e.g., 101"
                                label="Room Number"
                                type="text"
                                value={trip.dropoffRoom}
                                onChange={(e) =>
                                  updateTrip(
                                    trip.id,
                                    "dropoffRoom",
                                    e.target.value
                                  )
                                }
                                required={false}
                              />
                            </div>
                            <div>
                              <InputBox
                                placeholder="e.g., A1"
                                label="Bed Number"
                                type="text"
                                value={trip.dropoffBed}
                                onChange={(e) =>
                                  updateTrip(
                                    trip.id,
                                    "dropoffBed",
                                    e.target.value
                                  )
                                }
                                required={false}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Scheduled Time for this trip */}
                  <div className="mt-4">
                    <div className="max-w-md">
                      <InputBox
                        label="Pick up - Scheduled Time"
                        type="time"
                        value={trip.scheduledTime}
                        onChange={(e) =>
                          updateTrip(trip.id, "scheduledTime", e.target.value)
                        }
                        required={false}
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
                    <label className="text-base font-medium text-base-optimized mb-2 block">
                      Vehicle Type
                    </label>
                    <SelectDropdown
                      value={vehicleType}
                      options={[
                        "Ambulance",
                        "ICU Ambulance",
                        "Patient Transport",
                        "Wheelchair Vehicle",
                      ]}
                      onChange={setVehicleType}
                    />
                  </div>
                  <div>
                    <label className="text-base font-medium text-base-optimized mb-2 block">
                      Vehicle Number
                    </label>
                    <SelectDropdown
                      value={vehicleNumber}
                      options={["AMB001", "AMB002", "AMB003", "ICU001"]}
                      onChange={setVehicleNumber}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <InputBox
                      placeholder="Medical Transport Officer"
                      label="MTO"
                      type="text"
                      value={mto}
                      onChange={(e) => setMto(e.target.value)}
                      required={false}
                    />
                  </div>
                  <div>
                    <InputBox
                      placeholder="Emergency Medical Technician"
                      label="EMT / EN / PRM"
                      type="text"
                      value={emt}
                      onChange={(e) => setEmt(e.target.value)}
                      required={false}
                    />
                  </div>
                  <div>
                    <InputBox
                      placeholder="Escort name"
                      label="Escort (Person)"
                      type="text"
                      value={escort}
                      onChange={(e) => setEscort(e.target.value)}
                      required={false}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="bg-white text-gray-900 flex flex-col gap-6 rounded-xl border border-[#2160AD]/20 w-full">
            <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 header-bg-soft">
              <h4 className="leading-none text-base flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Services
              </h4>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <ServiceSearch
                    value={serviceSearch}
                    onChange={setServiceSearch}
                    onSelect={handleServiceSelect}
                  />
                </div>
                <div>
                  <label className="text-base font-medium text-base-optimized mb-2 block">
                    Quick Add Services
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Oxygen Support",
                      "Wheelchair Service",
                      "Stretcher Service",
                      "Medical Escort",
                    ].map((service) => (
                      <button
                        key={service}
                        onClick={() => setServiceSearch(service)}
                        className="inline-flex items-center justify-center gap-1.5 rounded-md text-sm font-medium transition-all border bg-white hover:bg-[#2160AD]/10 h-8 px-3 border-[#2160AD]/30"
                      >
                        <Plus className="w-3 h-3 mr-1" />
                        {service}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Added Services Table */}
              {selectedServices.length > 0 && (
                <div>
                  <label className="items-center gap-2 text-sm leading-none select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-base-optimized font-medium mb-3 block">
                    Added Services
                  </label>

                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-gray-50 px-4 py-2 border-b">
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
                          <div
                            key={svc.id}
                            className="px-4 py-3 hover:bg-gray-50 transition-colors"
                          >
                            <div className="grid grid-cols-6 gap-4 items-center">
                              <div className="col-span-2">
                                <span className="font-medium text-base-optimized">
                                  {svc.name}
                                </span>
                              </div>

                              <div>
                                <input
                                  type="number"
                                  min="0"
                                  step="1"
                                  value={svc.quantity}
                                  onChange={(e) => {
                                    const qty = Math.max(
                                      0,
                                      parseInt(e.target.value) || 0
                                    );
                                    setSelectedServices((prev) =>
                                      prev.map((s) =>
                                        s.id === svc.id
                                          ? { ...s, quantity: qty }
                                          : s
                                      )
                                    );
                                  }}
                                  className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex min-w-0 rounded-md border px-3 py-1 bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-base-optimized h-8 w-20"
                                />
                              </div>

                              <div>
                                <span className="text-base-optimized text-gray-600">
                                  {svc.unit}
                                </span>
                              </div>

                              <div>
                                <span className="text-base-optimized font-medium">
                                  {formatPrice(total)}
                                </span>
                              </div>

                              <div>
                                <button
                                  type="button"
                                  onClick={() => {
                                    setSelectedServices((prev) =>
                                      prev.filter((s) => s.id !== svc.id)
                                    );
                                  }}
                                  className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent dark:hover:bg-accent/50 rounded-md gap-1.5 has-[>svg]:px-2.5 text-red-500 hover:text-red-700 h-8 w-8 p-0"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-x w-4 h-4"
                                    aria-hidden="true"
                                  >
                                    <path d="M18 6 6 18" />
                                    <path d="m6 6 12 12" />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Billing Summary */}
          <div className="bg-white text-gray-900 flex flex-col gap-6 rounded-xl border border-[#2160AD]/20 w-full">
            <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 header-bg-soft">
              <h4 className="leading-none text-base flex items-center gap-2">
                <Car className="w-5 h-5" />
                Billing Summary
              </h4>
            </div>
            <div className="p-6">
              <div className="bg-gray-50 p-6 rounded-lg border">
                <div className="font-semibold mb-4 text-[#2160AD] text-lg">
                  Billing Summary
                </div>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-start py-3 border-b border-gray-200">
                    <div className="flex-1">
                      <span className="font-medium text-base">
                        Base Transport Fee
                      </span>
                      <div className="text-sm text-gray-600 mt-1 max-w-md">
                        {trips.some(
                          (t) => t.pickupLocation && t.dropoffLocation
                        )
                          ? "Calculated from route"
                          : "No pickup/dropoff selected"}
                      </div>
                    </div>
                    <span className="text-base font-semibold ml-4">$0.00</span>
                  </div>

                  {selectedServices.length > 0 ? (
                    selectedServices.map((svc) => (
                      <div
                        key={svc.id}
                        className="flex justify-between py-2 text-sm border-b border-dashed"
                      >
                        <div className="flex-1">
                          <span className="font-medium text-base">
                            {svc.name}
                          </span>
                          <div className="text-sm text-gray-600 mt-1 max-w-md">
                            {formatPrice(svc.price)}
                          </div>
                        </div>
                        <span className="font-medium">
                          {formatPrice(svc.price * svc.quantity)}
                        </span>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-4 text-gray-500">
                      <div className="text-base">
                        No additional services selected
                      </div>
                      <div className="text-sm mt-1">
                        Add services above to see breakdown
                      </div>
                    </div>
                  )}
                </div>
                <div className="bg-gray-200 h-px"></div>
                <div className="space-y-2 pt-4">
                  <div className="flex justify-between font-semibold text-lg text-[#2160AD] pt-2 border-t">
                    <span>Total Amount:</span>
                    <span>{formatPrice(servicesTotal)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Remarks */}
          <div className="bg-white text-gray-900 flex flex-col gap-6 rounded-xl border border-[#2160AD]/20 w-full">
            <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 header-bg-soft">
              <h4 className="leading-none text-base flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Additional Remarks
              </h4>
            </div>
            <div className="p-6">
              <Textarea
                placeholder="Add any additional remarks or special instructions..."
                value={patientCondition}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setPatientCondition(e.target.value)
                }
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-3 pt-6 border-t">
            <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all border bg-white hover:bg-gray-50 h-9 py-2 px-6 lg:px-8 hover-lift order-3 sm:order-1">
              Cancel
            </button>
            <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all bg-[#2160AD] hover:bg-[#1d5497] h-9 py-2 px-6 lg:px-8 hover-lift order-1 sm:order-3 text-white">
              Create Case
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
