import { useFormState } from "react-dom";
import { auth } from "./actions";
import { AuthFormState, Mode } from "./types";

const useAuthForm = (mode: Mode) => {
  const [formState, authAction] = useFormState(
    (state: AuthFormState, formData: FormData) => auth(mode, state, formData),
    { errors: {} },
  );

  return { formState, authAction };
};

export default useAuthForm;
