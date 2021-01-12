import React from 'react';
import { Layout, Typography, Form, Input, DatePicker, Button, Select } from 'antd';
import Navigation from '../components/Navigation';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;


const NewTrip = () => {
    return (
        <Layout className="layout">
            <Header>
                <Navigation></Navigation>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Title level={2}>Create a New Packing List</Title>
                <Form
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 14 }}
                    layout='horizontal'
                >
                    <Form.Item label="Trip Name">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Trip Date">
                        <DatePicker />
                    </Form.Item>
                    <Form.Item label="Type">
                        <Select>
                            <Select.Option value="business">Business</Select.Option>
                            <Select.Option value="casual">Casual</Select.Option>
                            <Select.Option value="special">Special Occasion</Select.Option>
                            <Select.Option value='camping'>Camping</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Button>Create!</Button>
                    </Form.Item>

                </Form>
            </Content>
            <Footer style={{ textAlign: 'center' }}>K E N D A Design ©2021</Footer>
        </Layout>
    )
}

export default NewTrip;