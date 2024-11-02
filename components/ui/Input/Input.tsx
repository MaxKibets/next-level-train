import { FC } from "react";
import cn from "classnames";

import css from "./input.module.css";
import { InputProps } from "./input.types";

const Input: FC<InputProps> = ({ error, type, placeholder, ...props }) => (
  <div className={css.wrap}>
    <div className={cn(css.error, error && css.active)}>{error}</div>
    <input
      type={type}
      className={cn(css.input, error && css.active)}
      placeholder={placeholder}
      {...props}
    />
    <label className={css.label}>{placeholder}</label>
  </div>
);

export default Input;
