import { FC } from "react";
import cn from "classnames";

import { ALIGN, SIZE } from "@/constants/global";

import { RowProps } from "./row.types";
import css from "./row.module.css";

const Row: FC<RowProps> = ({
  children,
  size = SIZE.MEDIUM,
  align = ALIGN.LEFT,
  className,
}) => {
  return <div className={cn(css[size], css[align], className)}>{children}</div>;
};

export default Row;
