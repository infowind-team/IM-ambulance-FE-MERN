import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Search, Plus, Clock, Edit3, Trash2 } from 'lucide-react';
import FunctionalSidebar from '../components/FunctionalSidebar';

interface Contract {
  id: string;
  facilityName: string;
  contractId: string;
  startDate: string;
  endDate: string;
  branches: string;
  status: 'Active' | 'Archived';
  tripServices: number;
  supportServices: number;
  addonServices: number;
  additionalCharges: number;
}

interface TripService {
  id: string;
  tripService: string;
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
  actions: string;
}

interface AddonService {
  id: string;
  serviceName: string;
  unit: string;
  active: boolean;
  pricingRules: PricingRule[];
}

interface AdditionalCharge {
  id: string;
  chargeName: string;
  unit: string;
  active: boolean;
  pricingRules: PricingRule[];
}

const mockContracts: Contract[] = [
  {
    id: '1',
    facilityName: 'Singapore General Hospital',
    contractId: 'SGH-2025-001',
    startDate: '01/01/2025',
    endDate: '31/12/2025',
    branches: 'SGH - Outram, SGH - Block 6 Specialist Centre',
    status: 'Active',
    tripServices: 3,
    supportServices: 4,
    addonServices: 4,
    additionalCharges: 2,
  },
  {
    id: '2',
    facilityName: 'Mount Elizabeth Hospital',
    contractId: 'MEH-2025-002',
    startDate: '01/02/2025',
    endDate: '31/01/2026',
    branches: 'MEH Main Branch',
    status: 'Active',
    tripServices: 2,
    supportServices: 2,
    addonServices: 2,
    additionalCharges: 2,
  },
  {
    id: '3',
    facilityName: 'Tan Tock Seng Hospital',
    contractId: 'TTSH-2025-004',
    startDate: '01/03/2025',
    endDate: '28/02/2026',
    branches: 'TTSH Main Branch',
    status: 'Active',
    tripServices: 3,
    supportServices: 2,
    addonServices: 2,
    additionalCharges: 2,
  },
  {
    id: '4',
    facilityName: 'National University Hospital',
    contractId: 'NUH-2023-003',
    startDate: '01/01/2023',
    endDate: '31/12/2023',
    branches: 'NUH Main Branch',
    status: 'Archived',
    tripServices: 0,
    supportServices: 0,
    addonServices: 0,
    additionalCharges: 0,
  },
  {
    id: '5',
    facilityName: "KK Women's and Children's Hospital",
    contractId: 'KKH-2025-005',
    startDate: '15/01/2025',
    endDate: '10/02/2025',
    branches: 'KKH Main Branch',
    status: 'Archived',
    tripServices: 2,
    supportServices: 0,
    addonServices: 0,
    additionalCharges: 0,
  },
  {
    id: '6',
    facilityName: 'Changi General Hospital',
    contractId: 'CGH-2025-006',
    startDate: '01/01/2025',
    endDate: '25/01/2025',
    branches: 'CGH Main Branch',
    status: 'Archived',
    tripServices: 2,
    supportServices: 0,
    addonServices: 0,
    additionalCharges: 0,
  },
];

const initialTripServices: TripService[] = [
  { id: '1', tripService: 'Basic Ambulance', officeHours: '150', nonOfficeHours: '200', weekendPH: '250', active: true },
  { id: '2', tripService: 'ALS Ambulance', officeHours: '250', nonOfficeHours: '300', weekendPH: '350', active: true },
  { id: '3', tripService: 'Medical Escort', officeHours: '100', nonOfficeHours: '150', weekendPH: '180', active: true },
];

const initialSupportServices: SupportService[] = [
  { id: '1', serviceType: 'EMT Support', officeHours: '80', nonOfficeHours: '100', weekendPH: '120', active: true },
  { id: '2', serviceType: 'Paramedic Support', officeHours: '120', nonOfficeHours: '150', weekendPH: '180', active: true },
];

const initialAddonServices: AddonService[] = [
  {
    id: '1',
    serviceName: 'Oxygen Supply',
    unit: 'Litre',
    active: true,
    pricingRules: [
      { id: '1', rule: 'First (Fixed cost for initial units)', unitBound: '5 Litre', amountPerUnit: '20', actions: '' },
      { id: '2', rule: 'Next (Fixed cost for following units)', unitBound: 'Per Litre', amountPerUnit: '3', actions: '' },
    ]
  },
  {
    id: '2',
    serviceName: 'Wheelchair',
    unit: 'Trip',
    active: true,
    pricingRules: [
      { id: '1', rule: 'Per Trip Charge', unitBound: 'Per Trip', amountPerUnit: '15', actions: '' },
    ]
  },
];

