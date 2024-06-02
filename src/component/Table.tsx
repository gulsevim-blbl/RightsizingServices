import React, { useState, useEffect } from 'react';
import { Divider, Table as AntdTable } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import { CheckCircleOutlined, ArrowDownOutlined} from '@ant-design/icons';
import { MdDownloading } from "react-icons/md";
import "./table.css"; 

interface DataType {
  key: React.Key;
  dbname: string;
  dbid: string;
  type: string;
  subscription: string;
  dtuAvg: string; 
  storageAvg: string; 
  status: string;
  currentCost: string; 
  projectedCost: string; 
  projectedSavings: string; 
  recommendation: string;
}

const columns: TableColumnsType<DataType> = [
  // {
  //   title: '',
  //   key:'actions',
  //   className: 'column',
  //   render: () => <MoreOutlined style={{ cursor: 'pointer' }} />,
  // },
  {
    title: 'DB Name',
    dataIndex: 'dbname',
    render: (text: string) => <a>{text}</a>,
    filters: [
        {
          text: 'jenkins-node-deploy',
          value: 'jenkins-node-deploy',
        },
       
      ],
      onFilter: (value, record) => record.dbname.indexOf(value as string) === 0,
      className:'dbname',
  },
  {
    title: 'DB ID',
    showSorterTooltip: { target: 'full-header' },
    dataIndex: 'dbid',
    filters: [
        {
          text: 'DB-0027659c016cd356e',
          value: 'DB-0027659c016cd356e',
        },
       
      ],
      onFilter: (value, record) => record.dbname.indexOf(value as string) === 0,
  },
  {
    title: 'Type',
    showSorterTooltip: { target: 'full-header' },
    dataIndex: 'type',
    filters: [
        {
          text: 'GP',
          value: 'GP2',
        },
       
      ],
      onFilter: (value, record) => record.dbname.indexOf(value as string) === 0,
  },
  {
    title: 'Subscription',
    showSorterTooltip: { target: 'full-header' },
    dataIndex: 'subscription',
    filters: [
        {
          text: 'Subscription name',
          value: 'Subscription name',
        },
       
      ],
      onFilter: (value, record) => record.dbname.indexOf(value as string) === 0,
  },
  {
    title: 'DTU Avg',
    showSorterTooltip: { target: 'full-header' },
    dataIndex: 'dtuAvg',
    render: (text: string, record: DataType) => {
        if (['0', '2', '5', '6', '7', '8', '9'].includes(record.key.toString())) {
          return (
            <>
              <MdDownloading style={{ color: '#D42020' }} />
              <span style={{ marginLeft: '5px' }}>{text}</span>
            </>
          );
        } else if (['1', '3', '4', '10'].includes(record.key.toString())) {
          return (
            <>
              <CheckCircleOutlined style={{ color: '#62A420' }} />
              <span style={{ marginLeft: '5px' }}>{text}</span>
            </>
          );
        } else {
          return text;
        }
      }
  },
  {
    title: 'Storage Avg',
    dataIndex: 'storageAvg',
    render: (text: string, record: DataType) => {
        if (['0', '2', '5', '6', '7', '8', '9'].includes(record.key.toString())) {
          return (
            <>
              <MdDownloading style={{ color: '#D42020' }} />
              <span style={{ marginLeft: '5px' }}>{text}</span>
            </>
          );
        } else if (['1', '3', '4', '10'].includes(record.key.toString())) {
          return (
            <>
              <CheckCircleOutlined style={{ color: '#62A420' }} />
              <span style={{ marginLeft: '5px' }}>{text}</span>
            </>
          );
        } else {
          return text;
        }
      }
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
  {
    title: 'Current Cost',
    dataIndex: 'currentCost',
  },
  {
    title: 'Projected Cost',
    dataIndex: 'projectedCost',
  },
  {
    title: (
      <>
        <span style={{ marginRight: '5px' }}>Projected Savings</span>
        <ArrowDownOutlined style={{ color: '#1890ff' }} />
      </>
    ),
    dataIndex: 'projectedSavings',
    className: 'projectedSavings'
  },
  {
    title: 'Recommendation',
    dataIndex: 'recommendation',
    className: 'recommendation'
  },
];


const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.dbname === 'Disabled User', 
    name: record.dbname,
  }),
};

const Table = () => {
  const [selectionType] = useState<'checkbox' | 'radio'>('checkbox');
  const [data, setData] = useState<DataType[]>([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return (
    <div className='table'>
      <Divider />
      <AntdTable
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
        pagination={false} 
        scroll={{ y: 190 }} 
        onChange={onChange}
      />
    </div>
  );
};

export default Table;