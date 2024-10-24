import React, { forwardRef } from "react";

import { AnimatedFrameProps } from "../containers/AnimatedFrame";
import css from "../styles/animatedFrame.module.css";

type AnimatedFrameLayoutProps = {
  isInView: boolean;
} & AnimatedFrameProps;

const AnimatedFrameLayout = forwardRef<HTMLDivElement, AnimatedFrameLayoutProps>(
  ({ children, isInView, direction, className }, ref) => {
    return (
      <div className={`${css.wrap} ${className ? className : ""}`} ref={ref}>
        <div
          className={`
            ${isInView ? css.visible : css.hidden} 
            ${direction ? css[direction] : ""}
          `}
        >
          {children}
        </div>
      </div>
    );
  },
);

AnimatedFrameLayout.displayName = "AnimatedFrameLayout";

export default AnimatedFrameLayout;
