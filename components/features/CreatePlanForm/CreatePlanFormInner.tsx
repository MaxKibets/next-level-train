"use client";

import { FC } from "react";
import { useFormState } from "react-dom";

import { createPlanAction } from "./actions";
import CreatePlanFormLayout from "./CreatePlanFormLayout";
import { CreatePlanFormInnerProps } from "./types";

const CreatePlanFormInner: FC<CreatePlanFormInnerProps> = (props) => {
  const [state, formAction] = useFormState(createPlanAction, { errors: {} });

  return <CreatePlanFormLayout errors={state.errors} action={formAction} {...props} />;
};

export default CreatePlanFormInner;
