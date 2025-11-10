// app/roster/page.tsx
'use client';

import React, { useState } from 'react';
import { FileDown } from 'lucide-react';
import FunctionalHeader from '@/layout/FunctionalHeader';
import ShiftHoursTab from './ShiftHoursTab';
import OfficeHoursTab from './OfficeHoursTab';
import OperationsTab from './OperationsTab';
import { SharedDatePicker } from '@/components/ui/shared-date-picker';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

export default function RosteringPage() {
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 5, 1));
  const [selectedTab, setSelectedTab] = useState('shift');

  return (
    <>
      <FunctionalHeader title="Rostering" />
      <div className="flex-1 w-full overflow-auto">
        {/* Toolbar */}
        <div className="border-b border-gray-200 px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Shared DatePicker (Day mode only) */}
              <SharedDatePicker
                date={selectedDate}
                onDateChange={setSelectedDate}
                mode="day"
              />
            </div>

            <Button
              variant="outline"
              className="h-8 rounded-md px-3 gap-2 border-[#2160AD]/20 text-[#2160AD] hover:bg-[#2160AD]/10"
            >
              <FileDown className="w-4 h-4" />
              Export
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <div className="border-b border-gray-200 px-6">
            <TabsList className="bg-transparent flex space-x-8 p-0">
              <TabsTrigger value="shift" className="py-3 px-1">Ground Crew (Shift)</TabsTrigger>
              <TabsTrigger value="office" className="py-3 px-1">Ground Crew (Office Hours)</TabsTrigger>
              <TabsTrigger value="ops" className="py-3 px-1">Operations</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="shift" className="p-6"><ShiftHoursTab /></TabsContent>
          <TabsContent value="office" className="p-6"><OfficeHoursTab /></TabsContent>
          <TabsContent value="ops" className="p-6"><OperationsTab /></TabsContent>
        </Tabs>
      </div>
    </>
  );
}