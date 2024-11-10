import React from "react";

import AuthPageContent from "@/components/pages/AuthPage";
import { AuthPageProps } from "@/components/pages/AuthPage/types";

const AuthPage = (props: AuthPageProps) => {
  return <AuthPageContent {...props} />;
};

export default AuthPage;
