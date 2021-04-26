import React from 'react';
import '../styles/InfoPages.css'
import ArtistMenuDashboard from "../components/ArtistMenuDashboard";
import { Divider, Row, Col, Layout, Typography } from 'antd';
import {SettingOutlined, ShoppingOutlined} from '@ant-design/icons';
import Routes from "../constants/routes";
import HowBuy from '../images/ImgPages/comprar-imagen.png';
import letraComprar from '../images/ImgPages/comprar-letras.png';
import logoVertical from '../images/logoVertical.png';
const { Title } = Typography;
const {  Content, Sider } = Layout;
const Header = Layout.Header;

const HowToBuy = props => {
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
                                <img className='logoPages' src={letraComprar}/>
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

            <img src={HowBuy} className="imagesPageHB"/>

            <div className="imgPage">
                <Row >
                    <Col span={2}>
                    </Col>

                    <Col span={10}><br/><br/><br/><br/>
                        <h1 className="titlePageInfo">
                            Compra arte o artesanías y contribuye con miles de creadores ¡Regístrate gratis!
                        </h1>
                    </Col>

                    <Col span={10}><br/><br/><br/><br/><br/><br/>
                        <p className="text">
                            Para comprar a través de Wasi Wallpay crea una cuenta personal de comprador, sin costo.  Llena los campos solicitados de forma correcta y verídica, luego espera la confirmación enviada a tu correo electrónico. Una vez registrado, encuentra el producto que deseas y acuerda con el vendedor la entrega y el pago. Recuerda que los datos de las contrapartes se revelarán mutuamente, elevando los niveles de seguridad y confiabilidad al momento de la compra-venta. Finalmente, considera tu grado de reputación dentro de la plataforma, serás calificado y comentado por tus vendedores en cada transacción realizada.
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

export default HowToBuy;
