import { Fragment, useState } from 'react';
import type TabsProps from './types';

export default function Tabs({ tabs }: TabsProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div data-testid="tabs">
      <menu>
        {tabs.map((tab, index) => (
          <button
            data-testid="tabs-tab-head"
            key={`tabs-tab-head-${tab.title}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </menu>
      <Fragment key={`tabs-tab-content-${tabs[activeTab].title}`}>
        {tabs[activeTab].content}
      </Fragment>
    </div>
  );
}
