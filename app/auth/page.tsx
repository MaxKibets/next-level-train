import React from "react";

import AuthForm from "@/components/authForm";
import { AuthFormProps } from "@/components/authForm/containers/AuthForm";

type AuthPageProps = {
  searchParams: AuthFormProps;
};

const AuthPage = ({ searchParams }: AuthPageProps) => {
  return <AuthForm mode={searchParams.mode} />;
};

export default AuthPage;
