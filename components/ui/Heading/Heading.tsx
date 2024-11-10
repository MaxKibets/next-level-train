import { FC } from "react";
import cn from "classnames";

import css from "./styles.module.css";
import { HeadingProps } from "./types";

const Heading: FC<HeadingProps> = ({ children, size: H, inverse }) => (
  <H className={cn(css.heading, css[H], inverse && css.inverse)}>{children}</H>
);

export default Heading;
