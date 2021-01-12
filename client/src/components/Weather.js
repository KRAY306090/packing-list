import React from 'react';
import { Row, Col, Card } from 'antd';


const Weather = () => {
    return (
        <Row gutter={[32, 32]}>
            <Col span={4} offset={2}>
                <Card title="01/08/2021" bordered={false}>
                    Sunny
        </Card>
            </Col>
            <Col span={4}>
                <Card title="01/09/2021" bordered={false}>
                    Partly Sunny
        </Card>
            </Col>
            <Col span={4}>
                <Card title="01/10/2021" bordered={false}>
                    Cloudy
        </Card>
            </Col>
            <Col span={4}>
                <Card title="01/11/2021" bordered={false}>
                    Sunny
        </Card>
            </Col>
            <Col span={4}>
                <Card title="01/12/2021" bordered={false}>
                    Rain
        </Card>
            </Col>
        </Row>
    )
}

export default Weather;