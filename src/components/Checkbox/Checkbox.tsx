import styles from './Checkbox.module.scss';

interface ICheckboxProps {
  label: string;
  required?: boolean;
  onChange?: (value: boolean) => void;
}

export const Checkbox = ({ label, required, onChange }: ICheckboxProps) => {
  return (
    <label className={styles.checkbox}>
      <input
        type="checkbox"
        required={required}
        className={styles.checkbox__input}
        onChange={(e) => onChange?.(e.target.checked)}
      />
      <span className={styles.checkbox__label}>{label}</span>
    </label>
  );
};
