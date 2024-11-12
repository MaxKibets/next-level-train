import { FormErrors } from "@/types/form";
import { DayFormErrors } from "./types";

export const prepareErrors = (errors: FormErrors) => {
  return Object.entries(errors).reduce((acc, [key, value]) => {
    const [day, id, field] = key.split(":");

    if (!acc[day]) {
      acc[day] = {};
    }

    if (!acc[day][id]) {
      acc[day][id] = {};
    }

    acc[day][id][field] = value;

    return acc;
  }, {} as DayFormErrors);
};
