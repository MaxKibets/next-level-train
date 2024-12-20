export const SIZE = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
} as const;

export const INDENT = {
  ...SIZE,
  NONE: "none",
} as const;

export const ALIGN = {
  CENTER: "center",
  RIGHT: "right",
  LEFT: "left", // Is it necessary?
} as const;

export const DIRECTION = {
  TOP: "top",
  BOTTOM: "bottom",
  LEFT: "left",
  RIGHT: "right",
} as const;

export const BUTTON_TYPE = {
  BUTTON: "button",
  SUBMIT: "submit",
  RESET: "reset",
} as const;

export const HEADING_SIZE = {
  H1: "h1",
  H2: "h2",
  H3: "h3",
  H4: "h4",
} as const;

export const BUTTON_APPEARANCE = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  DANGER: "danger",
} as const;
