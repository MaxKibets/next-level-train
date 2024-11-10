"use client";

import { FC } from "react";

import { AUTH_MODE } from "@/constants/auth";

import AuthFormLayout from "./AuthFormLayout";
import { AuthFormProps } from "./types";
import useAuthForm from "./hooks";

const AuthForm: FC<AuthFormProps> = ({ mode = AUTH_MODE.LOGIN }) => {
  const { formState, authAction } = useAuthForm(mode);

  return (
    <AuthFormLayout mode={mode} authAction={authAction} errors={formState?.errors} />
  );
};

export default AuthForm;
