import React from "react";
import { redirect } from "next/navigation";

import { verifyAuth } from "@/components/auth/utils/session";

const DashboardPage = async () => {
  const { user } = await verifyAuth();

  if (!user) {
    redirect("/");
  }

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default DashboardPage;
