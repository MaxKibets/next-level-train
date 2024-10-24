import React, { ReactNode } from "react";

import css from "../styles/heading.module.css";

type HeadingProps = {
  children: ReactNode;
  size: "1" | "2" | "3";
};

const Heading = ({ children, size }: HeadingProps) => {
  const Tag = `h${size}` as keyof JSX.IntrinsicElements;

  return <Tag className={css[Tag]}>{children}</Tag>;
};

export default Heading;
