import { FC } from "react";
import cn from "classnames";

import { INDENT } from "@/constants/ui";

import css from "./styles.module.css";
import { HeadingProps } from "./types";

const Heading: FC<HeadingProps> = ({
  children,
  size: H,
  indention = INDENT.MEDIUM,
  inverse,
  className,
}) => (
  <H
    className={cn(css.heading, css[H], inverse && css.inverse, css[indention], className)}
  >
    {children}
  </H>
);

export default Heading;
