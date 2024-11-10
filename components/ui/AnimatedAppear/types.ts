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
  options?: IntersectionObserverInit;
  delay?: number;
};

export type UseInViewReturns = {
  isInView: boolean;
  ref: React.MutableRefObject<HTMLDivElement | null>;
};
