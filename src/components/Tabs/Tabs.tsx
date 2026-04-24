import styles from './Tabs.module.scss';
import { useState } from 'react';
import { Button, CardBenefits } from '@/components';

interface ITabsChildren {
  title: string;
  content: React.ReactNode;
  id: number;
}

const tabsChildren: ITabsChildren[] = [
  {
    title: 'About card',
    content: <CardBenefits />,
    id: 0,
  },
  {
    title: 'Rates and conditions',
    content: <div>Support Content 3</div>,
    id: 1,
  },
  {
    title: 'Cashback',
    content: <div>Support Content 4</div>,
    id: 2,
  },
  {
    title: 'FAQ',
    content: <div>Support Content 5</div>,
    id: 3,
  },
];

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState<number>(tabsChildren[0].id);

  return (
    <section className={styles.tabs}>
      <div className={styles.tabs__list}>
        {tabsChildren.map((tab) => {
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
      <div className={styles.tabs__content}>
        {tabsChildren.find((tab) => tab.id === activeTab)?.content}
      </div>
    </section>
  );
};
