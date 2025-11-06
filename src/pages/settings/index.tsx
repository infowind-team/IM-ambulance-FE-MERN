// app/settings/page.tsx
"use client";

import FunctionalHeader from "@/layout/FunctionalHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import APIIntegrationsTab from "./APIIntegrationsTab";
import HRConfigurationTab from "./HRConfigurationTab";
import GeneralSettingsTab from "./GeneralSettingsTab"; // Import here

export default function SettingsPage() {
  return (
    <>
      <FunctionalHeader title="Settings" />

      <div className="flex-1 w-full overflow-auto">
        <Tabs defaultValue="general" className="w-full">
          <div className="px-6 py-6 bg-white border-b">
            <TabsList className="grid w-full grid-cols-3 h-auto gap-3 bg-muted hr-tabs-list">
              <TabsTrigger value="general" className="hr-tab-trigger">
                General
              </TabsTrigger>
              <TabsTrigger value="api" className="hr-tab-trigger">
                API Integrations
              </TabsTrigger>
              <TabsTrigger value="hr" className="hr-tab-trigger">
                HR Configuration
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="general" className="p-6">
            <GeneralSettingsTab />
          </TabsContent>

          <TabsContent value="api" className="p-6">
            <APIIntegrationsTab />
          </TabsContent>

          <TabsContent value="hr" className="p-6">
            <HRConfigurationTab />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
