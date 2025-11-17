export type TripType = "one-way" | "two-way" | "three-way";

export type Trip = {
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
};

export type SelectedService = {
  id: string;
  name: string;
  price: number;
  unit?: string;
  quantity: number;
};

export type CaseFormValues = {
  status: string;
  intake: string;
  bookingDate: Date | null;
  bookingTime: string;
  requestorName: string;
  requestorContact: string;
  transportMode: string;
  patientName: string;
  patientNric: string;
  patientAge: string;
  patientWeight: string;
  gender: string;
  patientContact: string;
  patientCondition: string;
  nokName: string;
  nokContact: string;
  nokRelationship: string;
  nokAccompanying: string;
  tripType: TripType;
  trips: Trip[];
  vehicleType: string;
  vehicleNumber: string;
  mto: string;
  emt: string;
  escort: string;
  remarks: string;
};