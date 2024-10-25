import React, { ReactNode } from "react";

import css from "../styles/heading.module.css";

type HeadingProps = {
  children: ReactNode;
  size: "1" | "2" | "3";
  inverse?: boolean;
};

const Heading = ({ children, size, inverse }: HeadingProps) => {
  const Tag = `h${size}` as keyof JSX.IntrinsicElements;

  return <Tag className={`${css[Tag]} ${inverse ? css.inverse : ""}`}>{children}</Tag>;
};

export default Heading;
