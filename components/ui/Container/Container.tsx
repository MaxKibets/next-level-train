import { FC, ReactNode } from "react";

import css from "./styles.module.css";

const Container: FC<{ children: ReactNode }> = ({ children }) => (
  <main className={css.container}>{children}</main>
);

export default Container;
