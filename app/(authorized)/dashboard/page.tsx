import React from "react";
import { redirect } from "next/navigation";

import { verifyAuth } from "@/lib/session";
import { HOME_URL } from "@/constants/routes";

const DashboardPage = async () => {
  const { user } = await verifyAuth();

  if (!user) {
    redirect(HOME_URL);
  }

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default DashboardPage;
