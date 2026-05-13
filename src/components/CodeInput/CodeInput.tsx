import { useRef, useState } from 'react';
import styles from './CodeInput.module.scss';
import { useDispatch } from 'react-redux';
import { setOffers, setStep } from '@/store';
import { Message, Spinner } from '@/components';
import { useDataLoader } from '@/hooks';

interface ICodeInputProps {
  length: number;
  submitURL: string;
}

export const CodeInput = ({ length = 4, submitURL }: ICodeInputProps) => {
  const [values, setValues] = useState(() =>
    Array.from({ length }, (_, index) => ({
      id: index,
      value: '',
    })),
  );
  const [error, setError] = useState<null | string>(null);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const dispatch = useDispatch();
  const { responseLoading, serverResponse } = useDataLoader({
    method: 'POST',
    endpoint: submitURL,
  });

  const submitCode = async (code: string) => {
    try {
      await serverResponse(Number(code));
      setError(null);
      dispatch(setStep(0));
      dispatch(setOffers(null));
    } catch {
      setError('Invalid confirmation code');
    }
  };

  const handleChange = async (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;
    const next = [...values];
    next[index] = {
      ...next[index],
      value,
    };
    setValues(next);

    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    const code = next.map((i) => i.value).join('');

    if (code.length === length && !next.some((i) => i.value === '')) {
      await submitCode(code);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !values[index].value && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <section className={styles.input}>
      <Message data={{ headingText: 'Please enter your confirmation code' }} />
      {responseLoading && <Spinner />}
      {!responseLoading && (
        <>
          <div className={styles.input__wrapper}>
            {values.map((value) => (
              <input
                key={value.id}
                ref={(el) => {
                  inputRefs.current[value.id] = el;
                }}
                placeholder=" "
                value={value.value}
                maxLength={1}
                inputMode="numeric"
                onChange={(e) => handleChange(e.target.value, value.id)}
                onKeyDown={(e) => handleKeyDown(e, value.id)}
                className={styles.input__item}
              />
            ))}
          </div>
          {error && <span className={styles.input__error}>Invalid confirmation code</span>}
        </>
      )}
    </section>
  );
};
