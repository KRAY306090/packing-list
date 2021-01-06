import React from 'react';
import { Layout } from 'antd';

const { Content, Sider } = Layout;

const Entry = () => {
    return (
            <Layout>
                <Layout>
                    <Content className="entry-background"></Content>
                </Layout>
                <Sider></Sider>
            </Layout>
    );
}

export default Entry;