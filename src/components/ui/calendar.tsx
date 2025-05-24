import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium text-gold", // Golden caption text
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-90"
        ),
        nav_button_previous: "absolute left-1 hover:bg-gold/50",
        nav_button_next: "absolute right-1 hover:bg-gold/50",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-gold rounded-md w-9 font-normal text-[0.8rem]", // Golden header text
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal text-gold hover:text-white rounded-xs hover:bg-burgundy/90" // Golden day text with hover effect
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-burgundy text-white hover:bg-burgundy/90 focus:bg-burgundy focus:text-cream", // Using your burgundy color for selected
        day_today: "bg-amber-200 text-amber-900 border border-amber-400", // Golden today highlight
        day_outside:
          "day-outside text-amber-300 opacity-50 aria-selected:bg-accent/50 aria-selected:text-amber-300 aria-selected:opacity-30", // Lighter golden for outside days
        day_disabled: "text-gray-300 opacity-50", // Disabled days
        day_range_middle:
          "aria-selected:bg-amber-800",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ..._props }) => <ChevronLeft className="h-4 w-4 text-amber-600" />, // Golden arrows
        IconRight: ({ ..._props }) => <ChevronRight className="h-4 w-4 text-amber-600" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
