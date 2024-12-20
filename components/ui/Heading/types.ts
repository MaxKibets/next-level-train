import { HeadingSize, Indent, WithChildrenProps } from "@/types/global";

export type HeadingProps = WithChildrenProps<{
  size: HeadingSize;
  inverse?: boolean;
  className?: string;
  indention?: Indent;
}>;
