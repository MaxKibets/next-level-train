import React, { ReactNode } from "react";

import Header from "@/components/modules/Header";

const AuthorizedLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default AuthorizedLayout;
