import { FC } from "react";

import AuthForm from "@/components/features/AuthForm";

import { AuthPageProps } from "./types";

const AuthPage: FC<AuthPageProps> = ({ searchParams }) => (
  <AuthForm mode={searchParams.mode} />
);

export default AuthPage;
