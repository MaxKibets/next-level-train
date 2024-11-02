import { InputHTMLAttributes } from "react";

export type InputProps = {
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;
