import React from 'react';
import { Button, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import "./action.css"

const menu = (
  <Menu>
    <Menu.Item key="1">Action 1</Menu.Item>
    <Menu.Item key="2">Action 2</Menu.Item>
    <Menu.Item key="3">Action 3</Menu.Item>
  </Menu>
);

const ActionsButton = () => {
  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <Button className="custom-button">
        ACTIONS <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default ActionsButton;
