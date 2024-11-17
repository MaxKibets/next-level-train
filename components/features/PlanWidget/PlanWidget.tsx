import { redirect } from "next/navigation";

import { getActivePlan } from "@/lib/db/plan";
import { verifyAuth } from "@/lib/session";
import { HOME_URL } from "@/constants/routes";
import { getCurrentDayName } from "@/utils/getCurrentDayName";

import PlanWidgetLayout from "./PlanWidgetLayout";

const PlanWidget = async () => {
  const { user } = await verifyAuth();

  if (!user) redirect(HOME_URL);

  const currentPlanData = getActivePlan(user.id);
  const currentDayName = getCurrentDayName();

  return <PlanWidgetLayout planData={currentPlanData} currentDayName={currentDayName} />;
};

export default PlanWidget;
