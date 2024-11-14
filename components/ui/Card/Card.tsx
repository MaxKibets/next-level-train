import { FC } from "react";
import cn from "classnames";

import { SIZE } from "@/constants/ui";

import { CardProps } from "./styles.types";
import css from "./styles.module.css";

const Card: FC<CardProps> = ({ children, title, indention = SIZE.MEDIUM, className }) => (
  <div className={cn(css.card, css[indention], className)}>
    {title && <div className={css.title}>{title}</div>}
    {children}
  </div>
);

export default Card;
