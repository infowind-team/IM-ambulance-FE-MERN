'use client';
 
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  startOfWeek,
  endOfWeek,
  isSameMonth,
  isToday,
} from 'date-fns';

import type { Event } from "./index";
 
interface MonthViewProps {
  date: Date;
  events: Event[];
  statusColors: Record<string, string>;
}

export default function MonthView({ date, events, statusColors }: MonthViewProps) {
  const monthStart = startOfMonth(date);
  const monthEnd = endOfMonth(date);
  const calendarStart = startOfWeek(monthStart, { weekStartsOn: 0 });
  const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 0 });

  const days = eachDayOfInterval({ start: calendarStart, end: calendarEnd });

  const getEventsForDay = (day: Date): Event[] => {
    const dateStr = format(day, 'yyyy-MM-dd');
    return events.filter((e) => e.date === dateStr);
  };

  const renderEvents = (dayEvents: Event[]) => {
    const visible = dayEvents.slice(0, 5);
    const moreCount = dayEvents.length - visible.length;

    return (
      <div className="space-y-1">
        {visible.map((event) => (
          <div
            key={event.id}
            className="text-xs text-white cursor-pointer truncate px-2 py-1 rounded transition-colors hover:opacity-90"
            style={{
              fontSize: '11px',
              lineHeight: '1.2',
              backgroundColor: statusColors[event.status] || '#6B7280',
            }}
          >
            {event.caseId} • {event.time}
          </div>
        ))}
        {moreCount > 0 && (
          <div
            className="text-[#2160AD] cursor-pointer hover:underline px-1 py-0.5 rounded hover:bg-blue-50 transition-colors"
            style={{ fontSize: '11px', fontWeight: 500 }}
          >
            +{moreCount} more...
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white h-full overflow-auto">
      {/* Header */}
      <div className="grid grid-cols-7 border-b border-gray-300 bg-gray-100">
        {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map(
          (day) => (
            <div
              key={day}
              className="p-3 text-center text-gray-700 font-medium border-r border-gray-200 last:border-r-0 text-sm"
            >
              {day}
            </div>
          ),
        )}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7">
        {days.map((day, idx) => {
          const isCurrentMonth = isSameMonth(day, date);
          const isTodayDate = isToday(day);
          const dayEvents = getEventsForDay(day);

          return (
            <div
              key={idx}
              className={`
                border border-gray-200 min-h-32 p-2 cursor-pointer relative
                ${isCurrentMonth ? 'bg-white hover:header-bg-soft' : 'header-bg-soft text-gray-400'}
                ${isTodayDate ? 'ring-2 ring-[#2160AD] bg-blue-50' : ''}
                transition-colors
              `}
            >
              <div
                className={`mb-2 text-sm ${isTodayDate ? 'text-[#2160AD] font-semibold' : 'text-gray-700'}`}
                style={{ fontWeight: 500 }}
              >
                {format(day, 'd')}
              </div>
              {isCurrentMonth && renderEvents(dayEvents)}
            </div>
          );
        })}
      </div>
    </div>
  );
}