import React, { ReactNode } from "react";

import Header from "@/components/header";

const AuthorizedLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default AuthorizedLayout;
