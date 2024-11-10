import { FC } from "react";
import cn from "classnames";

import { SIZE } from "@/constants/ui";

import { CardProps } from "./card.types";
import css from "./card.module.css";

const Card: FC<CardProps> = ({ children, title, indention = SIZE.MEDIUM }) => (
  <div className={cn(css.card, css[indention])}>
    {title && <div className={css.title}>{title}</div>}
    {children}
  </div>
);

export default Card;
