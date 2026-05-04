import { useEffect, useRef, type InputHTMLAttributes } from 'react';
import styles from './FormSlider.module.scss';

import { formatNumber, setRangeProgress } from '@/utils';

export const FormSlider = ({
  label,
  value,
  min,
  max,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { label?: string }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current && setRangeProgress(inputRef.current);
  }, [value]);

  return (
    <div className={styles.slider}>
      {label && <label className={styles.slider__label}>{label}</label>}

      <div className={styles.slider__wrapper}>
        <span className={styles.slider__value}>{formatNumber(Number(value) ?? 0)}</span>

        <input
          {...props}
          type="range"
          value={value}
          min={min}
          max={max}
          ref={inputRef}
          className={styles.slider__input}
        />

        {min && <span className={styles.slider__min}>{formatNumber(Number(min))}</span>}
        {max && <span className={styles.slider__max}>{formatNumber(Number(max))}</span>}
      </div>
    </div>
  );
};
