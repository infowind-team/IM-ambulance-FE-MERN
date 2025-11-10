"use client";

import React from "react";
import {
  format,
  eachHourOfInterval,
  startOfDay,
  endOfDay,
} from 'date-fns';

const statusColors: Record<string, string> = {
  Open: "#008FD6",
  "Pending for Dispatch": "#EEA61F",
  Dispatched: "#E2CC3B",
  "Pending for Payment": "#1E9E9E",
  "Pending Escort Assignment": "#00CFE8",
  "Pending Details from Vendor": "#C33BA8",
  "Pending for Service Receipt": "#6D27B3",
  "Pending Confirmation": "#8D6E63",
  Completed: "#0AAB2F",
  Cancelled: "#B40909",
};

interface Event {
  id: string;
  time: string; // "06:39"
  caseId: string;
  trip: string;
  route: string;
  patient: string;
  tags: string[];
  status: string;
  date: string; // "2025-11-04"
}

interface DayViewProps {
  date: Date;
  events: Event[];
}

export default function DayView({ date, events }: DayViewProps) {
  const currentDateStr = format(date, "yyyy-MM-dd");
  const dayEvents = events.filter((e) => e.date === currentDateStr);
  const totalCases = dayEvents.length;

  // Generate 24 hours: 00:00 to 23:00
  const hours = eachHourOfInterval({
    start: startOfDay(date),
    end: endOfDay(date),
  });
  
  const getEventsForHour = (hour: number): Event[] => {
    return dayEvents.filter((e) => {
      const [eventHour] = e.time.split(":").map(Number);
      return eventHour === hour;
    });
  };

  return (
    <div className="h-full overflow-auto p-6">
      {/* Header */}
      <div className="text-center mb-6">
        <h3 className="text-[#2160AD] mb-2 text-2xl font-semibold">
          Daily Timeline
        </h3>
        <p className="text-gray-600 text-base">
          {format(date, "EEEE, MMMM d, yyyy")}
        </p>
        <p className="text-gray-500 text-sm mt-1">
          {totalCases} case{totalCases !== 1 ? 's' : ''} scheduled
        </p>
      </div>

      {/* Timeline */}
      <div className="space-y-0">
        {hours.map((hourDate, hourIdx) => {
          const hour = hourDate.getHours() + 1;
          const hourEvents = getEventsForHour(hour);
          return (
            <div
              key={hourIdx}
              className="grid grid-cols-[100px_1fr] border-b border-gray-100 min-h-20"
            >
              {/* Time Label */}
              <div className="p-3 text-right text-[#2160AD] bg-[#2160AD]/5 border-r border-[#2160AD]/20 flex items-center justify-end text-base font-medium">
              {hour == 24 ? '00' : hour.toString().padStart(2, '0')}:00
              </div>

              {/* Events */}
              <div className="p-2 relative hover:bg-gray-50 transition-colors">
                <div className="flex flex-wrap gap-2">
                  {hourEvents.map((event) => (
                    <div
                      key={event.id}
                      className="bg-white border rounded-lg p-3 hover:shadow-lg transition-all cursor-pointer min-w-[200px] max-w-[300px] hover-lift"
                      style={{
                        border: `1px solid ${
                          statusColors[event.status] || "#ccc"
                        }`,
                        borderLeftWidth: "4px",
                      }}
                    >
                      {/* Time Badge */}
                      <div className="flex items-start justify-between mb-2">
                        <span className="text-[#2160AD] text-xs font-medium">
                          {event.time}
                        </span>
                      </div>

                      {/* Details */}
                      <div className="mb-2">
                        <h4 className="text-gray-900 truncate text-sm font-medium">
                          {event.caseId} • {event.trip}
                        </h4>
                        <p className="text-gray-600 truncate text-xs">
                          {event.route}
                        </p>
                        <p className="text-gray-500 truncate text-[11px]">
                          {event.patient}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-2">
                        {event.tags.map((tag, j) => (
                          <span
                            key={j}
                            className="px-1 py-0.5 bg-[#2160AD]/10 text-[#2160AD] rounded text-[9px] font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Status Pill */}
                      <div
                        className="mt-2 px-2 py-1 rounded text-center text-white text-[10px] font-medium"
                        style={{
                          backgroundColor: statusColors[event.status] || "#999",
                        }}
                      >
                        {event.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
