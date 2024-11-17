import { ReactNode } from "react";

import {
  ALIGN,
  BUTTON_APPEARANCE,
  BUTTON_TYPE,
  DIRECTION,
  HEADING_SIZE,
  INDENT,
  SIZE,
} from "@/constants/ui";

import { DAYS } from "@/constants/days";

export type Size = (typeof SIZE)[keyof typeof SIZE];

export type Indent = (typeof INDENT)[keyof typeof INDENT];

export type Align = (typeof ALIGN)[keyof typeof ALIGN];

export type Direction = (typeof DIRECTION)[keyof typeof DIRECTION];

export type ButtonType = (typeof BUTTON_TYPE)[keyof typeof BUTTON_TYPE];

export type HeadingSize = (typeof HEADING_SIZE)[keyof typeof HEADING_SIZE];

export type ButtonAppearance = (typeof BUTTON_APPEARANCE)[keyof typeof BUTTON_APPEARANCE];

export type DayName = (typeof DAYS)[number];

// The reason why not React.PropsWithChildren is it has an OPTIONAL children prop
export type WithChildrenProps<P = unknown> = P & { children: ReactNode };
