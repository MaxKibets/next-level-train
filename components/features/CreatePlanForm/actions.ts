"use server";

import { redirect } from "next/navigation";

import { FormState } from "@/types/form";
import { DASHBOARD_URL, HOME_URL } from "@/constants/routes";
import { createPlan } from "@/lib/db/plan";
import { verifyAuth } from "@/lib/session";

import { CREATE_PLAN_SCHEMA } from "./constants";
import { DayFormErrors } from "./types";
import { prepareData, prepareErrors } from "./utils";

export const createPlanAction = async (
  prevState: FormState<DayFormErrors>,
  formData: FormData,
): Promise<FormState<DayFormErrors>> => {
  const parsedData = CREATE_PLAN_SCHEMA.safeParse(
    Object.fromEntries(
      Array.from(formData.entries()).filter(([key]) => !key.startsWith("$")),
    ),
  );

  if (!parsedData.success) {
    const { plan_name, ...selectErrors } = parsedData.error.flatten().fieldErrors;

    return {
      errors: {
        plan_name,
        selectErrors: prepareErrors(selectErrors),
      },
    };
  }

  const { user } = await verifyAuth();

  if (!user) {
    redirect(HOME_URL);
  }

  const preparedData = prepareData(parsedData.data);

  try {
    createPlan(user.id, preparedData);
  } catch (error) {
    throw error;
  }

  redirect(DASHBOARD_URL);
};
