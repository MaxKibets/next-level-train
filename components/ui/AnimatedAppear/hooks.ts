import { useEffect, useRef, useState } from "react";

import { UseInViewProps, UseInViewReturns } from "./types";

export const useInView = ({ options, delay = 0 }: UseInViewProps): UseInViewReturns => {
  const ref = useRef<HTMLDivElement | null>(null);

  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setTimeout(() => {
        setIsInView(entry.isIntersecting);
      }, delay);
    }, options);

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return { isInView, ref };
};
