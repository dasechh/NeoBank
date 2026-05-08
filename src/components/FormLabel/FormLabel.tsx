import clsx from 'clsx';
import styles from './FormLabel.module.scss';

interface IFormLabelProps {
  labelText: string;
  labelInfo: string;
  gapWith?: 'sm' | 'md' | 'lg';
}

export const FormLabel = ({ labelText, labelInfo, gapWith }: IFormLabelProps) => {
  return (
    <div className={clsx(styles.label, gapWith && styles[`label_${gapWith}`])}>
      <h2 className={styles.label__heading}>{labelText}</h2>
      <span className={styles.label__step}>{labelInfo}</span>
    </div>
  );
};
