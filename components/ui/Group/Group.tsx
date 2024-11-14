import { FC } from "react";
import cn from "classnames";

import { ALIGN } from "@/constants/ui";

import css from "./styles.module.css";
import { GroupProps } from "./types";

const Group: FC<GroupProps> = ({ children, align = ALIGN.LEFT, className }) => (
  <div className={cn(css.group, css[align], className)}>{children}</div>
);

export default Group;
