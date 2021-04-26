import React from 'react';
import ArtistMenuDashboard from "../components/ArtistMenuDashboard";
import { Divider, Row, Col, Layout, Typography } from 'antd';
import {SettingOutlined, ShoppingOutlined} from '@ant-design/icons';
import Publications from "./Publications";
import ReputationList from "../components/ReputationList";

const { Title } = Typography;
const {  Content, Sider } = Layout;


const ArtistPublicationsDashboard = () => (
    <>
        <Row>
            <ArtistMenuDashboard/>

            <Col span={ 18 } >

                <Content style={{ margin: '2px 18px 0' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        <Col>
                            <Title style={ { marginTop:15, textAlign: 'center' } }>Publicaciones</Title>

                            <Col>
                                <Publications/>
                            </Col>
                        </Col>
                    </div>
                </Content>
            </Col>


        </Row>

    </>
);

export default ArtistPublicationsDashboard;
