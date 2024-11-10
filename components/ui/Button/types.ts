import { ButtonAppearance, ButtonType, Size, WithChildrenProps } from "@/types/global";

export type ButtonProps = WithChildrenProps<{
  className?: string;
  type?: ButtonType;
  size?: Size;
  href?: string;
  onClick?: () => void;
  appearance?: ButtonAppearance;
  disabled?: boolean;
}>;
