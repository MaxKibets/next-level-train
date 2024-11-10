import { ReactNode } from "react";

import { Size, WithChildrenProps } from "@/types/global";

export type CardProps = WithChildrenProps<{
  title?: ReactNode | string;
  indention?: Size;
}>;
