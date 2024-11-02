import { forwardRef } from "react";
import cn from "classnames";

import { AnimatedAppearLayoutProps } from "./animatedAppeat.types";
import css from "./animatedFrameLayout.module.css";

const AnimatedAppearLayout = forwardRef<HTMLDivElement, AnimatedAppearLayoutProps>(
  ({ children, isInView, direction, className }, ref) => (
    <div className={cn(css.wrap, className)} ref={ref}>
      <div className={cn(isInView ? css.visible : css.hidden, css[direction])}>
        {children}
      </div>
    </div>
  ),
);

AnimatedAppearLayout.displayName = "AnimatedAppearLayout";

export default AnimatedAppearLayout;
