import React from 'react'
import "./datatable.css"
import BulkActions from './BulkActions'
import Table from './Table'
const DataTable = () => {
  return (
    <div className='datatable'>
      <div className="title">
        <h1>SQL DB Recommendations</h1>
      </div>
      <BulkActions/>
      <Table/>
    </div>
  )
}

export default DataTable
