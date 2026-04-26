import styles from './Accordion.module.scss';
import expandArrowSrc from '@icons/expand.svg';

interface IAccordionProps {
  title: string;
  description: string;
  name?: string;
}

export const Accordion = ({ title, description, name }: IAccordionProps) => {
  return (
    <details className={styles.accordion} name={name}>
      <summary className={styles.accordion__title}>
        <span>{title} </span>{' '}
        <img src={expandArrowSrc} className={styles.accordion__expandArrow} alt="Open" />
      </summary>
      <p className={styles.accordion__description}>{description}</p>
    </details>
  );
};