const initialAdditionalCharges: AdditionalCharge[] = [
  {
    id: '1',
    chargeName: 'Waiting Time',
    unit: 'Hour',
    active: true,
    pricingRules: [
      { id: '1', rule: 'First Hour (Free)', unitBound: '1 Hour', amountPerUnit: '0', actions: '' },
      { id: '2', rule: 'Each Additional Hour', unitBound: 'Per Hour', amountPerUnit: '50', actions: '' },
    ]
  },
  {
    id: '2',
    chargeName: 'Admin Fee',
    unit: 'Trip',
    active: true,
    pricingRules: [
      { id: '1', rule: 'Per Trip Admin Charge', unitBound: 'Per Trip', amountPerUnit: '10', actions: '' },
    ]
  },
];

export default function ServiceManagementPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<'active' | 'public' | 'archived'>('active');
  const [searchQuery, setSearchQuery] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  // Handle tab from URL query parameter
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab');
    if (tab === 'archived' || tab === 'active' || tab === 'public') {
      setActiveTab(tab);
    }
  }, [location.search]);

  // Public Rates State
  const [tripServices, setTripServices] = useState<TripService[]>(initialTripServices);
  const [supportServices, setSupportServices] = useState<SupportService[]>(initialSupportServices);
  const [addonServices, setAddonServices] = useState<AddonService[]>(initialAddonServices);
  const [additionalCharges, setAdditionalCharges] = useState<AdditionalCharge[]>(initialAdditionalCharges);

  const filteredContracts = mockContracts.filter(contract => {
    const matchesSearch = searchQuery === '' || 
      contract.facilityName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contract.contractId.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesTab = activeTab === 'active' ? contract.status === 'Active' : contract.status === 'Archived';
    
    return matchesSearch && matchesTab;
  });

  const handleCardClick = (contractId: string) => {
    const contract = mockContracts.find(c => c.id === contractId);
    if (contract?.status === 'Archived') {
      navigate(`/services/archived-contract/${contractId}`);
    } else {
      navigate(`/services/contract/${contractId}`);
    }
  };

  const handleAddTripService = () => {
    const newService: TripService = {
      id: Date.now().toString(),
      tripService: '',
      officeHours: '0',
      nonOfficeHours: '0',
      weekendPH: '0',
      active: true,
    };
    setTripServices([...tripServices, newService]);
  };

  const handleAddSupportService = () => {
    const newService: SupportService = {
      id: Date.now().toString(),
      serviceType: '',
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
      serviceName: '',
      unit: 'Litre',
      active: true,
      pricingRules: [],
    };
    setAddonServices([...addonServices, newService]);
  };

  const handleAddAdditionalCharge = () => {
    const newCharge: AdditionalCharge = {
      id: Date.now().toString(),
      chargeName: '',
      unit: 'Hour',
      active: true,
      pricingRules: [],
    };
    setAdditionalCharges([...additionalCharges, newCharge]);
  };

  const handleDeleteTripService = (id: string) => {
    setTripServices(tripServices.filter(s => s.id !== id));
  };

  const handleDeleteSupportService = (id: string) => {
    setSupportServices(supportServices.filter(s => s.id !== id));
  };

  const handleDeleteAddonService = (id: string) => {
    setAddonServices(addonServices.filter(s => s.id !== id));
  };

  const handleDeleteAdditionalCharge = (id: string) => {
    setAdditionalCharges(additionalCharges.filter(c => c.id !== id));
  };

  const handleAddPricingRule = (serviceId: string, type: 'addon' | 'charge') => {
    const newRule: PricingRule = {
      id: Date.now().toString(),
      rule: 'First (Fixed cost for initial units)',
      unitBound: '',
      amountPerUnit: '0',
      actions: '',
    };

    if (type === 'addon') {
      setAddonServices(addonServices.map(service => 
        service.id === serviceId 
          ? { ...service, pricingRules: [...service.pricingRules, newRule] }
          : service
      ));
    } else {
      setAdditionalCharges(additionalCharges.map(charge => 
        charge.id === serviceId 
          ? { ...charge, pricingRules: [...charge.pricingRules, newRule] }
          : charge
      ));
    }
  };

  const handleDeletePricingRule = (serviceId: string, ruleId: string, type: 'addon' | 'charge') => {
    if (type === 'addon') {
      setAddonServices(addonServices.map(service => 
        service.id === serviceId 
          ? { ...service, pricingRules: service.pricingRules.filter(r => r.id !== ruleId) }
          : service
      ));
    } else {
      setAdditionalCharges(additionalCharges.map(charge => 
        charge.id === serviceId 
          ? { ...charge, pricingRules: charge.pricingRules.filter(r => r.id !== ruleId) }
          : charge
      ));
    }
  };

  // Update handlers for Trip Services
  const updateTripService = (id: string, field: keyof TripService, value: string | boolean) => {
    setTripServices(tripServices.map(service => 
      service.id === id ? { ...service, [field]: value } : service
    ));
  };

  // Update handlers for Support Services
  const updateSupportService = (id: string, field: keyof SupportService, value: string | boolean) => {
    setSupportServices(supportServices.map(service => 
      service.id === id ? { ...service, [field]: value } : service
    ));
  };

  // Update handlers for Addon Services
  const updateAddonService = (id: string, field: keyof AddonService, value: string | boolean) => {
    setAddonServices(addonServices.map(service => 
      service.id === id ? { ...service, [field]: value } : service
    ));
  };

  // Update handlers for Additional Charges
  const updateAdditionalCharge = (id: string, field: keyof AdditionalCharge, value: string | boolean) => {
    setAdditionalCharges(additionalCharges.map(charge => 
      charge.id === id ? { ...charge, [field]: value } : charge
    ));
  };

  // Update handlers for Pricing Rules
  const updatePricingRule = (serviceId: string, ruleId: string, field: keyof PricingRule, value: string, type: 'addon' | 'charge') => {
    if (type === 'addon') {
      setAddonServices(addonServices.map(service => 
        service.id === serviceId 
          ? {
              ...service,
              pricingRules: service.pricingRules.map(rule =>
                rule.id === ruleId ? { ...rule, [field]: value } : rule
              )
            }
          : service
      ));
    } else {
      setAdditionalCharges(additionalCharges.map(charge => 
        charge.id === serviceId 
          ? {
              ...charge,
              pricingRules: charge.pricingRules.map(rule =>
                rule.id === ruleId ? { ...rule, [field]: value } : rule
              )
            }
          : charge
      ));
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* <FunctionalSidebar /> */}
      
      <div className="flex-1 flex flex-col">
        {/* Header with Breadcrumbs */}
        <div className="bg-[rgba(33,96,173,0.05)] px-6 py-4">
          <div className="flex items-center gap-1 text-sm mb-2">
            <button className="text-[#4a5565] hover:text-[#2160ad]">Management</button>
            <span className="text-[#717182]">›</span>
            <span className="text-[#4a5565]">Services</span>
          </div>
          <h1 className="font-['Lato:Medium',sans-serif] text-[26px] text-[#2160ad]">
            Service Management
          </h1>
        </div>

        {/* Tabs */}
        <div className="bg-white border-b border-[rgba(0,0,0,0.1)]">
          <div className="bg-[rgba(33,96,173,0.05)] border border-[rgba(33,96,173,0.1)] rounded-lg mx-6 mt-6 mb-1 overflow-hidden">
            <div className="flex">
              <button
                onClick={() => setActiveTab('active')}
                className={`flex-1 px-4 py-3 font-['Lato:SemiBold',sans-serif] text-[16px] transition-colors ${
                  activeTab === 'active'
                    ? 'bg-white text-[#2160ad] shadow-[0px_2px_8px_0px_rgba(33,96,173,0.15)]'
                    : 'text-[rgba(33,96,173,0.7)]'
                }`}
              >
                Active Contracts
              </button>
              <button
                onClick={() => setActiveTab('public')}
                className={`flex-1 px-4 py-3 font-['Lato:Medium',sans-serif] text-[16px] transition-colors ${
                  activeTab === 'public'
                    ? 'bg-white text-[#2160ad] shadow-[0px_2px_8px_0px_rgba(33,96,173,0.15)]'
                    : 'text-[rgba(33,96,173,0.7)]'
                }`}
              >
                Public Rates
              </button>
              <button
                onClick={() => setActiveTab('archived')}
                className={`flex-1 px-4 py-3 font-['Lato:Medium',sans-serif] text-[16px] transition-colors ${
                  activeTab === 'archived'
                    ? 'bg-white text-[#2160ad] shadow-[0px_2px_8px_0px_rgba(33,96,173,0.15)]'
                    : 'text-[rgba(33,96,173,0.7)]'
                }`}
              >
                Archived Contracts
              </button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto">
          {activeTab === 'public' ? (
            // Public Rates Tab Content
            <div className="p-6">
              {/* Subheader */}
              <div className="mb-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-2">
                  <div>
                    <h2 className="font-['Lato:SemiBold',sans-serif] text-[20px] text-neutral-950 mb-1">
                      Public Rates Configuration
                    </h2>
                    <p className="font-['Lato:Regular',sans-serif] text-[16px] text-[#6a7282]">
                      Define public service rates used for contract references and billing.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="bg-white border border-[#2160ad] rounded-[8px] h-[36px] px-4 font-['Lato:Medium',sans-serif] text-[16px] text-[#2160ad] flex items-center gap-2 hover:bg-[rgba(33,96,173,0.05)] transition-colors whitespace-nowrap">
                      <Clock className="w-4 h-4" />
                      Configure Hours
                    </button>
                    <button 
                      onClick={() => setIsEditing(!isEditing)}
                      className="bg-[#2160ad] rounded-[8px] h-[36px] px-4 font-['Lato:Medium',sans-serif] text-[16px] text-white flex items-center gap-2 hover:bg-[#1a4d8a] transition-colors whitespace-nowrap"
                    >
                      <Edit3 className="w-4 h-4" />
                      {isEditing ? 'Save Rates' : 'Edit Rates'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Service Cards */}
              <div className="max-w-[1400px] mx-auto space-y-8">
                {/* Trip Services Card */}
                <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] p-4 md:p-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
                    <h3 className="font-['Lato:SemiBold',sans-serif] text-[18px] text-[#2160ad]">
                      Trip Services
                    </h3>
                    <button
                      onClick={handleAddTripService}
                      disabled={!isEditing}
                      className={`h-[32px] px-4 rounded-[8px] font-['Lato:Medium',sans-serif] text-[14px] sm:text-[16px] flex items-center gap-2 transition-colors whitespace-nowrap ${
                        isEditing
                          ? 'bg-[#2160ad] text-white hover:bg-[#1a4d8a]'
                          : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      <Plus className="w-4 h-4" />
                      Add Trip Service
                    </button>
                  </div>

                  <div className="space-y-4">
                    {tripServices.map((service) => (
                      <div key={service.id} className="border border-gray-200 rounded-[10px] p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          <div className="lg:col-span-3">
                            <label className="block font-['Lato:Medium',sans-serif] text-[14px] text-[#4a5565] mb-2">
                              Trip Service
                            </label>
                            <input
                              type="text"
                              value={service.tripService}
                              onChange={(e) => updateTripService(service.id, 'tripService', e.target.value)}
                              disabled={!isEditing}
                              className={`w-full h-[40px] px-3 rounded-[8px] text-[16px] ${
                                isEditing
                                  ? 'bg-[#f3f3f5] text-neutral-950'
                                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                              }`}
                              placeholder="Enter trip service"
                            />
                          </div>
                          <div>
                            <label className="block font-['Lato:Medium',sans-serif] text-[14px] text-[#4a5565] mb-2">
                              Office Hours
                            </label>
                            <div className="flex items-center gap-1">
                              <span className="text-[#6a7282]">$</span>
                              <input
                                type="number"
                                value={service.officeHours}
                                onChange={(e) => updateTripService(service.id, 'officeHours', e.target.value)}
                                disabled={!isEditing}
                                className={`w-full h-[40px] px-3 rounded-[8px] text-[16px] ${
                                  isEditing
                                    ? 'bg-[#f3f3f5] text-neutral-950'
                                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                }`}
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block font-['Lato:Medium',sans-serif] text-[14px] text-[#4a5565] mb-2">
                              Non-Office Hours
                            </label>
                            <div className="flex items-center gap-1">
                              <span className="text-[#6a7282]">$</span>
                              <input
                                type="number"
                                value={service.nonOfficeHours}
                                onChange={(e) => updateTripService(service.id, 'nonOfficeHours', e.target.value)}
                                disabled={!isEditing}
                                className={`w-full h-[40px] px-3 rounded-[8px] text-[16px] ${
                                  isEditing
                                    ? 'bg-[#f3f3f5] text-neutral-950'
                                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                }`}
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block font-['Lato:Medium',sans-serif] text-[14px] text-[#4a5565] mb-2">
                              Weekend & PH
                            </label>
                            <div className="flex items-center gap-1">
                              <span className="text-[#6a7282]">$</span>
                              <input
                                type="number"
                                value={service.weekendPH}
                                onChange={(e) => updateTripService(service.id, 'weekendPH', e.target.value)}
                                disabled={!isEditing}
                                className={`w-full h-[40px] px-3 rounded-[8px] text-[16px] ${
                                  isEditing
                                    ? 'bg-[#f3f3f5] text-neutral-950'
                                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                }`}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                          <div className="flex items-center gap-3">
                            <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#4a5565]">
                              Active
                            </label>
                            <label className={`relative inline-flex items-center ${isEditing ? 'cursor-pointer' : 'cursor-not-allowed'}`}>
                              <input 
                                type="checkbox" 
                                className="sr-only peer" 
                                checked={service.active}
                                onChange={(e) => updateTripService(service.id, 'active', e.target.checked)}
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
                            onClick={() => handleDeleteTripService(service.id)}
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

                {/* Support Services Card */}
                <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] p-4 md:p-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
                    <h3 className="font-['Lato:SemiBold',sans-serif] text-[18px] text-[#2160ad]">
                      Support Services
                    </h3>
                    <button
                      onClick={handleAddSupportService}
                      disabled={!isEditing}
                      className={`h-[32px] px-4 rounded-[8px] font-['Lato:Medium',sans-serif] text-[14px] sm:text-[16px] flex items-center gap-2 transition-colors whitespace-nowrap ${
                        isEditing
                          ? 'bg-[#2160ad] text-white hover:bg-[#1a4d8a]'
                          : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      <Plus className="w-4 h-4" />
                      Add Support Service
                    </button>
                  </div>

                  <div className="space-y-4">
                    {supportServices.map((service) => (
                      <div key={service.id} className="border border-gray-200 rounded-[10px] p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          <div className="lg:col-span-3">
                            <label className="block font-['Lato:Medium',sans-serif] text-[14px] text-[#4a5565] mb-2">
                              Service Type
                            </label>
                            <input
                              type="text"
                              value={service.serviceType}
                              onChange={(e) => updateSupportService(service.id, 'serviceType', e.target.value)}
                              disabled={!isEditing}
                              className={`w-full h-[40px] px-3 rounded-[8px] text-[16px] ${
                                isEditing
                                  ? 'bg-[#f3f3f5] text-neutral-950'
                                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                              }`}
                              placeholder="Enter service type"
                            />
                          </div>
                          <div>
                            <label className="block font-['Lato:Medium',sans-serif] text-[14px] text-[#4a5565] mb-2">
                              Office Hours
                            </label>
                            <div className="flex items-center gap-1">
                              <span className="text-[#6a7282]">$</span>
                              <input
                                type="number"
                                value={service.officeHours}
                                onChange={(e) => updateSupportService(service.id, 'officeHours', e.target.value)}
                                disabled={!isEditing}
                                className={`w-full h-[40px] px-3 rounded-[8px] text-[16px] ${
                                  isEditing
                                    ? 'bg-[#f3f3f5] text-neutral-950'
                                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                }`}
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block font-['Lato:Medium',sans-serif] text-[14px] text-[#4a5565] mb-2">
                              Non-Office Hours
                            </label>
                            <div className="flex items-center gap-1">
                              <span className="text-[#6a7282]">$</span>
                              <input
                                type="number"
                                value={service.nonOfficeHours}
                                onChange={(e) => updateSupportService(service.id, 'nonOfficeHours', e.target.value)}
                                disabled={!isEditing}
                                className={`w-full h-[40px] px-3 rounded-[8px] text-[16px] ${
                                  isEditing
                                    ? 'bg-[#f3f3f5] text-neutral-950'
                                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                }`}
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block font-['Lato:Medium',sans-serif] text-[14px] text-[#4a5565] mb-2">
                              Weekend & PH
                            </label>
                            <div className="flex items-center gap-1">
                              <span className="text-[#6a7282]">$</span>
                              <input
                                type="number"
                                value={service.weekendPH}
                                onChange={(e) => updateSupportService(service.id, 'weekendPH', e.target.value)}
                                disabled={!isEditing}
                                className={`w-full h-[40px] px-3 rounded-[8px] text-[16px] ${
                                  isEditing
                                    ? 'bg-[#f3f3f5] text-neutral-950'
                                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                }`}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                          <div className="flex items-center gap-3">
                            <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#4a5565]">
                              Active
                            </label>
                            <label className={`relative inline-flex items-center ${isEditing ? 'cursor-pointer' : 'cursor-not-allowed'}`}>
                              <input 
                                type="checkbox" 
                                className="sr-only peer" 
                                checked={service.active}
                                onChange={(e) => updateSupportService(service.id, 'active', e.target.checked)}
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
                            onClick={() => handleDeleteSupportService(service.id)}
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

                {/* Add-on Services Card */}
                <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-['Lato:SemiBold',sans-serif] text-[18px] text-[#2160ad]">
                      Add-on Services
                    </h3>
                    <button
                      onClick={handleAddAddonService}
                      disabled={!isEditing}
                      className={`h-[32px] px-4 rounded-[8px] font-['Lato:Medium',sans-serif] text-[16px] flex items-center gap-2 transition-colors ${
                        isEditing
                          ? 'bg-white border border-[rgba(0,0,0,0.1)] text-neutral-950 hover:bg-[#f3f3f5]'
                          : 'bg-gray-200 text-gray-400 cursor-not-allowed border border-gray-300'
                      }`}
                    >
                      <Plus className="w-4 h-4" />
                      Add New Service
                    </button>
                  </div>

                  <div className="space-y-6">
                    {addonServices.map((service, index) => (
                      <div key={service.id} className="border border-[rgba(0,0,0,0.1)] rounded-[10px] p-4">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-['Lato:Medium',sans-serif] text-[16px] text-[#2160ad]">
                            Add-on Service {index + 1}
                          </h4>
                          <button
                            onClick={() => handleDeleteAddonService(service.id)}
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

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div className="flex flex-col gap-2">
                            <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">
                              Service Name
                            </label>
                            <input
                              type="text"
                              value={service.serviceName}
                              onChange={(e) => updateAddonService(service.id, 'serviceName', e.target.value)}
                              disabled={!isEditing}
                              placeholder="e.g., Oxygen"
                              className={`w-full h-[40px] px-3 rounded-[8px] text-[16px] ${
                                isEditing
                                  ? 'bg-[#f3f3f5] text-neutral-950 placeholder:text-[#717182]'
                                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                              }`}
                            />
                          </div>
                          <div className="flex flex-col gap-2">
                            <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">
                              Unit
                            </label>
                            <select
                              value={service.unit}
                              onChange={(e) => updateAddonService(service.id, 'unit', e.target.value)}
                              disabled={!isEditing}
                              className={`w-full h-[40px] px-3 rounded-[8px] text-[16px] ${
                                isEditing
                                  ? 'bg-[#f3f3f5] text-neutral-950'
                                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                              }`}
                            >
                              <option>Litre</option>
                              <option>Trip</option>
                              <option>Hour</option>
                              <option>Unit</option>
                            </select>
                          </div>
                          <div className="flex flex-col gap-2">
                            <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">
                              Active
                            </label>
                            <label className={`relative inline-flex items-center h-[40px] ${isEditing ? 'cursor-pointer' : 'cursor-not-allowed'}`}>
                              <input 
                                type="checkbox" 
                                className="sr-only peer" 
                                checked={service.active}
                                onChange={(e) => updateAddonService(service.id, 'active', e.target.checked)}
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
                        </div>

                        {/* Pricing Rules */}
                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-3">
                            <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">
                              Pricing Rules
                            </label>
                            <button
                              onClick={() => handleAddPricingRule(service.id, 'addon')}
                              disabled={!isEditing}
                              className={`h-[28px] px-3 rounded-[8px] font-['Lato:Medium',sans-serif] text-[14px] flex items-center gap-1 transition-colors ${
                                isEditing
                                  ? 'bg-white border border-[rgba(0,0,0,0.1)] text-neutral-950 hover:bg-[#f3f3f5]'
                                  : 'bg-gray-200 text-gray-400 cursor-not-allowed border border-gray-300'
                              }`}
                            >
                              <Plus className="w-3 h-3" />
                              Add Rule
                            </button>
                          </div>

                          <div className="bg-gray-50 rounded-[10px] p-4">
                            <div className="space-y-3">
                              {service.pricingRules.map((rule) => (
                                <div key={rule.id} className="bg-white border border-gray-200 rounded-[8px] p-3 space-y-3">
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div>
                                      <label className="block font-['Lato:Medium',sans-serif] text-[12px] text-[#4a5565] mb-1">
                                        Pricing Rule
                                      </label>
                                      <select
                                        value={rule.rule}
                                        onChange={(e) => updatePricingRule(service.id, rule.id, 'rule', e.target.value, 'addon')}
                                        disabled={!isEditing}
                                        className={`w-full h-[40px] px-3 rounded-[8px] text-[14px] ${
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
                                      <label className="block font-['Lato:Medium',sans-serif] text-[12px] text-[#4a5565] mb-1">
                                        Unit Bound
                                      </label>
                                      <input
                                        type="text"
                                        value={rule.unitBound}
                                        onChange={(e) => updatePricingRule(service.id, rule.id, 'unitBound', e.target.value, 'addon')}
                                        disabled={!isEditing}
                                        placeholder="e.g., 5 Litre"
                                        className={`w-full h-[40px] px-3 rounded-[8px] text-[14px] ${
                                          isEditing
                                            ? 'bg-white text-neutral-950 placeholder:text-[#717182] border border-gray-200'
                                            : 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200'
                                        }`}
                                      />
                                    </div>
                                  </div>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div>
                                      <label className="block font-['Lato:Medium',sans-serif] text-[12px] text-[#4a5565] mb-1">
                                        Amount Per Unit
                                      </label>
                                      <div className="flex items-center gap-2">
                                        <input
                                          type="number"
                                          value={rule.amountPerUnit}
                                          onChange={(e) => updatePricingRule(service.id, rule.id, 'amountPerUnit', e.target.value, 'addon')}
                                          disabled={!isEditing}
                                          placeholder="0"
                                          className={`flex-1 h-[40px] px-3 rounded-[8px] text-[14px] ${
                                            isEditing
                                              ? 'bg-white text-neutral-950 border border-gray-200'
                                              : 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200'
                                          }`}
                                        />
                                        <span className="text-[#6a7282]">$</span>
                                      </div>
                                    </div>
                                    <div className="flex items-end justify-between gap-3">
                                      <div className="flex-1">
                                        <label className="block font-['Lato:Medium',sans-serif] text-[12px] text-[#4a5565] mb-1">
                                          Active
                                        </label>
                                        <label className={`relative inline-flex items-center ${isEditing ? 'cursor-pointer' : 'cursor-not-allowed'}`}>
                                          <input 
                                            type="checkbox" 
                                            className="sr-only peer" 
                                            defaultChecked
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
                                        onClick={() => handleDeletePricingRule(service.id, rule.id, 'addon')}
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
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Charges Card */}
                <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-['Lato:SemiBold',sans-serif] text-[18px] text-[#2160ad]">
                      Additional Charges
                    </h3>
                    <button
                      onClick={handleAddAdditionalCharge}
                      disabled={!isEditing}
                      className={`h-[32px] px-4 rounded-[8px] font-['Lato:Medium',sans-serif] text-[16px] flex items-center gap-2 transition-colors ${
                        isEditing
                          ? 'bg-white border border-[rgba(0,0,0,0.1)] text-neutral-950 hover:bg-[#f3f3f5]'
                          : 'bg-gray-200 text-gray-400 cursor-not-allowed border border-gray-300'
                      }`}
                    >
                      <Plus className="w-4 h-4" />
                      Add Additional Charge
                    </button>
                  </div>

                  <div className="space-y-6">
                    {additionalCharges.map((charge, index) => (
                      <div key={charge.id} className="border border-[rgba(0,0,0,0.1)] rounded-[10px] p-4">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-['Lato:Medium',sans-serif] text-[16px] text-[#2160ad]">
                            Additional Charge {index + 1}
                          </h4>
                          <button
                            onClick={() => handleDeleteAdditionalCharge(charge.id)}
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

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div className="flex flex-col gap-2">
                            <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">
                              Charge Name
                            </label>
                            <input
                              type="text"
                              value={charge.chargeName}
                              onChange={(e) => updateAdditionalCharge(charge.id, 'chargeName', e.target.value)}
                              disabled={!isEditing}
                              placeholder="e.g., Waiting Time"
                              className={`w-full h-[40px] px-3 rounded-[8px] text-[16px] ${
                                isEditing
                                  ? 'bg-[#f3f3f5] text-neutral-950 placeholder:text-[#717182]'
                                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                              }`}
                            />
                          </div>
                          <div className="flex flex-col gap-2">
                            <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">
                              Unit
                            </label>
                            <select
                              value={charge.unit}
                              onChange={(e) => updateAdditionalCharge(charge.id, 'unit', e.target.value)}
                              disabled={!isEditing}
                              className={`w-full h-[40px] px-3 rounded-[8px] text-[16px] ${
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
                          <div className="flex flex-col gap-2">
                            <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">
                              Active
                            </label>
                            <label className={`relative inline-flex items-center h-[40px] ${isEditing ? 'cursor-pointer' : 'cursor-not-allowed'}`}>
                              <input 
                                type="checkbox" 
                                className="sr-only peer" 
                                checked={charge.active}
                                onChange={(e) => updateAdditionalCharge(charge.id, 'active', e.target.checked)}
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
                        </div>

                        {/* Pricing Rules */}
                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-3">
                            <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">
                              Pricing Rules
                            </label>
                            <button
                              onClick={() => handleAddPricingRule(charge.id, 'charge')}
                              disabled={!isEditing}
                              className={`h-[28px] px-3 rounded-[8px] font-['Lato:Medium',sans-serif] text-[14px] flex items-center gap-1 transition-colors ${
                                isEditing
                                  ? 'bg-white border border-[rgba(0,0,0,0.1)] text-neutral-950 hover:bg-[#f3f3f5]'
                                  : 'bg-gray-200 text-gray-400 cursor-not-allowed border border-gray-300'
                              }`}
                            >
                              <Plus className="w-3 h-3" />
                              Add Tier
                            </button>
                          </div>

                          <div className="bg-gray-50 rounded-[10px] p-4">
                            <div className="space-y-3">
                              {charge.pricingRules.map((rule) => (
                                <div key={rule.id} className="bg-white border border-gray-200 rounded-[8px] p-3 space-y-3">
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div>
                                      <label className="block font-['Lato:Medium',sans-serif] text-[12px] text-[#4a5565] mb-1">
                                        Pricing Rule
                                      </label>
                                      <select
                                        value={rule.rule}
                                        onChange={(e) => updatePricingRule(charge.id, rule.id, 'rule', e.target.value, 'charge')}
                                        disabled={!isEditing}
                                        className={`w-full h-[40px] px-3 rounded-[8px] text-[14px] ${
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
                                      <label className="block font-['Lato:Medium',sans-serif] text-[12px] text-[#4a5565] mb-1">
                                        Unit Bound
                                      </label>
                                      <input
                                        type="text"
                                        value={rule.unitBound}
                                        onChange={(e) => updatePricingRule(charge.id, rule.id, 'unitBound', e.target.value, 'charge')}
                                        disabled={!isEditing}
                                        placeholder="e.g., 1 Hour"
                                        className={`w-full h-[40px] px-3 rounded-[8px] text-[14px] ${
                                          isEditing
                                            ? 'bg-white text-neutral-950 placeholder:text-[#717182] border border-gray-200'
                                            : 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200'
                                        }`}
                                      />
                                    </div>
                                  </div>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div>
                                      <label className="block font-['Lato:Medium',sans-serif] text-[12px] text-[#4a5565] mb-1">
                                        Amount
                                      </label>
                                      <div className="flex items-center gap-2">
                                        <input
                                          type="number"
                                          value={rule.amountPerUnit}
                                          onChange={(e) => updatePricingRule(charge.id, rule.id, 'amountPerUnit', e.target.value, 'charge')}
                                          disabled={!isEditing}
                                          placeholder="0"
                                          className={`flex-1 h-[40px] px-3 rounded-[8px] text-[14px] ${
                                            isEditing
                                              ? 'bg-white text-neutral-950 border border-gray-200'
                                              : 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200'
                                          }`}
                                        />
                                        <span className="text-[#6a7282]">$</span>
                                      </div>
                                    </div>
                                    <div className="flex items-end justify-between gap-3">
                                      <div className="flex-1">
                                        <label className="block font-['Lato:Medium',sans-serif] text-[12px] text-[#4a5565] mb-1">
                                          Active
                                        </label>
                                        <label className={`relative inline-flex items-center ${isEditing ? 'cursor-pointer' : 'cursor-not-allowed'}`}>
                                          <input 
                                            type="checkbox" 
                                            className="sr-only peer" 
                                            defaultChecked
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
                                        onClick={() => handleDeletePricingRule(charge.id, rule.id, 'charge')}
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
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Active Contracts or Archived Contracts Tab Content
            <div className="p-6">
              {/* Search and Add Button */}
              <div className="flex items-center justify-between mb-6">
                <div className="relative w-[400px]">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#99A1AF]" />
                  <input
                    type="text"
                    placeholder="Search by facility name or contract ID..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-[36px] pl-10 pr-3 bg-[#f3f3f5] border border-[rgba(0,0,0,0.1)] rounded-lg font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950 placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                  />
                </div>
{activeTab !== 'archived' && (
                  <button
                    onClick={() => navigate('/services/add-contract')}
                    className="h-[36px] px-4 bg-[#2160ad] text-white rounded-lg font-['Lato:Medium',sans-serif] text-[16px] flex items-center gap-2 hover:bg-[#1a4d8a] transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    Add New Contract
                  </button>
                )}
              </div>

              {/* Contract Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredContracts.map((contract) => (
                  <div
                    key={contract.id}
                    onClick={() => handleCardClick(contract.id)}
                    className="bg-white border border-[rgba(33,96,173,0.2)] rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] overflow-hidden cursor-pointer hover:shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] transition-all duration-200"
                  >
                    {/* Header */}
                    <div className="bg-[rgba(33,96,173,0.05)] border-b border-[rgba(33,96,173,0.1)] p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-['Lato:SemiBold',sans-serif] text-[16px] text-neutral-950 mb-1">
                            {contract.facilityName}
                          </h3>
                          <p className="font-['Lato:Regular',sans-serif] text-[16px] text-[#4a5565] mb-1">
                            Contract ID: {contract.contractId}
                          </p>
                          <p className="font-['Lato:Regular',sans-serif] text-[16px] text-[#4a5565] mb-1">
                            Period: {contract.startDate} - {contract.endDate}
                          </p>
                          <p className="font-['Lato:Regular',sans-serif] text-[16px] text-[#4a5565]">
                            Branches: {contract.branches}
                          </p>
                        </div>
                        <span className={`${
                          contract.status === 'Active' 
                            ? 'bg-green-500' 
                            : 'bg-[#e74c3c]'
                        } text-white text-[12px] font-['Lato:Medium',sans-serif] px-2 py-1 rounded-lg`}>
                          {contract.status}
                        </span>
                      </div>
                    </div>

                    {/* Service Summary */}
                    <div className="p-6">
                      {activeTab === 'archived' ? (
                        <div className="flex items-center justify-between">
                          <span className="font-['Lato:Regular',sans-serif] text-[16px] text-[#4a5565]">
                            Services:
                          </span>
                          <span className="font-['Lato:Medium',sans-serif] text-[16px] text-[#101828]">
                            {contract.tripServices + contract.supportServices + contract.addonServices + contract.additionalCharges}
                          </span>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="font-['Lato:Regular',sans-serif] text-[16px] text-[#4a5565]">
                              Trip Services:
                            </span>
                            <span className="font-['Lato:Medium',sans-serif] text-[16px] text-[#101828]">
                              {contract.tripServices}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="font-['Lato:Regular',sans-serif] text-[16px] text-[#4a5565]">
                              Support Services:
                            </span>
                            <span className="font-['Lato:Medium',sans-serif] text-[16px] text-[#101828]">
                              {contract.supportServices}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="font-['Lato:Regular',sans-serif] text-[16px] text-[#4a5565]">
                              Add-on Services:
                            </span>
                            <span className="font-['Lato:Medium',sans-serif] text-[16px] text-[#101828]">
                              {contract.addonServices}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="font-['Lato:Regular',sans-serif] text-[16px] text-[#4a5565]">
                              Additional Charges:
                            </span>
                            <span className="font-['Lato:Medium',sans-serif] text-[16px] text-[#101828]">
                              {contract.additionalCharges}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {filteredContracts.length === 0 && (
                  <div className="col-span-full flex items-center justify-center h-[400px]">
                    <p className="text-[#717182] font-['Lato:Regular',sans-serif] text-[16px]">
                      No contracts found
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
