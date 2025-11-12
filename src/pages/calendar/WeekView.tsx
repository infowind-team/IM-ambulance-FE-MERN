'use client';

import {
  format,
  startOfWeek,
  addDays,
  eachHourOfInterval,
  startOfDay,
  endOfDay,
  isToday,
} from 'date-fns';
import type { Event } from "./index";

interface WeekViewProps {
  date: Date;
  events: Event[];
  statusColors: Record<string, string>;
}

export default function WeekView({ date, events, statusColors }: WeekViewProps) {
  const weekStart = startOfWeek(date, { weekStartsOn: 0 }); // Sunday
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));

  // 00:00 – 23:00 (24 rows)
  const hours = eachHourOfInterval({
    start: startOfDay(weekDays[0]),
    end: endOfDay(weekDays[0]),
  });

  const getEventsForSlot = (day: Date, hour: number): Event[] => {
    const dateStr = format(day, 'yyyy-MM-dd');
    return events.filter((e) => {
      const [eventHour] = e.time.split(':').map(Number);
      return e.date === dateStr && eventHour === hour;
    });
  };

  return (
    <div className="bg-white h-full overflow-auto">
      {/* Header */}
      <div className="grid grid-cols-8 border-b border-[#2160AD]/20 bg-[#2160AD]/5 sticky top-0 z-10">
        <div className="p-3 text-gray-600 text-base font-medium">Time</div>
        {weekDays.map((day, idx) => {
          const isTodayDate = isToday(day);
          return (
            <div
              key={idx}
              className={`p-3 text-center border-l border-[#2160AD]/20 ${
                isTodayDate ? 'bg-[#2160AD]/10 text-[#2160AD]' : 'text-gray-700'
              }`}
            >
              <div className="text-base font-medium">{format(day, 'EEE')}</div>
              <div
                className={`text-sm ${isTodayDate ? 'text-[#2160AD]' : 'text-gray-500'}`}
              >
                {format(day, 'd')}
              </div>
            </div>
          );
        })}
      </div>

      {/* Timeline */}
      <div className="relative">
        {hours.map((hourDate, hourIdx) => {
          const hour = hourDate.getHours() + 1;
          return (
            <div key={hourIdx} className="grid grid-cols-8 border-b border-gray-100 min-h-20">
              {/* Time Label */}
              <div className="p-3 text-right text-gray-500 bg-gray-50 border-r border-[#2160AD]/20 text-sm font-medium">
                {hour == 24 ? '00' : hour.toString().padStart(2, '0')}:00
              </div>

              {/* Day Columns */}
              {weekDays.map((day, dayIdx) => {
                const dayEvents = getEventsForSlot(day, hour);
                return (
                  <div
                    key={dayIdx}
                    className="border-l border-gray-100 p-1 relative hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <div className="space-y-1">
                      {dayEvents.map((event) => (
                        <div
                          key={event.id}
                          className="p-1 mb-1 rounded cursor-pointer text-white hover:opacity-90 transition-opacity"
                          style={{
                            backgroundColor: statusColors[event.status] || '#6B7280',
                          }}
                        >
                          <div className="text-xs font-medium truncate">
                            {event.time} • {event.caseId}
                          </div>
                          <div className="text-[10px] truncate">{event.trip}: {event.route}</div>
                          {event.tags.map((tag, i) => (
                            <div key={i} className="text-[9px] opacity-80 truncate">
                              {tag}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}