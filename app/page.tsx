import { redirect } from "next/navigation";

import { verifyAuth } from "@/components/auth/utils/session";
import HomePageLayout from "@/components/homePage";

export default async function Home() {
  const { user } = await verifyAuth();

  if (user) {
    redirect("/dashboard");
  }

  return <HomePageLayout />;
}
