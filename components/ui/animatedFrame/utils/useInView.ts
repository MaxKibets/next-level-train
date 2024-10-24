import { useEffect, useState } from "react";

type useInViewProps = {
  ref: React.MutableRefObject<HTMLElement | null>;
  options?: IntersectionObserverInit;
  delay?: number;
};

const useInView = ({ ref, options, delay = 0 }: useInViewProps): boolean => {
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

  return isInView;
};

export default useInView;
