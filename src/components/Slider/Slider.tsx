import styles from './Slider.module.scss';
import { useSliderNavigation } from '@/hooks';
import { useRef, type ReactNode } from 'react';
import { Button } from '@/components';
import Arrow from '@/assets/icons/arrow.svg?react';

interface ISliderProps {
  sliderName?: string;
  sliderDescription?: string;
  children?: ReactNode;
  newsLoading?: boolean;
}

export const Slider = ({ sliderName, sliderDescription, children, newsLoading }: ISliderProps) => {
  const hasChildren = Array.isArray(children) ? children.length > 0 : Boolean(children);
  let content;

  if (!hasChildren) {
    content = (
      <div className={styles.slider__loading}>
        <span>{newsLoading ? 'Loading' : 'No news available at the moment.'}</span>
      </div>
    );
  } else {
    const listRef = useRef<HTMLUListElement>(null);
    const { isAtStart, isAtEnd, scrollToNext, scrollToPrev } = useSliderNavigation({ listRef });
    content = (
      <>
        <ul className={styles.slider__list} ref={listRef}>
          {children}
        </ul>

        <div className={styles.slider__controls}>
          <Button variant="arrow-left" disabled={isAtStart} onClick={scrollToPrev}>
            <Arrow />
          </Button>

          <Button variant="arrow-right" disabled={isAtEnd} onClick={scrollToNext}>
            <Arrow />
          </Button>
        </div>
      </>
    );
  }

  return (
    <section className={styles.slider}>
      <div className={styles.slider__header}>
        {sliderName && <h3>{sliderName}</h3>}
        {sliderDescription && <p className={styles.slider__description}>{sliderDescription}</p>}
      </div>
      {content}
    </section>
  );
};
