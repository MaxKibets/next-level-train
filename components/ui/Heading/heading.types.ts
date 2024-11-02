import { HeadingSize, WithChildrenProps } from "@/types/global";

export type HeadingProps = WithChildrenProps<{
  size: HeadingSize;
  inverse?: boolean;
}>;
