// app/payroll-management/page.tsx
"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import FunctionalHeader from "@/layout/FunctionalHeader";
import EmployeeProfile from "./EmployeeProfile";
import AttendanceTracking from "./AttendanceTracking";
import IncentivesManagement from "./IncentivesManagement";
import PayrollManagement from "./PayrollManagement";
import LeaveManagement from "./LeaveManagement";

export default function HRManagementPage() {
  return (
    <>
      <FunctionalHeader title="HR Management" />

      <div className="flex-1 overflow-hidden flex flex-col">
        <Tabs
          defaultValue="employees"
          className="flex-1 flex flex-col overflow-hidden"
        >
          {/* Tabs Header */}
          <div className="px-6 py-6 bg-white border-b">
            <TabsList className="grid w-full grid-cols-5 h-auto gap-3 bg-muted hr-tabs-list">
              <TabsTrigger className="hr-tab-trigger" value="employees">
                Employee Profile
              </TabsTrigger>
              <TabsTrigger className="hr-tab-trigger" value="attendance">
                Attendance Tracking
              </TabsTrigger>
              <TabsTrigger className="hr-tab-trigger" value="leave">
                Leave Management
              </TabsTrigger>
              <TabsTrigger className="hr-tab-trigger" value="payroll">
                Payroll Management
              </TabsTrigger>
              <TabsTrigger className="hr-tab-trigger" value="incentives">
                Incentives Management
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Tab Contents */}
          <TabsContent value="employees" className="flex-1 overflow-auto m-0">
            <EmployeeProfile />
          </TabsContent>

          <TabsContent value="attendance" className="flex-1 overflow-auto m-0">
            <AttendanceTracking />
          </TabsContent>

          <TabsContent value="payroll" className="flex-1 overflow-auto m-0">
            <PayrollManagement />
          </TabsContent>

          <TabsContent value="leave" className="flex-1 overflow-auto m-0">
            <LeaveManagement />
          </TabsContent>

          <TabsContent value="incentives" className="flex-1 overflow-auto m-0">
            <IncentivesManagement />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
