"use client";

import { useFormState } from "react-dom";
import { createPlanAction } from "./actions";
import CreatePlanFormLayout from "./CreatePlanFormLayout";

const CreatePlanForm = () => {
  const [state, formAction] = useFormState(createPlanAction, { errors: {} });

  // TODO from server
  const categoriesInitial = ["cat_1", "cat_2", "cat_3"];
  const levels = ["1", "2", "3", "4", "5"];

  return (
    <CreatePlanFormLayout
      errors={state.errors}
      action={formAction}
      categories={categoriesInitial}
      levels={levels}
    />
  );
};

export default CreatePlanForm;
