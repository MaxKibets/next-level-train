"use client";

import { FC } from "react";
import { useFormState } from "react-dom";

import { AUTH_MODE } from "@/constants/auth";

import AuthFormLayout from "./AuthFormLayout";
import { auth } from "./authForm.actions";
import { AuthFormProps, AuthFormState } from "./authForm.types";

const AuthForm: FC<AuthFormProps> = ({ mode = AUTH_MODE.LOGIN }) => {
  const [formState, authAction] = useFormState(
    (state: AuthFormState, formData: FormData) => auth(mode, state, formData),
    { errors: {} },
  );

  return (
    <AuthFormLayout mode={mode} authAction={authAction} errors={formState?.errors} />
  );
};

export default AuthForm;
