import { useFormState } from "react-dom";
import { auth } from "./actions";
import { Mode } from "./types";
import { FormState } from "@/types/form";

const useAuthForm = (mode: Mode) => {
  const [formState, authAction] = useFormState(
    (state: FormState, formData: FormData) => auth(mode, state, formData),
    { errors: {} },
  );

  return { formState, authAction };
};

export default useAuthForm;
