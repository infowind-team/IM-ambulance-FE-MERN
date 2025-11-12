import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FunctionalSidebar from '../../components/FunctionalSidebar';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';


// Vehicle data type
interface Vehicle {
  id: string;
  number: string;
  plate: string;
  name: string;
  model: string;
  mileage: string;
  driver: string;
  type: 'EAS' | 'MTS';
  servicingDate: string;
  coeExpiry: string;
  status: 'Active' | 'Inactive';
}

// Sample vehicle data
const vehiclesData: Vehicle[] = [
  {
    id: '1',
    number: 'AMB001',
    plate: 'SBA1234A',
    name: 'Ambulance Alpha',
    model: 'Mercedes Sprinter (2020)',
    mileage: '45,000 km',
    driver: 'Marcus Chen',
    type: 'EAS',
    servicingDate: '12/1/2024',
    coeExpiry: '6/30/2027',
    status: 'Active'
  },
  {
    id: '2',
    number: 'AMB002',
    plate: 'SBA2345B',
    name: 'Ambulance Beta',
    model: 'Toyota Hiace (2019)',
    mileage: '52,000 km',
    driver: 'Jennifer Liu',
    type: 'EAS',
    servicingDate: '11/15/2024',
    coeExpiry: '8/20/2026',
    status: 'Active'
  },
  {
    id: '3',
    number: 'AMB003',
    plate: 'SBA5678E',
    name: 'Ambulance Gamma',
    model: 'Ford Transit (2023)',
    mileage: '12,500 km',
    driver: 'Sarah Tan',
    type: 'MTS',
    servicingDate: '1/5/2025',
    coeExpiry: '3/25/2030',
    status: 'Active'
  },
  {
    id: '4',
    number: 'EMG001',
    plate: 'SEM4567D',
    name: 'Emergency Response Unit',
    model: 'Mercedes Vito (2022)',
    mileage: '15,000 km',
    driver: 'David Kim',
    type: 'EAS',
    servicingDate: '12/20/2024',
    coeExpiry: '1/10/2029',
    status: 'Active'
  },
  {
    id: '5',
    number: 'TRA001',
    plate: 'STR3456C',
    name: 'Transport One',
    model: 'Nissan NV200 (2021)',
    mileage: '28,000 km',
    driver: 'Ahmed Hassan',
    type: 'MTS',
    servicingDate: '1/1/2025',
    coeExpiry: '2/15/2028',
    status: 'Inactive'
  },
  {
    id: '6',
    number: 'TRA002',
    plate: 'STR6789F',
    name: 'Transport Two',
    model: 'Toyota Alphard (2018)',
    mileage: '68,000 km',
    driver: 'Michael Wong',
    type: 'MTS',
    servicingDate: '12/10/2024',
    coeExpiry: '11/30/2025',
    status: 'Inactive'
  }
];

type SortField = 'number' | 'name' | 'type' | 'servicingDate' | 'coeExpiry' | 'status';
type SortDirection = 'asc' | 'desc';

