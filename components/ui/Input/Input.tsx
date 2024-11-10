import { FC } from "react";
import cn from "classnames";

import css from "./styles.module.css";
import { InputProps } from "./types";

const Input: FC<InputProps> = ({ error, type, placeholder, ...props }) => (
  <div className={css.wrap}>
    <input
      type={type}
      className={cn(css.input, error && css.active)}
      placeholder={placeholder}
      {...props}
    />
    <label className={css.label}>{placeholder}</label>
    {error && <div className={cn(css.error)}>{error}</div>}
  </div>
);

export default Input;
