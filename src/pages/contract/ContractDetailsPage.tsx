import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, FileText, Trash2, Plus } from 'lucide-react';
import FunctionalSidebar from '../components/FunctionalSidebar';

interface Branch {
  id: string;
  name: string;
  postalCode: string;
  address: string;
  contactPerson: string;
  phoneNumber: string;
  email: string;
}

interface TripService {
  id: string;
  serviceType: string;
  officeHours: string;
  nonOfficeHours: string;
  weekendPH: string;
  active: boolean;
}

interface SupportService {
  id: string;
  serviceType: string;
  officeHours: string;
  nonOfficeHours: string;
  weekendPH: string;
  active: boolean;
}

interface PricingRule {
  id: string;
  rule: string;
  unitBound: string;
  amountPerUnit: string;
  active: boolean;
}

interface AddonService {
  id: string;
  serviceName: string;
  unit: string;
  pricingRules: PricingRule[];
}

interface AdditionalCharge {
  id: string;
  serviceName: string;
  unit: string;
  pricingRules: PricingRule[];
}

const ContractDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);

  // Mock contract data
  const [contractData, setContractData] = useState({
    facilityName: 'Singapore General Hospital',
    contractId: 'SGH-2025-001',
    startDate: '01/01/2025',
    endDate: '31/12/2025',
  });

  const [documents] = useState([
    { id: '1', name: 'SGH_Contract_2025.pdf', type: 'PDF, Terms, Conditions.pdf' },
    { id: '2', name: 'SGH_Terms_Conditions.pdf', type: 'Uploaded documents list and types of other relevant files' },
  ]);

  const [branches, setBranches] = useState<Branch[]>([
    {
      id: '1',
      name: 'Branch 1',
      postalCode: '169608',
      address: 'Outram Road, Singapore Central',
      contactPerson: 'Mr. Steven Lim',
      phoneNumber: '+65 6321 4377',
      email: 'sgh.outram@singhealth.com.sg',
    },
    {
      id: '2',
      name: 'Branch 2',
      postalCode: '169608',
      address: 'Outram Road, 6 Specialist Centre',
      contactPerson: 'Ms. Amanda Tan',
      phoneNumber: '+65 6321 5477',
      email: 'sgh.block6specialist@singhealth.com.sg',
    },
  ]);

  const [tripServices, setTripServices] = useState<TripService[]>([
    { id: '1', serviceType: 'Non-Stay Trip', officeHours: '120', nonOfficeHours: '220', weekendPH: '320', active: true },
    { id: '2', serviceType: 'Non-Stay Trip', officeHours: '220', nonOfficeHours: '320', weekendPH: '420', active: true },
    { id: '3', serviceType: 'Non-Stay Trip', officeHours: '320', nonOfficeHours: '420', weekendPH: '520', active: true },
  ]);

  const [supportServices, setSupportServices] = useState<SupportService[]>([
    { id: '1', serviceType: 'A&E Transfer', officeHours: '120', nonOfficeHours: '220', weekendPH: '320', active: true },
    { id: '2', serviceType: 'Dialysis Transfer', officeHours: '170', nonOfficeHours: '220', weekendPH: '320', active: true },
    { id: '3', serviceType: 'Oncology Discharge', officeHours: '170', nonOfficeHours: '220', weekendPH: '320', active: true },
    { id: '4', serviceType: 'Medical Escort', officeHours: '120', nonOfficeHours: '220', weekendPH: '320', active: true },
  ]);

  const [addonServices, setAddonServices] = useState<AddonService[]>([
    {
      id: '1',
      serviceName: 'Oxygen Machine',
      unit: 'Litre',
      pricingRules: [
        { id: '1', rule: 'First (Fixed cost for initial units)', unitBound: '5 L', amountPerUnit: '50', active: true },
        { id: '2', rule: 'Next (Fixed cost for following units)', unitBound: '10 L', amountPerUnit: '100', active: true },
      ],
    },
  ]);

  const [additionalCharges, setAdditionalCharges] = useState<AdditionalCharge[]>([
    {
      id: '1',
      serviceName: 'Waiting Time',
      unit: 'Hour',
      pricingRules: [
        { id: '1', rule: 'First Hour (Free)', unitBound: '1 Hour', amountPerUnit: '0', active: true },
        { id: '2', rule: 'Each Additional Hour', unitBound: '1 Hour', amountPerUnit: '50', active: true },
      ],
    },
  ]);

  const handleBack = () => {
    navigate('/services');
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="flex min-h-screen bg-white">
      <FunctionalSidebar />
      
      <div className="flex-1 flex flex-col">
        {/* Header with Breadcrumbs */}
        <div className="bg-[rgba(33,96,173,0.05)] px-4 md:px-6 py-4">
          <div className="flex items-center gap-1 text-sm mb-2">
            <button 
              onClick={() => navigate('/services')}
              className="text-[#4a5565] hover:text-[#2160ad]"
            >
              Management
            </button>
            <span className="text-[#717182]">›</span>
            <button 
              onClick={() => navigate('/services')}
              className="text-[#4a5565] hover:text-[#2160ad]"
            >
              Services
            </button>
            <span className="text-[#717182]">›</span>
            <span className="text-[#4a5565]">{contractData.facilityName}</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h1 className="font-['Lato:Medium',sans-serif] text-[22px] md:text-[26px] text-[#2160ad]">
              {contractData.facilityName}
            </h1>
            <button
              onClick={handleEditToggle}
              className="h-[36px] px-4 bg-[#2160ad] text-white rounded-lg font-['Lato:Medium',sans-serif] text-[14px] md:text-[16px] hover:bg-[#1a4d8a] transition-colors whitespace-nowrap self-start sm:self-auto"
            >
              {isEditing ? 'Save Contract' : 'Edit Contract'}
            </button>
          </div>
        </div>

        {/* Back to Services Link */}
        <div className="px-4 md:px-6 py-4 border-b border-[rgba(0,0,0,0.1)]">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-[#2160ad] hover:text-[#1a4d8a] font-['Lato:Regular',sans-serif] text-[14px] md:text-[16px]"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto p-4 md:p-6 space-y-6">
          {/* Contract Information */}
          <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] p-4 md:p-6">
            <h2 className="font-['Lato:SemiBold',sans-serif] text-[16px] md:text-[18px] text-[#2160ad] mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Contract Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-['Lato:Medium',sans-serif] text-[14px] text-[#4a5565] mb-2">
                  Healthcare Facility Name
                </label>
                <input
                  type="text"
                  value={contractData.facilityName}
                  disabled={!isEditing}
                  className={`w-full h-[40px] px-3 rounded-[8px] text-[14px] md:text-[16px] ${
                    isEditing
                      ? 'bg-[#f3f3f5] text-neutral-950'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                />
              </div>
              <div>
                <label className="block font-['Lato:Medium',sans-serif] text-[14px] text-[#4a5565] mb-2">
                  Contract ID
                </label>
                <input
                  type="text"
                  value={contractData.contractId}
                  disabled={!isEditing}
                  className={`w-full h-[40px] px-3 rounded-[8px] text-[14px] md:text-[16px] ${
                    isEditing
                      ? 'bg-[#f3f3f5] text-neutral-950'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                />
              </div>
              <div>
                <label className="block font-['Lato:Medium',sans-serif] text-[14px] text-[#4a5565] mb-2">
                  Contract Start Date
                </label>
                <input
                  type="text"
                  value={contractData.startDate}
                  disabled={!isEditing}
                  className={`w-full h-[40px] px-3 rounded-[8px] text-[14px] md:text-[16px] ${
                    isEditing
                      ? 'bg-[#f3f3f5] text-neutral-950'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                />
              </div>
              <div>
                <label className="block font-['Lato:Medium',sans-serif] text-[14px] text-[#4a5565] mb-2">
                  Contract End Date
                </label>
                <input
                  type="text"
                  value={contractData.endDate}
                  disabled={!isEditing}
                  className={`w-full h-[40px] px-3 rounded-[8px] text-[14px] md:text-[16px] ${
                    isEditing
                      ? 'bg-[#f3f3f5] text-neutral-950'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Contract Documents */}
          <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] p-4 md:p-6">
            <h2 className="font-['Lato:SemiBold',sans-serif] text-[16px] md:text-[18px] text-[#2160ad] mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Contract Documents
            </h2>
            <div className="space-y-3">
              {documents.map((doc) => (
                <div
                  key={doc.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 bg-[#f3f3f5] rounded-[8px]"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <FileText className="w-5 h-5 text-[#2160ad] flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="font-['Lato:Medium',sans-serif] text-[14px] text-neutral-950 truncate">
                        {doc.name}
                      </p>
                      <p className="font-['Lato:Regular',sans-serif] text-[12px] text-[#717182] truncate">
                        {doc.type}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Branch Information */}
          <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] p-4 md:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <h2 className="font-['Lato:SemiBold',sans-serif] text-[16px] md:text-[18px] text-[#2160ad] flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Branch Information
              </h2>
              <button
                disabled={!isEditing}
                className={`h-[32px] px-4 rounded-[8px] font-['Lato:Medium',sans-serif] text-[14px] flex items-center gap-2 transition-colors whitespace-nowrap self-start sm:self-auto ${
                  isEditing
                    ? 'bg-white border border-[rgba(0,0,0,0.1)] text-neutral-950 hover:bg-[#f3f3f5]'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed border border-gray-300'
                }`}
              >
                <Plus className="w-4 h-4" />
                Add Branch
              </button>
            </div>

            <div className="space-y-4">
              {branches.map((branch, index) => (
                <div key={branch.id} className="border border-[rgba(0,0,0,0.1)] rounded-[10px] p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-['Lato:Medium',sans-serif] text-[14px] md:text-[16px] text-[#2160ad]">
                      {branch.name}
                    </h3>
                    <button
                      disabled={!isEditing}
                      className={`w-8 h-8 flex items-center justify-center rounded-lg transition-colors ${
                        isEditing
                          ? 'hover:bg-red-50 text-[#FB2C36]'
                          : 'text-gray-300 cursor-not-allowed'
                      }`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-['Lato:Medium',sans-serif] text-[12px] md:text-[14px] text-[#4a5565] mb-2">
                        Branch Name
                      </label>
                      <input
                        type="text"
                        value={branch.name}
                        disabled={!isEditing}
                        placeholder="e.g., Block 1, Specialist Centre"
                        className={`w-full h-[40px] px-3 rounded-[8px] text-[14px] ${
                          isEditing
                            ? 'bg-[#f3f3f5] text-neutral-950 placeholder:text-[#717182]'
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        }`}
                      />
                    </div>
                    <div>
                      <label className="block font-['Lato:Medium',sans-serif] text-[12px] md:text-[14px] text-[#4a5565] mb-2">
                        Postal Code
                      </label>
                      <input
                        type="text"
                        value={branch.postalCode}
                        disabled={!isEditing}
                        placeholder="169608"
                        className={`w-full h-[40px] px-3 rounded-[8px] text-[14px] ${
                          isEditing
                            ? 'bg-[#f3f3f5] text-neutral-950 placeholder:text-[#717182]'
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        }`}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block font-['Lato:Medium',sans-serif] text-[12px] md:text-[14px] text-[#4a5565] mb-2">
                        Address
                      </label>
                      <input
                        type="text"
                        value={branch.address}
                        disabled={!isEditing}
                        placeholder="Enter complete address"
                        className={`w-full h-[40px] px-3 rounded-[8px] text-[14px] ${
                          isEditing
                            ? 'bg-[#f3f3f5] text-neutral-950 placeholder:text-[#717182]'
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        }`}
                      />
                    </div>
                    <div>
                      <label className="block font-['Lato:Medium',sans-serif] text-[12px] md:text-[14px] text-[#4a5565] mb-2">
                        Contact Person
                      </label>
                      <input
                        type="text"
                        value={branch.contactPerson}
                        disabled={!isEditing}
                        placeholder="Mr. Steven Lim"
                        className={`w-full h-[40px] px-3 rounded-[8px] text-[14px] ${
                          isEditing
                            ? 'bg-[#f3f3f5] text-neutral-950 placeholder:text-[#717182]'
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        }`}
                      />
                    </div>
                    <div>
                      <label className="block font-['Lato:Medium',sans-serif] text-[12px] md:text-[14px] text-[#4a5565] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        value={branch.phoneNumber}
                        disabled={!isEditing}
                        placeholder="+65 6321 4377"
                        className={`w-full h-[40px] px-3 rounded-[8px] text-[14px] ${
                          isEditing
                            ? 'bg-[#f3f3f5] text-neutral-950 placeholder:text-[#717182]'
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        }`}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block font-['Lato:Medium',sans-serif] text-[12px] md:text-[14px] text-[#4a5565] mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={branch.email}
                        disabled={!isEditing}
                        placeholder="sgh.outram@singhealth.com.sg"
                        className={`w-full h-[40px] px-3 rounded-[8px] text-[14px] ${
                          isEditing
                            ? 'bg-[#f3f3f5] text-neutral-950 placeholder:text-[#717182]'
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        }`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trip Services */}
          <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] p-4 md:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <h2 className="font-['Lato:SemiBold',sans-serif] text-[16px] md:text-[18px] text-[#2160ad] flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Trip Services
              </h2>
              <div className="flex gap-2">
                <button
                  disabled={!isEditing}
                  className={`h-[32px] px-3 md:px-4 rounded-[8px] font-['Lato:Medium',sans-serif] text-[12px] md:text-[14px] transition-colors whitespace-nowrap ${
                    isEditing
                      ? 'bg-white border border-[rgba(0,0,0,0.1)] text-neutral-950 hover:bg-[#f3f3f5]'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed border border-gray-300'
                  }`}
                >
                  Configure Hours
                </button>
                <button
                  disabled={!isEditing}
                  className={`h-[32px] px-3 md:px-4 rounded-[8px] font-['Lato:Medium',sans-serif] text-[12px] md:text-[14px] flex items-center gap-2 transition-colors whitespace-nowrap ${
                    isEditing
                      ? 'bg-[#2160ad] text-white hover:bg-[#1a4d8a]'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <Plus className="w-4 h-4" />
                  Add Trip Service
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {tripServices.map((service) => (
                <div key={service.id} className="border border-gray-200 rounded-[10px] p-3 md:p-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    <div>
                      <label className="block font-['Lato:Medium',sans-serif] text-[12px] text-[#4a5565] mb-1">
                        Trip Service
                      </label>
                      <input
                        type="text"
                        value={service.serviceType}
                        disabled={!isEditing}
                        className={`w-full h-[36px] px-3 rounded-[8px] text-[13px] ${
                          isEditing
                            ? 'bg-[#f3f3f5] text-neutral-950'
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        }`}
                      />
                    </div>
                    <div>
                      <label className="block font-['Lato:Medium',sans-serif] text-[12px] text-[#4a5565] mb-1">
                        Office Hours
                      </label>
                      <div className="flex items-center gap-1">
                        <span className="text-[#6a7282] text-[13px]">$</span>
                        <input
                          type="number"
                          value={service.officeHours}
                          disabled={!isEditing}
                          className={`w-full h-[36px] px-2 rounded-[8px] text-[13px] ${
                            isEditing
                              ? 'bg-[#f3f3f5] text-neutral-950'
                              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          }`}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block font-['Lato:Medium',sans-serif] text-[12px] text-[#4a5565] mb-1">
                        Non-Office Hours
                      </label>
                      <div className="flex items-center gap-1">
                        <span className="text-[#6a7282] text-[13px]">$</span>
                        <input
                          type="number"
                          value={service.nonOfficeHours}
                          disabled={!isEditing}
                          className={`w-full h-[36px] px-2 rounded-[8px] text-[13px] ${
                            isEditing
                              ? 'bg-[#f3f3f5] text-neutral-950'
                              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          }`}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block font-['Lato:Medium',sans-serif] text-[12px] text-[#4a5565] mb-1">
                        Weekend & PH
                      </label>
                      <div className="flex items-center gap-1">
                        <span className="text-[#6a7282] text-[13px]">$</span>
                        <input
                          type="number"
                          value={service.weekendPH}
                          disabled={!isEditing}
                          className={`w-full h-[36px] px-2 rounded-[8px] text-[13px] ${
                            isEditing
                              ? 'bg-[#f3f3f5] text-neutral-950'
                              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200">
                    <div className="flex items-center gap-3">
                      <label className="font-['Lato:Medium',sans-serif] text-[12px] text-[#4a5565]">
                        Active
                      </label>
                      <label className={`relative inline-flex items-center ${isEditing ? 'cursor-pointer' : 'cursor-not-allowed'}`}>
                        <input 
                          type="checkbox" 
                          className="sr-only peer" 
                          checked={service.active}
                          disabled={!isEditing}
                        />
                        <div className={`w-8 h-[18px] rounded-full peer relative ${
                          isEditing
                            ? 'bg-gray-300 peer-checked:bg-[#030213]'
                            : 'bg-gray-200 peer-checked:bg-gray-400'
                        }`}>
                          <div className="absolute left-0.5 top-0.5 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-4"></div>
                        </div>
                      </label>
                    </div>
                    <button
                      disabled={!isEditing}
                      className={`w-8 h-8 flex items-center justify-center rounded-lg transition-colors ${
                        isEditing
                          ? 'hover:bg-red-50 text-[#FB2C36]'
                          : 'text-gray-300 cursor-not-allowed'
                      }`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Support Services */}
          <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] p-4 md:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <h2 className="font-['Lato:SemiBold',sans-serif] text-[16px] md:text-[18px] text-[#2160ad] flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Support Services
              </h2>
              <div className="flex gap-2">
                <button
                  disabled={!isEditing}
                  className={`h-[32px] px-3 md:px-4 rounded-[8px] font-['Lato:Medium',sans-serif] text-[12px] md:text-[14px] transition-colors whitespace-nowrap ${
                    isEditing
                      ? 'bg-white border border-[rgba(0,0,0,0.1)] text-neutral-950 hover:bg-[#f3f3f5]'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed border border-gray-300'
                  }`}
                >
                  Configure Hours
                </button>
                <button
                  disabled={!isEditing}
                  className={`h-[32px] px-3 md:px-4 rounded-[8px] font-['Lato:Medium',sans-serif] text-[12px] md:text-[14px] flex items-center gap-2 transition-colors whitespace-nowrap ${
                    isEditing
                      ? 'bg-[#2160ad] text-white hover:bg-[#1a4d8a]'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <Plus className="w-4 h-4" />
                  Add Support Service
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {supportServices.map((service) => (
                <div key={service.id} className="border border-gray-200 rounded-[10px] p-3 md:p-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    <div>
                      <label className="block font-['Lato:Medium',sans-serif] text-[12px] text-[#4a5565] mb-1">
                        Service Type
                      </label>
                      <input
                        type="text"
                        value={service.serviceType}
                        disabled={!isEditing}
                        className={`w-full h-[36px] px-3 rounded-[8px] text-[13px] ${
                          isEditing
                            ? 'bg-[#f3f3f5] text-neutral-950'
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        }`}
                      />
                    </div>
                    <div>
                      <label className="block font-['Lato:Medium',sans-serif] text-[12px] text-[#4a5565] mb-1">
                        Office Hours
                      </label>
                      <div className="flex items-center gap-1">
                        <span className="text-[#6a7282] text-[13px]">$</span>
                        <input
                          type="number"
                          value={service.officeHours}
                          disabled={!isEditing}
                          className={`w-full h-[36px] px-2 rounded-[8px] text-[13px] ${
                            isEditing
                              ? 'bg-[#f3f3f5] text-neutral-950'
                              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          }`}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block font-['Lato:Medium',sans-serif] text-[12px] text-[#4a5565] mb-1">
                        Non-Office Hours
                      </label>
                      <div className="flex items-center gap-1">
                        <span className="text-[#6a7282] text-[13px]">$</span>
                        <input
                          type="number"
                          value={service.nonOfficeHours}
                          disabled={!isEditing}
                          className={`w-full h-[36px] px-2 rounded-[8px] text-[13px] ${
                            isEditing
                              ? 'bg-[#f3f3f5] text-neutral-950'
                              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          }`}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block font-['Lato:Medium',sans-serif] text-[12px] text-[#4a5565] mb-1">
                        Weekend & PH
                      </label>
                      <div className="flex items-center gap-1">
                        <span className="text-[#6a7282] text-[13px]">$</span>
                        <input
                          type="number"
                          value={service.weekendPH}
                          disabled={!isEditing}
                          className={`w-full h-[36px] px-2 rounded-[8px] text-[13px] ${
                            isEditing
                              ? 'bg-[#f3f3f5] text-neutral-950'
                              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200">
                    <div className="flex items-center gap-3">
                      <label className="font-['Lato:Medium',sans-serif] text-[12px] text-[#4a5565]">
                        Active
                      </label>
                      <label className={`relative inline-flex items-center ${isEditing ? 'cursor-pointer' : 'cursor-not-allowed'}`}>
                        <input 
                          type="checkbox" 
                          className="sr-only peer" 
                          checked={service.active}
                          disabled={!isEditing}
                        />
                        <div className={`w-8 h-[18px] rounded-full peer relative ${
                          isEditing
                            ? 'bg-gray-300 peer-checked:bg-[#030213]'
                            : 'bg-gray-200 peer-checked:bg-gray-400'
                        }`}>
                          <div className="absolute left-0.5 top-0.5 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-4"></div>
                        </div>
                      </label>
                    </div>
                    <button
                      disabled={!isEditing}
                      className={`w-8 h-8 flex items-center justify-center rounded-lg transition-colors ${
                        isEditing
                          ? 'hover:bg-red-50 text-[#FB2C36]'
                          : 'text-gray-300 cursor-not-allowed'
                      }`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Add-on Services */}
          <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] p-4 md:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <h2 className="font-['Lato:SemiBold',sans-serif] text-[16px] md:text-[18px] text-[#2160ad] flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Add-on Services
              </h2>
              <button
                disabled={!isEditing}
                className={`h-[32px] px-3 md:px-4 rounded-[8px] font-['Lato:Medium',sans-serif] text-[12px] md:text-[14px] flex items-center gap-2 transition-colors whitespace-nowrap self-start sm:self-auto ${
                  isEditing
                    ? 'bg-white border border-[rgba(0,0,0,0.1)] text-neutral-950 hover:bg-[#f3f3f5]'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed border border-gray-300'
                }`}
              >
                <Plus className="w-4 h-4" />
                Add-on Service
              </button>
            </div>

            <div className="space-y-4">
              {addonServices.map((service, index) => (
                <div key={service.id} className="border border-[rgba(0,0,0,0.1)] rounded-[10px] p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-['Lato:Medium',sans-serif] text-[14px] md:text-[16px] text-[#2160ad]">
                      Add-on Service {index + 1}
                    </h3>
                    <button
                      disabled={!isEditing}
                      className={`w-8 h-8 flex items-center justify-center rounded-lg transition-colors ${
                        isEditing
                          ? 'hover:bg-red-50 text-[#FB2C36]'
                          : 'text-gray-300 cursor-not-allowed'
                      }`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block font-['Lato:Medium',sans-serif] text-[12px] md:text-[14px] text-[#4a5565] mb-2">
                        Service Name
                      </label>
                      <input
                        type="text"
                        value={service.serviceName}
                        disabled={!isEditing}
                        placeholder="e.g., Oxygen Machine"
                        className={`w-full h-[40px] px-3 rounded-[8px] text-[14px] ${
                          isEditing
                            ? 'bg-[#f3f3f5] text-neutral-950 placeholder:text-[#717182]'
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        }`}
                      />
                    </div>
                    <div>
                      <label className="block font-['Lato:Medium',sans-serif] text-[12px] md:text-[14px] text-[#4a5565] mb-2">
                        Unit
                      </label>
                      <select
                        value={service.unit}
                        disabled={!isEditing}
                        className={`w-full h-[40px] px-3 rounded-[8px] text-[14px] ${
                          isEditing
                            ? 'bg-[#f3f3f5] text-neutral-950'
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        <option>Litre</option>
                        <option>Trip</option>
                        <option>Hour</option>
                      </select>
                    </div>
                  </div>

                  {/* Pricing Rules */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="font-['Lato:Medium',sans-serif] text-[12px] md:text-[14px] text-[#4a5565]">
                        Pricing Rules
                      </label>
                      <button
                        disabled={!isEditing}
                        className={`h-[28px] px-3 rounded-[6px] font-['Lato:Medium',sans-serif] text-[12px] flex items-center gap-1 transition-colors ${
                          isEditing
                            ? 'bg-white border border-[rgba(0,0,0,0.1)] text-neutral-950 hover:bg-[#f3f3f5]'
                            : 'bg-gray-200 text-gray-400 cursor-not-allowed border border-gray-300'
                        }`}
                      >
                        <Plus className="w-3 h-3" />
                        Add Rule
                      </button>
                    </div>

                    <div className="bg-gray-50 rounded-[10px] p-3 space-y-3">
                      {service.pricingRules.map((rule) => (
                        <div key={rule.id} className="bg-white border border-gray-200 rounded-[8px] p-3 space-y-3">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                              <label className="block font-['Lato:Medium',sans-serif] text-[11px] md:text-[12px] text-[#4a5565] mb-1">
                                Pricing Rule
                              </label>
                              <select
                                disabled={!isEditing}
                                className={`w-full h-[36px] px-2 rounded-[8px] text-[12px] md:text-[13px] ${
                                  isEditing
                                    ? 'bg-white text-neutral-950 border border-gray-200'
                                    : 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200'
                                }`}
                              >
                                <option>First (Fixed cost for initial units)</option>
                                <option>Next (Fixed cost for following units)</option>
                              </select>
                            </div>
                            <div>
                              <label className="block font-['Lato:Medium',sans-serif] text-[11px] md:text-[12px] text-[#4a5565] mb-1">
                                Unit Bound
                              </label>
                              <input
                                type="text"
                                value={rule.unitBound}
                                disabled={!isEditing}
                                placeholder="e.g., 5 Litre"
                                className={`w-full h-[36px] px-2 rounded-[8px] text-[12px] md:text-[13px] ${
                                  isEditing
                                    ? 'bg-white text-neutral-950 placeholder:text-[#717182] border border-gray-200'
                                    : 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200'
                                }`}
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                              <label className="block font-['Lato:Medium',sans-serif] text-[11px] md:text-[12px] text-[#4a5565] mb-1">
                                Amount Per Unit
                              </label>
                              <div className="flex items-center gap-2">
                                <input
                                  type="number"
                                  value={rule.amountPerUnit}
                                  disabled={!isEditing}
                                  placeholder="0"
                                  className={`flex-1 h-[36px] px-2 rounded-[8px] text-[12px] md:text-[13px] ${
                                    isEditing
                                      ? 'bg-white text-neutral-950 border border-gray-200'
                                      : 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200'
                                  }`}
                                />
                                <span className="text-[#6a7282] text-[13px]">$</span>
                              </div>
                            </div>
                            <div className="flex items-end justify-between gap-3">
                              <div className="flex-1">
                                <label className="block font-['Lato:Medium',sans-serif] text-[11px] md:text-[12px] text-[#4a5565] mb-1">
                                  Active
                                </label>
                                <label className={`relative inline-flex items-center ${isEditing ? 'cursor-pointer' : 'cursor-not-allowed'}`}>
                                  <input 
                                    type="checkbox" 
                                    className="sr-only peer" 
                                    checked={rule.active}
                                    disabled={!isEditing}
                                  />
                                  <div className={`w-8 h-[18px] rounded-full peer relative ${
                                    isEditing
                                      ? 'bg-gray-300 peer-checked:bg-[#030213]'
                                      : 'bg-gray-200 peer-checked:bg-gray-400'
                                  }`}>
                                    <div className="absolute left-0.5 top-0.5 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-4"></div>
                                  </div>
                                </label>
                              </div>
                              <button
                                disabled={!isEditing}
                                className={`w-7 h-7 flex items-center justify-center rounded-lg transition-colors ${
                                  isEditing
                                    ? 'hover:bg-red-50 text-[#FB2C36]'
                                    : 'text-gray-300 cursor-not-allowed'
                                }`}
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Charges */}
          <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] p-4 md:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <h2 className="font-['Lato:SemiBold',sans-serif] text-[16px] md:text-[18px] text-[#2160ad] flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Additional Charges
              </h2>
              <button
                disabled={!isEditing}
                className={`h-[32px] px-3 md:px-4 rounded-[8px] font-['Lato:Medium',sans-serif] text-[12px] md:text-[14px] flex items-center gap-2 transition-colors whitespace-nowrap self-start sm:self-auto ${
                  isEditing
                    ? 'bg-white border border-[rgba(0,0,0,0.1)] text-neutral-950 hover:bg-[#f3f3f5]'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed border border-gray-300'
                }`}
              >
                <Plus className="w-4 h-4" />
                Add Additional Charge
              </button>
            </div>

            <div className="space-y-4">
              {additionalCharges.map((charge, index) => (
                <div key={charge.id} className="border border-[rgba(0,0,0,0.1)] rounded-[10px] p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-['Lato:Medium',sans-serif] text-[14px] md:text-[16px] text-[#2160ad]">
                      Additional Charge {index + 1}
                    </h3>
                    <button
                      disabled={!isEditing}
                      className={`w-8 h-8 flex items-center justify-center rounded-lg transition-colors ${
                        isEditing
                          ? 'hover:bg-red-50 text-[#FB2C36]'
                          : 'text-gray-300 cursor-not-allowed'
                      }`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block font-['Lato:Medium',sans-serif] text-[12px] md:text-[14px] text-[#4a5565] mb-2">
                        Service Name
                      </label>
                      <input
                        type="text"
                        value={charge.serviceName}
                        disabled={!isEditing}
                        placeholder="e.g., Waiting Time"
                        className={`w-full h-[40px] px-3 rounded-[8px] text-[14px] ${
                          isEditing
                            ? 'bg-[#f3f3f5] text-neutral-950 placeholder:text-[#717182]'
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        }`}
                      />
                    </div>
                    <div>
                      <label className="block font-['Lato:Medium',sans-serif] text-[12px] md:text-[14px] text-[#4a5565] mb-2">
                        Unit
                      </label>
                      <select
                        value={charge.unit}
                        disabled={!isEditing}
                        className={`w-full h-[40px] px-3 rounded-[8px] text-[14px] ${
                          isEditing
                            ? 'bg-[#f3f3f5] text-neutral-950'
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        <option>Hour</option>
                        <option>Trip</option>
                        <option>Day</option>
                      </select>
                    </div>
                  </div>

                  {/* Pricing Rules */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="font-['Lato:Medium',sans-serif] text-[12px] md:text-[14px] text-[#4a5565]">
                        Pricing Rules
                      </label>
                      <button
                        disabled={!isEditing}
                        className={`h-[28px] px-3 rounded-[6px] font-['Lato:Medium',sans-serif] text-[12px] flex items-center gap-1 transition-colors ${
                          isEditing
                            ? 'bg-white border border-[rgba(0,0,0,0.1)] text-neutral-950 hover:bg-[#f3f3f5]'
                            : 'bg-gray-200 text-gray-400 cursor-not-allowed border border-gray-300'
                        }`}
                      >
                        <Plus className="w-3 h-3" />
                        Add Rule
                      </button>
                    </div>

                    <div className="bg-gray-50 rounded-[10px] p-3 space-y-3">
                      {charge.pricingRules.map((rule) => (
                        <div key={rule.id} className="bg-white border border-gray-200 rounded-[8px] p-3 space-y-3">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                              <label className="block font-['Lato:Medium',sans-serif] text-[11px] md:text-[12px] text-[#4a5565] mb-1">
                                Pricing Rule
                              </label>
                              <select
                                disabled={!isEditing}
                                className={`w-full h-[36px] px-2 rounded-[8px] text-[12px] md:text-[13px] ${
                                  isEditing
                                    ? 'bg-white text-neutral-950 border border-gray-200'
                                    : 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200'
                                }`}
                              >
                                <option>First Hour (Free)</option>
                                <option>Each Additional Hour</option>
                                <option>Per Trip Admin Charge</option>
                              </select>
                            </div>
                            <div>
                              <label className="block font-['Lato:Medium',sans-serif] text-[11px] md:text-[12px] text-[#4a5565] mb-1">
                                Unit Bound
                              </label>
                              <input
                                type="text"
                                value={rule.unitBound}
                                disabled={!isEditing}
                                placeholder="e.g., 1 Hour"
                                className={`w-full h-[36px] px-2 rounded-[8px] text-[12px] md:text-[13px] ${
                                  isEditing
                                    ? 'bg-white text-neutral-950 placeholder:text-[#717182] border border-gray-200'
                                    : 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200'
                                }`}
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                              <label className="block font-['Lato:Medium',sans-serif] text-[11px] md:text-[12px] text-[#4a5565] mb-1">
                                Amount
                              </label>
                              <div className="flex items-center gap-2">
                                <input
                                  type="number"
                                  value={rule.amountPerUnit}
                                  disabled={!isEditing}
                                  placeholder="0"
                                  className={`flex-1 h-[36px] px-2 rounded-[8px] text-[12px] md:text-[13px] ${
                                    isEditing
                                      ? 'bg-white text-neutral-950 border border-gray-200'
                                      : 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200'
                                  }`}
                                />
                                <span className="text-[#6a7282] text-[13px]">$</span>
                              </div>
                            </div>
                            <div className="flex items-end justify-between gap-3">
                              <div className="flex-1">
                                <label className="block font-['Lato:Medium',sans-serif] text-[11px] md:text-[12px] text-[#4a5565] mb-1">
                                  Active
                                </label>
                                <label className={`relative inline-flex items-center ${isEditing ? 'cursor-pointer' : 'cursor-not-allowed'}`}>
                                  <input 
                                    type="checkbox" 
                                    className="sr-only peer" 
                                    checked={rule.active}
                                    disabled={!isEditing}
                                  />
                                  <div className={`w-8 h-[18px] rounded-full peer relative ${
                                    isEditing
                                      ? 'bg-gray-300 peer-checked:bg-[#030213]'
                                      : 'bg-gray-200 peer-checked:bg-gray-400'
                                  }`}>
                                    <div className="absolute left-0.5 top-0.5 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-4"></div>
                                  </div>
                                </label>
                              </div>
                              <button
                                disabled={!isEditing}
                                className={`w-7 h-7 flex items-center justify-center rounded-lg transition-colors ${
                                  isEditing
                                    ? 'hover:bg-red-50 text-[#FB2C36]'
                                    : 'text-gray-300 cursor-not-allowed'
                                }`}
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractDetailsPage;
