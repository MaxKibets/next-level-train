import { redirect } from "next/navigation";

import { verifyAuth } from "@/lib/session";
import HomePageContent from "@/components/pages/HomePage";
import { DASHBOARD_URL } from "@/constants/routes";

export default async function Home() {
  // TODO move it to middleware.
  // verifyAuth() updates the session cookie.
  // It cant be done in server comopnent!!!
  // Leads to error
  const { user } = await verifyAuth();

  if (user) {
    redirect(DASHBOARD_URL);
  }

  return <HomePageContent />;
}
