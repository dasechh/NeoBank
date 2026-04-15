import { scrollAmount } from '@/constants';
import { useCallback, useLayoutEffect, useState } from 'react';

interface IUseSliderNavigation {
  listRef: React.RefObject<HTMLUListElement | null>;
}

export function useSliderNavigation({ listRef }: IUseSliderNavigation) {
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(true);

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

    return () => {
      list.removeEventListener('scroll', update);
      mo.disconnect();
    };
  }, [update]);

  const scrollToNext = () => {
    listRef.current?.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };
  const scrollToPrev = () => {
    listRef.current?.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  };

  return { isAtStart, isAtEnd, scrollToNext, scrollToPrev };
}
