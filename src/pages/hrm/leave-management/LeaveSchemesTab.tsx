'use client';

import { useState } from 'react';
import {
  Search,
  Plus,
  Download,
  Settings,
  PenLine,
  Trash2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import ConfigureProrateDialog from '../hrm-dialogs/ConfigureProrateDialog';
import CreateLeaveSchemeDialog from '../hrm-dialogs/CreateLeaveSchemeDialog';
import LeaveSchemeDetailsDialog from '../hrm-dialogs/LeaveSchemeDetailsDialog';

interface LeaveScheme {
  id: string;
  name: string;
  description: string;
  leaveTypes: string[];
  serviceYears: string;
  eligibleCount: number;
}

interface LeaveSchemesTabProps {
  schemes?: LeaveScheme[];
  onEdit?: (scheme: LeaveScheme) => void;
  onDelete?: (id: string) => void;
  onView?: (scheme: LeaveScheme) => void;
  onNewScheme?: () => void;
  onConfigureProrate?: () => void;
}

const InfoIcon = () => (
  <div className="w-4 h-4">
    <svg
      viewBox="0 0 60 60"
      fill="none"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 44.375C31.0355 44.375 31.875 43.5355 31.875 42.5V27.5C31.875 26.4645 31.0355 25.625 30 25.625C28.9645 25.625 28.125 26.4645 28.125 27.5V42.5C28.125 43.5355 28.9645 44.375 30 44.375Z"
        fill="currentColor"
      />
      <path
        d="M30 17.5C31.3807 17.5 32.5 18.6193 32.5 20C32.5 21.3807 31.3807 22.5 30 22.5C28.6193 22.5 27.5 21.3807 27.5 20C27.5 18.6193 28.6193 17.5 30 17.5Z"
        fill="currentColor"
      />
      <path
        clipRule="evenodd"
        fillRule="evenodd"
        d="M3.125 30C3.125 15.1574 15.1574 3.125 30 3.125C44.8427 3.125 56.875 15.1574 56.875 30C56.875 44.8427 44.8427 56.875 30 56.875C15.1574 56.875 3.125 44.8427 3.125 30ZM30 6.875C17.2284 6.875 6.875 17.2284 6.875 30C6.875 42.7715 17.2284 53.125 30 53.125C42.7715 53.125 53.125 42.7715 53.125 30C53.125 17.2284 42.7715 6.875 30 6.875Z"
        fill="currentColor"
      />
    </svg>
  </div>
);

export default function LeaveSchemesTab({
  schemes = [],
  onEdit,
  onDelete,
  onView,
  onNewScheme,
  onConfigureProrate,
}: LeaveSchemesTabProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [configureProrate, setConfigureProrate] = useState(false);
  const [createLeaveScheme, setCreateLeaveScheme] = useState(false);
  const [viewDetails, setViewDetails] = useState(false);

  const handleSave = (method: 'by_month' | 'by_service_days') => {
    console.log('Prorate method saved:', method);
    // Save to API or context
  };

  const schemeHandleSave = (data: any) => {
    console.log('New Scheme:', data);
    // Save via API
  };

  const handleEdit = (id: string) => {
    console.log('Edit scheme:', id);
    // Open edit dialog or redirect
  };

  const filteredSchemes = schemes.filter(
    (scheme) =>
      scheme.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scheme.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-base font-medium text-[#2160AD]">
            MOM-Compliant Leave Schemes
          </h3>
          <p className="text-base text-gray-600 mt-1">
            Configure Singapore MOM-compliant leave entitlements with custom
            company benefits and staff group configurations
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button
            className="bg-[#2160AD] hover:bg-[#2160AD]/90"
            onClick={() => setCreateLeaveScheme(true)}
          >
            <Plus className="w-4 h-4 mr-2" />
            New Scheme
          </Button>
        </div>
      </div>

      <CreateLeaveSchemeDialog
        open={createLeaveScheme}
        onOpenChange={setCreateLeaveScheme}
        onSave={schemeHandleSave}
      />

      {/* Search + Configure */}
      <div className="flex gap-4 justify-between flex-wrap">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search schemes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline" onClick={() => setConfigureProrate(true)}>
          <Settings className="w-4 h-4 mr-2" />
          Configure Prorate
        </Button>
      </div>

      <ConfigureProrateDialog
        open={configureProrate}
        onOpenChange={setConfigureProrate}
        onSave={handleSave}
      />

      {/* Table */}
      <Card className="overflow-hidden">
        <Table>
          <TableHeader className="header-bg-soft">
            <TableRow className="border-b">
              <TableHead className="p-4">Scheme Details</TableHead>
              <TableHead className="p-4">Leave Types</TableHead>
              <TableHead className="p-4">Service Years</TableHead>
              <TableHead className="p-4">Eligible</TableHead>
              <TableHead className="p-4">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredSchemes.map((scheme) => (
              <TableRow
                key={scheme.id}
                className="border-b hover:header-bg-soft transition"
              >
                <TableCell className="p-4">
                  <div>
                    <div className="font-medium text-[#2160AD] text-base">
                      {scheme.name}
                    </div>
                    <div className="text-base text-gray-500 mt-1">
                      {scheme.description}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="p-4">
                  <div className="flex flex-wrap gap-1.5">
                    {scheme.leaveTypes.map((type) => (
                      <Badge
                        key={type}
                        variant="outline"
                        className="text-base border-[#2160AD]/30"
                      >
                        {type}
                      </Badge>
                    ))}
                  </div>
                </TableCell>
                <TableCell className="p-4">
                  <Badge variant="outline" className="text-xs">
                    {scheme.serviceYears}
                  </Badge>
                </TableCell>
                <TableCell className="p-4">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{scheme.eligibleCount}</span>
                    <span className="text-base text-gray-500">employees</span>
                  </div>
                </TableCell>
                <TableCell className="p-4">
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-8 w-8 p-0 hover:bg-[#2160AD]/10"
                      title="View scheme details"
                      onClick={() => setViewDetails(true)}
                    >
                      <InfoIcon />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-8 w-8 p-0"
                      title="Edit scheme"
                      onClick={() => onEdit?.(scheme)}
                    >
                      <PenLine className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
                      title="Delete scheme"
                      onClick={() => onDelete?.(scheme.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      {/* Empty State */}
      {filteredSchemes.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No leave schemes found.
        </div>
      )}
      
      <LeaveSchemeDetailsDialog
        open={viewDetails}
        onOpenChange={setViewDetails}
        onEdit={handleEdit}
      />

    </div>
  );
}