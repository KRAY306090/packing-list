import React from 'react';
import TripList from '../components/TripList';
import { Layout, Menu, Typography } from 'antd';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const Dashboard = () => {
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
                <Title level={2}>My Trips</Title>
                <TripList />
            </Content>
            <Footer style={{ textAlign: 'center' }}>K E N D A Design ©2021</Footer>
        </Layout>
    );
}

export default Dashboard;