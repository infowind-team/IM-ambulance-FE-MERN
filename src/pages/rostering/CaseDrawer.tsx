"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation, MapPin, Clock, Info, Check } from "lucide-react";
import CancelCaseDialog from "./CancelCaseDialog";
import AssignStatusDialog from "./AssignStatusDialog";

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

interface CaseDrawerProps {
    caseItem: Case;
}

export default function CaseDrawer({ caseItem }: CaseDrawerProps) {
    const [showCancelDialog, setShowCancelDialog] = useState(false);
    const [showAssignDialog, setShowAssignDialog] = useState(false);
    const [selectedStaff, setSelectedStaff] = useState<string | null>(null);

    const [isCancelling, setIsCancelling] = useState(false);

    const openAssignPopup = (name: string) => {
        setSelectedStaff(name);
        setShowAssignDialog(true);
    };

    const getStatusBg = (status: Case["status"]) => {
        switch (status) {
            case "Open":
                return "bg-blue-500";
            case "Pending for Dispatch":
                return "bg-amber-500";
            case "Completed":
                return "bg-emerald-500";
            default:
                return "bg-gray-500";
        }
    };

    const handleCancelConfirm = async (reason: string) => {
        setIsCancelling(true);
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
        } finally {
            setIsCancelling(false);
            setShowCancelDialog(false);
        }
    };

    const StaffCard = ({
        name,
        details,
        assigned,
    }: {
        name: string;
        details: string;
        assigned: boolean;
    }) => (
        <div className="bg-[#fcfcfc] border border-[rgba(0,0,0,0.05)] rounded-[12px] flex items-end justify-end">
            <div className="flex-1 p-3">
                <div className="text-base font-medium text-black mb-1">{name}</div>
                <div className="text-sm text-gray-600 whitespace-pre-line">{details}</div>
            </div>
            <div className="p-1">
                {!assigned ? (
                    <Button className="px-4 py-2 rounded-[20px] text-sm bg-[#2160ad] text-white border-2 border-[#2160ad]">
                        Assign
                    </Button>
                ) : (
                    <Button
                        variant="outline"
                        className="px-4 py-2 rounded-[20px] text-sm border-2 border-[#2160ad] hover:bg-red-500! hover:border-red-500! hover:text-white"
                        onClick={() => openAssignPopup(name)}
                    >
                        Assigned
                    </Button>
                )}
            </div>
        </div>
    );

    return (
        <>
            <div className="p-6 overflow-y-auto h-full pb-32">
                {/* Case Information */}
                <div className="bg-[#fcfcfc] border rounded-xl p-4 mb-7">
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
                            <span className="text-black">
                                {caseItem.pickup} → {caseItem.dropoff}
                            </span>
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

                {/* Vehicle Live Location (unchanged layout) */}
                <VehicleLocationCard />

                {/* Cancel Case Button */}
                <Button
                    disabled={isCancelling}
                    onClick={() => setShowCancelDialog(true)}
                    className="w-full bg-destructive text-white mb-6"
                >
                    Cancel Case
                </Button>

                {/* Staff Available Section */}
                <div className="space-y-2">
                    <div className="flex items-center gap-3">
                        <h3 className="text-base font-semibold text-gray-900">
                            Staff Available
                        </h3>
                        <Button
                            variant="outline"
                            className="flex items-center gap-2 rounded-[18.5px] px-4 py-2 text-sm font-semibold text-[#545454] hover:bg-gray-50 border-2 border-[#2160ad]"
                        >
                            <Check className="w-5 h-5" />
                            Auto Assign
                        </Button>
                    </div>

                    {/* Drivers */}
                    <h4 className="font-medium text-gray-700">Drivers</h4>
                    <StaffCard name="John Smith (2.3km away)" details="Next case: 14:30" assigned={false} />
                    <StaffCard
                        name="Lisa Johnson (2.7km away)"
                        details={`1.8km from ongoing destination\nTime started: 08:15`}
                        assigned={true}
                    />

                    {/* Medics */}
                    <h4 className="font-medium text-gray-700 mt-6">Medics</h4>
                    <StaffCard
                        name="Dr. Sarah Williams (4.2km away)"
                        details={`3.1km from ongoing destination\nNext case: 12:00`}
                        assigned={false}
                    />

                    {/* Escorts */}
                    <h4 className="font-medium text-gray-700 mt-6">Escorts</h4>
                    <StaffCard
                        name="Mark Thompson (5.5km away)"
                        details="Next case: 15:00"
                        assigned={true}
                    />
                </div>
            </div>

            {/* Popups */}
            <CancelCaseDialog
                isOpen={showCancelDialog}
                onClose={() => setShowCancelDialog(false)}
                onConfirm={handleCancelConfirm}
                caseNumber={caseItem.caseNumber}
            />

            <AssignStatusDialog
                isOpen={showAssignDialog}
                onClose={() => setShowAssignDialog(false)}
                onUnassign={() => console.log("Unassign", selectedStaff)}
                staffName={selectedStaff || ""}
            />
        </>
    );
}

