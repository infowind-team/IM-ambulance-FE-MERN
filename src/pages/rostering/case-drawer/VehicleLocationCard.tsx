import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin, Navigation } from "lucide-react";

export default function VehicleLocationCard() {
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