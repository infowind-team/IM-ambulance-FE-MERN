import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import svgPaths from "../../imports/svg-7w3fdi75yn";
import { ChevronDown } from 'lucide-react';
import { ServicesCard } from '../../components/ServicesCard';

// Status Dropdown Component
function StatusDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('Open');
  
  const statuses = [
    'Open',
    'Pending for Dispatch',
    'Dispatched',
    'Pending for Payment',
    'Pending Escort Assignment',
    'Pending Details from Vendor',
    'Pending for Service Receipt',
    'Pending Confirmation',
    'Completed',
    'Cancelled'
  ];

  return (
    <div className="relative w-[300px]">
      <label className="block mb-2">
        <span className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">Status</span>
        <span className="text-[#fb2c36] ml-1">*</span>
      </label>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#f3f3f5] h-[40px] w-full rounded-[8px] px-[13px] flex items-center justify-between hover:bg-[#e8e8ed] transition-colors"
      >
        <span className="font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950">{selectedStatus}</span>
        <ChevronDown className="w-4 h-4 text-[#717182] opacity-50" />
      </button>
      
      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-[8px] shadow-lg max-h-[300px] overflow-y-auto">
          {statuses.map((status) => (
            <button
              key={status}
              onClick={() => {
                setSelectedStatus(status);
                setIsOpen(false);
              }}
              className="w-full px-4 py-2 text-left hover:bg-[#f3f3f5] font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950 flex items-center justify-between"
            >
              {status}
              {status === selectedStatus && (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                  <path d="M13.3327 4L5.99935 11.3333L2.66602 8" stroke="#2160ad" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// Collapsible Card Component
function CollapsibleCard({ title, children, defaultOpen = true }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div className="bg-white rounded-[14px] border border-[rgba(33,96,173,0.2)] w-full">
      <div className="px-[25px] py-[25px] flex items-center justify-between rounded-t-[14px]">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
            <path d={svgPaths.p15478900} stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
          <span className="font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950">{title}</span>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-1 hover:bg-[rgba(33,96,173,0.1)] rounded transition-colors"
          aria-label={isOpen ? "Collapse" : "Expand"}
        >
          <svg 
            className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
            fill="none" 
            viewBox="0 0 20 20"
          >
            <path d="M5 7.5L10 12.5L15 7.5" stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </button>
      </div>
      
      {isOpen && (
        <div className="px-[25px] pb-[25px]">
          {children}
        </div>
      )}
    </div>
  );
}

// Input Field Component
function InputField({ label, placeholder, required = false, type = "text" }: { label: string; placeholder: string; required?: boolean; type?: string }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">
        {label}
        {required && <span className="text-[#fb2c36] ml-1">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="bg-[#f3f3f5] h-[40px] rounded-[8px] px-[12px] py-[4px] font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950 placeholder:text-[#717182] border-0 focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
      />
    </div>
  );
}

// Dropdown Field Component
function DropdownField({ label, placeholder, required = false }: { label: string; placeholder: string; required?: boolean }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">
        {label}
        {required && <span className="text-[#fb2c36] ml-1">*</span>}
      </label>
      <button className="bg-[#f3f3f5] h-[40px] rounded-[8px] px-[13px] flex items-center justify-between hover:bg-[#e8e8ed] transition-colors">
        <span className="font-['Lato:Regular',sans-serif] text-[16px] text-[#717182]">{placeholder}</span>
        <ChevronDown className="w-4 h-4 text-[#717182] opacity-50" />
      </button>
    </div>
  );
}

export function AddNewCasePage() {
  const navigate = useNavigate();
  const [tripType, setTripType] = useState('one-way');

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar - Same as CasesPage */}
      <div className="w-[269px] bg-white border-r border-[rgba(0,0,0,0.1)] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] hidden lg:block">
        {/* Sidebar content would go here - reuse from CasesPage */}
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="bg-[rgba(33,96,173,0.05)] border-r-4 border-[rgba(33,96,173,0.2)] px-[24px] py-[16px]">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-1 mb-2">
            <button onClick={() => navigate('/calendar')} className="font-['Lato:Regular',sans-serif] text-[14px] text-[#4a5565] hover:text-[#2160ad]">
              Operations
            </button>
            <ChevronDown className="w-3 h-3 text-[#717182] rotate-[-90deg]" />
            <button onClick={() => navigate('/cases')} className="font-['Lato:Regular',sans-serif] text-[14px] text-[#4a5565] hover:text-[#2160ad]">
              Cases
            </button>
            <ChevronDown className="w-3 h-3 text-[#717182] rotate-[-90deg]" />
            <span className="font-['Lato:Medium',sans-serif] text-[14px] text-[#2160ad]">Add New Case</span>
          </div>
          
          {/* Page Title */}
          <h1 className="font-['Lato:Medium',sans-serif] text-[26px] text-[#2160ad]">Add New Case</h1>
        </div>

        {/* Form Content */}
        <div className="p-[24px] space-y-[24px] max-w-[2800px]">
          {/* Status Dropdown */}
          <StatusDropdown />

          {/* Booking & Requestor Information */}
          <CollapsibleCard title="Booking & Requestor Information">
            <div className="space-y-4">
              <DropdownField label="Mode of Intake" placeholder="Email" required />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField label="Booking Date" placeholder="Select booking date" required type="date" />
                <InputField label="Booking Time" placeholder="--:--" required type="time" />
              </div>

              <div className="h-px bg-[rgba(0,0,0,0.1)]" />

              <InputField label="Requestor Name" placeholder="Enter requestor name" required />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField label="Requestor Contact" placeholder="Enter contact number" required />
                <DropdownField label="Mode of Transport" placeholder="Select transport mode" />
              </div>
            </div>
          </CollapsibleCard>

          {/* Patient Information */}
          <CollapsibleCard title="Patient Information">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField label="Patient Name" placeholder="Enter patient name" required />
                <InputField label="NRIC" placeholder="S****567Z" required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <InputField label="Age" placeholder="65" />
                <InputField label="Weight (KG)" placeholder="70" />
                <DropdownField label="Gender" placeholder="Male" />
              </div>

              <InputField label="Patient Contact" placeholder="+65 XXXX XXXX" />

              <div className="flex flex-col gap-2">
                <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">Patient's Condition | Chief Complaint</label>
                <textarea
                  placeholder="Describe patient's condition or chief complaint..."
                  className="bg-[#f3f3f5] h-[80px] rounded-[8px] px-[12px] py-[8px] font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950 placeholder:text-[#717182] border-0 resize-none focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                />
              </div>

              <div className="h-px bg-[rgba(0,0,0,0.1)]" />

              <h3 className="font-['Lato:Medium',sans-serif] text-[16px] text-[#2160ad]">Next of Kin Details</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField label="NOK Name" placeholder="Enter NOK name" />
                <InputField label="NOK Contact" placeholder="+65 9123 4567" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <DropdownField label="Relationship" placeholder="Parent" />
                <InputField label="Accompanying NOK" placeholder="0" />
              </div>
            </div>
          </CollapsibleCard>

          {/* Trip Details */}
          <CollapsibleCard title="Trip Details">
            <div className="space-y-4">
              <div>
                <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950 mb-2 block">
                  Trip Type
                  <span className="text-[#fb2c36] ml-1">*</span>
                </label>
                <div className="flex gap-4">
                  {['one-way', 'two-way', 'three-way'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setTripType(type)}
                      className="flex items-center gap-2"
                    >
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${tripType === type ? 'border-[#2160ad]' : 'border-[#ececf0]'}`}>
                        {tripType === type && <div className="w-2 h-2 rounded-full bg-[#030213]" />}
                      </div>
                      <span className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950 capitalize">{type}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="h-px bg-[rgba(0,0,0,0.1)]" />

              <div className="bg-[rgba(249,250,251,0.3)] border border-[rgba(0,0,0,0.1)] rounded-[10px] p-4 space-y-4">
                <div className="flex items-center gap-2">
                  <div className="bg-[#2160ad] rounded-full w-6 h-6 flex items-center justify-center">
                    <span className="font-['Lato:Medium',sans-serif] text-[14px] text-white">1</span>
                  </div>
                  <span className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">Trip 1</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Pickup Location */}
                  <div className="space-y-4">
                    <InputField label="Pickup Location" placeholder="Search pickup location..." required />
                    
                    <div className="bg-[rgba(249,250,251,0.5)] border border-gray-200 rounded-[14px] p-4 space-y-4">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                          <path d={svgPaths.p3a151200} stroke="#2160AD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d={svgPaths.p1cb99600} stroke="#2160AD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        </svg>
                        <span className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">Address Details</span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col gap-1">
                          <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153]">Block Number</label>
                          <input placeholder="e.g., 123" className="bg-[#f3f3f5] h-[40px] rounded-[8px] px-[12px] text-[16px] placeholder:text-[#717182] border-0" />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153]">Unit Number</label>
                          <input placeholder="e.g., #12-34" className="bg-[#f3f3f5] h-[40px] rounded-[8px] px-[12px] text-[16px] placeholder:text-[#717182] border-0" />
                        </div>
                      </div>

                      <div className="border-t border-gray-200 pt-4 grid grid-cols-3 gap-3">
                        <div className="flex flex-col gap-1">
                          <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153]">Ward Details</label>
                          <input placeholder="e.g., Ward A" className="bg-[#f3f3f5] h-[40px] rounded-[8px] px-[12px] text-[16px] placeholder:text-[#717182] border-0" />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153]">Room Number</label>
                          <input placeholder="e.g., 101" className="bg-[#f3f3f5] h-[40px] rounded-[8px] px-[12px] text-[16px] placeholder:text-[#717182] border-0" />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153]">Bed Number</label>
                          <input placeholder="e.g., A1" className="bg-[#f3f3f5] h-[40px] rounded-[8px] px-[12px] text-[16px] placeholder:text-[#717182] border-0" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Dropoff Location */}
                  <div className="space-y-4">
                    <InputField label="Dropoff Location" placeholder="Search dropoff location..." required />
                    
                    <div className="bg-[rgba(249,250,251,0.5)] border border-gray-200 rounded-[14px] p-4 space-y-4">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                          <path d={svgPaths.p3a151200} stroke="#2160AD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d={svgPaths.p1cb99600} stroke="#2160AD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        </svg>
                        <span className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">Address Details</span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col gap-1">
                          <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153]">Block Number</label>
                          <input placeholder="e.g., 123" className="bg-[#f3f3f5] h-[40px] rounded-[8px] px-[12px] text-[16px] placeholder:text-[#717182] border-0" />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153]">Unit Number</label>
                          <input placeholder="e.g., #12-34" className="bg-[#f3f3f5] h-[40px] rounded-[8px] px-[12px] text-[16px] placeholder:text-[#717182] border-0" />
                        </div>
                      </div>

                      <div className="border-t border-gray-200 pt-4 grid grid-cols-3 gap-3">
                        <div className="flex flex-col gap-1">
                          <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153]">Ward Details</label>
                          <input placeholder="e.g., Ward A" className="bg-[#f3f3f5] h-[40px] rounded-[8px] px-[12px] text-[16px] placeholder:text-[#717182] border-0" />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153]">Room Number</label>
                          <input placeholder="e.g., 101" className="bg-[#f3f3f5] h-[40px] rounded-[8px] px-[12px] text-[16px] placeholder:text-[#717182] border-0" />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153]">Bed Number</label>
                          <input placeholder="e.g., A1" className="bg-[#f3f3f5] h-[40px] rounded-[8px] px-[12px] text-[16px] placeholder:text-[#717182] border-0" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <InputField label="Pick up - Scheduled Time" placeholder="--:--" type="time" />
              </div>

              <div className="h-px bg-[rgba(0,0,0,0.1)]" />

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p3817a080} stroke="#2160AD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p2d386c70} stroke="#2160AD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d="M7.5 14.166H12.5" stroke="#2160AD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p3849af00} stroke="#2160AD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </svg>
                  <span className="font-['Lato:SemiBold',sans-serif] text-[16px] text-[#2160ad]">Vehicle Assignment</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <DropdownField label="Vehicle Type" placeholder="Select Vehicle Type" />
                  <DropdownField label="Vehicle Number" placeholder="Select Vehicle No." />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <InputField label="MTO" placeholder="Medical Transport Officer" required />
                  <InputField label="EMT / EN / PRM" placeholder="Emergency Medical Technician" />
                  <InputField label="Escort (Person)" placeholder="Escort name" />
                </div>
              </div>
            </div>
          </CollapsibleCard>

          {/* Services */}
          <CollapsibleCard title="Services">
            <ServicesCard />
          </CollapsibleCard>

          {/* Billing Summary */}
          <CollapsibleCard title="Billing Summary">
            <div className="bg-gray-50 border border-[rgba(0,0,0,0.1)] rounded-[10px] p-[25px] space-y-4">
              <h3 className="font-['Lato:SemiBold',sans-serif] text-[18px] text-[#2160ad]">Billing Summary</h3>
              
              <div className="border-b border-gray-200 pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">Base Transport Fee</p>
                    <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#4a5565]">No pickup location selected</p>
                  </div>
                  <p className="font-['Lato:SemiBold',sans-serif] text-[16px] text-neutral-950">$0.00</p>
                </div>
              </div>

              <div className="text-center py-6">
                <p className="font-['Lato:Regular',sans-serif] text-[16px] text-[#6a7282]">No additional services selected</p>
                <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#6a7282]">Add services above to see breakdown</p>
              </div>

              <div className="border-t border-[rgba(0,0,0,0.1)] pt-3">
                <div className="flex justify-between items-center">
                  <p className="font-['Lato:SemiBold',sans-serif] text-[18px] text-[#2160ad]">Total Amount:</p>
                  <p className="font-['Lato:SemiBold',sans-serif] text-[18px] text-[#2160ad]">$0.00</p>
                </div>
              </div>
            </div>
          </CollapsibleCard>

          {/* Additional Remarks */}
          <CollapsibleCard title="Additional Remarks">
            <textarea
              placeholder="Add any additional remarks or special instructions..."
              className="bg-[#f3f3f5] h-[80px] w-full rounded-[8px] px-[12px] py-[8px] font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950 placeholder:text-[#717182] border-0 resize-none focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
            />
          </CollapsibleCard>

          {/* Action Buttons */}
          <div className="border-t border-[rgba(0,0,0,0.1)] pt-6 flex justify-end gap-3">
            <button
              onClick={() => navigate('/cases')}
              className="bg-white border border-[rgba(0,0,0,0.1)] h-[36px] px-[33px] rounded-[8px] font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950 hover:bg-[#f3f3f5] transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                console.log('Create case');
                navigate('/cases');
              }}
              className="bg-[#2160ad] h-[36px] px-[32px] rounded-[8px] font-['Lato:Medium',sans-serif] text-[16px] text-white hover:bg-[#1a4d8a] transition-colors"
            >
              Create Case
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
