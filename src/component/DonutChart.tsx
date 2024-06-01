import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import './donutchart.css'; 

const DonutChart = () => {
  return (
    <div className='donutchart'> 
     <PieChart
  series={[
    {
      data: [
        { id: 0, value: 5, label: 'Upsize', color: '#EFA231' },
        { id: 1, value: 30, label: 'Terminate', color: '#E12200' },
        { id: 2, value: 20, label: 'Downsize', color: '#4E56B8' },
      ],
      innerRadius: 35
    },
  ]}
  width={250}
  height={100}
/>
    </div>
  );
};

export default DonutChart;
