import React from "react";

import AuthForm from "@/components/auth/form";
import { AuthFormProps } from "@/components/auth/form/containers/AuthForm";

type AuthPageProps = {
  searchParams: AuthFormProps;
};

const AuthPage = ({ searchParams }: AuthPageProps) => {
  return <AuthForm mode={searchParams.mode} />;
};

export default AuthPage;
