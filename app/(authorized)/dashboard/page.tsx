import React from "react";
import { redirect } from "next/navigation";

import { verifyAuth } from "@/lib/session";
import { HOME_URL } from "@/constants/routes";
import DashboardPageContent from "@/components/pages/DashboardPage";

const DashboardPage = async () => {
  // TODO move it to middleware.
  // verifyAuth() updates the session cookie.
  // It cant be done in server comopnent!!!
  // Leads to error
  const { user } = await verifyAuth();

  if (!user) {
    redirect(HOME_URL);
  }

  return <DashboardPageContent />;
};

export default DashboardPage;
