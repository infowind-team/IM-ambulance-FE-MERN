export type TripType = "one-way" | "two-way" | "three-way";

export type Trip = {
  id: string;
  pickUpLocation: string;
  pickupBlock: string;
  pickupUnit: string;
  pickupWard: string;
  pickupRoom: string;
  pickupBed: string;
  dropOffLocation: string;
  dropoffBlock: string;
  dropoffUnit: string;
  dropoffWard: string;
  dropoffRoom: string;
  dropoffBed: string;
  pickUpTime: string;
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
  intakeMode: string; // changed from intake to intakeMode
  bookingDate: Date | null;
  bookingTime: string;
  requestorName: string;
  requestorContact: string;
  transportMode: string;
  patientName: string;
  nric: string; // changed from patientNric to nric
  age: number; // changed from patientAge to age
  weight: number; // changed from patientWeight to weight
  gender: string;
  patientContact: string;
  patientCondition: string;
  nokName: string;
  nokContact: string;
  nokRelation: string; // changed from nokRelationship to nokRelation 
  nokAccompany: number; // changed from nokAccompanying to nokAccompany
  tripType: TripType;
  // trips: Trip[];
  tripDetails: Trip[]
  vehicleType: string;
  vehicleNumber: string;
  mtoName: string; // changed from mto to mtoName
  staffName: string; //emt -> staffName
  escortName: string; // escort -> escortName
  remarks: string;
  servicesRequired: string[]
};