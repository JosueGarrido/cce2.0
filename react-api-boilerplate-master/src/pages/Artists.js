import React from 'react';
import ArtistMenuDashboard from "../components/ArtistMenuDashboard";
import { Divider, Row, Col, Layout, Typography } from 'antd';
import {SettingOutlined, ShoppingOutlined} from '@ant-design/icons';
import SellList1 from "../components/SellList1";
import ArtistsList from "../components/ArtistsList";
import Header2 from '../components/Header2';
const { Title } = Typography;
const {  Content, Sider } = Layout;


const Artists = () => (
    <>
        <Header2/>

        <Row>
            <ArtistMenuDashboard/>

            <Col span={ 18 } >

                <Content style={{ margin: '2px 18px 0' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>

                        <Col>
                            <Title style={ { marginTop:15, textAlign: 'center' } }>Artistas</Title>

                            <Col>
                                <ArtistsList/>
                            </Col>
                        </Col>

                    </div>
                </Content>
            </Col>


        </Row>

    </>
);

export default Artists;
