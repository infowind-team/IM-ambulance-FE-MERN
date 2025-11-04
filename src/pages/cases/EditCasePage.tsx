import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import svgPaths from "../../imports/svg-7w3fdi75yn";
import { ChevronDown } from 'lucide-react';
import { toast } from 'sonner';
import { ServicesCard } from '../../components/ServicesCard';

// Status Dropdown Component (Editable)
function StatusDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('Pending for Dispatch');
  
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

// Card Component (Non-collapsible for Edit page)
function CollapsibleCard({ title, children, defaultOpen = true }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  return (
    <div className="bg-white rounded-[14px] border border-[rgba(33,96,173,0.2)] w-full">
      <div className="px-[25px] py-[25px] flex items-center justify-between rounded-t-[14px]">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
            <path d={svgPaths.p15478900} stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
          <span className="font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950">{title}</span>
        </div>
      </div>
      
      <div className="px-[25px] pb-[25px]">
        {children}
      </div>
    </div>
  );
}

// Editable Input Field
function InputField({ label, placeholder, defaultValue = "", required = false, type = "text" }: { label: string; placeholder: string; defaultValue?: string; required?: boolean; type?: string }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">
        {label}
        {required && <span className="text-[#fb2c36] ml-1">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="bg-[#f3f3f5] h-[40px] rounded-[8px] px-[12px] py-[4px] font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950 placeholder:text-[#717182] border-0 focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
      />
    </div>
  );
}

// Editable Dropdown Field
function DropdownField({ label, placeholder, defaultValue = "", required = false }: { label: string; placeholder: string; defaultValue?: string; required?: boolean }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">
        {label}
        {required && <span className="text-[#fb2c36] ml-1">*</span>}
      </label>
      <button className="bg-[#f3f3f5] h-[40px] rounded-[8px] px-[13px] flex items-center justify-between hover:bg-[#e8e8ed] transition-colors">
        <span className="font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950">{defaultValue || placeholder}</span>
        <ChevronDown className="w-4 h-4 text-[#717182] opacity-50" />
      </button>
    </div>
  );
}

export function EditCasePage() {
  const navigate = useNavigate();
  const { caseId } = useParams();
  const [tripType, setTripType] = useState('two-way');
  
  // Add # back to caseId for display
  const displayCaseId = caseId ? `#${caseId}` : '#2026031009';

  const handleUpdate = () => {
    toast.success('Case updated successfully!');
    navigate(`/view-case/${caseId}`);
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <div className="w-[269px] bg-white border-r border-[rgba(0,0,0,0.1)] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] hidden lg:block">
        {/* Sidebar content would go here */}
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
            <span className="font-['Lato:Medium',sans-serif] text-[14px] text-[#2160ad]">Edit Case</span>
          </div>
          
          {/* Page Title */}
          <h1 className="font-['Lato:Medium',sans-serif] text-[26px] text-[#2160ad]">Editing - {displayCaseId}</h1>
        </div>

        {/* Form Content */}
        <div className="p-[24px] space-y-[24px] max-w-[2800px]">
          {/* Status Dropdown - Editable */}
          <StatusDropdown />

          {/* Booking & Requestor Information */}
          <CollapsibleCard title="Booking & Requestor Information">
            <div className="space-y-4">
              <DropdownField label="Mode of Intake" placeholder="Email" defaultValue="Phone Call" required />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField label="Booking Date" placeholder="Select booking date" defaultValue="02/06/2025" required type="date" />
                <InputField label="Booking Time" placeholder="--:--" defaultValue="08:30" required type="time" />
              </div>

              <div className="h-px bg-[rgba(0,0,0,0.1)]" />

              <InputField label="Requestor Name" placeholder="Enter requestor name" defaultValue="John Doe" required />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField label="Requestor Contact" placeholder="Enter contact number" defaultValue="+65 9123 4567" required />
                <DropdownField label="Mode of Transport" placeholder="Select transport mode" defaultValue="Ambulance" />
              </div>
            </div>
          </CollapsibleCard>

          {/* Patient Information */}
          <CollapsibleCard title="Patient Information">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField label="Patient Name" placeholder="Enter patient name" defaultValue="Emily Lim" required />
                <InputField label="NRIC" placeholder="S****567Z" defaultValue="S****567Z" required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <InputField label="Age" placeholder="65" defaultValue="65" />
                <InputField label="Weight (KG)" placeholder="70" defaultValue="70" />
                <DropdownField label="Gender" placeholder="Male" defaultValue="Male" />
              </div>

              <InputField label="Patient Contact" placeholder="+65 XXXX XXXX" defaultValue="+65 9456 7890" />

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
                <InputField label="NOK Name" placeholder="Enter NOK name" defaultValue="John Lim" />
                <InputField label="NOK Contact" placeholder="+65 9123 4567" defaultValue="+65 9123 4567" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <DropdownField label="Relationship" placeholder="Parent" defaultValue="Parent" />
                <InputField label="Accompanying NOK" placeholder="0" defaultValue="0" />
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
                  <DropdownField label="Vehicle Type" placeholder="Select Vehicle Type" defaultValue="Standard Ambulance" />
                  <DropdownField label="Vehicle Number" placeholder="Select Vehicle No." defaultValue="AMB003" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <InputField label="MTO" placeholder="Medical Transport Officer" defaultValue="Medical Transport Officer" required />
                  <InputField label="EMT / EN / PRM" placeholder="Emergency Medical Technician" defaultValue="Emergency Medical Technician" />
                  <InputField label="Escort (Person)" placeholder="Escort name" defaultValue="Escort name" />
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
              onClick={() => navigate(`/view-case/${caseId}`)}
              className="bg-white border border-[rgba(0,0,0,0.1)] h-[36px] px-[33px] rounded-[8px] font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950 hover:bg-[#f3f3f5] transition-colors"
            >
              Back
            </button>
            <button
              onClick={handleUpdate}
              className="bg-[#2160ad] h-[36px] px-[32px] rounded-[8px] font-['Lato:Medium',sans-serif] text-[16px] text-white hover:bg-[#1a4d8a] transition-colors"
            >
              Update Case
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
