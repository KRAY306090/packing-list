import React from 'react';
import { List } from 'antd';

const data = [
    {
        title: "Cancun"
    },
    {
        title: "Family Vacation"
    },
    {
        title: "Colorado"
    },
    {
        title: "Carla's Wedding"
    }
]

const TripList = () => {
    return(
        <List
            className="site-layout-content"
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        title={item.title}
                        description="Trip Date Goes Here"
                    />
                </List.Item>
            )}
        />
    );
}

export default TripList;