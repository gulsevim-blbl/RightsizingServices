import React, { useState } from 'react';
import './rightsizing.css'; 
import Brdcumb from './component/Brdcumb';
import ActionsButton from './component/Action';
import { InfoCircleOutlined } from '@ant-design/icons';
import Tabs from './component/Tabs';

const Rightsizing = () => {

  const [currentTab, setCurrentTab] = useState<string>('VM');

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
  };

  return (
    <div className='azuresqldefault'>
        <div className="container">
            <Brdcumb currentTab={currentTab} />
            <ActionsButton/>
        </div>
        <div className="title">
            <h1>Rightsizing</h1>
            <div className="lastUpdated">
                Last Updated: 11/17/2022-5:00 PM <InfoCircleOutlined  style={{ marginLeft: '5px' }} />
            </div>
        </div>
        <div className="tabs">
            <Tabs onTabChange={handleTabChange} />
        </div>
    </div>
  );
};

export default Rightsizing;
