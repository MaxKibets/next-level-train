"use server";

import { redirect } from "next/navigation";

import { createUser, getUserByEmail } from "@/db/user";

import { AuthFormErrors, AuthFormState } from "../containers/AuthForm";
import { hashUserPassword, verifyPassword } from "./hashPassword";
import { createAuthSession } from "./auth";

const validateName = (name: string) => {
  if (!name) {
    return "Name is required";
  }

  return "";
};

const validateEmail = (email: string) => {
  if (!email) {
    return "Email is required";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Email is invalid";
  }

  return "";
};

const validatePassword = (password: string) => {
  if (!password) {
    return "Password is required";
  }

  if (password && password.length < 6) {
    return "Password must be at least 6 characters";
  }

  return "";
};

const login = async (prevState: AuthFormState | undefined, formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const errors = {} as AuthFormErrors;

  errors.email = validateEmail(email);
  errors.password = validatePassword(password);

  if (Object.values(errors).filter(Boolean).length) {
    return { errors };
  }

  const existingUser = getUserByEmail(email);

  if (!existingUser) {
    return { errors: { email: "No user with that email address" } };
  }

  const isValidPassword = verifyPassword(existingUser.password, password);

  if (!isValidPassword) {
    return { errors: { password: "Incorrect password" } };
  }

  await createAuthSession(existingUser.id);

  redirect("/dashboard");
};

const register = async (prevState: AuthFormState | undefined, formData: FormData) => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const errors = {} as AuthFormErrors;

  errors.name = validateName(name);
  errors.email = validateEmail(email);
  errors.password = validatePassword(password);

  if (Object.values(errors).filter(Boolean).length) {
    return { errors };
  }

  const hashedPassword = hashUserPassword(password);

  try {
    const userId = createUser(email, hashedPassword);

    await createAuthSession(userId.toString());

    redirect("/dashboard");
  } catch (error) {
    if ((error as { code: string }).code === "SQLITE_CONSTRAINT_UNIQUE") {
      errors.email = "Email address already in use";

      return { errors };
    }

    throw error;
  }
};

export type AuthModeType = "login" | "register";

export const auth = (
  mode: AuthModeType,
  prevState: AuthFormState | undefined,
  formData: FormData,
) => {
  if (mode === "login") {
    return login(prevState, formData);
  }

  return register(prevState, formData);
};
