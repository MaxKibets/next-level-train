import { FC } from "react";
import Link from "next/link";

import { Button, Card, Heading, Input, Row } from "@/components/ui";
import { ALIGN, BUTTON_TYPE, HEADING_SIZE, SIZE } from "@/constants/ui";
import { AUTH_MODE } from "@/constants/auth";
import { AUTH_URL } from "@/constants/routes";

import css from "./styles.module.css";
import { AuthFormLayoutProps } from "./types";
import { FIELD } from "./constants";

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
    { type: "text", name: FIELD.NAME, placeholder: "Name" },
    { type: "email", name: FIELD.EMAIL, placeholder: "Email" },
    { type: "password", name: FIELD.PASSWORD, placeholder: "Password" },
  ],
  [AUTH_MODE.LOGIN]: [
    { type: "email", name: FIELD.EMAIL, placeholder: "Email" },
    { type: "password", name: FIELD.PASSWORD, placeholder: "Password" },
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
              key={input.name}
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
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
