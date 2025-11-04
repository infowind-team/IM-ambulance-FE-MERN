import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Truck, Users, FileText, Clipboard, Settings, DollarSign, Package, Gauge, Upload, Wrench, Award, Check, X, Plus } from 'lucide-react';
import svgPathsMaintenance from '../imports/svg-hmsegjzh92';
import svgPathsCertificate from '../imports/svg-x56ihgpa01';

interface MaintenanceRecord {
  id: string;
  lastServiceDate: string;
  nextServiceDate: string;
  odometer: string;
  documentCount: number;
}

interface Certificate {
  id: string;
  type: string;
  number: string;
  issuedDate: string;
  expiryDate: string;
  documentName: string;
  remarks: string;
}

export default function VehicleFormContainer() {
  const navigate = useNavigate();
  const [status, setStatus] = useState('Active');
  const [showValidation, setShowValidation] = useState(false);
  
  // Maintenance Records state
  const [maintenanceRecords, setMaintenanceRecords] = useState<MaintenanceRecord[]>([]);
  const [isAddingMaintenance, setIsAddingMaintenance] = useState(false);
  const [newMaintenanceRecord, setNewMaintenanceRecord] = useState({
    lastServiceDate: '',
    nextServiceDate: '',
    odometer: '',
    documentCount: 0
  });
  
  // Certificates state
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [isAddingCertificate, setIsAddingCertificate] = useState(false);
  const [newCertificate, setNewCertificate] = useState({
    type: '',
    number: '',
    issuedDate: '',
    expiryDate: '',
    documentName: '',
    remarks: ''
  });

  const handleSave = () => {
    setShowValidation(true);
    // Add save logic here
  };

  const handleCancel = () => {
    navigate('/vehicles');
  };
  
  // Maintenance Record handlers
  const handleAddMaintenanceClick = () => {
    setIsAddingMaintenance(true);
  };
  
  const handleMaintenanceFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setNewMaintenanceRecord({
        ...newMaintenanceRecord,
        documentCount: files.length
      });
    }
  };
  
  const handleSaveMaintenanceRecord = () => {
    if (newMaintenanceRecord.lastServiceDate) {
      const record: MaintenanceRecord = {
        id: Date.now().toString(),
        ...newMaintenanceRecord
      };
      setMaintenanceRecords([...maintenanceRecords, record]);
      setNewMaintenanceRecord({
        lastServiceDate: '',
        nextServiceDate: '',
        odometer: '',
        documentCount: 0
      });
      setIsAddingMaintenance(false);
    }
  };
  
  const handleCancelMaintenanceRecord = () => {
    setNewMaintenanceRecord({
      lastServiceDate: '',
      nextServiceDate: '',
      odometer: '',
      documentCount: 0
    });
    setIsAddingMaintenance(false);
  };
  
  const handleDeleteMaintenanceRecord = (id: string) => {
    setMaintenanceRecords(maintenanceRecords.filter(record => record.id !== id));
  };
  
  // Certificate handlers
  const handleAddCertificateClick = () => {
    setIsAddingCertificate(true);
  };
  
  const handleCertificateFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setNewCertificate({
        ...newCertificate,
        documentName: files[0].name
      });
    }
  };
  
  const handleSaveCertificate = () => {
    if (newCertificate.type && newCertificate.number) {
      const certificate: Certificate = {
        id: Date.now().toString(),
        ...newCertificate
      };
      setCertificates([...certificates, certificate]);
      setNewCertificate({
        type: '',
        number: '',
        issuedDate: '',
        expiryDate: '',
        documentName: '',
        remarks: ''
      });
      setIsAddingCertificate(false);
    }
  };
  
  const handleCancelCertificate = () => {
    setNewCertificate({
      type: '',
      number: '',
      issuedDate: '',
      expiryDate: '',
      documentName: '',
      remarks: ''
    });
    setIsAddingCertificate(false);
  };
  
  const handleDeleteCertificate = (id: string) => {
    setCertificates(certificates.filter(cert => cert.id !== id));
  };

  return (
    <div className="p-6 pb-24">
      {/* Status Dropdown */}
      <div className="mb-6">
        <p className="font-['Lato:Bold',sans-serif] text-[19px] text-black mb-3">Status</p>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="bg-white h-[40px] px-3 rounded-lg border border-[#ccd2d7] font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950 w-[300px] cursor-pointer hover:border-[#2160ad] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
        >
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>

      {/* All Cards */}
      <div className="flex flex-col gap-6">
        {/* Card 1: Vehicle Registration Details */}
        <div className="bg-white border border-[rgba(33,96,173,0.2)] rounded-[14px] overflow-hidden">
          <div className="bg-[rgba(33,96,173,0.05)] px-6 py-[25px]">
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5 stroke-black" />
              <p className="font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950">Vehicle Registration Details</p>
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              {/* Vehicle Number */}
              <div className="flex flex-col gap-2">
                <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153]">
                  Vehicle Number <span className="text-[#fb2c36]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g., SAZ1234A"
                  className={`bg-[#f3f3f5] h-[40px] px-3 py-1 rounded-lg font-['Lato:Regular',sans-serif] text-[16px] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad] ${showValidation ? 'border border-[#ffa2a2]' : 'border border-transparent'}`}
                />
                {showValidation && (
                  <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#fb2c36]">Vehicle Number is required</p>
                )}
              </div>

              {/* Chassis No */}
              <div className="flex flex-col gap-2">
                <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153]">
                  Chassis No. <span className="text-[#fb2c36]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g., JTFST22P200040240"
                  className={`bg-[#f3f3f5] h-[40px] px-3 py-1 rounded-lg font-['Lato:Regular',sans-serif] text-[16px] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad] ${showValidation ? 'border border-[#ffa2a2]' : 'border border-transparent'}`}
                />
                {showValidation && (
                  <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#fb2c36]">Chassis No. is required</p>
                )}
              </div>

              {/* Vehicle Scheme */}
              <div className="flex flex-col gap-2">
                <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153]">
                  Vehicle Scheme <span className="text-[#fb2c36]">*</span>
                </label>
                <select className="bg-[#f3f3f5] h-[40px] px-3 rounded-lg border border-transparent font-['Lato:Regular',sans-serif] text-[16px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2160ad]">
                  <option value="">Select</option>
                  <option>Emergency Ambulance Service</option>
                  <option>Medical Transport Service</option>
                </select>
              </div>

              {/* Vehicle Type */}
              <div className="flex flex-col gap-2">
                <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153]">
                  Vehicle Type <span className="text-[#fb2c36]">*</span>
                </label>
                <select className="bg-[#f3f3f5] h-[40px] px-3 rounded-lg border border-transparent font-['Lato:Regular',sans-serif] text-[16px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2160ad]">
                  <option value="">Select</option>
                  <option>Ambulance</option>
                  <option>Medical Van</option>
                  <option>Transport Vehicle</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Make & Model */}
              <div className="flex flex-col gap-2">
                <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153]">
                  Make & Model <span className="text-[#fb2c36]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g., Mercedes-Benz Sprinter"
                  className={`bg-[#f3f3f5] h-[40px] px-3 py-1 rounded-lg font-['Lato:Regular',sans-serif] text-[16px] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad] ${showValidation ? 'border border-[#ffa2a2]' : 'border border-transparent'}`}
                />
                {showValidation && (
                  <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#fb2c36]">Make & Model is required</p>
                )}
              </div>

              {/* Year */}
              <div className="flex flex-col gap-2">
                <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153]">Year</label>
                <input
                  type="text"
                  placeholder="e.g., 2023"
                  className="bg-[#f3f3f5] h-[40px] px-3 py-1 rounded-lg border border-transparent font-['Lato:Regular',sans-serif] text-[16px] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                />
              </div>

              {/* Current Propellant */}
              <div className="flex flex-col gap-2">
                <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153]">Current Propellant</label>
                <select className="bg-[#f3f3f5] h-[40px] px-3 rounded-lg border border-transparent font-['Lato:Regular',sans-serif] text-[16px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2160ad]">
                  <option>Diesel</option>
                  <option>Petrol</option>
                  <option>Electric</option>
                  <option>Hybrid</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Team Details */}
        <div className="bg-white border border-[rgba(33,96,173,0.2)] rounded-[14px] overflow-hidden">
          <div className="bg-[rgba(33,96,173,0.05)] px-6 py-[25px]">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 stroke-black" />
              <p className="font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950">Team Details</p>
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Driver */}
              <div className="flex flex-col gap-2">
                <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153]">
                  Driver <span className="text-[#fb2c36]">*</span>
                </label>
                <select className={`bg-[#f3f3f5] h-[40px] px-3 rounded-lg font-['Lato:Regular',sans-serif] text-[16px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2160ad] ${showValidation ? 'border border-[#ffa2a2]' : 'border border-transparent'}`}>
                  <option value="" className="text-[#717182]">Select Driver</option>
                  <option>John Smith</option>
                  <option>Sarah Johnson</option>
                  <option>Mike Chen</option>
                </select>
                {showValidation && (
                  <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#fb2c36]">Driver is required</p>
                )}
              </div>

              {/* Medic */}
              <div className="flex flex-col gap-2">
                <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153]">Medic</label>
                <select className="bg-[#f3f3f5] h-[40px] px-3 rounded-lg border border-transparent font-['Lato:Regular',sans-serif] text-[16px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2160ad]">
                  <option value="" className="text-[#717182]">Select Medic</option>
                  <option>Dr. Emma Wilson</option>
                  <option>Dr. David Lee</option>
                </select>
              </div>

              {/* Escort */}
              <div className="flex flex-col gap-2">
                <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153]">Escort</label>
                <select className="bg-[#f3f3f5] h-[40px] px-3 rounded-lg border border-transparent font-['Lato:Regular',sans-serif] text-[16px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2160ad]">
                  <option>-</option>
                  <option>Guard 1</option>
                  <option>Guard 2</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Owner's Details */}
        <div className="bg-white border border-[rgba(33,96,173,0.2)] rounded-[14px] overflow-hidden">
          <div className="bg-[rgba(33,96,173,0.05)] px-6 py-[25px]">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 stroke-black" />
              <p className="font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950">Owner's Details</p>
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
              <div className="flex flex-col gap-2">
                <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153]">
                  Owner's Name <span className="text-[#fb2c36]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter owner name"
                  className="bg-[#f3f3f5] h-[40px] px-3 py-1 rounded-lg border border-transparent font-['Lato:Regular',sans-serif] text-[16px] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153]">
                  NRIC/Passport/Company Cert No. <span className="text-[#fb2c36]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter ID number"
                  className="bg-[#f3f3f5] h-[40px] px-3 py-1 rounded-lg border border-transparent font-['Lato:Regular',sans-serif] text-[16px] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153]">Owner's ID Type</label>
                <select className="bg-[#f3f3f5] h-[40px] px-3 rounded-lg border border-transparent font-['Lato:Regular',sans-serif] text-[16px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2160ad]">
                  <option>NRIC</option>
                  <option>Passport</option>
                  <option>Company Certificate</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153]">Registered Address</label>
                <textarea
                  placeholder="Enter registered address"
                  className="bg-[#f3f3f5] min-h-[80px] px-3 py-2 rounded-lg border border-transparent font-['Lato:Regular',sans-serif] text-[16px] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad] resize-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153]">Mailing Address</label>
                <textarea
                  placeholder="Enter mailing address"
                  className="bg-[#f3f3f5] min-h-[80px] px-3 py-2 rounded-lg border border-transparent font-['Lato:Regular',sans-serif] text-[16px] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad] resize-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Card 4: Registration Details */}
        <div className="bg-white border border-[rgba(33,96,173,0.2)] rounded-[14px] overflow-hidden">
          <div className="bg-[rgba(33,96,173,0.05)] px-6 py-[25px]">
            <div className="flex items-center gap-2">
              <Clipboard className="w-5 h-5 stroke-black" />
              <p className="font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950">Registration Details</p>
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153]">Previous Vehicle No.</label>
                <input
                  type="text"
                  placeholder="Enter previous number"
                  className="bg-[#f3f3f5] h-[40px] px-3 py-1 rounded-lg border border-transparent font-['Lato:Regular',sans-serif] text-[16px] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153]">Effective Date of Ownership</label>
                <input
                  type="date"
                  className="bg-[#f3f3f5] h-[40px] px-3 py-1 rounded-lg border border-transparent font-['Lato:Regular',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153]">Original Registration Date</label>
                <input
                  type="date"
                  className="bg-[#f3f3f5] h-[40px] px-3 py-1 rounded-lg border border-transparent font-['Lato:Regular',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153]">No. of Transfers</label>
                <input
                  type="number"
                  placeholder="0"
                  className="bg-[#f3f3f5] h-[40px] px-3 py-1 rounded-lg border border-transparent font-['Lato:Regular',sans-serif] text-[16px] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153]">IU Label No.</label>
                <input
                  type="text"
                  placeholder="Enter IU label number"
                  className="bg-[#f3f3f5] h-[40px] px-3 py-1 rounded-lg border border-transparent font-['Lato:Regular',sans-serif] text-[16px] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Card 5: Vehicle Specifications */}
        <div className="bg-white border border-[rgba(33,96,173,0.2)] rounded-[14px] overflow-hidden">
          <div className="bg-[rgba(33,96,173,0.05)] px-6 py-[25px]">
            <div className="flex items-center gap-2">
              <Settings className="w-5 h-5 stroke-black" />
              <p className="font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950">Vehicle Specifications</p>
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div className="flex flex-col gap-2">
                <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153]">Engine No.</label>
                <input
                  type="text"
                  placeholder="Enter engine number"
                  className="bg-[#f3f3f5] h-[40px] px-3 py-1 rounded-lg border border-transparent font-['Lato:Regular',sans-serif] text-[16px] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153]">Engine Type</label>
                <input
                  type="text"
                  placeholder="e.g., Turbo Diesel"
                  className="bg-[#f3f3f5] h-[40px] px-3 py-1 rounded-lg border border-transparent font-['Lato:Regular',sans-serif] text-[16px] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153]">Kerb Weight (kg)</label>
                <input
                  type="number"
                  placeholder="2500"
                  className="bg-[#f3f3f5] h-[40px] px-3 py-1 rounded-lg border border-transparent font-['Lato:Regular',sans-serif] text-[16px] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153]">Passenger Capacity</label>
                <input
                  type="number"
                  placeholder="4"
                  className="bg-[#f3f3f5] h-[40px] px-3 py-1 rounded-lg border border-transparent font-['Lato:Regular',sans-serif] text-[16px] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153]">Wheelchair Accessible</label>
                <select className="bg-[#f3f3f5] h-[40px] px-3 rounded-lg border border-transparent font-['Lato:Regular',sans-serif] text-[16px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2160ad]">
                  <option>No</option>
                  <option>Yes</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153]">Lifter</label>
                <select className="bg-[#f3f3f5] h-[40px] px-3 rounded-lg border border-transparent font-['Lato:Regular',sans-serif] text-[16px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2160ad]">
                  <option>No</option>
                  <option>Yes</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153]">Stretcher Compatible</label>
                <select className="bg-[#f3f3f5] h-[40px] px-3 rounded-lg border border-transparent font-['Lato:Regular',sans-serif] text-[16px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2160ad]">
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Card 6: Additional Registration Fee (ARF) & COE Information */}
        <div className="bg-white border border-[rgba(33,96,173,0.2)] rounded-[14px] overflow-hidden">
          <div className="bg-[rgba(33,96,173,0.05)] px-6 py-[25px]">
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 stroke-black" />
              <p className="font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950">Additional Registration Fee (ARF) & COE Information</p>
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153]">OMV</label>
                <input
                  type="text"
                  placeholder="$50,000"
                  className="bg-[#f3f3f5] h-[40px] px-3 py-1 rounded-lg border border-transparent font-['Lato:Regular',sans-serif] text-[16px] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153]">ARF Rate</label>
                <input
                  type="text"
                  placeholder="100%"
                  className="bg-[#f3f3f5] h-[40px] px-3 py-1 rounded-lg border border-transparent font-['Lato:Regular',sans-serif] text-[16px] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153]">Actual ARF Paid</label>
                <input
                  type="text"
                  placeholder="$50,000"
                  className="bg-[#f3f3f5] h-[40px] px-3 py-1 rounded-lg border border-transparent font-['Lato:Regular',sans-serif] text-[16px] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153]">COE Expiry Date</label>
                <input
                  type="date"
                  className="bg-[#f3f3f5] h-[40px] px-3 py-1 rounded-lg border border-transparent font-['Lato:Regular',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153]">OPC Cash Rebate Eligibility</label>
                <select className="bg-[#f3f3f5] h-[40px] px-3 rounded-lg border border-transparent font-['Lato:Regular',sans-serif] text-[16px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2160ad]">
                  <option>No</option>
                  <option>Yes</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153]">QP during COE Bidding Exercise</label>
                <input
                  type="text"
                  placeholder="$60,000"
                  className="bg-[#f3f3f5] h-[40px] px-3 py-1 rounded-lg border border-transparent font-['Lato:Regular',sans-serif] text-[16px] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153]">COE No.</label>
                <input
                  type="text"
                  placeholder="Enter COE number"
                  className="bg-[#f3f3f5] h-[40px] px-3 py-1 rounded-lg border border-transparent font-['Lato:Regular',sans-serif] text-[16px] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Card 7: PARF Rebate Details */}
        <div className="bg-white border border-[rgba(33,96,173,0.2)] rounded-[14px] overflow-hidden">
          <div className="bg-[rgba(33,96,173,0.05)] px-6 py-[25px]">
            <div className="flex items-center gap-2">
              <Package className="w-5 h-5 stroke-black" />
              <p className="font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950">PARF Rebate Details</p>
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153]">PARF Eligibility</label>
                <select className="bg-[#f3f3f5] h-[40px] px-3 rounded-lg border border-transparent font-['Lato:Regular',sans-serif] text-[16px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2160ad]">
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153]">PARF Eligibility Expiry Date</label>
                <input
                  type="date"
                  className="bg-[#f3f3f5] h-[40px] px-3 py-1 rounded-lg border border-transparent font-['Lato:Regular',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153]">Min PARF Benefit</label>
                <input
                  type="text"
                  placeholder="$25,000"
                  className="bg-[#f3f3f5] h-[40px] px-3 py-1 rounded-lg border border-transparent font-['Lato:Regular',sans-serif] text-[16px] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Card 8: Vehicle Emissions Details */}
        <div className="bg-white border border-[rgba(33,96,173,0.2)] rounded-[14px] overflow-hidden">
          <div className="bg-[rgba(33,96,173,0.05)] px-6 py-[25px]">
            <div className="flex items-center gap-2">
              <Gauge className="w-5 h-5 stroke-black" />
              <p className="font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950">Vehicle Emissions Details</p>
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153]">CO₂ (g/km)</label>
                <input
                  type="number"
                  placeholder="120"
                  className="bg-[#f3f3f5] h-[40px] px-3 py-1 rounded-lg border border-transparent font-['Lato:Regular',sans-serif] text-[16px] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153]">CO (g/km)</label>
                <input
                  type="number"
                  placeholder="0.5"
                  className="bg-[#f3f3f5] h-[40px] px-3 py-1 rounded-lg border border-transparent font-['Lato:Regular',sans-serif] text-[16px] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153]">HC (g/km)</label>
                <input
                  type="number"
                  placeholder="0.1"
                  className="bg-[#f3f3f5] h-[40px] px-3 py-1 rounded-lg border border-transparent font-['Lato:Regular',sans-serif] text-[16px] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153]">NOx (g/km)</label>
                <input
                  type="number"
                  placeholder="0.08"
                  className="bg-[#f3f3f5] h-[40px] px-3 py-1 rounded-lg border border-transparent font-['Lato:Regular',sans-serif] text-[16px] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153]">PM (g/km)</label>
                <input
                  type="number"
                  placeholder="0.005"
                  className="bg-[#f3f3f5] h-[40px] px-3 py-1 rounded-lg border border-transparent font-['Lato:Regular',sans-serif] text-[16px] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Card 9: Documentation (Optional) */}
        <div className="bg-white border border-[rgba(33,96,173,0.2)] rounded-[14px] overflow-hidden">
          <div className="bg-[rgba(33,96,173,0.05)] px-6 py-[25px]">
            <div className="flex items-center gap-2">
              <Upload className="w-5 h-5 stroke-black" />
              <p className="font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950">Documentation (Optional)</p>
            </div>
          </div>
          <div className="p-6">
            <div className="border-2 border-dashed border-[#ccd2d7] rounded-lg p-8 flex flex-col items-center justify-center gap-3 hover:border-[#2160ad] hover:bg-[rgba(33,96,173,0.02)] transition-colors cursor-pointer">
              <Upload className="w-10 h-10 stroke-[#717182]" />
              <div className="text-center">
                <p className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950 mb-1">
                  Drag and drop files here, or click to browse
                </p>
                <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#717182]">
                  Supported formats: PDF, DOC, JPG, PNG (Max 10MB)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Maintenance History Section */}
        <div className="flex flex-col gap-4">
          {/* Header */}
          <div className="flex items-center justify-between h-8">
            <h3 className="font-['Lato:Medium',sans-serif] text-[18px] leading-[28px] text-[#101828]">Maintenance History</h3>
            <button 
              onClick={handleAddMaintenanceClick}
              disabled={isAddingMaintenance}
              className="bg-white h-8 px-4 rounded-lg border border-[rgba(0,0,0,0.1)] flex items-center gap-2 hover:bg-[#f3f3f5] transition-colors disabled:opacity-50 disabled:cursor-not-allowed relative"
            >
              <div className="w-4 h-4 relative">
                <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <g>
                    <path d="M3.33333 8H12.6667" stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    <path d="M8 3.33398V12.6673" stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </g>
                </svg>
              </div>
              <span className="font-['Lato:Medium',sans-serif] text-[16px] leading-[22.857px] text-neutral-950">Add Record</span>
            </button>
          </div>
          
          {/* Table Container */}
          <div className="relative rounded-[10px] border border-[rgba(0,0,0,0.1)]">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#2160ad] h-12">
                    <th className="px-4 py-3 text-left font-['Lato:Medium',sans-serif] text-[16px] leading-[24px] text-white">Last Service Date</th>
                    <th className="px-4 py-3 text-left font-['Lato:Medium',sans-serif] text-[16px] leading-[24px] text-white">Next Service Due</th>
                    <th className="px-4 py-3 text-left font-['Lato:Medium',sans-serif] text-[16px] leading-[24px] text-white">Current Odometer (km)</th>
                    <th className="px-4 py-3 text-left font-['Lato:Medium',sans-serif] text-[16px] leading-[24px] text-white">Documents</th>
                    <th className="px-4 py-3 text-left font-['Lato:Medium',sans-serif] text-[16px] leading-[24px] text-white">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {isAddingMaintenance && (
                    <tr className="border-b border-gray-200 h-[56.5px]">
                      <td className="px-4 py-[18px]">
                        <input
                          type="date"
                          value={newMaintenanceRecord.lastServiceDate}
                          onChange={(e) => setNewMaintenanceRecord({...newMaintenanceRecord, lastServiceDate: e.target.value})}
                          className="w-full px-2 py-1 border-none bg-[#f3f3f5] rounded font-['Lato:Regular',sans-serif] text-[14px] text-neutral-950 focus:outline-none focus:ring-1 focus:ring-[#2160ad]"
                        />
                      </td>
                      <td className="px-4 py-[18px]">
                        <input
                          type="text"
                          placeholder="dd/mm/yyyy"
                          value={newMaintenanceRecord.nextServiceDate}
                          onChange={(e) => setNewMaintenanceRecord({...newMaintenanceRecord, nextServiceDate: e.target.value})}
                          className="w-full px-2 py-1 border-none bg-[#f3f3f5] rounded font-['Lato:Regular',sans-serif] text-[14px] text-neutral-950 focus:outline-none focus:ring-1 focus:ring-[#2160ad]"
                        />
                      </td>
                      <td className="px-4 py-[18px]">
                        <input
                          type="text"
                          placeholder="e.g., 45,230"
                          value={newMaintenanceRecord.odometer}
                          onChange={(e) => setNewMaintenanceRecord({...newMaintenanceRecord, odometer: e.target.value})}
                          className="w-full px-2 py-1 border-none bg-[#f3f3f5] rounded font-['Lato:Regular',sans-serif] text-[14px] text-neutral-950 focus:outline-none focus:ring-1 focus:ring-[#2160ad]"
                        />
                      </td>
                      <td className="px-4 py-[18px]">
                        <label className="flex items-center gap-2 px-3 py-1 text-[#2160ad] hover:bg-[#f3f3f5] rounded transition-colors cursor-pointer">
                          <Upload className="w-4 h-4" />
                          <span className="font-['Lato:Regular',sans-serif] text-[14px]">
                            {newMaintenanceRecord.documentCount > 0 ? `${newMaintenanceRecord.documentCount} file${newMaintenanceRecord.documentCount > 1 ? 's' : ''} selected` : 'Upload'}
                          </span>
                          <input
                            type="file"
                            multiple
                            onChange={handleMaintenanceFileUpload}
                            className="hidden"
                            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                          />
                        </label>
                      </td>
                      <td className="px-4 py-[18px]">
                        <div className="flex items-center gap-1">
                          <button
                            onClick={handleSaveMaintenanceRecord}
                            className="w-8 h-8 flex items-center justify-center text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                          >
                            <Check className="w-4 h-4" />
                          </button>
                          <button
                            onClick={handleCancelMaintenanceRecord}
                            className="w-8 h-8 flex items-center justify-center text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  )}
                  {maintenanceRecords.map((record, index) => (
                    <tr key={record.id} className={index < maintenanceRecords.length - 1 ? "border-b border-gray-200 h-[56.5px]" : "h-[56.5px]"}>
                      <td className="px-4 py-[18px]">
                        <p className="font-['Lato:Regular',sans-serif] text-[16px] leading-[24px] text-neutral-950">
                          {record.lastServiceDate ? new Date(record.lastServiceDate).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' }).replace(/\//g, '/') : '-'}
                        </p>
                      </td>
                      <td className="px-4 py-[18px]">
                        <p className="font-['Lato:Regular',sans-serif] text-[16px] leading-[24px] text-neutral-950">
                          {record.nextServiceDate || '-'}
                        </p>
                      </td>
                      <td className="px-4 py-[18px]">
                        <p className="font-['Lato:Regular',sans-serif] text-[16px] leading-[24px] text-neutral-950">
                          {record.odometer || '-'}
                        </p>
                      </td>
                      <td className="px-4 py-5">
                        {record.documentCount === 0 ? (
                          <div className="flex items-center gap-2 h-4">
                            <div className="w-4 h-4">
                              <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                <g>
                                  <path d={svgPathsMaintenance.p1f315b00} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                </g>
                              </svg>
                            </div>
                            <span className="font-['Lato:Regular',sans-serif] text-[12px] leading-[16px] text-[#99a1af]">No files</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 h-4">
                            <div className="w-4 h-4">
                              <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                <g>
                                  <path d={svgPathsMaintenance.p1f315b00} stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                </g>
                              </svg>
                            </div>
                            <span className="font-['Lato:Regular',sans-serif] text-[12px] leading-[16px] text-[#155dfc]">
                              {record.documentCount === 1 ? '1 file' : `${record.documentCount} files`}
                            </span>
                          </div>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1 h-8">
                          <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
                            <div className="w-4 h-4">
                              <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                <g>
                                  <path d={svgPathsMaintenance.p38f39800} stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                  <path d={svgPathsMaintenance.p229b4400} stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                </g>
                              </svg>
                            </div>
                          </button>
                          <button
                            onClick={() => handleDeleteMaintenanceRecord(record.id)}
                            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-red-50 transition-colors"
                          >
                            <div className="w-4 h-4">
                              <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                <g>
                                  <path d="M6.6665 7.33398V11.334" stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                  <path d="M9.3335 7.33398V11.334" stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                  <path d={svgPathsMaintenance.p37e28100} stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                  <path d="M2 4H14" stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                  <path d={svgPathsMaintenance.p155d6100} stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                </g>
                              </svg>
                            </div>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {!isAddingMaintenance && maintenanceRecords.length === 0 && (
                    <tr className="h-20">
                      <td colSpan={5} className="px-4 py-8 text-center text-[#717182] font-['Lato:Regular',sans-serif] text-[14px]">
                        No records added yet
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Certificate Records Section */}
        <div className="flex flex-col gap-4">
          {/* Header */}
          <div className="flex items-center justify-between h-8">
            <h3 className="font-['Lato:Medium',sans-serif] text-[18px] leading-[28px] text-[#101828]">Certificate Records</h3>
            <button 
              onClick={handleAddCertificateClick}
              disabled={isAddingCertificate}
              className="bg-white h-8 px-4 rounded-lg border border-[rgba(0,0,0,0.1)] flex items-center gap-2 hover:bg-[#f3f3f5] transition-colors disabled:opacity-50 disabled:cursor-not-allowed relative"
            >
              <div className="w-4 h-4 relative">
                <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <g>
                    <path d="M3.33333 8H12.6667" stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    <path d="M8 3.33398V12.6673" stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </g>
                </svg>
              </div>
              <span className="font-['Lato:Medium',sans-serif] text-[16px] leading-[22.857px] text-neutral-950">Add Certificate</span>
            </button>
          </div>
          
          {/* Table Container */}
          <div className="relative rounded-[10px] border border-[rgba(0,0,0,0.1)]">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#2160ad] h-12">
                    <th className="px-4 py-3 text-left font-['Lato:Medium',sans-serif] text-[16px] leading-[24px] text-white">Certificate/License Type</th>
                    <th className="px-4 py-3 text-left font-['Lato:Medium',sans-serif] text-[16px] leading-[24px] text-white">Certificate Number</th>
                    <th className="px-4 py-3 text-left font-['Lato:Medium',sans-serif] text-[16px] leading-[24px] text-white">Issued Date</th>
                    <th className="px-4 py-3 text-left font-['Lato:Medium',sans-serif] text-[16px] leading-[24px] text-white">Expiry Date</th>
                    <th className="px-4 py-3 text-left font-['Lato:Medium',sans-serif] text-[16px] leading-[24px] text-white">Document</th>
                    <th className="px-4 py-3 text-left font-['Lato:Medium',sans-serif] text-[16px] leading-[24px] text-white">Remarks</th>
                    <th className="px-4 py-3 text-left font-['Lato:Medium',sans-serif] text-[16px] leading-[24px] text-white">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {isAddingCertificate && (
                    <tr className="border-b border-gray-200 h-[56.5px]">
                      <td className="px-4 py-[18px]">
                        <input
                          type="text"
                          placeholder="e.g., Vehicle Inspection Certificate (LTA)"
                          value={newCertificate.type}
                          onChange={(e) => setNewCertificate({...newCertificate, type: e.target.value})}
                          className="w-full px-2 py-1 border-none bg-[#f3f3f5] rounded font-['Lato:Regular',sans-serif] text-[14px] text-neutral-950 focus:outline-none focus:ring-1 focus:ring-[#2160ad]"
                        />
                      </td>
                      <td className="px-4 py-[18px]">
                        <input
                          type="text"
                          placeholder="e.g., LTA-2024-001234"
                          value={newCertificate.number}
                          onChange={(e) => setNewCertificate({...newCertificate, number: e.target.value})}
                          className="w-full px-2 py-1 border-none bg-[#f3f3f5] rounded font-['Lato:Regular',sans-serif] text-[14px] text-neutral-950 focus:outline-none focus:ring-1 focus:ring-[#2160ad]"
                        />
                      </td>
                      <td className="px-4 py-[18px]">
                        <input
                          type="date"
                          value={newCertificate.issuedDate}
                          onChange={(e) => setNewCertificate({...newCertificate, issuedDate: e.target.value})}
                          className="w-full px-2 py-1 border-none bg-[#f3f3f5] rounded font-['Lato:Regular',sans-serif] text-[14px] text-neutral-950 focus:outline-none focus:ring-1 focus:ring-[#2160ad]"
                        />
                      </td>
                      <td className="px-4 py-[18px]">
                        <input
                          type="date"
                          value={newCertificate.expiryDate}
                          onChange={(e) => setNewCertificate({...newCertificate, expiryDate: e.target.value})}
                          className="w-full px-2 py-1 border-none bg-[#f3f3f5] rounded font-['Lato:Regular',sans-serif] text-[14px] text-neutral-950 focus:outline-none focus:ring-1 focus:ring-[#2160ad]"
                        />
                      </td>
                      <td className="px-4 py-[18px]">
                        <label className="flex items-center gap-2 px-3 py-1 text-[#2160ad] hover:bg-[#f3f3f5] rounded transition-colors cursor-pointer">
                          <Upload className="w-4 h-4" />
                          <span className="font-['Lato:Regular',sans-serif] text-[14px]">
                            {newCertificate.documentName || 'Upload'}
                          </span>
                          <input
                            type="file"
                            onChange={handleCertificateFileUpload}
                            className="hidden"
                            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                          />
                        </label>
                      </td>
                      <td className="px-4 py-[18px]">
                        <input
                          type="text"
                          placeholder="Add remarks..."
                          value={newCertificate.remarks}
                          onChange={(e) => setNewCertificate({...newCertificate, remarks: e.target.value})}
                          className="w-full px-2 py-1 border-none bg-[#f3f3f5] rounded font-['Lato:Regular',sans-serif] text-[14px] text-neutral-950 focus:outline-none focus:ring-1 focus:ring-[#2160ad]"
                        />
                      </td>
                      <td className="px-4 py-[18px]">
                        <div className="flex items-center gap-1">
                          <button
                            onClick={handleSaveCertificate}
                            className="w-8 h-8 flex items-center justify-center text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                          >
                            <Check className="w-4 h-4" />
                          </button>
                          <button
                            onClick={handleCancelCertificate}
                            className="w-8 h-8 flex items-center justify-center text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  )}
                  {certificates.map((cert, index) => (
                    <tr key={cert.id} className={index < certificates.length - 1 ? "border-b border-gray-200 h-[56.5px]" : "h-[56.5px]"}>
                      <td className="px-4 py-[18px]">
                        <p className="font-['Lato:Regular',sans-serif] text-[16px] leading-[24px] text-neutral-950">
                          {cert.type}
                        </p>
                      </td>
                      <td className="px-4 py-[18px]">
                        <p className="font-['Lato:Regular',sans-serif] text-[16px] leading-[24px] text-neutral-950">
                          {cert.number}
                        </p>
                      </td>
                      <td className="px-4 py-[18px]">
                        <p className="font-['Lato:Regular',sans-serif] text-[16px] leading-[24px] text-neutral-950">
                          {cert.issuedDate ? new Date(cert.issuedDate).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' }) : '-'}
                        </p>
                      </td>
                      <td className="px-4 py-[18px]">
                        <p className="font-['Lato:Regular',sans-serif] text-[16px] leading-[24px] text-neutral-950">
                          {cert.expiryDate ? new Date(cert.expiryDate).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' }) : '-'}
                        </p>
                      </td>
                      <td className="px-4 py-5">
                        {cert.documentName ? (
                          <div className="flex items-center gap-2 h-4">
                            <div className="w-4 h-4">
                              <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                <g>
                                  <path d={svgPathsCertificate.p34427a00} stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                  <path d={svgPathsCertificate.p29b65180} stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                  <path d="M6.66667 6H5.33333" stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                  <path d="M10.6666 8.66602H5.33325" stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                  <path d="M10.6666 11.334H5.33325" stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                </g>
                              </svg>
                            </div>
                            <span className="font-['Lato:Regular',sans-serif] text-[12px] leading-[16px] text-[#155dfc]">
                              {cert.documentName}
                            </span>
                          </div>
                        ) : (
                          <span className="font-['Lato:Regular',sans-serif] text-[12px] leading-[16px] text-[#99a1af]">No files</span>
                        )}
                      </td>
                      <td className="px-4 py-[18px]">
                        <p className="font-['Lato:Regular',sans-serif] text-[16px] leading-[24px] text-neutral-950">
                          {cert.remarks || '-'}
                        </p>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1 h-8">
                          <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
                            <div className="w-4 h-4">
                              <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                <g>
                                  <path d={svgPathsCertificate.p38f39800} stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                  <path d={svgPathsCertificate.p229b4400} stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                </g>
                              </svg>
                            </div>
                          </button>
                          <button
                            onClick={() => handleDeleteCertificate(cert.id)}
                            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-red-50 transition-colors"
                          >
                            <div className="w-4 h-4">
                              <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                <g>
                                  <path d="M6.6665 7.33398V11.334" stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                  <path d="M9.3335 7.33398V11.334" stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                  <path d={svgPathsCertificate.p37e28100} stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                  <path d="M2 4H14" stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                  <path d={svgPathsCertificate.p155d6100} stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                </g>
                              </svg>
                            </div>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {!isAddingCertificate && certificates.length === 0 && (
                    <tr className="h-20">
                      <td colSpan={7} className="px-4 py-8 text-center text-[#717182] font-['Lato:Regular',sans-serif] text-[14px]">
                        No certificates added yet
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Footer Buttons */}
      <div className="flex justify-end items-center gap-3 mt-6">
        <button
          onClick={handleCancel}
          className="bg-white h-[40px] px-6 rounded-lg border border-[#ccd2d7] font-['Lato:Medium',sans-serif] text-[16px] text-[#364153] hover:bg-[#f3f3f5] transition-colors"
        >
          Cancel
        </button>

        <button
          onClick={handleSave}
          className="bg-[#2160ad] h-[40px] px-6 rounded-lg font-['Lato:Medium',sans-serif] text-[16px] text-white hover:bg-[#1a4d8a] transition-colors"
        >
          Add Vehicle
        </button>
      </div>
    </div>
  );
}
