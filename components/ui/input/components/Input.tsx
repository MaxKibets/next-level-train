import React, { InputHTMLAttributes } from "react";

import css from "../styles/input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = ({ error, type, placeholder, ...props }: InputProps) => (
  <div className={css.wrap}>
    <div className={`${css.error} ${error ? css.active : ""}`}>{error}</div>
    <input
      type={type}
      className={`${css.input} ${error ? css.active : ""}`}
      placeholder={placeholder}
      {...props}
    />
    <label className={css.label}>{placeholder}</label>
  </div>
);

export default Input;
