import React from 'react'
import { Button, Dropdown, Menu, Space } from 'antd';
import { DownOutlined , DownloadOutlined } from '@ant-design/icons';
import { SmileOutlined  } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Input } from 'antd';
import "./bulkactions.css"

const menu = (
    <Menu>
      <Menu.Item key="1">Action 1</Menu.Item>
      <Menu.Item key="2">Action 2</Menu.Item>
      <Menu.Item key="3">Action 3</Menu.Item>
    </Menu>
  );
  
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

const BulkActions = () => {
    return (
      <div className='BulkActions'>
        <Dropdown overlay={menu} trigger={['click']}>
          <Button className="buldactions-button">
            Bulk Actions <DownOutlined />
          </Button>
        </Dropdown>
        <Button className="export-button">
            <DownloadOutlined /> EXPORT 
      </Button>
      <div className="groupby">
        <p>Group by</p>
      </div>
      <div className="text">
            <Dropdown menu={{ items }}>
                <a className='dropdown-link' onClick={(e) => e.preventDefault()}>
                <Space>
                  None <DownOutlined />
               </Space>
                </a>
            </Dropdown>
      </div>
      <div className="input">
        <Input placeholder="Search" />
      </div>
    </div> 
    );
}

export default BulkActions
