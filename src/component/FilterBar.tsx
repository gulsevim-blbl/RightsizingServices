import React from 'react'
import "./filterbar.css"
import { Button } from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import { DownOutlined, SmileOutlined, InfoCircleOutlined  } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';



const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item (disabled)
        </a>
      ),
      icon: <SmileOutlined />,
      disabled: true,
    },
    {
      key: '3',
      danger: true,
      label: 'a danger item',
    },
  ];
  

const FilterBar = () => {
  return (
    <div className='filterbar'>
       <Button className="filter-button">
             <FilterOutlined />FILTERS 
      </Button>
      <div className="costtype">
            <p>Cost Type <InfoCircleOutlined/> </p>  
            <Dropdown menu={{ items }}>
                <a className='dropdown-link' onClick={(e) => e.preventDefault()}>
                <Space>
                Cost <DownOutlined />
               </Space>
                </a>
            </Dropdown>
      </div>
      <div className="purchasemodel">
            <p>Purchase Model <InfoCircleOutlined/> </p>  
            <Dropdown menu={{ items }}>
                <a className='dropdown-link' onClick={(e) => e.preventDefault()}>
                <Space>
                DTU <DownOutlined />
               </Space>
                </a>
            </Dropdown>
      </div>
      <div className="efficiencytarget">
            <p>Efficiency Target <InfoCircleOutlined/> </p>  
            <Dropdown menu={{ items }}>
                <a className='dropdown-link' onClick={(e) => e.preventDefault()}>
                <Space>
                Average Metrics <DownOutlined />
               </Space>
                </a>
            </Dropdown>
      </div>  
      <div className="daterange">
            <p>Date Range <InfoCircleOutlined/> </p>  
            <Dropdown menu={{ items }}>
                <a className='dropdown-link' onClick={(e) => e.preventDefault()}>
                <Space>
                 Last 30 Days <DownOutlined />
               </Space>
                </a>
            </Dropdown>
      </div>    
      
    </div>
  )
}

export default FilterBar
