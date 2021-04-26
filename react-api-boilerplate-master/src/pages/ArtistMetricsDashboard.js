import React from 'react';
import ArtistMenuDashboard from "../components/ArtistMenuDashboard";
import { Divider, Row, Col, Layout, Typography } from 'antd';
import {SettingOutlined, ShoppingOutlined} from '@ant-design/icons';
import GraphicsSales from '../components/GraphicsSales';
import { Line } from '@ant-design/charts';

const { Title } = Typography;
const {  Content, Sider } = Layout;



const ArtistMetricsDashboard = () => (
    <>
        <Row>
            <ArtistMenuDashboard/>

            <Col span={ 18 } >

                <Content style={{ margin: '2px 18px 0' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>

                        <Title style={ { marginTop:15, textAlign: 'center' } }>Métricas</Title>
                        <GraphicsSales />
                    </div>
                </Content>
            </Col>


        </Row>

    </>
);

export default ArtistMetricsDashboard;

