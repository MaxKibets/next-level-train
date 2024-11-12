import { FC } from "react";

import css from "./styles.module.css";

const Error: FC<{ messages: string[] }> = ({ messages }) => {
  return <div className={css.error}>{messages}</div>;
};

export default Error;
