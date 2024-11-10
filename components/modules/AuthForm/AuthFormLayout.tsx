import { FC } from "react";
import Link from "next/link";

import { Button, Card, Heading, Input, Row } from "@/components/ui";
import { ALIGN, BUTTON_TYPE, HEADING_SIZE, SIZE } from "@/constants/ui";
import { AUTH_MODE } from "@/constants/auth";
import { AUTH_URL } from "@/constants/routes";

import css from "./styles.module.css";
import { AuthFormLayoutProps } from "./types";

const HEADING_TEXT = {
  [AUTH_MODE.LOGIN]: "Sign in to your account",
  [AUTH_MODE.REGISTER]: "Create a new account",
};

const SWITCH_MODE_TEXT = {
  [AUTH_MODE.LOGIN]: "create a new account",
  [AUTH_MODE.REGISTER]: "sign in to your account",
};

const SWITCH_MODE_URL = {
  [AUTH_MODE.LOGIN]: AUTH_URL.REGISTER,
  [AUTH_MODE.REGISTER]: AUTH_URL.LOGIN,
};

const INPUTS = {
  [AUTH_MODE.REGISTER]: [
    { type: "text", name: "name", placeholder: "Name", id: "name" },
    { type: "email", name: "email", placeholder: "Email", id: "email" },
    { type: "password", name: "password", placeholder: "Password", id: "password" },
  ],
  [AUTH_MODE.LOGIN]: [
    { type: "email", name: "email", placeholder: "Email", id: "email" },
    { type: "password", name: "password", placeholder: "Password", id: "password" },
  ],
};

const AuthFormLayout: FC<AuthFormLayoutProps> = ({ mode, authAction, errors }) => (
  <div className={css.wrap}>
    <Row size={SIZE.SMALL} align={ALIGN.CENTER}>
      <Card indention={SIZE.LARGE}>
        <form className={css.form} action={authAction}>
          <Heading size={HEADING_SIZE.H3}>{HEADING_TEXT[mode]}</Heading>
          {INPUTS[mode].map((input) => (
            <Input
              key={input.id}
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
              id={input.id}
              error={errors?.[input.name]}
            />
          ))}
          <Row size={SIZE.LARGE} align={ALIGN.RIGHT}>
            <Button type={BUTTON_TYPE.SUBMIT} className={css.button}>
              {mode === AUTH_MODE.LOGIN ? AUTH_MODE.LOGIN : AUTH_MODE.REGISTER}
            </Button>
          </Row>
        </form>
      </Card>
    </Row>
    <Row className={css.subtext} size={SIZE.SMALL} align={ALIGN.CENTER}>
      or
    </Row>
    <Row className={css.subtext} size={SIZE.SMALL} align={ALIGN.CENTER}>
      <Link href={SWITCH_MODE_URL[mode]}>{SWITCH_MODE_TEXT[mode]}</Link>
    </Row>
  </div>
);

export default AuthFormLayout;
