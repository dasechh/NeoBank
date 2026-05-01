import styles from './Divider.module.scss';
import clsx from 'clsx';

interface IDividerProps {
  dashed?: boolean;
  vertical?: boolean;
}

export const Divider = ({ dashed = false, vertical = false }: IDividerProps) => {
  return (
    <div
      className={clsx(
        styles.divider,
        dashed && styles.divider_dashed,
        vertical && styles.divider_vertical,
      )}
    ></div>
  );
};
