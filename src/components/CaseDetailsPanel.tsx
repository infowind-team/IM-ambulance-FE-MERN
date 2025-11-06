import { useState, useEffect } from 'react';
import { X, Info, Check } from 'lucide-react';
import svgPaths from '../imports/svg-0iv0xewbw7';

interface StaffMember {
  id: string;
  name: string;
  distance: string;
  meta?: string;
  meta2?: string;
  isAssigned: boolean;
  assignedBy?: 'auto' | 'manual';
}

interface CaseDetailsData {
  caseNo: string;
  tripRoute: string;
  startTime: string;
  serviceType: string;
  estimatedDuration: string;
  requirements: string;
  status: 'open' | 'pending' | 'assigned' | 'completed';
  patientName: string;
}

interface CaseDetailsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  caseData: CaseDetailsData;
}

export default function CaseDetailsPanel({ isOpen, onClose, caseData }: CaseDetailsPanelProps) {
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [cancelReason, setCancelReason] = useState('');
  const [showUnassignModal, setShowUnassignModal] = useState(false);
  const [selectedStaffToUnassign, setSelectedStaffToUnassign] = useState<{ name: string; id: string; type: string } | null>(null);
  const [autoAssignEnabled, setAutoAssignEnabled] = useState(false);

  const [drivers, setDrivers] = useState<StaffMember[]>([
    { id: 'd1', name: 'John Smith', distance: '2.3km away', meta: 'Next case: 14:30', isAssigned: true, assignedBy: 'manual' },
    { id: 'd2', name: 'Lisa Johnson', distance: '2.7km away', meta: '1.8km from ongoing destination', meta2: 'Time started: 08:15', isAssigned: false }
  ]);

  const [medics, setMedics] = useState<StaffMember[]>([
    { id: 'm1', name: 'Dr. Sarah Williams', distance: '4.2km away', meta: '3.1km from ongoing destination', meta2: 'Next case: 12:00', isAssigned: true, assignedBy: 'manual' }
  ]);

  const [escorts, setEscorts] = useState<StaffMember[]>([
    { id: 'e1', name: 'Mark Thompson', distance: '5.5km away', meta: 'Next case: 15:00', isAssigned: true, assignedBy: 'manual' }
  ]);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen && !showCancelModal && !showUnassignModal) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, showCancelModal, showUnassignModal, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleAssign = (id: string, type: 'driver' | 'medic' | 'escort') => {
    const assignedBy = autoAssignEnabled ? 'auto' : 'manual';
    
    if (type === 'driver') {
      setDrivers(prev => prev.map(d => d.id === id ? { ...d, isAssigned: true, assignedBy } : d));
    } else if (type === 'medic') {
      setMedics(prev => prev.map(m => m.id === id ? { ...m, isAssigned: true, assignedBy } : m));
    } else if (type === 'escort') {
      setEscorts(prev => prev.map(e => e.id === id ? { ...e, isAssigned: true, assignedBy } : e));
    }
  };

  const handleUnassignClick = (name: string, id: string, type: string) => {
    setSelectedStaffToUnassign({ name, id, type });
    setShowUnassignModal(true);
  };

  const handleConfirmUnassign = () => {
    if (!selectedStaffToUnassign) return;

    const { id, type } = selectedStaffToUnassign;

    if (type === 'driver') {
      setDrivers(prev => prev.map(d => d.id === id ? { ...d, isAssigned: false, assignedBy: undefined } : d));
    } else if (type === 'medic') {
      setMedics(prev => prev.map(m => m.id === id ? { ...m, isAssigned: false, assignedBy: undefined } : m));
    } else if (type === 'escort') {
      setEscorts(prev => prev.map(e => e.id === id ? { ...e, isAssigned: false, assignedBy: undefined } : e));
    }

    setShowUnassignModal(false);
    setSelectedStaffToUnassign(null);
  };

  const handleCancelCase = () => {
    setShowCancelModal(true);
  };

  const handleConfirmCancellation = () => {
    console.log('Case cancelled with reason:', cancelReason);
    setShowCancelModal(false);
    setCancelReason('');
    onClose();
  };

  const statusConfig = {
    open: { bg: 'bg-blue-500', label: 'Open' },
    pending: { bg: 'bg-amber-500', label: 'Pending' },
    assigned: { bg: 'bg-amber-500', label: 'Assigned' },
    completed: { bg: 'bg-emerald-500', label: 'Completed' }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/40 z-40"
        onClick={onClose}
      />

      {/* Side Panel */}
      <div className="fixed right-0 top-0 h-screen w-[469px] bg-white shadow-[0px_4px_6px_0px_rgba(0,0,0,0.05),0px_10px_15px_0px_rgba(0,0,0,0.05)] z-50 flex flex-col">
        {/* Header */}
        <div className="border-b border-gray-200 h-[77px] flex items-center justify-between px-[24px]">
          <h2 className="font-['Lato:Bold',sans-serif] text-[20px] text-[#101828]">Case Details</h2>
          <button 
            onClick={onClose}
            className="size-[28px] rounded-[4px] flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <X className="w-[20px] h-[20px] text-[#99A1AF]" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-[24px] py-[24px]">
          <div className="space-y-[28px]">
            {/* Case Information Card */}
            <div className="bg-[#fcfcfc] rounded-[8px] border border-[rgba(0,0,0,0.05)] p-[17px]">
              <div className="flex items-center justify-between mb-[12px]">
                <h3 className="font-['Lato:SemiBold',sans-serif] text-[16px] text-[#101828]">Case Information</h3>
                <button className="size-[28px] flex items-center justify-center">
                  <Info className="w-[20px] h-[20px] text-[#2160ad]" />
                </button>
              </div>

              <div className="space-y-[8px]">
                <p className="font-['Lato:Bold',sans-serif] text-[14px] text-black">
                  Case No.: {caseData.caseNo}
                </p>

                <div className="flex gap-[8px]">
                  <span className="font-['Lato:Regular',sans-serif] text-[14px] text-[#4a5565]">Trip Route:</span>
                  <span className="font-['Lato:Regular',sans-serif] text-[14px] text-black">{caseData.tripRoute}</span>
                </div>

                <div className="flex gap-[8px]">
                  <span className="font-['Lato:Regular',sans-serif] text-[14px] text-[#4a5565]">Start Time:</span>
                  <span className="font-['Lato:Regular',sans-serif] text-[14px] text-black">{caseData.startTime}</span>
                </div>

                <div className="flex gap-[8px]">
                  <span className="font-['Lato:Regular',sans-serif] text-[14px] text-[#4a5565]">Service Type:</span>
                  <span className="font-['Lato:Regular',sans-serif] text-[14px] text-black">{caseData.serviceType}</span>
                </div>

                <div className="flex gap-[8px]">
                  <span className="font-['Lato:Regular',sans-serif] text-[14px] text-[#4a5565]">Estimated Duration:</span>
                  <span className="font-['Lato:Regular',sans-serif] text-[14px] text-black">{caseData.estimatedDuration}</span>
                </div>

                <div className="flex gap-[8px]">
                  <span className="font-['Lato:Regular',sans-serif] text-[14px] text-[#4a5565]">Requirements:</span>
                  <span className="font-['Lato:Regular',sans-serif] text-[14px] text-black">{caseData.requirements}</span>
                </div>

                <div className="flex gap-[8px] items-center">
                  <span className="font-['Lato:Regular',sans-serif] text-[14px] text-[#4a5565]">Status:</span>
                  <span className={`${statusConfig[caseData.status].bg} h-[24px] px-[12px] rounded-full font-['Lato:Medium',sans-serif] text-[12px] text-white flex items-center`}>
                    {statusConfig[caseData.status].label}
                  </span>
                </div>
              </div>
            </div>

            {/* Cancel Case Button */}
            <button 
              onClick={handleCancelCase}
              className="bg-[#d4183d] h-[36px] w-full rounded-[8px] font-['Lato:Medium',sans-serif] text-[16px] text-white hover:bg-[#b31536] transition-colors"
            >
              Cancel Case
            </button>

            {/* Staff Available Section */}
            <div className="space-y-[12px]">
              <div className="flex items-center gap-[12px]">
                <h3 className="font-['Lato:SemiBold',sans-serif] text-[16px] text-[#101828]">Staff Available</h3>
                <button 
                  onClick={() => setAutoAssignEnabled(!autoAssignEnabled)}
                  className={`h-[41px] px-[16px] rounded-[18.5px] border ${
                    autoAssignEnabled 
                      ? 'bg-[#2160ad] border-[#2160ad]' 
                      : 'bg-white border-[#2160ad]'
                  } flex items-center gap-[8px] transition-colors`}
                >
                  {autoAssignEnabled && (
                    <svg className="w-[12px] h-[12px]" fill="none" viewBox="0 0 12 12">
                      <path d={svgPaths.p35652e00} fill="white" />
                    </svg>
                  )}
                  <span className={`font-['Lato:SemiBold',sans-serif] text-[16px] ${autoAssignEnabled ? 'text-white' : 'text-[#545454]'}`}>
                    Auto Assign
                  </span>
                </button>
              </div>

              {/* Drivers */}
              <div className="space-y-[8px]">
                <h4 className="font-['Lato:Medium',sans-serif] text-[16px] text-[#364153]">Drivers</h4>
                {drivers.map(driver => (
                  <StaffCard 
                    key={driver.id}
                    staff={driver}
                    onAssign={() => handleAssign(driver.id, 'driver')}
                    onUnassign={() => handleUnassignClick(driver.name, driver.id, 'driver')}
                  />
                ))}
              </div>

              {/* Medics */}
              <div className="space-y-[8px]">
                <h4 className="font-['Lato:Medium',sans-serif] text-[16px] text-[#364153]">Medics</h4>
                {medics.map(medic => (
                  <StaffCard 
                    key={medic.id}
                    staff={medic}
                    onAssign={() => handleAssign(medic.id, 'medic')}
                    onUnassign={() => handleUnassignClick(medic.name, medic.id, 'medic')}
                  />
                ))}
              </div>

              {/* Escorts */}
              <div className="space-y-[8px]">
                <h4 className="font-['Lato:Medium',sans-serif] text-[16px] text-[#364153]">Escorts</h4>
                {escorts.map(escort => (
                  <StaffCard 
                    key={escort.id}
                    staff={escort}
                    onAssign={() => handleAssign(escort.id, 'escort')}
                    onUnassign={() => handleUnassignClick(escort.name, escort.id, 'escort')}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cancel Case Modal */}
      {showCancelModal && (
        <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-[12px] w-full max-w-[500px] shadow-lg">
            <div className="border-b border-gray-200 p-[20px] flex items-center justify-between">
              <h3 className="font-['Lato:SemiBold',sans-serif] text-[18px] text-[#101828]">Cancel Case</h3>
              <button 
                onClick={() => {
                  setShowCancelModal(false);
                  setCancelReason('');
                }}
                className="size-[28px] rounded-[4px] flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <X className="w-[20px] h-[20px] text-[#99A1AF]" />
              </button>
            </div>

            <div className="p-[20px]">
              <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#4a5565] mb-[16px]">
                Please provide a reason for cancelling this case. This action cannot be undone.
              </p>

              <div className="space-y-[8px]">
                <label className="font-['Lato:Medium',sans-serif] text-[14px] text-[#101828]">
                  Reason for Cancellation <span className="text-[#fb2c36]">*</span>
                </label>
                <textarea
                  value={cancelReason}
                  onChange={(e) => setCancelReason(e.target.value)}
                  placeholder="Enter the reason for cancelling this case..."
                  className="w-full h-[100px] rounded-[8px] border border-gray-300 px-[12px] py-[8px] font-['Lato:Regular',sans-serif] text-[14px] text-black resize-none focus:outline-none focus:ring-2 focus:ring-[#2160ad] focus:border-transparent"
                />
              </div>
            </div>

            <div className="border-t border-gray-200 p-[20px] flex gap-[12px] justify-end">
              <button
                onClick={() => {
                  setShowCancelModal(false);
                  setCancelReason('');
                }}
                className="h-[40px] px-[20px] rounded-[8px] border border-gray-300 font-['Lato:Medium',sans-serif] text-[16px] text-[#364153] hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmCancellation}
                disabled={!cancelReason.trim()}
                className={`h-[40px] px-[20px] rounded-[8px] font-['Lato:Medium',sans-serif] text-[16px] text-white transition-colors ${
                  cancelReason.trim()
                    ? 'bg-[#d4183d] hover:bg-[#b31536]'
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
              >
                Confirm Cancellation
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Unassign Staff Modal */}
      {showUnassignModal && selectedStaffToUnassign && (
        <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-[12px] w-full max-w-[450px] shadow-lg">
            <div className="p-[24px]">
              <h3 className="font-['Lato:SemiBold',sans-serif] text-[18px] text-[#101828] mb-[16px]">Unassign Staff?</h3>
              <p className="font-['Lato:Regular',sans-serif] text-[16px] text-[#4a5565]">
                Are you sure you want to unassign {selectedStaffToUnassign.name}?
              </p>
            </div>

            <div className="border-t border-gray-200 p-[20px] flex gap-[12px] justify-end">
              <button
                onClick={() => {
                  setShowUnassignModal(false);
                  setSelectedStaffToUnassign(null);
                }}
                className="h-[40px] px-[20px] rounded-[8px] bg-[#2160ad] font-['Lato:Medium',sans-serif] text-[16px] text-white hover:bg-[#1a4d8a] transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmUnassign}
                className="h-[40px] px-[20px] rounded-[8px] border border-[#2160ad] font-['Lato:Medium',sans-serif] text-[16px] text-[#2160ad] hover:bg-[#f0f5ff] transition-colors"
              >
                Unassign
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function StaffCard({ 
  staff, 
  onAssign, 
  onUnassign 
}: { 
  staff: StaffMember; 
  onAssign: () => void; 
  onUnassign: () => void;
}) {
  const hasMultipleMeta = staff.meta2;

  return (
    <div className="bg-[#fcfcfc] rounded-[12px] border border-[rgba(0,0,0,0.05)] p-[12px] flex items-center justify-between">
      <div className="flex-1">
        <p className="font-['Lato:Medium',sans-serif] text-[16px] text-black mb-[4px]">
          {staff.name} ({staff.distance})
        </p>
        {staff.meta && (
          <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#4a5565]">
            {staff.meta}
          </p>
        )}
        {staff.meta2 && (
          <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#4a5565]">
            {staff.meta2}
          </p>
        )}
      </div>

      {staff.isAssigned ? (
        <button
          onClick={onUnassign}
          className="h-[41px] px-[17px] rounded-[20px] border border-[#2160ad] bg-white font-['Lato:Medium',sans-serif] text-[16px] text-black hover:bg-gray-50 transition-colors flex-shrink-0"
        >
          Assigned
        </button>
      ) : (
        <button
          onClick={onAssign}
          className="h-[41px] px-[17px] rounded-[20px] bg-[#2160ad] border border-[#2160ad] font-['Lato:Medium',sans-serif] text-[16px] text-white hover:bg-[#1a4d8a] transition-colors flex-shrink-0"
        >
          Assign
        </button>
      )}
    </div>
  );
}
