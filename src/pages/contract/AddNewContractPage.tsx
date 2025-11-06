import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Upload, Clock, Trash2 } from 'lucide-react';
import FunctionalSidebar from '../components/FunctionalSidebar';
import svgPaths from '../imports/svg-qwc37ji3qp';

interface Branch {
  id: string;
  name: string;
  address: string;
  postalCode: string;
  contactPerson: string;
  phone: string;
  email: string;
}

interface ServiceLine {
  id: string;
  type: string;
  officeHours: string;
  nonOfficeHours: string;
  weekendPH: string;
  active: boolean;
}

interface PricingRule {
  id: string;
  rule: string;
  unit: string;
  amount: string;
  currency: string;
  active: boolean;
}

interface AddonService {
  id: string;
  name: string;
  unit: string;
  pricingRules: PricingRule[];
}

export default function AddNewContractPage() {
  const navigate = useNavigate();
  const [facilityName, setFacilityName] = useState('');
  const [contractId, setContractId] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [branches, setBranches] = useState<Branch[]>([]);
  const [tripServices, setTripServices] = useState<ServiceLine[]>([]);
  const [supportServices, setSupportServices] = useState<ServiceLine[]>([]);
  const [addonServices, setAddonServices] = useState<AddonService[]>([]);
  const [additionalCharges, setAdditionalCharges] = useState<AddonService[]>([]);

  const handleAddBranch = () => {
    const newBranch: Branch = {
      id: Date.now().toString(),
      name: '',
      address: '',
      postalCode: '',
      contactPerson: '',
      phone: '',
      email: '',
    };
    setBranches([...branches, newBranch]);
  };

  const handleAddTripService = () => {
    const newService: ServiceLine = {
      id: Date.now().toString(),
      type: '',
      officeHours: '0',
      nonOfficeHours: '0',
      weekendPH: '0',
      active: true,
    };
    setTripServices([...tripServices, newService]);
  };

  const handleAddSupportService = () => {
    const newService: ServiceLine = {
      id: Date.now().toString(),
      type: '',
      officeHours: '0',
      nonOfficeHours: '0',
      weekendPH: '0',
      active: true,
    };
    setSupportServices([...supportServices, newService]);
  };

  const handleAddAddonService = () => {
    const newService: AddonService = {
      id: Date.now().toString(),
      name: '',
      unit: '',
      pricingRules: [],
    };
    setAddonServices([...addonServices, newService]);
  };

  const handleAddCharge = () => {
    const newCharge: AddonService = {
      id: Date.now().toString(),
      name: '',
      unit: '',
      pricingRules: [],
    };
    setAdditionalCharges([...additionalCharges, newCharge]);
  };

  const handleSubmit = () => {
    // Validate required fields
    if (!facilityName || !contractId || !startDate || !endDate) {
      alert('Please fill in all required fields');
      return;
    }
    
    // Navigate back to service management
    navigate('/services');
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* <FunctionalSidebar /> */}
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header with Breadcrumbs */}
        <div className="bg-[rgba(33,96,173,0.05)] px-6 py-4">
          <div className="flex items-center gap-1 text-sm mb-2">
            <button 
              onClick={() => navigate('/services')}
              className="font-['Lato:Regular',sans-serif] text-[14px] text-[#4a5565] hover:text-[#2160ad]"
            >
              Management
            </button>
            <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 14 14">
              <path d="M5.25 10.5L8.75 7L5.25 3.5" stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            </svg>
            <button 
              onClick={() => navigate('/services')}
              className="font-['Lato:Regular',sans-serif] text-[14px] text-[#4a5565] hover:text-[#2160ad]"
            >
              Services
            </button>
            <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 14 14">
              <path d="M5.25 10.5L8.75 7L5.25 3.5" stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            </svg>
            <span className="font-['Lato:Regular',sans-serif] text-[14px] text-[#4a5565]">Add New Contract</span>
          </div>
          <h1 className="font-['Lato:Medium',sans-serif] text-[26px] text-[#2160ad]">
            Add New Contract
          </h1>
        </div>

        {/* Back Button */}
        <div className="px-6 py-4">
          <button
            onClick={() => navigate('/services')}
            className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[8px] h-[36px] px-[17px] py-[9px] font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950 hover:bg-[#f3f3f5] transition-colors"
          >
            {'<'} Back to Services
          </button>
        </div>

        {/* Form Content - Scrollable */}
        <div className="flex-1 overflow-y-auto px-6 pb-6">
          <div className="max-w-[1400px] mx-auto space-y-8">
            {/* Card 1: Contract Information */}
            <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] p-6">
              <div className="flex items-center gap-2 mb-8">
                <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 20 20">
                  <g clipPath="url(#clip0_86_1205)">
                    <path d={svgPaths.p37143280} stroke="#2160AD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p28d5c000} stroke="#2160AD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p2b722f80} stroke="#2160AD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d="M8.33398 5H11.6673" stroke="#2160AD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d="M8.33398 8.3335H11.6673" stroke="#2160AD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d="M8.33398 11.6665H11.6673" stroke="#2160AD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d="M8.33398 15H11.6673" stroke="#2160AD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </g>
                  <defs>
                    <clipPath id="clip0_86_1205">
                      <rect fill="white" height="20" width="20" />
                    </clipPath>
                  </defs>
                </svg>
                <h2 className="font-['Lato:Regular',sans-serif] text-[16px] text-[#2160ad]">
                  Contract Information
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">
                    Healthcare Facility Name
                  </label>
                  <input
                    type="text"
                    value={facilityName}
                    onChange={(e) => setFacilityName(e.target.value)}
                    placeholder="Search or enter healthcare facility name"
                    className="w-full h-[40px] px-3 bg-[#f3f3f5] border border-transparent rounded-[8px] font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950 placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">
                    Contract ID
                  </label>
                  <input
                    type="text"
                    value={contractId}
                    onChange={(e) => setContractId(e.target.value)}
                    placeholder="Enter contract ID"
                    className="w-full h-[40px] px-3 bg-[#f3f3f5] border border-transparent rounded-[8px] font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950 placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">
                    Contract Start Date
                  </label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full h-[40px] px-3 bg-[#f3f3f5] border border-transparent rounded-[8px] font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950 focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">
                    Contract End Date
                  </label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full h-[40px] px-3 bg-[#f3f3f5] border border-transparent rounded-[8px] font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950 focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                  />
                </div>
              </div>
            </div>

            {/* Card 2: Contract Documents */}
            <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] p-6">
              <div className="flex items-center gap-2 mb-8">
                <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 20 20">
                  <g clipPath="url(#clip0_86_1205_2)">
                    <path d={svgPaths.p37143280} stroke="#2160AD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p28d5c000} stroke="#2160AD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p2b722f80} stroke="#2160AD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d="M8.33398 5H11.6673" stroke="#2160AD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d="M8.33398 8.3335H11.6673" stroke="#2160AD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d="M8.33398 11.6665H11.6673" stroke="#2160AD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d="M8.33398 15H11.6673" stroke="#2160AD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </g>
                  <defs>
                    <clipPath id="clip0_86_1205_2">
                      <rect fill="white" height="20" width="20" />
                    </clipPath>
                  </defs>
                </svg>
                <h2 className="font-['Lato:Regular',sans-serif] text-[16px] text-[#2160ad]">
                  Contract Documents
                </h2>
              </div>

              <div className="border-2 border-dashed border-[#d1d5dc] rounded-[10px] p-8">
                <div className="flex flex-col items-center gap-4">
                  <Upload className="w-8 h-8 text-[#99A1AF]" />
                  <div className="text-center">
                    <p className="font-['Lato:Medium',sans-serif] text-[16px] text-[#364153] mb-1">
                      Drag and drop files here
                    </p>
                    <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#6a7282]">
                      or click to browse files
                    </p>
                  </div>
                  <p className="font-['Lato:Regular',sans-serif] text-[12px] text-[#99a1af] text-center">
                    Supports PDF, DOC, DOCX, XLS, XLSX, TXT files
                  </p>
                </div>
              </div>
              <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#6a7282] mt-4">
                Upload contract documents, terms of service, or other relevant files
              </p>
            </div>

            {/* Card 3: Branch Information */}
            <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] p-6">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p3e4dcf80} stroke="#2160AD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p35ba4680} stroke="#2160AD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </svg>
                  <h2 className="font-['Lato:Regular',sans-serif] text-[16px] text-[#2160ad]">
                    Branch Information
                  </h2>
                </div>
                <button
                  onClick={handleAddBranch}
                  className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[8px] h-[32px] px-4 font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950 flex items-center gap-2 hover:bg-[#f3f3f5] transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Add Branch
                </button>
              </div>

              {branches.length === 0 ? (
                <p className="text-center text-[#717182] py-8">
                  No branches added. Click "Add Branch" to get started.
                </p>
              ) : (
                <div className="space-y-6">
                  {branches.map((branch, index) => (
                    <div key={branch.id} className="border border-[rgba(0,0,0,0.1)] rounded-[10px] p-4">
                      <h3 className="font-['Lato:Medium',sans-serif] text-[16px] text-[#2160ad] mb-4">
                        Branch {index + 1}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="flex flex-col gap-2">
                          <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">
                            Branch Name
                          </label>
                          <input
                            type="text"
                            placeholder="Enter branch name"
                            className="w-full h-[40px] px-3 bg-[#f3f3f5] border border-transparent rounded-[8px] text-[16px] placeholder:text-[#717182]"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">
                            Postal Code
                          </label>
                          <input
                            type="text"
                            placeholder="Enter postal code"
                            className="w-full h-[40px] px-3 bg-[#f3f3f5] border border-transparent rounded-[8px] text-[16px] placeholder:text-[#717182]"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 mb-4">
                        <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">
                          Address
                        </label>
                        <textarea
                          placeholder="Enter complete address"
                          className="w-full h-[80px] px-3 py-2 bg-[#f3f3f5] border border-transparent rounded-[8px] text-[16px] placeholder:text-[#717182] resize-none"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex flex-col gap-2">
                          <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">
                            Contact Person
                          </label>
                          <input
                            type="text"
                            placeholder="Contact person name"
                            className="w-full h-[40px] px-3 bg-[#f3f3f5] border border-transparent rounded-[8px] text-[16px] placeholder:text-[#717182]"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">
                            Phone Number
                          </label>
                          <input
                            type="text"
                            placeholder="e.g., +65 6225 5554"
                            className="w-full h-[40px] px-3 bg-[#f3f3f5] border border-transparent rounded-[8px] text-[16px] placeholder:text-[#717182]"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">
                            Email
                          </label>
                          <input
                            type="email"
                            placeholder="contact@healthcare.com"
                            className="w-full h-[40px] px-3 bg-[#f3f3f5] border border-transparent rounded-[8px] text-[16px] placeholder:text-[#717182]"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Card 4: Trip Services */}
            <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 20 20">
                    <path d="M6.66602 1.6665V4.99984" stroke="#2160AD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d="M13.334 1.6665V4.99984" stroke="#2160AD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p1da67b80} stroke="#2160AD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d="M2.5 8.33333H17.5" stroke="#2160AD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </svg>
                  <h2 className="font-['Lato:Regular',sans-serif] text-[16px] text-[#2160ad]">
                    Trip Services
                  </h2>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <button className="bg-white border border-[#2160ad] rounded-[8px] h-[32px] px-4 font-['Lato:Medium',sans-serif] text-[16px] text-[#2160ad] flex items-center gap-2 hover:bg-[rgba(33,96,173,0.05)] transition-colors">
                    <Clock className="w-4 h-4" />
                    Configure Hours
                  </button>
                  <button
                    onClick={handleAddTripService}
                    className="bg-[#2160ad] rounded-[8px] h-[32px] px-4 font-['Lato:Medium',sans-serif] text-[16px] text-white flex items-center gap-2 hover:bg-[#1a4d8a] transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    Add Trip Service Line
                  </button>
                </div>
              </div>

              <ServiceTable services={tripServices} onDelete={(id) => setTripServices(tripServices.filter(s => s.id !== id))} />
            </div>

            {/* Card 5: Support Services */}
            <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] p-6">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 20 20">
                    <g clipPath="url(#clip0_86_1205_3)">
                      <path d={svgPaths.p37143280} stroke="#2160AD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d={svgPaths.p28d5c000} stroke="#2160AD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d={svgPaths.p2b722f80} stroke="#2160AD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d="M8.33398 5H11.6673" stroke="#2160AD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d="M8.33398 8.3335H11.6673" stroke="#2160AD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d="M8.33398 11.6665H11.6673" stroke="#2160AD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d="M8.33398 15H11.6673" stroke="#2160AD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </g>
                    <defs>
                      <clipPath id="clip0_86_1205_3">
                        <rect fill="white" height="20" width="20" />
                      </clipPath>
                    </defs>
                  </svg>
                  <h2 className="font-['Lato:Regular',sans-serif] text-[16px] text-[#2160ad]">
                    Support Services
                  </h2>
                </div>
                <button
                  onClick={handleAddSupportService}
                  className="bg-[#2160ad] rounded-[8px] h-[32px] px-4 font-['Lato:Medium',sans-serif] text-[16px] text-white flex items-center gap-2 hover:bg-[#1a4d8a] transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Add Support Service Line
                </button>
              </div>

              <ServiceTable services={supportServices} onDelete={(id) => setSupportServices(supportServices.filter(s => s.id !== id))} />
            </div>

            {/* Card 6: Add-on Services */}
            <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] p-6">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <Plus className="w-[20px] h-[20px] text-[#2160ad]" />
                  <h2 className="font-['Lato:Regular',sans-serif] text-[16px] text-[#2160ad]">
                    Add-on Services
                  </h2>
                </div>
                <button
                  onClick={handleAddAddonService}
                  className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[8px] h-[32px] px-4 font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950 flex items-center gap-2 hover:bg-[#f3f3f5] transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Add Service
                </button>
              </div>

              {addonServices.length === 0 ? (
                <p className="text-center text-[#717182] py-8">
                  No add-on services added.
                </p>
              ) : (
                <div className="space-y-6">
                  {addonServices.map((service, index) => (
                    <AddonServiceCard key={service.id} service={service} index={index} />
                  ))}
                </div>
              )}
            </div>

            {/* Card 7: Additional Charges */}
            <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] p-6">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 20 20">
                    <path d="M10 1.66699V18.3337" stroke="#2160AD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d="M13.3333 4.16699H8.33333C7.71449 4.16699 7.121 4.41282 6.68342 4.8504C6.24583 5.28799 6 5.88148 6 6.50033C6 7.11917 6.24583 7.71266 6.68342 8.15024C7.121 8.58783 7.71449 8.83366 8.33333 8.83366H11.6667C12.2855 8.83366 12.879 9.07949 13.3166 9.51708C13.7542 9.95466 14 10.5482 14 11.167C14 11.7858 13.7542 12.3793 13.3166 12.8169C12.879 13.2545 12.2855 13.5003 11.6667 13.5003H6" stroke="#2160AD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </svg>
                  <h2 className="font-['Lato:Regular',sans-serif] text-[16px] text-[#2160ad]">
                    Additional Charges
                  </h2>
                </div>
                <button
                  onClick={handleAddCharge}
                  className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[8px] h-[32px] px-4 font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950 flex items-center gap-2 hover:bg-[#f3f3f5] transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Add Charge
                </button>
              </div>

              {additionalCharges.length === 0 ? (
                <p className="text-center text-[#717182] py-8">
                  No additional charges added.
                </p>
              ) : (
                <div className="space-y-6">
                  {additionalCharges.map((charge, index) => (
                    <AddonServiceCard key={charge.id} service={charge} index={index} isCharge />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="border-t border-[rgba(0,0,0,0.1)] px-6 py-4 flex items-center justify-end gap-4">
          <button
            onClick={() => navigate('/services')}
            className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[8px] h-[36px] px-4 font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950 hover:bg-[#f3f3f5] transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-[#2160ad] rounded-[8px] h-[36px] px-4 font-['Lato:Medium',sans-serif] text-[16px] text-white hover:bg-[#1a4d8a] transition-colors"
          >
            Create Contract
          </button>
        </div>
      </div>
    </div>
  );
}

// Service Table Component
function ServiceTable({ services, onDelete }: { services: ServiceLine[]; onDelete: (id: string) => void }) {
  if (services.length === 0) {
    return (
      <div className="bg-[rgba(61,61,61,0.03)] border border-gray-100 rounded-[10px] p-8 text-center">
        <p className="text-[#717182]">No services added yet. Click the button above to add a service.</p>
      </div>
    );
  }

  return (
    <div className="bg-[rgba(61,61,61,0.03)] border border-gray-100 rounded-[10px] overflow-x-auto">
      <table className="w-full min-w-[800px]">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="px-4 py-3 text-left font-['Lato:SemiBold',sans-serif] text-[16px] text-[#29384d]">
              Trip Service
            </th>
            <th className="px-4 py-3 text-left font-['Lato:SemiBold',sans-serif] text-[16px] text-[#29384d]">
              Office Hours
            </th>
            <th className="px-4 py-3 text-left font-['Lato:SemiBold',sans-serif] text-[16px] text-[#29384d]">
              Non-Office Hours
            </th>
            <th className="px-4 py-3 text-left font-['Lato:SemiBold',sans-serif] text-[16px] text-[#29384d]">
              Weekend & PH
            </th>
            <th className="px-4 py-3 text-left font-['Lato:SemiBold',sans-serif] text-[16px] text-[#29384d]">
              Active
            </th>
            <th className="px-4 py-3 text-left font-['Lato:SemiBold',sans-serif] text-[16px] text-[#29384d]">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id}>
              <td className="px-4 py-3">
                <input
                  type="text"
                  placeholder="Enter trip type"
                  className="w-full min-w-[150px] h-[40px] px-3 bg-white rounded-[8px] text-[16px] placeholder:text-[#717182]"
                />
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center">
                  <span className="text-[#6a7282] mr-2">$</span>
                  <input
                    type="number"
                    placeholder="0"
                    className="w-full min-w-[80px] h-[40px] px-3 bg-white rounded-[8px] text-[16px]"
                  />
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center">
                  <span className="text-[#6a7282] mr-2">$</span>
                  <input
                    type="number"
                    placeholder="0"
                    className="w-full min-w-[80px] h-[40px] px-3 bg-white rounded-[8px] text-[16px]"
                  />
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center">
                  <span className="text-[#6a7282] mr-2">$</span>
                  <input
                    type="number"
                    placeholder="0"
                    className="w-full min-w-[80px] h-[40px] px-3 bg-white rounded-[8px] text-[16px]"
                  />
                </div>
              </td>
              <td className="px-4 py-3">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-8 h-[18px] bg-gray-300 rounded-full peer peer-checked:bg-[#030213] peer-focus:ring-2 peer-focus:ring-[#2160ad] relative">
                    <div className="absolute left-0.5 top-0.5 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-4"></div>
                  </div>
                </label>
              </td>
              <td className="px-4 py-3">
                <button
                  onClick={() => onDelete(service.id)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Trash2 className="w-4 h-4 text-[#4A5565]" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Add-on Service Card Component
function AddonServiceCard({ service, index, isCharge = false }: { service: AddonService; index: number; isCharge?: boolean }) {
  return (
    <div className="border border-[rgba(0,0,0,0.1)] rounded-[10px] p-4">
      <h3 className="font-['Lato:Medium',sans-serif] text-[16px] text-[#2160ad] mb-4">
        {isCharge ? `Additional Charge ${index + 1}` : `Add-on Service ${index + 1}`}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="flex flex-col gap-2">
          <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">
            {isCharge ? 'Charge Name' : 'Service Name'}
          </label>
          <input
            type="text"
            placeholder={isCharge ? 'e.g., Waiting Time' : 'e.g., Oxygen'}
            className="w-full h-[40px] px-3 bg-[#f3f3f5] border border-transparent rounded-[8px] text-[16px] placeholder:text-[#717182]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">
            Unit
          </label>
          <select className="w-full h-[40px] px-3 bg-[#f3f3f5] border border-transparent rounded-[8px] text-[16px]">
            <option>Litre</option>
            <option>Hours</option>
            <option>Unit</option>
          </select>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-4">
          <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">
            Pricing Rules
          </label>
          <button className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[8px] h-[32px] px-4 font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950 flex items-center gap-2 hover:bg-[#f3f3f5] transition-colors">
            <Plus className="w-4 h-4" />
            {isCharge ? 'Add Tier' : 'Add Rule'}
          </button>
        </div>

        <div className="bg-gray-50 rounded-[10px] p-4 overflow-x-auto">
          <div className="min-w-[600px]">
            <div className="grid grid-cols-5 gap-2 text-[14px] text-[#4a5565] mb-2">
              <div>Pricing Rule</div>
              <div>Unit {isCharge ? '(hours)' : '(Litre)'}</div>
              <div>Amount Per Unit</div>
              <div>Active</div>
              <div>Actions</div>
            </div>
            
            <div className="grid grid-cols-5 gap-2 items-center">
              <select className="h-[40px] px-3 bg-[#f3f3f5] border border-transparent rounded-[8px] text-[16px]">
                <option>First (Fixed cost for initial units)</option>
                <option>Next (Fixed cost for following units)</option>
              </select>
              <input
                type="number"
                placeholder="1"
                className="h-[40px] px-3 bg-[#f3f3f5] border border-transparent rounded-[8px] text-[16px]"
              />
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  placeholder="0"
                  className="flex-1 h-[40px] px-3 bg-[#f3f3f5] border border-transparent rounded-[8px] text-[16px]"
                />
                <select className="w-16 h-[40px] px-2 bg-[#f3f3f5] border border-transparent rounded-[8px] text-[16px]">
                  <option>$</option>
                </select>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-8 h-[18px] bg-gray-300 rounded-full peer peer-checked:bg-[#030213] relative">
                  <div className="absolute left-0.5 top-0.5 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-4"></div>
                </div>
              </label>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-red-50 transition-colors">
                <Trash2 className="w-4 h-4 text-[#FB2C36]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
