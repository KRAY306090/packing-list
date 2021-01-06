import React from 'react';
import TripList from '../components/TripList';
import { Layout, Typography } from 'antd';
import Navigation from '../components/Navigation';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const Dashboard = () => {
    return (
        <Layout className="layout">
            <Header>
                <Navigation></Navigation>
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