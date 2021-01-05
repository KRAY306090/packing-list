import React from 'react';
import { Layout, Menu, Typography, Checkbox, List } from 'antd';
import Meta from 'antd/lib/card/Meta';

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
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">Trips</Menu.Item>
                    <Menu.Item key="2">Archives</Menu.Item>
                    <Menu.Item key="3">Logout</Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Title className="mainTitle" level={2}>Cancun</Title>
                
                <div className="site-layout-content">
                    <Title level={3}>Clothing</Title>
                    <List
                        size="small"
                        dataSource={data}
                        renderItem={item => <List.Item><Checkbox>{item}</Checkbox></List.Item>}
                    />
                </div>
                <div className="site-layout-content">
                    <Title level={3}>Toiletries</Title>
                    <List
                        size="small"
                        dataSource={data}
                        renderItem={item => <List.Item><Checkbox>{item}</Checkbox></List.Item>}
                    />
                </div>
                <div className="site-layout-content">
                    <Title level={3}>Electronics</Title>
                    <List
                        size="small"
                        dataSource={data}
                        renderItem={item => <List.Item><Checkbox>{item}</Checkbox></List.Item>}
                    />
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>K E N D A Design ©2021</Footer>
        </Layout>
    );
};

export default SingleTrip;