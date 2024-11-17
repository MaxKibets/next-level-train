import { DAYS } from "@/constants/days";
import { DayName } from "@/types/global";

export function getCurrentDayName(): DayName {
  const date = new Date();
  const dayIndex = date.getDay();

  return DAYS[dayIndex === 0 ? 6 : dayIndex - 1];
}
