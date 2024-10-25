import React from "react";
import Link from "next/link";

import { Button, Heading, Input, Row } from "@/components/ui";

import { AuthFormProps, AuthFormErrors } from "../containers/AuthForm";
import css from "../styles/authFormLayout.module.css";

type AuthFormLayoutProps = {
  authAction: (formData: FormData) => void;
  errors: AuthFormErrors | undefined;
} & AuthFormProps;

const AuthFormLayout = ({ mode, authAction, errors }: AuthFormLayoutProps) => (
  <>
    <Row size="small" align="center">
      <form className={css.form} action={authAction}>
        <Heading size="3">
          {mode === "login" ? "Sign in to your account" : "Create a new account"}
        </Heading>
        {mode === "register" && (
          <Input
            type="text"
            name="name"
            placeholder="Name"
            id="name"
            error={errors?.name}
          />
        )}
        <Input
          type="email"
          name="email"
          placeholder="Email"
          id="email"
          error={errors?.email}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          id="password"
          error={errors?.password}
        />
        <Row size="large" align="right">
          <Button type="submit" className={css.button}>
            {mode === "login" ? "Login" : "Register"}
          </Button>
        </Row>
      </form>
    </Row>
    <Row className={css.subtext} size="small" align="center">
      or
    </Row>
    <Row className={css.subtext} size="small" align="center">
      <Link href={`/auth?mode=${mode === "login" ? "register" : "login"}`}>
        {mode === "login" ? "create a new account" : "sign in to your account"}
      </Link>
    </Row>
  </>
);

export default AuthFormLayout;
