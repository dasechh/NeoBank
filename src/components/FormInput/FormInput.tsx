import clsx from 'clsx';
import { useEffect, useRef, type InputHTMLAttributes } from 'react';
import styles from './FormInput.module.scss';
import checkIconSrc from '@icons/check_fill.svg';
import closeIconSrc from '@icons/close_fill.svg';
import { RequiredStar } from '@/components';
import { formatNumber, setRangeProgress } from '@/utils';

interface IFormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorText?: string;
  required?: boolean;
  valid?: boolean;
  variant?: TInputVariant;
}

type TInputVariant = 'primary' | 'empty' | '';

export const FormInput = ({
  label,
  errorText,
  required,
  valid,
  variant = 'primary',
  type = 'text',
  value,
  placeholder,
  min,
  max,
  onChange,
  ...props
}: IFormInputProps) => {
  const inputType = type;
  const inputRef = useRef<HTMLInputElement>(null);
  const isEmpty = !value || value === '' || value === undefined || value === null;
  const classString = (part: string) => styles[`input__${inputType}__${variant}__${part}`];
  const iconSrc = errorText ? closeIconSrc : checkIconSrc;

  const getDisplayValue = () => {
    if (inputType === 'date' && !isEmpty) {
      return String(value).split('-').reverse().join('-');
    }

    if (inputType === 'number' || inputType === 'range') {
      const formatted = formatNumber(Number(value));
      return inputType === 'number' ? `${formatted} ₽` : formatted;
    }

    return placeholder;
  };

  useEffect(() => {
    if (inputType === 'range' && inputRef.current) {
      setRangeProgress(inputRef.current);
    }
  }, []);

  return (
    <div
      className={clsx(
        styles.input,
        styles[`input__${inputType}`],
        styles[`input__${inputType}__${variant}`],
      )}
    >
      {label && (
        <label className={classString('name')}>
          {label}
          {required && <RequiredStar />}
        </label>
      )}

      <div className={classString('wrapper')}>
        {(inputType === 'date' || inputType === 'range' || inputType === 'number') && (
          <div
            className={clsx(
              classString('field'),
              isEmpty && classString('field_empty'),
              valid === true && classString('field_valid'),
              valid === false && classString('field_error'),
            )}
          >
            <span>{getDisplayValue()}</span>
          </div>
        )}

        <input
          {...props}
          type={inputType}
          value={value}
          min={min}
          max={max}
          ref={inputRef}
          placeholder={placeholder}
          onClick={(e) => {
            if (inputType === 'date') e.currentTarget.showPicker();
          }}
          onChange={(e) => {
            if (inputType === 'number') {
              const onlyNums = e.target.value.replace(/[^0-9]/g, '');
              e.target.value = onlyNums;
            }
            onChange?.(e);
            if (inputType === 'range') setRangeProgress(e.currentTarget);
          }}
          className={clsx(
            classString('input'),
            valid === true && classString('input_valid'),
            valid === false && classString('input_error'),
          )}
        />

        {(min || max) && (
          <div className={classString('minmax')}>
            {min && <span>{formatNumber(Number(min))}</span>}
            {max && <span>{formatNumber(Number(max))}</span>}
          </div>
        )}

        {valid !== undefined && <img className={classString('icon')} src={iconSrc} alt="" />}
      </div>

      {errorText && <span className={classString('error')}>{errorText}</span>}
    </div>
  );
};
