import React from 'react';
import ClientMenuDashboard from "../components/ClientMenuDashboard";
import {Divider, Row, Col, Layout, Typography, } from 'antd';
import {LoadingOutlined, LogoutOutlined, SettingOutlined, ShoppingOutlined} from '@ant-design/icons';
import {useAuth} from "../providers/Auth";
import Routes from "../constants/routes";

const { Title, Link } = Typography;
const {  Content, Sider } = Layout;


const ClientResumeDashboard = () => {

    const {currentUser} = useAuth();


    return (
        <>
            <Row>
                <ClientMenuDashboard/>

                <Col span={18}>

                    <Content style={{margin: '2px 18px 0'}}>
                        <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>

                            <Col>
                                <Title style={{marginTop: 15, textAlign: 'center'}}>Bienvenido a tu cuenta {currentUser && currentUser.name}</Title>

                                <img alt={ currentUser && currentUser.name }
                                     class="image-center"
                                     height={200}
                                     width={200}
                                     src={ `http://localhost:8000/storage/${ currentUser && currentUser.profile_picture }` } />

                                <Title style={{marginTop: 15, textAlign: 'center'}} type="secondary" level={3}>RESUMEN</Title>
                                <Row>
                                    <Col span={ 8 }>
                                        <Title style={{marginTop: 15, textAlign: 'center'}}  level={4}>Responde a tus compradores</Title>
                                        <Link href={ Routes.CLIENT_QUESTIONS_DASHBOARD } className='artist-questions-dashboard'>
                                            Ver Preguntas
                                        </Link>
                                    </Col>
                                    <Col span={ 8 } >
                                        <Title style={{marginTop: 15, textAlign: 'center'}}  level={4}>Ventas</Title>
                                        <Link href={ Routes.CLIENT_BUY_DASHBOARD } className='artist-sell-dashboard'>
                                            Ver ventas
                                        </Link>
                                    </Col>
                                    <Col span={ 8 } >
                                        <Title style={{marginTop: 15, textAlign: 'center'}}  level={4}>Reputación</Title>
                                        <Link href={ Routes.CLIENT_REPUTATION_DASHBOARD } className='artist-metrics-dashboard'>
                                            Ver más métricas
                                        </Link>
                                    </Col>

                                </Row>
                            </Col>
                        </div>
                    </Content>
                </Col>
            </Row>

        </>
    );
};

export default ClientResumeDashboard;

