import React, { useState, useEffect } from 'react';
import { Divider, Table as AntdTable } from 'antd';
import type { TableColumnsType } from 'antd';
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
  {
    title: 'DB Name',
    dataIndex: 'dbname',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'DB ID',
    dataIndex: 'dbid',
  },
  {
    title: 'Type',
    dataIndex: 'type',
  },
  {
    title: 'Subscription',
    dataIndex: 'subscription',
  },
  {
    title: 'DTU Avg',
    dataIndex: 'dtuAvg',
  },
  {
    title: 'Storage Avg',
    dataIndex: 'storageAvg',
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
    title: 'Projected Savings',
    dataIndex: 'projectedSavings',
  },
  {
    title: 'Recommendation',
    dataIndex: 'recommendation',
  },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.dbname === 'Disabled User', // Column configuration not to be checked
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
        pagination={false} // Sayfalandırmayı devre dışı bırak
        scroll={{ y: 180 }} // Dikey kaydırma özelliği ekle, yükseklik 300px olarak ayarlandı
      />
    </div>
  );
};

export default Table;
