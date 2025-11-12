"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { cn } from "./utils";
import "react-day-picker/style.css";

export function DatePicker({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        ...classNames,
        caption: "flex justify-center items-center h-10",
        caption_label: "text-sm font-medium",
        day: "h-8 w-8 rounded-md text-center text-base items-center justify-center hover:bg-accent hover:text-accent-foreground",
        day_button: "h-8 w-8",
        week: "flex w-full mt-2",
        day_selected: "bg-black! text-white rounded-full text-sm",
        selected: "bg-black! text-white hover:text-white rounded-full text-sm",
        today: "bg-accent text-black rounded-full font-medium",
        button_next:
          "size-7 rounded-md text-sm font-medium border hover:bg-accent flex items-center justify-center absolute right-1 top-1 z-10 cursor-pointer",
        button_previous:
          "size-7 rounded-md text-sm font-medium border hover:bg-accent flex items-center justify-center absolute left-1 top-1 z-10 cursor-pointer",
        chevron: "size-4",
        month_caption:
          "flex justify-center pt-1 relative items-center w-full pb-4",
        months: "flex flex-col gap-0 relative",
        nav: "w-full h-auto",
        week_number:
          "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
        weekdays: "flex w-full",
        weekday:
          "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
      }}
      {...props}
    />
  );
}
