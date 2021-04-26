import React from 'react';
import '../styles/InfoPages.css';
import ArtistMenuDashboard from "../components/ArtistMenuDashboard";
import { Divider, Row, Col, Layout, Typography } from 'antd';
import {SettingOutlined, ShoppingOutlined} from '@ant-design/icons';
import Routes from "../constants/routes";
import HowSale from '../images/ImgPages/vender-imagen.png';
import letraVender from '../images/ImgPages/vender-letras.png';
import logoVertical from '../images/logoVertical.png';
const { Title } = Typography;
const {  Content, Sider } = Layout;

const Header = Layout.Header;

const HowToSale = props => {
    return(
        <>

            <Row type='flex' justify='center' className='header-wrapper' style={{position:"relative"}}>
                <Col span={24}>
                    <Header className='headerPage'>
                        <Row type='flex' justify='space-between' align='bottom'>


                            <Col span={7} align='left' className='main-menu'>


                            </Col>
                            <Col span={10} align='center'>
                                <a href={Routes.HOME}>
                                    <img className='logoPages' src={letraVender}/>
                                </a>
                            </Col>



                            <Col span={1}>

                            </Col>
                            <Col span={3}>
                                <nav>
                                    <ul>
                                        <li><a href="#"> <i className="down"></i></a>

                                            <ul style={{textAlign:"center"}}>
                                                <li><a href="#">Categorias</a></li>
                                                <li><a href="#">Artistas</a></li>
                                                <li><a href="#">Comprar</a></li>
                                                <li><a href="#">Vender</a></li>
                                            </ul>
                                        </li>

                                    </ul>
                                </nav>
                            </Col>
                            <Col span={3}>
                                <a href={Routes.HOME}>
                                <img src={logoVertical} className='logoPages'/>
                                </a>
                            </Col>



                        </Row>

                    </Header>

                </Col>

            </Row>
            <Content className="margin">
                <img src={HowSale} className="imagesPageHB"/>

                <div className="imgPage">
                    <Row >
                        <Col span={2}>
                        </Col>

                        <Col span={11}><br/><br/><br/><br/>
                            <h1 className="titlePageInfo">
                                Vende tu arte o artesanías sin intermediarios, la ganancia completa es para ti ¡Regístrate gratis!
                            </h1>
                        </Col>

                        <Col span={9}><br/><br/><br/><br/><br/><br/>
                            <p className="text">
                                Para vender a través de Wasi Wallpay crea una cuenta personal de vendedor, sin costo.  Culmina de forma correcta y con información verídica el registro solicitado, luego espera la activación de tu perfil desde tu correo electrónico.  Una vez aprobado y dentro de la plataforma, publica tus obras de arte o artesanías y brinda la mejor información de tu producto, según las categorías ofrecidas. Acuerda el pago y la entrega de la mercancía con tu comprador. Recuerda que los datos de las contrapartes se compartirán mutuamente, elevando los niveles de seguridad y confiabilidad al momento de la compra-venta. Finalmente, considera tu grado de reputación dentro de Wasi Wallpay, serás calificado por tus compradores en cada venta realizada.
                            </p>

                            <div style={{textAlign:'right'}}><br/><br/><br/>
                                <a href={Routes.REGISTER} >
                                    <button type="button" className="btn-verMas" > REGISTRATE GRATIS</button>
                                </a>

                            </div><br/><br/><br/><br/>

                        </Col>

                        <Col span={2}>
                        </Col>
                    </Row>


                </div>
            </Content>


        </>
    );

};

export default HowToSale;
