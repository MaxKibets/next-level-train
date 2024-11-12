import { InputHTMLAttributes } from "react";

export type InputProps = {
  errors?: string[] | undefined;
} & InputHTMLAttributes<HTMLInputElement>;
