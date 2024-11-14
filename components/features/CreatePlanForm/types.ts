import { Exercises } from "@/types/exercises";
import { FormErrors } from "@/types/form";

export type CreatePlanFormInnerProps = Exercises;

export type CreatePlanFormLayoutProps = Exercises & {
  action: (formData: FormData) => void;
  errors: DayFormErrors;
};

export type SelectErrors = {
  [day: string]: { [id: string]: FormErrors };
};

export type DayFormErrors = {
  plan_name?: string[] | undefined;
  selectErrors?: SelectErrors;
};

export type PrepareDataProps = Record<string, string>;
