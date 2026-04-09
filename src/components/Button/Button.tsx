import type React from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'newsletter' | 'burger' | '';
  size?: 'sm' | 'md' | 'lg' | 'default' | '';
}

const BurgerChildren = () => {
  return (
    <>
      <span className={styles.btn__burgerLine} />
      <span className={styles.btn__burgerLine} />
    </>
  );
};

export const Button = ({ className, variant = '', size = '', ...props }: IButtonProps) => {
  const classes = clsx(styles.btn, styles[`btn_${variant}`], styles[`btn_${size}`], className);

  return (
    <button className={classes} {...props}>
      {props.children}
      {variant === 'burger' && <BurgerChildren />}
    </button>
  );
};
