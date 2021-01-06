import React from 'react';

import { Menu } from 'antd';

const Navigation = () => {
    return (
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" as='a' href='/dashboard'>Trips</Menu.Item>
            <Menu.Item key="2" as='a' href='/archive'>Archives</Menu.Item>
            <Menu.Item key="3">Logout</Menu.Item>
        </Menu>
    );
}

export default Navigation;