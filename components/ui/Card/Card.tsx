import { FC } from "react";

import { WithChildrenProps } from "@/types/global";

import css from "./card.module.css";

const Card: FC<WithChildrenProps> = ({ children }) => (
  <div className={css.card}>{children}</div>
);

export default Card;
