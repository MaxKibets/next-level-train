"use server";

import { redirect } from "next/navigation";

import { FormState } from "@/types/form";
import { DASHBOARD_URL } from "@/constants/routes";

import { CREATE_PLAN_SCHEMA } from "./constants";
import { DayFormErrors } from "./types";
import { prepareErrors } from "./utils";

export const createPlanAction = async (
  prevState: FormState<DayFormErrors>,
  formData: FormData,
) => {
  const parsedData = CREATE_PLAN_SCHEMA.safeParse(
    Object.fromEntries(
      Array.from(formData.entries()).filter(([key]) => !key.startsWith("$")),
    ),
  );

  if (!parsedData.success) {
    return {
      errors: prepareErrors(parsedData.error.flatten().fieldErrors),
    };
  }

  redirect(DASHBOARD_URL);
};
