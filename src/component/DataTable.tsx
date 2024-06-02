import React from 'react';
import "./datatable.css";
import BulkActions from './BulkActions';
import Table from './Table';

interface DataTableProps {
  activePanel: string;
}

const DataTable: React.FC<DataTableProps> = ({ activePanel }) => {
  const getTitle = () => {
    switch(activePanel) {
      case 'VM':
        return 'VM Recommendations';
      case 'Kubernetes':
        return 'Kubernetes Recommendations';
      case 'SQL DB':
        return 'SQL DB Recommendations';
      default:
        return '';
    }
  };

  return (
    <div className='datatable'>
      <div className="title">
        <h1>{getTitle()}</h1>
      </div>
      <BulkActions />
      <Table />
    </div>
  );
};

export default DataTable;
