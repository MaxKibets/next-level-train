import {
  ALIGN,
  BUTTON_APPEARANCE,
  BUTTON_TYPE,
  DIRECTION,
  HEADING_SIZE,
  SIZE,
} from "@/constants/global";
import { ReactNode } from "react";

export type Size = (typeof SIZE)[keyof typeof SIZE];

export type Align = (typeof ALIGN)[keyof typeof ALIGN];

export type Direction = (typeof DIRECTION)[keyof typeof DIRECTION];

export type ButtonType = (typeof BUTTON_TYPE)[keyof typeof BUTTON_TYPE];

export type HeadingSize = (typeof HEADING_SIZE)[keyof typeof HEADING_SIZE];

export type ButtonAppearance = (typeof BUTTON_APPEARANCE)[keyof typeof BUTTON_APPEARANCE];

// The reason why not React.PropsWithChildren is it has an OPTIONAL children prop
export type WithChildrenProps<P = unknown> = P & { children: ReactNode };