function VehicleLocationCard() {
    return (
        <div className="mb-6">
            {/* Header */}
            <Card className="overflow-hidden">
                <CardHeader className="pb-6 header-bg-soft">
                    <CardTitle className="flex items-center gap-2 text-base">
                        <Navigation className="w-5 h-5" />
                        Vehicle Live Location
                    </CardTitle>
                </CardHeader>

                {/* Content */}
                <div className="p-4">
                    <div className="flex gap-4">
                        {/* Map Placeholder */}
                        <div className="w-1/2 relative bg-gray-100 rounded-lg overflow-hidden">
                            <div className="absolute inset-0 bg-linear-to-br from-blue-50 to-blue-100">
                                <svg className="absolute inset-0 w-full h-full opacity-20">
                                    <defs>
                                        <pattern
                                            id="grid"
                                            width="40"
                                            height="40"
                                            patternUnits="userSpaceOnUse"
                                        >
                                            <path
                                                d="M 40 0 L 0 0 0 40"
                                                fill="none"
                                                stroke="#2160AD"
                                                strokeWidth="0.5"
                                            />
                                        </pattern>
                                    </defs>
                                    <rect width="100%" height="100%" fill="url(#grid)" />
                                </svg>

                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="absolute top-1/3 left-0 right-0 h-2 bg-gray-300 opacity-40"></div>
                                    <div className="absolute top-0 bottom-0 left-1/2 w-2 bg-gray-300 opacity-40"></div>

                                    <div className="relative">
                                        <div className="absolute -inset-4 bg-[#2160AD] opacity-20 rounded-full animate-ping"></div>
                                        <div className="relative bg-[#2160AD] text-white rounded-full p-4 shadow-lg">
                                            <Navigation className="w-6 h-6 transform rotate-45" />
                                        </div>
                                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-md shadow-md whitespace-nowrap border border-[#2160AD]/20">
                                            <p className="font-medium text-sm">SKR1234A</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute top-1/4 left-1/4 bg-red-500 w-3 h-3 rounded-full shadow-lg"></div>
                                <div className="absolute top-3/4 right-1/4 bg-green-500 w-3 h-3 rounded-full shadow-lg"></div>
                            </div>

                            <div className="absolute top-3 left-3 bg-white rounded-lg shadow-lg px-2 py-1.5 border border-[#2160AD]/20">
                                <div className="flex items-center gap-1.5">
                                    <div className="w-6 h-6 bg-[#2160AD] rounded flex items-center justify-center">
                                        <MapPin className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-gray-500">Powered by</p>
                                        <p className="font-semibold text-xs text-[#2160AD]">
                                            Cartrack
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="w-1/2 flex flex-col gap-4">

                            <div className="flex items-start gap-3 p-3 bg-gray-50 border border-gray-200 rounded-lg">
                                <div className="p-2 bg-[#2160AD]/10 rounded-lg">
                                    <Navigation className="w-5 h-5 text-[#2160AD]" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Current Speed</p>
                                    <p className="font-semibold">49 km/h</p>
                                    <p className="text-xs text-gray-400">Moving</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 p-3 bg-gray-50 border border-gray-200 rounded-lg">
                                <div className="p-2 bg-green-50 rounded-lg">
                                    <MapPin className="w-5 h-5 text-green-600" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Current Location</p>
                                    <p className="font-semibold">Jurong East, Singapore</p>
                                    <p className="text-xs text-gray-400">1.3483, 103.6831</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 p-3 bg-gray-50 border border-gray-200 rounded-lg">
                                <div className="p-2 bg-orange-50 rounded-lg">
                                    <Clock className="w-5 h-5 text-orange-600" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Last Update</p>
                                    <p className="font-semibold">5:07:03 PM</p>
                                    <p className="text-xs text-gray-400">Real-time tracking</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}
