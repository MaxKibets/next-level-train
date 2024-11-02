"use server";

import { redirect } from "next/navigation";

import { destroySession } from "@/lib/session";
import { HOME_URL } from "@/constants/routes";

export const logoutAction = async () => {
  await destroySession();

  redirect(HOME_URL);
};
