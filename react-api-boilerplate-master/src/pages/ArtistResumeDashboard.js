import React from 'react';
import ArtistMenuDashboard from "../components/ArtistMenuDashboard";
import {Divider, Row, Col, Layout, Typography, } from 'antd';
import {LoadingOutlined, LogoutOutlined, SettingOutlined, ShoppingOutlined} from '@ant-design/icons';
import {useAuth} from "../providers/Auth";
import Routes from "../constants/routes";

const { Title, Link } = Typography;
const {  Content, Sider } = Layout;


const ArtistResumeDashboard = () => {

    const {currentUser} = useAuth();


    return (
    <>
        <Row>
            <ArtistMenuDashboard/>

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
                                            <Link href={ Routes.ARTIST_QUESTIONS_DASHBOARD } className='artist-questions-dashboard'>
                                                Ver Preguntas
                                            </Link>
                                    <Title style={{marginTop: 15, textAlign: 'center'}}  level={4}>Publicaciones</Title>
                                        <Link href={ Routes.ARTIST_PUBLICATIONS_DASHBOARD } className='artist-publications-dashboard'>
                                            Ver todos los productos
                                        </Link>
                                    </Col>
                                    <Col span={ 8 } >
                                        <Title style={{marginTop: 15, textAlign: 'center'}}  level={4}>Ventas</Title>
                                        <Link href={ Routes.ARTIST_SELL_DASHBOARD } className='artist-sell-dashboard'>
                                            Ver ventas
                                        </Link>
                                    </Col>
                                    <Col span={ 8 } >
                                        <Title style={{marginTop: 15, textAlign: 'center'}}  level={4}>Métricas de ventas</Title>
                                        <Link href={ Routes.ARTIST_METRICS_DASHBOARD } className='artist-metrics-dashboard'>
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

export default ArtistResumeDashboard;

