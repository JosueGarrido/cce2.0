import React from 'react';
import ArtistMenuDashboard from "../components/ArtistMenuDashboard";
import {Divider, Row, Col, Layout, Typography, Menu, Skeleton, Card, Button} from 'antd';
import {SettingOutlined, ShoppingOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";
import Routes from "../constants/routes";
import QuestionsList from "../components/QuestionsList";

const { Title } = Typography;
const { SubMenu } = Menu;
const {  Content, Sider } = Layout;

const ArtistQuestionsDashboard = () => (
    <>
        <Row>
            <ArtistMenuDashboard/>

            <Col span={ 18 } >

                <Content style={{ margin: '2px 18px 0' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
 <Col>

     <Title style={ { marginTop:15, textAlign: 'center' } }>Preguntas</Title>
                        <Col>


                            <QuestionsList/>
                        </Col>
 </Col>
                    </div>
                </Content>
            </Col>


        </Row>

    </>
);

export default ArtistQuestionsDashboard;