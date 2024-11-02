import { redirect } from "next/navigation";

import { verifyAuth } from "@/lib/session";
import HomePageContent from "@/components/pages/HomePage";
import { DASHBOARD_URL } from "@/constants/routes";

export default async function Home() {
  const { user } = await verifyAuth();

  if (user) {
    redirect(DASHBOARD_URL);
  }

  return <HomePageContent />;
}
