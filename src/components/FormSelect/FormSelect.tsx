import clsx from 'clsx';
import { useId, type SelectHTMLAttributes } from 'react';
import styles from './FormSelect.module.scss';
import expandIconSrc from '@icons/expand_down.svg';
import { RequiredStar } from '@/components';

interface ISelectOption {
  label: string;
  value: string | number;
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
  ...props
}: IFormSelectProps) => {
  const generatedId = useId();
  const id = props.id || generatedId;

  return (
    <div className={styles.select}>
      {label && (
        <label htmlFor={id} className={styles.select__name}>
          {label}
          {required && <RequiredStar />}
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
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        <div className={styles.select__icon}>
          <img className={styles.icon} src={expandIconSrc} alt="" aria-hidden="true" />
        </div>
      </div>

      {errorText && (
        <span className={styles.error_message} role="alert">
          {errorText}
        </span>
      )}
    </div>
  );
};
