import type { ReactNode } from 'react';
import styles from './Message.module.scss';
import clsx from 'clsx';

interface IMessageProps {
  headingText?: string;
  descriptionText?: string;
  image?: ReactNode;
  button?: ReactNode;
  border?: boolean;
}

export const Message = ({ data }: { data: IMessageProps }) => {
  return (
    <section className={clsx(styles.message, data.border === true && styles.message_border)}>
      {data.image}
      <h2 className={styles.message__heading}>{data.headingText}</h2>
      <p className={styles.message__description}>{data.descriptionText}</p>
      {data.button}
    </section>
  );
};
