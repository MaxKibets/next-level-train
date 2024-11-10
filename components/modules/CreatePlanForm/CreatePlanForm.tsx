import { createPlanAction } from "./createPlanForm.actions";
import CreatePlanFormLayout from "./CreatePlanFormLayout";

const CreatePlanForm = () => {
  //TODO implement createPlanAction with validation

  return <CreatePlanFormLayout action={createPlanAction} />;
};

export default CreatePlanForm;