export default function VehiclesPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [sortField, setSortField] = useState<SortField>('number');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const getSortIcon = (field: SortField) => {
    if (sortField !== field) {
      return <ChevronDown className="w-4 h-4 opacity-50" stroke="#99A1AF" />;
    }
    return sortDirection === 'asc' ? 
      <ChevronUp className="w-4 h-4" stroke="#4A5565" /> : 
      <ChevronDown className="w-4 h-4 opacity-50" stroke="#99A1AF" />;
  };

  const filteredVehicles = vehiclesData.filter(vehicle => {
    const matchesSearch = vehicle.number.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         vehicle.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         vehicle.driver.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'All Status' || vehicle.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const activeCount = vehiclesData.filter(v => v.status === 'Active').length;
  const inactiveCount = vehiclesData.filter(v => v.status === 'Inactive').length;
  const easCount = vehiclesData.filter(v => v.type === 'EAS').length;
  const mtsCount = vehiclesData.filter(v => v.type === 'MTS').length;

  return (
    <div className="bg-white content-stretch flex items-start size-full">
      {/* <FunctionalSidebar /> */}
      
      <div className="flex-1 bg-white h-screen overflow-auto">
        {/* Page Header */}
        <div className="bg-[rgba(33,96,173,0.05)] border-l-4 border-[rgba(33,96,173,0.2)] px-6 py-4">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-1 mb-2">
            <button 
              onClick={() => navigate('/calendar')}
              className="font-['Lato:Regular',sans-serif] text-[14px] text-[#4a5565] hover:text-[#2160ad]"
            >
              Operations
            </button>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 14 14">
              <path d="M5.25 10.5L8.75 7L5.25 3.5" stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            </svg>
            <span className="font-['Lato:Medium',sans-serif] text-[14px] text-[#2160ad]">Vehicles</span>
          </div>

          {/* Page Title */}
          <h1 className="font-['Lato:Medium',sans-serif] text-[26px] text-[#2160ad]">Vehicles</h1>
        </div>

        {/* Main Content */}
        <div className="p-6 flex flex-col gap-6">
          {/* Search & Filter Row */}
          <div className="flex items-center justify-between gap-4">
            {/* Search and Filter */}
            <div className="flex items-center gap-4 flex-1">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-[448px]">
                <input
                  type="text"
                  placeholder="Search vehicles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#f3f3f5] h-[36px] pl-10 pr-3 py-1 rounded-lg border border-transparent font-['Lato:Regular',sans-serif] text-[16px] text-black placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#717182]" />
              </div>

              {/* Status Filter Dropdown */}
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="bg-[#f3f3f5] h-[36px] px-3 py-1 rounded-lg border border-transparent font-['Lato:Regular',sans-serif] text-[16px] text-black cursor-pointer hover:bg-[#e8e8ea] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
              >
                <option>All Status</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>

            {/* Add Vehicle Button */}
            <button 
              onClick={() => navigate('/add-vehicle')}
              className="bg-[#2160ad] h-[36px] px-4 rounded-lg flex items-center gap-2 hover:bg-[#1a4d8a] transition-colors"
            >
              <Plus className="w-4 h-4 stroke-white" />
              <span className="font-['Lato:Medium',sans-serif] text-[16px] text-white">Add Vehicle</span>
            </button>
          </div>

          {/* Table Card */}
          <Card className="rounded-xl border shadow-sm p-6">
            <Table>
              <TableHeader className="header-bg-soft">
                <TableRow>
                  <TableHead className="text-gray-700 font-semibold px-4 py-3">
                    <button 
                      onClick={() => handleSort('number')}
                      className="flex items-center gap-1"
                    >
                      Vehicle Number
                      {getSortIcon('number')}
                    </button>
                  </TableHead>
                  <TableHead className="text-gray-700 font-semibold px-4 py-3">
                    <button 
                      onClick={() => handleSort('name')}
                      className="flex items-center gap-1"
                    >
                      Vehicle Name
                      {getSortIcon('name')}
                    </button>
                  </TableHead>
                  <TableHead className="text-gray-700 font-semibold px-4 py-3">
                    Assigned Driver / MTO
                  </TableHead>
                  <TableHead className="text-gray-700 font-semibold px-4 py-3">
                    <button 
                      onClick={() => handleSort('type')}
                      className="flex items-center gap-1"
                    >
                      Type
                      {getSortIcon('type')}
                    </button>
                  </TableHead>
                  <TableHead className="text-gray-700 font-semibold px-4 py-3">
                    <button 
                      onClick={() => handleSort('servicingDate')}
                      className="flex items-center gap-1"
                    >
                      Next Servicing Due Date
                      {getSortIcon('servicingDate')}
                    </button>
                  </TableHead>
                  <TableHead className="text-gray-700 font-semibold px-4 py-3">
                    <button 
                      onClick={() => handleSort('coeExpiry')}
                      className="flex items-center gap-1"
                    >
                      COE Expiry
                      {getSortIcon('coeExpiry')}
                    </button>
                  </TableHead>
                  <TableHead className="text-gray-700 font-semibold px-4 py-3">
                    <button 
                      onClick={() => handleSort('status')}
                      className="flex items-center gap-1"
                    >
                      Status
                      {getSortIcon('status')}
                    </button>
                  </TableHead>
                  <TableHead className="text-gray-700 font-semibold px-4 py-3">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredVehicles.map((vehicle) => (
                  <TableRow key={vehicle.id} className="hover:header-bg-soft transition">
                    {/* Vehicle Number */}
                    <TableCell className="py-4">
                        <div>
                          <p className="font-['Inter:Medium',sans-serif] text-[16px] text-[#2160ad]">{vehicle.number}</p>
                          <p className="font-['Lato:Regular',sans-serif] text-[12px] text-[#717182]">{vehicle.plate}</p>
                        </div>
                      </TableCell>

                      {/* Vehicle Name */}
                      <TableCell className="py-4">
                        <div className="flex items-center gap-3">
                          <div className="bg-[#2160ad] rounded-full size-10 flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                              <path d="M11.666 14.9997V4.99967C11.666 4.55765 11.4904 4.13372 11.1779 3.82116C10.8653 3.5086 10.4414 3.33301 9.99935 3.33301H3.33268C2.89065 3.33301 2.46673 3.5086 2.15417 3.82116C1.84161 4.13372 1.66602 4.55765 1.66602 4.99967V14.1663C1.66602 14.3874 1.75381 14.5993 1.91009 14.7556C2.06637 14.9119 2.27834 14.9997 2.49935 14.9997H4.16602" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                              <path d="M12.5 15H7.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                              <path d="M15.8327 15.0003H17.4993C17.7204 15.0003 17.9323 14.9125 18.0886 14.7562C18.2449 14.6 18.3327 14.388 18.3327 14.167V11.1253C18.3323 10.9362 18.2677 10.7528 18.1493 10.6053L15.2493 6.98033C15.1714 6.88273 15.0725 6.80389 14.96 6.74966C14.8475 6.69542 14.7242 6.66717 14.5993 6.66699H11.666" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                              <path d="M14.1667 16.6663C15.0871 16.6663 15.8333 15.9201 15.8333 14.9997C15.8333 14.0792 15.0871 13.333 14.1667 13.333C13.2462 13.333 12.5 14.0792 12.5 14.9997C12.5 15.9201 13.2462 16.6663 14.1667 16.6663Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                              <path d="M5.83268 16.6663C6.75316 16.6663 7.49935 15.9201 7.49935 14.9997C7.49935 14.0792 6.75316 13.333 5.83268 13.333C4.91221 13.333 4.16602 14.0792 4.16602 14.9997C4.16602 15.9201 4.91221 16.6663 5.83268 16.6663Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">{vehicle.name}</p>
                            <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#717182]">{vehicle.model}</p>
                            <p className="font-['Lato:Regular',sans-serif] text-[12px] text-[#717182]">Mileage: {vehicle.mileage}</p>
                          </div>
                        </div>
                      </TableCell>

                      {/* Driver */}
                      <TableCell className="py-4">
                        <p className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">{vehicle.driver}</p>
                      </TableCell>

                      {/* Type */}
                      <TableCell className="py-4">
                        <span className={`px-2 py-1 rounded-lg text-[12px] font-['Lato:Medium',sans-serif] border ${
                          vehicle.type === 'EAS' 
                            ? 'bg-blue-50 text-[#1447e6] border-[#bedbff]' 
                            : 'bg-green-50 text-[#008236] border-[#b9f8cf]'
                        }`}>
                          {vehicle.type}
                        </span>
                      </TableCell>

                      {/* Servicing Date */}
                      <TableCell className="py-4">
                        <p className="font-['Lato:Regular',sans-serif] text-[16px] text-[#101828]">{vehicle.servicingDate}</p>
                      </TableCell>

                      {/* COE Expiry */}
                      <TableCell className="py-4">
                        <p className="font-['Lato:Regular',sans-serif] text-[16px] text-[#101828]">{vehicle.coeExpiry}</p>
                      </TableCell>

                      {/* Status */}
                      <TableCell className="py-4">
                        <span className={`px-2 py-1 rounded-lg text-[12px] font-['Lato:Medium',sans-serif] border ${
                          vehicle.status === 'Active' 
                            ? 'bg-emerald-50 text-[#007a55] border-[#a4f4cf]' 
                            : 'bg-red-50 text-[#c10007] border-[#ffc9c9]'
                        }`}>
                          {vehicle.status}
                        </span>
                      </TableCell>

                      {/* Actions */}
                      <TableCell className="py-4">
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="icon">
                            <Eye className="w-4 h-4 stroke-[#155DFC]" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Pencil className="w-4 h-4 stroke-[#6A7282]" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="w-4 h-4 stroke-[#E7000B]" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Footer Legend */}
          <div className="flex items-center justify-between">
            <p className="font-['Lato:Regular',sans-serif] text-[16px] text-[#717182]">
              Showing {filteredVehicles.length} of {vehiclesData.length} vehicles
            </p>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-[#18c07a]" />
                <span className="font-['Lato:Regular',sans-serif] text-[16px] text-[#717182]">Active: {activeCount}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-[#c01818]" />
                <span className="font-['Lato:Regular',sans-serif] text-[16px] text-[#717182]">Inactive: {inactiveCount}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-blue-100 border border-[#bedbff]" />
                <span className="font-['Lato:Regular',sans-serif] text-[16px] text-[#717182]">EAS: {easCount}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-green-100 border border-[#b9f8cf]" />
                <span className="font-['Lato:Regular',sans-serif] text-[16px] text-[#717182]">MTS: {mtsCount}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
