import React, { useState } from 'react';
import { Anchor } from 'antd';
import "./tabs.css";
import FilterBar from './FilterBar';
import ExecutiveSummary from './ExecutiveSummary';
import DataTable from './DataTable';

const Tabs = ({ onTabChange }: { onTabChange: (tab: string) => void }) => {
  const [activePanel, setActivePanel] = useState<string>('VM');

  const handlePanelChange = (href: string) => {
    const key = href.substring(1);
    setActivePanel(key);
    onTabChange(key);
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
            {/* VM content */}
            <FilterBar />
            <ExecutiveSummary />
            <DataTable activePanel={activePanel} />
          </div>
        )}
        {activePanel === 'Kubernetes' && (
          <div className="kubernetes" id="Kubernetes">
            {/* Kubernetes content */}
            <FilterBar />
            <ExecutiveSummary />
            <DataTable activePanel={activePanel} />
          </div>
        )}
        {activePanel === 'SQL DB' && (
          <div className="sqlDb" id="SQL DB">
            {/* SQL DB content */}
            <FilterBar />
            <ExecutiveSummary />
            <DataTable activePanel={activePanel} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
