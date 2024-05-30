import React from 'react'
import "./brdcumb.css"
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom'; 

const Brdcumb = () => {
  return (
    <div className='brdcrumb'>
    <Breadcrumb separator=">">
        <Breadcrumb.Item className="custom-breadcrumb">
            <Link to="/recommendations">Recommendations</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item className="custom-breadcrumb">
            <Link to="/rightsizing">Rightsizing</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>SQL DB</Breadcrumb.Item>
        
    </Breadcrumb>
   
</div>
  )
}

export default Brdcumb
