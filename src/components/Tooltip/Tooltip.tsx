import clsx from 'clsx';
import styles from './Tooltip.module.scss';

export const Tooltip = ({ text, className }: { text: string; className?: string }) => {
  return <div className={clsx(styles.tooltip, className)}>{text}</div>;
};
