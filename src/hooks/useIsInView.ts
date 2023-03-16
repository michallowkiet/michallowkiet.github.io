import { MutableRefObject, RefObject, useEffect, useState } from 'react';

export const useIsInView = (ref: RefObject<Element>): boolean => {
  const [isInView, setIsInView] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.5 },
    );

    observer.observe(ref.current as Element);

    return () => observer.disconnect();
  }, [ref]);

  return isInView;
};
