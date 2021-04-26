import React from 'react';
import { Divider, Row, Col, Layout, Typography, Tabs } from 'antd';
import {SettingOutlined, ShoppingOutlined} from '@ant-design/icons';
import { Line } from '@ant-design/charts';

const { Title, Text } = Typography;
const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}

const data = [
    { year: '1991', value1: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
];

const config = {
    data,
    xField: 'year',
    yField: 'value',
    point: {
        size: 5,
        shape: 'diamond',
    },
    label: {
        style: {
            fill: '#c32a98',
        },
    },
};


const GraphicsSales = () => (
    <>
        <Tabs onChange={callback} type="card">
            <TabPane tab={
                <>
                <Text>Ventas Brutas</Text>
                <br/>
                <Title level={4}> U$S 0</Title>
                </>
            } key="1">
                <Line style={{height: 400}} {...config} />
            </TabPane>

            <TabPane tab={
                <>
                    <Text>Cantidad de Ventas</Text>
                    <br/>
                    <Title level={4}>0</Title>
                </>
            } key="2">
                <Line style={{height: 400}} {...config} />
            </TabPane>

            <TabPane tab={
                <>
                    <Text>Unidades Vendidas</Text>
                    <br/>
                    <Title level={4}> U$S 0</Title>
                </>
            } key="3">
                <Line style={{height: 400}} {...config} />
            </TabPane>

            <TabPane tab={
                <>
                    <Text>Precio promedio</Text>
                    <br/>
                    <Title level={4}> U$S 0</Title>
                </>
            } key="4">
                <Line style={{height: 400}} {...config} />
            </TabPane>
        </Tabs>



    </>
);

export default  GraphicsSales;

