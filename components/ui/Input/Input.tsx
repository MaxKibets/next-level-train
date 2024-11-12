import { FC } from "react";

import Error from "../Error";

import css from "./styles.module.css";
import { InputProps } from "./types";

const Input: FC<InputProps> = ({ type, placeholder, errors, ...props }) => (
  <div className={css.wrap}>
    <input type={type} className={css.input} placeholder={placeholder} {...props} />
    <label className={css.label}>{placeholder}</label>
    {errors?.length && <Error messages={errors} />}
  </div>
);

export default Input;
