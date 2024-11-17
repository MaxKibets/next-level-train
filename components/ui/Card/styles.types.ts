import { ReactNode } from "react";

import { Indent, WithChildrenProps } from "@/types/global";

export type CardProps = WithChildrenProps<{
  title?: ReactNode | string;
  indention?: Indent;
  className?: string;
}>;
