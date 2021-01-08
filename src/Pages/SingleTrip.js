import React from 'react';
import { Layout, Typography, Checkbox, List, Row, Col } from 'antd';

import Navigation from '../components/Navigation';
import Weather from '../components/Weather';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const data = [
    '5 T-shirts',
    '4 Long Pants',
    '2 dresses',
    '5 pairs of socks',
    '6 undergarments',
];

const SingleTrip = () => {
    return (
        <Layout className="layout">
            <Header>
                <Navigation></Navigation>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Title className="mainTitle" level={2}>Cancun</Title>
                    <Weather></Weather>
                <Row gutter={[32, 32]}>
                    <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                        <div className="site-layout-content">
                            <Title level={3}>Clothing</Title>
                            <List
                                size="small"
                                dataSource={data}
                                renderItem={item => <List.Item><Checkbox>{item}</Checkbox></List.Item>}
                            />
                        </div>
                    </Col>
                    <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                        <div className="site-layout-content">
                            <Title level={3}>Toiletries</Title>
                            <List
                                size="small"
                                dataSource={data}
                                renderItem={item => <List.Item><Checkbox>{item}</Checkbox></List.Item>}
                            />
                        </div>
                    </Col>
                </Row>
                <Row gutter={[32, 32]}>
                    <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                        <div className="site-layout-content">
                            <Title level={3}>Electronics</Title>
                            <List
                                size="small"
                                dataSource={data}
                                renderItem={item => <List.Item><Checkbox>{item}</Checkbox></List.Item>}
                            />
                        </div>
                    </Col>
                    <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                        <div className="site-layout-content">
                            <Title level={3}>Miscillaneous</Title>
                            <List
                                size="small"
                                dataSource={data}
                                renderItem={item => <List.Item><Checkbox>{item}</Checkbox></List.Item>}
                            />
                        </div>
                    </Col>
                </Row>
            </Content>
            <Footer style={{ textAlign: 'center' }}>K E N D A Design ©2021</Footer>
        </Layout>
    );
};

export default SingleTrip;