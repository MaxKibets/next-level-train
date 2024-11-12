"use server";

import { redirect } from "next/navigation";

import { createUser, getUserByEmail } from "@/lib/db/user";
import { hashUserPassword, verifyPassword } from "@/utils/hashPassword";
import { createAuthSession } from "@/lib/session";
import { FormState } from "@/types/form";
import { DASHBOARD_URL } from "@/constants/routes";
import { AUTH_MODE } from "@/constants/auth";

import { Mode } from "./types";
import { AUTH_FORM_SCHEMA, ERRORS_TEXT, FIELD } from "./constants";

const login = async (prevState: FormState | undefined, formData: FormData) => {
  const email = formData.get(FIELD.EMAIL) as string;
  const password = formData.get(FIELD.PASSWORD) as string;

  const validatedFields = AUTH_FORM_SCHEMA.omit({ [FIELD.NAME]: true }).safeParse({
    email,
    password,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const existingUser = getUserByEmail(email);

  if (!existingUser) {
    return { errors: { [FIELD.EMAIL]: [ERRORS_TEXT.NOT_FOUND_EMAIL] } };
  }

  const isValidPassword = verifyPassword(existingUser.password, password);

  if (!isValidPassword) {
    return { errors: { [FIELD.PASSWORD]: [ERRORS_TEXT.INCORRECT_PASS] } };
  }

  await createAuthSession(existingUser.id);

  redirect(DASHBOARD_URL);
};

const register = async (prevState: FormState | undefined, formData: FormData) => {
  const name = formData.get(FIELD.NAME) as string;
  const email = formData.get(FIELD.EMAIL) as string;
  const password = formData.get(FIELD.PASSWORD) as string;

  const validatedFields = AUTH_FORM_SCHEMA.safeParse({
    name,
    email,
    password,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const hashedPassword = hashUserPassword(password);

  try {
    const userId = createUser({ email, password: hashedPassword });

    await createAuthSession(userId.toString());

    redirect(DASHBOARD_URL);
  } catch (error) {
    if ((error as { code: string }).code === "SQLITE_CONSTRAINT_UNIQUE") {
      return { errors: { [FIELD.EMAIL]: [ERRORS_TEXT.EMAIL_IN_USE] } };
    }

    throw error;
  }
};

export const auth = (
  mode: Mode,
  prevState: FormState | undefined,
  formData: FormData,
) => {
  if (mode === AUTH_MODE.LOGIN) {
    return login(prevState, formData);
  }

  return register(prevState, formData);
};
