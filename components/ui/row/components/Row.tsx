import React, { ReactNode } from "react";

import css from "../styles/row.module.css";

type RowProps = {
  children: ReactNode;
  size?: "small" | "medium" | "large";
};

const Row = ({ children, size = "medium" }: RowProps) => {
  return <div className={css[size]}>{children}</div>;
};

export default Row;
