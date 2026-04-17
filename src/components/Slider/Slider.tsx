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
  const showList = !newsLoading && children;
  const listRef = useRef<HTMLUListElement>(null);
  const { isAtStart, isAtEnd, scrollToNext, scrollToPrev } = useSliderNavigation({ listRef });

  let content;

  if (newsLoading) {
    content = (
      <div className={styles.slider__loading}>
        <span>Loading...</span>
      </div>
    );
  } else if (children) {
    content = (
      <ul className={styles.slider__list} ref={listRef}>
        {children}
      </ul>
    );
  } else {
    content = (
      <div className={styles.slider__empty}>
        <span>No news available at the moment.</span>
      </div>
    );
  }

  return (
    <section className={styles.slider}>
      <div className={styles.slider__header}>
        {sliderName && <h3>{sliderName}</h3>}
        {sliderDescription && <p className={styles.slider__description}>{sliderDescription}</p>}
      </div>

      {content}

      <div className={styles.slider__controls}>
        <Button variant="arrow-left" disabled={!showList || isAtStart} onClick={scrollToPrev}>
          <Arrow />
        </Button>

        <Button variant="arrow-right" disabled={!showList || isAtEnd} onClick={scrollToNext}>
          <Arrow />
        </Button>
      </div>
    </section>
  );
};
