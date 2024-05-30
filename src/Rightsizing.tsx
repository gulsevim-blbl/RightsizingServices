import React from 'react';
import './rightsizing.css'; 
import Brdcumb from './component/Brdcumb';
import ActionsButton from './component/Action';
import { InfoCircleOutlined } from '@ant-design/icons';
import Tabs from './component/Tabs';
const Rightsizing = () => {
  return (
    <div className='azuresqldefault'>
        <div className="container">
             <Brdcumb/>
            <ActionsButton/>
        </div>
        <div className="title">
            <h1>Rightsizing</h1>
            <div className="lastUpdated">
                Last Updated: 11/17/2022-5:00 PM <InfoCircleOutlined  style={{ marginLeft: '5px' }} />
            </div>
        </div>
        <div className="tabs">
          <Tabs/>
        </div>
    </div>
  );
};

export default Rightsizing;
