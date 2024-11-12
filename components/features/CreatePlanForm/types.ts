import { FormErrors } from "@/types/form";

export type CreatePlanFormLayoutProps = {
  action: (formData: FormData) => void;
  categories: string[];
  levels: string[];
  errors: DayFormErrors;
};

export type DayFormErrors = {
  [day: string]: {
    [id: string]: FormErrors;
  };
};
