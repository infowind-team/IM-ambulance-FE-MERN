// @/components/cases/add/ALL_SERVICES.ts
export type Service = {
    value: string;
    label: string;
    price: string;
    unit?: string;
  };
  
  export const ALL_SERVICES: Service[] = [
    { value: "oxygen", label: "Oxygen Therapy", price: "$45.00", unit: "per hour" },
    { value: "iv-drip", label: "IV Drip Setup", price: "$80.00", unit: "per trip" },
    { value: "ecg", label: "ECG Monitoring", price: "$60.00", unit: "per trip" },
    { value: "stair-chair", label: "Stair Chair Assistance", price: "$75.00", unit: "per trip" },
    { value: "bariatric", label: "Bariatric Transport", price: "$150.00", unit: "per trip" },
    { value: "doctor-escort", label: "Doctor Escort", price: "$280.00", unit: "per trip" },
    { value: "nurse-escort", label: "Nurse Escort", price: "$180.00", unit: "per trip" },
    { value: "ventilator", label: "Ventilator Support", price: "$220.00", unit: "per trip" },
    { value: "nebulizer", label: "Nebulizer Treatment", price: "$35.00", unit: "per use" },
    { value: "suction", label: "Suction Equipment", price: "$50.00", unit: "per trip" },
    { value: "defibrillator", label: "Defibrillator Ready", price: "$90.00", unit: "per trip" },
    { value: "waiting-time", label: "Waiting Time", price: "$55.00", unit: "per hour" },
    { value: "night-charge", label: "Night Charge (10pm–6am)", price: "$40.00", unit: "per trip" },
    { value: "public-holiday", label: "Public Holiday Surcharge", price: "$60.00", unit: "per trip" },
    { value: "urgent-call", label: "Urgent Callout (<2hrs)", price: "$120.00", unit: "per trip" },
    { value: "airport-transfer", label: "Airport Transfer", price: "$180.00", unit: "per trip" },
    { value: "repatriation", label: "Medical Repatriation", price: "$1,800.00", unit: "per case" },
    { value: "wheelchair-provision", label: "Wheelchair Provision", price: "$25.00", unit: "per trip" },
    { value: "carry-chair", label: "Carry Chair", price: "$40.00", unit: "per trip" },
    { value: "extra-attendant", label: "Extra Attendant", price: "$90.00", unit: "per trip" },
    { value: "oxygen-support", label: "Oxygen Support", price: "$50.00", unit: "per day" },
    { value: "wheelchair", label: "Wheelchair Service", price: "$25.00", unit: "per service" },
    { value: "stretcher", label: "Stretcher Service", price: "$35.00", unit: "per service" },
    { value: "medical-escort", label: "Medical Escort", price: "$75.00", unit: "per hour" },
    { value: "standby", label: "Standby Service", price: "$120.00", unit: "per day" },
    { value: "ae-transfer", label: "A&E Transfer", price: "$80.00", unit: "per hour" },
    { value: "dialysis", label: "Dialysis Transport", price: "$45.00", unit: "per service" },
    { value: "iv-therapy", label: "IV Therapy Support", price: "$65.00", unit: "per trip" },
    { value: "emergency-equipment", label: "Emergency Equipment", price: "$65.00", unit: "per trip" },
  ];