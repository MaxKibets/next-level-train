import { AUTH_MODE } from "@/constants/auth";
import { FormErrors } from "@/types/form";

export type Mode = (typeof AUTH_MODE)[keyof typeof AUTH_MODE];

export type AuthFormProps = {
  mode: Mode;
};

export type AuthFormLayoutProps = {
  authAction: (formData: FormData) => void;
  errors: FormErrors | undefined;
} & AuthFormProps;
