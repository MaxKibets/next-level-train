"use client";

import { FC } from "react";
import { useFormState } from "react-dom";

import { Exercises } from "@/types/exercises";

import { createPlanAction } from "./actions";
import CreatePlanFormLayout from "./CreatePlanFormLayout";

const CreatePlanFormInner: FC<Exercises> = (props) => {
  const [state, formAction] = useFormState(createPlanAction, { errors: {} });

  return <CreatePlanFormLayout errors={state.errors} action={formAction} {...props} />;
};

export default CreatePlanFormInner;
