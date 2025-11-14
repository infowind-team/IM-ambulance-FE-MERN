// @/components/cases/add/types.ts
export type TripType = "one-way" | "two-way" | "three-way";

export interface Trip {
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

export interface SelectedService {
  id: string;
  name: string;
  price: number;
  unit: string;
  quantity: number;
}