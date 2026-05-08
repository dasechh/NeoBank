import clsx from 'clsx';
import { useId, type SelectHTMLAttributes } from 'react';
import styles from './FormSelect.module.scss';
import expandIconSrc from '@icons/expand_down.svg';

interface ISelectOption {
  label: string;
  value: string | number;
  id: number;
}

interface IFormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: ISelectOption[];
  errorText?: string;
  valid?: boolean;
}

export const FormSelect = ({
  label,
  options,
  errorText,
  valid,
  required,
  children,
  onChange,
  ...props
}: IFormSelectProps) => {
  const generatedId = useId();
  const id = props.id || generatedId;

  return (
    <div className={styles.select}>
      {label && (
        <label htmlFor={id} className={styles.select__name}>
          {label}
          {required && <span className={styles.select__star}> *</span>}
        </label>
      )}

      <div className={styles.select__wrapper}>
        <select
          {...props}
          id={id}
          required={required}
          className={clsx(
            styles.select__field,
            errorText && styles.select_error,
            valid && styles.select_valid,
          )}
          onChange={(e) => {
            onChange?.(e);
          }}
        >
          {options.map((opt) => (
            <option key={opt.id} value={opt.value} disabled={!opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        <div className={styles.select__icon}>
          <img className={styles.icon} src={expandIconSrc} alt="" aria-hidden="true" />
        </div>
      </div>

      {errorText && (
        <span className={styles.select__error_message} role="alert">
          {errorText}
        </span>
      )}
    </div>
  );
};
