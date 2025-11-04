import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import svgPaths from "../imports/svg-7w3fdi75yn";
import { ChevronDown } from 'lucide-react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '../components/ui/alert-dialog';

// Read-only Status Display
function StatusDisplay({ status }: { status: string }) {
  return (
    <div className="w-[300px]">
      <label className="block mb-2">
        <span className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">Status</span>
        <span className="text-[#fb2c36] ml-1">*</span>
      </label>
      <div className="bg-[#f3f3f5] h-[40px] w-full rounded-[8px] px-[13px] flex items-center justify-between opacity-50 cursor-not-allowed">
        <span className="font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950">{status}</span>
        <ChevronDown className="w-4 h-4 text-[#717182] opacity-50" />
      </div>
    </div>
  );
}

// Collapsible Card Component (same as AddNewCasePage)
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

// Read-only Input Field
function ReadOnlyField({ label, value, required = false }: { label: string; value: string; required?: boolean }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">
        {label}
        {required && <span className="text-[#fb2c36] ml-1">*</span>}
      </label>
      <div className="bg-[#f3f3f5] h-[40px] rounded-[8px] px-[12px] py-[4px] font-['Lato:Regular',sans-serif] text-[16px] text-[#717182] border-0 opacity-50 flex items-center">
        {value}
      </div>
    </div>
  );
}

// Read-only Dropdown Field
function ReadOnlyDropdown({ label, value, required = false }: { label: string; value: string; required?: boolean }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">
        {label}
        {required && <span className="text-[#fb2c36] ml-1">*</span>}
      </label>
      <div className="bg-[#f3f3f5] h-[40px] rounded-[8px] px-[13px] flex items-center justify-between opacity-50 cursor-not-allowed">
        <span className="font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950">{value}</span>
        <ChevronDown className="w-4 h-4 text-[#717182] opacity-50" />
      </div>
    </div>
  );
}

