import { AUTH_MODE } from "@/constants/auth";

export type Mode = (typeof AUTH_MODE)[keyof typeof AUTH_MODE];

export type AuthFormProps = {
  mode: (typeof AUTH_MODE)[keyof typeof AUTH_MODE];
};

export type AuthFormState = {
  errors: AuthFormErrors;
};

export type AuthFormErrors = {
  [key: string]: string | undefined;
  email?: string;
  password?: string;
  name?: string;
};

export type AuthFormLayoutProps = {
  authAction: (formData: FormData) => void;
  errors: AuthFormErrors | undefined;
} & AuthFormProps;
