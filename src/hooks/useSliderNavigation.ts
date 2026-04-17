import { useCallback, useLayoutEffect, useState } from 'react';

interface IUseSliderNavigation {
  listRef: React.RefObject<HTMLUListElement | null>;
}

export function useSliderNavigation({ listRef }: IUseSliderNavigation) {
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(true);

  const getStep = () => {
    const list = listRef.current;
    if (!list) return 0;

    const first = list.children[0] as HTMLElement;
    const second = list.children[1] as HTMLElement;

    if (!first || !second) return first?.offsetWidth || 0;

    const firstRect = first.getBoundingClientRect();
    const secondRect = second.getBoundingClientRect();

    return secondRect.left - firstRect.left;
  };

  const update = useCallback(() => {
    const list = listRef.current;
    if (!list) return;
    const maxScroll = list.scrollWidth - list.clientWidth;
    const left = list.scrollLeft;
    const tolerance = 10;

    setIsAtStart(left <= tolerance);
    setIsAtEnd(left >= maxScroll - tolerance);
  }, [listRef]);

  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const mo = new MutationObserver(update);
    mo.observe(list, { childList: true, subtree: true });

    list.addEventListener('scroll', update);
    update();
    return () => {
      list.removeEventListener('scroll', update);
      mo.disconnect();
    };
  }, [update]);

  const scrollToNext = () => {
    const step = getStep();
    listRef.current?.scrollBy({ left: step, behavior: 'smooth' });
  };
  const scrollToPrev = () => {
    const step = getStep();
    listRef.current?.scrollBy({ left: -step, behavior: 'smooth' });
  };

  return { isAtStart, isAtEnd, scrollToNext, scrollToPrev };
}
