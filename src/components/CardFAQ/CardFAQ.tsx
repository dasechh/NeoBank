import styles from './CardFAQ.module.scss';
import { Accordion } from '@/components';

interface IFAQAccordion {
  title: string;
  description: string;
  id: number;
}

interface IFAQProps {
  title: string;
  id: number;
  accordionsData: IFAQAccordion[];
}

export const CardFAQ = ({ data }: { data: IFAQProps[] }) => {
  return (
    <>
      {data.map((section) => (
        <article className={styles.FAQ} key={section.id}>
          <h3 className={styles.FAQ__heading}>{section.title}</h3>
          {section.accordionsData.map((item) => {
            return (
              <Accordion
                title={item.title}
                description={item.description}
                key={item.id}
                name="FAQAccordion"
              />
            );
          })}
        </article>
      ))}
    </>
  );
};
