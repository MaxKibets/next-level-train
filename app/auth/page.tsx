import { FC } from "react";

import { AUTH_MODE } from "@/constants/auth";
import AuthForm from "@/components/features/AuthForm";

const AuthPage: FC<{
  searchParams: {
    mode: (typeof AUTH_MODE)[keyof typeof AUTH_MODE];
  };
}> = ({ searchParams: { mode } }) => {
  return <AuthForm mode={mode} />;
};

export default AuthPage;
