import { z } from "zod";

export const FIELD = {
  NAME: "name",
  EMAIL: "email",
  PASSWORD: "password",
};

export const ERRORS_TEXT = {
  // NAME
  NAME_LENGTH: "Name must be at least 2 characters long",
  // EMAIL
  VALIED_EMAIL: "Please enter a valid email",
  NOT_FOUND_EMAIL: "No user with that email address",
  EMAIL_IN_USE: "Email address already in use",
  // PASSWORD
  PASS_LENGTH: "Be at least 6 characters long",
  INCORRECT_PASS: "Incorrect password",
};

export const AUTH_FORM_SCHEMA = z.object({
  [FIELD.NAME]: z.string().min(2, { message: ERRORS_TEXT.NAME_LENGTH }).trim(),
  [FIELD.EMAIL]: z.string().email({ message: ERRORS_TEXT.VALIED_EMAIL }).trim(),
  [FIELD.PASSWORD]: z
    .string()
    .min(6, { message: ERRORS_TEXT.PASS_LENGTH })
    // .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
    // .regex(/[0-9]/, { message: "Contain at least one number." })
    // .regex(/[^a-zA-Z0-9]/, {
    //   message: "Contain at least one special character.",
    // })
    .trim(),
});
