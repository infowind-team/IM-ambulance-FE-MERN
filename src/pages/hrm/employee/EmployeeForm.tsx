'use client';

import { useState } from 'react';
import { ChevronDown, Calendar } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function EmployeeForm() {
  const [staffId, setStaffId] = useState('');
  const [isManager, setIsManager] = useState(false);

  const generateStaffId = () => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    setStaffId(`IMA${randomNum}`);
  };

  return (
    <div className="space-y-6">
      {/* Company Information */}
      <Card className='overflow-hidden'>
        <CardHeader className='header-bg-soft pb-6'>
          <CardTitle>Company Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Company</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select company" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="company1">Company A</SelectItem>
                  <SelectItem value="company2">Company B</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Department</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hr">HR</SelectItem>
                  <SelectItem value="it">IT</SelectItem>
                  <SelectItem value="ops">Operations</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div className="space-y-2">
            <Label>Roles (Select one or more)</Label>
            <div className="border rounded-md p-3 space-y-1">
              {['MTO', 'EMT', 'Medic', 'Operations'].map((role) => (
                <div key={role} className="flex items-center space-x-2">
                  <Checkbox id={`role-${role.toLowerCase()}`} />
                  <Label
                    htmlFor={`role-${role.toLowerCase()}`}
                    className="cursor-pointer font-normal text-sm mb-0"
                  >
                    {role}
                  </Label>
                </div>
              ))}
            </div>
          </div>
          <div className='space-y-4'>
            <div className="space-y-2">
                <Label>
                Staff ID <span className="text-red-500">*</span>
                </Label>
                <div className="flex gap-2">
                <Input
                    placeholder="IMA0000"
                    value={staffId}
                    onChange={(e) => setStaffId(e.target.value)}
                />
                <Button type="button" variant='outline' onClick={generateStaffId}>
                    Generate
                </Button>
                </div>
            </div>

            <div className="space-y-2">
              <Label>Permission Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select permission type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full">Full Access</SelectItem>
                  <SelectItem value="limited">Limited</SelectItem>
                </SelectContent>
              </Select>
            </div>
        </div>
          </div>
        </CardContent>
      </Card>

      {/* Employment Details */}
      <Card className='overflow-hidden'>
        <CardHeader className='header-bg-soft pb-6'>
          <CardTitle>Employment Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Employee Status</Label>
              <Select defaultValue="active">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Probation Duration</Label>
              <div className="relative">
                <Input
                  type="number"
                  placeholder="0"
                  min="0"
                  className="pr-17"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                  months
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="isManager"
              checked={isManager}
              onCheckedChange={checked => setIsManager(checked === true)}
            />
            <Label htmlFor="isManager" className="cursor-pointer">
              Manager/Supervisor
            </Label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Employed Date</Label>
              <Input type="date" />
            </div>
            <div className="space-y-2">
              <Label>Confirmed Date</Label>
              <Input type="date" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Last Date of Work</Label>
              <Input type="date" />
            </div>
            <div className="space-y-2">
              <Label>Reason</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select reason" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="resigned">Resigned</SelectItem>
                  <SelectItem value="terminated">Terminated</SelectItem>
                  <SelectItem value="retired">Retired</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* OED Classifications */}
      <Card className='overflow-hidden'>
        <CardHeader className='header-bg-soft pb-6'>
          <CardTitle>OED Classifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: 'Highest Qualification', placeholder: 'Select qualification' },
              { label: 'Occupation Group', placeholder: 'Select occupation group' },
              { label: 'Premise Type', placeholder: 'Select premise type' },
              { label: 'Payment Mode', placeholder: 'Select payment mode' },
              { label: 'Job Type', placeholder: 'Select job type' },
              { label: 'Type Of Employee', placeholder: 'Select employee type' },
            ].map((field) => (
              <div key={field.label} className="space-y-2">
                <Label>{field.label}</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder={field.placeholder} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            ))}

            <div className="space-y-2">
              <Label>Street Name</Label>
              <Input placeholder="Main Street" />
            </div>

            <div className="space-y-2">
              <Label>Postal Code</Label>
              <Input placeholder="123456" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}