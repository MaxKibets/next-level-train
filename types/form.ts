export type FormErrors = {
  [key: string]: string[] | undefined;
};

export type FormState<T = FormErrors> = {
  errors: T;
};
