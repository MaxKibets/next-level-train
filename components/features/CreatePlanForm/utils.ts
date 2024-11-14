import { FormErrors } from "@/types/form";
import { PrepareDataProps, SelectErrors } from "./types";

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
  }, {} as SelectErrors);
};

export const prepareData = (data: PrepareDataProps) => {
  const { plan_name, ...days } = data;
  const planName = plan_name.split(" ").join("_").toLowerCase();
  const result: Record<string, string[][]> = {};

  for (const [key, value] of Object.entries(days)) {
    const [day, id] = key.split(":");
    const dayFormated = day.toLowerCase();

    if (!result[dayFormated]) {
      result[dayFormated] = [];
    }

    let dayEntry = result[dayFormated].find((entry) => entry[0] === id);

    if (!dayEntry) {
      dayEntry = [id];
      result[dayFormated].push(dayEntry);
    }

    dayEntry.push(value as string);
  }

  return Object.entries(result).map(([day, entries]) => [
    planName,
    day,
    1,
    JSON.stringify(entries.map((entry) => entry.slice(1))),
  ]);
};