export function ViewCasePage() {
  const navigate = useNavigate();
  const { caseId } = useParams();
  const [showCancelDialog, setShowCancelDialog] = useState(false);

  // Add # back to caseId for display
  const displayCaseId = caseId ? `#${caseId}` : '#2026031009';

  // Mock data - replace with actual data from API
  const caseData = {
    id: displayCaseId,
    status: 'Pending for Dispatch',
    modeOfIntake: 'Phone Call',
    bookingDate: '02/06/2025',
    bookingTime: '08:30',
    requestorName: 'John Doe',
    requestorContact: '+65 9123 4567',
    modeOfTransport: 'Ambulance',
    patientName: 'Emily Lim',
    nric: 'S****567Z',
    age: '65',
    weight: '70',
    gender: 'Male',
    patientContact: '+65 9456 7890',
    tripType: 'Two-way',
    vehicleType: 'Standard Ambulance',
    vehicleNumber: 'AMB003'
  };

  const handleCancelCase = () => {
    setShowCancelDialog(false);
    navigate('/cases');
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar - Same as CasesPage */}
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
            <span className="font-['Lato:Medium',sans-serif] text-[14px] text-[#2160ad]">View Case</span>
          </div>
          
          {/* Page Title and Edit Button */}
          <div className="flex items-center justify-between">
            <h1 className="font-['Lato:Medium',sans-serif] text-[26px] text-[#2160ad]">Viewing - {caseData.id}</h1>
            <button
              onClick={() => navigate(`/edit-case/${caseId}`)}
              className="bg-[#2160ad] h-[36px] px-[16px] rounded-[8px] flex items-center gap-2 hover:bg-[#1a4d8a] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                <path d="M8 2H3.33333C2.97971 2 2.64057 2.14048 2.39052 2.39052C2.14048 2.64057 2 2.97971 2 3.33333V12.6667C2 13.0203 2.14048 13.3594 2.39052 13.6095C2.64057 13.8595 2.97971 14 3.33333 14H12.6667C13.0203 14 13.3594 13.8595 13.6095 13.6095C13.8595 13.3594 14 13.0203 14 12.6667V8" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                <path d="M12.2501 1.75C12.5153 1.48478 12.875 1.33579 13.2501 1.33579C13.6251 1.33579 13.9848 1.48478 14.2501 1.75C14.5153 2.01522 14.6643 2.37493 14.6643 2.75C14.6643 3.12507 14.5153 3.48478 14.2501 3.75L8.2414 9.75933C8.0831 9.9175 7.88753 10.0333 7.67273 10.096L5.7574 10.656C5.70003 10.6727 5.63922 10.6737 5.58134 10.6589C5.52345 10.6441 5.47061 10.614 5.42836 10.5717C5.38611 10.5294 5.35599 10.4766 5.34116 10.4187C5.32633 10.3608 5.32733 10.3 5.34406 10.2427L5.90406 8.32733C5.96708 8.1127 6.08309 7.91737 6.2414 7.75933L12.2501 1.75Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
              <span className="font-['Lato:Medium',sans-serif] text-[16px] text-white">Edit</span>
            </button>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-[24px] space-y-[24px] max-w-[2800px]">
          {/* Status Display */}
          <StatusDisplay status={caseData.status} />

          {/* Booking & Requestor Information */}
          <CollapsibleCard title="Booking & Requestor Information">
            <div className="space-y-4">
              <ReadOnlyDropdown label="Mode of Intake" value={caseData.modeOfIntake} required />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ReadOnlyField label="Booking Date" value={caseData.bookingDate} required />
                <ReadOnlyField label="Booking Time" value={caseData.bookingTime} required />
              </div>

              <div className="h-px bg-[rgba(0,0,0,0.1)]" />

              <ReadOnlyField label="Requestor Name" value={caseData.requestorName} required />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ReadOnlyField label="Requestor Contact" value={caseData.requestorContact} required />
                <ReadOnlyDropdown label="Mode of Transport" value={caseData.modeOfTransport} />
              </div>
            </div>
          </CollapsibleCard>

          {/* Patient Information */}
          <CollapsibleCard title="Patient Information">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ReadOnlyField label="Patient Name" value={caseData.patientName} required />
                <ReadOnlyField label="NRIC" value={caseData.nric} required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <ReadOnlyField label="Age" value={caseData.age} />
                <ReadOnlyField label="Weight (KG)" value={caseData.weight} />
                <ReadOnlyDropdown label="Gender" value={caseData.gender} />
              </div>

              <ReadOnlyField label="Patient Contact" value={caseData.patientContact} />

              <div className="flex flex-col gap-2">
                <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">Patient's Condition | Chief Complaint</label>
                <div className="bg-[#f3f3f5] h-[80px] rounded-[8px] px-[12px] py-[8px] font-['Lato:Regular',sans-serif] text-[16px] text-[#717182] border-0 opacity-50">
                  Describe patient's condition or chief complaint...
                </div>
              </div>

              <div className="h-px bg-[rgba(0,0,0,0.1)]" />

              <h3 className="font-['Lato:Medium',sans-serif] text-[16px] text-[#2160ad]">Next of Kin Details</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ReadOnlyField label="NOK Name" value="John Lim" />
                <ReadOnlyField label="NOK Contact" value="+65 9123 4567" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ReadOnlyDropdown label="Relationship" value="Parent" />
                <ReadOnlyField label="Accompanying NOK" value="0" />
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
                <div className="flex gap-4 opacity-50">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full border-2 border-[#ececf0] flex items-center justify-center">
                      {caseData.tripType === 'one-way' && <div className="w-2 h-2 rounded-full bg-[#030213]" />}
                    </div>
                    <span className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">One-way</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full border-2 border-[#ececf0] flex items-center justify-center">
                      {caseData.tripType === 'Two-way' && <div className="w-2 h-2 rounded-full bg-[#030213]" />}
                    </div>
                    <span className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">Two-way</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full border-2 border-[#ececf0] flex items-center justify-center">
                      {caseData.tripType === 'three-way' && <div className="w-2 h-2 rounded-full bg-[#030213]" />}
                    </div>
                    <span className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">Three-way</span>
                  </div>
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
                  <ReadOnlyDropdown label="Vehicle Type" value={caseData.vehicleType} />
                  <ReadOnlyDropdown label="Vehicle Number" value={caseData.vehicleNumber} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <ReadOnlyField label="MTO" value="Medical Transport Officer" required />
                  <ReadOnlyField label="EMT / EN / PRM" value="Emergency Medical Technician" />
                  <ReadOnlyField label="Escort (Person)" value="Escort name" />
                </div>
              </div>
            </div>
          </CollapsibleCard>

          {/* Services */}
          <CollapsibleCard title="Services">
            <div className="space-y-2">
              <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">Selected Services</label>
              <p className="font-['Lato:Regular',sans-serif] text-[16px] text-[#6a7282]">No services selected</p>
            </div>
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
            <div className="bg-[#f3f3f5] h-[80px] w-full rounded-[8px] px-[12px] py-[8px] font-['Lato:Regular',sans-serif] text-[16px] text-[#717182] border-0 opacity-50">
              No additional remarks
            </div>
          </CollapsibleCard>

          {/* Action Buttons */}
          <div className="border-t border-[rgba(0,0,0,0.1)] pt-6 flex justify-end gap-3">
            <button
              onClick={() => navigate('/cases')}
              className="bg-white border border-[rgba(0,0,0,0.1)] h-[36px] px-[33px] rounded-[8px] font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950 hover:bg-[#f3f3f5] transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => setShowCancelDialog(true)}
              className="bg-white border border-[#ffa2a2] h-[36px] px-[32px] rounded-[8px] font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950 hover:bg-red-50 transition-colors"
            >
              Cancel Case
            </button>
          </div>
        </div>
      </div>

      {/* Cancel Case Confirmation Dialog */}
      <AlertDialog open={showCancelDialog} onOpenChange={setShowCancelDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Cancel Case</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to cancel this case? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>No, Keep Case</AlertDialogCancel>
            <AlertDialogAction onClick={handleCancelCase} className="bg-[#fb2c36] hover:bg-[#d42430]">
              Yes, Cancel Case
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
