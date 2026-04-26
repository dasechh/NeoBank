import styles from './CardFAQ.module.scss';
import { Accordion } from '@/components';

export interface IFAQAccordion {
  id?: number | string;
  title: string;
  description: string;
}

export interface IFAQProps {
  title: string;
  accordionsData: IFAQAccordion[];
  id?: number | string;
}

export const CardFAQ = ({ data }: { data: IFAQProps[] }) => {
  return (
    <>
      {data.map((section, index) => (
        <section className={styles.FAQ} key={section.id || index}>
          <h3 className={styles.FAQ__heading}>{section.title}</h3>
          {section.accordionsData.map((item, index) => {
            const id: string = `${section.id}-${item.id ?? index}`;
            return (
              <Accordion
                title={item.title}
                description={item.description}
                key={id}
                name="FAQAccordion"
              />
            );
          })}
        </section>
      ))}
    </>
  );
};
