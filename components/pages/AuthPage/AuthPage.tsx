import { FC } from "react";

import AuthForm from "@/components/modules/AuthForm";

import { AuthPageProps } from "./authPage.types";

const AuthPage: FC<AuthPageProps> = ({ searchParams }) => (
  <AuthForm mode={searchParams.mode} />
);

export default AuthPage;
