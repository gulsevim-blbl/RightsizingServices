import React, { useState } from 'react';
import { Anchor } from 'antd';
import "./tabs.css"
import FilterBar from './FilterBar';
import ExecutiveSummary from './ExecutiveSummary';

const Tabs = () => {
  interface Tab {
    key: string;
    href: string;
    title: string;
  }

  const [activePanel, setActivePanel] = useState<string>('VM');

  const handlePanelChange = (href: string) => {
    const key = href.substring(1); // href değerinden "#" işaretini kaldırma
    setActivePanel(key);
  };

  return (
    <div className="tabs">
      <Anchor direction="horizontal" onClick={({ target }) => handlePanelChange((target as HTMLAnchorElement).getAttribute('href') || '')}>
        <Anchor.Link href="#VM" title="VM" />
        <Anchor.Link href="#Kubernetes" title="Kubernetes" />
        <Anchor.Link href="#SQL DB" title="SQL DB" />
      </Anchor>
      <div>
        {activePanel === 'VM' && (
          <div className="vm" id="VM">
            {/* VM içeriği */}
            <FilterBar/>
            <ExecutiveSummary/>
          </div>
        )}
        {activePanel === 'Kubernetes' && (
          <div className="kubernetes" id="Kubernetes">
            {/* Kubernetes içeriği */}
            <FilterBar/>
            <ExecutiveSummary/>
          </div>
        )}
        {activePanel === 'SQL DB' && (
          <div className="sqlDb" id="SQL DB">
            {/* SQL DB içeriği */}
            <FilterBar/>
            <ExecutiveSummary/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
