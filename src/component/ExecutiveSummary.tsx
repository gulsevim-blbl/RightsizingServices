import React from 'react';
import "./executivesummary.css";
import { Card, Col, Row } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import DonutChart from './DonutChart';

const ExecutiveSummary = () => {
  return (
    <div className='executivesummary'>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={6}>
          <Card
            title={<span className="card-title">Current Recommendations</span>}
            bordered={false}
            className="card-content1"
          >
            <DonutChart />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card
            title={<span className="card-title">Current Monthly Cost <InfoCircleOutlined /></span>}
            bordered={false}
            className="card-content2"
          >
            $30,756.33
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card
            title={<span className="card-title">Projected Monthly Cost <InfoCircleOutlined /></span>}
            bordered={false}
            className="card-content3"
          >
            $12,586.23
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card
            title={<span className="card-title">Projected Monthly Savings <InfoCircleOutlined /></span>}
            bordered={false}
            className="card-content4"
          >
            $18,170.83
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ExecutiveSummary;
