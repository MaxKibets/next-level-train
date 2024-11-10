import { FC } from "react";
import cn from "classnames";

import { ALIGN, SIZE } from "@/constants/ui";

import { RowProps } from "./types";
import css from "./styles.module.css";

const Row: FC<RowProps> = ({
  children,
  size = SIZE.MEDIUM,
  align = ALIGN.LEFT,
  className,
}) => {
  return <div className={cn(css[size], css[align], className)}>{children}</div>;
};

export default Row;
