import styles from './Slider.module.scss';
import { useSliderNavigation } from '@/hooks';
import { useRef, type ReactNode } from 'react';
import { Button } from '@/components';
import Arrow from '@/assets/icons/arrow.svg?react';

interface ISliderProps {
  sliderName?: string;
  sliderDescription?: string;
  children?: ReactNode;
}

export const Slider = ({ sliderName, sliderDescription, children }: ISliderProps) => {
  const listRef = useRef<HTMLUListElement>(null);

  const { isAtStart, isAtEnd, scrollToNext, scrollToPrev } = useSliderNavigation({
    listRef,
  });

  return (
    <section className={styles.slider}>
      <div className={styles.slider__header}>
        {sliderName && <h3>{sliderName}</h3>}
        {sliderDescription && <p className={styles.slider__description}>{sliderDescription}</p>}
      </div>
      <ul className={styles.slider__list} ref={listRef}>
        {children}
      </ul>
      <div className={styles.slider__controls}>
        <Button
          variant="arrow-left"
          aria-label="Previous Slide"
          disabled={isAtStart}
          onClick={scrollToPrev}
        >
          <Arrow />
        </Button>
        <Button
          variant="arrow-right"
          aria-label="Next Slide"
          disabled={isAtEnd}
          onClick={scrollToNext}
        >
          <Arrow />
        </Button>
      </div>
    </section>
  );
};
