import bookedDatesData from "@/data/booked-dates.json";

export interface BookedDate {
  date: string;
  label: string;
}

/**
 * Returns all booked dates.
 * In v2 this will fetch from Supabase or Google Calendar.
 */
export function getBookedDates(): BookedDate[] {
  return bookedDatesData.bookedDates;
}

export function isDateBooked(dateStr: string): boolean {
  return bookedDatesData.bookedDates.some((d) => d.date === dateStr);
}

export function getBookedDateLabel(dateStr: string): string | undefined {
  return bookedDatesData.bookedDates.find((d) => d.date === dateStr)?.label;
}
