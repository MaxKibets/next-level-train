"use client";

import { FC } from "react";

import { DIRECTION } from "@/constants/ui";

import { useInView } from "./animatedAppear.hooks";
import AnimatedAppearLayout from "./AnimatedAppearLayout";
import { AnimatedAppearProps } from "./animatedAppear.types";

const AnimatedAppear: FC<AnimatedAppearProps> = ({
  children,
  direction = DIRECTION.LEFT,
  delay,
  className,
}) => {
  const { isInView, ref } = useInView({ delay, options: { threshold: 1 } });

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
