import { Align, Size, WithChildrenProps } from "@/types/global";

export type RowProps = WithChildrenProps<{
  size?: Size;
  align?: Align;
  className?: string;
}>;
