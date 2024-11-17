import { DayPlan } from "@/types/exercises";
import { DayName } from "@/types/global";

export type PlanWidgetProps = {
  planData: DayPlan[];
  currentDayName: DayName;
};
