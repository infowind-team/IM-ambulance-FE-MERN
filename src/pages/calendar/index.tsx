'use client';

import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Check } from 'lucide-react';
import { format, addDays, subDays } from 'date-fns';
import FunctionalHeader from '@/layout/FunctionalHeader';
import DayView from './DayView';
import WeekView from './WeekView';
import MonthView from './MonthView';

// === CONFIG ===
const STATUS_CONFIG = {
  Open: { color: '#008FD6', count: 10 },
  'Pending for Dispatch': { color: '#EEA61F', count: 10 },
  Dispatched: { color: '#E2CC3B', count: 0 },
  'Pending for Payment': { color: '#1E9E9E', count: 0 },
  'Pending Escort Assignment': { color: '#00CFE8', count: 0 },
  'Pending Details from Vendor': { color: '#C33BA8', count: 0 },
  'Pending for Service Receipt': { color: '#6D27B3', count: 0 },
  'Pending Confirmation': { color: '#8D6E63', count: 0 },
  Completed: { color: '#0AAB2F', count: 0 },
  Cancelled: { color: '#B40909', count: 0 },
} as const;

const SERVICE_TYPES = [
  'Medical Transport (1-way)',
  'Medical Transport (2-way)',
  'Medical Transport (3-way)',
] as const;

const SERVICE_TYPE_TO_TRIP_PATTERN: Record<string, RegExp> = {
  'Medical Transport (1-way)': /^Trip 1\/1$/,
  'Medical Transport (2-way)': /^Trip [1-2]\/2$/,
  'Medical Transport (3-way)': /^Trip [1-3]\/3$/,
};

type ViewMode = 'day' | 'week' | 'month';
type StatusKey = keyof typeof STATUS_CONFIG;

// === EVENT TYPE (Shared across all views) ===
export interface Event {
  id: string;
  time: string;
  caseId: string;
  trip: string;
  route: string;
  patient?: string; // Optional (not in MonthView)
  tags: string[];
  status: StatusKey;
  date: string; // "2025-11-04"
}

