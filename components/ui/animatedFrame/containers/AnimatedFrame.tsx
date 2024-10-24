"use client";

import React, { useRef } from "react";

import useInView from "../utils/useInView";
import AnimatedFrameLayout from "../components/AnimatedFrameLayout";

export type AnimatedFrameProps = {
  children: React.ReactNode;
  className?: string;
  direction?: "left" | "right" | "top" | "bottom";
  delay?: number;
};

const AnimatedFrame = ({ children, direction, delay, className }: AnimatedFrameProps) => {
  const ref = useRef(null);
  // TODO pass options
  const isInView = useInView({ ref, delay: delay || 0, options: { threshold: 1 } });

  return (
    <AnimatedFrameLayout
      ref={ref}
      isInView={isInView}
      direction={direction || "left"}
      className={className}
    >
      {children}
    </AnimatedFrameLayout>
  );
};

export default AnimatedFrame;
