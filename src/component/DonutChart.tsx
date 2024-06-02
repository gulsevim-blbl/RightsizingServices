import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import "./donutchart.css"
const DonutChart = () => {
  const data = {
    series: [10, 70, 60],
    options: {
      chart: {
        type: 'donut' as const, 
      },
      labels: ['Upsize', 'Downsize', 'Terminate'],
      colors: ['#EFA231', '#4E56B8', '#E12200'],
      dataLabels: {
        enabled: false, // Yüzde değerleri 
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                show: true,
              },
              value: {
                show: true, // Değerlerin görünmesi
              },
            },
          },
        },
      },
    } as ApexOptions, // Tür dönüşümü eklenmiştir
  };

  return (
    <div className='donutchart'>
      <Chart options={data.options} series={data.series} type="donut"  />
    </div>
  );
};

export default DonutChart;
