import { Fragment, useState } from 'react';
import type TabsProps from './types';

export default function Tabs({ tabs }: TabsProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div data-testid="tabs">
      <menu className="flex flex-row border-b border-yellow mb-8">
        {tabs.map((tab, index) => (
          <button
            data-testid="tabs-tab-head"
            className={generateTabHeadClass(activeTab === index)}
            key={`tabs-tab-head-${index}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </menu>
      <Fragment key={`tabs-tab-content-${activeTab}`}>
        {tabs[activeTab].content}
      </Fragment>
    </div>
  );
}

function generateTabHeadClass(isActive: boolean) {
  if (isActive) {
    return `${baseTabHeadClass} bg-yellow text-black`;
  }
  return `${baseTabHeadClass} cursor-pointer`;
}

const baseTabHeadClass = 'flex-1 p-2';
