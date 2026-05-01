import styles from './Tabs.module.scss';
import { useState, type ComponentProps, type ElementType } from 'react';
import { Button, Divider } from '@/components';

export interface ITabsChildren<T extends ElementType = ElementType> {
  title: string;
  component: T;
  id: number;
  props: ComponentProps<T>;
}

export const Tabs = ({ data }: { data: ITabsChildren[] }) => {
  const [activeTab, setActiveTab] = useState<number>(data[0].id);
  const active = data.find((t) => t.id === activeTab);
  if (!active) return null;

  const Component = active.component;

  return (
    <section className={styles.tabs}>
      <div className={styles.tabs__list}>
        {data.map((tab) => {
          return (
            <Button
              key={tab.id}
              variant="tab"
              data-state={activeTab === tab.id ? 'active' : 'inactive'}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </Button>
          );
        })}
      </div>
      <Divider />
      <div className={styles.tabs__content}>
        <Component {...active.props} />
      </div>
    </section>
  );
};