// === SAMPLE DATA (Nov 4, 2025) ===
const SAMPLE_EVENTS: Event[] = [
  {
    id: '1',
    time: '08:09',
    caseId: '#20251104006',
    trip: 'Trip 3/3',
    route: 'SGH to SNEC',
    patient: 'Patient F 803',
    tags: ['Wheelchair'],
    status: 'Cancelled',
    date: '2025-11-04',
  },
  {
    id: '2',
    time: '10:39',
    caseId: '#20251104005',
    trip: 'Trip 1/2',
    route: 'TTSH to IMH',
    patient: 'Patient E 264',
    tags: ['Stretcher', 'Escort: Lee'],
    status: 'Pending for Payment',
    date: '2025-11-04',
  },
  {
    id: '3',
    time: '11:03',
    caseId: '#20251104003',
    trip: 'Trip 1/1',
    route: 'SNEC to NUH',
    patient: 'Patient C 804',
    tags: ['IV Drip Stand'],
    status: 'Pending Escort Assignment',
    date: '2025-11-04',
  },
  {
    id: '4',
    time: '11:53',
    caseId: '#20251104004',
    trip: 'Trip 1/3',
    route: 'Gleneagles to Mt A',
    patient: 'Patient D 565',
    tags: [],
    status: 'Pending Details from Vendor',
    date: '2025-11-04',
  },
  {
    id: '5',
    time: '12:09',
    caseId: '#20251104002',
    trip: 'Trip 1/2',
    route: 'NHCS to NUH',
    patient: 'Patient B 492',
    tags: ['IV Drip Stand'],
    status: 'Cancelled',
    date: '2025-11-04',
  },
  {
    id: '6',
    time: '16:48',
    caseId: '#20251104001',
    trip: 'Trip 1/1',
    route: 'TTSH to KKH',
    patient: 'Patient A 735',
    tags: ['Stretcher'],
    status: 'Open',
    date: '2025-11-04',
  },
];

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 10, 4)); // Nov 4, 2025
  const [activeTab, setActiveTab] = useState<ViewMode>('day');

  // Filters
  const [selectedStatuses, setSelectedStatuses] = useState<Set<StatusKey>>(
    new Set(Object.keys(STATUS_CONFIG) as StatusKey[]),
  );
  const [selectedTypes, setSelectedTypes] = useState<Set<string>>(
    new Set(SERVICE_TYPES),
  );

  // === FILTER LOGIC ===
  const filteredEvents = useMemo(() => {
    return SAMPLE_EVENTS.filter((event) => {
      const matchesStatus = selectedStatuses.size === 0 || selectedStatuses.has(event.status);

      const matchesServiceType =
        selectedTypes.size === 0 ||
        Array.from(selectedTypes).some((type) => {
          const pattern = SERVICE_TYPE_TO_TRIP_PATTERN[type];
          return pattern?.test(event.trip) ?? false;
        });

      return matchesStatus && matchesServiceType;
    });
  }, [selectedStatuses, selectedTypes]);

  const totalFilters = selectedStatuses.size + selectedTypes.size;

  // === HANDLERS ===
  const toggleStatus = (status: StatusKey) => {
    setSelectedStatuses((prev) => {
      const next = new Set(prev);
      next.has(status) ? next.delete(status) : next.add(status);
      return next;
    });
  };

  const toggleType = (type: string) => {
    setSelectedTypes((prev) => {
      const next = new Set(prev);
      next.has(type) ? next.delete(type) : next.add(type);
      return next;
    });
  };

  const clearFilters = () => {
    setSelectedStatuses(new Set());
    setSelectedTypes(new Set());
  };

  const goPrev = () =>
    setCurrentDate((prev) =>
      subDays(prev, activeTab === 'day' ? 1 : activeTab === 'week' ? 7 : 0),
    );

  const goNext = () =>
    setCurrentDate((prev) =>
      addDays(prev, activeTab === 'day' ? 1 : activeTab === 'week' ? 7 : 0),
    );

  return (
    <>
      <FunctionalHeader title="Calendar" />

      <div className='flex-1 flex w-full overflow-auto'>
 
          {/* Sidebar Filters */}
          <aside className="w-64 bg-white border-r border-[#2160AD]/10 p-4 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-medium text-[#2160AD]">
                Filters {totalFilters > 0 && `(${totalFilters})`}
              </h3>
              {totalFilters > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-[#2160AD] hover:bg-[#2160AD]/10 px-2 h-6 rounded-md transition-colors"
                >
                  Clear All
                </button>
              )}
            </div>

            <div className="space-y-6 overflow-y-auto flex-1">
              {/* Status Filter */}
              <section>
                <h4 className="text-sm text-gray-600 mb-3">
                  Status ({selectedStatuses.size})
                </h4>
                <div className="space-y-2">
                  {Object.entries(STATUS_CONFIG).map(([status, { color }]) => (
                    <label
                      key={status}
                      className="flex items-center space-x-2 cursor-pointer select-none"
                    >
                      <button
                        type="button"
                        onClick={() => toggleStatus(status as StatusKey)}
                        className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${
                          selectedStatuses.has(status as StatusKey)
                            ? 'bg-[#2160AD] border-[#2160AD]'
                            : 'border-[#2160AD]/30'
                        }`}
                        aria-label={`Toggle ${status}`}
                      >
                        {selectedStatuses.has(status as StatusKey) && (
                          <Check className="w-3 h-3 text-white" />
                        )}
                      </button>
                      <div
                        className="w-3 h-3 rounded-full border"
                        style={{ backgroundColor: color, borderColor: color }}
                      />
                      <span className="text-sm flex-1">{status}</span>
                    </label>
                  ))}
                </div>
              </section>

              {/* Service Type Filter */}
              <section>
                <h4 className="text-sm text-gray-600 mb-3">
                  Service Type ({selectedTypes.size})
                </h4>
                <div className="space-y-2">
                  {SERVICE_TYPES.map((type) => (
                    <label
                      key={type}
                      className="flex items-center space-x-2 cursor-pointer select-none"
                    >
                      <button
                        type="button"
                        onClick={() => toggleType(type)}
                        className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${
                          selectedTypes.has(type)
                            ? 'bg-[#2160AD] border-[#2160AD]'
                            : 'border-[#2160AD]/30'
                        }`}
                        aria-label={`Toggle ${type}`}
                      >
                        {selectedTypes.has(type) && (
                          <Check className="w-3 h-3 text-white" />
                        )}
                      </button>
                      <span className="text-sm">{type}</span>
                    </label>
                  ))}
                </div>
              </section>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 flex flex-col">
            {/* View Controls */}
            <header className="border-b border-gray-200 px-6 py-3 bg-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* View Tabs */}
                  <div className="flex gap-1">
                    {(['Day', 'Week', 'Month'] as const).map((mode) => {
                      const key = mode.toLowerCase() as ViewMode;
                      const isActive = activeTab === key;
                      return (
                        <button
                          key={mode}
                          type="button"
                          onClick={() => setActiveTab(key)}
                          className={`h-8 px-3 rounded-md text-sm font-medium transition-all ${
                            isActive
                              ? 'bg-[#2160AD] text-white'
                              : 'border border-[#2160AD]/20 text-[#2160AD] hover:bg-[#2160AD]/10'
                          }`}
                        >
                          {mode}
                        </button>
                      );
                    })}
                  </div>

                  {/* Date Navigation */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={goPrev}
                      className="p-2 h-8 w-8 text-[#2160AD] hover:bg-[#2160AD]/10 rounded-md transition-colors"
                      aria-label="Previous"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      className="flex items-center gap-2 h-9 px-4 py-2 rounded-md text-[#2160AD] min-w-[180px] hover:bg-[#2160AD]/10 text-sm font-medium transition-colors"
                    >
                      <Calendar className="w-4 h-4" />
                      {format(currentDate, 'EEEE, MMMM d, yyyy')}
                    </button>

                    <button
                      type="button"
                      onClick={goNext}
                      className="p-2 h-8 w-8 text-[#2160AD] hover:bg-[#2160AD]/10 rounded-md transition-colors"
                      aria-label="Next"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </header>

            {/* View Content */}
            <section className="flex-1 overflow-hidden bg-white">
              {activeTab === 'day' && (
                <DayView date={currentDate} events={filteredEvents} />
              )}
              {activeTab === 'week' && (
                <WeekView date={currentDate} events={filteredEvents} />
              )}
              {activeTab === 'month' && (
                <MonthView date={currentDate} events={filteredEvents} />
              )}
            </section>
          </main> 

      </div>
    </>
  );
}