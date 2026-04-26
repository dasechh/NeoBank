import styles from './Tabs.module.scss';
import { useState } from 'react';
import { Button, Divider } from '@/components';

interface ITabsChildren {
  title: string;
  component: React.ComponentType<any>;
  id: number;
  props?: Record<string, unknown>;
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
