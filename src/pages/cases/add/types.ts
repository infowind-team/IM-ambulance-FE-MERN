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