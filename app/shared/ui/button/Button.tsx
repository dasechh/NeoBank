import type React from 'react';
import styles from './button.module.scss';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'newsletter';
  size?: 'sm' | 'md' | 'lg' | 'default';
}

export const Button = ({
  className,
  variant = 'primary',
  size = 'default',
  ...props
}: IButtonProps) => {
  const classes =
    `${styles.btn || ''} ${styles[`btn--${variant}`] || ''} ${styles[`btn--${size}`] || ''} ${className || ''}`.trim();

  return (
    <button className={classes} {...props}>
      {props.children}
    </button>
  );
};
