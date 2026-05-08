import { useRef, useState } from 'react';
import styles from './CodeInput.module.scss';
import { postData } from '@/services';
import { useDispatch } from 'react-redux';
import { setStatus } from '@/store';
import { Message, Spinner } from '@/components';

interface ICodeInputProps {
  length: number;
  submitURL: string;
}

export const CodeInput = ({ length = 4, submitURL }: ICodeInputProps) => {
  const [values, setValues] = useState(Array.from({ length }, () => ''));
  const [loading, setLoading] = useState<Boolean>(false);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const [error, setError] = useState<null | string>(null);
  const dispatch = useDispatch();

  const submitCode = async (code: string) => {
    setLoading(true);
    try {
      await postData(submitURL, Number(code));
      setError(null);
      dispatch(setStatus('CREDIT_ISSUED'));
    } catch (error) {
      setError('Invalid confirmation code');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = async (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);
    const code = newValues.join('');

    if (code.length === length) {
      await submitCode(code);
    }

    if (value && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !values[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <section className={styles.input}>
      <Message data={{ headingText: 'Please enter your confirmation code' }} />
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className={styles.input__wrapper}>
            {values.map((value, index) => (
              <input
                key={index}
                ref={(element) => {
                  inputsRef.current[index] = element;
                }}
                placeholder=" "
                value={value}
                maxLength={1}
                inputMode="numeric"
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
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
