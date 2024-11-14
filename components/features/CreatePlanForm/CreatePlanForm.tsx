import { getAllExercises } from "@/lib/db/exercises";

import CreatePlanFormInner from "./CreatePlanFormInner";

const CreatePlanForm = () => {
  const data = getAllExercises();

  return <CreatePlanFormInner {...data} />;
};

export default CreatePlanForm;
