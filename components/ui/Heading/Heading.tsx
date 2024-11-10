import { FC } from "react";
import cn from "classnames";

import css from "./heading.module.css";
import { HeadingProps } from "./heading.types";

const Heading: FC<HeadingProps> = ({ children, size: H, inverse }) => (
  <H className={cn(css.heading, css[H], inverse && css.inverse)}>{children}</H>
);

export default Heading;
