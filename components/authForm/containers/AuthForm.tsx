"use client";

import React from "react";
import { useFormState } from "react-dom";

import AuthFormLayout from "../components/AuthFormLayout";
import { auth, AuthModeType } from "../utils/authActions";

export type AuthFormProps = {
  mode: AuthModeType;
};

export type AuthFormState = {
  errors: AuthFormErrors;
};

export type AuthFormErrors = {
  email?: string;
  password?: string;
  name?: string;
};

const AuthForm = ({ mode = "login" }: AuthFormProps) => {
  const [formState, authAction] = useFormState(
    (state: AuthFormState | undefined, formData: FormData) => auth(mode, state, formData),
    { errors: {} },
  );

  return (
    <AuthFormLayout mode={mode} authAction={authAction} errors={formState?.errors} />
  );
};

export default AuthForm;
