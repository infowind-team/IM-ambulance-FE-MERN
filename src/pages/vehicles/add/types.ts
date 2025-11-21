export type VehicleFormValues = {
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
  maintenance?: [],
  certificates?: CertificateRecord[]
};

export type MaintenanceRecord = {
  id: number;
  lastService: string;
  nextDue: string;
  odometer: string;
  files: number;
  fileNames?: string[];
  isEditing?: boolean;
};

export type CertificateRecord = {
  id: number;
  type: string;
  number: string;
  issued: string;
  expiry: string;
  file?: string;
  fileObj?: File | string ;
  fileNames?: string[]
  remarks: string;
  isEditing?: boolean;
};
 
export interface UploadedFile {
  id: string;
  file: File;
  preview?: string;
  progress: number;
}

export type StatusProps = {
  isEditing: boolean;
};

export type VehicleRegistrationProp = {
  isEditing: boolean;
}

export type UserItem = {
  _id: string;
  firstName: string;
  lastName: string;
};

export type TeamDetailProp = {
  isEditing:boolean;
  users:UserItem[];
}

export type OwnerDetailProp = {
  isEditing :boolean;
}

export type RegistrationDetailProp = {
  isEditing: boolean;
}

export type VehicleSpecsProp = {
  isEditing: boolean;
}

export type ArfCoeProp = {
  isEditing: boolean; 
}

export type ParfRebateProp = {
  isEditing: boolean;
}

export type EmissionProp = {
  isEditing: boolean;
}

