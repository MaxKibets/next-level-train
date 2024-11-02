"use client";

import { FC, useRef } from "react";

import { DIRECTION } from "@/constants/global";

import { useInView } from "./animatedAppeat.hooks";
import AnimatedAppearLayout from "./AnimatedAppearLayout";
import { AnimatedAppearProps } from "./animatedAppeat.types";

const AnimatedAppear: FC<AnimatedAppearProps> = ({
  children,
  direction = DIRECTION.LEFT,
  delay,
  className,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView({ ref, delay, options: { threshold: 1 } });

  return (
    <AnimatedAppearLayout
      ref={ref}
      isInView={isInView}
      direction={direction}
      className={className}
    >
      {children}
    </AnimatedAppearLayout>
  );
};

export default AnimatedAppear;
