import { getAllExercises } from "@/lib/db/exercises";

import CreatePlanFormInner from "./CreatePlanFormInner";

const CreatePlanForm = () => {
  const { categories, levels } = getAllExercises();

  return <CreatePlanFormInner categories={categories} levels={levels} />;
};

export default CreatePlanForm;
