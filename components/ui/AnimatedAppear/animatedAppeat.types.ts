import { Direction, WithChildrenProps } from "@/types/global";

type AnimatedAppearCommonProps = WithChildrenProps<{
  className?: string;
  direction: Direction;
}>;

export type AnimatedAppearProps = AnimatedAppearCommonProps & {
  delay?: number;
};

export type AnimatedAppearLayoutProps = {
  isInView: boolean;
} & AnimatedAppearCommonProps;

export type UseInViewProps = {
  ref: React.MutableRefObject<HTMLDivElement | null>;
  options?: IntersectionObserverInit;
  delay?: number;
};
