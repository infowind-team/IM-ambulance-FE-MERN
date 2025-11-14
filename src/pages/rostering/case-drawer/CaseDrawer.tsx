"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Info, Check } from "lucide-react";
import CancelCaseDialog from "../rostering-dialogs/CancelCaseDialog";
import AssignStatusDialog from "../rostering-dialogs/AssignStatusDialog";
import VehicleLocationCard from "./VehicleLocationCard";

interface Case {
    id: string;
    caseNumber: string;
    patient: string;
    pickup: string;
    dropoff: string;
    serviceType: "One-way" | "Two-way" | "Three-way";
    startTime: string;
    requirements: string;
    status: "Open" | "Pending for Dispatch" | "Completed";
}

interface StaffMember {
    id: string;
    name: string;
    details: string;
    assigned: boolean;
    role: "driver" | "medic" | "escort";
}

interface CaseDrawerProps {
    caseItem: Case;
}

export default function CaseDrawer({ caseItem }: CaseDrawerProps) {
    const [showCancelDialog, setShowCancelDialog] = useState(false);
    const [showAssignDialog, setShowAssignDialog] = useState(false);
    const [selectedStaff, setSelectedStaff] = useState<StaffMember | null>(null);
    const [isCancelling, setIsCancelling] = useState(false);

    // Staff data with individual assignment state
    const [staffList, setStaffList] = useState<StaffMember[]>([
        { id: "1", name: "John Smith (2.3km away)", details: "Next case: 14:30", assigned: false, role: "driver" },
        { id: "2", name: "Lisa Johnson (2.7km away)", details: "1.8km from ongoing destination\nTime started: 08:15", assigned: true, role: "driver" },
        { id: "3", name: "Dr. Sarah Williams (4.2km away)", details: "3.1km from ongoing destination\nNext case: 12:00", assigned: false, role: "medic" },
        { id: "4", name: "Mark Thompson (5.5km away)", details: "Next case: 15:00", assigned: true, role: "escort" },
    ]);

    const openAssignDialog = (staff: StaffMember) => {
        setSelectedStaff(staff);
        setShowAssignDialog(true);
    };

    const handleAssign = (id: string) => {
        setStaffList(prev =>
            prev.map(s => s.id === id ? { ...s, assigned: true } : s)
        );
        setShowAssignDialog(false);
    };

    const handleUnassignConfirm = () => {
        if (selectedStaff) {
            setStaffList(prev =>
                prev.map(s => s.id === selectedStaff.id ? { ...s, assigned: false } : s)
            );
        }
        setShowAssignDialog(false);
        setSelectedStaff(null);
    };

    const getStatusBg = (status: Case["status"]) => {
        switch (status) {
            case "Open": return "bg-blue-500";
            case "Pending for Dispatch": return "bg-amber-500";
            case "Completed": return "bg-emerald-500";
            default: return "bg-gray-500";
        }
    };

    const handleCancelConfirm = async (reason: string) => {
        setIsCancelling(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
        } finally {
            setIsCancelling(false);
            setShowCancelDialog(false);
        }
    };

    const StaffCard = ({ staff }: { staff: StaffMember }) => (
        <div className="bg-[#fcfcfc] border border-[rgba(0,0,0,0.05)] rounded-[12px] flex items-end justify-end">
            <div className="flex-1 p-3">
                <div className="text-base font-medium text-black mb-1">{staff.name}</div>
                <div className="text-sm text-gray-600 whitespace-pre-line">{staff.details}</div>
            </div>
            <div className="p-1">
                {!staff.assigned ? (
                    <Button
                        onClick={() => handleAssign(staff.id)}
                        className="px-4 py-2 h-auto rounded-3xl bg-[#2160ad] text-white border-2 border-[#2160ad]"
                    >
                        Assign
                    </Button>
                ) : (
                    <Button
                        variant="outline"
                        className="px-4 py-2 h-auto rounded-3xl border-2 border-[#2160ad] hover:bg-red-500! hover:border-red-500! hover:text-white"
                        onClick={() => openAssignDialog(staff)}
                    >
                        Assigned
                    </Button>
                )}
            </div>
        </div>
    );

    // Group staff by role
    const drivers = staffList.filter(s => s.role === "driver");
    const medics = staffList.filter(s => s.role === "medic");
    const escorts = staffList.filter(s => s.role === "escort");

    return (
        <>
            <div className="p-6 overflow-y-auto h-full pb-32">
                {/* Case Information */}
                <div className="bg-[#fcfcfc] border rounded-lg p-4 mb-7">
                    <div className="flex items-center justify-between mb-3">
                        <h3 className="text-base font-semibold text-gray-900">Case Information</h3>
                        <button className="text-[#2160AD] p-1">
                            <Info className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="space-y-2 text-sm">
                        <div className="font-bold text-black">Case No.: {caseItem.caseNumber}</div>
                        <div className="flex gap-2">
                            <span className="text-gray-600">Trip Route:</span>
                            <span className="text-black">{caseItem.pickup} → {caseItem.dropoff}</span>
                        </div>
                        <div className="flex gap-2">
                            <span className="text-gray-600">Start Time:</span>
                            <span className="text-black">{caseItem.startTime}</span>
                        </div>
                        <div className="flex gap-2">
                            <span className="text-gray-600">Service Type:</span>
                            <span className="text-black">{caseItem.serviceType}</span>
                        </div>
                        <div className="flex gap-2">
                            <span className="text-gray-600">Requirements:</span>
                            <span className="text-black">{caseItem.requirements}</span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <span className="text-gray-600">Status:</span>
                            <Badge className={`${getStatusBg(caseItem.status)} text-white px-3 py-1 rounded-full`}>
                                {caseItem.status}
                            </Badge>
                        </div>
                    </div>
                </div>

                {/* Vehicle Live Location */}
                {caseItem.status === 'Completed' && <VehicleLocationCard />}

                {/* Cancel Case Button */}
                <Button
                    disabled={isCancelling}
                    variant='destructive'
                    onClick={() => setShowCancelDialog(true)}
                    className="w-full mb-6"
                >
                    Cancel Case
                </Button>

                {/* Staff Available Section */}
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <h3 className="text-base font-semibold text-gray-900">Staff Available</h3>
                        <Button
                            variant="outline"
                            className="flex items-center gap-2 rounded-[18.5px] px-4 py-2 h-auto text-base font-semibold text-[#545454] hover:bg-gray-50 border-2 border-[#2160ad]"
                        >
                            <Check className="w-5 h-5" />
                            Auto Assign
                        </Button>
                    </div>

                    {/* Drivers */}
                    <div>
                        <h4 className="font-medium text-gray-700 mb-3">Drivers</h4>
                        <div className="space-y-3">
                            {drivers.map(staff => (
                                <StaffCard key={staff.id} staff={staff} />
                            ))}
                        </div>
                    </div>

                    {/* Medics */}
                    <div>
                        <h4 className="font-medium text-gray-700 mb-3">Medics</h4>
                        <div className="space-y-3">
                            {medics.map(staff => (
                                <StaffCard key={staff.id} staff={staff} />
                            ))}
                        </div>
                    </div>

                    {/* Escorts */}
                    <div>
                        <h4 className="font-medium text-gray-700 mb-3">Escorts</h4>
                        <div className="space-y-3">
                            {escorts.map(staff => (
                                <StaffCard key={staff.id} staff={staff} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Dialogs */}
            <CancelCaseDialog
                isOpen={showCancelDialog}
                onClose={() => setShowCancelDialog(false)}
                onConfirm={handleCancelConfirm}
                caseNumber={caseItem.caseNumber}
            />

            <AssignStatusDialog
                isOpen={showAssignDialog}
                onClose={() => {
                    setShowAssignDialog(false);
                    setSelectedStaff(null);
                }}
                onUnassign={handleUnassignConfirm}
                staffName={selectedStaff?.name || ""}
            />
        </>
    );
}