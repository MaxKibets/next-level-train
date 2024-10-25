import React, { ReactNode } from "react";

import css from "../styles/row.module.css";

type RowProps = {
  children: ReactNode;
  size?: "small" | "medium" | "large";
  align?: "left" | "center" | "right";
  className?: string;
};

const Row = ({ children, size = "medium", align = "left", className }: RowProps) => {
  return (
    <div className={`${css[size]} ${css[align]} ${className ? className : ""}`}>
      {children}
    </div>
  );
};

export default Row;
